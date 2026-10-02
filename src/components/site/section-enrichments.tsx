import Link from "next/link";
import { CareerTimeline } from "./career-timeline";
import { ProjectCard } from "./project-card";
import { SectionLabel } from "./section-label";
import { TechnologyBadge } from "./technology-badge";
import { flagshipProjects, projects } from "@/data/projects";
import { technologies, toolboxHighlightIds } from "@/data/technologies";

type SectionEnrichmentProps = {
  slug: string[];
};

export function SectionEnrichment({ slug }: SectionEnrichmentProps) {
  const path = slug.join("/");

  if (path === "career/timeline") {
    return (
      <div className="not-prose mb-10 border border-site-border bg-site-surface p-6 md:p-8">
        <SectionLabel className="mb-6">Visual timeline</SectionLabel>
        <CareerTimeline />
      </div>
    );
  }

  if (path === "work/case-studies") {
    return (
      <div className="not-prose mb-10 grid gap-4 md:grid-cols-3">
        {flagshipProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    );
  }

  if (path === "work/projects") {
    return (
      <div className="not-prose mb-10">
        <SectionLabel className="mb-4">Flagship work</SectionLabel>
        <div className="grid gap-4 lg:grid-cols-2">
          {flagshipProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
        <p className="mt-6 text-sm text-site-muted">
          Full repository table continues below — every link is from the public
          projects index.
        </p>
      </div>
    );
  }

  if (path === "work/skills") {
    const highlighted = toolboxHighlightIds
      .map((id) => technologies.find((t) => t.id === id))
      .filter(Boolean);
    return (
      <div className="not-prose mb-10">
        <SectionLabel className="mb-4">Skills with project evidence</SectionLabel>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {highlighted.map((tech) =>
            tech ? (
              <TechnologyBadge key={tech.id} technology={tech} showEvidence />
            ) : null,
          )}
        </div>
        <p className="mt-6 text-sm text-site-muted">
          Detailed skill groups and repo links are in the sections below.
        </p>
      </div>
    );
  }

  if (path === "about/overview") {
    return (
      <div className="not-prose mb-10 grid gap-4 border border-site-border md:grid-cols-3">
        {projects
          .filter((p) => p.flagship)
          .map((project) => (
            <Link
              key={project.slug}
              href={project.caseStudyHref ?? "/work/projects"}
              className="border border-site-border bg-site-surface p-4 transition-colors hover:border-site-accent/40"
            >
              <p className="font-display text-lg text-site-ink">{project.name}</p>
              <p className="mt-2 text-sm text-site-muted line-clamp-3">
                {project.summary}
              </p>
            </Link>
          ))}
      </div>
    );
  }

  return null;
}
