import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Static font subset from Google Fonts (TTF, which Satori needs). Fetched at build time.
async function loadFont(family: string, axes: string, text: string) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=${family}:${axes}&text=${encodeURIComponent(text)}`
  ).then((r) => r.text());
  const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
  if (!url) throw new Error(`No TTF for ${family} ${axes}`);
  return fetch(url).then((r) => r.arrayBuffer());
}

export default async function Image() {
  const stack = ["Node.js", "NestJS", "Next.js", "TypeScript", "PostgreSQL"];
  const body = [siteConfig.role, siteConfig.location, siteConfig.availability, ...stack].join("");

  const [display, text] = await Promise.all([
    loadFont("Archivo", "wdth,wght@125,800", siteConfig.name),
    loadFont("IBM+Plex+Mono", "wght@500", body + " ·"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "96px 80px 72px",
          background: "#0C0A09",
          color: "#FAFAF9",
          fontFamily: "IBM Plex Mono",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "Archivo",
              fontSize: 104,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.name}
          </div>
          <div style={{ display: "flex", fontSize: 34, color: "#FFB224", marginTop: 24 }}>
            {siteConfig.role}
          </div>
          <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
            {stack.map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  fontSize: 26,
                  padding: "8px 20px",
                  borderRadius: 8,
                  border: "1px solid #44403C",
                  background: "#1C1917",
                  color: "#A8A29E",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#A8A29E",
            borderTop: "1px solid #44403C",
            paddingTop: 28,
          }}
        >
          {`${siteConfig.location} · ${siteConfig.availability}`}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: display, weight: 800, style: "normal" },
        { name: "IBM Plex Mono", data: text, weight: 500, style: "normal" },
      ],
    }
  );
}
