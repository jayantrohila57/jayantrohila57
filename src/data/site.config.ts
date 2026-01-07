import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Jayant Rohila",
  tagline: "Senior Full-Stack Developer",
  domain: "jayant-rohila.dev",
  author: {
    name: "Jayant Rohila",
    email: "hello@jayant-rohila.dev",
  },
  theme: {
    defaultMode: "system",
  },
  social: [
    {
      platform: "GitHub",
      url: "https://github.com/jayantrohila",
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
    copyright: "© 2024 Jayant Rohila. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};
