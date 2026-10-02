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
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressCountry: "IN",
    },
    sameAs: [
      siteConfig.social.github,
      siteConfig.social.linkedin,
      siteConfig.social.linktree,
      siteConfig.social.twitter,
      siteConfig.social.workGithub,
    ].filter(Boolean),
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
    description: siteConfig.siteDescription,
    url: siteConfig.siteUrl,
    mainEntity: {
      "@type": "Person",
      name: siteConfig.author.name,
      jobTitle: siteConfig.author.jobTitle,
    },
  });
}
