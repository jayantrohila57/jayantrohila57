import Link from "next/link";
import { ProjectMedia } from "@/components/portfolio/project-media";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
  sectionActionLinkClass,
} from "@/components/primitives/section-frame";
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
      className="group flex flex-col overflow-hidden border border-border bg-background transition-colors hover:bg-card"
    >
      <div className="p-3 pb-0">
        <ProjectMedia project={project} className="aspect-video w-full" />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
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
      <div className="px-4 pt-2">
        <SectionLabel index="05" label="Lab" />
        <SectionIntro
          title="Experiments and smaller public repos."
          description="Side projects and UI explorations — flagship case studies are in Selected work above."
          action={
            <Link href="/experiments" className={sectionActionLinkClass}>
              Open lab →
            </Link>
          }
        />
      </div>
      <div className="grid gap-px border-t border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map((exp) => (
          <ExperimentCard key={exp.slug} exp={exp} />
        ))}
      </div>
    </SectionFrame>
  );
}
