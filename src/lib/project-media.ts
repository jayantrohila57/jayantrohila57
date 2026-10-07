import type { PortfolioProject } from "@/data/portfolio";

/** Captured demo screenshots live under `public/projects/{slug}.png`. */
export function getProjectScreenshotPath(slug: string): string {
  return `/projects/${slug}.png`;
}

/** Homepage hero uses in-app UI when marketing landing shots exist. */
export function getProjectHeroScreenshotPath(slug: string): string {
  if (slug === "taskflow") {
    return "/projects/taskflow-app.png";
  }
  return getProjectScreenshotPath(slug);
}

export function projectHasScreenshot(slug: string): boolean {
  return Boolean(
    [
      "e-commerce",
      "env-manager",
      "taskflow",
      "inkly-cms",
      "libyui",
      "image-editor",
      "stats-on-spotify",
      "patternlab",
    ].includes(slug),
  );
}

export function getProjectOgImage(project: PortfolioProject): string {
  if (projectHasScreenshot(project.slug)) {
    return getProjectScreenshotPath(project.slug);
  }
  return `/api/image?type=og`;
}
