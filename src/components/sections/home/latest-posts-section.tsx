import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Section, SectionHeader } from "@/components/layout/section";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import blog from "@/data/blog.json";
import type { BlogPost } from "@/data/types";

export function LatestPostsSection() {
  const latestPosts = (blog as BlogPost[]).slice(0, 3);

  return (
    <Section>
      <SectionHeader
        subtitle="Blog"
        title="Latest Articles"
        description="Thoughts on software development, system design, and technology."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {latestPosts.map((post) => (
          <Card
            key={post.id}
            className="group flex flex-col transition-all hover:shadow-lg gap-0"
          >
            <CardHeader className="pb-6">
              <div className="mb-2 flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="line-clamp-2 text-lg leading-snug group-hover:text-primary">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-6">
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {post.excerpt}
              </p>
            </CardContent>
            <Separator />
            <CardFooter className="flex items-center justify-between pt-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{post.readTime} min read</span>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/blog">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
