---
title: How to Architect a SaaS MVP Without Overengineering It
description: What to get right on day one, what to leave alone, and the boring shape I reach for when a founder has a deadline and a shrinking runway.
date: 2026-11-02
tags: architecture, saas, startups
image: /assets/images/blog/saas-mvp-cover.svg
draft: false
---

A SaaS idea usually starts with a simple promise: help a certain kind of customer do something faster, cheaper, or with less frustration.

Then the architecture conversation starts. Microservices? Kubernetes? A database per customer? Event sourcing, a message broker, a search cluster, a perfectly abstracted billing module?

All fair questions. They're also a great way to spend three months building infrastructure for a product that hasn't met its first customer. And the opposite failure is just as real: an MVP so loose that customer number one means a rewrite.

So the goal isn't to build less. It's to **make the right compromises on purpose**, and to avoid paying for scale before you know what needs to scale.

## Start with the first real workflow

Before you pick a stack, get specific about version one. Not "a marketplace for businesses." More like:

- A supplier creates a store and uploads a catalog.
- A buyer browses and places an order.
- The supplier sees the order and updates its status.
- An admin steps in when the automated flow can't cope.

That list tells you more about the architecture than any technology shortlist. I like to pull three things out of it:

1. **The core workflow.** What has to work end to end for a customer to get value?
2. **The likely sources of change.** Pricing rules, onboarding, integrations, permissions, reporting. Where will you be editing every week?
3. **The cost of failure.** What happens if a request is slow, a job fails, or one customer sees another's data? The answers aren't equally bad, and your effort should follow that.

Everything else is a candidate for later.

## Sort your decisions into two piles

Every choice in the first month falls into one of two piles. Some are cheap to reverse. Some are not. Spend your care on the second pile and almost none on the first.

![Two columns of decisions. Left: hard to undo, decide now. Right: easy to change, defer.](/assets/images/blog/saas-mvp-two-piles.svg "Careful on the left. Lazy on the right.")

Swapping one queue for another takes an afternoon. Changing how you store money after a year of invoices takes a migration, a bad weekend and a few awkward emails. Same "technical decision" label, totally different price.

## The pile you can't skimp on

### Tenancy, and making the boundary real

If your product serves more than one customer account, put the owner on every row from the first migration. A shared database with a `tenant_id` on tenant-owned tables is a perfectly good MVP design.

But having the column doesn't make you tenant-safe. The real question is: **can every path to this data enforce the same boundary?**

This is the bug waiting to happen:

```sql
SELECT * FROM projects WHERE id = $1;
```

The user is logged in, the ID is valid, and nothing checks whose project it is. Change the ID in the URL and you're reading someone else's data. The safe version puts the tenant in the query, every time:

```sql
SELECT * FROM projects WHERE id = $1 AND tenant_id = $2;
```

"Every time" is the hard part. Make it difficult to forget: one scoped query helper that all code goes through, membership checked in the authorization layer, and if you're on Postgres, row-level security as a second net. It won't replace careful queries, but it turns a forgotten filter from a data leak into an empty result.

Think about uniqueness too. If project names only need to be unique within a customer, say so in the schema:

```sql
CREATE TABLE projects (
  id         uuid PRIMARY KEY,
  tenant_id  uuid NOT NULL REFERENCES tenants(id),
  name       text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (tenant_id, name)
);
```

Adding all of this in month six means touching every query you've ever written. Adding it now costs an hour.

What about a separate database per tenant? It may make sense one day, for compliance, customer-specific operations, or noisy neighbours. But it brings migrations, connection management and provisioning with it. Start with the isolation your product actually needs, and leave the door open to stronger isolation if the business asks for it.

And write the test nobody enjoys: create two tenants, create a record in one, and check that a user from the other can neither read nor change it. Happy-path tests will never catch this class of mistake.

### Money

Integers in the smallest unit, plus a currency code. Never floats. Never "we'll only ever use dollars." And decide your rounding rule once, write it down, and put it in one place. Rounding disagreements are a classic source of "why is this invoice 1 cent off" tickets.

### IDs and time

Don't expose auto-increment IDs in URLs. They leak your growth and invite guessing. Store every timestamp in UTC. These cost nothing now and a lot later.

### Auth

Use what your framework gives you, or a well-known library or service. Writing your own password reset flow is not where your startup wins.

### Duplicate events

Anything that arrives from outside, whether payment webhooks or a partner API, will eventually arrive twice. Sometimes out of order too. Record the external event ID under a unique key, in the same transaction as the work, and let the database refuse the duplicate.

```sql
CREATE TABLE webhook_events (
  provider    text NOT NULL,
  external_id text NOT NULL,
  received_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (provider, external_id)
);

-- Inside the handler's transaction:
INSERT INTO webhook_events (provider, external_id)
VALUES ($1, $2)
ON CONFLICT DO NOTHING;
-- 0 rows inserted means we've seen it already. Stop here.
```

### An audit trail

A table, or even structured log lines, of who changed what and when. The first time a customer says "I never deleted that," you'll be glad it exists.

## The pile you can ignore

Microservices, Kubernetes, a search cluster, a cache in front of everything, an event bus. Not forever. Just not yet.

None of these are bad. Each one costs something real: deployment coordination, observability, networking, more ways for a request to fail, and a chunk of your small team's attention spent on plumbing instead of product. When someone proposes one, ask:

> What problem will this solve in the next few months, and what new ways will it find to break?

If the honest answer is "we might need it later," it belongs on the roadmap, not in the first release.

## Pick the stack your team already knows

People agonise over this far too much. Rails, Django, Laravel, Next.js, Spring, any of them will carry an MVP to its first thousand customers. What decides whether you ship is how well the builders know the tool, and how easy it is to hire the next person.

