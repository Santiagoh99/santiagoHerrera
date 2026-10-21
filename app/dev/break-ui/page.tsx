import { notFound } from "next/navigation";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import { experience, projects } from "@/lib/data";
import { worstExperience, worstProjects } from "@/lib/fixtures/worstCase";

// Dev-only stress harness (`/dev/break-ui?data=worst`). 404s in production builds.
const states = ["demo", "worst", "empty", "one"] as const;

export default async function BreakUi({
  searchParams,
}: {
  searchParams: Promise<{ data?: string }>;
}) {
  if (process.env.NODE_ENV === "production") notFound();
  const { data = "demo" } = await searchParams;

  const sets = {
    demo: { exp: experience, proj: projects },
    worst: { exp: worstExperience, proj: worstProjects },
    empty: { exp: [], proj: [] },
    one: { exp: experience.slice(0, 1), proj: projects.slice(0, 1) },
  };
  const { exp, proj } = sets[data as keyof typeof sets] ?? sets.demo;

  return (
    <main className="pb-24">
      <Experience items={exp} />
      <Projects items={proj} />
      <nav
        style={{ position: "fixed", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 2, padding: 2, background: "#3a3a3a", borderRadius: 8, font: "12px system-ui", zIndex: 100 }}
      >
        {states.map((s) => (
          <a
            key={s}
            href={`?data=${s}`}
            style={{ padding: "6px 10px", borderRadius: 6, color: s === data ? "#000" : "#ddd", background: s === data ? "#fff" : "transparent" }}
          >
            {s}
          </a>
        ))}
      </nav>
    </main>
  );
}
