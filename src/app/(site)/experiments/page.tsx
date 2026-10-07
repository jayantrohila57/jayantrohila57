import Link from "next/link";
import { type BlogListItem, BlogsList } from "@/components/blogs-section";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { experiments } from "@/data/portfolio";

export const metadata = generatePageMetadata({
  title: "Experiments",
  description: "Secondary libraries, CMS experiments, and meta projects.",
  path: "/experiments",
});

export default function ExperimentsPage() {
  const items: BlogListItem[] = experiments.map((exp) => ({
    title: exp.title,
    date: exp.stack.join(" · "),
    description: exp.summary,
    href: exp.links.github ?? exp.links.live ?? "/experiments",
  }));

  return (
    <SectionFrame border={false} spacing="tight" className="pt-8">
      <div className="px-4">
        <SectionIntro
          label="Experiments"
          title="Lab shelf"
          description="Inkly CMS, libyui, image editor, Spotify stats, Patternlab, and other side projects."
        />
      </div>
      <BlogsList items={items} />
      <Link
        href="/"
        className="mt-8 inline-block px-4 pb-10 font-mono text-sm text-link-accent hover:underline"
      >
        ← Home
      </Link>
    </SectionFrame>
  );
}
