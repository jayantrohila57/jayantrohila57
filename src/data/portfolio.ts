import { siteConfig } from "@/config/site";

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
  featured: boolean;
  visualType: ProjectVisualType;
  links: { live?: string; github?: string };
  sections: ProjectSection[];
};

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

export const profile = {
  name: siteConfig.author.name,
  title: siteConfig.author.jobTitle,
  publicHeadline: "Product Engineer (Consultant) · aiQmen",
  shortBio:
    "I build modern web products, typed APIs, and developer-facing tools — with clear UX and maintainable architecture.",
  longBio:
    "Product Engineer (Consultant) at aiQmen Designs & Technologies in Noida since May 2026. Previously Associate Software Developer at Binmile Technologies (Mar 2024 – Apr 2026). Public open-source work includes e-commerce, Env Manager, and Taskflow with live Vercel demos.",
  location: siteConfig.contact.location,
  openToOpportunities: siteConfig.contact.hireable,
  metadataLine: "WEB · PRODUCT · TYPESCRIPT · NEXT.JS",
  heroStrip: [
    "NEXT.JS",
    "TYPESCRIPT",
    "REACT",
    "tRPC",
    "POSTGRESQL",
    "TAILWIND",
    "TANSTACK QUERY",
    "VERCEL",
  ],
  focus: {
    building: "Product engineering @ aiQmen (onsite, Noida)",
    active: "Web applications, typed APIs, product UI",
    exploring: "Data-heavy interfaces and developer tooling",
  },
  social: {
    email: siteConfig.contact.email,
    github: siteConfig.social.github,
    linkedin: siteConfig.social.linkedin,
  },
};

