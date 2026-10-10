import Link from "next/link";
import { PageBleed, PageBorderedCell } from "@/components/primitives/page-column";
import {
  SectionFrame,
  SectionIntro,
  inlineBodyLinkClass,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";
import { cn } from "@/lib/utils";

export const metadata = generatePageMetadata({
  title: staticPageSeo.interests.title,
  description: staticPageSeo.interests.description,
  path: "/interests",
});

export default function InterestsPage() {
  return (
    <SectionFrame border={false} spacing="tight">
      <SectionIntro
        label="Interests"
        title="Music, anime, travel, tech"
        description="Personal interests will live here when there is something worth publishing — kept secondary to professional work on this site."
      />
      <PageBleed className="border-y border-border">
        <PageBorderedCell className="py-10">
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
        </PageBorderedCell>
      </PageBleed>
    </SectionFrame>
  );
}
