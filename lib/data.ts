export const siteConfig = {
  name: "Santiago Herrera",
  role: "Full Stack Software Engineer",
  // Set NEXT_PUBLIC_SITE_URL once the production domain exists; Vercel's
  // production URL is used as a fallback for canonical + OG links.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  stackLine: "Full stack engineer — Node.js, Next.js, TypeScript.",
  tagline:
    "4+ years shipping production software: investment platform features at Santander, and the registration, payments and e-commerce systems of a USL League One club.",
  metaDescription:
    "Full Stack Software Engineer in Buenos Aires, open to remote work. 4+ years with Node.js, NestJS, Next.js and TypeScript — fintech at Santander, payments and e-commerce for a USL League One club.",
  currently: ["Santander Tecnología", "Port St. Lucie SC (USL League One)"],
  location: "Buenos Aires, Argentina",
  availability: "Open to remote work",
  email: "santiherrera99@icloud.com",
  linkedin: "https://www.linkedin.com/in/santiago-martin-herrera",
  github: "https://github.com/Santiagoh99",
  resumeUrl: "/Santiago_Herrera_CV.pdf" as string | null,
};

// `**text**` marks emphasis; rendered by the About section.
export const about = {
  heading: "Fintech at enterprise scale. Full products for independent clients.",
  paragraphs: [
    "I'm a Full Stack Software Engineer in Buenos Aires with 4+ years building web and mobile applications in **fintech and enterprise** environments.",
    "At **Santander Tecnología Argentina** I build investment platform features used by real clients: NestJS APIs, microservices and microfrontends, PostgreSQL, MongoDB and Oracle, shipped through GitLab CI and OpenShift. I'm now also working in the team's data engineering scope (Hive, AWS, Power BI, Grafana).",
    "Since 2025 I've worked remotely, in English, with **Port St. Lucie SC (USL League One)**: their WordPress VIP multisite, a tournament registration system with PayPal payments, and the club's online store.",
    "I build AI features as part of the normal stack — LLM parsing with Gemini and Zod-validated output, and agentic workflows with Claude Code.",
  ],
  highlightsTitle: "What I bring",
  highlights: [
    "Full-stack ownership, from API design to production deployment",
    "Enterprise delivery: CI quality gates (SonarQube, Jest) and production monitoring (Dynatrace)",
    "Multi-tenant SaaS architecture: Postgres RLS, role-based access",
    "Payments, transactional email, rate limiting and analytics integrations",
    "Remote collaboration in English with a US client",
  ],
  education: {
    short: "UAI",
    title: "Systems Analyst",
    detail: "Universidad Abierta Interamericana · 2019–2022",
  },
  languages: "Spanish (native) · English (professional working proficiency)",
};

export const contact = {
  heading: "Let's work together.",
  body: "I'm open to full-time remote roles and freelance projects. If you have a role in mind or a problem to talk through, email is the fastest way to reach me.",
  responseNote: "I respond within 24 hours on weekdays.",
  timezone: "Buenos Aires, Argentina (UTC-3) · Remote-first",
};

