import type { PortfolioProject } from "@/data/portfolio";

/** Captured demo screenshots live under `public/projects/{slug}.png`. */
export function getProjectScreenshotPath(slug: string): string {
  return `/projects/${slug}.png`;
}

export function projectHasScreenshot(slug: string): boolean {
  return Boolean([
    "lucsum",
    "loftlancer",
    "stats-on-spotify",
    "modelry",
    "feature-kit",
  ].includes(slug));
}

export function getProjectOgImage(project: PortfolioProject): string {
  if (projectHasScreenshot(project.slug)) {
    return getProjectScreenshotPath(project.slug);
  }
  return `/api/image?type=og`;
}
