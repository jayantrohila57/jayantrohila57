export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/overview" },
  { label: "Career", href: "/career/timeline" },
  { label: "Work", href: "/work/projects" },
  { label: "Contact", href: "/contact" },
];

export const moreNav: NavItem[] = [
  { label: "Resume", href: "/resume" },
  { label: "Case studies", href: "/work/case-studies" },
  { label: "Skills", href: "/work/skills" },
  { label: "GitHub profile", href: "/presence/github" },
  { label: "LinkedIn", href: "/presence/linkedin" },
  { label: "Linktree", href: "/presence/linktree" },
  { label: "Domains & handles", href: "/presence/domains-handles" },
  { label: "Elsewhere on the web", href: "/archive/mentions" },
  { label: "Profile notes", href: "/archive/conflicts" },
  { label: "Sources", href: "/archive/sources" },
  { label: "Normalize charter", href: "/normalize/charter" },
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
  { label: "Site source", href: "/presence/website" },
];
