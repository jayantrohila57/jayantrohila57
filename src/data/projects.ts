export type ProjectCategory =
  | "flagship"
  | "product"
  | "library"
  | "experiment"
  | "meta";

export type ProjectPreview =
  | { type: "terminal"; lines: string[] }
  | { type: "code"; language: string; snippet: string }
  | { type: "architecture"; items: string[] };

export type Project = {
  slug: string;
  name: string;
  summary: string;
  category: ProjectCategory;
  repo: string;
  demo?: string;
  caseStudyHref?: string;
  companyIds: string[];
  technologyIds: string[];
  flagship?: boolean;
  preview: ProjectPreview;
};

export const projects: Project[] = [
  {
    slug: "lucsum",
    name: "Lucsum",
    summary:
      "Production-shaped storefront — Better Auth, Drizzle, tRPC, Razorpay checkout with server-authoritative totals.",
    category: "flagship",
    flagship: true,
    repo: "https://github.com/jayantrohila57/lucsum",
    demo: "https://lucsum.vercel.app",
    caseStudyHref: "/work/lucsum",
    companyIds: [],
    technologyIds: [
      "typescript",
      "nextjs",
      "react",
      "trpc",
      "drizzle",
      "postgresql",
      "better-auth",
      "razorpay",
      "tailwind",
      "vercel",
    ],
    preview: {
      type: "code",
      language: "typescript",
      snippet: `// Server-authoritative checkout (from repo docs)
await trpc.order.previewCheckoutTotals({ cartId });
await trpc.order.create({ /* aligned with Razorpay */ });`,
    },
  },
  {
    slug: "loftlancer",
    name: "Loftlancer",
    summary:
      "Environment and secrets manager across organizations, projects, and environments.",
    category: "flagship",
    flagship: true,
    repo: "https://github.com/jayantrohila57/loftlancer",
    demo: "https://loftlancer.com",
    caseStudyHref: "/work/loftlancer",
    companyIds: [],
    technologyIds: [
      "typescript",
      "nextjs",
      "react",
      "trpc",
      "drizzle",
      "better-auth",
      "vercel",
    ],
    preview: {
      type: "terminal",
      lines: [
        "$ pnpm install && cp .env.example .env",
        "$ pnpm dev",
        "→ Drizzle · Better Auth session",
        "→ Manage env vars per org / project / environment",
      ],
    },
  },
  {
    slug: "jayantrohila57",
    name: "This site",
    summary: "jayantrohila.com — Next.js portfolio and MDX content.",
    category: "meta",
    repo: "https://github.com/jayantrohila57/jayantrohila57",
    demo: "https://jayantrohila.com",
    companyIds: [],
    technologyIds: ["typescript", "nextjs", "react", "tailwind"],
    preview: {
      type: "terminal",
      lines: [
        "$ pnpm build",
        "→ MDX content + App Router",
        "→ jayantrohila.com",
      ],
    },
  },
];

export const flagshipProjects = projects.filter((p) => p.flagship);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByTechnology(techId: string): Project[] {
  return projects.filter((p) => p.technologyIds.includes(techId));
}
