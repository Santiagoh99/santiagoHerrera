"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type CarouselItem = { slug: string; title: string; subtitle: string; image: string };

// Hero strip of real projects: native horizontal scroll with snap points, so
// it works with touch, trackpad and keyboard; the arrow buttons just scroll it.
export default function ProjectCarousel({ items }: { items: CarouselItem[] }) {
  const track = useRef<HTMLUListElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 16 : el.clientWidth * 0.8;
    const smooth = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    el.scrollBy({ left: dir * step, behavior: smooth ? "smooth" : "auto" });
  };

  return (
    <div className="relative" role="region" aria-roledescription="carousel" aria-label="Projects">
      <ul
        ref={track}
        className="carousel flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-6 px-6 md:px-[calc(50%-17rem)] pb-2"
        tabIndex={0}
        aria-label="Project cards, scroll horizontally"
      >
        {items.map((item) => (
          <li key={item.slug} className="snap-center shrink-0 w-[85vw] max-w-[34rem]">
            <a
              href={`#${item.slug}`}
              className="carousel-card group grid grid-cols-[42%_1fr] h-full min-h-44 overflow-hidden rounded-2xl border border-border bg-surface/80 hover:border-muted-foreground transition-colors duration-200"
            >
              <span className="relative block overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="240px"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="flex flex-col justify-between gap-4 p-4 md:p-5">
                <span>
                  <span className="block font-mono text-sm md:text-base font-medium text-foreground leading-snug">
                    {item.title}
                  </span>
                  <span className="mt-2 block text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {item.subtitle}
                  </span>
                </span>
                <span className="flex items-center gap-2">
                  <span className="inline-flex items-center min-h-9 px-4 rounded-full bg-foreground text-background text-xs font-semibold">
                    View project
                  </span>
                  <span className="inline-flex items-center justify-center size-9 rounded-full bg-foreground text-background transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => scrollBy(-1)}
        className="press hidden md:inline-flex absolute left-4 top-1/2 -translate-y-1/2 size-12 items-center justify-center rounded-full border border-foreground/40 bg-background/60 backdrop-blur text-foreground hover:bg-foreground hover:text-background"
        aria-label="Previous project"
      >
        <ArrowLeft size={18} aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => scrollBy(1)}
        className="press hidden md:inline-flex absolute right-4 top-1/2 -translate-y-1/2 size-12 items-center justify-center rounded-full border border-foreground/40 bg-background/60 backdrop-blur text-foreground hover:bg-foreground hover:text-background"
        aria-label="Next project"
      >
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </div>
  );
}
