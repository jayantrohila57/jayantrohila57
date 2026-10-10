import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/blog/article-json-ld";
import {
  ContentShell,
  SectionShell,
} from "@/components/layout/shells";
import { generatePageMetadata } from "@/config/metadata";
import { blogContentBySlug } from "@/content/blog/registry";
import { getBlogPost, getBlogPosts, formatBlogDate } from "@/lib/blog";
import Link from "next/link";
import { inlineBodyLinkClass } from "@/components/primitives/section-frame";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.title,
    description: post.summary,
    path: `/writing/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const Content = blogContentBySlug[slug];
  if (!post || !Content) notFound();

  const metaLine = `${formatBlogDate(post.publishedAt)} · ${post.readingTimeMinutes} min read · ${post.tags.join(", ")}`;

  return (
    <>
      <ArticleJsonLd post={post} />
      <SectionShell dividerTop={false} spacing="compact">
        <ContentShell
          eyebrow="Writing"
          title={post.title}
          description={metaLine}
          variant="page"
          headingLevel="h1"
        />
      </SectionShell>
      <SectionShell spacing="compact">
        <Content />
        <p className="mt-10 text-sm text-muted-foreground">
          <Link href="/writing#blog" className={inlineBodyLinkClass}>
            ← All blog posts
          </Link>
        </p>
      </SectionShell>
    </>
  );
}
