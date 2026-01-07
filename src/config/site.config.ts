import { Viewport } from "next";

export const siteConfig = {
  siteName: "Jayant Rohila",
  siteTitle: "Jayant Rohila - Full Stack Developer",
  siteDescription:
    "Passionate full stack developer building modern web applications with cutting-edge technologies. Specializing in React, Next.js, Node.js, and cloud architecture.",
  siteUrl: "https://jayantrohila.vercel.app",

  author: {
    name: "Jayant Rohila",
    email: "jayant.rohila@example.com",
    role: "Full Stack Developer",
    bio: "I am a passionate full stack developer with 5+ years of experience building scalable web applications. I love working with modern JavaScript frameworks and cloud technologies.",
    location: "Delhi, India",
    avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
  },

  social: {
    github: "https://github.com/jayantrohila57",
    linkedin: "https://linkedin.com/in/jayantrohila",
    twitter: "https://twitter.com/jayantrohila",
    website: "https://jayantrohila.vercel.app",
    devto: "https://dev.to/jayantrohila",
    codepen: "https://codepen.io/jayantrohila",
    stackoverflow: "https://stackoverflow.com/users/12345678/jayant-rohila",
  },

  seo: {
    keywords: [
      "full stack developer",
      "web developer",
      "react developer",
      "next.js developer",
      "node.js developer",
      "javascript developer",
      "typescript developer",
      "frontend developer",
      "backend developer",
      "web development",
      "software engineer",
      "portfolio",
      "jayant rohila",
    ],
    ogImage: "/og-image.png",
    twitterImage: "/twitter-image.png",
    favicon: "/favicon.ico",
    robots: "index",
  },

  theme: {
    primaryColor: "#000000",
    backgroundColor: "#ffffff",
    textColor: "#000000",
  },

  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    vercelAnalytics: true,
  },

  contact: {
    email: "jayant.rohila@example.com",
    formspreeId: process.env.FORMSPREE_ID,
    useEmailService: true,
  },
};

export type SiteConfig = typeof siteConfig;

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
// Helper function to get site URL
export function getSiteUrl() {
  return siteConfig.siteUrl;
}

// Helper function to get absolute URLs
export function getAbsoluteUrl(path: string = "") {
  return `${getSiteUrl()}${path}`;
}

// Helper function to get author info
export function getAuthorInfo() {
  return siteConfig.author;
}

// Helper function to get social links
export function getSocialLinks() {
  return siteConfig.social;
}
