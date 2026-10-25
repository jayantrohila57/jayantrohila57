import { elsewhereLinks, siteConfig } from "./site";

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

/** Primary header navigation — credibility-first order. */
export const mainNav: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "Writing", href: "/writing" },
  { label: "About", href: "/about" },
  { label: "Elsewhere", href: "/elsewhere" },
];

/** Command palette entries beyond mainNav. */
export const commandNavExtras: NavItem[] = [
  { label: "Contact", href: "/contact" },
  { label: "Résumé", href: siteConfig.resumePath },
];

export const footerNavGroups: { title: string; items: NavItem[] }[] = [
  {
    title: "Work",
    items: [
      { label: "All projects", href: "/work" },
      { label: "Personal", href: "/work?type=personal" },
    ],
  },
  {
    title: "Writing",
    items: [
      { label: "Overview", href: "/writing" },
      { label: "Case studies", href: "/writing#case-studies" },
      { label: "Engineering", href: "/writing#engineering" },
      { label: "Blog", href: "/writing#blog" },
    ],
  },
  {
    title: "About",
    items: [
      { label: "About", href: "/about" },
      { label: "Résumé", href: siteConfig.resumePath },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Elsewhere",
    items: elsewhereLinks.map((link) => ({
      label: link.label,
      href: link.href,
      external: true,
    })),
  },
];

export { elsewhereLinks };
