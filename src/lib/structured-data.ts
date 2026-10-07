import { elsewhereLinks, getAbsoluteUrl, siteConfig } from "@/config/site";
import type { PortfolioProject } from "@/data/portfolio";

function generateStructuredData(type: string, data: Record<string, unknown>) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  });
}

const personImageUrl = `${siteConfig.siteUrl}/api/image?type=og`;

export function personStructuredData() {
  return generateStructuredData("Person", {
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.jobTitle,
    url: siteConfig.siteUrl,
    image: personImageUrl,
    description: siteConfig.longDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "IN",
    },
    sameAs: elsewhereLinks.map((link) => link.href),
    worksFor: {
      "@type": "Organization",
      name: siteConfig.author.employer,
    },
  });
}

export function websiteStructuredData() {
  return generateStructuredData("WebSite", {
    name: siteConfig.siteName,
    description: siteConfig.longDescription,
    url: siteConfig.siteUrl,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.jobTitle,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  });
}

export function profilePageStructuredData() {
  return generateStructuredData("ProfilePage", {
    name: `${siteConfig.author.name} — Portfolio`,
    description: siteConfig.longDescription,
    url: siteConfig.siteUrl,
    mainEntity: {
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.jobTitle,
    },
  });
}

const defaultOgImage = `${siteConfig.siteUrl}/api/image?type=og`;

export function projectWebPageStructuredData(project: PortfolioProject) {
  const url = getAbsoluteUrl(`/work/${project.slug}`);
  return generateStructuredData("WebPage", {
    name: project.title,
    description: project.summary,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: defaultOgImage,
    },
  });
}

export function projectBreadcrumbStructuredData(project: PortfolioProject) {
  const url = getAbsoluteUrl(`/work/${project.slug}`);
  return generateStructuredData("BreadcrumbList", {
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: getAbsoluteUrl("/work"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: url,
      },
    ],
  });
}
