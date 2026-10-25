import {
  heroHeadline,
  longAbout,
  metaDescription,
  publicHeadline,
  siteConfig,
  specializationLine,
} from "@/config/site";
import type {
  PortfolioProject,
  ProjectVisualType,
} from "@/data/portfolio-types";
import type { WorkEngagement } from "@/data/work-engagement";
import { getAllWorkProjects } from "@/lib/content/work";

export type {
  PortfolioProject,
  ProjectSection,
  ProjectVisualType,
} from "@/data/portfolio-types";

export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  projectSlugs?: string[];
};

export type Experiment = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  links: { live?: string; github?: string };
  visualType: ProjectVisualType;
};

export type StackGroup = {
  id: string;
  label: string;
  items: { name: string; projectSlugs: string[] }[];
};

export type EngineeringPrinciple = {
  id: string;
  title: string;
  description: string;
  visual: "ui-stack" | "type-flow" | "ci-pipeline" | "data-table";
};

export const workPageTierLabels = [
  { key: "flagship", title: "Flagship projects" },
  { key: "supporting", title: "More projects" },
  { key: "experiments", title: "Experiments" },
] as const;

export const workPageOrder: {
  slug: string;
  tier: (typeof workPageTierLabels)[number]["key"];
}[] = [
  { slug: "loftlancer", tier: "flagship" },
  { slug: "feature-kit", tier: "flagship" },
  { slug: "modelry", tier: "flagship" },
  { slug: "lucsum", tier: "flagship" },
  { slug: "stats-on-spotify", tier: "supporting" },
];

export const profile = {
  name: siteConfig.author.name,
  title: siteConfig.author.role,
  tagline: heroHeadline,
  specialization: specializationLine,
  publicHeadline,
  shortBio: metaDescription,
  longBio: longAbout,
  location: siteConfig.contact.location,
  openToOpportunities: siteConfig.contact.hireable,
  metadataLine: "NEXT.JS · REACT · TYPESCRIPT · TAILWIND",
  heroStrip: [
    "NEXT.JS",
    "REACT",
    "TYPESCRIPT",
    "TAILWIND",
    "NODE.JS",
    "REST APIs",
    "VERCEL",
    "AI SDK",
  ],
  focus: {
    building: "Web products in React.js, Next.js, and TypeScript",
    active: "Responsive UIs, REST APIs, design handoff to production",
    exploring: "AI features with the Vercel AI SDK and data-heavy interfaces",
  },
  social: {
    email: siteConfig.contact.email,
    github: siteConfig.social.github,
    linkedin: siteConfig.social.linkedin,
  },
};

export const projects: PortfolioProject[] = getAllWorkProjects();

export const experience: ExperienceEntry[] = [
  {
    id: "aiqmen",
    company: "aiQmen Designs & Technologies Pvt. Ltd.",
    role: "Product Engineer",
    period: "18 May 2026 – Present",
    location: "Noida · onsite",
    summary:
      "Building product interfaces and full-stack web features with TypeScript, React, and Next.js on client software engagements.",
    highlights: [
      "Own UI implementation, component structure, and API integration for product-facing features.",
      "Client names and deliverables stay off the public portfolio.",
    ],
    technologies: ["TypeScript", "React", "Next.js", "REST APIs"],
  },
  {
    id: "binmile",
    company: "Binmile Technologies Pvt. Ltd.",
    role: "Associate Software Developer",
    period: "18 Mar 2024 – 16 Apr 2026",
    location: "Noida",
    summary:
      "Shipped production web features in a product-engineering services team — React and Next.js interfaces, forms and tables, REST integration, and sprint delivery alongside designers and backend engineers.",
    highlights: [
      "Joined as trainee (18 Mar 2024); Associate Software Developer from 17 Jun 2024 through last working day 16 Apr 2026.",
      "Built and maintained client-facing UI flows: validation-heavy forms, data tables, filters, and responsive layouts.",
      "Integrated frontend views with backend APIs and handled edge cases in loading, error, and empty states.",
      "Client and product names are confidential; evidence of engineering depth is in the open-source case studies on this site.",
    ],
    technologies: ["TypeScript", "React", "Next.js", "REST APIs", "Git"],
    projectSlugs: ["loftlancer", "lucsum"],
  },
  {
    id: "teevro",
    company: "Teevro Solutions Pvt. Ltd.",
    role: "Full Stack Development Intern",
    period: "24 Jan 2023 – 30 Apr 2023",
    summary: "Structured full-stack internship alongside a product team.",
    highlights: [],
    technologies: ["JavaScript", "React"],
  },
  {
    id: "braeon",
    company: "Braeon Technocrats Pvt. Ltd.",
    role: "Software Developer – Trainee",
    period: "Jul 2021 – Oct 2021",
    summary:
      "Trainee software role focused on ServiceNow administration and development.",
    highlights: ["Jul–Oct 2021 · ServiceNow platform work."],
    technologies: ["ServiceNow"],
  },
];

