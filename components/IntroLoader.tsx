import { siteConfig } from "@/lib/data";
import IntroCounter from "@/components/ui/IntroCounter";

// Loading screen shown once per browser session (see the inline script in
// app/layout.tsx, which adds `intro-skip` to <html> on repeat visits and under
// reduced motion). It is pure CSS: the bar fills, the name assembles and the
// overlay fades out on its own, so it can never get stuck even without JS.
export default function IntroLoader() {
  return (
    <div className="intro fixed inset-0 z-[100] flex flex-col justify-center bg-background" aria-hidden="true">
      <div className="intro-bar absolute top-0 left-0 h-[3px] w-full bg-accent origin-left" />
      <p className="absolute top-3 right-5 font-mono text-xs font-medium text-accent tabular">
        Loading <IntroCounter />
      </p>
      <div className="max-w-6xl mx-auto px-6 w-full">
        <p className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.95] tracking-[-0.03em]">
          {siteConfig.name.split(" ").map((word, i) => (
            <span key={word}>
              {i > 0 && " "}
              <span className="intro-word inline-block" style={{ "--i": i } as React.CSSProperties}>
                {word}
              </span>
            </span>
          ))}
        </p>
        <p className="intro-stack mt-6 font-mono text-sm md:text-base text-muted-foreground">
          {siteConfig.stack.slice(0, 6).join(" · ")}
        </p>
      </div>
    </div>
  );
}
