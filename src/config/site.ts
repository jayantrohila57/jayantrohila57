import type { Viewport } from "next";
import { homePageDescription, homePageTitle } from "@/config/page-seo";

export const publicHeadline =
  "Product Engineer (Frontend) | React & Next.js · TypeScript";

export const heroHeadline =
  "I build complex SaaS interfaces, dashboards, and product workflows with React, Next.js, and TypeScript.";

export const heroSupportingLine =
  "Complex web applications that feel simple — with enough full-stack depth to own features from UI through API and data.";

export const heroStatusLine =
  "Product Engineer at aiQmen · Noida · open to frontend and product engineering roles";

export const specializationLine =
  "Frontend-first product engineering — complex UI, typed APIs, and data-heavy workflows.";

/** Longer bio for page body, JSON-LD, and social image cards — not for HTML meta snippets. */
export const longAbout =
  "Frontend-first Product Engineer in Noida. I ship React and Next.js product interfaces — dashboards, forms, and multi-step workflows — and own the full stack when a feature needs typed APIs, auth, and PostgreSQL. Open-source case studies include Taskflow, Env Manager, and libyui (live demos on this site). ~2 years in production software at Binmile; now at aiQmen.";

/** ~150 chars for meta / OG / Twitter descriptions. */
export const metaDescription = homePageDescription;

/** @deprecated Use `longAbout` or `metaDescription` explicitly. */
export const shortAbout = longAbout;

export type ElsewhereLink = {
  label: string;
  href: string;
};

/** Verified public profile URLs for connect / elsewhere sections. */
export const elsewhereLinks: ElsewhereLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jayant-rohila/",
  },
  { label: "GitHub", href: "https://github.com/jayantrohila57" },
  {
    label: "Work GitHub",
    href: "https://github.com/jayantaiqmen",
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/jayantrohila57",
  },
];

export const siteConfig = {
  siteName: "Jayant Rohila",
  siteTitle: homePageTitle,
  siteDescription: metaDescription,
  longDescription: longAbout,
  siteUrl: "https://jayantrohila.com",

  author: {
    name: "Jayant Rohila",
    role: "Frontend-first Product Engineer",
    jobTitle: publicHeadline,
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
    hackerrank: "https://www.hackerrank.com/profile/jayantrohila57",
    workGithub: "https://github.com/jayantaiqmen",
  },

  seo: {
    keywords: [
      "jayant rohila",
      "product engineer",
      "frontend engineer",
      "software engineer",
      "next.js",
      "react",
      "typescript",
      "portfolio",
      "noida",
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
  resumePdfPath: "/resume.pdf",
  resumeUpdatedLabel: "PDF · updated Oct 2026",
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
