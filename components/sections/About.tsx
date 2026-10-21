import { about } from "@/lib/data";

// Renders `**text**` segments as emphasis.
function Emphasis({ text }: { text: string }) {
  return text.split("**").map((part, i) =>
    i % 2 ? (
      <strong key={i} className="text-foreground font-medium">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {about.heading}
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {about.paragraphs.map((p) => (
                <p key={p}>
                  <Emphasis text={p} />
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-10 lg:pt-2">
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-foreground">
                {about.highlightsTitle}
              </h3>
              <ul className="space-y-3">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span
                      className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-4">
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center font-mono font-medium text-xs text-foreground"
                  aria-hidden="true"
                >
                  {about.education.short}
                </span>
                <div>
                  <p className="font-medium text-foreground">
                    {about.education.title}
                  </p>
                  <p>{about.education.detail}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span
                  className="flex-shrink-0 w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center font-mono font-medium text-xs text-foreground"
                  aria-hidden="true"
                >
                  EN
                </span>
                <div>
                  <p className="font-medium text-foreground">Languages</p>
                  <p>{about.languages}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
