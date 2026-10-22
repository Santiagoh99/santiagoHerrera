export const siteConfig = {
  name: "Santiago Herrera",
  role: "Full Stack Developer",
  // Set NEXT_PUBLIC_SITE_URL once the production domain exists; Vercel's
  // production URL is used as a fallback for canonical + OG links.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),
  stack: ["Node.js", "NestJS", "Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "AWS"],
  tagline:
    "I build web products for companies in the U.S. and Argentina: payments, e-commerce, SaaS and fintech platforms, from the database to the interface.",
  metaDescription:
    "Full Stack Developer in Buenos Aires building payments, e-commerce, SaaS and fintech products for companies in the U.S. and Argentina. Node.js, NestJS, Next.js, TypeScript, PostgreSQL.",
  location: "Buenos Aires, Argentina",
  availability: "Open to remote work",
  email: "santiherrera99@icloud.com",
  linkedin: "https://www.linkedin.com/in/santiago-martin-herrera",
  github: "https://github.com/Santiagoh99",
  // TODO(Santiago): add your Instagram URL; the link shows up in the contact section once set.
  instagram: null as string | null,
  resumeUrl: "/Santiago_Herrera_CV.pdf" as string | null,
};

// `**text**` marks emphasis; rendered by the About section.
export const about = {
  heading: "Most of what I build moves money or books something.",
  paragraphs: [
    "Checkouts, ticket deposits, reservations, investment platform features. I care that it works the day it launches and keeps working after.",
    "Today I build for a **bank's investment platform in Argentina** and for a **professional soccer club in the U.S.**, remotely and in English, plus SaaS products for restaurants and sports venues.",
    "Before that, and alongside it: **React Native mobile apps**, e-commerce for independent brands and internal tools. Lately I'm adding data engineering to the stack: ingestion pipelines with Hive and AWS, Power BI and Grafana.",
    "I build AI features as part of the normal stack: LLM parsing with Gemini and Zod-validated output, and agentic workflows with Claude Code.",
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
  body: "I'm open to full-time remote roles and freelance projects. Tell me what you're building and I'll get back to you by email.",
  timezone: "Buenos Aires, Argentina (UTC-3) · Remote-first",
};

export const projectsIntro =
  "Production systems for real clients, in the order I'd want you to see them.";

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
      "Built a React Native personal-credit app: simulator, installments, merchants and credit authorization codes",
      "Built e-commerce for independent fashion brands (Ecklypce, Pilcha SM)",
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
  /** Production incidents. An entry renders only once all three fields are filled in. */
  incidents?: Incident[];
  /** Interactive "Illustration" next to the case study. In-diagram labels live in `components/ui/Illustration.tsx`. */
  illustration?: { kind: "race" | "payment" | "parse"; caption: string };
  /** Short looping clip (muted, lazy). Takes precedence over `screenshot`; `poster` is shown until it plays. */
  video?: { src: string; poster: string };
};

export type Incident = {
  title: string;
  whatHappened: string;
  howIFound: string;
  whatIChanged: string;
};

export type Architecture = {
  summary: string;
  tiers: { label: string; nodes: { id: string; label: string; note?: string }[] }[];
  edges: [from: string, to: string][];
};

export const projects: Project[] = [
  {
    title: "Port St. Lucie SC — Official Website",
    subtitle: "Taking a designed prototype to production on a locked-down WordPress",
    description:
      "The club's public site (Home, Join Us, Partners, Academy, Staff) runs on a WordPress multisite managed by SportsEngine/USL. The club's design team built an HTML/CSS/JS prototype; I own the engineering that ships it to production and keeps it running.",
    problem:
      "The WordPress install is managed by the league's platform provider: no plugins, no server or SFTP access, no theme edits. Every section had to work as a pasted Custom HTML block, and every form had to reach the club's email marketing without a backend of our own.",
    role: "Production engineer. Design by the club's design team; I built the block compiler and asset pipeline, wired forms, news and ticketing, and fix what breaks inside WordPress.",
    keyDecisions: [
      "A Python compiler turns each section into a standalone Custom HTML block: CSS namespaced under one wrapper class for two-way isolation from the theme, and JS shipped as a data URI because WordPress rewrites inline script text (`&&` becomes `&#038;&#038;`) and breaks it",
      "A second build path for Media Library-only access: an asset-mapping step that resolves each uploaded file's unpredictable URL, since there is no shared asset base and .woff2 uploads are rejected",
      "Newsletter, partner contact and tryouts forms use a proxy pattern: our styled form fills a hidden ActiveCampaign embed and detects success with a MutationObserver, selecting by class because the embed randomizes its id on every load",
      "The news section reads real posts from the WordPress REST API (a custom post type) client-side, and falls back silently to static cards if the request fails, so it never renders empty",
      "The theme's native header can only be restyled with CSS; that reskin was verified against the real adaptive menu by loading the live draft in a fresh iframe per viewport width",
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Components",
      "Python",
      "WordPress",
      "SportsEngine",
      "ActiveCampaign",
      "WP REST API",
      "Vivenu",
    ],
    links: { live: "https://www.portstluciesc.com/home/" },
    screenshot: "/img/pslsc-site.jpg",
    architecture: {
      summary:
        "Sections and web components are compiled into standalone blocks, pasted into the league-managed WordPress, and talk to ActiveCampaign, the WordPress REST API and the Vivenu ticketing site from the browser.",
      tiers: [
        {
          label: "Source",
          nodes: [
            { id: "src", label: "Sections", note: "1 file = 1 block" },
            { id: "wc", label: "Web components", note: "<psl-*>" },
          ],
        },
        { label: "Build", nodes: [{ id: "cc", label: "Block compiler", note: "Python" }] },
        { label: "Host", nodes: [{ id: "wp", label: "WordPress", note: "Custom HTML blocks · SportsEngine" }] },
        {
          label: "Services",
          nodes: [
            { id: "ac", label: "ActiveCampaign", note: "3 forms via proxy" },
            { id: "rest", label: "WP REST API", note: "news" },
            { id: "viv", label: "Vivenu", note: "ticketing" },
          ],
        },
      ],
      edges: [["src", "cc"], ["wc", "cc"], ["cc", "wp"], ["wp", "ac"], ["wp", "rest"], ["wp", "viv"]],
    },
    // TODO(Santiago): your own retrospective. Section stays hidden until filled.
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
    screenshot: "/img/pslsc-store.jpg",
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
    // TODO(Santiago): confirm the wording and which project each belongs to (Store or Luca FC Cup),
    // then write howIFound + whatIChanged. Each incident stays hidden until all three fields are filled.
    incidents: [
      {
        title: "Order ID vs. Capture ID",
        whatHappened: "The PayPal Order ID and the Capture ID were mixed up.",
        howIFound: "",
        whatIChanged: "",
      },
      {
        title: "A completed payment shown as failed",
        whatHappened: "A payment that had completed was shown as failed, because the transaction ID being checked didn't match.",
        howIFound: "",
        whatIChanged: "",
      },
      {
        title: "Auth guard not applied",
        whatHappened: "An auth guard existed but wasn't applied to the auth routes.",
        howIFound: "",
        whatIChanged: "",
      },
    ],
    // TODO(Santiago): confirm the store treats the capture response and the webhook idempotently.
    illustration: {
      kind: "payment",
      caption:
        "PayPal Orders v2: the server creates the order, the buyer approves it, the server captures it and the webhook confirms it. Checkout is idempotent, so the order changes state once.",
    },
    featured: true,
  },
  {
    title: "Arribando",
    subtitle: "Reservations and orders SaaS for restaurants, run over WhatsApp",
    description:
      "A multi-tenant product for restaurants: online reservations, takeaway orders and an editable menu, managed from one panel and connected to WhatsApp. Sold in three plans and already used by Círculo, a restaurant in Buenos Aires.",
    problem:
      "Small restaurants take reservations and orders through scattered WhatsApp chats and calls. They need one place to see and confirm everything, with their own branding.",
    role: "Creator. Built the product end to end under Atlantic Four Tech, from the first client (Círculo) to a sellable plan structure.",
    keyDecisions: [
      "Multi-tenant Supabase schema with Row-Level Security on every table, so each restaurant only ever sees its own reservations, orders and menu",
      "Supabase Realtime pushes new reservations and orders into the owner's panel without a refresh",
      "Upstash Redis rate limiting on the public reservation and order flows, which are open to anyone",
      "Database backups with GitHub Actions to Cloudflare R2, outside the main provider",
      "The public site includes an interactive demo of the full flow that saves and sends nothing, so restaurants can try it before buying",
    ],
    tech: [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "Supabase Realtime",
      "Row-Level Security",
      "MercadoPago",
      "Resend",
      "Upstash Redis",
      "GitHub Actions",
      "Cloudflare R2",
      "Vercel",
    ],
    links: { live: "https://arribando.atlanticfourtech.com" },
    screenshot: "/img/arribando.jpg",
    // TODO(Santiago): confirm Arribando is the productized version of the Círculo platform (Resa Hub); the stack and decisions above come from that project. Also confirm the Realtime use in the panel.
    whatIdChange: [],
    featured: true,
  },
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
    illustration: {
      kind: "race",
      caption:
        "Two registrations reach the last spot at the same moment. One atomic Supabase RPC checks capacity and reserves in a single step, so exactly one gets through.",
    },
    featured: true,
  },
  {
    title: "PSLSC Soccer School",
    subtitle: "Pre-registration landing for the club's youth soccer school",
    description:
      "A standalone landing that collects pre-registrations from families (kids aged 5–13) while the full microsite is built. Plain HTML/CSS/JS on Vercel, with a full-screen intro video that doubles as the loading screen.",
    problem:
      "The club needed to start collecting leads for its soccer school right away, straight into ActiveCampaign with campaign attribution, without waiting for the WordPress site or depending on a third-party embed script.",
    role: "Sole engineer. Built it from the club's brand manual, in the club's own repository.",
    keyDecisions: [
      "The form POSTs directly to ActiveCampaign instead of loading its embed script: on the club's main site, the consent manager and ad blockers were silently dropping that script, so submissions never arrived",
      "Form logic (UTM capture, validation, field mapping) is a pure, DOM-free module with unit tests run by Node's built-in test runner",
      "The intro video is cut to the exact frame before the next shot and encoded twice (720p for phones, 1080p for large screens); it is skipped under reduced motion, without autoplay, or if it hasn't started within 5 seconds",
      "UTM parameters are captured into dedicated ActiveCampaign fields, with optional Meta Pixel and GA4 events, all switched on from a single config file",
    ],
    tech: ["HTML", "CSS", "JavaScript", "ActiveCampaign", "Node test runner", "ffmpeg", "Vercel"],
    links: { live: "https://soccer-school.portstluciesc.com", github: "https://github.com/ItPortstlucieSC/pslsc-school" },
    screenshot: "/img/pslsc-school.jpg",
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
    subtitle: "AI chatbot on WhatsApp for shared household expenses",
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
    // Root URL only shows a loading screen and the panel needs login, so no public link for now.
    links: {},
    // Rendered from the bot's real reply strings (lib/handler.ts in ChatBot-FeCalPo).
    screenshot: "/img/fecalpo-chat.png",
    featured: false,
  },
  {
    title: "Xilox 3",
    subtitle: "Corporate site for a home, industrial and automotive products company",
    description:
      "Corporate site for Xilox 3, a supplier of products for homes, construction, industry and automotive, in production. Editorial typography, large imagery and scroll-driven motion, with a visible control to pause all movement.",
    problem:
      "The company sells three product lines (home and construction, industry, automotive) to different kinds of buyers, all from one site.",
    role: "Creator. Designed and built the site.",
    keyDecisions: [
      "Each product line gets its own full section with a single clear path to its catalog",
      "Motion is optional: a persistent \"Pause motion\" control stops every animation for visitors who prefer less movement",
    ],
    // TODO(Santiago): add the stack you used.
    tech: [],
    links: { live: "https://xilox-demo.vercel.app" },
    screenshot: "/img/xilox.jpg",
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
    links: { live: "https://lab-m.vercel.app", github: "https://github.com/Santiagoh99/lab.m" },
    screenshot: "/img/labm-hero.jpg",
    featured: false,
  },
  {
    title: "Personal credit app",
    subtitle: "React Native mobile app for consumer credit at partner stores",
    description:
      "Freelance mobile app for a consumer-credit business: a loan simulator, installments, the list of partner merchants and an authorization flow that generates a code for a purchase at a given store.",
    problem:
      "Credit had to be authorized at the point of sale, at partner stores, from a phone.",
    role: "Freelance mobile developer.",
    keyDecisions: [
      "Redux for global state and custom hooks for reusable logic",
      "Yup schemas for form validation across the authorization and simulation flows",
    ],
    tech: ["React Native", "Expo", "Redux", "Yup", "Firebase"],
    links: {},
    screenshot: "/img/credit-app.jpg",
    featured: false,
  },
  {
    title: "Ecklypce",
    subtitle: "Fashion e-commerce with stock management",
    description:
      "Freelance e-commerce for an independent fashion brand, with a real-time inventory management system behind the storefront.",
    problem: "The brand needed its own online store with stock kept in sync as it sold.",
    role: "Freelance full stack developer.",
    keyDecisions: ["Inventory updated in real time as orders come in"],
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    links: { live: "https://www.ecklypce.com" },
    screenshot: "/img/ecklypce-card.jpg",
    featured: false,
  },
  {
    title: "Pilcha SM",
    subtitle: "Multi-brand clothing marketplace",
    description: "Freelance marketplace that brings several clothing brands together, with an integrated payment system for online sales.",
    problem: "Several small brands needed one place to sell online together.",
    role: "Freelance full stack developer.",
    keyDecisions: ["One checkout with integrated payments for products from several brands"],
    tech: ["React", "Express", "PostgreSQL", "Stripe"],
    links: { live: "https://pilchasm.github.io/pilcha.sm" },
    screenshot: "/img/pilcha-card.jpg",
    featured: false,
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
