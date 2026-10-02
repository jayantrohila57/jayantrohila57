import type { Viewport } from "next";

export const siteConfig = {
  siteName: "Jayant Rohila",
  siteTitle: "Jayant Rohila — Product Engineer (Consultant) · aiQmen",
  siteDescription:
    "Product engineer at aiQmen, Noida — modern web products, typed APIs, and open-source projects including e-commerce, Env Manager, and Taskflow.",
  siteUrl: "https://jayantrohila.com",

  author: {
    name: "Jayant Rohila",
    role: "Product Engineer",
    jobTitle: "Product Engineer (Consultant) · aiQmen",
    employer: "aiQmen Designs & Technologies Pvt. Ltd.",
  },

  contact: {
    email: "jrohila55@gmail.com",
    location: "Noida, India",
    hireable: true,
  },

  social: {
    github: "https://github.com/jayantrohila57",
    linkedin: "https://www.linkedin.com/in/jayant-rohila/",
    linktree: "https://linktr.ee/JayantRohila",
    twitter: "https://twitter.com/jayant_rohila",
    workGithub: "https://github.com/jayantaiqmen",
  },

  seo: {
    keywords: [
      "jayant rohila",
      "product engineer",
      "software engineer",
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
    background: "#0b0d0f",
    surface: "#12151a",
    panel: "#161a21",
    elevated: "#1c2129",
    border: "#2a3038",
    muted: "#9aa3af",
    foreground: "#eceff3",
    accent: "#7dd3a8",
  },

  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    vercelAnalytics: true,
  },

  resumePath: "/resume",
};

export const baseViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: siteConfig.theme.background,
  colorScheme: "dark",
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export function getAbsoluteUrl(path = "") {
  return `${siteConfig.siteUrl}${path}`;
}
