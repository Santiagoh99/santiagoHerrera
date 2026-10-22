"use client";

import { useEffect, useState } from "react";

// Counts 0→100% in step with the CSS progress bar (1.3s, ease-out).
export default function IntroCounter() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (document.documentElement.classList.contains("intro-skip")) return;
    const duration = 1300;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <span>{value}%</span>;
}
