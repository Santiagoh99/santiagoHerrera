"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Tag from "@/components/ui/Tag";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <SectionLabel>Experience</SectionLabel>
          <h2 className="font-archivo text-4xl font-bold text-foreground">
            Where I&apos;ve worked
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line — visible on md+ */}
          <div
            className="hidden md:block absolute left-[11px] top-2 bottom-0 w-px bg-border"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {experience.map((item, i) => (
              <motion.div
                key={`${item.company}-${i}`}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative md:pl-10 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div
                  className="hidden md:block absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 border-accent bg-background"
                  aria-hidden="true"
                />

                <div className="bg-surface rounded-xl border border-border p-6 hover:border-accent/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-archivo text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-accent font-medium text-sm mt-0.5">
                        {item.company}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <span className="text-xs text-muted-foreground font-medium">
                        {item.period}
                      </span>
                      <div className="mt-1">
                        <span
                          className={`inline-block text-xs px-2 py-0.5 rounded-full font-medium ${
                            item.type === "full-time"
                              ? "bg-surface-elevated text-muted-foreground"
                              : "bg-accent/10 text-accent"
                          }`}
                        >
                          {item.type === "full-time" ? "Full-time" : "Freelance"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm">
                        <span
                          className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-accent/60"
                          aria-hidden="true"
                        />
                        <span className="text-muted-foreground">{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
