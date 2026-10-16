import type { PortfolioProject } from "@/data/portfolio";

/** Captured demo screenshots live under `public/projects/{slug}.png`. */
export function getProjectScreenshotPath(slug: string): string {
  if (slug === "taskflow") {
    return "/projects/taskflow-app.png";
  }
  return `/projects/${slug}.png`;
}

export function projectHasScreenshot(slug: string): boolean {
  return Boolean(
    [
      "lucsum",
      "loftlancer",
      "taskflow",
      "image-editor",
      "stats-on-spotify",
    ].includes(slug),
  );
}

export function getProjectOgImage(project: PortfolioProject): string {
  if (projectHasScreenshot(project.slug)) {
    return getProjectScreenshotPath(project.slug);
  }
  return `/api/image?type=og`;
}
