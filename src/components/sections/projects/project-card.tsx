import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/ui/tech-badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden transition-all hover:shadow-lg gap-0">
      <CardHeader className="pb-4">
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge variant="secondary">{project.category}</Badge>
          <Badge variant="outline">{project.year}</Badge>
        </div>
        <CardTitle className="text-xl group-hover:text-primary">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </CardTitle>
        <CardDescription>{project.role}</CardDescription>
        <CardAction>
          <div className="flex gap-2">
            {project.liveUrl && (
              <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">Live</span>
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">Code</span>
                </a>
              </Button>
            )}
          </div>
        </CardAction>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="mb-4 line-clamp-3 text-muted-foreground text-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.slice(0, 5).map((tech) => (
            <TechBadge key={tech} tech={tech} variant="outline" />
          ))}
          {project.tech.length > 5 && (
            <Badge variant="outline" className="text-xs">
              +{project.tech.length - 5}
            </Badge>
          )}
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="pt-4">
        <Button
          asChild
          variant="ghost"
          size="sm"
          className="gap-2 w-full justify-between"
        >
          <Link href={`/projects/${project.slug}`}>
            View Details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
