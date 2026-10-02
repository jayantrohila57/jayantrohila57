import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { source } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  const docPages = source.getPages().map((page) => ({
    url: `${baseUrl}/${page.slugs.join("/")}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...docPages,
  ];
}
