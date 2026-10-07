import Link from "next/link";
import { type BlogListItem, BlogsList } from "@/components/blogs-section";
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
        <SectionLabel index="03" label="Experience" />
        <SectionIntro
          title="Roles and timelines."
          description="Product engineering roles in Noida and remote-friendly teams across India."
          action={
            <Link href="/about" className={sectionActionLinkClass}>
              Full profile →
            </Link>
          }
        />
      </div>
      <BlogsList items={items} />
    </SectionFrame>
  );
}
