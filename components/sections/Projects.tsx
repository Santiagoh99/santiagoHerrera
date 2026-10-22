import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Tag from "@/components/ui/Tag";
import ArchitectureDiagram from "@/components/ui/ArchitectureDiagram";
import SpotlightCard from "@/components/ui/SpotlightCard";
import Illustration from "@/components/ui/Illustration";
import LazyVideo from "@/components/ui/LazyVideo";
import { projects as allProjects, projectsIntro, type Project } from "@/lib/data";
import RevealWords from "@/components/ui/RevealWords";
import SectionLabel from "@/components/ui/SectionLabel";
import { slugify } from "@/lib/slug";

function hostOf(url?: string) {
  if (!url) return null;
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return null;
  }
}

function ProjectScreenshot({ project, featured }: { project: Project; featured?: boolean }) {
  const host = hostOf(project.links.live);
  let media: React.ReactNode;
  if (project.video) {
    media = <LazyVideo {...project.video} label={`${project.title} preview`} />;
  } else if (project.screenshot) {
    media = (
      <Image
        src={project.screenshot}
        alt={`${project.title} preview`}
        fill
        sizes={featured ? "(min-width: 1152px) 1104px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
        className="object-cover object-top"
      />
    );
  } else {
    // No image yet: render nothing rather than an empty placeholder box.
    return null;
  }

  if (!featured) {
    return <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border">{media}</div>;
  }
  return (
    <div className="p-3 md:p-4 pb-0 md:pb-0">
      <div className="shot-in overflow-hidden rounded-t-xl border border-b-0 border-border bg-background">
        <div className="flex items-center gap-2 h-8 px-3 border-b border-border bg-surface-elevated/60" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          {host && <span className="ml-3 font-mono text-[11px] text-muted-foreground truncate">{host}</span>}
        </div>
        <div className="relative aspect-[2/1] w-full">{media}</div>
      </div>
    </div>
  );
}

function ProjectLinks({ project, compact }: { project: Project; compact?: boolean }) {
  if (!project.links.github && !project.links.live) return null;
  const base = compact
    ? "inline-flex items-center justify-center size-11 rounded-lg transition-colors duration-150"
    : "press inline-flex items-center gap-1.5 min-h-11 px-4 text-sm font-medium border rounded-lg";
  return (
    <div className={`flex flex-shrink-0 ${compact ? "-mr-3 -mt-2" : "flex-wrap gap-2"}`}>
      {project.links.github && (
        <a
          href={project.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} text-muted-foreground hover:text-foreground ${compact ? "" : "border-border hover:border-muted-foreground"}`}
          aria-label={compact ? `${project.title} source code on GitHub` : undefined}
        >
          <Github size={compact ? 18 : 14} aria-hidden="true" />
          {!compact && (
            <>
              Code<span className="sr-only"> for {project.title} on GitHub</span>
            </>
          )}
        </a>
      )}
      {project.links.live && (
        <a
          href={project.links.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`${base} text-accent hover:text-accent-hover ${compact ? "" : "border-accent hover:border-accent-hover"}`}
          aria-label={compact ? `${project.title} live site` : undefined}
        >
          <ExternalLink size={compact ? 18 : 14} aria-hidden="true" />
          {!compact && (
            <>
              Live<span className="sr-only"> site for {project.title}</span>
            </>
          )}
        </a>
      )}
    </div>
  );
}

function Subhead({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-xs font-semibold tracking-[0.08em] uppercase text-muted-foreground mb-3">
      {children}
    </h4>
  );
}

function Incidents({ project }: { project: Project }) {
  const incidents = (project.incidents ?? []).filter((i) => i.whatHappened && i.howIFound && i.whatIChanged);
  if (incidents.length === 0) return null;
  return (
    <div>
      <Subhead>Incidents</Subhead>
      <div className="space-y-6">
        {incidents.map((incident) => (
          <div key={incident.title}>
            <h5 className="text-sm font-semibold text-foreground mb-2">{incident.title}</h5>
            <dl className="space-y-2 text-sm">
              {(
                [
                  ["What happened", incident.whatHappened],
                  ["How I found it", incident.howIFound],
                  ["What I changed", incident.whatIChanged],
                ] as const
              ).map(([term, text]) => (
                <div key={term} className="sm:grid sm:grid-cols-[8.5rem_1fr] sm:gap-4">
                  <dt className="text-foreground/80 font-medium">{term}</dt>
                  <dd className="text-muted-foreground leading-relaxed min-w-0">{text}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm">
          <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
          <span className="text-muted-foreground leading-relaxed min-w-0 break-words">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Projects({ items = allProjects }: { items?: Project[] }) {
  const featuredProjects = items.filter((p) => p.featured);
  const otherProjects = items.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14 grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-6 md:gap-16 items-end">
          <div>
            <SectionLabel>Projects</SectionLabel>
            <h2 className="mt-4 font-mono font-medium text-foreground tracking-[-0.04em] leading-none text-5xl md:text-7xl">
              <RevealWords text="Selected work" />
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xl md:justify-self-end">{projectsIntro}</p>
        </div>

        {featuredProjects.length === 0 && otherProjects.length === 0 && (
          <p className="text-muted-foreground">Projects are being written up.</p>
        )}

        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <SpotlightCard
              key={project.title}
              id={slugify(project.title)}
              className="scroll-mt-24 bg-surface/80 rounded-3xl border border-border"
            >
              <ProjectScreenshot project={project} featured />

              <div className={`p-6 lg:p-8 break-words ${project.screenshot || project.video ? "border-t border-border" : ""}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-8">
                  <div className="min-w-0">
                    <p className="font-mono text-xs font-medium text-accent mb-2 tabular">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="font-mono font-medium text-2xl md:text-3xl text-foreground tracking-[-0.02em] break-words">
                      {project.title}
                    </h3>
                    {project.subtitle && (
                      <p className="text-sm text-muted-foreground mt-1">{project.subtitle}</p>
                    )}
                  </div>
                  <ProjectLinks project={project} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                  <div className="space-y-6 min-w-0">
                    <div>
                      <Subhead>The problem</Subhead>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <Subhead>My role</Subhead>
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.role}</p>
                    </div>
                    {project.architecture && (
                      <div>
                        <Subhead>Architecture</Subhead>
                        <ArchitectureDiagram architecture={project.architecture} />
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-2 space-y-8 min-w-0">
                    <div>
                      <Subhead>Key technical decisions</Subhead>
                      <Bullets items={project.keyDecisions} />
                    </div>
                    {project.illustration && <Illustration illustration={project.illustration} />}
                    {project.whatIdChange && project.whatIdChange.length > 0 && (
                      <div>
                        <Subhead>What I&apos;d change</Subhead>
                        <Bullets items={project.whatIdChange} />
                      </div>
                    )}
                    <Incidents project={project} />
                  </div>
                </div>

                {project.tech.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                )}
              </div>
            </SpotlightCard>
          ))}
        </div>

        {otherProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="font-mono font-medium text-3xl md:text-4xl text-foreground tracking-[-0.03em] mb-6">More work</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherProjects.map((project) => (
                <SpotlightCard
                  key={project.title}
                  id={slugify(project.title)}
                  className="scroll-mt-24 bg-surface/80 rounded-3xl border border-border"
                >
                  <ProjectScreenshot project={project} />
                  <div className="p-6 break-words">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div className="min-w-0">
                        <h4 className="font-mono font-medium text-lg text-foreground break-words">
                          {project.title}
                        </h4>
                        {project.subtitle && (
                          <p className="text-sm text-muted-foreground mt-0.5">{project.subtitle}</p>
                        )}
                      </div>
                      <ProjectLinks project={project} compact />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    {project.illustration && (
                      <div className="mb-4">
                        <Illustration illustration={project.illustration} />
                      </div>
                    )}
                    {project.tech.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <Tag key={t}>{t}</Tag>
                        ))}
                      </div>
                    )}
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
