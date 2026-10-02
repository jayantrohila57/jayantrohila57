import Link from "next/link";
import { BlogsList, type BlogListItem } from "@/components/blogs-section";
import { EfferdRail } from "@/components/efferd-rail";
import {
  SectionFrame,
  SectionLabel,
} from "@/components/primitives/section-frame";
import { experiments } from "@/data/portfolio";

export function ExperimentsSection() {
  const items: BlogListItem[] = experiments.map((exp) => ({
    title: exp.title,
    date: exp.stack.slice(0, 2).join(" · "),
    description: exp.summary,
    href: exp.links.github ?? exp.links.live ?? "/experiments",
  }));

  return (
    <SectionFrame id="experiments" border={false}>
      <EfferdRail bordered={false}>
        <SectionLabel index="06" label="Experiments" className="px-4" />
        <BlogsList
          intro={{
            title: "Lab shelf — smaller tools and libraries.",
            description: "Secondary repos from public source data.",
          }}
          items={items}
        />
        <div className="px-4 pb-6">
          <Link
            href="/experiments"
            className="font-mono text-xs tracking-wide text-accent hover:underline"
          >
            Open lab →
          </Link>
        </div>
      </EfferdRail>
    </SectionFrame>
  );
}
