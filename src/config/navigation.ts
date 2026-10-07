import { elsewhereLinks, siteConfig } from "./site";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

/** Primary header navigation — 3–5 links per Efferd header-1 guidance. */
export const mainNav: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Engineering", href: "/engineering" },
  { label: "About", href: "/about" },
  { label: "Resume", href: siteConfig.resumePath },
];

const footerElsewhere: NavItem[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jayant-rohila/",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/jayantrohila57",
    external: true,
  },
  { label: "Experiments", href: "/experiments" },
  { label: "Contact", href: "/contact" },
];

export const footerNavGroups: { title: string; items: NavItem[] }[] = [
  {
    title: "Explore",
    items: [
      { label: "Work", href: "/work" },
      { label: "Engineering", href: "/engineering" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Connect",
    items: footerElsewhere,
  },
];

export { elsewhereLinks };
