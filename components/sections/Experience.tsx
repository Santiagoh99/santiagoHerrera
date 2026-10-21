import Tag from "@/components/ui/Tag";
import { experience as allExperience, type ExperienceItem } from "@/lib/data";

export default function Experience({ items = allExperience }: { items?: ExperienceItem[] }) {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-14">
          Where I&apos;ve worked
        </h2>

        {items.length === 0 ? (
          <p className="text-muted-foreground">No roles listed yet.</p>
        ) : (
          <div className="timeline relative pl-8 md:pl-12">
            {/* Rail + scroll-linked progress (CSS only; static rail without support) */}
            <div className="absolute left-[5px] md:left-[9px] top-2 bottom-2 w-px bg-border" aria-hidden="true">
              <div className="timeline-progress absolute inset-0 bg-accent" />
            </div>

            <ol>

            {items.map((item, i) => (
              <li key={`${item.company}-${i}`} className="relative pb-14 last:pb-0 break-words">
                <span
                  className="timeline-marker absolute -left-8 md:-left-12 top-1.5 size-[11px] md:size-[19px] rounded-full border-2 border-accent bg-background"
                  aria-hidden="true"
                />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-6 gap-y-1 mb-3">
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-bold text-foreground break-words">
                      {item.title}
                    </h3>
                    <p className="text-accent font-medium text-sm mt-0.5 break-words">{item.company}</p>
                  </div>
                  <p className="sm:flex-shrink-0 font-mono text-xs text-muted-foreground tabular">
                    {item.period}
                    <span className="mx-2" aria-hidden="true">·</span>
                    {item.type === "full-time" ? "Full-time" : item.type === "contract" ? "Contract" : "Freelance"}
                  </p>
                </div>

                {item.description && (
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed max-w-3xl">
                    {item.description}
                  </p>
                )}

                {item.highlights.length > 0 && (
                  <ul className="space-y-1.5 mb-5 max-w-3xl">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-muted-foreground" aria-hidden="true" />
                        <span className="text-muted-foreground min-w-0 break-words">{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {item.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
              </li>
            ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
