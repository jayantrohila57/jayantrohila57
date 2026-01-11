import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LayoutWrapper } from "@/components/layout";
import { Section } from "@/components/layout/section";
import {
  ProjectDetailArchitecture,
  ProjectDetailChallenges,
  ProjectDetailOverview,
  ProjectDetailResults,
  ProjectDetailTech,
} from "@/components/sections/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import projects from "@/data/projects.json";
import type { Project } from "@/data/types";

interface ProjectDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return (projects as Project[]).map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = (projects as Project[]).find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = (projects as Project[]).find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <Section>
        <Link
          href="/projects"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">
              <Badge variant="secondary">{project.category}</Badge>
              <Badge variant="outline">{project.year}</Badge>
              {project.featured && (
                <Badge className="bg-primary/10 text-primary">Featured</Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-2 text-xl text-muted-foreground">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Live
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </Section>

      {/* Detail Sections */}
      <ProjectDetailOverview project={project} />
      <ProjectDetailTech project={project} />
      <ProjectDetailArchitecture project={project} />
      <ProjectDetailChallenges project={project} />
      <ProjectDetailResults project={project} />
    </LayoutWrapper>
  );
}
