---
title: How to Design a Reliable Background Job System with Celery and Redis
description: Retries, idempotency, acknowledgements, timeouts and queue layout. How to make Celery and Redis jobs behave when workers die and APIs time out.
date: 2026-11-02
tags: python, django, celery, redis, background-jobs
image: /assets/images/blog/celery-cover.svg
draft: false
---

Background jobs usually start with a sensible idea: get the slow stuff out of the request. Send the email, import the CSV, sync stock with a marketplace, build the report. The web request returns fast and a worker does the rest.

Then production happens. A vendor API times out. Redis restarts. A worker gets killed halfway through an import. A task finishes its work, but the confirmation never makes it back. The retry sends the same email twice, or creates the same order twice.

"We use Celery" and "our jobs are reliable" are two very different statements. Getting a task to run is the easy part. The work is in making the system behave sensibly when something fails, because something always will.

This is how I'd design it for a Django app on Celery and Redis. Most of it applies to other stacks as well.

## What "reliable" actually means

Retrying exceptions doesn't make a job system reliable. For most business workflows I want these properties:

- A failure doesn't lose the underlying business intent.
- Temporary failures get retried.
- Retrying doesn't duplicate side effects.
- A hung job doesn't hold a worker forever.
- The team can see failures.
- The system recovers after a worker or broker restart.

And one caveat that shapes everything else: **Celery and Redis don't give you exactly-once execution.** A task can run more than once. It can do all its work and then die before Celery records that it finished. The sane design assumption is *at least once*, with application code that's safe when it happens twice.

![A request flows from web app to database, Redis broker, worker and external API, with four numbered failure points.](/assets/images/blog/celery-failure-points.svg "Four places a job can go wrong. The rest of this post is mostly about these.")

## Keep the task thin

A Celery task is an execution boundary, not the home of your business logic. Keep it as a few lines that call a plain function:

```python
# tasks.py
from celery import shared_task
from .services import sync_inventory

@shared_task
def sync_inventory_task(organization_id):
    sync_inventory(organization_id)
```

The service can now be called from a management command, a test, or another workflow, none of which need a worker running. It also makes retry behaviour easier to reason about, since the retry configuration lives in one place and the logic in another.

One Django detail deserves its own warning, because it causes confusing bugs. Don't enqueue a task from inside a transaction that creates the data it needs:

```python
with transaction.atomic():
    order = Order.objects.create(...)
    process_order.delay(order.id)   # the worker may run before the commit
```

The worker can pick the message up and look for the order before the transaction has committed, and find nothing. Publish after the commit instead:

```python
with transaction.atomic():
    order = Order.objects.create(...)
    transaction.on_commit(lambda: process_order.delay(order.id))
```

Recent Celery versions (5.4 and later) also offer `process_order.delay_on_commit(order.id)`, which does the same in one line. Either way, the task shouldn't race ahead of the data it depends on.

## Retry the temporary failures, not all of them

Retries are for failures that might go away: a rate limit, a network blip, a short outage. They're pointless for bad input or a bug in your code. Those just add noise and delay the moment someone looks into them.

Celery's built-in retry options cover a lot:

```python
@shared_task(
    bind=True,
    autoretry_for=(TransientError,),
    retry_backoff=True,
    retry_backoff_max=600,
    retry_jitter=True,
    max_retries=5,
)
def sync_inventory_task(self, organization_id):
    ...
```

`retry_backoff` spaces attempts further apart each time, `retry_backoff_max` caps the wait, `retry_jitter` randomises it, and `max_retries` stops it eventually. The jitter matters more than it looks. If a marketplace API goes down and a few thousand jobs all retry on the same schedule, they hit it together the moment it comes back and knock it over again.

Notice that I retry on a custom `TransientError`, not on `requests.RequestException`. That's deliberate. `raise_for_status()` raises an `HTTPError`, which is a `RequestException`, so retrying on that class would also retry every `400` and `404`. Decide what counts as transient, close to the API call:

