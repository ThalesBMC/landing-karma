import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #023047 0%, #219EBC 50%, #8ECAE6 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "white",
            letterSpacing: "-0.02em",
          }}
        >
          Kalma
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 32,
            color: "rgba(255,255,255,0.9)",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Panic attack &amp; anxiety relief app
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 22,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          Guided breathing · Offline grounding · Mood journaling
        </div>
      </div>
    ),
    { ...size },
  );
}
