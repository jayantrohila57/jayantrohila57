import Link from "next/link";
import {
  ContentShell,
  GridCell,
  SectionBleed,
  SectionShell,
} from "@/components/layout/shells";
import { inlineBodyLinkClass } from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";

export const metadata = generatePageMetadata({
  title: staticPageSeo.interests.title,
  description: staticPageSeo.interests.description,
  path: "/interests",
});

export default function InterestsPage() {
  return (
    <SectionShell dividerTop={false} spacing="compact">
      <ContentShell
        eyebrow="Interests"
        title="Music, anime, travel, tech"
        description="Personal interests will live here when there is something worth publishing — kept secondary to professional work on this site."
        variant="page"
        headingLevel="h1"
      />
      <SectionBleed className="border-y border-border">
        <GridCell className="py-10">
          <p className="text-sm leading-relaxed text-muted-foreground">
            This section is not built yet. For now, explore{" "}
            <Link href="/work" className={inlineBodyLinkClass}>
              Work
            </Link>{" "}
            and{" "}
            <Link href="/about" className={inlineBodyLinkClass}>
              About
            </Link>
            .
          </p>
        </GridCell>
      </SectionBleed>
    </SectionShell>
  );
}
