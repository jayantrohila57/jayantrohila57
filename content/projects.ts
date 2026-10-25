/** Project slugs for cross-collection frontmatter validation. */
export const PROJECT_SLUGS = [
  "feature-kit",
  "loftlancer",
  "lucsum",
  "modelry",
  "stats-on-spotify",
  "jayantrohila57",
] as const;

export type ProjectSlug = (typeof PROJECT_SLUGS)[number];

export const projectSlugSet = new Set<string>(PROJECT_SLUGS);
