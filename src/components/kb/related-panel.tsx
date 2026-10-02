import Link from "next/link";
import type { Project } from "@/data/projects";

export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;
  return (
    <section className="not-prose mt-10 border-t border-site-border pt-8">
      <h2 className="font-mono text-[0.65rem] uppercase tracking-widest text-site-muted">
        Related projects
      </h2>
      <ul className="mt-4 divide-y divide-site-border">
        {projects.map((project) => (
          <li key={project.slug} className="py-3">
            <Link
              href={project.caseStudyHref ?? project.repo}
              className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span className="font-medium text-site-ink group-hover:text-site-accent">
                {project.name}
              </span>
              <span className="font-mono text-xs text-site-muted">
                {project.demo ? "demo + repo" : "repository"}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function RelatedTechnologies({
  labels,
}: {
  labels: string[];
}) {
  if (labels.length === 0) return null;
  return (
    <section className="not-prose mt-8">
      <h2 className="font-mono text-[0.65rem] uppercase tracking-widest text-site-muted">
        Technologies in this story
      </h2>
      <ul className="mt-3 flex flex-wrap gap-2">
        {labels.map((label) => (
          <li
            key={label}
            className="border border-site-border px-2 py-1 font-mono text-[0.65rem] text-site-muted"
          >
            {label}
          </li>
        ))}
      </ul>
      <Link
        href="/work/skills"
        className="mt-3 inline-block text-sm text-site-accent hover:underline"
      >
        Full skills index →
      </Link>
    </section>
  );
}
