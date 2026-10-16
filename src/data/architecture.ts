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
  lucsum: {
    title: "Checkout & payments flow",
    sourceNote:
      "From Lucsum repo docs (tRPC order procedures, Razorpay webhook).",
    nodes: [
      { id: "ui", label: "Lucsum UI", sub: "Next.js App Router" },
      {
        id: "api",
        label: "tRPC API",
        sub: "order.previewCheckoutTotals · order.create",
      },
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
  loftlancer: {
    title: "Environment and secrets stack",
    sourceNote:
      "From Loftlancer README (Next.js apps, tRPC, Better Auth, Drizzle).",
    nodes: [
      { id: "dev", label: "Developer", sub: "browser" },
      { id: "app", label: "Loftlancer Studio", sub: "Next.js" },
      { id: "auth", label: "Better Auth", sub: "sessions" },
      { id: "data", label: "Drizzle", sub: "PostgreSQL" },
    ],
    edges: [
      { from: "dev", to: "app" },
      { from: "app", to: "auth" },
      { from: "app", to: "data" },
    ],
  },
};
