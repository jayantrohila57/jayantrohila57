export type ArchNode = { id: string; label: string; sub?: string };
export type ArchEdge = { from: string; to: string; label?: string };

export type ArchitectureSpec = {
  title: string;
  sourceNote: string;
  nodes: ArchNode[];
  edges: ArchEdge[];
};

/** Diagrams derived from public README / case-study wording only. */
export const architectureByProject: Record<string, ArchitectureSpec> = {
  "e-commerce": {
    title: "Checkout & payments flow",
    sourceNote: "From e-commerce repo docs (tRPC order procedures, Razorpay webhook).",
    nodes: [
      { id: "ui", label: "Storefront UI", sub: "Next.js App Router" },
      { id: "api", label: "tRPC API", sub: "order.previewCheckoutTotals · order.create" },
      { id: "db", label: "PostgreSQL", sub: "Drizzle ORM · Neon" },
      { id: "auth", label: "Better Auth", sub: "sessions" },
      { id: "pay", label: "Razorpay", sub: "HMAC webhook" },
    ],
    edges: [
      { from: "ui", to: "api" },
      { from: "api", to: "db" },
      { from: "ui", to: "auth" },
      { from: "api", to: "pay", label: "aligned totals" },
      { from: "pay", to: "api", label: "webhook" },
    ],
  },
  "env-manager": {
    title: "Env management stack",
    sourceNote: "From Env Manager README (Next.js, Better Auth, Prisma, Neon).",
    nodes: [
      { id: "dev", label: "Developer", sub: "browser" },
      { id: "app", label: "Env Manager UI", sub: "Next.js 16" },
      { id: "auth", label: "Better Auth", sub: "sessions" },
      { id: "data", label: "Prisma", sub: "Neon PostgreSQL" },
    ],
    edges: [
      { from: "dev", to: "app" },
      { from: "app", to: "auth" },
      { from: "app", to: "data" },
    ],
  },
  taskflow: {
    title: "Modular App Router layout",
    sourceNote: "From Taskflow README (modules/, tRPC, Prisma schema split).",
    nodes: [
      { id: "routes", label: "[locale] routes", sub: "public · protected · panel" },
      { id: "modules", label: "src/modules", sub: "auth · org · task · project" },
      { id: "trpc", label: "tRPC routers", sub: "users · orgs · projects · tasks" },
      { id: "prisma", label: "prisma/schema", sub: "PostgreSQL" },
    ],
    edges: [
      { from: "routes", to: "modules" },
      { from: "modules", to: "trpc" },
      { from: "trpc", to: "prisma" },
    ],
  },
};
