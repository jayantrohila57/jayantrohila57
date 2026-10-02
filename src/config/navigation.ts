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
      {
        label: "GitHub",
        href: "https://github.com/jayantrohila57",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jayant-rohila/",
        external: true,
      },
      { label: "Resume", href: "/resume" },
    ],
  },
];