```python
class TransientError(Exception):
    pass

def fetch_inventory(url):
    try:
        resp = requests.get(url, timeout=(3, 20))
    except (requests.ConnectionError, requests.Timeout) as exc:
        raise TransientError from exc

    if resp.status_code in (429, 500, 502, 503, 504):
        raise TransientError(f"vendor returned {resp.status_code}")

    resp.raise_for_status()   # other 4xx: our fault, don't retry
    return resp.json()
```

And always set a timeout. Without one, a single stalled connection can pin a worker for as long as the other end feels like it, and a retry policy is useless if a failed attempt never actually fails. If a vendor sends a `Retry-After` header, honour it rather than guessing.

## Idempotency is the part I wouldn't skip

An operation is idempotent if doing it twice has the same effect as doing it once. If a job imports a marketplace order and runs twice, you don't want two orders.

The fragile version trusts the task to run once:

```python
def import_order(payload):
    Order.objects.create(external_id=payload["id"], total_cents=payload["total_cents"])
```

The safer version lets the database enforce it:

```python
class Order(models.Model):
    external_id = models.CharField(max_length=100, unique=True)
    total_cents = models.BigIntegerField()

def import_order(payload):
    order, _ = Order.objects.update_or_create(
        external_id=payload["id"],
        defaults={"total_cents": payload["total_cents"]},
    )
    return order
```

The unique constraint is the real protection. `update_or_create` is convenient, but it's the constraint that guarantees no duplicates when two workers race. Also check that overwriting an existing row is actually what the business wants.

Side effects outside your database are harder: charging a card, sending a notification, creating a resource in another system. Here you need an **idempotency key** that identifies the *intended operation*, not the Celery attempt:

```text
charge-invoice:1842
```

Every retry of that charge uses the same key. If the provider supports idempotency keys (most payment APIs do), pass it along. If not, keep a local record of the operation and its state so a retry can check what already happened before acting.

Retries without idempotency turn a temporary failure into a business problem.

## Acknowledgements and worker crashes

By default Celery acknowledges a task *before* it runs. If the worker dies mid-task, the broker already thinks the job is done, and it's gone.

![Two timelines. Early ack: a crash after the ack loses the task. Late ack: a crash before the ack means the broker delivers it again.](/assets/images/blog/celery-ack-timeline.svg "Late acknowledgement swaps 'maybe lost' for 'maybe duplicated'.")

Turning on `acks_late` acknowledges after the task finishes, so a crashed task gets redelivered. That's usually what you want for important work, and it's the reason idempotency isn't optional. A few settings travel with it:

```python
# settings.py (with config_from_object(..., namespace="CELERY"))
CELERY_TASK_ACKS_LATE = True
CELERY_TASK_REJECT_ON_WORKER_LOST = True
CELERY_WORKER_PREFETCH_MULTIPLIER = 1
CELERY_BROKER_TRANSPORT_OPTIONS = {"visibility_timeout": 6 * 60 * 60}
```

- **`task_reject_on_worker_lost`**: if a child process is killed (the OOM killer is the classic), `acks_late` alone doesn't always bring the task back. This setting does. Be aware that a task which reliably crashes its worker will now be redelivered over and over, so watch for that.
- **`worker_prefetch_multiplier = 1`**: by default a worker reserves several messages ahead of time. With long tasks, that means jobs sit reserved on a busy worker while other workers are idle.
- **`visibility_timeout`**: this one is specific to Redis. Celery treats a message as unacknowledged for a limited time, one hour by default. If a task runs longer than that, Redis hands it to another worker *while the first is still running it*. Set it above your longest task, and don't treat it as a substitute for idempotency or locking.

## Time limits are a safety net

A job that hangs quietly eats worker capacity. Celery has two limits:

```python
@shared_task(soft_time_limit=240, time_limit=300)
def process_large_import(import_id):
    ...
```

The soft limit raises `SoftTimeLimitExceeded` inside the task, so you can clean up. The hard limit kills the worker process.

