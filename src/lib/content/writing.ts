import type { StructuredData } from "fumadocs-core/mdx-plugins/remark-structure";
import {
  getWritingPage,
  getWritingPages,
  slugFromDoc,
} from "@/lib/content/source";

export type WritingPostMeta = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  tags: string[];
  readingTimeMinutes: number;
};

function textFromStructuredData(data: StructuredData): string {
  const fromContents = data.contents.map((block) => block.content).join(" ");
  const fromHeadings = data.headings.map((h) => h.content).join(" ");
  return `${fromContents} ${fromHeadings}`;
}

function estimateReadingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function getWritingPosts(): WritingPostMeta[] {
  return getWritingPages().map((doc) => {
    const slug = slugFromDoc(doc);
    const bodyText = textFromStructuredData(doc.structuredData);
    return {
      slug,
      title: doc.title,
      publishedAt: doc.date,
      summary: doc.summary,
      tags: doc.tags ?? [],
      readingTimeMinutes: estimateReadingMinutes(bodyText),
    };
  });
}

export function getWritingPost(slug: string) {
  const page = getWritingPage(slug);
  if (!page) return undefined;
  const meta = getWritingPosts().find((p) => p.slug === slug);
  return meta ? { doc: page, meta } : undefined;
}
