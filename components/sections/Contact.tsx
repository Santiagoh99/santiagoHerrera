import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { contact, siteConfig } from "@/lib/data";

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
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 max-w-[12ch]">
              {contact.heading}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {contact.body}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {contact.responseNote}
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin size={16} className="flex-shrink-0" aria-hidden="true" />
              <span>{contact.timezone}</span>
            </div>
          </div>

          {/* Right: contact links */}
          <div className="space-y-3">
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
                  className="flex items-center gap-4 p-4 bg-surface rounded-xl border border-border hover:border-muted-foreground transition-colors duration-150 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-surface-elevated border border-border flex items-center justify-center text-muted-foreground group-hover:text-accent transition-colors duration-150">
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
                className="press w-full inline-flex items-center justify-center gap-2 min-h-11 px-6 py-3.5 bg-accent hover:bg-accent-hover text-accent-foreground font-semibold rounded-xl text-sm"
              >
                <Mail size={16} aria-hidden="true" />
                Send me an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
