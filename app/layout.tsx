import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import MotionProvider from "@/components/MotionProvider";
import IntroLoader from "@/components/IntroLoader";
import { siteConfig } from "@/lib/data";
import "./globals.css";

// Fonts are self-hosted (files in app/fonts, from Fontsource) so the build never
// depends on reaching Google Fonts.
// Display: Archivo variable (weight + width axes, expanded via `.font-display`).
// Must stay preloaded: the expanded face is far wider than any fallback, so a
// late swap re-flows the hero (CLS 0.24 measured without the preload).
const archivo = localFont({
  src: "./fonts/archivo-variable.woff2",
  weight: "100 900",
  variable: "--font-display",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

const plexSans = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

// Mono carries the display headings ("Full-stack / Developer", "Work"), so it is preloaded.
const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
});

const title = `${siteConfig.name} — ${siteConfig.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description: siteConfig.metaDescription,
  alternates: { canonical: "/" },
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Node.js",
    "NestJS",
    "Next.js",
    "TypeScript",
    "React",
    "Fintech",
    "Remote",
    "Buenos Aires",
    "Argentina",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  openGraph: {
    title,
    description: siteConfig.metaDescription,
    url: "/",
    siteName: siteConfig.name,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0A09",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Runs before first paint: the intro plays once per session and never under reduced motion. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var d=document.documentElement;if(sessionStorage.getItem("intro-seen")||matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("intro-skip")}else{sessionStorage.setItem("intro-seen","1")}}catch(e){document.documentElement.classList.add("intro-skip")}`,
          }}
        />
      </head>
      <body>
        <IntroLoader />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-accent focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
