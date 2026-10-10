import Link from "next/link";
import { EngineeringContent } from "@/components/portfolio/engineering-content";
import {
  PAGE_GUTTER_CLASS,
  PageBleed,
} from "@/components/primitives/page-column";
import {
  SectionFrame,
  SectionIntro,
  inlineBodyLinkClass,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const metadata = generatePageMetadata({
  title: staticPageSeo.writing.title,
  description: staticPageSeo.writing.description,
  path: "/writing",
});

function WritingEmptyState({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div
      className={cn(
        PAGE_GUTTER_CLASS,
        "rounded-md border border-dashed border-border bg-background/50 py-8 text-center",
      )}
    >
      <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
        {title}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {body}
      </p>
    </div>
  );
}

export default function WritingPage() {
  const caseStudies = [...projects].sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  return (
    <>
      <SectionFrame border={false} spacing="tight">
        <SectionIntro
          label="Writing"
          title="Case studies & notes"
          description="Long-form project write-ups and engineering notes live here. Blog posts and short snippets are not published yet."
        />
      </SectionFrame>

      <SectionFrame id="case-studies" border spacing="none" bleedContent>
        <div className={cn(PAGE_GUTTER_CLASS, "scroll-mt-20 pt-8 pb-4 md:pt-10")}>
          <SectionIntro
            compact
            title="Case studies"
            description="In-depth pages for open-source projects on this site."
          />
        </div>
        <PageBleed className="border-y border-border">
          <ul className="divide-y divide-border">
            {caseStudies.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className={cn(
                    PAGE_GUTTER_CLASS,
                    "block py-4 transition-colors hover:bg-secondary/40",
                  )}
                >
                  <p className="font-medium text-foreground">{project.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </PageBleed>
      </SectionFrame>

      <SectionFrame id="engineering" border spacing="tight" bleedContent={false}>
        <div className={cn(PAGE_GUTTER_CLASS, "scroll-mt-20")}>
          <EngineeringContent />
        </div>
      </SectionFrame>

      <SectionFrame id="blog" border spacing="tight">
        <SectionIntro compact title="Blog posts" />
        <WritingEmptyState
          title="Coming later"
          body="No blog posts are published yet. Case studies above cover the flagship project narratives."
        />
      </SectionFrame>

      <SectionFrame id="snippets" border spacing="tight">
        <SectionIntro compact title="Snippets & walkthroughs" />
        <WritingEmptyState
          title="Coming later"
          body="Short code walkthroughs and UI snippets may be added here. For now, see Engineering notes and project repos on GitHub."
        />
        <p className="mt-8 text-sm text-muted-foreground">
          <Link href="/work" className={inlineBodyLinkClass}>
            Browse all projects
          </Link>
        </p>
      </SectionFrame>
    </>
  );
}
