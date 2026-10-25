/** Search-oriented titles and descriptions (absolute titles — no layout template suffix). */

export const homePageTitle =
  "Jayant Rohila — Product Engineer | React, Next.js & AI Features";

export const homePageDescription =
  "Jayant Rohila is a Product Engineer in Noida building SaaS interfaces and AI features with React, Next.js, and TypeScript. Case studies and open source.";

export const staticPageSeo = {
  work: {
    title: "Work & projects — Jayant Rohila | React, Next.js & TypeScript",
    description:
      "Open-source case studies and side projects — Loftlancer, Feature Kits, Modelry, Lucsum, and more.",
  },
  writing: {
    title: "Writing — Jayant Rohila | Case studies & engineering notes",
    description:
      "Engineering notes on Next.js caching, layout systems, smooth scrolling and accessible UI, plus case studies from Loftlancer, Feature Kits, Modelry and Lucsum.",
  },
  elsewhere: {
    title: "Elsewhere — Jayant Rohila | GitHub, LinkedIn & profiles",
    description:
      "Public profile links for Jayant Rohila — GitHub, LinkedIn, work GitHub, and HackerRank.",
  },
  interests: {
    title: "Interests — Jayant Rohila",
    description:
      "Personal interests (music, anime, travel, tech) — secondary section, coming later on jayantrohila.com.",
  },
  engineering: {
    title: "Engineering approach — Jayant Rohila | Product UI & typed APIs",
    description:
      "How Jayant Rohila builds product UI, type-safe tRPC/REST layers, reusable systems, and delivery workflows across open-source portfolio projects.",
  },
  about: {
    title: "About Jayant Rohila — Product Engineer, Noida",
    description:
      "Experience at aiQmen and Binmile, education, and strengths in React, Next.js, TypeScript, and complex product interfaces — Jayant Rohila portfolio.",
  },
  contact: {
    title: "Contact Jayant Rohila — Product Engineer, Noida",
    description:
      "Email, GitHub, and LinkedIn for frontend, full-stack and AI product engineering roles. Jayant Rohila — open to opportunities across India (in-office, hybrid, remote).",
  },
  resume: {
    title: "Résumé — Jayant Rohila | Product Engineer",
    description:
      "Download or print Jayant Rohila’s résumé: Product Engineer at aiQmen, former Associate Software Developer at Binmile, Next.js and React portfolio.",
  },
  experiments: {
    title: "More projects — Jayant Rohila | Side projects & experiments",
    description:
      "Stats On Spotify and other public side projects by Jayant Rohila.",
  },
} as const;

export function projectSeoTitle(
  projectTitle: string,
  subtitle: string,
): string {
  return `${projectTitle} — ${subtitle} | Jayant Rohila`;
}

export const projectPageSeo: Record<
  string,
  { title: string; description: string }
> = {
  loftlancer: {
    title: projectSeoTitle("Loftlancer", "Environment and secrets manager"),
    description:
      "Loftlancer is an environment and secrets manager for organizations, projects, and environments (dev, staging, production) — built by Jayant Rohila with Next.js, tRPC, Drizzle, and Better Auth.",
  },
  lucsum: {
    title: projectSeoTitle(
      "Lucsum",
      "Streetwear storefront & Razorpay checkout",
    ),
    description:
      "Full-stack Next.js storefront with Better Auth, Drizzle, tRPC, and server-authoritative Razorpay checkout — open-source commerce case study by Jayant Rohila.",
  },
  modelry: {
    title: projectSeoTitle("Modelry", "AI lab with streaming chat & credits"),
    description:
      "Modelry is an interactive AI lab by Jayant Rohila — streaming chat on the Vercel AI SDK with Ollama or Gemini, threads, attachments, and a credits ledger, built with Next.js, tRPC, Drizzle, and Better Auth.",
  },
  "feature-kit": {
    title: projectSeoTitle("Feature Kits", "React & Next.js UI kits"),
    description:
      "Feature Kits — form, data-table, layout, and uploader kits for React and Next.js, distributed as a shadcn registry with Fumadocs docs. Open source by Jayant Rohila.",
  },
  "stats-on-spotify": {
    title: projectSeoTitle("Stats on Spotify", "Listening analytics dashboard"),
    description:
      "Stats On Spotify turns listening history into dashboard summaries and charts — a Next.js data UI side project by Jayant Rohila (demo sign-in is limited to approved Spotify accounts).",
  },
};
