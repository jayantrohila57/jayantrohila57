import type { Metadata } from "next";
import { siteConfig } from "./site.config";

// Base metadata configuration
export const baseMetadata: Metadata = {
  // Basic metadata
  title: {
    default: siteConfig.siteTitle,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: siteConfig.siteDescription,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,

  // Open Graph
  openGraph: {
    type: "website",
    locale: siteConfig.seo.locale || "en_US",
    url: siteConfig.siteUrl,
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    siteName: siteConfig.siteName,
    images: [
      {
        url: `${siteConfig.siteUrl}/api/image?type=og`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.siteName} - ${siteConfig.siteDescription}`,
      },
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: siteConfig.siteTitle,
    description: siteConfig.siteDescription,
    images: [`${siteConfig.siteUrl}/api/image?type=twitter`],
    creator: (() => {
      const twitterUrl = siteConfig.social.find(
        (s) => s.platform === "Twitter",
      )?.url;
      return twitterUrl ? `@${twitterUrl.split("twitter.com/")[1]}` : undefined;
    })(),
  },

  // Apple Web App
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: siteConfig.siteName,
  },

  // Web App Metadata
  formatDetection: {
    telephone: false,
  },

  // Robots
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

  // Icons
  icons: {
    icon: "/api/image?type=icon&size=192",
    shortcut: "/api/image?type=icon&size=192",
    apple: "/api/image?type=apple&size=180",
  },

  // Manifest
  manifest: "/manifest.webmanifest",
  other: {
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": siteConfig.theme.primaryColor,
    "theme-color": siteConfig.theme.primaryColor,
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": siteConfig.siteName,
    "application-name": siteConfig.siteName,
    "msapplication-starturl": "/",
    "msapplication-TileImage": "/api/image?type=icon&size=150",
  },
  // Other metadata
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: siteConfig.siteUrl,
  },

  // Verification tags (add as needed)
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  // Additional metadata for developer portfolio
  category: "technology",
  classification: "portfolio",
  referrer: "origin-when-cross-origin",
};

// Function to generate page-specific metadata
export function generatePageMetadata(options: {
  title?: string;
  description?: string;
  path?: string;
  images?: string[];
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
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

  return {
    title: pageTitle,
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

// Function to generate structured data (JSON-LD)
export function generateStructuredData(
  type: string,
  data: Record<string, unknown>,
) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return JSON.stringify(baseStructuredData);
}

// Person structured data for author
export function generatePersonStructuredData() {
  return generateStructuredData("Person", {
    name: siteConfig.author.name,
    email: siteConfig.author.email,
    jobTitle: siteConfig.author.role,
    description: siteConfig.author.bio,
    url: siteConfig.siteUrl,
    sameAs: siteConfig.social.map((s) => s.url).filter(Boolean),
    knowsAbout: siteConfig.seo.keywords,
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  });
}

// Website structured data
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

// Blog posting structured data (for blog posts)
export function generateBlogPostingStructuredData(post: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  url: string;
}) {
  return generateStructuredData("BlogPosting", {
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified || post.datePublished,
    author: {
      "@type": "Person",
      name: post.author || siteConfig.author.name,
    },
    image: post.image,
    url: post.url,
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  });
}

// Project structured data for portfolio items
export function generateProjectStructuredData(project: {
  name: string;
  description: string;
  url: string;
  technologies: string[];
  image?: string;
  dateCreated?: string;
}) {
  return generateStructuredData("CreativeWork", {
    name: project.name,
    description: project.description,
    url: project.url,
    image: project.image,
    dateCreated: project.dateCreated,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    programmingLanguage: project.technologies,
    about: project.technologies.map((tech) => ({
      "@type": "Thing",
      name: tech,
    })),
  });
}
