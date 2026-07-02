"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { siteConfig } from "@/lib/data";

const links = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    description: "Best way to reach me",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/santiago-martin-herrera",
    href: siteConfig.linkedin,
    icon: Linkedin,
    description: "Professional profile",
  },
  {
    label: "GitHub",
    value: "github.com/Santiagoh99",
    href: siteConfig.github,
    icon: Github,
    description: "Open source & side projects",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 section-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Contact</SectionLabel>
            <h2 className="font-archivo text-4xl font-bold text-foreground mb-6">
              Let&apos;s work
              <br />
              together.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I&apos;m open to full-time remote roles and freelance projects.
              Whether you have a specific role in mind or just want to talk
              through a problem — feel free to reach out.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I respond within 24 hours on weekdays.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin size={16} className="flex-shrink-0" aria-hidden="true" />
              <span>Buenos Aires, Argentina (UTC-3) · Remote-first</span>
            </div>
          </motion.div>

          {/* Right: contact links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-3"
          >
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-border hover:border-accent/40 hover:bg-surface-elevated transition-all duration-200 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent group-hover:border-accent/30 transition-colors duration-200">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-muted-foreground mb-0.5">
                      {link.description}
                    </p>
                    <p className="text-sm font-medium text-foreground truncate">
                      {link.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* Direct email CTA */}
            <div className="mt-6 pt-6 border-t border-border">
              <a
                href={`mailto:${siteConfig.email}?subject=Let's work together`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors duration-200 text-sm"
              >
                <Mail size={16} aria-hidden="true" />
                Send me an email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
