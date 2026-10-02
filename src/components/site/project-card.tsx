import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { technologies } from "@/data/technologies";
import { ProjectPreviewPanel } from "./project-preview";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
  className?: string;
};

export function ProjectCard({
  project,
  featured = false,
  className,
}: ProjectCardProps) {
  const techs = project.technologyIds
    .slice(0, 4)
    .map((id) => technologies.find((t) => t.id === id))
    .filter(Boolean);

  return (
    <article
      className={cn(
        "group flex h-full flex-col border border-site-border bg-site-paper transition-colors hover:border-site-accent/50",
        featured && "md:grid md:grid-cols-[1fr,minmax(0,1.1fr)] md:gap-0",
        className,
      )}
    >
      <ProjectPreviewPanel
        preview={project.preview}
        className={featured ? "md:min-h-full md:border-r md:border-b-0" : "border-b"}
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-medium tracking-tight text-site-ink">
              {project.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-site-muted text-pretty">
              {project.summary}
            </p>
          </div>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-4">
          {techs.map((tech) =>
            tech ? (
              <span
                key={tech.id}
                className="border border-site-border px-2 py-0.5 font-mono text-[0.65rem] text-site-muted"
              >
                {tech.label}
              </span>
            ) : null,
          )}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-site-border pt-4 text-sm">
          {project.caseStudyHref ? (
            <Link
              href={project.caseStudyHref}
              className="inline-flex items-center gap-1 font-medium text-site-accent hover:underline"
            >
              Case study
              <ArrowUpRight className="size-3.5" aria-hidden />
            </Link>
          ) : null}
          <a
            href={project.repo}
            rel="noreferrer noopener"
            target="_blank"
            className="inline-flex items-center gap-1 text-site-muted hover:text-site-ink"
          >
            <Code2 className="size-3.5" aria-hidden />
            Repository
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex items-center gap-1 text-site-muted hover:text-site-ink"
            >
              Live demo
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
