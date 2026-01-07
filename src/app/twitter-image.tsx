import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site.config";

export const alt = `${siteConfig.siteName} - ${siteConfig.author.role}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 72,
            background: `linear-gradient(135deg, ${siteConfig.theme.primaryColor} 0%, #333 100%)`,
            color: siteConfig.theme.backgroundColor,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "40px",
            boxSizing: "border-box",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          <div
            style={{ fontSize: "64px", fontWeight: "bold", marginBottom: "16px" }}
          >
            {siteConfig.siteName}
          </div>
          <div style={{ fontSize: "28px", opacity: 0.9, marginBottom: "16px" }}>
            {siteConfig.author.role}
          </div>
          <div style={{ fontSize: "20px", opacity: 0.8, maxWidth: "800px" }}>
            {siteConfig.author.bio}
          </div>
          <div
            style={{
              fontSize: "16px",
              opacity: 0.6,
              marginTop: "24px",
              display: "flex",
              gap: "16px",
            }}
          >
            <span> Full Stack Developer</span>
            <span> React & Next.js</span>
          </div>
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    console.error("Error generating Twitter image:", error);
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
            color: "#fff",
            fontSize: "32px",
            fontFamily: "system-ui",
          }}
        >
          Error generating image
        </div>
      ),
      {
        ...size,
      }
    );
  }
}
