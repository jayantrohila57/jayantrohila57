import Link from "next/link";
import type { Technology } from "@/data/technologies";
import { getProject } from "@/data/projects";

export function TechnologyGrid({
  items,
  showCareer = false,
}: {
  items: Technology[];
  showCareer?: boolean;
}) {
  return (
    <div className="not-prose my-8">
      <div className="divide-y divide-site-border border border-site-border">
        {items.map((tech) => {
          const evidence = tech.projectSlugs
            .map((slug) => getProject(slug))
            .filter(Boolean);
          return (
            <div
              key={tech.id}
              className="grid gap-3 p-4 md:grid-cols-[minmax(0,11rem)_1fr]"
            >
              <div>
                <p className="font-mono text-sm text-site-ink">{tech.label}</p>
                <p className="mt-1 font-mono text-[0.6rem] uppercase text-site-muted">
                  {tech.category}
                </p>
              </div>
              <div>
                <p className="font-mono text-[0.65rem] uppercase text-site-muted">
                  Evidence
                </p>
                <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {evidence.map((project) =>
                    project ? (
                      <li key={project.slug}>
                        <Link
                          href={
                            project.caseStudyHref ?? `/work/projects#${project.slug}`
                          }
                          className="text-site-accent hover:underline"
                        >
                          {project.name}
                        </Link>
                      </li>
                    ) : null,
                  )}
                </ul>
                {showCareer ? (
                  <p className="mt-2 text-xs text-site-muted">
                    Employer stack per client is not listed — see career pages for
                    role context.
                  </p>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
