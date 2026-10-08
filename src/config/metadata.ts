import type { Metadata } from "next";
import { getGoogleSiteVerification } from "@/lib/google-site-verification";
import { toMetaDescription } from "@/lib/meta-description";
import { getAbsoluteUrl, siteConfig } from "./site";

const ogImageUrl = `${siteConfig.siteUrl}/api/image?type=og`;
const twitterImageUrl = `${siteConfig.siteUrl}/api/image?type=twitter`;
const googleSiteVerification = getGoogleSiteVerification();

export const baseMetadata: Metadata = {
  title: {
    default: siteConfig.siteTitle,
    template: `%s · ${siteConfig.siteName}`,
  },
  description: siteConfig.siteDescription,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale,
    url: siteConfig.siteUrl,
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    siteName: siteConfig.siteName,
    images: [
      {
        url: ogImageUrl,
        width: 1280,
        height: 720,
        alt: `${siteConfig.siteName} — ${siteConfig.siteDescription}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    images: [twitterImageUrl],
    creator: "@jayantrohila",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.siteName,
  },
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: siteConfig.seo.robots === "index",
    follow: true,
    googleBot: {
      index: siteConfig.seo.robots === "index",
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/api/image?type=icon&size=192",
    shortcut: "/api/image?type=icon&size=192",
    apple: "/api/image?type=apple&size=180",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": siteConfig.theme.background,
    "theme-color": siteConfig.theme.background,
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": siteConfig.siteName,
    "application-name": siteConfig.siteName,
    "msapplication-starturl": "/",
    "msapplication-TileImage": "/api/image?type=icon&size=150",
  },
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification,
      }
    : undefined,
  category: "technology",
  classification: "portfolio",
  referrer: "origin-when-cross-origin",
};

export function generatePageMetadata(options: {
  title?: string;
  description?: string;
  path?: string;
  images?: string[];
  keywords?: string[];
  noIndex?: boolean;
  /** When true, do not apply the `%s · SiteName` layout template. */
  absoluteTitle?: boolean;
}): Metadata {
  const {
    title,
    description,
    path = "",
    images,
    keywords = [],
    noIndex = false,
    absoluteTitle = true,
  } = options;

  const url = getAbsoluteUrl(path);
  const pageTitle = title || siteConfig.siteTitle;
  const pageDescription = toMetaDescription(
    description || siteConfig.siteDescription,
  );
  const pageKeywords = [...siteConfig.seo.keywords, ...keywords];

  return {
    title: absoluteTitle ? { absolute: pageTitle } : pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    openGraph: {
      ...baseMetadata.openGraph,
      title: pageTitle,
      description: pageDescription,
      url,
      images:
        images?.map((img) => ({
          url: img,
          width: 1200,
          height: 630,
          alt: pageTitle,
        })) || baseMetadata.openGraph?.images,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: pageTitle,
      description: pageDescription,
      images: images || baseMetadata.twitter?.images,
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex ? { index: false, follow: false } : baseMetadata.robots,
  };
}
