/**
 * Service landing pages. Each page targets one search intent and links to the
 * case studies that back it up. Copy only claims what the case studies show.
 */

const services = [
  {
    slug: "python-django-development",
    summary: "Web apps, APIs and marketplaces built end to end, from MVP to scale.",
    name: "Python & Django Development",
    shortName: "Python & Django",
    title: "Python & Django Developer for Hire | Aakash Das",
    description:
      "Senior Python and Django engineer for hire. Web apps, APIs and marketplaces built end to end with React and PostgreSQL on AWS, from MVP to scale.",
    h1: "Python & Django Development for Startups and Growing Teams",
    lead:
      "I design and build production Python and Django applications end to end: data model, REST APIs, background jobs, React frontends, and deployment on AWS. Most of my client work runs on this stack, from a marketplace that helped a founder raise a seed round to a multi-marketplace ERP.",
    deliver: [
      "Greenfield MVPs built from 0 to 1, ready to demo to customers and investors",
      "Django REST APIs and third-party integrations (marketplaces, POS systems, messaging platforms)",
      "Takeover and modernization of existing Python and Django codebases, including Docker-based hosting",
      "Celery background jobs, scheduled tasks, and reliable asynchronous workflows",
      "React frontends where the product needs a rich UI",
    ],
    whenToHire: [
      "You need a senior engineer who can own a product from schema to deployment.",
      "You want an MVP in front of customers or investors without a large team.",
      "You inherited a Django codebase that is hard to change and need someone to stabilize it.",
    ],
    caseSlugs: ["tgt", "hs_sales", "tass", "sourcebox", "toredo", "trip_york"],
    faqs: [
      {
        q: "Do you work with early-stage startups?",
        a: "Yes. I delivered the complete core application for a seed-stage wholesale food marketplace from scratch, and I regularly work directly with founders and small teams.",
      },
      {
        q: "Can you take over an existing Django project?",
        a: "Yes. I have worked on legacy Python and Django codebases, improving them incrementally and moving hosting to a more modern Docker-based setup.",
      },
      {
        q: "What else is in your typical stack?",
        a: "PostgreSQL, React, Celery, Docker, and AWS. I choose the simplest reliable option for each problem rather than the newest one.",
      },
    ],
  },
  {
    slug: "react-ui-development",
    summary: "Fast, accessible React interfaces for dashboards, marketplaces and admin tools.",
    name: "React UI Development",
    shortName: "React UI",
    title: "ReactJS Developer for Hire | UI & Frontend | Aakash Das",
    description:
      "ReactJS developer for hire. Fast, accessible UIs for dashboards, marketplaces, and admin tools, built to work cleanly with your Django or REST backend.",
    h1: "React UI Development for Dashboards, Marketplaces & Web Apps",
    lead:
      "I build React interfaces that are fast, accessible, and easy to maintain, and that fit the API behind them. Because I also build the backend, screens and data contracts are designed together, which avoids rework between frontend and backend.",
    deliver: [
      "React applications for dashboards, marketplaces, ticketing, and admin tools",
      "Interactive data views and visualizations on top of REST APIs",
      "Clean component structure with modern JavaScript, semantic HTML, and Sass",
      "Performance work: Core Web Vitals, bundle size, and render efficiency",
      "Accessible, responsive layouts that work across desktop and mobile",
    ],
    whenToHire: [
      "You have a working API and need a polished, reliable frontend for it.",
      "Your existing React app is slow, inconsistent, or hard to extend.",
      "You want one engineer who can design the UI and the API behind it together.",
    ],
    caseSlugs: ["tass", "toredo", "trip_york", "interest_miner", "hs_sales"],
    faqs: [
      {
        q: "Do you only build frontends, or full-stack?",
        a: "Either. I can build just the React UI against your existing API, or own the full stack with Django and PostgreSQL behind it.",
      },
      {
        q: "Can you improve an existing React codebase?",
        a: "Yes. I start by measuring where it is slow or hard to change, then refactor incrementally instead of rewriting.",
      },
      {
        q: "Do you care about performance and accessibility?",
        a: "Yes. I use semantic HTML, test responsive behaviour, and optimize for Core Web Vitals as part of normal delivery.",
      },
    ],
  },
  {
    slug: "backend-architecture-consulting",
    summary: "System design, API and data-model reviews, and scaling plans.",
    name: "Backend Architecture Consulting",
    shortName: "Backend architecture",
    title: "Backend Architecture Consultant | System Design | Aakash Das",
    description:
      "Backend architecture consulting for startups and CTOs: system design, API and data-model reviews, event-driven design, and scaling plans from a senior engineer.",
    h1: "Backend Architecture Consulting & Technical Advisory",
    lead:
      "Good architecture is the simplest design that reliably meets your business needs. I help teams choose sound data models, API contracts, and service boundaries, then either hand over a clear plan or build it with you.",
    deliver: [
      "Architecture reviews and written design documents your team can act on",
      "Data model and API contract design, with clear schema boundaries",
      "Modular and event-driven designs for pricing, notification, and workflow engines",
      "Scaling and reliability plans based on measured bottlenecks, not guesses",
      "Code walkthroughs, documentation, and mentoring so your engineers own the result",
    ],
    whenToHire: [
      "You are about to build a new platform and want the key decisions reviewed first.",
      "Your system works but is becoming slow, fragile, or hard to change.",
      "You need a second senior opinion before committing to a vendor, framework, or rewrite.",
    ],
    caseSlugs: ["tgt", "tass", "trip_york", "toredo"],
    faqs: [
      {
        q: "Can you work as an advisor without writing code?",
        a: "Yes. Engagements can be advisory only (reviews, design documents, decision support) or hands-on, depending on what your team needs.",
      },
      {
        q: "How do you approach technology choices?",
        a: "I start from your business constraints, then choose battle-tested technology with the lowest operational cost that meets them.",
      },
      {
        q: "Will my team be able to maintain what you design?",
        a: "That is a design goal. I document decisions, run handoff walkthroughs, and mentor in-house engineers.",
      },
    ],
  },
  {
    slug: "data-pipeline-engineering",
    summary: "Distributed crawlers, ETL and data lakes that keep running.",
    name: "Data Pipeline & Web Crawling Engineering",
    shortName: "Data pipelines",
    title: "Data Pipeline & Web Crawler Engineer | Python, Celery, AWS | Aakash Das",
    description:
      "Distributed web crawlers, ETL, and data lake pipelines on Python, Celery, and AWS. Cut a 12+ hour crawl cycle to under 20 minutes for 40,000+ items.",
    h1: "Data Pipeline & Web Crawling Engineering",
    lead:
      "I build data pipelines that keep running: distributed crawlers, scheduled ingestion, and data lakes that turn messy third-party sources into data your business can trust. In one engagement a crawl cycle dropped from over 12 hours to under 20 minutes for more than 40,000 items.",
    deliver: [
      "Distributed web crawlers with scheduling, retries, backoff, and checkpoint resumption",
      "Ingestion and reconciliation of data from APIs, files, and websites",
      "Data lakes and analytics pipelines on AWS (Lambda, S3) and PostgreSQL",
      "Syndication pipelines that publish one data source to several portals",
      "Monitoring so failures are visible before your customers notice",
    ],
    whenToHire: [
      "Your scraping or sync jobs take too long, fail mid-run, or get blocked.",
      "Data from many suppliers or utilities arrives in inconsistent formats.",
      "You need reporting on top of data that is currently scattered across systems.",
    ],
    caseSlugs: ["ecrawl", "inibii", "interest_miner", "homesy"],
    faqs: [
      {
        q: "Can you speed up an existing crawler?",
        a: "Usually. I look at scheduling, concurrency, failure handling, and rate limiting first. One crawler I rebuilt went from 12+ hours per cycle to under 20 minutes.",
      },
      {
        q: "What technologies do you use for pipelines?",
        a: "Python with Celery for task distribution, PostgreSQL for state, and AWS services such as Lambda and S3 where they fit.",
      },
      {
        q: "Do you handle large data volumes?",
        a: "Yes. I have built a data lake processing tens of gigabytes of utility telemetry per month.",
      },
    ],
  },
  {
    slug: "database-performance-tuning",
    summary: "Fix slow queries and dashboards with plans, indexes and schema changes.",
    name: "PostgreSQL & Database Performance Tuning",
    shortName: "Database performance",
    title: "PostgreSQL & Database Performance Consultant | Aakash Das",
    description:
      "Slow queries and dashboards? PostgreSQL and SQL performance tuning through execution plans, indexing, and schema fixes, with sub-300ms API results in production.",
    h1: "PostgreSQL & Database Performance Tuning",
    lead:
      "Most performance problems are database problems. I diagnose slow queries from execution plans, fix indexing and access patterns, and adjust schemas where needed, so your pages and APIs respond quickly under real load.",
    deliver: [
      "Query and execution plan analysis on slow pages, reports, and dashboards",
      "Indexing strategy and removal of expensive scans",
      "Schema and data-model adjustments for faster reads without breaking writes",
      "Caching with Redis where it is the right tool",
      "Before and after measurements so improvements are verifiable",
    ],
    whenToHire: [
      "Reports or dashboards take seconds to load and are getting slower as data grows.",
      "Your API latency is inconsistent and the cause is not obvious.",
      "You want an expert review of a PostgreSQL or MySQL schema before it becomes a problem.",
    ],
    caseSlugs: ["tass", "trip_york", "toredo", "ecrawl"],
    faqs: [
      {
        q: "Which databases do you work with?",
        a: "PostgreSQL mostly, plus MySQL, Redis, and NoSQL stores such as Firestore.",
      },
      {
        q: "Do you need access to production data?",
        a: "Not necessarily. Execution plans, schema, and anonymized or sample data are often enough to find the cause.",
      },
      {
        q: "What results should I expect?",
        a: "It depends on the cause. In production systems I have worked on, key API endpoints respond in under 200 to 300 milliseconds.",
      },
    ],
  },
  {
    slug: "ai-llm-integration",
    summary: "Cost-controlled LLM workflows: extraction, content, human review.",
    name: "AI & LLM Integration",
    shortName: "AI & LLM integration",
    title: "AI & LLM Integration Engineer | OpenAI, Gemini, Python | Aakash Das",
    description:
      "Practical AI and LLM integration for business workflows: document extraction with OCR, cost-controlled OpenAI and Gemini pipelines, and human-in-the-loop review.",
    h1: "AI & LLM Integration for Business Workflows",
    lead:
      "I add AI to real products where it saves time, and keep it cost-controlled and reviewable. That means document extraction pipelines, content generation with human review, and token tracking so inference costs stay predictable.",
    deliver: [
      "Document extraction pipelines using OCR plus LLMs (OpenAI, Google Gemini, Anthropic)",
      "Prompt design and optimization for consistent, structured output",
      "Context management, caching, and token tracking to control cost",
      "Content research and publishing workflows with human-in-the-loop review",
      "Integration into existing Django and WordPress systems",
    ],
    whenToHire: [
      "You have a manual document or content workflow that an LLM could speed up.",
      "A prototype works but inference costs or accuracy are not production-ready.",
      "You want AI added to an existing product without a rewrite.",
    ],
    caseSlugs: ["interest_miner"],
    faqs: [
      {
        q: "Which models and providers do you use?",
        a: "OpenAI, Google Gemini, and Anthropic APIs. The choice depends on accuracy, latency, and cost for your task.",
      },
      {
        q: "How do you keep LLM costs under control?",
        a: "By reusing context, caching deterministic results, tracking tokens per workflow, and using smaller models where quality allows.",
      },
      {
        q: "How do you handle accuracy?",
        a: "Pipelines include validation and human-in-the-loop review for steps where errors are costly.",
      },
    ],
  },
];

module.exports = services;
