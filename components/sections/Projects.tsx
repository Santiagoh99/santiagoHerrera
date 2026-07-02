"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ImageIcon } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel>Projects</SectionLabel>
          <h2 className="font-archivo text-4xl font-bold text-foreground mb-3">
            Featured work
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Production systems, not demos. Each built to handle real users, real
            money, and real failure modes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface rounded-2xl border border-border overflow-hidden hover:border-accent/30 transition-colors duration-300 group"
            >
              {/* Screenshot placeholder */}
              <div className="relative bg-surface-elevated border-b border-border h-48 flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon
                    className="mx-auto mb-2 text-border"
                    size={32}
                    aria-hidden="true"
                  />
                  <p className="text-xs text-muted-foreground font-medium">
                    Screenshot coming soon
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-0.5">
                    Add images to <code className="font-mono">public/img/</code>
                  </p>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="text-xs font-semibold tracking-widest uppercase text-accent bg-accent/10 border border-accent/20 px-2 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-6 lg:p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-archivo text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex gap-2 flex-shrink-0">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 px-3 py-1.5 rounded-lg transition-colors duration-200"
                        aria-label={`${project.title} GitHub repository`}
                      >
                        <Github size={14} aria-hidden="true" />
                        Code
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover border border-accent/20 hover:border-accent/40 px-3 py-1.5 rounded-lg transition-colors duration-200"
                        aria-label={`${project.title} live site`}
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        Live
                      </a>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left: problem + role */}
                  <div className="lg:col-span-1 space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                        The problem
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                        My role
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  {/* Right: key decisions */}
                  <div className="lg:col-span-2">
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                      Key technical decisions
                    </h4>
                    <ul className="space-y-2.5">
                      {project.keyDecisions.map((decision) => (
                        <li
                          key={decision}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span
                            className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          <span className="text-muted-foreground leading-relaxed">
                            {decision}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <Tag key={t} variant="accent">
                        {t}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
