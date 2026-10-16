import type { PortfolioProject } from "@/data/portfolio";

export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type ProjectCaseStudy = {
  atGlance: {
    role: string;
    duration: string;
    team: string;
    stack: string;
  };
  problem: string;
  contribution: string;
  challenges: string[];
  features: string[];
  decisions: string[];
  metrics?: CaseStudyMetric[];
  outcome: string;
  maturity?: string;
};

/** Honest case-study copy keyed by project slug (metrics sourced from public repos). */
export const projectCaseStudies: Record<string, ProjectCaseStudy> = {
  loftlancer: {
    atGlance: {
      role: "Solo builder — monorepo, UI, encryption, auth",
      duration: "2025–2026",
      team: "Solo",
      stack: "Next.js · TypeScript · Turbo monorepo · Better Auth · PostgreSQL",
    },
    problem:
      "Environment variables and secrets scatter across repos, machines, and deploy targets — engineers need a single place to manage values per project and environment without exposing secrets in plain text.",
    contribution:
      "Built the pnpm/Turbo monorepo and web dashboard: encrypted secret storage, per-environment views, audit timeline, notifications, and GitHub OAuth via Better Auth.",
    challenges: [
      "Encryption at rest — AES-256-GCM with a dedicated crypto package so the web app never stores raw secrets in the database.",
      "Monorepo boundaries — shared api, actions, auth, db, crypto, notifications, and env packages consumed by the apps.",
      "Developer UX — tabs for dev / staging / production and masked values in the UI for day-to-day rotation workflows.",
    ],
    features: [
      "Project-scoped variable groups and environment tabs",
      "Encrypted values, audit timeline, and notifications",
      "Better Auth + GitHub OAuth for the management surface",
      "Org roles (Owner, Manager, Member) via a canonical actions layer",
    ],
    decisions: [
      "Prioritized clarity for engineers over generic CRUD — the UI emphasizes per-environment context.",
      "Stacked on Next.js, tRPC, Drizzle, and Vercel for a familiar full-stack shape with a small operational footprint.",
    ],
    metrics: [],
    outcome:
      "Working open-source repository and live app that demonstrate secure configuration management — no claimed production team adoption.",
    maturity:
      "Next steps for a team rollout would be rotation reminders and CI integrations that pull secrets without logging values.",
  },
  lucsum: {
    atGlance: {
      role: "Solo builder — storefront, staff tools, payments",
      duration: "2024–2026",
      team: "Solo",
      stack: "Next.js · tRPC · Drizzle · Better Auth · Razorpay",
    },
    problem:
      "A credible storefront needs authenticated customers, staff tooling, and payments where server totals stay authoritative — not a static product grid.",
    contribution:
      "Implemented full-stack commerce flows with Better Auth, Drizzle on PostgreSQL, tRPC, and Razorpay checkout with webhook verification.",
    challenges: [
      "Checkout trust — server-side preview and create order flows so client cart state cannot override charged amounts.",
      "Webhook security — HMAC verification on Razorpay callbacks before updating order status.",
      "Staff vs customer surfaces — separate Studio routes with role checks documented in the repo.",
    ],
    features: [
      "Customer catalog, cart, and checkout",
      "Staff studio routes for operational work",
      "Server-authoritative checkout totals",
      "Health and readiness endpoints for deploys",
    ],
    decisions: [
      "Kept payment verification on the server with HMAC-checked webhooks instead of trusting client-side amounts.",
      "Structured the repo with production-minded boundaries (auth, migrations, seeds, tests) for my own brand's store.",
    ],
    outcome:
      "Demonstrates server-authoritative checkout, authenticated flows, and staff operations in a single codebase — open source with a live demo.",
  },
  modelry: {
    atGlance: {
      role: "Solo builder — AI chat, credits, auth, data",
      duration: "2026",
      team: "Solo",
      stack:
        "Next.js 16 · React 19 · Vercel AI SDK · tRPC · Better Auth · Drizzle · Neon · Arcjet",
    },
    problem:
      "Most AI demos are a text box over an API key. Modelry builds the rest of an AI product — auth, persistence, uploads, usage limits, and billing — and makes streaming, token usage, and credit cost visible to the person using it.",
    contribution:
      "Built the whole app: an authenticated, thread-aware streaming chat route; provider switching between local Ollama and Google Gemini; thread history; Vercel Blob attachments; Better Auth with email/password and GitHub; and a credits wallet with a ledger.",
    challenges: [
      "Credits during streaming — credits are reserved before each model call and settled after it, so cost is accounted for while the response streams.",
      "Provider switching — one AI_PROVIDER setting in a single module selects Ollama or Google Gemini; unsupported values fail fast.",
      "Abuse protection — Arcjet guards the chat, upload, and tRPC mutation routes.",
    ],
    features: [
      "Streaming AI chat on the Vercel AI SDK",
      "Threads: create, rename, delete, revisit",
      "Credits wallet and ledger with one-time starter credits",
      "File attachments on Vercel Blob",
      "Better Auth: email/password, GitHub OAuth, email verification",
      "Billing scaffolding with Razorpay plans and subscriptions",
    ],
    decisions: [
      "Typed end to end with tRPC 11 and Drizzle on Neon Postgres.",
      "Kept local development free with Ollama as the default provider; Gemini is a configuration switch.",
    ],
    outcome:
      "Live app and open-source repository — no claimed user counts.",
  },
  "feature-kit": {
    atGlance: {
      role: "Solo builder — kits, registry, docs",
      duration: "2026",
      team: "Solo",
      stack:
        "React · Next.js · TypeScript · React Hook Form · Zod · TanStack Table · shadcn registry · Fumadocs",
    },
    problem:
      "Admin apps rebuild the same forms, tables, filters, shells, and import flows. Feature Kits packages them as source you install into your own app instead of an opaque SDK.",
    contribution:
      "Built the kits, the shadcn registry build, and the docs site with live previews.",
    challenges: [
      "Distribution — kits are private workspace packages, so external apps get them through a shadcn registry (feature-kits.vercel.app/r/<kit>.json) that copies source into the project.",
      "Shared tokens — every kit relies on one shared UI stylesheet so themes stay consistent.",
    ],
    features: [
      "FormKit and FieldKit — schema-driven fields with React Hook Form + Zod",
      "Data table — TanStack Table toolbar, filters, pagination, selection, bulk actions",
      "Layout and dashboard shell, breadcrumbs, auth, theme",
      "Uploader — spreadsheet import, validation, template download",
    ],
    decisions: [
      "Ship copyable source through the shadcn CLI rather than publishing npm packages.",
      "Document every kit with Fumadocs MDX and embedded runnable demos.",
    ],
    outcome:
      "Open source with live docs at feature-kits.vercel.app — no claimed adoption numbers.",
  },
  "stats-on-spotify": {
    atGlance: {
      role: "Solo builder",
      duration: "2023–2026",
      team: "Solo",
      stack: "Next.js · TypeScript · React",
    },
    problem:
      "Listening history is more interesting when it becomes explorable analytics — charts, rankings, and summaries instead of raw API payloads.",
    contribution:
      "Built a dashboard-style experience that turns Spotify data into top artists, tracks, and listening views. The hosted demo runs in Spotify development mode, so sign-in is limited to approved accounts.",
    challenges: [
      "OAuth and token handling for Spotify APIs without over-scoping permissions.",
      "Dashboard IA — prioritizing summaries a user actually scans on mobile.",
    ],
    features: [
      "Top artists and tracks summaries",
      "Listening-oriented dashboard layout",
      "Client/server data fetching for Spotify APIs",
      "Deployable Next.js app on Vercel",
    ],
    decisions: [
      "Focused the UI on personal analytics storytelling rather than generic admin tables.",
      "Kept scope as a side project — no claimed user counts or production metrics.",
    ],
    outcome:
      "Shows API integration, visualization-minded UI, and dashboard IA in a public repo and demo.",
  },
};

export function getProjectCaseStudy(
  project: PortfolioProject,
): ProjectCaseStudy | undefined {
  return projectCaseStudies[project.slug];
}
