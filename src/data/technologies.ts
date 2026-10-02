export type Technology = {
  id: string;
  label: string;
  category: "language" | "frontend" | "backend" | "data" | "platform" | "quality";
  projectSlugs: string[];
};

export const technologies: Technology[] = [
  {
    id: "typescript",
    label: "TypeScript",
    category: "language",
    projectSlugs: ["e-commerce", "env-manager", "taskflow", "inkly-cms"],
  },
  {
    id: "nextjs",
    label: "Next.js",
    category: "frontend",
    projectSlugs: ["e-commerce", "env-manager", "taskflow", "inkly-cms", "jayantrohila57"],
  },
  {
    id: "react",
    label: "React",
    category: "frontend",
    projectSlugs: ["e-commerce", "env-manager", "taskflow", "libyui"],
  },
  {
    id: "trpc",
    label: "tRPC",
    category: "backend",
    projectSlugs: ["e-commerce", "taskflow", "ai-chat"],
  },
  {
    id: "postgresql",
    label: "PostgreSQL / Neon",
    category: "data",
    projectSlugs: ["e-commerce", "env-manager", "taskflow"],
  },
  {
    id: "better-auth",
    label: "Better Auth",
    category: "platform",
    projectSlugs: ["e-commerce", "env-manager"],
  },
  {
    id: "razorpay",
    label: "Razorpay",
    category: "platform",
    projectSlugs: ["e-commerce"],
  },
  {
    id: "prisma",
    label: "Prisma",
    category: "data",
    projectSlugs: ["env-manager", "taskflow"],
  },
  {
    id: "drizzle",
    label: "Drizzle ORM",
    category: "data",
    projectSlugs: ["e-commerce"],
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    category: "frontend",
    projectSlugs: ["e-commerce", "env-manager", "taskflow", "libyui"],
  },
  {
    id: "vercel",
    label: "Vercel",
    category: "platform",
    projectSlugs: ["e-commerce", "env-manager", "taskflow"],
  },
];

export const toolboxHighlightIds = [
  "typescript",
  "nextjs",
  "react",
  "trpc",
  "postgresql",
  "better-auth",
  "tailwind",
  "vercel",
];
