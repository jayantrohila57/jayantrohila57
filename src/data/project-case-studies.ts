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
  taskflow: {
    atGlance: {
      role: "Solo builder — architecture, UI, API, data model",
      duration: "2024–2026",
      team: "Solo",
      stack: "Next.js · TypeScript · tRPC · Prisma · PostgreSQL · next-intl",
    },
    problem:
      "Team-scale product work needs more than a todo demo — organizations, roles, and shared project context have to stay coherent as features grow, without data leaking across tenants.",
    contribution:
      "Designed and implemented the modular App Router application: auth and sessions, organization hierarchy, RBAC, project and task workflows, locale-aware routing, and reusable UI patterns across domain modules.",
    challenges: [
      "Multi-tenancy — organization-scoped queries and UI states so one workspace cannot read another’s data.",
      "RBAC — permissions modeled in Prisma and enforced through tRPC procedures before data hits the client.",
      "Data fetching — tRPC + TanStack Query for typed contracts and cache-friendly panels across many routes.",
      "UI repetition — domain modules (org, project, task, team) share table/form patterns instead of one-off screens.",
    ],
    features: [
      "Organization hierarchy with role-based access",
      "Project and task workflows with typed tRPC APIs",
      "Five locales (en-US, hi-IN, ja-JP, sk-IN, ur-PK) via next-intl",
      "TanStack Query + split Prisma schema by domain",
    ],
    decisions: [
      "Split Prisma schema by domain under prisma/schema/ as models grew past a single file.",
      "Used tRPC for end-to-end types between UI and server procedures instead of ad hoc REST handlers.",
      "Treated the app as a SaaS-shaped sandbox — closer to real product constraints than a single-user CRUD tutorial.",
    ],
    metrics: [
      { label: "Domain modules", value: "12 under src/modules" },
      { label: "Prisma models", value: "31 across split schema files" },
      { label: "tRPC routers", value: "21 createTRPCRouter definitions" },
      { label: "App Router pages", value: "73 page.tsx routes" },
      { label: "Locales", value: "5 (next-intl config)" },
    ],
    outcome:
      "Open-source repository with a hosted demo that shows multi-tenancy, RBAC, i18n, and modular frontend architecture in one codebase.",
    maturity:
      "If this were heading to production, I’d add audit logging for permission changes, stricter org isolation tests, and operational metrics on hot tRPC paths.",
  },
  "env-manager": {
    atGlance: {
      role: "Solo builder — monorepo, UI, encryption, auth",
      duration: "2025–2026",
      team: "Solo",
      stack: "Next.js · TypeScript · Turbo monorepo · Better Auth · PostgreSQL",
    },
    problem:
      "Environment variables and secrets scatter across repos, machines, and deploy targets — engineers need a single place to manage values per project and environment without exposing secrets in plain text.",
    contribution:
      "Built the pnpm/Turbo monorepo and web dashboard: encrypted secret storage, per-environment views, audit log, import/export of .env files, and GitHub OAuth via Better Auth.",
    challenges: [
      "Encryption at rest — AES-256-GCM with a dedicated crypto package so the web app never stores raw secrets in the database.",
      "Monorepo boundaries — shared api, auth, db, crypto, and env packages consumed by apps/web.",
      "Developer UX — tabs for dev / staging / production and masked values in the UI for day-to-day rotation workflows.",
    ],
    features: [
      "Project-scoped variable groups and environment tabs",
      "Encrypted values, audit log, and .env import/export",
      "Better Auth + GitHub OAuth for the management surface",
      "Six shared workspace packages (api, auth, db, crypto, env, config)",
    ],
    decisions: [
      "Prioritized clarity for engineers over generic CRUD — the UI emphasizes per-environment context.",
      "Stacked on Next.js, Prisma/Neon, and Vercel for a familiar full-stack shape with a small operational footprint.",
    ],
    metrics: [
      { label: "Monorepo packages", value: "6 shared workspace packages" },
      { label: "Web routes", value: "6 App Router pages in apps/web" },
      { label: "DB tables (Drizzle)", value: "11 pgTable definitions" },
    ],
    outcome:
      "Working open-source repository and live demo that demonstrate secure configuration management — no claimed production team adoption.",
    maturity:
      "Next steps for a team rollout would be RBAC on projects, rotation reminders, and CI integrations that pull secrets without logging values.",
  },
  libyui: {
    atGlance: {
      role: "Author — components, docs site, examples",
      duration: "2024–2025",
      team: "Solo",
      stack: "React · TypeScript · Tailwind CSS · Next.js docs app",
    },
    problem:
      "Shipping multiple React apps meant re-solving the same buttons, forms, dialogs, and tables — consistency and speed both suffered.",
    contribution:
      "Published a TypeScript + Tailwind component library with reusable primitives and a live documentation-style demo site.",
    challenges: [
      "Composable APIs — small primitives (dialog, sheet, table) that compose without a heavy runtime design-system framework.",
      "Documentation — live examples on the hosted demo so consumers can see states, not just read props.",
      "Theming — Tailwind-based styling so apps can theme without fighting CSS-in-JS.",
    ],
    features: [
      "Composable UI primitives (inputs, dialogs, tables, tabs, cards)",
      "Shared tokens and spacing conventions",
      "Documented examples on the hosted demo",
      "Open-source package consumable from other repos",
    ],
    decisions: [
      "Kept APIs small and composable rather than shipping a heavy design-system framework.",
      "Used Tailwind for styling so consumers can theme without fighting a runtime CSS-in-JS layer.",
    ],
    metrics: [
      {
        label: "UI primitives",
        value: "18 components under src/components/ui",
      },
      { label: "Component TSX files", value: "33 under src/components" },
    ],
    outcome:
      "Reusable library used as evidence of UI architecture skill — live demo plus GitHub source for reviewers.",
    maturity:
      "I’d add visual regression tests and a published npm package with semver changelog before calling it a org-wide design system.",
  },
  "e-commerce": {
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
      duration: "2023–2025",
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
  "inkly-cms": {
    atGlance: {
      role: "Solo builder",
      duration: "2024–2025",
      team: "Solo",
      stack: "Next.js · TypeScript · Prisma · PostgreSQL",
    },
    problem:
      "Blogging and content sites need editor UX, publishing workflow, and structured content — not just a markdown file in git.",
    contribution:
      "Built a self-hosted CMS-style app with rich-text editing patterns, content modeling, and authenticated publishing flows.",
    challenges: [
      "Editor reliability — TipTap-oriented patterns for long-form content without losing draft state.",
      "Publishing workflow — drafts, categories, and authors without over-building a full enterprise CMS.",
    ],
    features: [
      "Rich-text editing (TipTap-oriented patterns)",
      "Content list and draft/publish workflow",
      "Authors, categories, and media-oriented content structure",
      "React Query–driven client data layer",
    ],
    decisions: [
      "Chose a headless CMS shape so the same content layer could power multiple frontends later.",
      "Kept the stack familiar: Next.js, TypeScript, Prisma, PostgreSQL.",
    ],
    outcome:
      "Secondary open-source project that demonstrates CMS and editor UX beyond storefront or dashboard clones.",
  },
  "image-editor": {
    atGlance: {
      role: "Solo builder",
      duration: "2024–2025",
      team: "Solo",
      stack: "Next.js · React · TypeScript",
    },
    problem:
      "Image tooling in the browser has to balance canvas performance, tool discoverability, and export — worth exploring as a focused UI experiment.",
    contribution:
      "Shipped a browser-based image editor demo with tool panels, canvas preview, and export-oriented flows on the web platform.",
    challenges: [
      "Canvas performance on mid-tier mobile devices.",
      "Tool discoverability without cluttering the editing surface.",
    ],
    features: [
      "Canvas-centered editing surface",
      "Tool rail for crop, filter, and export actions",
      "Hosted v1 demo on Vercel",
      "Next.js + React UI shell",
    ],
    decisions: [
      "Scoped the project as an interaction and performance experiment rather than a full Photoshop replacement.",
      "Prioritized a clear editor layout over backend complexity.",
    ],
    outcome:
      "Public demo that shows client-side media UX exploration without overstating production usage.",
  },
  patternlab: {
    atGlance: {
      role: "Solo builder",
      duration: "2024–2025",
      team: "Solo",
      stack: "Next.js · TypeScript · Tailwind CSS",
    },
    problem:
      "Programming patterns are easier to internalize when you can run code, see tests, and iterate — not only read static examples.",
    contribution:
      "Built an interactive pattern practice surface with runnable snippets and test feedback in the browser.",
    challenges: [
      "Safe in-browser execution boundaries for learner-submitted code.",
      "Clear feedback loop between failing tests and the editable solution area.",
    ],
    features: [
      "Pattern challenges with editable solution area",
      "Test runner feedback in the UI",
      "Hosted demo for quick trials",
      "Open-source repository for reviewers",
    ],
    decisions: [
      "Aligned portfolio copy with the repo’s learning-platform identity instead of calling it a generic UI kit.",
      "Kept scope small — exercises and runner UX over a full course platform.",
    ],
    outcome:
      "Experiment that highlights problem-solving and developer tooling UX alongside larger product repos.",
  },
};

export function getProjectCaseStudy(
  project: PortfolioProject,
): ProjectCaseStudy | undefined {
  return projectCaseStudies[project.slug];
}
