export type BlogPostMeta = {
  slug: string;
  title: string;
  /** ISO date (YYYY-MM-DD) */
  publishedAt: string;
  summary: string;
  tags: string[];
  readingTimeMinutes: number;
};

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "smooth-scroll-nested-scroll-areas",
    title: "Smooth scroll without breaking nested scroll areas",
    publishedAt: "2026-10-08",
    summary:
      "Lenis smooth scrolling is great until a menu or code block needs its own wheel track. Here is the data-lenis-prevent convention I use on this site.",
    tags: ["Lenis", "UX", "Next.js"],
    readingTimeMinutes: 7,
  },
  {
    slug: "layout-shells-stop-padding-page-by-page",
    title: "Layout shells: stop fixing padding page by page",
    publishedAt: "2026-10-05",
    summary:
      "MainShell, SectionShell, ContentShell, and GridShell replaced one-off padding on jayantrohila.com — plus a Playwright audit that enforces a 16px minimum inset.",
    tags: ["CSS", "Design systems", "Next.js"],
    readingTimeMinutes: 8,
  },
  {
    slug: "caching-dashboard-next-cache-components",
    title: "Caching a dashboard overview with Next.js Cache Components",
    publishedAt: "2026-10-02",
    summary:
      "A pattern guide for mixing static shell, cached KPIs, and dynamic feeds with use cache, cacheLife, cacheTag, and updateTag — without reading cookies inside cached scopes.",
    tags: ["Next.js", "Caching", "Architecture"],
    readingTimeMinutes: 9,
  },
  {
    slug: "grayscale-project-images-accessibly",
    title: "Grayscale-to-color project images, accessibly",
    publishedAt: "2026-10-10",
    summary:
      "How the content-image utility on this portfolio restores color on hover and focus, skips the effect on touch-first devices, and respects reduced motion.",
    tags: ["CSS", "Accessibility", "Portfolio"],
    readingTimeMinutes: 6,
  },
];
