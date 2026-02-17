import type { Viewport } from "next";

export const siteConfig = {
  siteName: "Jayant Rohila",
  siteTitle: "Jayant Rohila - Full Stack Developer",
  siteDescription:
    "Passionate full stack developer building modern web applications with cutting-edge technologies. Specializing in React, Next.js, Node.js, and cloud architecture.",
  siteUrl: "https://jayantrohila.com",
  domain: "jayant-rohila.dev",
  name: "Jayant Rohila",
  tagline: "Full-Stack Developer",

  author: {
    name: "Jayant Rohila",
    email: "jrohila55@gmail.com",
    role: "Full Stack Developer",
    bio: "I am a passionate full stack developer with 5+ years of experience building scalable web applications. I love working with modern JavaScript frameworks and cloud technologies.",
    location: "Delhi, India",
    avatar: "https://avatars.githubusercontent.com/u/12345678?v=4",
  },

  social: [
    {
      platform: "GitHub",
      url: "https://github.com/jayantrohila57",
      icon: "GitHub",
      label: "Follow on GitHub",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/jayantrohila",
      icon: "LinkedIn",
      label: "Connect on LinkedIn",
    },
    {
      platform: "Twitter",
      url: "https://twitter.com/jayantrohila",
      icon: "Twitter",
      label: "Follow on Twitter",
    },
    {
      platform: "Email",
      url: "mailto:hello@jayant-rohila.dev",
      icon: "Mail",
      label: "Send an email",
    },
  ],

  navigation: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],

  logo: {
    text: "JR",
    icon: "Code2",
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Jayant Rohila. All rights reserved.`,
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
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
    ogImage: "/opengraph-image",
    twitterImage: "/twitter-image",
    favicon: "/icon",
    robots: "index",
    locale: "en_US",
  },

  theme: {
    primaryColor: "#000000",
    backgroundColor: "#ffffff",
    textColor: "#000000",
  },

  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID || "G-9HFQLM7BCG",
    vercelAnalytics: true,
  },

  contact: {
    email: "hello@jayant-rohila.dev",
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
