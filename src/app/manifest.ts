import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: siteConfig.siteName,
    short_name: siteConfig.siteName,
    description: siteConfig.siteDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    theme_color: siteConfig.theme.primaryColor,
    background_color: siteConfig.theme.backgroundColor,
    categories: ["productivity"],
    prefer_related_applications: false,
    icons: [
      {
        src: "/api/image?type=icon&size=32",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/api/image?type=icon&size=192",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/api/image?type=maskable&size=192",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/api/image?type=icon&size=512",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/api/image?type=maskable&size=512",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: "/api/image?type=og",
        sizes: "1280x720",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/api/image?type=twitter",
        sizes: "750x1334",
        type: "image/png",
        form_factor: "narrow",
      },
    ],
  };
}
