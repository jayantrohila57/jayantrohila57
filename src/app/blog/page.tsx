import type { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout";
import { Section, SectionHeader } from "@/components/layout/section";
import { BlogCard } from "@/components/sections/blog";
import blog from "@/data/blog.json";
import type { BlogPost } from "@/data/types";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on software development, system design, performance optimization, and technology.",
};

export default function BlogPage() {
  const posts = blog as BlogPost[];

  return (
    <LayoutWrapper>
      <Section>
        <SectionHeader
          subtitle="Blog"
          title="Articles & Insights"
          description="Thoughts on software development, system design, and technology."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </Section>
    </LayoutWrapper>
  );
}