export const projectsIntro =
  "Systems built for real clients — payments, concurrency and multi-tenant data — plus a couple of smaller builds.";

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  type: "full-time" | "freelance" | "contract";
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Website Manager & Full Stack Developer",
    company: "Port St. Lucie SC — USL League One",
    period: "Jun 2025 – Present",
    type: "freelance",
    location: "Remote (Fort Pierce, FL, USA)",
    description:
      "Freelance English-only collaboration with a professional soccer club in USL League One. Manage the club's WordPress VIP/SportsEngine multisite, built a full tournament registration system and the club's e-commerce store from scratch.",
    highlights: [
      "Built tournament registration system handling concurrent seat reservations with atomic Supabase RPC functions",
      "Integrated PayPal Orders API v2 for secure payments with webhook verification",
      "Implemented Resend for transactional emails with PDF attachment generation",
      "Added Upstash Redis rate limiting to prevent form abuse on free-tier infrastructure",
      "Wired Meta Conversions API for accurate server-side conversion tracking",
      "Built the club's e-commerce store with passwordless email-code auth and a Railway-hosted backend",
      "Coordinated directly with club staff and USL's tech team",
      "Managed ActiveCampaign email campaigns and resolved GA4 tag conflicts",
    ],
    tech: [
      "Next.js",
      "Supabase",
      "PayPal Orders API v2",
      "Resend",
      "Upstash Redis",
      "Meta Conversions API",
      "WordPress VIP",
      "SportsEngine",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Santander Tecnología Argentina",
    period: "Mar 2023 – Present",
    type: "full-time",
    location: "Buenos Aires, Argentina",
    description:
      "Investment platform development in a high-availability fintech environment. Part of an Agile team delivering backend services and frontend modules for platform features used by real clients. Currently expanding into a Data Engineering scope within the same team.",
    highlights: [
      "Built and maintained REST APIs with Node.js/NestJS/TypeScript",
      "Worked with polyglot persistence: PostgreSQL, MongoDB, and Oracle",
      "Developed microfrontend modules integrated into the broader platform",
      "Maintained high availability via GitLab CI/CD pipelines and OpenShift deployment",
      "Used Dynatrace for production monitoring and incident response",
      "Enforced code quality gates with SonarQube and Jest test coverage",
      "Building data ingestion pipelines with Hive and AWS, dashboards with Power BI, monitoring with Grafana",
    ],
    tech: [
      "Node.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Oracle",
      "GitLab CI/CD",
      "OpenShift",
      "Docker",
      "Dynatrace",
      "Jest",
      "SonarQube",
      "AWS",
      "Hive",
      "Power BI",
      "Grafana",
    ],
  },
  {
    title: "Frontend & Backend Developer",
    company: "Implementaciones Industriales SRL",
    period: "Aug 2021 – Mar 2023",
    type: "full-time",
    location: "Buenos Aires, Argentina",
    description:
      "Built internal SPA tools for an industrial services company, handling both the React frontend and .NET/C# backend services.",
    highlights: [
      "Developed SPAs with React, Hooks, and Redux for state management",
      "Built .NET/C# backend services and REST APIs",
      "Optimized SQL queries for performance improvements on large datasets",
    ],
    tech: ["React", "Redux", ".NET", "C#", "SQL", "TypeScript"],
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Independent",
    period: "2021 – Present",
    type: "freelance",
    location: "Buenos Aires, Argentina (remote-first)",
    description:
      "Ongoing freelance work alongside full-time roles. Built responsive websites, mobile apps, and production SaaS platforms for clients in Argentina and LATAM.",
    highlights: [
      "Built Cancha-hub, a multi-tenant SaaS court-booking platform (Next.js 14, Supabase)",
      "Designed and built the LAB.<3M brand site, a fashion image-consulting studio's landing page",
      "Developed React Native mobile applications",
      "Delivered custom stock management and booking systems",
    ],
    tech: ["Next.js", "React Native", "Supabase", "Node.js", "TypeScript"],
  },
];

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  role: string;
  keyDecisions: string[];
  tech: string[];
  links: {
    live?: string;
    github?: string;
  };
  screenshot?: string;
  screenshotPlaceholder?: true;
  featured: boolean;
  /** Top-down tiers; edges only connect adjacent tiers. Only components stated elsewhere in this file. */
  architecture?: Architecture;
  /** Santiago's own retrospective. The section renders only when this is filled in. */
  whatIdChange?: string[];
};

export type Architecture = {
  summary: string;
  tiers: { label: string; nodes: { id: string; label: string; note?: string }[] }[];
  edges: [from: string, to: string][];
};

