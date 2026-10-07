import Link from "next/link";
import { WorkList, type WorkListItem } from "@/components/blogs-section";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
  sectionActionLinkClass,
} from "@/components/primitives/section-frame";
import { getFeaturedProjects } from "@/data/portfolio";

export function SelectedWorkSection() {
  const featured = getFeaturedProjects();
  const items: WorkListItem[] = featured.map((project, i) => ({
    index: i + 1,
    title: project.title,
    description: project.summary,
    meta: project.stack.slice(0, 4).join(" · "),
    href: `/work/${project.slug}`,
  }));

  return (
    <SectionFrame id="work" border>
      <div className="px-4 pt-2">
        <SectionLabel index="01" label="Selected work" />
        <SectionIntro
          title="Projects where I design, build, and ship software."
          description="Flagship repositories with live demos where available."
          action={
            <Link href="/work" className={sectionActionLinkClass}>
              View all →
            </Link>
          }
        />
      </div>
      <WorkList items={items} />
    </SectionFrame>
  );
}
