import {
  getWritingPost,
  getWritingPosts,
  type WritingPostMeta,
} from "@/lib/content/writing";

export type BlogPostMeta = WritingPostMeta;

export function getBlogPosts(): BlogPostMeta[] {
  return [...getWritingPosts()].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return getWritingPosts().find((p) => p.slug === slug);
}

export { getWritingPost };

export function formatBlogDate(iso: string): string {
  const [year, month] = iso.split("-");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const m = Number.parseInt(month, 10);
  return `${monthNames[m - 1] ?? month} ${year}`;
}