Choose by familiarity and hiring pool, not by what scales to millions of users. At your size, the framework won't be the bottleneck. A team learning a new language under a deadline will be.

## The shape I start with

For most SaaS MVPs I reach for a **modular monolith**: one codebase, one deployable, one primary database, and inside it a handful of modules with clear edges.

![A browser talks to one application with accounts, catalog, orders and billing modules, backed by one PostgreSQL database, a worker, S3 and Sentry.](/assets/images/blog/saas-mvp-architecture.svg "The whole thing. If you can't sketch it on one page, it's probably too big for an MVP.")

Folder names alone don't create boundaries, though. What matters is what each module *owns*. The orders module owns order state and the rules for changing it. Billing owns billing behaviour. Other modules go through small, deliberate functions instead of reaching into each other's tables whenever it's convenient.

A monolith is not the same thing as a tangled codebase. **Deployment simplicity and internal structure are separate decisions.** You get one thing to deploy and debug, and if a module ever earns its own service, you can lift it out along a seam that already exists.

The worker in that picture isn't a separate system. It's the same codebase started with a different command. Same models, same config, same deploy.

## Isolate what you know will change

Some parts of an MVP change constantly. Pricing rules might shift every week. Onboarding will change after every customer call. An integration will behave differently depending on the vendor. Those deserve a clear seam.

Don't bury a pricing formula in a request handler or a serializer. Give it a home where it can be tested alone:

```python
def line_total_cents(unit_price_cents: int, quantity: int, discount_bps: int) -> int:
    if quantity <= 0:
        raise ValueError("quantity must be positive")
    gross = unit_price_cents * quantity
    return gross - gross * discount_bps // 10_000
```

Deliberately dull. If pricing later grows into a real rules engine, you have a clean starting point, and you haven't built an engine for rules that don't exist yet. The same goes for vendors: a thin adapter around each external API stops one provider's quirks from spreading through your core workflow.

The key word is *known*. Isolate the volatility you can already see. Don't abstract every line that might someday change.

## Postgres can do more than you think

Before adding infrastructure, ask whether your database already does the job. With PostgreSQL, it often does.

- **A job queue.** For modest volume, a jobs table plus `FOR UPDATE SKIP LOCKED` lets several workers pull work safely without stepping on each other.
- **Flexible attributes.** A `JSONB` column handles the "every customer wants a custom field" problem long enough for you to learn what they actually need.
- **Search.** Built-in full-text search is fine for a catalog or help center. You can run it for a long time before a search cluster earns its keep.

```sql
SELECT id, payload
FROM jobs
WHERE status = 'pending'
ORDER BY id
LIMIT 1
FOR UPDATE SKIP LOCKED;
```

That isn't a forever answer. At some volume you'll want a proper broker. But that volume is higher than most MVPs ever reach, and you'll see it coming because you'll be watching queue depth.

## Use an off-the-shelf back office

Every SaaS needs an internal tool to look up a customer, fix a bad record, issue a refund. Founders often plan to build one. Don't, at least at first. Use the admin your framework ships with (Django admin, Rails admin gems, Laravel Nova and so on), or a low-code tool pointed at a read replica. Lock it down, add some filters and search, and move on. Build a custom internal UI when the stock one is actually slowing someone down.

## "MVP" doesn't mean "no production discipline"

There are shortcuts that are sensible and shortcuts that quietly put the product at risk. I wouldn't skip:

- Authentication and authorization that match the real access model.
- The cross-tenant negative test from earlier.
- Database constraints for the invariants that matter.
- A repeatable deployment process.
- Backups, and a recovery path you've actually tested.
- Error reporting and enough logs to investigate a production problem.
- Basic automated tests around the core workflow.

You don't need 100% coverage. You need confidence that a customer can finish the main workflow and that nobody can see someone else's data.

My favourite early milestone is a boring one: an almost empty app, with a login page and nothing else, running in production behind CI in week one. It forces every unglamorous decision (environments, secrets, migrations, backups) while the stakes are still zero. Use a managed database with automated backups, and restore one into a scratch instance at least once. A backup you've never restored is a hope, not a backup.

## Write down when you'll revisit

What makes deferring safe is deciding in advance what would make you stop deferring. Keep a short table in the repo. Here's a starting point:

| Decision | MVP default | Revisit when |
| --- | --- | --- |
| Application shape | Modular monolith | A module has a clear need to scale or be owned separately |
| Database | One PostgreSQL database | Isolation or scale needs justify another setup |
| Tenancy | Shared schema, enforced scope | A customer or regulation demands stronger isolation |
| Background work | Jobs table or a simple queue | Queue depth stays high during normal traffic |
| Caching | None | A specific page is slow and the database is the reason |
| Infrastructure | Managed services | Cost, control or reliability needs justify owning more |

Each row has a trigger you can measure. It turns "we should probably scale this" into a decision you can actually make, and it keeps the version of you with ten customers from arguing with the version who has ten thousand.

## The architecture should earn its complexity

An MVP is a learning instrument. It should help you find out who your customers are, which workflows matter, and where the real technical pressure shows up. A simple architecture makes that learning cheaper: fewer things to operate, more room to change direction.

None of that is an excuse for careless code. It means being deliberate about what you're solving now, protecting the boundaries that matter, and letting the system get more sophisticated when the product gives you a reason.

I'd rather see a well-structured monolith serving ten happy customers than an impressive distributed system still waiting for its first. Start with the workflow, protect the data, keep deployment boring.

If you're sketching an MVP and want a second pair of eyes on the shape of it, [get in touch](/#contact). And if you disagree with any of this, say so in the comments. I'm happy to be argued out of things.