Be clear about what that does and doesn't give you. Killing a process doesn't undo anything it already did. If the task called a third-party API and was killed right after, you don't know whether the provider acted on it. Same answer as before: idempotency, plus a way to reconcile state. I treat time limits as a safety net, not as a cancellation feature. Work that runs for hours should be split up instead.

## Don't import 40,000 rows in one task

A single task that downloads a file, parses it, validates every row and writes everything has a large failure surface. If it crashes at row 39,000, you start over.

Split it up:

1. Create an import record in your database.
2. Fetch and store the source file.
3. Split it into batches.
4. Process each batch as its own task.
5. Record progress and failures.
6. Mark the import complete when every batch is done.

The tasks receive small identifiers, not payloads. And the checkpoint goes **in the same transaction as the writes**, so progress is only recorded if the data really landed:

```python
@shared_task
def process_import_batch(import_id, batch_number):
    with transaction.atomic():
        batch = ImportBatch.objects.select_for_update().get(
            import_job_id=import_id, number=batch_number
        )
        if batch.status == "done":
            return                      # a redelivery, nothing to do
        persist_rows(batch)
        batch.status = "done"
        batch.save(update_fields=["status"])
```

The early return is what makes redelivery harmless. Stream or chunk the source instead of loading it all into memory, and keep transactions short so they don't hold locks longer than needed. A bit of workflow design here beats adding more workers.

## Redis is a broker, not your database

Redis is quick and Celery works well with it. But the business state of a workflow shouldn't live only in the broker. If a customer starts an import, that fact belongs in your database:

```python
class ImportJob(models.Model):
    class Status(models.TextChoices):
        PENDING = "pending"
        RUNNING = "running"
        COMPLETED = "completed"
        FAILED = "failed"

    status = models.CharField(max_length=20, choices=Status.choices, default=Status.PENDING)
    source_file = models.FileField(upload_to="imports/")
    error_message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
```

Then you can show a customer the status, retry deliberately, investigate a failure, and reconcile after an incident. Celery just delivers work.

Two Redis specifics are worth checking in your own setup:

- **Eviction.** If Redis is configured with an eviction policy like `allkeys-lru`, it can silently delete queue keys when memory fills up, and your tasks disappear with no error. For a broker, use `maxmemory-policy noeviction`. Some managed Redis offerings default to something else.
- **Persistence.** Without persistence enabled, a restart empties the queues. Turn on AOF if losing in-flight messages would hurt.

There's also a gap that `transaction.on_commit` doesn't close. The commit can succeed and the publish to the broker can still fail, so the job is never queued. Where that's unacceptable, use a **transactional outbox**: write the business change and an "outbox" row in the same transaction, and let a small dispatcher publish those rows to Celery and mark them sent once the broker confirms. The consumer must still tolerate duplicates. It's more machinery than most MVPs need, but it's the right step up when a lost job is expensive.

## Separate queues by workload

A fast email and a ten-minute report shouldn't wait in the same line. A single shared queue lets slow jobs delay the quick, user-facing ones.

![Three workloads (quick jobs, vendor syncs, reports) go to three queues, each with its own workers and concurrency.](/assets/images/blog/celery-queues.svg "Different jobs, different queues, different worker settings.")

Route tasks explicitly:

```python
task_routes = {
    "app.tasks.sync_inventory_task": {"queue": "integrations"},
    "app.tasks.generate_report": {"queue": "reports"},
}
```

And give each queue its own workers:

```bash
celery -A config worker -Q default -c 4
celery -A config worker -Q integrations -c 8
celery -A config worker -Q reports -c 2
```

Those numbers are examples, not advice. I/O-bound jobs tolerate higher concurrency. CPU-heavy ones don't. And concurrency isn't an isolated dial: every extra worker is another database connection and more pressure on a vendor's rate limit. Raising it can move the bottleneck rather than remove it.

## Monitor the queue, not just the workers

