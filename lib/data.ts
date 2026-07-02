export const siteConfig = {
  name: "Santiago Herrera",
  role: "Full Stack Software Engineer",
  tagline:
    "4+ years building fintech and sports-tech products in production. Available for remote work.",
  location: "Buenos Aires, Argentina",
  email: "santiherrera99@icloud.com",
  linkedin: "https://www.linkedin.com/in/santiago-martin-herrera",
  github: "https://github.com/Santiagoh99",
  resumeUrl: null as string | null,
};

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
      "Freelance English-only collaboration with a professional soccer club in USL League One. Manage the club's WordPress VIP/SportsEngine multisite and built a full tournament registration system from scratch.",
    highlights: [
      "Built tournament registration system handling concurrent seat reservations with atomic Supabase RPC functions",
      "Integrated PayPal Orders API v2 for secure payments with webhook verification",
      "Implemented Resend for transactional emails with PDF attachment generation",
      "Added Upstash Redis rate limiting to prevent form abuse on free-tier infrastructure",
      "Wired Meta Conversions API for accurate server-side conversion tracking",
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
      "Investment platform development in a high-availability fintech environment. Part of an Agile team delivering backend services and frontend modules for an internal investment product.",
    highlights: [
      "Built and maintained REST APIs with Node.js/NestJS/TypeScript",
      "Worked with polyglot persistence: PostgreSQL, MongoDB, and Oracle",
      "Developed microfrontend modules integrated into the broader platform",
      "Maintained high availability via GitLab CI/CD pipelines and OpenShift deployment",
      "Used Dynatrace for production monitoring and incident response",
      "Enforced code quality gates with SonarQube and Jest test coverage",
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
  screenshotPlaceholder: true;
  featured: boolean;
};

export const projects: Project[] = [
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
    links: {},
    screenshotPlaceholder: true,
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
    featured: true,
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
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      "GitLab CI/CD",
      "Docker",
      "OpenShift",
      "Vercel",
      "SonarQube",
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
    skills: ["Jest", "Dynatrace"],
  },
  {
    name: "Methodology",
    skills: ["Agile (Scrum)", "Jira", "Microservices", "Microfrontends"],
  },
];
