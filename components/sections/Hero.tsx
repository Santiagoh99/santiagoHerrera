"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
});

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-dot-grid-fade overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle radial glow behind headshot area — right side only */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 50%, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text column */}
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-accent mb-6">
                Full Stack Software Engineer
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-archivo text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-none mb-6"
            >
              Santiago
              <br />
              <span className="text-accent">Herrera</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href="mailto:santiherrera99@icloud.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors duration-200 text-sm"
              >
                <Mail size={16} aria-hidden="true" />
                Get in touch
              </a>
              {siteConfig.resumeUrl && (
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-muted-foreground hover:text-foreground hover:border-foreground/40 font-semibold rounded-lg transition-colors duration-200 text-sm"
                >
                  Download CV
                </a>
              )}
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex items-center gap-5">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <span className="h-4 w-px bg-border" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">
                Buenos Aires, Argentina
              </span>
            </motion.div>
          </div>

          {/* Photo column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer ring */}
              <div
                className="absolute -inset-4 rounded-2xl border border-accent/10"
                aria-hidden="true"
              />
              {/* Accent corner accent */}
              <div
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent opacity-70"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full border-2 border-accent opacity-40"
                aria-hidden="true"
              />
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/40">
                <Image
                  src="/img/me.jpg"
                  alt="Santiago Herrera — Full Stack Software Engineer"
                  fill
                  className="object-cover"
                  priority
                  sizes="320px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-medium tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