export const experiments: Experiment[] = [
  {
    slug: "stats-on-spotify",
    title: "Stats On Spotify",
    summary: "Spotify listening stats visualization.",
    stack: ["Next.js", "TypeScript"],
    links: {
      live: "https://statsonspotify.vercel.app/",
      github: "https://github.com/jayantrohila57/Stats-On-Spotify",
    },
    visualType: "data",
  },
  {
    slug: "feature-kit",
    title: "Feature Kits",
    summary: "Composable form and data-table kits for React and Next.js.",
    stack: ["React", "Next.js"],
    links: {
      live: "https://feature-kits.vercel.app",
      github: "https://github.com/jayantrohila57/feature-kit",
    },
    visualType: "data",
  },
  {
    slug: "jayantrohila57",
    title: "This portfolio",
    summary: "jayantrohila.com — App Router portfolio (this rebuild).",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    links: {
      live: siteConfig.siteUrl,
      github: "https://github.com/jayantrohila57/jayantrohila57",
    },
    visualType: "browser",
  },
];

const ALL = [
  "loftlancer",
  "feature-kit",
  "modelry",
  "lucsum",
  "stats-on-spotify",
];
const FULL_STACK = ["loftlancer", "modelry", "lucsum"];

export const stackGroups: StackGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "Next.js", projectSlugs: ALL },
      { name: "React", projectSlugs: ALL },
      { name: "TypeScript", projectSlugs: ALL },
      {
        name: "Tailwind CSS",
        projectSlugs: ["lucsum", "loftlancer", "modelry", "feature-kit"],
      },
      {
        name: "shadcn/ui",
        projectSlugs: ["loftlancer", "modelry", "feature-kit"],
      },
    ],
  },
  {
    id: "data-api",
    label: "Data / API",
    items: [
      { name: "tRPC", projectSlugs: FULL_STACK },
      { name: "Drizzle ORM", projectSlugs: FULL_STACK },
      { name: "PostgreSQL / Neon", projectSlugs: FULL_STACK },
    ],
  },
  {
    id: "platform",
    label: "Platform & quality",
    items: [
      { name: "Better Auth", projectSlugs: FULL_STACK },
      { name: "Razorpay", projectSlugs: ["lucsum"] },
      { name: "Vercel", projectSlugs: ALL },
      { name: "Vitest", projectSlugs: ["lucsum"] },
      { name: "Biome", projectSlugs: ["lucsum", "modelry"] },
    ],
  },
  {
    id: "ai",
    label: "AI",
    items: [
      { name: "Vercel AI SDK", projectSlugs: ["modelry"] },
      { name: "Ollama", projectSlugs: ["modelry"] },
      { name: "Google Gemini", projectSlugs: ["modelry"] },
    ],
  },
];

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: "product-ui",
    title: "Product UI",
    description:
      "Tables, forms, filters, validation, states, and responsive workflows shaped for real product tasks.",
    visual: "data-table",
  },
  {
    id: "type-safe",
    title: "Type-safe architecture",
    description:
      "Strong contracts from UI through APIs to the data layer — tRPC and typed procedures where projects use that stack.",
    visual: "type-flow",
  },
  {
    id: "systems",
    title: "Reusable systems",
    description:
      "Shared UI primitives, tokens, and modular application structure — especially in Loftlancer and Feature Kits.",
    visual: "ui-stack",
  },
  {
    id: "automation",
    title: "Quality & delivery",
    description:
      "Testing, linting, CI, and deployment workflows documented in repos (Biome, Vitest, GitHub Actions, Vercel).",
    visual: "ci-pipeline",
  },
];

export function getFeaturedProjects() {
  const order = workPageOrder
    .filter((entry) => entry.tier === "flagship")
    .map((entry) => entry.slug);
  const featured = projects.filter((p) => p.featured);
  return [...featured].sort(
    (a, b) => order.indexOf(a.slug) - order.indexOf(b.slug),
  );
}

export function getWorkPageProjectsByTier() {
  const bySlug = new Map(projects.map((project) => [project.slug, project]));
  return workPageTierLabels.map((tier) => ({
    ...tier,
    projects: workPageOrder
      .filter((entry) => entry.tier === tier.key)
      .map((entry) => bySlug.get(entry.slug))
      .filter((project): project is PortfolioProject => Boolean(project)),
  }));
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByStack(name: string) {
  return projects.filter((p) =>
    p.stack.some((s) => s.toLowerCase().includes(name.toLowerCase())),
  );
}

export function getProjectsByEngagement(engagement: WorkEngagement) {
  return projects.filter((p) => p.workEngagement === engagement);
}

/** Other projects — external repos without a dedicated case-study page. */
export function getLabShelfExperiments() {
  const projectSlugs = new Set(projects.map((p) => p.slug));
  return experiments.filter((exp) => !projectSlugs.has(exp.slug));
}
