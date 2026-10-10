import Link from "next/link";
import { EngineeringContent } from "@/components/portfolio/engineering-content";
import {
  ContentShell,
  GridCell,
  SectionBleed,
  SectionShell,
  shellCellClassName,
} from "@/components/layout/shells";
import { inlineBodyLinkClass } from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";
import { projects } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const metadata = generatePageMetadata({
  title: staticPageSeo.writing.title,
  description: staticPageSeo.writing.description,
  path: "/writing",
});

function WritingEmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div
      className={cn(
        shellCellClassName(),
        "rounded-md border border-dashed border-border bg-background/50 text-center",
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
      <SectionShell dividerTop={false} spacing="compact">
        <ContentShell
          eyebrow="Writing"
          title="Case studies & notes"
          description="Long-form project write-ups and engineering notes live here. Blog posts and short snippets are not published yet."
          variant="page"
          headingLevel="h1"
        />
      </SectionShell>

      <SectionShell id="case-studies" bleed>
        <SectionBleed className="border-t border-border">
          <GridCell className="scroll-mt-20 pt-8 pb-4 md:pt-10">
            <ContentShell variant="compact" title="Case studies" description="In-depth pages for open-source projects on this site." />
          </GridCell>
        </SectionBleed>
        <SectionBleed className="border-y border-border">
          <ul className="divide-y divide-border">
            {caseStudies.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}`}
                  className={cn(
                    shellCellClassName(),
                    "block transition-colors hover:bg-secondary/40",
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
        </SectionBleed>
      </SectionShell>

      <SectionShell id="engineering" spacing="compact" bleed>
        <div className={cn(shellCellClassName(), "scroll-mt-20")}>
          <EngineeringContent />
        </div>
      </SectionShell>

      <SectionShell id="blog" spacing="compact">
        <ContentShell variant="compact" title="Blog posts" />
        <WritingEmptyState
          title="Coming later"
          body="No blog posts are published yet. Case studies above cover the flagship project narratives."
        />
      </SectionShell>

      <SectionShell id="snippets" spacing="compact">
        <ContentShell variant="compact" title="Snippets & walkthroughs" />
        <WritingEmptyState
          title="Coming later"
          body="Short code walkthroughs and UI snippets may be added here. For now, see Engineering notes and project repos on GitHub."
        />
        <p className="mt-8 text-sm text-muted-foreground">
          <Link href="/work" className={inlineBodyLinkClass}>
            Browse all projects
          </Link>
        </p>
      </SectionShell>
    </>
  );
}
