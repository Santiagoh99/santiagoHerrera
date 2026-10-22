"use client";

import { useRef } from "react";

// Soft light that follows the cursor. Moves one overlay element with
// `transform` (no CSS variables on the card, so children don't restyle).
// Visibility is gated in CSS to fine pointers and no reduced-motion preference.
// `overflow-clip`, not `overflow-hidden`: hidden makes the card a scroll
// container, which freezes the scroll-driven diagram animations inside it.
export default function SpotlightCard({
  className = "",
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: React.ReactNode;
}) {
  const light = useRef<HTMLDivElement>(null);

  return (
    <article
      id={id}
      className={`spotlight-host relative isolate overflow-clip ${className}`}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !light.current) return;
        const r = e.currentTarget.getBoundingClientRect();
        light.current.style.transform = `translate(${e.clientX - r.left}px, ${e.clientY - r.top}px)`;
      }}
    >
      <div ref={light} className="spotlight -z-10" aria-hidden="true" />
      {children}
    </article>
  );
}
