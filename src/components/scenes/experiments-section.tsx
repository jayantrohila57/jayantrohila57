import Link from "next/link";
import { type BlogListItem, BlogsList } from "@/components/blogs-section";
import {
  SectionFrame,
  SectionLabel,
  sectionActionLinkClass,
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
      <SectionLabel index="05" label="Experiments" className="px-4 pt-2" />
      <BlogsList
        intro={{
          title: "Lab shelf — smaller tools and libraries.",
          description: "Smaller tools, libraries, and UI experiments.",
        }}
        items={items}
      />
      <div className="px-4 pb-4">
        <Link href="/experiments" className={sectionActionLinkClass}>
          Open lab →
        </Link>
      </div>
    </SectionFrame>
  );
}
