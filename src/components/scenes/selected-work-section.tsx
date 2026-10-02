import Link from "next/link";
import { EfferdRail } from "@/components/efferd-rail";
import { FullWidthDivider } from "@/components/full-width-divider";
import { ProjectScene } from "@/components/portfolio/project-scene";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
} from "@/components/primitives/section-frame";
import { getFeaturedProjects } from "@/data/portfolio";

export function SelectedWorkSection() {
  const featured = getFeaturedProjects();

  return (
    <SectionFrame id="work" border={false}>
      <EfferdRail>
        <div className="px-4 pt-4">
          <SectionLabel index="01" label="Selected work" />
          <SectionIntro
            title="Projects where I design, build, and ship software."
            description="Flagship open-source work with public repositories and live demos."
            action={
              <Link
                href="/work"
                className="font-mono text-xs tracking-wide text-accent hover:underline"
              >
                View all →
              </Link>
            }
          />
        </div>
        <FullWidthDivider />
        <div className="space-y-0 divide-y divide-border">
          {featured.map((project, i) => (
            <div className="p-2 md:p-4" key={project.slug}>
              <ProjectScene
                project={project}
                index={i + 1}
                reverse={i % 2 === 1}
              />
            </div>
          ))}
        </div>
        <FullWidthDivider />
      </EfferdRail>
    </SectionFrame>
  );
}
