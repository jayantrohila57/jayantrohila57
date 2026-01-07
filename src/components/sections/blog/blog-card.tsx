import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="group flex flex-col transition-all hover:shadow-lg gap-0">
      <CardHeader className="pb-6">
        <div className="mb-2 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {post.featured && (
            <Badge className="bg-primary/10 text-primary text-xs">
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="line-clamp-2 text-xl leading-snug group-hover:text-primary">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-6">
        <p className="line-clamp-3 text-muted-foreground text-sm">
          {post.excerpt}
        </p>
      </CardContent>
      <Separator />
      <CardFooter className="flex items-center justify-between pt-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
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
        <Link
          href={`/blog/${post.slug}`}
          className="flex items-center gap-1 font-medium text-primary hover:underline"
        >
          Read
          <ArrowRight className="h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  );
}
