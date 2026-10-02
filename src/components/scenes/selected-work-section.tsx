import Link from "next/link";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
} from "@/components/primitives/section-frame";
import { ProjectScene } from "@/components/portfolio/project-scene";
import { getFeaturedProjects } from "@/data/portfolio";

export function SelectedWorkSection() {
  const featured = getFeaturedProjects();

  return (
    <SectionFrame id="work">
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
      <div className="space-y-6">
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
