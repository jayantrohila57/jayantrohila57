import Link from "next/link";
import { BlogsList, type BlogListItem } from "@/components/blogs-section";
import {
  SectionFrame,
  SectionIntro,
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
    <SectionFrame id="experiments" border>
      <SectionLabel index="06" label="Experiments" className="px-4 pt-2" />
      <BlogsList
        intro={{
          title: "Lab shelf — smaller tools and libraries.",
          description: "Secondary repos from public source data.",
        }}
        items={items}
      />
      <div className="px-4 pb-4">
        <Link
          href="/experiments"
          className="font-mono text-xs tracking-wide text-[color:var(--accent-muted)] hover:underline"
        >
          Open lab →
        </Link>
      </div>
    </SectionFrame>
  );
}
