import type { PortfolioProject } from "@/data/portfolio-types";
import type { ProjectCaseStudy } from "@/lib/content/types";
import { getWorkCaseStudy } from "@/lib/content/work";

export type { ProjectCaseStudy } from "@/lib/content/types";

export function getProjectCaseStudy(
  project: PortfolioProject,
): ProjectCaseStudy | undefined {
  return getWorkCaseStudy(project.slug);
}
