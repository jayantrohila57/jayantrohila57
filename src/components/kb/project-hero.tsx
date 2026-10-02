import type { Project } from "@/data/projects";
import { ProjectPreviewPanel } from "@/components/site/project-preview";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <div className="not-prose mb-8 grid gap-0 border border-site-border lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
      <div className="border-b border-site-border p-6 lg:border-b-0 lg:border-r">
        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-site-muted">
          Case study
        </p>
        <h2 className="mt-2 font-display text-2xl font-medium text-site-ink md:text-3xl">
          {project.name}
        </h2>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-site-muted text-pretty">
          {project.summary}
        </p>
      </div>
      <ProjectPreviewPanel preview={project.preview} className="min-h-[10rem] border-0" />
    </div>
  );
}
