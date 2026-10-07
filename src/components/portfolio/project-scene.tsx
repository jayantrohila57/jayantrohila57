import Link from "next/link";
import { ProjectMedia } from "@/components/portfolio/project-media";
import type { PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/cn";

export function ProjectVisual({
  project,
  className,
}: {
  project: PortfolioProject;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)} aria-hidden>
      <ProjectMedia project={project} />
    </div>
  );
}

export { ProjectMedia };

export function ProjectScene({
  project,
  index,
  reverse,
}: {
  project: PortfolioProject;
  index: number;
  reverse?: boolean;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block bg-background transition-colors hover:bg-card"
    >
      <div
        className={cn(
          "grid lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="border-b border-border p-6 lg:border-r lg:border-b-0">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {String(index).padStart(2, "0")} · {project.eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight group-hover:text-link-accent">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <dl className="mt-6 grid gap-2 font-mono text-xs text-muted-foreground uppercase">
            <div className="flex justify-between gap-4 border-t border-border pt-2">
              <dt>Status</dt>
              <dd className="text-foreground normal-case">{project.status}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-border pt-2">
              <dt>Stack</dt>
              <dd className="max-w-[60%] text-right text-foreground normal-case">
                {project.stack.slice(0, 4).join(" · ")}
              </dd>
            </div>
          </dl>
          <p className="mt-4 font-mono text-[10px] text-link-accent uppercase">
            View project →
          </p>
        </div>
        <div className="p-4 md:p-6">
          <ProjectVisual project={project} />
        </div>
      </div>
    </Link>
  );
}
