"use client";

import { MotionConfig } from "framer-motion";

// Framer animations run in JS and ignore the CSS reduced-motion media query;
// this makes every motion component honour the OS setting.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
