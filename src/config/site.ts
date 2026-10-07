import type { Viewport } from "next";

export const publicHeadline =
  "Product Engineer (Frontend) | Next.js · React.js · TypeScript";

export const heroHeadline =
  "Product Engineer building complex web applications that feel simple.";

export const heroStatusLine =
  "Currently building product software at aiQmen · Noida, India";

export const specializationLine =
  "Complex web applications, frontend architecture, and data-heavy UX.";

/** Longer bio for page body, JSON-LD, and social image cards — not for HTML meta snippets. */
export const longAbout =
  "Product Engineer with 2+ years building web products in React.js, Next.js, and TypeScript. I ship responsive UIs with Tailwind CSS, integrate Node.js / REST APIs, and own features from design handoff to production. Live work: jayantrohila.com · GitHub jayantrohila57. Based in Noida; open to in-office, hybrid, and remote across India.";

/** ~150 chars for meta / OG / Twitter descriptions. */
export const metaDescription =
  "Product Engineer (Frontend) at aiQmen, Noida. Next.js, React, TypeScript—portfolio, open-source repos, and production web apps.";

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
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/jayantrohila57",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~01319719b0761ff361",
  },
  { label: "Freelancer", href: "https://www.freelancer.com/u/IAMSTRONG57" },
  { label: "Malt", href: "https://www.malt.com/profile/jayantrohila" },
  { label: "Arc.dev", href: "https://arc.dev/@jayantrohila57" },
  {
    label: "Truelancer",
    href: "https://www.truelancer.com/freelancer/jayantrohila",
  },
  { label: "Contra", href: "https://contra.com/jayant_rohila_qrutb9cv" },
  { label: "Fiverr", href: "https://www.fiverr.com/jayant_rohila" },
  { label: "Linktree", href: "https://linktr.ee/JayantRohila" },
];

export const siteConfig = {
  siteName: "Jayant Rohila",
  siteTitle: `Jayant Rohila — ${publicHeadline}`,
  siteDescription: metaDescription,
  longDescription: longAbout,
  siteUrl: "https://jayantrohila.com",

  author: {
    name: "Jayant Rohila",
    role: "Product Engineer (Frontend)",
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
    linktree: "https://linktr.ee/JayantRohila",
    hackerrank: "https://www.hackerrank.com/profile/jayantrohila57",
    upwork: "https://www.upwork.com/freelancers/~01319719b0761ff361",
    freelancer: "https://www.freelancer.com/u/IAMSTRONG57",
    malt: "https://www.malt.com/profile/jayantrohila",
    arc: "https://arc.dev/@jayantrohila57",
    truelancer: "https://www.truelancer.com/freelancer/jayantrohila",
    contra: "https://contra.com/jayant_rohila_qrutb9cv",
    fiverr: "https://www.fiverr.com/jayant_rohila",
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
