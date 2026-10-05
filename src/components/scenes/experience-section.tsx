import Link from "next/link";
import { BlogsList, type BlogListItem } from "@/components/blogs-section";
import { FullWidthDivider } from "@/components/full-width-divider";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
  sectionActionLinkClass,
} from "@/components/primitives/section-frame";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  const items: BlogListItem[] = experience.map((item) => ({
    title: `${item.role} · ${item.company}`,
    date: item.period,
    description: item.summary,
    href: "/about#experience",
  }));

  return (
    <SectionFrame id="experience" border>
      <div className="px-4 pt-2">
        <SectionLabel index="06" label="Experience" />
        <SectionIntro
          title="Roles and timelines."
          description="Public career facts — client deliverables not listed."
          action={
            <Link
              href="/about"
              className={sectionActionLinkClass}
            >
              Full profile →
            </Link>
          }
        />
      </div>
      <BlogsList items={items} />
      <FullWidthDivider />
      <p className="px-4 py-4 font-mono text-[10px] text-muted-foreground">
        aiQmen · Binmile prior — Lucsum is not employment.
      </p>
    </SectionFrame>
  );
}
