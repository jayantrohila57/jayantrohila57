import { ImageResponse } from "next/og";
import { createElement } from "react";

/**
 * Supported query params:
 * - type: icon | apple | maskable | og | twitter | screenshot
 * - size: number (for square images)
 * - width: number (for wide images)
 * - height: number (for wide images)
 */

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const type = searchParams.get("type") ?? "icon";
  const size = Number(searchParams.get("size"));
  const width = Number(searchParams.get("width"));
  const height = Number(searchParams.get("height"));

  let w = 512;
  let h = 512;
  let text = "JR";
  let fontSizeRatio = 0.45;

  switch (type) {
    case "icon":
    case "apple":
      w = h = size || 512;
      text = "JR";
      fontSizeRatio = 0.45;
      break;

    case "maskable":
      w = h = size || 512;
      text = "JR";
      fontSizeRatio = 0.35; // safe zone
      break;

    case "og":
      w = 1280;
      h = 720;
      text = "Jayant Rohila";
      fontSizeRatio = 0.12;
      break;

    case "twitter":
      w = 750;
      h = 1334;
      text = "Jayant Rohila";
      fontSizeRatio = 0.12;
      break;

    case "screenshot":
      w = width || 1280;
      h = height || 720;
      text = "Jayant Rohila";
      fontSizeRatio = 0.14;
      break;
  }

  return new ImageResponse(
    createElement(
      "div",
      {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000",
          color: "#fff",
          fontWeight: 700,
          fontSize: Math.floor(w * fontSizeRatio),
          letterSpacing: "-0.04em",
        },
      },
      text,
    ),
    {
      width: w,
      height: h,
    },
  );
}
