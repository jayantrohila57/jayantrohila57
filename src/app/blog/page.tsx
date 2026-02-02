import type { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout";
import { Section } from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import { BlogCard } from "@/components/sections/blog";
import { getPosts } from "@/sanity/query/queries";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on software development, system design, performance optimization, and technology.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <LayoutWrapper>
      <SectionHeader
        subtitle="Blog"
        title="Articles & Insights"
        description="Thoughts on software development, system design, and technology."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Section>
    </LayoutWrapper>
  );
}
