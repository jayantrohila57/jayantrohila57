import { siteConfig } from "@/config/site.config";
import type { Metadata } from "next";
import { generatePageMetadata as baseGeneratePageMetadata } from "@/config/metadata";

export interface PageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  images?: string[];
  keywords?: string[];
  noIndex?: boolean;
}

export function generatePageMetadata(
  options: PageMetadataOptions = {},
): Metadata {
  const {
    title,
    description,
    path = "",
    images,
    keywords = [],
    noIndex = false,
  } = options;

  const url = `${siteConfig.siteUrl}${path}`;
  const pageTitle = title || siteConfig.siteTitle;
  const pageDescription = description || siteConfig.siteDescription;
  const pageKeywords = [...siteConfig.seo.keywords, ...keywords];

  // Generate dynamic OG and Twitter images if needed
  const ogImage = images?.[0] || `${siteConfig.siteUrl}/opengraph-image`;
  const twitterImage = images?.[0] || `${siteConfig.siteUrl}/twitter-image`;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    openGraph: {
      type: "website",
      locale: siteConfig.seo.locale || "en_US",
      url,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.siteName,
      images: [
        {
          url: ogImage,
          width: 1280,
          height: 720,
          alt: `${pageTitle} - ${pageDescription}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [twitterImage],
      creator: siteConfig.social.twitter
        ? `@${siteConfig.social.twitter.split("twitter.com/")[1]}`
        : undefined,
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function generateStructuredData(
  type: string,
  data: Record<string, any>,
) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return JSON.stringify(baseStructuredData);
}

export function generatePersonStructuredData() {
  return generateStructuredData("Person", {
    name: siteConfig.author.name,
    email: siteConfig.author.email,
    jobTitle: siteConfig.author.role,
    description: siteConfig.author.bio,
    url: siteConfig.siteUrl,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    knowsAbout: siteConfig.seo.keywords,
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  });
}

export function generateWebsiteStructuredData() {
  return generateStructuredData("WebSite", {
    name: siteConfig.siteName,
    description: siteConfig.siteDescription,
    url: siteConfig.siteUrl,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    inLanguage: "en-US",
  });
}
