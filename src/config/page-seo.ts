/** Search-oriented titles and descriptions (absolute titles — no layout template suffix). */

export const homePageTitle =
  "Jayant Rohila — Product Engineer (Frontend) | React & Next.js";

export const homePageDescription =
  "Jayant Rohila is a frontend-first Product Engineer in Noida building SaaS interfaces with React, Next.js, and TypeScript — case studies and open source.";

export const staticPageSeo = {
  work: {
    title: "Work & projects — Jayant Rohila | React, Next.js & TypeScript",
    description:
      "Filterable project index: personal open-source case studies, lab repos, and demos — Loftlancer, Lucsum, Modelry, and more.",
  },
  writing: {
    title: "Writing — Jayant Rohila | Case studies & engineering notes",
    description:
      "Project case studies and how-I-build engineering notes. Blog posts and snippets are not published yet — honest placeholders only.",
  },
  elsewhere: {
    title: "Elsewhere — Jayant Rohila | GitHub, LinkedIn & profiles",
    description:
      "Public profile links for Jayant Rohila — GitHub, LinkedIn, work GitHub, and HackerRank from site config.",
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
    title: "About Jayant Rohila — Product Engineer (Frontend), Noida",
    description:
      "Experience at aiQmen and Binmile, education, and strengths in React, Next.js, TypeScript, and complex product interfaces — Jayant Rohila portfolio.",
  },
  contact: {
    title: "Contact Jayant Rohila — Product Engineer, Noida",
    description:
      "Email, GitHub, and LinkedIn for frontend and product engineering roles. Jayant Rohila — open to opportunities across India (in-office, hybrid, remote).",
  },
  resume: {
    title: "Résumé — Jayant Rohila | Product Engineer (Frontend)",
    description:
      "Download or print Jayant Rohila’s résumé: Product Engineer at aiQmen, former Associate Software Developer at Binmile, Next.js and React portfolio.",
  },
  experiments: {
    title: "Lab projects — Jayant Rohila | UI experiments & side repos",
    description:
      "Stats on Spotify, Modelry, Feature Kits, and other public experiments by Jayant Rohila — secondary to flagship case studies on the homepage.",
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
    title: projectSeoTitle("Lucsum", "E-commerce & Razorpay checkout"),
    description:
      "Full-stack Next.js storefront with Better Auth, Drizzle, tRPC, and server-authoritative Razorpay checkout — open-source commerce case study by Jayant Rohila.",
  },
  "stats-on-spotify": {
    title: projectSeoTitle("Stats on Spotify", "Listening analytics dashboard"),
    description:
      "Stats on Spotify turns listening history into dashboard summaries and charts — a Next.js data UI experiment by Jayant Rohila with a public demo.",
  },
};
