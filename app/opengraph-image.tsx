import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data";

// Link preview (WhatsApp, LinkedIn, Slack, X). Prerendered at build time from
// local files only — no network fetch, so the build can't fail on Google Fonts.
// Satori can't read woff2/variable fonts, hence the TTFs in app/og-assets/.
export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = (file: string) => readFile(join(process.cwd(), "app/og-assets", file));

export default async function Image() {
  const [mono500, mono400, photo] = await Promise.all([
    asset("plex-mono-500.ttf"),
    asset("plex-mono-400.ttf"),
    asset("me-og.jpg"),
  ]);
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const stack = ["Node.js", "NestJS", "Next.js", "TypeScript", "PostgreSQL"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "64px 72px",
          background: "#0C0A09",
          backgroundImage:
            "radial-gradient(circle at 12% 0%, rgba(255,178,36,0.14), transparent 45%), radial-gradient(circle at 100% 100%, rgba(120,90,60,0.22), transparent 50%)",
          color: "#FAFAF9",
          fontFamily: "Plex Mono",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28 }}>
            <span>{siteConfig.name}</span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 20,
                fontWeight: 400,
                color: "#D6D3D1",
                padding: "6px 16px",
                borderRadius: 999,
                border: "1px solid #44403C",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: 999, background: "#4ADE80" }} />
              {siteConfig.availability}
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", fontSize: 128, lineHeight: 0.95, letterSpacing: "-0.05em" }}>
            <span>Full-stack</span>
            <span style={{ display: "flex", alignItems: "flex-end" }}>
              Developer
              <span style={{ width: 52, height: 14, marginLeft: 14, marginBottom: 18, background: "#FFB224", borderRadius: 3 }} />
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14, fontWeight: 400 }}>
            <span style={{ fontSize: 24, color: "#FFB224" }}>Building for the U.S. and Argentina</span>
            <span style={{ fontSize: 22, color: "#A8A29E" }}>{stack.join(" / ")}</span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", marginLeft: 40 }}>
          <img
            src={photoSrc}
            width={300}
            height={356}
            alt=""
            style={{ borderRadius: 28, border: "1px solid #44403C", objectFit: "cover" }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Plex Mono", data: mono500, weight: 500, style: "normal" },
        { name: "Plex Mono", data: mono400, weight: 400, style: "normal" },
      ],
    }
  );
}
