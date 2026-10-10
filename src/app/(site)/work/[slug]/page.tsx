import Link from "next/link";
import { notFound } from "next/navigation";
import { WorkProjectJsonLd } from "@/components/json-ld-work";
import {
  ProjectCaseStudyAtGlance,
  ProjectCaseStudySections,
} from "@/components/portfolio/project-case-study";
import { ProjectMedia } from "@/components/portfolio/project-media";
import { PageBleed, PageBorderedCell } from "@/components/primitives/page-column";
import { SectionFrame } from "@/components/primitives/section-frame";
import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/config/metadata";
import { projectPageSeo } from "@/config/page-seo";
import { getAbsoluteUrl } from "@/config/site";
import { getProject, projects } from "@/data/portfolio";
import { getProjectCaseStudy } from "@/data/project-case-studies";
import { getProjectOgImage } from "@/lib/project-media";
import { cn } from "@/lib/utils";

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

function MetaCell({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <PageBorderedCell className={cn("md:py-5", className)}>
      <p className="font-mono text-[10px] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-foreground">{value}</p>
    </PageBorderedCell>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const caseStudy = getProjectCaseStudy(project);

  const metaRows: { label: string; value: string }[] = [
    ...(project.role ? [{ label: "Role", value: project.role }] : []),
    { label: "Status", value: project.status },
    { label: "Year", value: project.year },
    { label: "Stack", value: project.stack.join(" · ") },
  ];

  return (
    <SectionFrame border={false} spacing="tight">
      <WorkProjectJsonLd project={project} />
      <div className="page-intro">
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
          {project.eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {project.description || project.summary}
        </p>
      </div>

      <PageBleed className="mt-8 border-t border-border">
        <div className="grid gap-px border-b border-border bg-border md:grid-cols-2">
          {metaRows.map((row) => (
            <MetaCell key={row.label} label={row.label} value={row.value} />
          ))}
        </div>
        <div className="group">
          <ProjectMedia project={project} priority />
        </div>
      </PageBleed>

      {caseStudy ? (
        <>
          <ProjectCaseStudyAtGlance study={caseStudy} />
          <ProjectCaseStudySections study={caseStudy} />
        </>
      ) : (
        <div className="space-y-10 pb-8">
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

      <PageBleed className="mt-8 border-t border-border">
        <PageBorderedCell className="flex flex-wrap gap-3 md:py-8">
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
        </PageBorderedCell>
      </PageBleed>
    </SectionFrame>
  );
}
