import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1a2340 0%, #2a3558 55%, #8b4a2a 100%)",
          color: "#f7f4ef",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.72,
          }}
        >
          beremarkablebook.com
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.02,
              maxWidth: "920px",
            }}
          >
            Stand out with substance in the age of AI
          </div>
          <div
            style={{
              fontSize: 34,
              lineHeight: 1.35,
              maxWidth: "860px",
              opacity: 0.88,
            }}
          >
            Career launch coaching for every stage: storytelling, leadership
            through AI, executive presence, and more
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 30,
            fontWeight: 600,
          }}
        >
          <span>Be Remarkable</span>
          <span style={{ opacity: 0.7 }}>Field guide · Workshops · Guides</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
