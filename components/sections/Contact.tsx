import { Github, Instagram, Linkedin, MapPin } from "lucide-react";
import { contact, siteConfig } from "@/lib/data";
import ContactForm from "@/components/ui/ContactForm";
import RevealWords from "@/components/ui/RevealWords";
import SectionLabel from "@/components/ui/SectionLabel";

const links = [
  { label: "LinkedIn", href: siteConfig.linkedin, icon: Linkedin },
  { label: "GitHub", href: siteConfig.github, icon: Github },
  ...(siteConfig.instagram ? [{ label: "Instagram", href: siteConfig.instagram, icon: Instagram }] : []),
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-16 items-start">
          <div>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-4 font-mono font-medium text-foreground tracking-[-0.04em] leading-[0.95] text-5xl md:text-6xl mb-6 max-w-[12ch]">
              <RevealWords text={contact.heading} />
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{contact.body}</p>

            <ul className="flex flex-wrap gap-2 mb-8" role="list">
              {links.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="press inline-flex items-center gap-2 min-h-11 px-4 rounded-lg border border-border bg-surface/60 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-muted-foreground"
                  >
                    <Icon size={16} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <MapPin size={16} className="flex-shrink-0" aria-hidden="true" />
              <span>{contact.timezone}</span>
            </div>
          </div>

          <ContactForm email={siteConfig.email} />
        </div>
      </div>
    </section>
  );
}
