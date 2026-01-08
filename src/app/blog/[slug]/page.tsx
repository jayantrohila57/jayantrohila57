import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { LayoutWrapper } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import blog from "@/data/blog.json";
import profile from "@/data/profile.json";
import type { BlogPost } from "@/data/types";

interface BlogDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return (blog as BlogPost[]).map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = (blog as BlogPost[]).find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords || post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = (blog as BlogPost[]).find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <LayoutWrapper>
      <article>
        {/* Header */}
        <Section>
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mx-auto max-w-3xl">
            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={profile.avatar} alt={post.author} />
                  <AvatarFallback>
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-xs">{profile.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} min read</span>
              </div>
            </div>
          </div>
        </Section>

        {/* Content */}
        <Section className="pt-8">
          <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
            <p className="lead text-xl text-muted-foreground">{post.excerpt}</p>
            <div className="mt-8 whitespace-pre-line">{post.content}</div>
          </div>
        </Section>
      </article>
    </LayoutWrapper>
  );
}
