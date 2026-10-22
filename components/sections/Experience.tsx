import { Plus } from "lucide-react";
import Tag from "@/components/ui/Tag";
import SectionLabel from "@/components/ui/SectionLabel";
import { experience as allExperience, type ExperienceItem } from "@/lib/data";

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

/** "Mar 2023" → Date; "2021" → Jan 2021; "Present" → now (evaluated at build time). */
function parse(part: string, end: boolean): Date | null {
  const p = part.trim().toLowerCase();
  if (p === "present") return new Date();
  const m = p.match(/^([a-z]{3})\w*\s+(\d{4})$/);
  if (m) return new Date(Number(m[2]), MONTHS.indexOf(m[1]), 1);
  const y = p.match(/^(\d{4})$/);
  if (y) return new Date(Number(y[1]), end ? 11 : 0, 1);
  return null;
}

/** "Aug 2021 – Mar 2023" → "1 yr 7 mos". Null when the period can't be parsed. */
function duration(period: string): string | null {
  const [a, b] = period.split(/\s*[–-]\s*/);
  if (!a || !b) return null;
  const start = parse(a, false);
  const end = parse(b, true);
  if (!start || !end) return null;
  const months = Math.max(1, (end.getFullYear() - start.getFullYear()) * 12 + end.getMonth() - start.getMonth() + 1);
  const yrs = Math.floor(months / 12);
  const mos = months % 12;
  return [yrs && `${yrs} yr${yrs > 1 ? "s" : ""}`, mos && `${mos} mo${mos > 1 ? "s" : ""}`].filter(Boolean).join(" ");
}

export default function Experience({ items = allExperience }: { items?: ExperienceItem[] }) {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6 mb-10">
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-mono font-medium text-foreground tracking-[-0.04em] leading-none text-6xl md:text-8xl">
            Work
          </h2>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="max-w-6xl mx-auto px-6 text-muted-foreground">No roles listed yet.</p>
      ) : (
        <ol className="border-t border-border">
          {items.map((item, i) => {
            const d = duration(item.period);
            return (
              <li key={`${item.company}-${i}`} className="border-b border-border">
                <details className="work-row group">
                  <summary className="work-summary cursor-pointer list-none transition-colors duration-200">
                    <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-[1fr_auto] md:grid-cols-[11rem_1fr_1.3fr_auto] gap-x-6 gap-y-1 items-center">
                      <div className="font-mono text-sm tabular">
                        {item.period}
                        {d && <span className="block text-xs opacity-60">{d}</span>}
                      </div>
                      <div className="hidden md:block font-medium break-words">{item.company}</div>
                      <div className="col-span-1 md:col-span-1 font-mono text-sm break-words">
                        <span className="md:hidden block font-sans font-medium mb-0.5">{item.company}</span>
                        {item.title}
                        {item.tech.length > 0 && (
                          <span className="opacity-60">
                            {" "}
                            | {item.tech.slice(0, 2).join(" & ")}
                          </span>
                        )}
                      </div>
                      <Plus
                        size={18}
                        className="row-start-1 col-start-2 md:row-auto md:col-auto transition-transform duration-200 group-open:rotate-45"
                        aria-hidden="true"
                      />
                    </div>
                  </summary>

                  <div className="max-w-6xl mx-auto px-6 pb-8 pt-2 md:pl-[calc(1.5rem+11rem+1.5rem)] break-words">
                    {item.description && (
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed max-w-3xl">{item.description}</p>
                    )}
                    {item.highlights.length > 0 && (
                      <ul className="space-y-1.5 mb-5 max-w-3xl">
                        {item.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2.5 text-sm">
                            <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                            <span className="text-muted-foreground min-w-0">{h}</span>
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
                  </div>
                </details>
              </li>
            );
          })}
        </ol>
      )}

      <div className="max-w-6xl mx-auto px-6 mt-6 text-right text-sm text-muted-foreground">
        Work experience
        <span className="block italic text-foreground">4+ years</span>
      </div>
    </section>
  );
}
