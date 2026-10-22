import Image from "next/image";
import { about, siteConfig, skillCategories } from "@/lib/data";
import SectionLabel from "@/components/ui/SectionLabel";

// Renders `**text**` segments as emphasis.
function Emphasis({ text }: { text: string }) {
  return text.split("**").map((part, i) =>
    i % 2 ? (
      <em key={i} className="text-foreground not-italic font-medium">
        {part}
      </em>
    ) : (
      part
    )
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="deco-ring pointer-events-none absolute top-24 -right-48 size-[30rem] rounded-full border border-border/50" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-6 md:gap-16 mb-16">
          <SectionLabel>About me</SectionLabel>
          <div>
            <h2 className="text-xl md:text-2xl text-foreground leading-snug font-sans font-normal tracking-normal mb-6">
              Hello! I&apos;m Santiago, a <em>full-stack developer</em> with <em>4+ years</em> of experience.{" "}
              <span className="text-muted-foreground">{about.heading}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {about.paragraphs.map((p) => (
                <p key={p}>
                  <Emphasis text={p} />
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-start">
          <div>
            <h3 className="sr-only">Technologies</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
              {skillCategories.map((category, i) => (
                <li
                  key={category.name}
                  className={`skill-box rounded-2xl border p-5 transition-colors duration-200 ${
                    i === 0
                      ? "sm:col-span-2 bg-foreground text-background border-foreground"
                      : "bg-surface/60 border-border hover:border-muted-foreground"
                  }`}
                >
                  <p className={`text-base font-medium mb-2 ${i === 0 ? "text-background" : "text-foreground"}`}>
                    {category.name}
                  </p>
                  <p className={`font-mono text-xs leading-relaxed ${i === 0 ? "text-background/80" : "text-muted-foreground"}`}>
                    {category.skills.join(" / ")}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-muted-foreground">
              Some of the <em className="text-foreground">technologies, tools and topics</em> I work with.
            </p>
          </div>

          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:ml-auto rounded-3xl overflow-hidden border border-border">
              <Image
                src="/img/me.jpg"
                alt={`${siteConfig.name}, ${siteConfig.role}`}
                fill
                sizes="(min-width: 1024px) 384px, 90vw"
                className="object-cover grayscale contrast-110"
              />
            </div>
            <dl className="max-w-sm mx-auto lg:ml-auto space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-border pb-3">
                <dt className="text-muted-foreground">Education</dt>
                <dd className="text-right text-foreground">
                  {about.education.title}
                  <span className="block text-xs text-muted-foreground">{about.education.detail}</span>
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Languages</dt>
                <dd className="text-right text-foreground">{about.languages}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
