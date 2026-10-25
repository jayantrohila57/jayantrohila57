import type { WorkEngagement } from "@/data/work-engagement";

export type ProjectVisualType =
  | "dashboard"
  | "ai"
  | "browser"
  | "terminal"
  | "architecture"
  | "data"
  | "editor"
  | "custom";

export type ProjectSection = {
  id: string;
  title: string;
  body: string[];
};

export type PortfolioProject = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  status: string;
  role?: string;
  year: string;
  stack: string[];
  categories: string[];
  workEngagement: WorkEngagement;
  featured: boolean;
  visualType: ProjectVisualType;
  links: { live?: string; github?: string };
  sections: ProjectSection[];
  ogTitle?: string;
  ogDescription?: string;
  /** Sort key from content layer (not shown in UI). */
  order?: number;
};

export type { WorkEngagement };
