import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { projects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;
  const staticRoutes = [
    "",
    "/work",
    "/writing",
    "/about",
    "/elsewhere",
    "/interests",
    "/contact",
    "/resume",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...projects.map((p) => ({
      url: `${baseUrl}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p.featured ? 0.85 : 0.7,
    })),
  ];
}
