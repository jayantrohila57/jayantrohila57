import Link from "next/link";
import { type BlogListItem, BlogsList } from "@/components/blogs-section";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";
import { experiments } from "@/data/portfolio";

export const metadata = generatePageMetadata({
  title: staticPageSeo.experiments.title,
  description: staticPageSeo.experiments.description,
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
    <>
      <SectionFrame border={false} spacing="tight">
        <SectionIntro
          label="Experiments"
          title="Lab shelf"
          description="Inkly CMS, libyui, image editor, Spotify stats, Patternlab, and other side projects."
        />
      </SectionFrame>
      <SectionFrame border spacing="none" bleedContent>
        <BlogsList items={items} />
      </SectionFrame>
      <SectionFrame border={false} spacing="tight">
        <Link
          href="/"
          className="inline-block font-mono text-sm text-link-accent hover:underline"
        >
          ← Home
        </Link>
      </SectionFrame>
    </>
  );
}
