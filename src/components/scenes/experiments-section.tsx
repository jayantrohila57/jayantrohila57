import Link from "next/link";
import { ProjectMedia } from "@/components/portfolio/project-media";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
  sectionActionLinkClass,
} from "@/components/primitives/section-frame";
import { PageBleedGrid } from "@/components/primitives/page-column";
import { projectHasScreenshot } from "@/lib/project-media";
import type { Experiment, PortfolioProject } from "@/data/portfolio";
import { experiments, projects } from "@/data/portfolio";

function experimentAsProject(exp: Experiment): PortfolioProject {
  const match = projects.find((p) => p.slug === exp.slug);
  if (match) return match;
  return {
    slug: exp.slug,
    title: exp.title,
    eyebrow: "Experiment",
    summary: exp.summary,
    description: exp.summary,
    status: "Experiment",
    year: "",
    stack: exp.stack,
    categories: ["experiments"],
    workEngagement: "personal",
    featured: false,
    visualType: exp.visualType,
    links: exp.links,
    sections: [],
  };
}

function ExperimentCard({ exp }: { exp: Experiment }) {
  const project = experimentAsProject(exp);
  const href = exp.links.github ?? exp.links.live ?? `/work/${exp.slug}`;

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden bg-background transition-colors hover:bg-card"
    >
      {projectHasScreenshot(exp.slug) ? (
        <div className="border-b border-border">
          <ProjectMedia
            project={project}
            className="aspect-video w-full border-0"
            priority={false}
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-2 p-4 md:p-5">
        <h3 className="font-medium text-lg group-hover:text-link-accent">
          {exp.title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {exp.summary}
        </p>
        <p className="mt-auto font-mono text-[10px] tracking-wide text-muted-foreground uppercase">
          {exp.stack.slice(0, 4).join(" · ")}
        </p>
      </div>
    </Link>
  );
}

/** Efferd `blogs-2` card grid for lab projects. */
export function ExperimentsSection() {
  const items = experiments.filter(
    (exp) => exp.slug !== "jayantrohila57" && exp.slug !== "libyui",
  );

  return (
    <SectionFrame id="experiments" border>
      <div className="pt-2">
        <SectionLabel index="06" label="Lab" />
        <SectionIntro
          title="Experiments and smaller public repos."
          description="Side projects and UI explorations — flagship case studies are in Selected work above."
          action={
            <Link href="/work?type=personal#lab" className={sectionActionLinkClass}>
              Open lab →
            </Link>
          }
        />
      </div>
      <PageBleedGrid className="grid-cols-1 sm:grid-cols-2">
        {items.map((exp) => (
          <ExperimentCard key={exp.slug} exp={exp} />
        ))}
      </PageBleedGrid>
    </SectionFrame>
  );
}
