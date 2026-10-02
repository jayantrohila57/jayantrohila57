import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { moreNav, primaryNav } from "@/data/navigation";
import { gitConfig } from "./shared";

const docsNav = primaryNav
  .filter((item) => item.href !== "/")
  .map((item) => ({
    text: item.label,
    url: item.href,
  }));

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "Jayant Rohila",
      url: "/",
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      ...docsNav,
      {
        type: "menu",
        text: "More",
        items: moreNav.map((item) => ({
          text: item.label,
          url: item.href,
          external: item.external,
        })),
      },
    ],
  };
}
