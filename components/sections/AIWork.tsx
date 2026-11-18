import { aiWork } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";
import RevealWords from "@/components/ui/RevealWords";

export default function AIWork() {
  return (
    <section id="ai" className="py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-6 md:gap-16 mb-12 items-end">
          <div>
            <SectionLabel>AI</SectionLabel>
            <h2 className="mt-4 font-mono font-medium text-foreground tracking-[-0.04em] leading-[0.95] text-4xl md:text-6xl max-w-[14ch]">
              <RevealWords text={aiWork.heading} />
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-xl md:justify-self-end">{aiWork.intro}</p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
          {aiWork.groups.map((group, i) => (
            <li
              key={group.title}
              className={`rounded-3xl border p-6 md:p-8 ${
                i === 0 ? "bg-foreground text-background border-foreground" : "bg-surface/60 border-border"
              }`}
            >
              <h3 className={`font-mono text-lg font-medium mb-5 ${i === 0 ? "text-background" : "text-foreground"}`}>
                {group.title}
              </h3>
              <ul className="space-y-3" role="list">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span
                      className={`mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full ${i === 0 ? "bg-background" : "bg-accent"}`}
                      aria-hidden="true"
                    />
                    <span className={i === 0 ? "text-background/85" : "text-muted-foreground"}>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
