import type { PortfolioProject } from "@/data/portfolio-types";
import type { WorkEngagement } from "@/data/work-engagement";
import { getWorkPage, getWorkPages, slugFromDoc } from "@/lib/content/source";
import type { ProjectCaseStudy } from "@/lib/content/types";

type WorkFrontmatter = {
  title: string;
  summary: string;
  repo?: string;
  live?: string;
  years: string;
  role?: string;
  stack: string[];
  featured: boolean;
  order: number;
  eyebrow: string;
  description: string;
  status: string;
  categories: string[];
  workEngagement: WorkEngagement;
  visualType: PortfolioProject["visualType"];
  ogTitle?: string;
  ogDescription?: string;
  caseStudy?: ProjectCaseStudy;
  sections?: PortfolioProject["sections"];
};

export function mapWorkPageToProject(
  slug: string,
  data: WorkFrontmatter,
): PortfolioProject {
  return {
    slug,
    title: data.title,
    eyebrow: data.eyebrow,
    summary: data.summary,
    description: data.description,
    status: data.status,
    role: data.role,
    year: data.years,
    stack: data.stack,
    categories: data.categories,
    workEngagement: data.workEngagement,
    featured: data.featured,
    visualType: data.visualType,
    links: {
      live: data.live,
      github: data.repo,
    },
    sections: data.sections ?? [],
    ogTitle: data.ogTitle,
    ogDescription: data.ogDescription,
    order: data.order,
  };
}

export function getAllWorkProjects(): PortfolioProject[] {
  return getWorkPages()
    .map((doc) => {
      const slug = slugFromDoc(doc);
      return mapWorkPageToProject(slug, doc as WorkFrontmatter);
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getWorkProject(slug: string): PortfolioProject | undefined {
  const doc = getWorkPage(slug);
  if (!doc) return undefined;
  return mapWorkPageToProject(slug, doc as WorkFrontmatter);
}

export function getWorkCaseStudy(slug: string): ProjectCaseStudy | undefined {
  const doc = getWorkPage(slug);
  if (!doc) return undefined;
  return (doc as WorkFrontmatter).caseStudy;
}
