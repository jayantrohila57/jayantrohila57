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
      "Structured the repo as a personal project with production-minded boundaries (auth, migrations, seeds, tests).",
    ],
    metrics: [
      { label: "Vitest files", value: "4 test modules in the repo" },
      {
        label: "Automated cases",
        value: "9 it()/test() blocks (source count)",
      },
    ],
    outcome:
      "Demonstrates server-authoritative checkout, authenticated flows, and staff operations in a single codebase — open source with a live demo.",
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
      "Built a dashboard-style experience that turns Spotify data into top artists, tracks, and listening views with a hosted demo.",
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
