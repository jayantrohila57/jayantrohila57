import Link from "next/link";
import { ProjectScene } from "@/components/portfolio/project-scene";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
  sectionActionLinkClass,
} from "@/components/primitives/section-frame";
import { getFeaturedProjects } from "@/data/portfolio";

export function SelectedWorkSection() {
  const featured = getFeaturedProjects();

  return (
    <SectionFrame id="work" border>
      <div className="px-4 pt-2">
        <SectionLabel index="01" label="Selected work" />
        <SectionIntro
          title="Case studies from real products."
          description="Taskflow, Env Manager, and libyui — problem, decisions, metrics, and live demos."
          action={
            <Link href="/work" className={sectionActionLinkClass}>
              View all →
            </Link>
          }
        />
      </div>
      <div className="divide-y divide-border border-t border-border">
        {featured.map((project, i) => (
          <ProjectScene
            key={project.slug}
            project={project}
            index={i + 1}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </SectionFrame>
  );
}
