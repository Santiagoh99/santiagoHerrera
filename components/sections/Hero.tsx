import { ArrowRight, Download, Github, Instagram, Linkedin } from "lucide-react";
import { projects, siteConfig } from "@/lib/data";
import CursorGlow from "@/components/ui/CursorGlow";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import { slugify } from "@/lib/slug";

const pill =
  "press inline-flex items-center gap-2 min-h-10 px-4 rounded-full border border-border bg-background/40 text-xs md:text-sm text-muted-foreground hover:text-foreground hover:border-muted-foreground";

export default function Hero() {
  const carouselItems = projects
    .filter((p) => p.screenshot)
    .map((p) => ({ slug: slugify(p.title), title: p.title, subtitle: p.subtitle, image: p.screenshot! }));

  return (
    <section id="top" className="hero relative flex flex-col overflow-hidden pb-16" aria-label="Introduction">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <CursorGlow />
      {/* Thin outline circles, decoration only */}
      <div className="deco-ring pointer-events-none absolute -top-40 -right-40 size-[34rem] rounded-full border border-border/60" aria-hidden="true" />
      <div className="deco-ring pointer-events-none absolute top-[38rem] -left-56 size-[28rem] rounded-full border border-border/40" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 md:pt-40 w-full">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h1 className="font-mono font-medium text-foreground tracking-[-0.04em] leading-[0.95] text-[clamp(3.25rem,11vw,9rem)]">
            <span className="sr-only">{siteConfig.name}, </span>
            <span className="assemble-word block" style={{ "--i": 0 } as React.CSSProperties}>
              Full-stack
            </span>
            <span className="sr-only"> Developer</span>
          </h1>
          <a href="#projects" className="press hidden md:inline-flex items-center gap-2 mb-4 shrink-0">
            <span className="inline-flex items-center min-h-12 px-10 rounded-full bg-foreground text-background font-medium italic">
              Projects
            </span>
            <span className="inline-flex items-center justify-center size-12 rounded-full bg-foreground text-background">
              <ArrowRight size={18} aria-hidden="true" />
            </span>
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:items-end">
          <div className="max-w-md">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I build <em className="text-foreground">web products</em> for companies in the{" "}
              <em className="text-foreground">U.S. and Argentina</em>: payments, e-commerce, SaaS and fintech
              platforms, from the database to the interface.
            </p>
            <p className="chip-in mt-4 font-mono text-xs md:text-sm text-foreground/90 leading-relaxed" style={{ "--i": 0 } as React.CSSProperties}>
              {siteConfig.stack.join(" / ")}
            </p>
          </div>
          <p
            aria-hidden="true"
            className="assemble-word font-mono font-medium text-foreground tracking-[-0.04em] leading-[0.95] text-[clamp(3.25rem,11vw,9rem)] md:text-right"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Developer
          </p>
        </div>

        <ul className="mt-12 flex flex-wrap justify-center gap-2.5" role="list">
          <li>
            <a href="#contact" className={pill}>
              <span className="relative flex size-2" aria-hidden="true">
                <span className="status-ping absolute inline-flex size-full rounded-full bg-emerald-400" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {siteConfig.availability}
            </a>
          </li>
          <li>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className={pill}>
              <Github size={15} aria-hidden="true" /> GitHub
            </a>
          </li>
          <li>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className={pill}>
              <Linkedin size={15} aria-hidden="true" /> LinkedIn
            </a>
          </li>
          {siteConfig.instagram && (
            <li>
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className={pill}>
                <Instagram size={15} aria-hidden="true" /> Instagram
              </a>
            </li>
          )}
          {siteConfig.resumeUrl && (
            <li>
              <a href={siteConfig.resumeUrl} download className={pill}>
                <Download size={15} aria-hidden="true" /> Download CV
              </a>
            </li>
          )}
        </ul>

        <a
          href="#projects"
          className="press md:hidden mt-6 flex items-center justify-center gap-2 min-h-12 rounded-full bg-foreground text-background font-medium italic"
        >
          Projects <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>

      <div className="relative mt-14">
        <ProjectCarousel items={carouselItems} />
      </div>
    </section>
  );
}
