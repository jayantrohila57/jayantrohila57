import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site.config";

export const alt = `${siteConfig.siteName} - ${siteConfig.siteDescription}`;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 72,
        background: siteConfig.theme.primaryColor,
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
        style={{ fontSize: "72px", fontWeight: "bold", marginBottom: "20px" }}
      >
        {siteConfig.siteName}
      </div>
      <div style={{ fontSize: "32px", opacity: 0.9, maxWidth: "1000px" }}>
        {siteConfig.author.role}
      </div>
      <div
        style={{
          fontSize: "24px",
          opacity: 0.7,
          marginTop: "20px",
          maxWidth: "900px",
        }}
      >
        {siteConfig.siteDescription}
      </div>
    </div>,
    {
      ...size,
    },
  );
}
