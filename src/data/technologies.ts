export type Technology = {
  id: string;
  label: string;
  category:
    | "language"
    | "frontend"
    | "backend"
    | "data"
    | "platform"
    | "quality";
  projectSlugs: string[];
};

export const technologies: Technology[] = [
  {
    id: "typescript",
    label: "TypeScript",
    category: "language",
    projectSlugs: ["lucsum", "loftlancer"],
  },
  {
    id: "nextjs",
    label: "Next.js",
    category: "frontend",
    projectSlugs: ["lucsum", "loftlancer", "jayantrohila57"],
  },
  {
    id: "react",
    label: "React",
    category: "frontend",
    projectSlugs: ["lucsum", "loftlancer"],
  },
  {
    id: "trpc",
    label: "tRPC",
    category: "backend",
    projectSlugs: ["lucsum", "modelry"],
  },
  {
    id: "postgresql",
    label: "PostgreSQL / Neon",
    category: "data",
    projectSlugs: ["lucsum", "loftlancer"],
  },
  {
    id: "better-auth",
    label: "Better Auth",
    category: "platform",
    projectSlugs: ["lucsum", "loftlancer"],
  },
  {
    id: "razorpay",
    label: "Razorpay",
    category: "platform",
    projectSlugs: ["lucsum"],
  },
  {
    id: "drizzle",
    label: "Drizzle ORM",
    category: "data",
    projectSlugs: ["lucsum", "loftlancer"],
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    category: "frontend",
    projectSlugs: ["lucsum", "loftlancer"],
  },
  {
    id: "vercel",
    label: "Vercel",
    category: "platform",
    projectSlugs: ["lucsum", "loftlancer"],
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
