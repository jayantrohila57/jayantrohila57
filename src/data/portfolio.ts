import {
  heroHeadline,
  longAbout,
  metaDescription,
  publicHeadline,
  siteConfig,
  specializationLine,
} from "@/config/site";

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

export const workPageTierLabels = [
  { key: "flagship", title: "Flagship projects" },
  { key: "supporting", title: "Strong supporting work" },
  { key: "experiments", title: "Experiments" },
] as const;

export const workPageOrder: {
  slug: string;
  tier: (typeof workPageTierLabels)[number]["key"];
}[] = [
  { slug: "taskflow", tier: "flagship" },
  { slug: "env-manager", tier: "flagship" },
  { slug: "libyui", tier: "flagship" },
  { slug: "e-commerce", tier: "supporting" },
  { slug: "stats-on-spotify", tier: "supporting" },
  { slug: "inkly-cms", tier: "experiments" },
  { slug: "image-editor", tier: "experiments" },
  { slug: "patternlab", tier: "experiments" },
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
  ],
  focus: {
    building: "Web products in React.js, Next.js, and TypeScript",
    active: "Responsive UIs, REST APIs, design handoff to production",
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
      "Full-stack commerce platform with authenticated customer flows, staff operations, and server-authoritative Razorpay checkout.",
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
    featured: false,
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
          "Personal project built with production-minded architecture: real auth, database-backed catalog and orders, and payment flows where totals stay aligned with provider charges.",
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
          "App Router UI → tRPC procedures → Drizzle on PostgreSQL (Neon). Better Auth for sessions. Razorpay webhooks with HMAC verification. Optional Resend, Sentry, and blob storage.",
        ],
      },
      {
        id: "stack",
        title: "Stack",
        body: [
          "Next.js App Router, TypeScript, tRPC, Drizzle ORM, PostgreSQL, Better Auth, Razorpay, Vitest, and Biome.",
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        body: [
          "Demonstrates server-authoritative checkout, authenticated customer flows, staff operations, and payment webhook verification in one codebase — open source with a live demo.",
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
          "Developer-first workspace for environment variables and secrets across dev, staging, and production targets.",
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
          "Next.js, React, TypeScript, Tailwind CSS, shadcn/ui, Better Auth, Neon, Prisma, deployed on Vercel.",
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        body: [
          "Shows secure secret handling, multi-environment tabs, and a UI aimed at day-to-day configuration workflows — open source with a hosted demo.",
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
          "Next.js App Router, TypeScript, Prisma, PostgreSQL, tRPC, TanStack Query, Radix UI, shadcn/ui, Tailwind CSS, and next-intl.",
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        body: ["Open-source repository with a hosted demo on Vercel."],
      },
    ],
  },
  {
    slug: "inkly-cms",
    title: "Inkly CMS",
    eyebrow: "EXPERIMENT / CMS",
    summary: "Self-hosted blogging CMS with TipTap editor patterns.",
    description:
      "Headless CMS-style blogging project with React Query and editor-focused UX.",
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
        body: [
          "Self-hosted publishing with rich-text editing, taxonomy, media, and role-aware content workflows.",
        ],
      },
    ],
  },
  {
    slug: "libyui",
    title: "libyui",
    eyebrow: "LIBRARY",
    summary: "React component library built with TypeScript and Tailwind CSS.",
    description:
      "Reusable UI primitives published as an open-source component library.",
    status: "Open source · Live demo",
    year: "2024–2025",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    categories: ["experiment", "frontend"],
    featured: true,
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
      "Hosted v1 demo on Vercel — browser-based image editing experiment.",
    status: "Live demo",
    year: "2024–2025",
    stack: ["Next.js", "TypeScript", "React"],
    categories: ["experiment", "frontend"],
    featured: false,
    visualType: "browser",
    links: {
      live: "https://v1-image-editor.vercel.app",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Browser-based image editing experiment with a hosted preview on Vercel.",
        ],
      },
    ],
  },
  {
    slug: "stats-on-spotify",
    title: "Stats On Spotify",
    eyebrow: "EXPERIMENT / DATA",
    summary: "Spotify stats visualization side project with a public demo.",
    description:
      "Hosted on Vercel; scope and stack documented in the GitHub repository.",
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
        body: [
          "Spotify listening stats visualization with a public demo and repository.",
        ],
      },
    ],
  },
  {
    slug: "patternlab",
    title: "Patternlab",
    eyebrow: "EXPERIMENT / UI",
    summary:
      "Interactive platform for practicing programming patterns with runnable examples and tests.",
    description:
      "Pattern challenges with a code runner and test feedback — explore solutions in the browser.",
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
        body: [
          "Focused on learning patterns through small exercises, live execution, and verifiable outputs.",
        ],
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
      "Work GitHub: github.com/jayantaiqmen.",
      "Client-facing deliverables stay confidential; portfolio focuses on open-source work.",
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
      "Associate Software Developer from June 2024; trainee from March 2024.",
      "Last working day 16 April 2026.",
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
      "Trainee software role focused on ServiceNow administration and development.",
    highlights: ["Jul–Oct 2021 · ServiceNow platform work."],
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
    summary: "In-browser editing UI with a hosted v1 demo.",
    stack: ["Next.js", "React"],
    links: {
      live: "https://v1-image-editor.vercel.app",
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
      {
        name: "Prisma",
        projectSlugs: ["env-manager", "taskflow", "inkly-cms"],
      },
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
