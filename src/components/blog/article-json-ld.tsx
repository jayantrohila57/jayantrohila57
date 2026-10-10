import type { BlogPostMeta } from "@/data/blog-posts";
import { getAbsoluteUrl, siteConfig } from "@/config/site";

export function ArticleJsonLd({ post }: { post: BlogPostMeta }) {
  const url = getAbsoluteUrl(`/writing/${post.slug}`);
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
      url: siteConfig.siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
