// Dev-only stress fixtures for /dev/break-ui. Plausible values, not lorem ipsum:
// long-but-real company/role names, unbreakable hostnames as tags, a dozen+ tags,
// a 6-node architecture tier, missing optional fields.
import type { ExperienceItem, Project } from "@/lib/data";

export const worstExperience: ExperienceItem[] = [
  {
    title: "Senior Full Stack Software Engineer & Technical Lead, Payments Platform",
    company: "Santander Tecnología Argentina S.A. — Investment & Wealth Management Engineering",
    period: "Sep 2019 – Present",
    type: "contract",
    location: "Buenos Aires, Argentina",
    description:
      "Led the migration of a monolithic investment back office into independently deployable NestJS services while keeping the legacy Oracle integration online for regulatory reporting.",
    highlights: [
      "Integrated https://developer.paypal.com/docs/api/orders/v2/#orders_capture into the checkout service",
      "Owned observability-dashboards-for-internal-investment-platform-v2 in Grafana",
      "x",
    ],
    tech: [
      "Node.js", "NestJS", "TypeScript", "PostgreSQL", "MongoDB", "Oracle Database 19c",
      "Amazon Web Services (S3, Lambda, Glue)", "store.portstluciesc.com", "C", "Go",
      "GitLab CI/CD", "OpenShift Container Platform", "Dynatrace", "Jest", "SonarQube",
      "Power BI", "Grafana", "Hive",
    ],
  },
  {
    title: "Dev",
    company: "Jo",
    period: "2024",
    type: "freelance",
    location: "",
    description: "",
    highlights: [],
    tech: [],
  },
];

const base: Omit<Project, "title" | "featured"> = {
  subtitle: "Multi-tenant SaaS court-booking platform for sports venues across Argentina and LATAM",
  description:
    "Production storefront on top of a third-party supplier API with passwordless auth, idempotent checkout and per-endpoint rate limiting.",
  problem: "The club needed it yesterday.",
  role: "Sole engineer.",
  keyDecisions: [
    "Idempotency keys on https://api-m.sandbox.paypal.com/v2/checkout/orders/{order_id}/capture prevent double captures on retried webhooks",
    "One",
  ],
  tech: [],
  links: {},
};

export const worstProjects: Project[] = [
  {
    ...base,
    title: "Implementaciones Industriales Inventory & Field Operations Platform",
    featured: true,
    screenshotPlaceholder: true,
    tech: [
      "Next.js 15", "TypeScript", "Supabase", "PostgreSQL", "Row-Level Security", "Upstash Redis",
      "PayPal Orders API v2", "Meta Conversions API", "Resend", "Railway", "Zustand",
      "TanStack Query", "Amazon Web Services (S3, Lambda, Glue)", "store.portstluciesc.com",
    ],
    links: { github: "https://github.com/Santiagoh99/implementaciones-industriales-field-ops", live: "https://store.portstluciesc.com" },
    architecture: {
      summary: "Worst-case diagram: long labels, six services.",
      tiers: [
        { label: "Client applications", nodes: [{ id: "a", label: "Storefront (Next.js App Router)", note: "Zustand · TanStack Query · Vercel Edge Network" }] },
        {
          label: "Services",
          nodes: [
            { id: "b", label: "Supabase Edge Functions", note: "Row-Level Security on every table" },
            { id: "c", label: "PayPal", note: "Orders API v2" },
            { id: "d", label: "Resend" },
            { id: "e", label: "Upstash Redis", note: "sliding-window rate limit" },
            { id: "f", label: "Meta Conversions API", note: "server-side" },
            { id: "g", label: "Supplier API" },
          ],
        },
      ],
      edges: [["a", "b"], ["a", "c"], ["a", "d"], ["a", "e"], ["a", "f"], ["a", "g"]],
    },
    whatIdChange: ["Move PDF generation to a queue so registration latency doesn't depend on it"],
  },
  {
    ...base,
    title: "Q",
    subtitle: "",
    featured: true,
  },
  {
    ...base,
    title: "LAB.<3M — Editorial Brand Site for a Fashion Image-Consulting Studio",
    featured: false,
    links: { github: "https://github.com/Santiagoh99/lab.m" },
    screenshot: "/img/labm-hero.jpg",
    tech: ["Next.js", "Framer Motion", "Lenis", "React Hook Form", "Resend", "Upstash Redis", "Tailwind CSS", "TypeScript", "Vercel", "WhatsApp deep links"],
  },
];
