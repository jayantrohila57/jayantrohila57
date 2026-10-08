import Link from "next/link";
import { notFound } from "next/navigation";
import { WorkProjectJsonLd } from "@/components/json-ld-work";
import {
  ProjectCaseStudyAtGlance,
  ProjectCaseStudySections,
} from "@/components/portfolio/project-case-study";
import { ProjectMedia } from "@/components/portfolio/project-media";
import { SectionFrame } from "@/components/primitives/section-frame";
import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/config/metadata";
import { projectPageSeo } from "@/config/page-seo";
import { getAbsoluteUrl } from "@/config/site";
import { getProject, projects } from "@/data/portfolio";
import { getProjectCaseStudy } from "@/data/project-case-studies";
import { getProjectOgImage } from "@/lib/project-media";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const seo = projectPageSeo[slug];
  const ogDescription =
    seo?.description ?? project.ogDescription ?? project.summary;
  const ogTitle = seo?.title ?? project.ogTitle ?? project.title;
  const ogImage = getAbsoluteUrl(getProjectOgImage(project));
  return generatePageMetadata({
    title: ogTitle,
    description: ogDescription,
    path: `/work/${slug}`,
    images: [ogImage],
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const caseStudy = getProjectCaseStudy(project);

  return (
    <SectionFrame border={false} spacing="tight" className="pt-8">
      <WorkProjectJsonLd project={project} />
      <div className="page-intro px-4">
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
          {project.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {project.description || project.summary}
        </p>

        <dl className="mt-8 grid gap-3 border-y border-border py-6 font-mono text-[11px] md:grid-cols-2">
          {project.role ? (
            <div className="flex justify-between gap-4 border-b border-border pb-3 md:border-b-0">
              <dt className="text-muted-foreground uppercase">Role</dt>
              <dd className="text-right normal-case">{project.role}</dd>
            </div>
          ) : null}
          <div className="flex justify-between gap-4 border-b border-border pb-3 md:border-b-0">
            <dt className="text-muted-foreground uppercase">Status</dt>
            <dd className="normal-case">{project.status}</dd>
          </div>
          <div className="flex justify-between gap-4 border-b border-border pb-3 md:border-b-0">
            <dt className="text-muted-foreground uppercase">Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div className="flex justify-between gap-4 md:col-span-2">
            <dt className="text-muted-foreground uppercase">Stack</dt>
            <dd className="text-right normal-case">
              {project.stack.join(" · ")}
            </dd>
          </div>
        </dl>
      </div>

      <div className="group mx-4 my-8 p-2 md:p-4">
        <ProjectMedia project={project} priority />
      </div>

      {caseStudy ? (
        <>
          <ProjectCaseStudyAtGlance study={caseStudy} />
          <ProjectCaseStudySections study={caseStudy} />
        </>
      ) : (
        <div className="space-y-10 px-4 pb-8">
          {project.sections.map((section, i) => (
            <section key={section.id}>
              <h2 className="font-mono text-[11px] text-muted-foreground uppercase tracking-[0.18em]">
                {String(i + 1).padStart(2, "0")} — {section.title}
              </h2>
              <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-muted-foreground">
                {section.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}

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
          <Button asChild variant="outline">
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
    </SectionFrame>
  );
}
