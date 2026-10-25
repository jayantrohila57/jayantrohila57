/** Fixed tag slugs — referenced by writing & updates frontmatter validation. */
export const TAG_SLUGS = [
  "accessibility",
  "ai",
  "architecture",
  "caching",
  "career",
  "css",
  "design-systems",
  "lenis",
  "nextjs",
  "portfolio",
  "product",
  "typescript",
  "ux",
] as const;

export type TagSlug = (typeof TAG_SLUGS)[number];

export const tagSlugSet = new Set<string>(TAG_SLUGS);
