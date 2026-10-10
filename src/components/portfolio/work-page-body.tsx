import Link from "next/link";
import { type BlogListItem, BlogsList } from "@/components/blogs-section";
import { ProjectScene } from "@/components/portfolio/project-scene";
import {
  ContentShell,
  GridCell,
  SectionBleed,
} from "@/components/layout/shells";
import {
  inlineBodyLinkClass,
} from "@/components/primitives/section-frame";
import {
  getLabShelfExperiments,
  getProjectsByEngagement,
  getWorkPageProjectsByTier,
  projects,
} from "@/data/portfolio";
import {
  parseWorkEngagementFilter,
  type WorkEngagement,
  workEngagementFilters,
} from "@/data/work-engagement";
import { WorkEngagementFilter } from "./work-engagement-filter";

const emptyCopy: Record<WorkEngagement, string> = {
  professional:
    "Employer and client deliverables stay off the public portfolio. Open-source case studies here are personal projects; see About for employment history.",
  freelance:
    "No freelance case studies are published yet. For professional inquiries, use Contact.",
  personal: "No personal projects match this filter.",
};

type WorkPageBodyProps = {
  typeParam?: string;
};

export function WorkPageBody({ typeParam }: WorkPageBodyProps) {
  const filter = parseWorkEngagementFilter(typeParam);
  const tiers = getWorkPageProjectsByTier();
  const labItems = getLabShelfExperiments();
  const showLab = filter === "all" || filter === "personal";

  const filteredProjects =
    filter === "all"
      ? projects
      : getProjectsByEngagement(filter as WorkEngagement);
  const filteredSlugs = new Set(filteredProjects.map((p) => p.slug));

  let sceneIndex = 0;
  const filterMeta = workEngagementFilters.find((f) => f.key === filter);

  const labList: BlogListItem[] = labItems.map((exp) => ({
    title: exp.title,
    date: exp.stack.join(" · "),
    description: exp.summary,
    href: exp.links.github ?? exp.links.live ?? "/work",
  }));

  return (
    <>
      <ContentShell
        eyebrow="Work"
        title="Projects"
        description={
          filterMeta?.description ??
          "Curated open-source work with repositories and live demos where available."
        }
        variant="page"
        headingLevel="h1"
      />
      <WorkEngagementFilter />

      {filteredProjects.length === 0 ? (
        <SectionBleed className="mt-8 border-t border-border">
          <GridCell className="py-10">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {filter !== "all"
                ? emptyCopy[filter as WorkEngagement]
                : "No projects to show."}
            </p>
          </GridCell>
        </SectionBleed>
      ) : (
        tiers.map((tier) => {
          const tierProjects = tier.projects.filter((p) =>
            filteredSlugs.has(p.slug),
          );
          if (tierProjects.length === 0) return null;
          return (
            <div key={tier.key} className="mt-8">
              <SectionBleed className="border-t border-border">
                <GridCell className="border-b border-border md:py-6">
                  <h2 className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                    {tier.title}
                  </h2>
                </GridCell>
                <div className="grid gap-px bg-border">
                  {tierProjects.map((project) => {
                    sceneIndex += 1;
                    return (
                      <ProjectScene
                        key={project.slug}
                        project={project}
                        index={sceneIndex}
                      />
                    );
                  })}
                </div>
              </SectionBleed>
            </div>
          );
        })
      )}

      {showLab && labList.length > 0 ? (
        <div id="lab" className="mt-8 scroll-mt-20">
          <SectionBleed className="border-t border-border">
            <GridCell className="md:py-6">
              <h2 className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
                Lab shelf
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Smaller public repos and meta projects (formerly on{" "}
                <span className="text-foreground">/experiments</span>).
              </p>
            </GridCell>
          </SectionBleed>
          <BlogsList items={labList} />
        </div>
      ) : null}

      <p className="pt-8 text-sm text-muted-foreground">
        Private client repositories are not listed here.{" "}
        <Link href="/contact" className={inlineBodyLinkClass}>
          Contact
        </Link>{" "}
        for professional inquiries.
      </p>
    </>
  );
}
