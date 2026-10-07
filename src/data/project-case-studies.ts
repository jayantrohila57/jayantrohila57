import type { PortfolioProject } from "@/data/portfolio";

export type ProjectCaseStudy = {
  problem: string;
  contribution: string;
  features: string[];
  decisions: string[];
  outcome: string;
};

/** Honest case-study copy keyed by project slug (no invented metrics). */
export const projectCaseStudies: Record<string, ProjectCaseStudy> = {
  taskflow: {
    problem:
      "Team-scale product work needs more than a todo demo — organizations, roles, and shared project context have to stay coherent as features grow.",
    contribution:
      "Designed and built a multi-tenant workspace with modular App Router areas for auth, organizations, projects, tasks, and users, plus internationalized routing.",
    features: [
      "Organization hierarchy with role-based access",
      "Project and task workflows with typed tRPC APIs",
      "Locale-aware App Router segments and panel routes",
      "TanStack Query + Prisma data layer",
    ],
    decisions: [
      "Split Prisma schema by domain under prisma/schema/ to keep modules isolated as the surface area grew.",
      "Used tRPC for end-to-end types between UI and server procedures instead of ad hoc REST handlers.",
      "Treated the app as a SaaS-shaped sandbox — closer to real product constraints than a single-user CRUD tutorial.",
    ],
    outcome:
      "Open-source codebase with a hosted demo that shows multi-tenancy, RBAC, and modular frontend architecture in one place.",
  },
  "env-manager": {
    problem:
      "Environment variables and secrets scatter across repos, local machines, and deploy targets — teams need a clearer place to manage them.",
    contribution:
      "Built a developer-first configuration workspace with authenticated access, multi-environment views, and a UI focused on day-to-day secret handling.",
    features: [
      "Environment tabs (dev / staging / production)",
      "Masked secret values in the UI",
      "Project-scoped variable groups",
      "Better Auth–protected management surface",
    ],
    decisions: [
      "Prioritized clarity for engineers over generic CRUD — the UI emphasizes per-environment context.",
      "Stacked on Next.js, Prisma, and Neon for a familiar full-stack shape with a small operational footprint on Vercel.",
    ],
    outcome:
      "Working open-source repository and live demo that demonstrate secure configuration management patterns without claiming production team adoption.",
  },
  libyui: {
    problem:
      "Shipping multiple React apps meant re-solving the same buttons, forms, dialogs, and tables — consistency and speed both suffered.",
    contribution:
      "Published a TypeScript + Tailwind component library with reusable primitives and a live documentation-style demo site.",
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
    outcome:
      "Reusable library used as evidence of UI architecture skill — live demo plus GitHub source for reviewers.",
  },
  "e-commerce": {
    problem:
      "A credible storefront needs authenticated customers, staff tooling, and payments where server totals stay authoritative — not a static product grid.",
    contribution:
      "Implemented full-stack commerce flows with Better Auth, Drizzle on PostgreSQL, tRPC, and Razorpay checkout with webhook verification.",
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
    outcome:
      "Demonstrates server-authoritative checkout, authenticated flows, and staff operations in a single codebase — open source with a live demo.",
  },
  "stats-on-spotify": {
    problem:
      "Listening history is more interesting when it becomes explorable analytics — charts, rankings, and summaries instead of raw API payloads.",
    contribution:
      "Built a dashboard-style experience that turns Spotify data into top artists, tracks, and listening views with a hosted demo.",
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
    problem:
      "Blogging and content sites need editor UX, publishing workflow, and structured content — not just a markdown file in git.",
    contribution:
      "Built a self-hosted CMS-style app with rich-text editing patterns, content modeling, and authenticated publishing flows.",
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
    problem:
      "Image tooling in the browser has to balance canvas performance, tool discoverability, and export — worth exploring as a focused UI experiment.",
    contribution:
      "Shipped a browser-based image editor demo with tool panels, canvas preview, and export-oriented flows on the web platform.",
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
    problem:
      "Programming patterns are easier to internalize when you can run code, see tests, and iterate — not only read static examples.",
    contribution:
      "Built an interactive pattern practice surface with runnable snippets and test feedback in the browser.",
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