export const projects: PortfolioProject[] = [
  {
    slug: "e-commerce",
    title: "E-commerce",
    eyebrow: "PROJECT / PRODUCT",
    summary:
      "Production-shaped storefront with auth, server-authoritative Razorpay checkout, and staff-facing studio routes.",
    description:
      "A Next.js storefront with App Router routes, authenticated customer flows, staff Studio (restricted to staff/admin per repo docs), and Razorpay checkout with webhook verification.",
    status: "Open source · Live demo",
    role: "Personal project",
    year: "2024–2026",
    stack: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Drizzle ORM",
      "PostgreSQL",
      "Better Auth",
      "Razorpay",
      "Tailwind CSS",
    ],
    categories: ["product", "frontend", "backend"],
    featured: true,
    visualType: "dashboard",
    links: {
      live: "https://e-commerce-jayantrohila.vercel.app",
      github: "https://github.com/jayantrohila57/e-commerce",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Production-oriented e-commerce codebase with real auth, database-backed catalog and orders, and payment integration where totals and provider charges stay aligned.",
        ],
      },
      {
        id: "context",
        title: "Context",
        body: [
          "Built as a learning and portfolio codebase shaped like a real storefront — not a static product grid.",
        ],
      },
      {
        id: "built",
        title: "What I built",
        body: [
          "Customer and staff flows, health endpoints (/api/health, /api/health/ready), migrations and seed scripts, and server-authoritative checkout via order.previewCheckoutTotals and order.create.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "App Router UI → tRPC procedures → Drizzle on PostgreSQL (Neon). Better Auth for sessions. Razorpay webhooks with HMAC verification. Optional Resend, Sentry, and blob storage per README.",
        ],
      },
      {
        id: "stack",
        title: "Stack",
        body: [
          "Next.js App Router, TypeScript, tRPC, Drizzle ORM, PostgreSQL, Better Auth, Razorpay, Vitest, Biome — from project README and docs.",
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        body: [
          "Public repository and deployed demo on Vercel. Sales volume, traffic, and production launch status are not published here.",
        ],
      },
    ],
  },
  {
    slug: "env-manager",
    title: "Env Manager",
    eyebrow: "PROJECT / DEVELOPER TOOL",
    summary:
      "Developer-first system to manage environment variables and secrets across repos and deployment targets.",
    description:
      "Web app to securely manage environment variables, secrets, and credentials with multi-environment workflows and CI/CD integration as stated goals in the README.",
    status: "Open source · Live demo",
    role: "Personal project",
    year: "2025–2026",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Better Auth",
      "Prisma",
      "Neon",
    ],
    categories: ["product", "systems", "frontend"],
    featured: true,
    visualType: "terminal",
    links: {
      live: "https://env-manager-web.vercel.app",
      github: "https://github.com/jayantrohila57/env-manager",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Single place to manage configuration that should align with how teams run apps locally and in CI/CD — described in the README as a single source of truth.",
        ],
      },
      {
        id: "built",
        title: "What I built",
        body: [
          "Secure management UI, multi-environment support (dev, staging, production), and developer-first UX emphasized in project documentation.",
        ],
      },
      {
        id: "stack",
        title: "Stack",
        body: [
          "Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui, Better Auth, Neon with Prisma, deployed on Vercel — from README.",
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        body: [
          "Working open-source repo and hosted demo. Team adoption and connected project counts are not tracked on this site.",
        ],
      },
    ],
  },
  {
    slug: "taskflow",
    title: "Taskflow",
    eyebrow: "PROJECT / SAAS SANDBOX",
    summary:
      "Multi-tenant task and project management platform with modular App Router architecture and i18n.",
    description:
      "Organization management, RBAC, task and project workflows, collaboration features, internationalized routes, and PWA-related configuration documented in the repo.",
    status: "Open source · Live demo",
    role: "Personal project",
    year: "2024–2026",
    stack: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "TanStack Query",
      "Prisma",
      "PostgreSQL",
      "next-intl",
      "Tailwind CSS",
    ],
    categories: ["product", "frontend", "backend"],
    featured: true,
    visualType: "architecture",
    links: {
      live: "https://v1-taskflow.vercel.app/",
      github: "https://github.com/jayantrohila57/taskflow",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Sandbox to practice team-scale product shape: organizations, roles, tasks, and projects — closer to SaaS than a tutorial todo app.",
        ],
      },
      {
        id: "built",
        title: "What I built",
        body: [
          "Modular src/modules layout for auth, organization, project, task, and user areas; App Router segments for public, protected, handler, and panel routes under [locale].",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "Multi-tenant model with organization hierarchy and RBAC. tRPC routers for users, organizations, projects, and tasks. Prisma schema split under prisma/schema/.",
        ],
      },
      {
        id: "stack",
        title: "Stack",
        body: [
          "Next.js App Router, TypeScript, Prisma, PostgreSQL, tRPC, TanStack Query, Radix UI, shadcn/ui, Tailwind CSS 4, next-intl — from README.",
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        body: [
          "Public source and v1 Vercel deployment. Active user counts and revenue are not published here.",
        ],
      },
    ],
  },
  {
    slug: "inkly-cms",
    title: "Inkly CMS",
    eyebrow: "EXPERIMENT / CMS",
    summary: "Self-hosted blogging CMS with TipTap editor patterns.",
    description: "Headless CMS-style blogging project with React Query and editor-focused UX.",
    status: "Open source · Demo",
    year: "2024–2025",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    categories: ["experiment", "frontend"],
    featured: false,
    visualType: "editor",
    links: {
      live: "https://inkly-blog.vercel.app",
      github: "https://github.com/jayantrohila57/inkly-cms",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: ["Secondary showcase — CMS and content editing patterns."],
      },
    ],
  },
  {
    slug: "libyui",
    title: "libyui",
    eyebrow: "LIBRARY",
    summary: "React component library built with TypeScript and Tailwind CSS.",
    description: "Reusable UI primitives published as an open-source component library.",
    status: "Open source · Live demo",
    year: "2024–2025",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    categories: ["experiment", "frontend"],
    featured: false,
    visualType: "custom",
    links: {
      live: "https://libyui.vercel.app/",
      github: "https://github.com/jayantrohila57/libyui",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: ["Component library for consistent UI building blocks."],
      },
    ],
  },
  {
    slug: "image-editor",
    title: "Image Editor",
    eyebrow: "EXPERIMENT / UI",
    summary: "Browser-based image editing experiment with a hosted v1 demo.",
    description:
      "Public repository and Vercel deployment — details in the repo README.",
    status: "Open source · Live demo",
    year: "2024–2025",
    stack: ["Next.js", "TypeScript", "React"],
    categories: ["experiment", "frontend"],
    featured: false,
    visualType: "browser",
    links: {
      live: "https://v1-image-editor.vercel.app",
      github: "https://github.com/jayantrohila57/image-editor",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: ["Supporting showcase from the public deploy map in career source data."],
      },
    ],
  },
  {
    slug: "stats-on-spotify",
    title: "Stats On Spotify",
    eyebrow: "EXPERIMENT / DATA",
    summary: "Spotify stats visualization side project with a public demo.",
    description: "Hosted on Vercel; scope and stack documented in the GitHub repository.",
    status: "Open source · Live demo",
    year: "2023–2025",
    stack: ["Next.js", "TypeScript", "React"],
    categories: ["experiment", "data"],
    featured: false,
    visualType: "data",
    links: {
      live: "https://statsonspotify.vercel.app/",
      github: "https://github.com/jayantrohila57/Stats-On-Spotify",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: ["Listed as strong supporting work in public career source data."],
      },
    ],
  },
  {
    slug: "patternlab",
    title: "Patternlab",
    eyebrow: "EXPERIMENT / UI",
    summary: "UI patterns lab with a live Vercel preview.",
    description: "Public repo and deployment — see repository for implementation notes.",
    status: "Open source · Live demo",
    year: "2024–2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: ["experiment", "frontend"],
    featured: false,
    visualType: "custom",
    links: {
      live: "https://patternlab.vercel.app",
      github: "https://github.com/jayantrohila57/patternlab",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: ["Pattern and layout experiments published with a public demo URL."],
      },
    ],
  },
];

