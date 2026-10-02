import type { Project } from "@/data/projects";
import { technologies } from "@/data/technologies";

export function ProjectMeta({ project }: { project: Project }) {
  const stack = project.technologyIds
    .map((id) => technologies.find((t) => t.id === id)?.label)
    .filter(Boolean);

  return (
    <div className="not-prose mb-8 border-y border-site-border py-4">
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <dt className="font-mono text-[0.65rem] uppercase text-site-muted">
            Repository
          </dt>
          <dd className="mt-1 text-sm">
            <a
              href={project.repo}
              className="text-site-accent hover:underline break-all"
              rel="noreferrer noopener"
              target="_blank"
            >
              {project.repo.replace("https://github.com/", "")}
            </a>
          </dd>
        </div>
        {project.demo ? (
          <div>
            <dt className="font-mono text-[0.65rem] uppercase text-site-muted">
              Demo
            </dt>
            <dd className="mt-1 text-sm">
              <a
                href={project.demo}
                className="text-site-accent hover:underline break-all"
                rel="noreferrer noopener"
                target="_blank"
              >
                {project.demo.replace("https://", "")}
              </a>
            </dd>
          </div>
        ) : null}
        <div className="sm:col-span-2">
          <dt className="font-mono text-[0.65rem] uppercase text-site-muted">
            Stack (from README)
          </dt>
          <dd className="mt-2 flex flex-wrap gap-1.5">
            {stack.map((label) => (
              <span
                key={label}
                className="border border-site-border px-2 py-0.5 font-mono text-[0.65rem] text-site-muted"
              >
                {label}
              </span>
            ))}
          </dd>
        </div>
      </dl>
    </div>
  );
}
