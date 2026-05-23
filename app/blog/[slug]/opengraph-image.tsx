import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog/posts";

export const alt = "Kalma blog article";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function OpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post?.title ?? "Kalma Blog";
  const tag = post?.tags[0] ?? "Anxiety & panic relief";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #023047 0%, #219EBC 50%, #8ECAE6 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "rgba(255,255,255,0.75)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          {tag}
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "white",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: 1000,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700, color: "white" }}>
            Kalma
          </div>
          <div style={{ fontSize: 20, color: "rgba(255,255,255,0.7)" }}>
            kalma.cc/blog
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