export const experience: ExperienceEntry[] = [
  {
    id: "aiqmen",
    company: "aiQmen Designs & Technologies Pvt. Ltd.",
    role: "Product Engineer (offer title: Consultant – Product Engineer)",
    period: "18 May 2026 – Present",
    location: "Noida · onsite",
    summary:
      "Product engineering for software engagements — web products with TypeScript, React, and Next.js-style stacks.",
    highlights: [
      "Work GitHub: github.com/jayantaiqmen (created May 2026).",
      "Employer deliverables and client names are not listed on this public site.",
    ],
    technologies: ["TypeScript", "React", "Next.js"],
  },
  {
    id: "binmile",
    company: "Binmile Technologies Pvt. Ltd.",
    role: "Associate Software Developer",
    period: "18 Mar 2024 – 16 Apr 2026",
    location: "Noida",
    summary:
      "Full-stack software delivery in a services environment. Trainee from join; Associate Software Developer from 17 Jun 2024.",
    highlights: [
      "HR title used here; some public profiles say Software Engineer / SDE.",
      "Last working day 16 Apr 2026 per public career records.",
    ],
    technologies: ["TypeScript", "Next.js", "React"],
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
      "Trainee software role including ServiceNow administration and development (also listed as ServiceNow Admin & Dev Intern on older resumes).",
    highlights: [
      "Public sources disagree on exact start month (Jul vs Aug 2021); Jul–Oct 2021 preferred here.",
    ],
    technologies: ["ServiceNow"],
  },
];

