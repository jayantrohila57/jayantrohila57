import { blogPosts, type BlogPostMeta } from "@/data/blog-posts";

export function getBlogPosts(): BlogPostMeta[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getBlogPost(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

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
