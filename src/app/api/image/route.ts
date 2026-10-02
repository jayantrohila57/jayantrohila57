import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";
import { createElement } from "react";

/**
 * Dynamic OG, Twitter, PWA icons (ported from pre-Fumadocs portfolio eras).
 * Query: type=icon|apple|maskable|og|twitter|screenshot, size, width, height
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const type = searchParams.get("type") ?? "icon";
  const size = Number(searchParams.get("size"));
  const width = Number(searchParams.get("width"));
  const height = Number(searchParams.get("height"));

  const bg = siteConfig.theme.background;
  const fg = siteConfig.theme.foreground;
  const accent = siteConfig.theme.accent;

  let w = 512;
  let h = 512;

  switch (type) {
    case "icon":
    case "apple":
      w = h = size || 512;
      return new ImageResponse(
        iconMarkup("JR", w, bg, fg, 0.45),
        { width: w, height: h },
      );
    case "maskable":
      w = h = size || 512;
      return new ImageResponse(
        iconMarkup("JR", w, bg, fg, 0.35),
        { width: w, height: h },
      );
    case "og":
      w = 1280;
      h = 720;
      return new ImageResponse(socialCardMarkup("og"), { width: w, height: h });
    case "twitter":
      w = 750;
      h = 1334;
      return new ImageResponse(socialCardMarkup("twitter"), {
        width: w,
        height: h,
      });
    case "screenshot":
      w = width || 1280;
      h = height || 720;
      return new ImageResponse(socialCardMarkup("og"), { width: w, height: h });
    default:
      w = h = size || 512;
      return new ImageResponse(
        iconMarkup("JR", w, bg, fg, 0.45),
        { width: w, height: h },
      );
  }
}

function iconMarkup(
  text: string,
  dimension: number,
  bg: string,
  fg: string,
  fontSizeRatio: number,
) {
  return createElement(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: bg,
        color: fg,
        fontWeight: 700,
        fontSize: Math.floor(dimension * fontSizeRatio),
        letterSpacing: "-0.04em",
      },
    },
    text,
  );
}

function socialCardMarkup(variant: "og" | "twitter") {
  const bg = siteConfig.theme.background;
  const fg = siteConfig.theme.foreground;
  const muted = siteConfig.theme.muted;
  const accent = siteConfig.theme.accent;
  const isTwitter = variant === "twitter";

  return createElement(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: isTwitter ? "72px 48px" : "56px 64px",
        background: bg,
        color: fg,
        border: `1px solid ${siteConfig.theme.border}`,
      },
    },
    createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: isTwitter ? 24 : 16,
        },
      },
      createElement(
        "p",
        {
          style: {
            margin: 0,
            fontSize: isTwitter ? 22 : 20,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: muted,
            fontFamily: "monospace",
          },
        },
        siteConfig.siteUrl.replace("https://", ""),
      ),
      createElement(
        "h1",
        {
          style: {
            margin: 0,
            fontSize: isTwitter ? 56 : 64,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
          },
        },
        siteConfig.author.name,
      ),
      createElement(
        "p",
        {
          style: {
            margin: 0,
            fontSize: isTwitter ? 28 : 32,
            color: accent,
            fontWeight: 500,
          },
        },
        siteConfig.author.jobTitle,
      ),
    ),
    createElement(
      "p",
      {
        style: {
          margin: 0,
          maxWidth: isTwitter ? "100%" : "85%",
          fontSize: isTwitter ? 24 : 26,
          lineHeight: 1.45,
          color: muted,
        },
      },
      siteConfig.siteDescription,
    ),
  );
}
