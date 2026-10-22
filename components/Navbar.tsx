"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const easeOut = [0.23, 1, 0.32, 1] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // A section is "active" while it crosses a thin band near the top of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-120px 0px -70% 0px" }
    );
    for (const { href } of navLinks) {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    }
    const onTop = () => window.scrollY < 200 && setActiveSection("");
    window.addEventListener("scroll", onTop, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", onTop);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        isScrolled || isOpen
          ? "bg-background/90 backdrop-blur-md border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          onClick={() => setIsOpen(false)}
          className="inline-flex items-center min-h-11 text-sm font-medium leading-tight text-foreground hover:text-accent transition-colors duration-150"
          aria-label={`${siteConfig.name}, back to top`}
        >
          <span>
            Santiago
            <br />
            Herrera
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-2 lg:gap-4" role="list">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative inline-flex items-center min-h-11 px-2 text-sm font-medium rounded transition-colors duration-150 ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      transition={{ type: "spring", duration: 0.35, bounce: 0 }}
                      className="absolute bottom-2 left-2 right-2 h-px bg-accent"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          {siteConfig.resumeUrl && (
            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center min-h-11 px-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 rounded-lg"
            >
              Download CV
            </a>
          )}
          <a
            href="#contact"
            className="press inline-flex items-center min-h-10 px-5 text-sm font-semibold bg-foreground text-background rounded-full"
          >
            Contact
          </a>
        </div>

        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden -mr-2 inline-flex items-center justify-center size-11 text-foreground rounded-lg"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, transform: "translateY(-8px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)", transition: { duration: 0.2, ease: easeOut } }}
            exit={{ opacity: 0, transform: "translateY(-8px)", transition: { duration: 0.15, ease: easeOut } }}
            className="md:hidden absolute inset-x-0 top-16 bg-background border-b border-border"
          >
            <ul className="px-6 py-4 flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center min-h-11 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150 border-b border-border/50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 grid grid-cols-2 gap-2">
                {siteConfig.resumeUrl && (
                  <a
                    href={siteConfig.resumeUrl}
                    download
                    className="press flex items-center justify-center min-h-11 text-sm font-semibold border border-border text-foreground rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    Download CV
                  </a>
                )}
                <a
                  href="#contact"
                  className="press flex items-center justify-center min-h-11 text-sm font-semibold bg-accent hover:bg-accent-hover text-accent-foreground rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