A running worker doesn't mean a healthy system. Queues can pile up while every process looks fine, or tasks can retry in a loop nobody notices until a customer writes in.

What I'd watch:

- Queue depth, per queue.
- How long the oldest job has been waiting.
- Success and failure rates, and retry counts.
- Task runtime percentiles.
- Worker restarts.
- Latency and error rate of the external APIs you call.

Queue age beats queue depth. Five hundred jobs that clear in seconds are fine. Twenty jobs where the oldest has waited an hour are not.

A caveat if you read depth straight from Redis: `LLEN integrations` counts messages waiting in the queue, but not ones a worker has already reserved (those sit in the `unacked` structure). So the number can look fine while work is stuck. The most trustworthy signal I know is a **canary task**: a trivial job sent to each queue every minute that reports how long it waited.

```python
@shared_task
def queue_canary(sent_at_iso, queue_name):
    lag = (timezone.now() - parse_datetime(sent_at_iso)).total_seconds()
    metrics.gauge("celery.queue_lag_seconds", lag, tags=[f"queue:{queue_name}"])
```

If the lag climbs, you know users are waiting, whatever the queue depth says. Keep durable job state in your database too (status, started and finished times, attempt count, a safe error summary), so you don't rely on Celery's result backend as your only record. And keep secrets and sensitive payloads out of logs.

## Mistakes I'd watch for

**Passing big objects as arguments.** Send IDs, not model instances or giant structures. Load the current state inside the task. Messages stay small, and you don't act on stale data.

**Using pickle.** JSON is the sensible serializer. Pickle can execute code when it's deserialized, so don't enable it unless you have a very good reason and a trusted environment.

**Retries as a substitute for handling errors.** Once retries run out, a permanent failure needs a visible, actionable outcome: a failed status, an alert, something a human can act on.

**Overlapping tasks.** Two syncs for the same customer may race and overwrite each other. If they must not overlap, use a lock or a state transition, and give locks an expiry. A lock that can never be released is its own outage.

**Using Celery's state as business state.** Celery knows about execution. Your database should own the status customers and workflows depend on.

**Keeping results you never read.** If nobody reads a task's return value, set `ignore_result=True` and save the storage.

## Testing the unhappy paths

Happy-path tests prove the task can work. They don't prove it behaves when things go wrong. The cases I'd write:

- Running the same task twice creates no duplicates.
- A transient error triggers a retry, and a permanent one doesn't.
- A task created inside a transaction isn't dispatched before the commit.
- A half-finished batch can resume safely.
- Concurrent runs don't break a business rule.

The first one is cheap and catches a lot:

```python
def test_import_order_is_idempotent(db):
    payload = {"id": "A-1", "total_cents": 1999}
    import_order(payload)
    import_order(payload)
    assert Order.objects.filter(external_id="A-1").count() == 1
```

For the commit-ordering one, Django's `captureOnCommitCallbacks` lets you run `on_commit` hooks inside a test. Delivery and worker-loss behaviour need a real broker, so keep a few integration tests against your actual Celery and Redis configuration.

And test the uncomfortable case on purpose: the external call succeeds, then the task dies before recording it. If the retry isn't safe, you've found a design problem while it's still cheap to fix.

## Wrapping up

Celery and Redis are a solid foundation. But reliability comes from what surrounds them: durable state in your database, retries limited to real transient failures, idempotent operations, sensible timeouts, queues split by workload, and visibility when things stall.

The biggest mindset shift is to stop treating a task as a function that runs once. It's a piece of work that can be delayed, interrupted, delivered again, or finished without the caller knowing. Design for that and the system gets much easier to run.

A small app might need only a handful of well-written tasks and a status column. A high-volume integration platform might need checkpoints, an outbox and per-vendor rate limiting. The principle is the same either way: **make failure an expected part of the workflow, not an exception the code has no plan for.**

If you're untangling a job system that's flaky in production, [get in touch](/#contact). And if you've hit a failure mode I haven't covered, tell me in the comments.
