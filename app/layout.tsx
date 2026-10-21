import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import { siteConfig } from "@/lib/data";
import "./globals.css";

// Display: Archivo with its width axis (expanded via `.font-display`).
// Must stay preloaded: the expanded face is far wider than any fallback, so a
// late swap re-flows the hero (CLS 0.24 measured without the preload).
const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

// Mono is for data only: dates, stack names, diagram labels. Nothing above the fold uses it.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
  preload: false,
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
    <html lang="en" className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
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
