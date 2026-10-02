import Link from "next/link";
import { notFound } from "next/navigation";
import { EfferdRail } from "@/components/efferd-rail";
import { FeatureBento } from "@/components/feature-section";
import { ProjectVisual } from "@/components/portfolio/project-scene";
import { SectionFrame } from "@/components/primitives/section-frame";
import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/config/metadata";
import { getProject, projects } from "@/data/portfolio";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return generatePageMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const panelFeatures = project.sections.map((section) => ({
    title: section.title,
    description: section.body[0] ?? "",
  }));

  return (
    <SectionFrame border={false} className="pt-10">
      <EfferdRail>
        <div className="px-4">
          <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
            Project
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-muted">{project.summary}</p>

          <dl className="mt-8 grid gap-3 border-y border-border py-6 font-mono text-[11px] md:grid-cols-2">
            <div className="flex justify-between gap-4 border-b border-border-subtle pb-3 md:border-b-0">
              <dt className="text-muted uppercase">Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border-subtle pb-3 md:border-b-0">
              <dt className="text-muted uppercase">Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div className="flex justify-between gap-4 md:col-span-2">
              <dt className="text-muted uppercase">Stack</dt>
              <dd className="text-right">{project.stack.join(" · ")}</dd>
            </div>
          </dl>
        </div>

        <div className="mx-4 my-10 border border-border p-4 md:p-8">
          <ProjectVisual project={project} />
        </div>

        {panelFeatures.length > 0 ? (
          <div className="mb-10">
            <FeatureBento features={panelFeatures} />
          </div>
        ) : null}

        <div className="space-y-12 px-4 pb-8">
          {project.sections.map((section, i) => (
            <section key={section.id}>
              <h2 className="font-mono text-[11px] text-muted uppercase">
                {String(i + 1).padStart(2, "0")} — {section.title}
              </h2>
              <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t border-border px-4 pt-8">
          {project.links.live ? (
            <Button asChild variant="accent">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo
              </a>
            </Button>
          ) : null}
          {project.links.github ? (
            <Button asChild>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </Button>
          ) : null}
          <Button asChild variant="ghost">
            <Link href="/work">All work</Link>
          </Button>
        </div>
      </EfferdRail>
    </SectionFrame>
  );
}
