import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.siteName,
    short_name: siteConfig.siteName,
    description: siteConfig.siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.theme.backgroundColor,
    theme_color: siteConfig.theme.primaryColor,
    orientation: "portrait",
    scope: "/",
    categories: ["portfolio", "technology", "developer"],
    lang: "en",
    dir: "ltr",
    icons: [
      {
        src: siteConfig.seo.favicon || "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/screenshot-desktop.png",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/screenshot-mobile.png",
        sizes: "750x1334",
        type: "image/png",
        form_factor: "narrow",
      },
    ],
  };
}
