import Link from "next/link";
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
    <SectionFrame id="work" border>
      <div className="px-4 pt-2">
        <SectionLabel index="01" label="Selected work" />
        <SectionIntro
          title="Projects where I design, build, and ship software."
          description="Flagship open-source work with public repositories and live demos."
          action={
            <Link
              href="/work"
              className="font-mono text-xs tracking-wide text-[color:var(--accent-muted)] hover:underline"
            >
              View all →
            </Link>
          }
        />
      </div>
      <FullWidthDivider />
      <div className="grid gap-px bg-border">
        {featured.map((project, i) => (
          <ProjectScene
            key={project.slug}
            project={project}
            index={i + 1}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
      <FullWidthDivider />
    </SectionFrame>
  );
}
