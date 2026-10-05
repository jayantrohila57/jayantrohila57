import { elsewhereLinks, siteConfig } from "@/config/site";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const mainNav: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Engineering", href: "/engineering" },
  { label: "Experiments", href: "/experiments" },
  { label: "About", href: "/about" },
];

export const footerNavGroups: { title: string; items: NavItem[] }[] = [
  {
    title: "Explore",
    items: [
      { label: "Work", href: "/work" },
      { label: "Engineering", href: "/engineering" },
      { label: "Experiments", href: "/experiments" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Elsewhere",
    items: [
      ...elsewhereLinks.map((link) => ({
        label: link.label,
        href: link.href,
        external: true,
      })),
      { label: "Resume", href: siteConfig.resumePath },
    ],
  },
];
