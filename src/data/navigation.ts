export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

/** Legacy nav snapshot — prefer `src/config/navigation.ts` for live site chrome. */
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export const moreNav: NavItem[] = [
  { label: "Resume", href: "/resume" },
  { label: "Engineering", href: "/engineering" },
  { label: "Experiments", href: "/experiments" },
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
  {
    label: "Linktree",
    href: "https://linktr.ee/JayantRohila",
    external: true,
  },
];

export const footerNav: NavItem[] = [
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
  {
    label: "Linktree",
    href: "https://linktr.ee/JayantRohila",
    external: true,
  },
];