export const experiments: Experiment[] = [
  {
    slug: "inkly-cms",
    title: "Inkly CMS",
    summary: "TipTap-based blogging CMS and headless content patterns.",
    stack: ["Next.js", "Prisma"],
    links: {
      live: "https://inkly-blog.vercel.app",
      github: "https://github.com/jayantrohila57/inkly-cms",
    },
    visualType: "editor",
  },
  {
    slug: "libyui",
    title: "libyui",
    summary: "React + Tailwind component library with live docs site.",
    stack: ["React", "Tailwind"],
    links: {
      live: "https://libyui.vercel.app/",
      github: "https://github.com/jayantrohila57/libyui",
    },
    visualType: "custom",
  },
  {
    slug: "image-editor",
    title: "Image Editor",
    summary: "In-browser editing UI — public v1 deployment.",
    stack: ["Next.js", "React"],
    links: {
      live: "https://v1-image-editor.vercel.app",
      github: "https://github.com/jayantrohila57/image-editor",
    },
    visualType: "browser",
  },
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
    slug: "patternlab",
    title: "Patternlab",
    summary: "UI pattern experiments with live preview.",
    stack: ["Next.js", "Tailwind"],
    links: {
      live: "https://patternlab.vercel.app",
      github: "https://github.com/jayantrohila57/patternlab",
    },
    visualType: "custom",
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

export const stackGroups: StackGroup[] = [
  {
    id: "frontend",
    label: "Frontend",
    items: [
      {
        name: "Next.js",
        projectSlugs: [
          "e-commerce",
          "env-manager",
          "taskflow",
          "inkly-cms",
          "image-editor",
          "stats-on-spotify",
          "patternlab",
        ],
      },
      {
        name: "React",
        projectSlugs: [
          "e-commerce",
          "env-manager",
          "taskflow",
          "libyui",
          "image-editor",
          "stats-on-spotify",
        ],
      },
      {
        name: "TypeScript",
        projectSlugs: [
          "e-commerce",
          "env-manager",
          "taskflow",
          "inkly-cms",
          "libyui",
          "image-editor",
          "stats-on-spotify",
          "patternlab",
        ],
      },
      {
        name: "Tailwind CSS",
        projectSlugs: [
          "e-commerce",
          "env-manager",
          "taskflow",
          "libyui",
          "patternlab",
        ],
      },
      { name: "shadcn/ui", projectSlugs: ["env-manager", "taskflow"] },
      { name: "TanStack Query", projectSlugs: ["taskflow"] },
    ],
  },
  {
    id: "data-api",
    label: "Data / API",
    items: [
      { name: "tRPC", projectSlugs: ["e-commerce", "taskflow"] },
      { name: "Prisma", projectSlugs: ["env-manager", "taskflow", "inkly-cms"] },
      { name: "Drizzle ORM", projectSlugs: ["e-commerce"] },
      {
        name: "PostgreSQL / Neon",
        projectSlugs: ["e-commerce", "env-manager", "taskflow"],
      },
    ],
  },
  {
    id: "platform",
    label: "Platform & quality",
    items: [
      { name: "Better Auth", projectSlugs: ["e-commerce", "env-manager"] },
      { name: "Razorpay", projectSlugs: ["e-commerce"] },
      {
        name: "Vercel",
        projectSlugs: [
          "e-commerce",
          "env-manager",
          "taskflow",
          "inkly-cms",
          "libyui",
          "image-editor",
          "stats-on-spotify",
          "patternlab",
        ],
      },
      { name: "Vitest", projectSlugs: ["e-commerce"] },
      { name: "Biome", projectSlugs: ["e-commerce"] },
      { name: "next-intl", projectSlugs: ["taskflow"] },
    ],
  },
];

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: "product-ui",
    title: "Product-first UI",
    description:
      "Interfaces shaped for real tasks — tables, forms, auth flows, and responsive shells backed by typed data.",
    visual: "data-table",
  },
  {
    id: "type-safe",
    title: "Type-safe architecture",
    description:
      "End-to-end typing from UI through tRPC procedures to database layers where projects use that stack.",
    visual: "type-flow",
  },
  {
    id: "systems",
    title: "Reusable systems",
    description:
      "Shared UI primitives, consistent tokens, and modular App Router structure — especially in Taskflow and libyui.",
    visual: "ui-stack",
  },
  {
    id: "automation",
    title: "Quality & delivery",
    description:
      "Biome, Vitest, and CI-friendly scripts in repos; deploy targets documented for Vercel.",
    visual: "ci-pipeline",
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByStack(name: string) {
  return projects.filter((p) =>
    p.stack.some((s) => s.toLowerCase().includes(name.toLowerCase())),
  );
}
