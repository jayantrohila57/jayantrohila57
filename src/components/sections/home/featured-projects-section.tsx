import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/ui/tech-badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Section } from "@/components/layout/section";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import projects from "@/data/projects.json";
import type { Project } from "@/data/types";
import SectionHeader from "@/components/layout/section-header";
import SectionGrid from "@/components/layout/section-grid";
import { Shell } from "@/components/layout/shell";

export function FeaturedProjectsSection() {
  const featuredProjects = (projects as Project[])
    .filter((p) => p.featured)
    .slice(0, 4);

  return (
    <>
      <SectionHeader
        subtitle="Portfolio"
        title="Featured Projects"
        description="A selection of my recent work across various industries and technologies."
      />
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <SectionGrid
              index={index}
              length={featuredProjects?.length}
              key={project.id}
              className="p-4"
            >
              <Card className="group relative overflow-hidden transition-all hover:shadow-lg gap-0">
                <CardHeader className="pb-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge variant="outline">{project.year}</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.role}</CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="mb-4 text-muted-foreground text-sm line-clamp-2">
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
                <CardFooter className="grid pt-4 grid-cols-2 gap-2">
                  <div className="">
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="gap-2 w-auto"
                    >
                      <Link href={`/projects/${project.slug}`}>
                        Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="flex justify-end gap-1">
                    {project.liveUrl && (
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                      >
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
                      <Button
                        asChild
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                      >
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
                </CardFooter>
              </Card>
            </SectionGrid>
          ))}
        </div>
      </Section>
      <Shell>
        <Shell.Container className="bg-muted/30 p-4">
          <div className="flex w-full flex-col">
            <div className="flex flex-row gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
        <Shell.BottomDecoration />
      </Shell>
    </>
  );
}
