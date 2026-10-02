import { siteConfig } from "@/config/site";

function generateStructuredData(type: string, data: Record<string, unknown>) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  });
}

export function personStructuredData() {
  return generateStructuredData("Person", {
    name: siteConfig.author.name,
    jobTitle: siteConfig.author.jobTitle,
    url: siteConfig.siteUrl,
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.linktree,
      siteConfig.social.twitter,
    ],
    worksFor: {
      "@type": "Organization",
      name: siteConfig.author.employer,
    },
  });
}

export function websiteStructuredData() {
  return generateStructuredData("WebSite", {
    name: siteConfig.siteName,
    description: siteConfig.siteDescription,
    url: siteConfig.siteUrl,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  });
}
