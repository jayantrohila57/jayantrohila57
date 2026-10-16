import {
  heroHeadline,
  longAbout,
  metaDescription,
  publicHeadline,
  siteConfig,
  specializationLine,
} from "@/config/site";
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
  /** Personal OSS, employer case study, or freelance — for /work filters. */
  workEngagement: WorkEngagement;
  featured: boolean;
  visualType: ProjectVisualType;
  links: { live?: string; github?: string };
  sections: ProjectSection[];
  ogTitle?: string;
  ogDescription?: string;
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

export const projects: PortfolioProject[] = [
  {
    slug: "lucsum",
    title: "Lucsum",
    eyebrow: "PROJECT / PRODUCT",
    summary:
      "Full-stack commerce platform with authenticated customer flows, staff operations, and server-authoritative Razorpay checkout.",
    description:
      "The storefront for Lucsum, my Indian streetwear brand from Saharanpur — a Next.js App Router store with authenticated customer flows, a staff-only Studio, a catalogue imported from Shopify, and Razorpay checkout with webhook verification.",
    status: "Open source · Live store",
    role: "Solo · product engineering",
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
    workEngagement: "personal",
    featured: true,
    visualType: "dashboard",
    links: {
      live: "https://lucsum.vercel.app",
      github: "https://github.com/jayantrohila57/lucsum",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Storefront for my own streetwear brand, built with production-minded architecture: real auth, database-backed catalog and orders, and payment flows where totals stay aligned with provider charges.",
        ],
      },
      {
        id: "context",
        title: "Context",
        body: [
          "Lucsum started on Shopify; this codebase replaces it with a store I own end to end — the catalogue, menus and redirects are imported from the Shopify export.",
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
          "Demonstrates server-authoritative checkout, authenticated customer flows, staff operations, and payment webhook verification in one codebase — open source and live at lucsum.vercel.app.",
        ],
      },
    ],
  },
  {
    slug: "loftlancer",
    title: "Loftlancer",
    eyebrow: "PROJECT / DEVELOPER TOOL",
    ogDescription:
      "Environment and secrets manager across dev, staging, and production.",
    summary:
      "Environment and secrets manager for organizations, projects, and environments.",
    description:
      "Web dashboard and pnpm/Turbo monorepo for storing and organizing environment variables across organizations, projects, and environments. Values are encrypted at rest, with an audit timeline and notifications.",
    status: "Open source · Live app",
    role: "Solo · product engineering",
    year: "2025–2026",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "tRPC",
      "Drizzle ORM",
      "Better Auth",
      "Turborepo",
    ],
    categories: ["product", "systems", "frontend"],
    workEngagement: "personal",
    featured: true,
    visualType: "terminal",
    links: {
      live: "https://loftlancer.com",
      github: "https://github.com/jayantrohila57/loftlancer",
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
          "Next.js, React, TypeScript, tRPC, Drizzle, Better Auth, coss/shadcn UI, pnpm/Turbo monorepo, deployed on Vercel.",
        ],
      },
      {
        id: "outcome",
        title: "Outcome",
        body: [
          "Shows secure secret handling, multi-environment tabs, and a UI aimed at day-to-day configuration workflows — open source with a live app.",
        ],
      },
    ],
  },
  {
    slug: "modelry",
    title: "Modelry",
    eyebrow: "PROJECT / AI",
    summary:
      "Interactive AI lab with streaming chat, threads, attachments, and a credits ledger — Vercel AI SDK with Ollama or Google Gemini.",
    description:
      "An interactive AI laboratory for experimenting with language models: authenticated streaming chat, thread history, file attachments, and credits reserved before each model call and settled after it.",
    status: "Open source · Live app",
    role: "Solo · product engineering",
    year: "2026",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Vercel AI SDK",
      "tRPC",
      "Better Auth",
      "Drizzle ORM",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    categories: ["product", "frontend", "backend"],
    workEngagement: "personal",
    featured: true,
    visualType: "ai",
    links: {
      live: "https://modelry.vercel.app",
      github: "https://github.com/jayantrohila57/modelry",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "Modelry is an AI lab for developers: run prompts against real providers, follow streaming responses and credit costs, and see the parts of an AI product beyond the text box — auth, persistence, uploads, usage limits, and billing.",
        ],
      },
      {
        id: "built",
        title: "What I built",
        body: [
          "An authenticated, thread-aware streaming chat route (/api/ai/chat) on the Vercel AI SDK; create, rename, delete, and revisit threads; file attachments on Vercel Blob with configurable limits; Better Auth with email/password, GitHub OAuth, and Resend email verification.",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "App Router UI → tRPC 11 procedures → Drizzle on Neon Postgres. One AI_PROVIDER switch selects the model backend: Ollama for local models or Google Gemini. Arcjet protects the chat, upload, and tRPC mutation routes.",
        ],
      },
      {
        id: "stack",
        title: "Stack",
        body: [
          "Next.js 16, React 19, TypeScript, Vercel AI SDK, tRPC, TanStack Query, Better Auth, Drizzle ORM, Neon Postgres, Tailwind CSS 4, shadcn/ui, Biome.",
        ],
      },
    ],
  },
  {
    slug: "feature-kit",
    title: "Feature Kits",
    eyebrow: "PROJECT / UI SYSTEMS",
    summary:
      "Composable form, data-table, layout, and uploader kits for React and Next.js, distributed as a shadcn registry.",
    description:
      "Open-source UI kits for product engineering — schema-driven forms (React Hook Form + Zod), TanStack Table data tables, layout shells, and spreadsheet import — installable with the shadcn CLI and documented with live previews.",
    status: "Open source · Live docs",
    role: "Solo · product engineering",
    year: "2026",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "React Hook Form",
      "Zod",
      "TanStack Table",
      "shadcn/ui",
      "Tailwind CSS",
    ],
    categories: ["product", "frontend", "systems"],
    workEngagement: "personal",
    featured: true,
    visualType: "data",
    links: {
      live: "https://feature-kits.vercel.app",
      github: "https://github.com/jayantrohila57/feature-kit",
    },
    sections: [
      {
        id: "overview",
        title: "Overview",
        body: [
          "The form, table, and layout code every admin app rewrites — packaged as kits you install into your own codebase.",
        ],
      },
      {
        id: "built",
        title: "What I built",
        body: [
          "Registry items for form, data-table, dashboard-shell, layout, breadcrumb, auth, theme, and uploader, plus blocks such as data-table CRUD, settings area, and uploader import. Install with: npx shadcn@latest add https://feature-kits.vercel.app/r/form.json",
        ],
      },
      {
        id: "architecture",
        title: "Architecture",
        body: [
          "A pnpm monorepo: kits under feature/*, shared primitives in packages/ui and packages/format, and a Next.js docs app (Fumadocs MDX) in apps/web. A build script generates the shadcn registry JSON served from /r.",
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
      "Next.js dashboard for top artists, tracks, playlists, and recently played, using Spotify sign-in. The demo is in Spotify development mode, so sign-in only works for approved accounts.",
    status: "Open source · Live demo",
    year: "2023–2026",
    stack: ["Next.js", "TypeScript", "React", "Auth.js"],
    categories: ["experiment", "data"],
    workEngagement: "personal",
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
];

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
      "Work GitHub: github.com/jayantaiqmen (client names and deliverables stay off the public portfolio).",
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
    slug: "codethread-black",
    title: "Codethread Black",
    summary:
      "Dark VS Code theme. Install it from the Visual Studio Marketplace.",
    stack: ["VS Code"],
    links: {
      live: "https://marketplace.visualstudio.com/items?itemName=JayantRohila.codethread-black",
      github: "https://github.com/jayantrohila57/codethread-black",
    },
    visualType: "editor",
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
      { name: "Razorpay", projectSlugs: ["lucsum", "modelry"] },
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
