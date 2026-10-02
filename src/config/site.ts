import type { Viewport } from "next";

export const siteConfig = {
  siteName: "Jayant Rohila",
  siteTitle: "Jayant Rohila — Product Engineer",
  siteDescription:
    "Product engineer and public identity documentation for Jayant Rohila — versioned professional archive at jayantrohila.com.",
  siteUrl: "https://jayantrohila.com",

  author: {
    name: "Jayant Rohila",
    role: "Product Engineer",
    jobTitle: "Product Engineer / Consultant–Product Engineer",
    employer: "aiQmen (AIQMEN DESIGNS AND TECHNOLOGIES PVT LTD)",
  },

  social: {
    github: "https://github.com/jayantrohila57",
    linkedin: "https://www.linkedin.com/in/jayant-rohila/",
    linktree: "https://linktr.ee/JayantRohila",
    twitter: "https://twitter.com/jayantrohila",
  },

  seo: {
    keywords: [
      "jayant rohila",
      "product engineer",
      "public identity docs",
      "software engineer",
      "full stack developer",
      "next.js",
      "typescript",
      "portfolio",
      "jayantrohila.com",
    ],
    locale: "en_US",
    robots: "index" as const,
  },

  theme: {
    primaryColor: "#000000",
    backgroundColor: "#ffffff",
  },

  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "G-9HFQLM7BCG",
    vercelAnalytics: true,
  },
};

export const baseViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: siteConfig.theme.backgroundColor,
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: siteConfig.theme.primaryColor,
    },
  ],
  colorScheme: "light dark",
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export function getAbsoluteUrl(path = "") {
  return `${siteConfig.siteUrl}${path}`;
}
