import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Technology } from "@/data/technologies";
import { getProject } from "@/data/projects";

type TechnologyBadgeProps = {
  technology: Technology;
  showEvidence?: boolean;
  className?: string;
};

export function TechnologyBadge({
  technology,
  showEvidence = false,
  className,
}: TechnologyBadgeProps) {
  const evidence = technology.projectSlugs
    .map((slug) => getProject(slug))
    .filter(Boolean)
    .slice(0, 2);

  return (
    <div
      className={cn(
        "flex flex-col gap-2 border border-site-border bg-site-surface p-3",
        className,
      )}
    >
      <span className="font-mono text-xs font-medium text-site-ink">
        {technology.label}
      </span>
      {showEvidence && evidence.length > 0 ? (
        <ul className="flex flex-wrap gap-1.5">
          {evidence.map((project) =>
            project ? (
              <li key={project.slug}>
                <Link
                  href={project.caseStudyHref ?? project.repo}
                  className="text-[0.7rem] text-site-muted underline-offset-2 hover:text-site-accent hover:underline"
                >
                  {project.name}
                </Link>
              </li>
            ) : null,
          )}
        </ul>
      ) : null}
    </div>
  );
}
