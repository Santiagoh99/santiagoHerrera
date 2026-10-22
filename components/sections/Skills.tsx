import { skillCategories } from "@/lib/data";
import RevealWords from "@/components/ui/RevealWords";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-12">
          <RevealWords text="Tech stack" />
        </h2>

        <dl className="divide-y divide-border border-y border-border">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-1 md:grid-cols-[14rem_1fr] gap-x-8 gap-y-1 py-4"
            >
              <dt className="text-sm font-semibold text-foreground">{category.name}</dt>
              <dd className="font-mono text-sm text-muted-foreground leading-relaxed">
                {category.skills.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