export const projects: Project[] = [
  {
    title: "Luca FC Cup",
    subtitle: "Tournament registration system for a USL League One club",
    description:
      "Full tournament registration system built for Port St. Lucie SC (USL League One). Handles team registration, payment processing, confirmation emails with PDF attachments, and conversion tracking — all running on free-tier infrastructure.",
    problem:
      "The club needed a custom registration flow for their annual tournament that integrated with their existing WordPress/SportsEngine site, accepted payments, and sent branded confirmation emails with PDF documents — with no budget for paid backend infrastructure.",
    role: "Sole engineer on the registration system. Coordinated with club staff and USL's tech team for requirements and deployment.",
    keyDecisions: [
      "Atomic Supabase RPC functions handle concurrent registration for limited-capacity events — prevents double-booking without application-level locking",
      "Upstash Redis rate limiting on the registration endpoint prevents form abuse without a dedicated backend service",
      "Resend + server-side PDF generation for confirmation emails keeps everything in the Next.js API routes — no extra service to maintain",
      "Meta Conversions API wired server-side so registrations are tracked accurately regardless of browser ad blockers",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PayPal Orders API v2",
      "Resend",
      "Upstash Redis",
      "Meta Conversions API",
      "Vercel",
    ],
    links: {},
    screenshotPlaceholder: true,
    architecture: {
      summary:
        "The club's WordPress/SportsEngine site leads into a Next.js registration app on Vercel; its API routes call Supabase, PayPal, Resend, Upstash Redis and the Meta Conversions API.",
      tiers: [
        { label: "Entry", nodes: [{ id: "site", label: "Club site", note: "WordPress / SportsEngine" }] },
        { label: "App", nodes: [{ id: "app", label: "Registration app", note: "Next.js API routes · Vercel" }] },
        {
          label: "Services",
          nodes: [
            { id: "db", label: "Supabase", note: "atomic RPC" },
            { id: "pay", label: "PayPal", note: "Orders API v2" },
            { id: "mail", label: "Resend", note: "PDF attachments" },
            { id: "rl", label: "Upstash Redis", note: "rate limit" },
            { id: "capi", label: "Meta CAPI", note: "server-side" },
          ],
        },
      ],
      edges: [["site", "app"], ["app", "db"], ["app", "pay"], ["app", "mail"], ["app", "rl"], ["app", "capi"]],
    },
    // TODO(Santiago): your own retrospective, e.g. 2-3 bullets. Section stays hidden until filled.
    whatIdChange: [],
    featured: true,
  },
  {
    title: "PSLSC Store",
    subtitle: "Club e-commerce storefront on third-party inventory",
    description:
      "E-commerce storefront for Port St. Lucie SC's merchandise, built on top of a third-party supplier's product and order API rather than owning inventory directly — the club operates the storefront and payment flow while fulfillment runs through the supplier underneath.",
    problem:
      "The club wanted its own branded store experience, full control over payments and customer communication, and a simple account system — without building and maintaining its own warehouse, fulfillment, or product catalog.",
    role: "Sole engineer. Designed the auth, payments and security architecture; integrated the supplier API end to end.",
    keyDecisions: [
      "Passwordless email-code authentication removes password-reset support overhead for a low-frequency shopper base",
      "A single service account against the supplier's API creates every order server-side — the shopper never sees or needs an account with the supplier, mirroring the pattern already proven on the club's ticketing system",
      "Dedicated backend service on Railway isolates the supplier integration and secrets from the public Next.js frontend",
      "Security hardening pass: Upstash Redis rate limiting on auth endpoints, Supabase RLS on every table, server-side Zod validation, centralized timeouts on all upstream API calls, idempotent checkout confirmed against real PayPal sandbox traffic",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Supabase",
      "Railway",
      "PayPal Orders API v2",
      "Upstash Redis",
      "Resend",
    ],
    links: { live: "https://store.portstluciesc.com" },
    screenshotPlaceholder: true,
    // TODO(Santiago): confirm which service calls Supabase, PayPal, Redis and Resend.
    // Drawn from the Railway backend because it "isolates the supplier integration and secrets".
    architecture: {
      summary:
        "A Next.js storefront talks to a dedicated backend on Railway, which holds the single supplier service account and calls PayPal, Supabase, Upstash Redis and Resend.",
      tiers: [
        { label: "Client", nodes: [{ id: "web", label: "Storefront", note: "Next.js · Zustand · TanStack Query" }] },
        { label: "Server", nodes: [{ id: "api", label: "Backend service", note: "Railway · holds supplier secrets" }] },
        {
          label: "Services",
          nodes: [
            { id: "sup", label: "Supplier API", note: "one service account" },
            { id: "pay", label: "PayPal", note: "Orders API v2" },
            { id: "db", label: "Supabase", note: "RLS on every table" },
            { id: "rl", label: "Upstash Redis", note: "auth rate limit" },
            { id: "mail", label: "Resend", note: "email codes" },
          ],
        },
      ],
      edges: [["web", "api"], ["api", "sup"], ["api", "pay"], ["api", "db"], ["api", "rl"], ["api", "mail"]],
    },
    // TODO(Santiago): your own retrospective. Section stays hidden until filled.
    whatIdChange: [],
    featured: true,
  },
  {
    title: "Cancha-hub",
    subtitle: "Multi-tenant SaaS court-booking platform",
    description:
      "A production SaaS platform for sports venues in Argentina and LATAM to manage court bookings, memberships, and customer access. Built to handle multiple venues under a single deployment.",
    problem:
      "Sports venues in LATAM were managing bookings via WhatsApp and spreadsheets. No affordable, localized SaaS solution existed for small-to-mid-size clubs.",
    role: "Sole engineer and designer. Designed the multi-tenant architecture, built all frontend and backend, deployed on Vercel + Supabase.",
    keyDecisions: [
      "Row-Level Security (RLS) on Supabase enforces tenant isolation at the database layer — no tenant can read another's data even if there's a bug in application logic",
      "Next.js 14 App Router with server components for fast first-paint on dashboard pages with a lot of data",
      "Role-based dashboards (admin / venue owner / client) driven by a single auth flow — Supabase Auth stores the role claim in the JWT",
    ],
    tech: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Row-Level Security",
      "Tailwind CSS",
      "Vercel",
    ],
    links: { github: "https://github.com/Santiagoh99" },
    screenshotPlaceholder: true,
    architecture: {
      summary:
        "Admin, venue-owner and client dashboards share one Next.js App Router app on Vercel; Supabase Auth carries the role claim and Postgres RLS isolates tenants.",
      tiers: [
        {
          label: "Roles",
          nodes: [
            { id: "admin", label: "Admin" },
            { id: "owner", label: "Venue owner" },
            { id: "client", label: "Client" },
          ],
        },
        { label: "App", nodes: [{ id: "app", label: "Next.js App Router", note: "server components · Vercel" }] },
        {
          label: "Data",
          nodes: [
            { id: "auth", label: "Supabase Auth", note: "role claim in JWT" },
            { id: "db", label: "Postgres", note: "RLS per tenant" },
          ],
        },
      ],
      edges: [["admin", "app"], ["owner", "app"], ["client", "app"], ["app", "auth"], ["app", "db"]],
    },
    // TODO(Santiago): your own retrospective. Section stays hidden until filled.
    whatIdChange: [],
    featured: true,
  },
  {
    title: "Fecalpo",
    subtitle: "AI-powered WhatsApp bot for shared household expenses",
    description:
      "A zero-cost WhatsApp bot that replaces a paid expense-splitting app. Reads free-form text or voice messages, extracts structured expense and shopping-list data with an LLM, and tracks who owes whom.",
    problem:
      "Paid expense-splitting apps require both people to open a separate app. The goal was a $0, zero-friction alternative that lives entirely inside a chat both people already use daily.",
    role: "Sole engineer and designer — personal project, built end to end solo.",
    keyDecisions: [
      "Google Gemini API turns free-form text and transcribed voice messages into structured, Zod-validated data — no rigid command syntax required",
      "Regex shortcuts handle common intents (balance checks, greetings) without spending an LLM call on every message",
      "Retry with backoff plus a fallback model keeps the bot usable on a free-tier LLM plan that occasionally rate-limits",
      "WhatsApp's 24-hour messaging window is respected by queuing notifications instead of forcing paid template messages",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Google Gemini API",
      "WhatsApp Cloud API",
      "Zod",
      "Vercel",
    ],
    // Repo is private — add `github` back once it is public.
    links: {},
    screenshotPlaceholder: true,
    featured: false,
  },
  {
    title: "LAB.<3M",
    subtitle: "Brand site for a fashion image-consulting studio",
    description:
      "Editorial-style landing page for LAB.<3M, a fashion and image-consulting studio, with separate service tracks for individuals and brands and a WhatsApp-first inquiry flow.",
    problem:
      "The studio needed a site that matched a black-and-white, high-fashion editorial identity — not a generic template — while routing every inquiry straight into WhatsApp, where the studio actually operates.",
    role: "Sole engineer and designer. Translated the client's brand deck into a working, animated site.",
    keyDecisions: [
      "A WhatsApp-first contact pattern: a pre-form captures service and audience (individual vs. brand), then deep-links into WhatsApp with the message pre-filled",
      "Framer Motion and Lenis smooth scrolling for the editorial, scroll-driven feel the brand deck called for",
      "Upstash Redis rate limiting on the one server-side form (the longer-form Resend-backed inquiry) to prevent abuse without adding a dedicated backend",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "React Hook Form",
      "Resend",
      "Upstash Redis",
    ],
    links: { github: "https://github.com/Santiagoh99/lab.m" },
    screenshot: "/img/labm-hero.jpg",
    featured: false,
  },
  {
    title: "Santander Investment Platform",
    subtitle: "High-availability fintech investment platform",
    description:
      "Investment platform serving Santander Argentina customers, built in a high-availability fintech environment with strict code quality and monitoring requirements.",
    problem:
      "Enterprise-scale investment product requiring high availability, multiple data sources (relational, document, and legacy Oracle), and strict audit/monitoring requirements.",
    role: "Full Stack Developer on a Scrum team. Owned backend API modules and contributed to microfrontend components.",
    keyDecisions: [
      "Microservices architecture with NestJS keeps each domain independently deployable",
      "Polyglot persistence — PostgreSQL for transactional data, MongoDB for flexible document storage, Oracle for legacy integration",
      "SonarQube quality gates and Jest coverage thresholds enforced in CI — no merge without passing them",
    ],
    tech: [
      "NestJS",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Oracle",
      "Docker",
      "OpenShift",
      "GitLab CI/CD",
      "Dynatrace",
    ],
    links: {},
    screenshotPlaceholder: true,
    architecture: {
      summary:
        "Microfrontend modules call NestJS microservices backed by PostgreSQL, MongoDB and Oracle; GitLab CI deploys to OpenShift and Dynatrace monitors production.",
      tiers: [
        { label: "Frontend", nodes: [{ id: "mfe", label: "Microfrontends" }] },
        {
          label: "Services",
          nodes: [
            { id: "svc", label: "NestJS microservices", note: "OpenShift · Dynatrace" },
          ],
        },
        {
          label: "Data",
          nodes: [
            { id: "pg", label: "PostgreSQL", note: "transactional" },
            { id: "mongo", label: "MongoDB", note: "documents" },
            { id: "ora", label: "Oracle", note: "legacy" },
          ],
        },
      ],
      edges: [["mfe", "svc"], ["svc", "pg"], ["svc", "mongo"], ["svc", "ora"]],
    },
    // TODO(Santiago): your own retrospective (keep it non-confidential). Section stays hidden until filled.
    whatIdChange: [],
    featured: true,
  },
];

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Tailwind CSS",
      "Styled Components",
      "Framer Motion",
    ],
  },
  {
    name: "Backend",
    skills: ["Node.js", "NestJS", "Express", ".NET", "C#", "REST APIs"],
  },
  {
    name: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Oracle",
      "Redis",
      "Supabase",
      "Row-Level Security",
      "Hive",
    ],
  },
  {
    name: "Data Engineering & BI",
    skills: ["Power BI", "Data Ingestion Pipelines", "AWS", "Grafana"],
  },
  {
    name: "AI & LLM Engineering",
    skills: [
      "Claude Code",
      "Agentic Dev Workflows",
      "Google Gemini API",
      "Prompt Engineering",
      "Structured Output (Zod)",
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      "GitLab CI/CD",
      "Docker",
      "OpenShift",
      "Vercel",
      "Railway",
      "SonarQube",
      "AWS",
    ],
  },
  {
    name: "Integrations",
    skills: [
      "PayPal Orders API",
      "Meta Conversions API",
      "Resend",
      "Upstash Redis",
      "WordPress VIP",
      "SportsEngine",
      "ActiveCampaign",
      "GA4",
    ],
  },
  {
    name: "Testing & Monitoring",
    skills: ["Jest", "Dynatrace", "Grafana"],
  },
  {
    name: "Methodology",
    skills: ["Agile (Scrum)", "Jira", "Microservices", "Microfrontends"],
  },
];
