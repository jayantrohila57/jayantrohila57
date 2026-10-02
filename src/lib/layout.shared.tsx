import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: appName,
      url: "/",
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      {
        text: "About",
        url: "/about/overview",
      },
      {
        text: "Projects",
        url: "/work/projects",
      },
      {
        text: "GitHub",
        url: "https://github.com/jayantrohila57",
        external: true,
      },
    ],
  };
}
