import type { Viewport } from "next";

export const siteConfig = {
  siteName: "Jayant Rohila",
  siteTitle: "Jayant Rohila — Product Engineer",
  siteDescription:
    "Portfolio of Jayant Rohila — product engineer at aiQmen, Noida. Experience, projects, skills, and links.",
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
    twitter: "https://twitter.com/jayant_rohila",
  },

  seo: {
    keywords: [
      "jayant rohila",
      "product engineer",
      "software engineer",
      "full stack developer",
      "next.js",
      "react",
      "typescript",
      "portfolio",
      "noida",
      "aiqmen",
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
