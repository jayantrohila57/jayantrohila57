import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/blog/article-json-ld";
import { ContentShell, SectionShell } from "@/components/layout/shells";
import { inlineBodyLinkClass } from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import {
  formatBlogDate,
  getBlogPost,
  getBlogPosts,
  getWritingPost,
} from "@/lib/blog";
import { getMDXComponents } from "@/mdx-components";

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
    ogType: "article",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const loaded = getWritingPost(slug);
  if (!post || !loaded) notFound();

  const MDX = loaded.doc.body;
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
        <MDX components={getMDXComponents()} />
        <p className="mt-10 text-sm text-muted-foreground">
          <Link href="/writing#blog" className={inlineBodyLinkClass}>
            ← All blog posts
          </Link>
        </p>
      </SectionShell>
    </>
  );
}
