/**
 * Portfolio Data for Aakash Das
 * 
 * Source of truth for all content across the portfolio site.
 * Edit this file to add or update case studies, experience, testimonials, or metrics.
 */

const portfolioData = {
  profile: {
    name: "Aakash Das",
    role: "Software Architect",
    currentEmployer: "ServiceNow",
    experienceYearsText: "Close to a decade", // Started 2015; old site listed 8 years in 2022
    email: "aakashjsr@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/aakash94/",
    toptalUrl: "https://www.toptal.com/developers/resume/aakash-kumar-das#qz8jnk",
    codementorUrl: "https://www.codementor.io/@aakashkumardas",
    siteUrl: process.env.SITE_URL || "https://aakashdas.com",
    codementorReviews: 70,
    upworkUrl: "", // TODO: add Upwork profile URL
    upworkReviews: 2,
    hero: {
      headline: "Pragmatic software architecture and engineering for critical business problems.",
      subheadline:
        "Staff Software Engineer at ServiceNow with close to a decade of production experience. I help founders, CTOs, and product teams cut through architectural complexity, optimize core data systems, and ship fast, reliable applications.",
      primaryCta: "Discuss a project",
      secondaryCta: "View case studies",
    },
    about: {
      paragraphs: [
        "I am a Software Architect and Staff Engineer with close to a decade of hands-on experience building, scaling, and maintaining software that drives real business value. In my current role at ServiceNow, I work on platform architecture, cross-functional alignment across product, design, QA, and technical documentation teams, customer escalations, and team mentoring.",
        "Alongside my enterprise work, I advise and build as an independent consultant and principal engineer through Toptal (top 3% global talent network) and direct client partnerships. Over my career, I have contributed to more than 20 production products across SaaS, eCommerce, real estate, healthcare, and fintech.",
        "My approach is grounded in pragmatic architecture: choosing the simplest reliable technology, designing clean schema boundaries, prioritizing performance, and communicating transparently. Clients work with me not just for code delivery, but for technical judgment, business alignment, and clear execution.",
      ],
    },
  },

  // Key trust badges displayed in the hero section
  trustBadges: [
    { label: "Staff Software Engineer", detail: "ServiceNow" },
    { label: "Top 3% Talent", detail: "Vetted by Toptal" },
    { label: "20+ Shipped Products", detail: "SaaS, eCommerce, Fintech, Real Estate" },
    { label: "Venture Delivery", detail: "Core Platform for $100K Seed-Funded Startup" },
  ],

  // Architectural capabilities and candidate proof points
  proofPoints: [
    {
      category: "Marketplace & Venture Delivery",
      title: "Seed-Funded Wholesale Food Marketplace",
      metric: "$100K Seed Raised",
      description:
        "Single-handedly architected and delivered the core wholesale food marketplace platform for The Good Trends from 0 to 1, enabling the company to secure $100,000 in seed funding.",
      projectId: "tgt",
    },
    {
      category: "High-Throughput Distributed Crawling",
      title: "Automated Catalog Synchronization",
      metric: "40K+ SKUs in <20 min",
      description:
        "Engineered a distributed, resilient crawler capable of inspecting and reconciling stock availability for 40,000+ drop-shipped products across manufacturer sites in under 20 minutes with zero downtime.",
      projectId: "ecrawl",
    },
    {
      category: "Database & Performance Optimization",
      title: "SQL & Analytics Query Tuning",
      metric: "~10s Query Reduction",
      description:
        "Diagnosed database indexing and query execution plans on high-volume reporting dashboards, eliminating expensive nested scans and cutting page load times by approximately 10 seconds.",
      note: "Candidate metric based on client & enterprise analytics tuning; subject to project context confirmation.",
    },
    {
      category: "Codebase Refactoring & Reliability",
      title: "Event & Notification Engine Refactoring",
      metric: "40% Codebase Reduction",
      description:
        "Streamlined sprawling, multi-channel notification and alert workflows into a cohesive, modular event pipeline, eliminating 40% of duplicate code while improving delivery reliability.",
      note: "Candidate metric based on system refactoring; subject to project context confirmation.",
    },
    {
      category: "Pragmatic AI & LLM Systems",
      title: "Context-Efficient Document Processing",
      metric: "Optimized Token Footprint",
      description:
        "Architected enterprise document extraction pipelines using Django, OCR, OpenAI, and Google Gemini. Implemented concise context reuse and deterministic caching to minimize token consumption and operational costs without quality degradation.",
    },
    {
      category: "Workflow Automation & Prompt Engineering",
      title: "AI Recipe Research & Publishing Pipeline",
      metric: "Cost-Controlled LLM Workflow",
      description:
        "Designed an automated recipe research and content generation pipeline for WordPress with token tracking, prompt optimization, and human-in-the-loop review to ensure factual accuracy and low inference costs.",
    },
  ],

  // "How I Work" methodology
  methodology: [
    {
      step: "01",
      title: "Discovery & Business Alignment",
      description:
        "Before writing a line of code, we examine the underlying business problem, user workflows, technical bottlenecks, and constraints. I help clarify requirements, define system boundaries, and identify high-leverage outcomes so you invest only where it moves the business.",
    },
    {
      step: "02",
      title: "Pragmatic Architecture",
      description:
        "I design architectures built around battle-tested patterns: robust data models, clear API contracts, decoupled service boundaries, and performant indexing. I intentionally avoid over-engineering and trendy technology choices that create future technical debt.",
    },
    {
      step: "03",
      title: "Disciplined Delivery & Testing",
      description:
        "Execution happens in focused, verifiable milestones. Every deliverable includes automated testing, clean documentation, and CI/CD deployment automation. You receive regular, clear async progress updates—no black boxes or missed deadlines.",
    },
    {
      step: "04",
      title: "Mentorship & Seamless Handoff",
      description:
        "A successful consulting engagement leaves your team stronger. I provide comprehensive architectural documentation, run code walkthroughs, mentor in-house engineers, and ensure your team can operate, scale, and extend the system with complete confidence.",
    },
  ],

  // Case Studies
  // Featured case studies are displayed prominently on the homepage and have dedicated detail pages.
  caseStudies: [
    {
      id: "tgt",
      slug: "tgt",
      title: "The Good Trends",
      subtitle: "B2B Wholesale Food Marketplace Platform",
      category: "Marketplace & eCommerce",
      projectType: "Consulting / Lead Architecture",
      featured: true,
      heroImage: "/assets/images/portfolio/tgt/1.webp",
      gallery: [
        "/assets/images/portfolio/tgt/1.webp",
        "/assets/images/portfolio/tgt/2.webp",
        "/assets/images/portfolio/tgt/3.webp",
        "/assets/images/portfolio/tgt/4.webp",
        "/assets/images/portfolio/tgt/5.webp",
        "/assets/images/portfolio/tgt/6.webp",
        "/assets/images/portfolio/tgt/7.webp",
      ],
      clientContext:
        "The Good Trends is a mission-driven US marketplace connecting wholesale healthy food producers and independent local grocers. The objective was to reinvent wholesale food purchasing by removing cumbersome distributor markups and giving grocers transparent ordering.",
      problem:
        "The business needed to go from concept to a production-ready marketplace that could handle multi-tenant store onboarding, live POS inventory synchronization, real-time volume discounts, and investor diligence on a fast timeline.",
      role:
        "Lead Architect & Full-Stack Engineer. Responsible for end-to-end platform design, database schema, REST APIs, frontend portal, third-party integrations, and cloud infrastructure.",
      approach:
        "Architected a modular Django and React application backed by PostgreSQL and AWS. Implemented an event-driven pricing engine capable of evaluating complex tier discounts and bundles in real-time under high concurrency (1,000+ events/sec). Built automated CSV ingestion and POS integrations so store owners could sync catalog items seamlessly.",
      verifiedResults: [
        "Single-handedly delivered the complete core application from scratch, enabling the founder to raise a $100,000 seed funding round.",
        "Built real-time discount calculation engine processing 1,000+ cart events per second with sub-100ms response.",
        "Designed self-serve onboarding portals for brand registration, automated monthly invoicing, and low-inventory alerts.",
        "Deployed containerized architecture on AWS with auto-scaling to absorb unpredictable promotional traffic spikes.",
      ],
      highlights: [
        "Self-serve store owner portal for brand and catalog registration",
        "Point of Sale (POS) linking to capture sales and real-time inventory statistics",
        "Brand analytics dashboard with exportable monthly statements and invoices",
        "Real-time dynamic discounts engine handling 1,000+ events per second",
        "Automated bulk CSV/Excel product catalog import and export",
        "Application Performance Monitoring (APM) with automated error alerting",
        "Containerized, auto-scaled AWS deployment for high availability",
      ],
      stack: ["Python", "Django", "React", "PostgreSQL", "AWS", "Docker", "Sass"],
      testimonial: {
        quote:
          "We worked with Aakash for 1 year building the core of our application at The Good Trends. Aakash was extremely knowledgeable, a pleasure to work with and he delivered most of the code that got us started. Would highly recommend him for any project.",
        author: "Victor Mithouard",
        title: "CEO & Founder",
        company: "The Good Trends",
      },
    },
    {
      id: "ecrawl",
      slug: "ecrawl",
      title: "E-crawl",
      subtitle: "High-Throughput Distributed Web Crawler",
      category: "Distributed Systems & Automation",
      projectType: "Consulting / Backend Architecture",
      featured: true,
      heroImage: "/assets/images/portfolio/ecrawl/1.webp",
      gallery: [
        "/assets/images/portfolio/ecrawl/1.webp",
        "/assets/images/portfolio/ecrawl/2.webp",
        "/assets/images/portfolio/ecrawl/3.webp",
        "/assets/images/portfolio/ecrawl/4.webp",
        "/assets/images/portfolio/ecrawl/5.webp",
      ],
      clientContext:
        "A high-volume drop-shipping eCommerce company managing an active catalog of over 40,000 product SKUs sourced from external manufacturer partner websites.",
      problem:
        "The client was experiencing severe order cancellation rates and unhappy customers because supplier websites frequently changed stock status without notifications. The existing scraping scripts took over 12 hours to run, failed mid-cycle, and caused expensive out-of-stock orders.",
      role:
        "Distributed Systems Architect & Backend Developer. Designed and implemented the crawler architecture, state management, retry logic, and monitoring.",
      approach:
        "Engineered a distributed crawling cluster utilizing Python, Celery task distribution, and PostgreSQL for state synchronization. Designed an intelligent scheduler with exponential backoff, checkpoint resumption from points of failure, and adaptive rate-limiting to avoid IP bans.",
      verifiedResults: [
        "Reduced crawl cycle time from 12+ hours to under 20 minutes for 40,000+ items—a 97% reduction in processing latency.",
        "Eliminated inventory mismatch cancellations, protecting merchant account ratings on Amazon and eBay.",
        "Built automated failure recovery and checkpointing, ensuring zero lost state during unexpected worker restarts.",
        "Architected for low operational cost using lightweight containerized workers on AWS.",
      ],
      highlights: [
        "Distributed worker architecture capable of crawling 40,000+ SKUs in <20 minutes",
        "Intelligent checkpoint resumption allowing jobs to continue from exact points of failure",
        "Automated anomaly detection and low-inventory alerting before stock reaches zero",
        "Comprehensive reporting dashboard with exportable product health metrics",
        "Optimized AWS infrastructure designed for minimal monthly cloud expenditure",
      ],
      stack: ["Python", "Django", "PostgreSQL", "Docker", "AWS", "Celery", "React"],
      testimonial: {
        quote:
          "I had a great experience. Aakash is very hard working, and went above and beyond to make sure the project was excellent.",
        author: "David Iyoka",
        title: "Founder & Client",
        company: "eCrawler",
      },
    },
    {
      id: "inibii",
      slug: "inibii",
      title: "Inibii Technology",
      subtitle: "Commercial Utility Data Lake & Energy Analytics",
      category: "Data Engineering & Cloud",
      projectType: "Consulting / Cloud & Data Architecture",
      featured: true,
      heroImage: "/assets/images/portfolio/inibii/1.webp",
      gallery: [
        "/assets/images/portfolio/inibii/1.webp",
        "/assets/images/portfolio/inibii/2.webp",
        "/assets/images/portfolio/inibii/3.webp",
      ],
      clientContext:
        "Inibii Technology provides energy management and sustainability intelligence to commercial building owners and institutional facility managers across North America.",
      problem:
        "Commercial clients had meters and billing records fragmented across dozens of independent power boards, natural gas suppliers, and municipal water utilities. Ingesting and reconciling gigabytes of heterogeneous time-series telemetry each month required a scalable data architecture.",
      role:
        "Cloud Architect & Data Platform Engineer. Designed the AWS data ingestion pipelines, authentication infrastructure, and time-series data storage.",
      approach:
        "Constructed a secure, event-driven data lake on AWS. Established automated SFTP pipelines to ingest utility partner dumps, custom parsing microservices to validate and normalize heterogeneous CSV data, and serverless AWS Lambda triggers for event-based time-series ingestion into PostgreSQL.",
      verifiedResults: [
        "Architected scalable data lake processing tens of gigabytes of monthly utility telemetry seamlessly.",
        "Integrated room-level electrical sub-meters alongside municipal gas and water utility feeds.",
        "Implemented serverless event-driven processing via AWS Lambda to eliminate idle compute costs.",
        "Delivered a unified visualization backend enabling facility managers to uncover cost-saving energy optimizations.",
      ],
      highlights: [
        "Automated SFTP pipeline integrating electric power boards, gas, and water providers",
        "Scalable data lake architecture handling gigabytes of monthly time-series data",
        "Serverless AWS Lambda pipeline triggered on automated batch uploads",
        "Custom high-speed parsing engine for multi-format utility CSV feeds",
        "Centralized authentication and role-based access control server",
      ],
      stack: ["Python", "Django", "PostgreSQL", "AWS Lambda", "AWS S3", "Docker"],
      testimonial: {
        quote:
          "I worked closely with Aakash when he helped our team set up AWS infrastructure and develop Inibii's Auth server as well as Data Lake back-end. He has a strong understanding of business process in addition to his strong technical background. He was a team player and loves to wear multiple hats to get the job done. He was very innovative as well as dedicated to his project and team. I'd like to work with him again.",
        author: "Moshiul Arefin",
        title: "Founder",
        company: "Inibii Technology",
      },
    },
    {
      id: "hs_sales",
      slug: "hs_sales",
      title: "HS Sales GmbH",
      subtitle: "Multi-Marketplace ERP & Inventory Platform",
      category: "Enterprise eCommerce & Logistics",
      projectType: "Consulting / Full-Stack & API Architecture",
      featured: true,
      heroImage: "/assets/images/portfolio/hs_sales/1.webp",
      gallery: [
        "/assets/images/portfolio/hs_sales/1.webp",
        "/assets/images/portfolio/hs_sales/2.webp",
        "/assets/images/portfolio/hs_sales/3.webp",
        "/assets/images/portfolio/hs_sales/4.webp",
        "/assets/images/portfolio/hs_sales/5.webp",
        "/assets/images/portfolio/hs_sales/6.webp",
        "/assets/images/portfolio/hs_sales/7.webp",
        "/assets/images/portfolio/hs_sales/8.webp",
        "/assets/images/portfolio/hs_sales/9.webp",
        "/assets/images/portfolio/hs_sales/10.webp",
        "/assets/images/portfolio/hs_sales/11.webp",
      ],
      clientContext:
        "HS Sales GmbH (Toredo Trading), based in Munich, Germany, is a leading consumer electronics eCommerce distributor specializing in smartphones, tablets, and smart home hardware across Europe.",
      problem:
        "The company was managing listings and orders manually across multiple European channels (Amazon, eBay, Rakuten). Without centralized inventory and serial-number tracking, stock mismatches occurred frequently, and barcode printing for warehouse shipments was inefficient.",
      role:
        "Principal Full-Stack Architect. Led multi-year architecture and feature delivery for the company's core ERP and inventory hub.",
      approach:
        "Built a centralized Django and React platform integrating eBay, Amazon, and Rakuten APIs. Designed a comprehensive serial-number tracking system, automated barcode PDF generation, retail outlet manual checkout workflows, and automated product description templating.",
      verifiedResults: [
        "Maintained continuous multi-year engineering collaboration spanning 3+ years of reliable deliveries.",
        "Centralized multi-channel listings and stock synchronization across Amazon, eBay, and Rakuten.",
        "Implemented automated PDF barcode generation and batch importing at individual serial-number precision.",
        "Provided retail outlet checkout workflows and third-party sales reconciliation.",
      ],
      highlights: [
        "Third-party API integration syncing catalog data across Amazon, eBay, and Rakuten",
        "Serial-number level tracking across all incoming batches and customer fulfillment",
        "Automated barcode and label PDF generator for warehouse processing",
        "Retail point-of-sale checkout for walk-in outlet sales",
        "Template-driven product description generator based on device technical specs",
        "Batch CSV import and multi-dimensional sales performance reporting",
      ],
      stack: ["Python", "Django", "React", "PostgreSQL", "Docker", "AWS"],
      testimonial: {
        quote:
          "I have been working with Aakash for more than 3 years now in various IT projects (in the real estate and e-commerce sector) and I am absolutely amazed. Aakash's implementation speed, quality and communication are always on a very professional level. I especially appreciate the fact that he understands the applications and focuses the users. Aakash always has a solution for any problems that may arise. He has always kept to our agreements and completed all tasks on time and accurately. I appreciate our cooperation and look forward to further projects. Highly recommended! Greetings from Munich",
        author: "Michele Santo",
        title: "CEO",
        company: "HS Sales GmbH",
      },
    },
    {
      id: "homesy",
      slug: "homesy",
      title: "Homesy",
      subtitle: "German Real Estate Syndication & Inquiries Platform",
      category: "Real Estate & PropTech",
      projectType: "Consulting / Full-Stack Development",
      featured: false,
      heroImage: "/assets/images/portfolio/homesy/1.webp",
      gallery: [
        "/assets/images/portfolio/homesy/1.webp",
        "/assets/images/portfolio/homesy/2.webp",
        "/assets/images/portfolio/homesy/3.webp",
        "/assets/images/portfolio/homesy/4.webp",
        "/assets/images/portfolio/homesy/5.webp",
        "/assets/images/portfolio/homesy/6.webp",
        "/assets/images/portfolio/homesy/7.webp",
        "/assets/images/portfolio/homesy/8.webp",
        "/assets/images/portfolio/homesy/9.webp",
      ],
      clientContext:
        "A German PropTech platform enabling property owners and brokers to list residential and commercial real estate across multiple German property portals simultaneously.",
      problem:
        "Brokers had to manually upload listings and monitor lead inboxes across multiple portals (ImmobilienScout24, Immowelt, etc.), causing slow lead responses and lost tenant deals.",
      role:
        "Full-Stack Architect & API Engineer. Developed property syndication services, unified lead mailbox, and multi-language interface.",
      approach:
        "Engineered API connectors and structured web ingestion to publish property listings across multiple portals from a single submission. Consolidated all incoming prospect inquiries into a unified, labeled mailbox with English and German localization.",
      verifiedResults: [
        "Built multi-portal syndication pipeline saving property managers hours of redundant data entry.",
        "Unified multi-platform prospect inquiries into a single real-time mailbox.",
        "Delivered full bilingual support (English and German) with performant property lookup REST APIs.",
      ],
      highlights: [
        "API integration and syndication engine to push listings to external portals",
        "Unified broker mailbox with read/unread tracking, tagging, and automated routing",
        "Web scraping and webhook processing for instant lead notification",
        "Sub-200ms REST APIs for performant property search and filtering",
        "Bilingual localization (English / German)",
      ],
      stack: ["Python", "Django", "React", "PostgreSQL", "Docker", "AWS"],
    },
    {
      id: "sourcebox",
      slug: "sourcebox",
      title: "SourceBox",
      subtitle: "Automated Source Code Escrow & Vault",
      category: "Developer Tools & Security",
      projectType: "Consulting / Security & Backend",
      featured: false,
      heroImage: "/assets/images/portfolio/source_box/1.webp",
      gallery: [
        "/assets/images/portfolio/source_box/1.webp",
        "/assets/images/portfolio/source_box/2.webp",
        "/assets/images/portfolio/source_box/3.webp",
        "/assets/images/portfolio/source_box/4.webp",
        "/assets/images/portfolio/source_box/5.webp",
        "/assets/images/portfolio/source_box/6.webp",
        "/assets/images/portfolio/source_box/7.webp",
        "/assets/images/portfolio/source_box/8.webp",
        "/assets/images/portfolio/source_box/9.webp",
      ],
      clientContext:
        "SourceBox provides independent software escrow and repository audit services, enabling enterprises and investors to safeguard mission-critical intellectual property.",
      problem:
        "Investors and corporate stakeholders required automated, secure source code backups from active developer accounts without giving broad administrative access or relying on manual zip transfers.",
      role: "Lead Software Engineer. Built end-to-end repository sync, storage encryption, and role-based permissions.",
      approach:
        "Constructed GitHub OAuth integration for scheduled periodic repository snapshots. Designed secure multi-factor authentication (MFA) and isolated private AWS S3 storage behind strict VPC endpoints.",
      verifiedResults: [
        "Delivered start-to-finish implementation on schedule and within technical requirements.",
        "Implemented automated GitHub OAuth synchronization with multi-tenant encryption at rest.",
        "Built repository analysis and large codebase zip upload pipeline.",
      ],
      highlights: [
        "GitHub OAuth integration for periodic automated repository synchronization",
        "Multi-factor authentication (MFA) and granular stakeholder permissions",
        "Isolated encrypted storage in AWS S3 within private VPC boundaries",
        "Large archive upload processing and repository structural analysis",
      ],
      stack: ["Python", "Django", "React", "PostgreSQL", "AWS", "Docker"],
      testimonial: {
        quote:
          "Aakash was tasked with the start-to-finish development work on a software project and demonstrated exceptional technical capabilities, professionalism, and the ability to deliver exactly what he promised. I highly recommend his technical services.",
        author: "Mike",
        title: "Founder",
        company: "SourceBox",
      },
    },
    {
      id: "interest_miner",
      slug: "interest_miner",
      title: "Interest Miner",
      subtitle: "Academic Research & Topic Correlation Analytics",
      category: "Data Science & NLP",
      projectType: "Consulting / Full-Stack & Analytics",
      featured: false,
      heroImage: "/assets/images/portfolio/interest_miner/1.webp",
      gallery: [
        "/assets/images/portfolio/interest_miner/1.webp",
        "/assets/images/portfolio/interest_miner/2.webp",
        "/assets/images/portfolio/interest_miner/3.webp",
        "/assets/images/portfolio/interest_miner/4.webp",
        "/assets/images/portfolio/interest_miner/5.webp",
        "/assets/images/portfolio/interest_miner/6.webp",
        "/assets/images/portfolio/interest_miner/7.webp",
      ],
      clientContext:
        "An academic analytics initiative designed to model research interest trajectories of academic scholars using public publications and social discourse.",
      problem:
        "Researchers lacked an automated way to combine formal scholarly publications with informal social discourse to detect emerging topic shifts and academic collaboration opportunities.",
      role: "Full-Stack Data Engineer. Designed NLP extraction pipelines, database models, and interactive visualization dashboards.",
      approach:
        "Built automated connectors to Twitter API and academic paper repositories. Designed keyword extraction and topic correlation algorithms to track short-term versus long-term interest shifts, visualizing results with 8+ interactive charts.",
      verifiedResults: [
        "Engineered full data pipeline from API extraction to interactive visualization.",
        "Formulated correlation metrics to compare research interests between scholars.",
        "Built 8+ custom interactive visualization charts.",
      ],
      highlights: [
        "API integration with Twitter and Google Scholar for historical data mining",
        "Keyword extraction and NLP segmentation to distinguish short-term vs long-term interests",
        "Inter-user correlation metrics to identify common research alignments",
        "8+ interactive data visualization charts built with React",
      ],
      stack: ["Python", "Django", "React", "PostgreSQL", "Docker", "AWS"],
      testimonial: {
        quote:
          "Aakash is very professional and knowledgeable in web development. He is really a hardworking programmer. I've been working with him for almost a half year. I really appreciated the time Aakash spent communicate with me about my questions and working with me to figure out the solution. I'm really impressed by his expertise to simplify complex problems as well as his friendly attitude. I learned a lot from him and would highly recommend him for mentoring and solving coding problems.",
        author: "Fangzheng JI",
        title: "Academic Researcher",
        company: "Research Partner",
      },
    },
    {
      id: "tass",
      slug: "tass",
      title: "TASS",
      subtitle: "Unified Support Ticket Aggregation Hub",
      category: "Customer Support & Messaging",
      projectType: "Consulting / API & Web",
      featured: false,
      heroImage: "/assets/images/portfolio/tass/1.webp",
      gallery: [
        "/assets/images/portfolio/tass/1.webp",
        "/assets/images/portfolio/tass/2.webp",
        "/assets/images/portfolio/tass/3.webp",
        "/assets/images/portfolio/tass/4.webp",
      ],
      clientContext:
        "TASS provides customer support teams with a centralized workspace to view, triage, and reply to customer tickets across multiple communication channels.",
      problem:
        "Customer service agents were context-switching between email, web forms, and third-party platforms, leading to slow response times and duplicated replies.",
      role: "Full-Stack Engineer. Built REST API endpoints, email-to-ticket ingestion pipeline, and real-time agent UI.",
      approach:
        "Designed high-performance REST APIs with sub-200ms latency. Implemented an email parsing service that converts inbound customer emails into tickets and manages conversation threading.",
      verifiedResults: [
        "Sub-200ms REST API response times across ticket queries and thread updates.",
        "Unified multi-channel ticket workflow with automated email parsing.",
      ],
      highlights: [
        "Sub-200ms performant REST APIs for real-time ticket triage",
        "Automated inbound email parsing and conversation threading",
        "In-app team collaboration and internal note workflow",
        "Modern, keyboard-friendly agent interface",
      ],
      stack: ["Python", "Django", "React", "PostgreSQL", "AWS", "Docker", "Sass"],
    },
    {
      id: "toredo",
      slug: "toredo",
      title: "Toredo",
      subtitle: "Consumer Device Trade-In & Valuation Engine",
      category: "eCommerce & Recommerce",
      projectType: "Consulting / Web & Workflow",
      featured: false,
      heroImage: "/assets/images/portfolio/toredo/1.webp",
      gallery: [
        "/assets/images/portfolio/toredo/1.webp",
        "/assets/images/portfolio/toredo/2.webp",
        "/assets/images/portfolio/toredo/3.webp",
        "/assets/images/portfolio/toredo/4.webp",
        "/assets/images/portfolio/toredo/5.webp",
        "/assets/images/portfolio/toredo/6.webp",
      ],
      clientContext:
        "Toredo operates an online recommerce platform in Munich enabling consumers to appraise, sell, and cash out used smartphones and tablets based on graded device conditions.",
      problem:
        "Device condition grading requires complex step-by-step user evaluation while maintaining high checkout conversion and rapid quote generation.",
      role: "Full-Stack Engineer. Built valuation calculation engine, multi-step appraisal flow, and payout integration.",
      approach:
        "Engineered a streamlined appraisal workflow backed by fast REST APIs (sub-300ms) with automated price grading based on device condition criteria.",
      verifiedResults: [
        "Sub-300ms quote generation workflow.",
        "Frictionless multi-step device appraisal UI with automated grading logic.",
      ],
      highlights: [
        "Performant REST APIs with response time under 300ms",
        "Multi-step condition appraisal wizard with instant price calculation",
        "Automated shipping label and payout integration",
      ],
      stack: ["Python", "Django", "React", "PostgreSQL", "AWS", "Docker", "Sass"],
    },
    {
      id: "trip_york",
      slug: "trip_york",
      title: "TripYork",
      subtitle: "Multi-Source Travel Metasearch Engine",
      category: "Travel & Metasearch",
      projectType: "Consulting / Backend & Geolocation",
      featured: false,
      heroImage: "/assets/images/portfolio/trip_york/1.webp",
      gallery: [
        "/assets/images/portfolio/trip_york/1.webp",
        "/assets/images/portfolio/trip_york/2.webp",
        "/assets/images/portfolio/trip_york/3.webp",
        "/assets/images/portfolio/trip_york/4.webp",
        "/assets/images/portfolio/trip_york/5.webp",
        "/assets/images/portfolio/trip_york/6.webp",
      ],
      clientContext:
        "TripYork is a consumer travel metasearch engine allowing travelers to compare flight, hotel, and car rental prices across multiple global travel aggregators.",
      problem:
        "Aggregating real-time rates from third-party travel providers requires rapid geolocation detection, high-speed cached queries, and resilient database indexing.",
      role: "Backend Engineer. Built geolocation resolution, search query indexing, and aggregator connectors.",
      approach:
        "Engineered sub-300ms search APIs with automatic user geolocation detection. Implemented database sharding and index optimization in PostgreSQL for instant pricing lookups.",
      verifiedResults: [
        "Sub-300ms API response times across multi-source travel search queries.",
        "Accurate geolocation routing via network and IP detection.",
        "Optimized database schema using targeted sharding and indexing.",
      ],
      highlights: [
        "Sub-300ms performant search REST APIs",
        "Network-based automatic geolocation and currency localization",
        "Database sharding and composite indexing for high query throughput",
      ],
      stack: ["Python", "Django", "React", "PostgreSQL", "AWS", "Docker", "Sass"],
    },
  ],

  // Career experience (Enterprise & Consulting clearly separated)
  experience: [
    {
      company: "ServiceNow",
      role: "Staff Software Engineer",
      tenure: "2019 – Present",
      type: "Enterprise Engineering",
      logo: "/assets/images/company/servicenow.png",
      description:
        "Lead platform engineering and system architecture within ServiceNow's core product ecosystem. Partner daily across Product Management, UX Design, QA, and Technical Documentation. Handle critical customer escalations, lead architectural design reviews, mentor senior engineers, and shape engineering best practices across teams.",
      confidentialityNote: "Employer role; proprietary architecture and internal systems omitted in compliance with confidentiality.",
    },
    {
      company: "Toptal & Private Consulting",
      role: "Principal Engineer & Systems Architect",
      tenure: "2018 – Present",
      type: "Independent Client Consulting",
      logo: "/assets/images/company/toptal.png",
      description:
        "Advising and building end-to-end web architectures, high-throughput data pipelines, and full-stack applications for venture-backed startups and growing businesses worldwide. Ranked in the top 3% of global freelance developers through rigorous Toptal technical screening.",
    },
    {
      company: "Loyalty Juggernaut Inc",
      role: "Senior Product Engineer",
      tenure: "2018 – 2019",
      type: "Enterprise Product Engineering",
      logo: "/assets/images/company/lji.jpeg",
      description:
        "Architected enterprise loyalty and customer engagement platforms for global brands. Designed resilient backend microservices handling high-frequency reward transactions and partner integrations.",
    },
    {
      company: "ReportGarden Inc",
      role: "Full Stack Engineer",
      tenure: "2017 – 2018",
      type: "SaaS & Analytics Engineering",
      logo: "/assets/images/company/reportgarden.png",
      description:
        "Engineered data ingestion pipelines, automated reporting tools, and marketing analytics dashboards. Optimized complex SQL queries and database schemas, slashing high-volume reporting dashboard load times by ~10 seconds.",
    },
    {
      company: "Josh Technology Group",
      role: "Software Engineer",
      tenure: "2015 – 2017",
      type: "Core Engineering",
      logo: "/assets/images/company/jtg.jpeg",
      description:
        "Built scalable web applications, designed relational database schemas, and developed high-performance REST APIs across consumer and enterprise domains.",
    },
  ],

  // Client Testimonials
  testimonials: [
    {
      quote:
        "While Aakash may come across as a silent type, you will be amazed by his ability to simplify solutions. A wonderful talent on UI and backend skills, he has the talent to own and solve problems end to end. Articulative in his communication, meticulous in his analysis - he is someone you can trust a job and forget.",
      author: "Simran Sawhney",
      title: "Engineering Director",
      company: "Google",
      avatarInitials: "SS",
    },
    {
      quote:
        "Aakash took on a product rebuild for an app in Python / Django. He was super responsive with issues, and extremely productive throughout my work with him. Communication is excellent and he was very able to work through design decisions, tradeoffs & research technical solutions when necessary.",
      author: "Philip Reynolds",
      title: "VP Engineering",
      company: "Workday",
      avatarInitials: "PR",
    },
    {
      quote:
        "I had the pleasure of working with Aakash, who significantly contributed to our team's efficiency and productivity through their exceptional skills in Python, API integration, WordPress, and email client automation. Aakash demonstrated an impressive ability to understand our requirements quickly and translated them into effective automated solutions. His proficiency in Python and API integrations allowed us to streamline numerous tasks, saving countless hours of manual work. Also his expertise in WordPress enabled us to optimize our website's functionality and performance seamlessly. I highly recommend Aakash for any role that requires automating tasks with Python, integrating APIs, optimizing WordPress, and enhancing email client functionality. His contributions have been instrumental in our progress, and I am confident he will be an asset to any organization.",
      author: "Samira Kazan",
      title: "Founder & MD, Award-Winning Cookbook Author",
      company: "Alphafoodie",
      avatarInitials: "SK",
    },
    {
      quote:
        "We worked with Aakash for 1 year building the core of our application at The Good Trends. Aakash was extremely knowledgeable, a pleasure to work with and he delivered most of the code that got us started. Would highly recommend him for any project.",
      author: "Victor Mithouard",
      title: "CEO & Founder",
      company: "The Good Trends",
      avatarInitials: "VM",
    },
    {
      quote:
        "I have been working with Aakash for more than 3 years now in various IT projects (in the real estate and e-commerce sector) and I am absolutely amazed. Aakash's implementation speed, quality and communication are always on a very professional level. I especially appreciate the fact that he understands the applications and focuses the users. Aakash always has a solution for any problems that may arise. He has always kept to our agreements and completed all tasks on time and accurately. I appreciate our cooperation and look forward to further projects. Highly recommended!",
      author: "Michele Santo",
      title: "CEO",
      company: "HS Sales GmbH",
      avatarInitials: "MS",
    },
    {
      quote:
        "We've worked with Aakash on one of our strategic projects and his communication and engineering skills, especially with Python engineering, were at the highest level. He is a great fit for anyone looking for strong engineering skills.",
      author: "Marek Bardo\u0144ski",
      title: "CEO",
      company: "AI REV Group",
      avatarInitials: "MB",
    },
    {
      quote:
        "Aakash has proven himself a valuable developer at Ixxy. Given a complex, legacy codebase, he was able to develop on and improve it with extensive knowledge of Python and Django. His skills with Docker, and devops more generally, were a great asset in moving our fleet to a more modern hosting setup. Aakash is a polite and capable candidate who I'd not hesitate to recommend for your next Python project.",
      author: "Vanessa Wright",
      title: "Project Manager",
      company: "Ixxy, UK",
      avatarInitials: "VW",
    },
    {
      quote:
        "I worked closely with Aakash when he helped our team set up AWS infrastructure and develop Inibii's Auth server as well as Data Lake back-end. He has a strong understanding of business process in addition to his strong technical background. He was a team player and loves to wear multiple hats to get the job done. He was very innovative as well as dedicated to his project and team. I'd like to work with him again.",
      author: "Moshiul Arefin",
      title: "Founder",
      company: "Inibii Technology",
      avatarInitials: "MA",
    },
    {
      quote:
        "I've seen Aakash go above and beyond in researching and developing the product during the time we worked together. He's a quick learner who's happy to dive into new roles and challenges for the organization. He worked as a full stack engineer and a data engineer and was great with both. I would be happy to recommend him as he would be an asset to any organization.",
      author: "Ashok Verma",
      title: "CEO",
      company: "ReportGarden Inc",
      avatarInitials: "AV",
    },
    {
      quote:
        "Aakash was tasked with the start-to-finish development work on a software project and demonstrated exceptional technical capabilities, professionalism, and the ability to deliver exactly what he promised. I highly recommend his technical services.",
      author: "Mike",
      title: "Founder",
      company: "SourceBox",
      avatarInitials: "M",
    },
    {
      quote:
        "I had a great experience. Aakash is very hard working, and went above and beyond to make sure the project was excellent.",
      author: "David Iyoka",
      title: "Founder & Client",
      company: "eCrawler",
      avatarInitials: "DI",
    },
    {
      quote:
        "Aakash is very professional and knowledgeable in web development. He is really a hardworking programmer... I really appreciated the time Aakash spent communicating with me about my questions and working with me to figure out the solution. I'm really impressed by his expertise to simplify complex problems as well as his friendly attitude.",
      author: "Fangzheng JI",
      title: "Academic Researcher",
      company: "Research Partner",
      avatarInitials: "FJ",
    },
  ],

  // Technology capabilities
  skills: [
    {
      category: "Backend & Architecture",
      items: ["Python", "Django", "Node.js", "RESTful APIs", "Microservices", "Event-Driven Architecture"],
    },
    {
      category: "Frontend & Performance",
      items: ["React", "JavaScript (ESNext)", "TypeScript", "Semantic HTML5", "Modern CSS / Sass", "Core Web Vitals Optimization"],
    },
    {
      category: "Databases & Storage",
      items: ["PostgreSQL", "MySQL", "Redis", "Database Indexing & Query Tuning", "Data Lake Modeling"],
    },
    {
      category: "Cloud, DevOps & Tooling",
      items: ["AWS (Lambda, S3, RDS, ECS)", "Docker", "CI/CD Pipelines", "Git", "Cloudflare Pages", "Linux Administration"],
    },
    {
      category: "AI & LLM Engineering",
      items: ["OpenAI API", "Google Gemini API", "Prompt Optimization", "Context Management & Token Tracking", "OCR Pipelines"],
    },
  ],
};

module.exports = portfolioData;
