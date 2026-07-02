import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santiago Herrera — Full Stack Software Engineer",
  description:
    "Full Stack Software Engineer based in Buenos Aires, Argentina. 4+ years building scalable fintech and sports-tech products. React, Next.js, Node.js, TypeScript. Open to remote work.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Fintech",
    "Remote",
    "Buenos Aires",
    "Argentina",
  ],
  authors: [{ name: "Santiago Herrera" }],
  openGraph: {
    title: "Santiago Herrera — Full Stack Software Engineer",
    description:
      "4+ years building fintech and sports-tech products in production. React, Next.js, Node.js, TypeScript. Open to remote work.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Santiago Herrera — Full Stack Software Engineer",
    description:
      "4+ years building fintech and sports-tech products in production. Open to remote work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
