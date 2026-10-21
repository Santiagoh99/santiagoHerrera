import Image from "next/image";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section
      className="relative min-h-svh flex flex-col justify-center"
      aria-label="Introduction"
    >
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[0.95] tracking-[-0.03em] mb-6">
              {siteConfig.name.split(" ").map((word, i) => (
                <span key={word}>
                  {i > 0 && " "}
                  <span className="assemble-word" style={{ "--i": i } as React.CSSProperties}>
                    {word}
                  </span>
                </span>
              ))}
            </h1>

            <p className="assemble-wipe font-display text-xl md:text-2xl font-semibold text-accent mb-5">
              {siteConfig.stackLine}
            </p>

            <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
              {siteConfig.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              {siteConfig.resumeUrl && (
                <a
                  href={siteConfig.resumeUrl}
                  download
                  className="press inline-flex items-center justify-center gap-2 min-h-11 px-6 py-3 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-lg text-sm"
                >
                  <Download size={16} aria-hidden="true" />
                  Download CV
                </a>
              )}
              <a
                href={`mailto:${siteConfig.email}`}
                className="press inline-flex items-center justify-center gap-2 min-h-11 px-6 py-3 border border-border text-foreground hover:border-muted-foreground font-semibold rounded-lg text-sm"
              >
                <Mail size={16} aria-hidden="true" />
                Get in touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 min-h-11 px-4 py-3 text-muted-foreground hover:text-foreground font-semibold rounded-lg transition-colors duration-150 text-sm"
              >
                See projects
                <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>

            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                Currently at{" "}
                {siteConfig.currently.map((c, i) => (
                  <span key={c}>
                    {i > 0 && " and "}
                    <span className="text-foreground font-medium">{c}</span>
                  </span>
                ))}
                .
              </p>
              <div className="flex flex-wrap items-center gap-x-4">
                <span>
                  {siteConfig.location} · {siteConfig.availability}
                </span>
                <span className="flex items-center -ml-3">
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center size-11 rounded-lg hover:text-foreground transition-colors duration-150"
                    aria-label="GitHub profile"
                  >
                    <Github size={20} aria-hidden="true" />
                  </a>
                  <a
                    href={siteConfig.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center size-11 rounded-lg hover:text-foreground transition-colors duration-150"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin size={20} aria-hidden="true" />
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <div className="relative w-80 aspect-square rounded-2xl overflow-hidden border border-border">
              <Image
                src="/img/me.jpg"
                alt={`${siteConfig.name}, ${siteConfig.role}`}
                fill
                className="object-cover"
                priority
                sizes="320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
