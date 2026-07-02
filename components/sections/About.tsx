"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";

const stats = [
  { value: "4+", label: "Years in production" },
  { value: "2", label: "Countries served (AR + US)" },
  { value: "EN/ES", label: "Bilingual" },
];

export default function About() {
  return (
    <section id="about" className="py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>About</SectionLabel>
            <h2 className="font-archivo text-4xl font-bold text-foreground mb-6">
              Engineer with a bias
              <br />
              toward shipping.
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Full Stack Software Engineer based in Buenos Aires,
                Argentina, with 4+ years building scalable web and mobile
                applications in{" "}
                <span className="text-foreground font-medium">
                  fintech and sports-tech
                </span>{" "}
                environments.
              </p>
              <p>
                My day job is at{" "}
                <span className="text-foreground font-medium">
                  Santander Tecnología Argentina
                </span>
                , where I work on a high-availability investment platform —
                microservices, multiple databases, strict CI/CD pipelines.
                Outside of that, I collaborate with{" "}
                <span className="text-foreground font-medium">
                  Port St. Lucie SC (USL League One)
                </span>{" "}
                on their web infrastructure — English-only, remote, coordinating
                directly with club staff and USL&apos;s tech team.
              </p>
              <p>
                I care about code that stays maintainable at scale: RLS for
                tenant isolation, atomic database functions for concurrency, CI
                gates that actually prevent regressions. I also ship fast when
                it matters — I&apos;ve built and deployed full feature systems
                on free-tier infrastructure without cutting corners on
                reliability.
              </p>
              <p>
                Open to remote opportunities with international teams. I work in
                English daily.
              </p>
            </div>
          </motion.div>

          {/* Right: stats + facts */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface rounded-xl p-4 border border-border text-center"
                >
                  <div className="font-archivo text-2xl font-black text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights list */}
            <div className="bg-surface rounded-xl border border-border p-6 space-y-4">
              <h3 className="font-archivo text-sm font-semibold text-foreground uppercase tracking-widest">
                What I bring
              </h3>
              <ul className="space-y-3">
                {[
                  "Full-stack ownership from API design to production deployment",
                  "Fintech-grade reliability: CI gates, monitoring, zero-downtime deploys",
                  "Multi-tenant SaaS architecture (RLS, role-based access, shared infra)",
                  "International remote collaboration — English daily, US clients",
                  "Practical integrations: payments, email, analytics, CMS",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span
                      className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="flex items-start gap-4 text-sm text-muted-foreground">
              <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center font-archivo font-bold text-xs text-foreground">
                UAI
              </span>
              <div>
                <p className="font-medium text-foreground">Systems Analyst</p>
                <p>Universidad Abierta Interamericana · 2019–2022</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
