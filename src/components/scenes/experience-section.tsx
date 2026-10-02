import Link from "next/link";
import { BlogsList, type BlogListItem } from "@/components/blogs-section";
import { EfferdRail } from "@/components/efferd-rail";
import { FullWidthDivider } from "@/components/full-width-divider";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
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
    <SectionFrame id="experience" border={false}>
      <EfferdRail>
        <div className="px-4 pt-4">
          <SectionLabel index="07" label="Experience" />
          <SectionIntro
            title="Roles and timelines."
            description="Public career facts — client deliverables not listed."
            action={
              <Link
                href="/about"
                className="font-mono text-xs tracking-wide text-accent hover:underline"
              >
                Full profile →
              </Link>
            }
          />
        </div>
        <BlogsList items={items} />
        <FullWidthDivider />
        <div className="px-4 py-4 font-mono text-[10px] text-muted-foreground">
          Product Engineer (Consultant) · aiQmen · Binmile prior — Lucsum is not
          employment.
        </div>
      </EfferdRail>
    </SectionFrame>
  );
}
