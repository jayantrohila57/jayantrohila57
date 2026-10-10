import {
  ContentShell,
  GridCell,
  SectionBleed,
  SectionShell,
} from "@/components/layout/shells";
import { ResumeView } from "@/components/resume-view";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";

export const metadata = generatePageMetadata({
  title: staticPageSeo.resume.title,
  description: staticPageSeo.resume.description,
  path: "/resume",
});

export default function ResumePage() {
  return (
    <SectionShell dividerTop={false} spacing="compact">
      <ContentShell
        eyebrow="Resume"
        title="Jayant Rohila"
        description="Product engineer focused on React, Next.js, and typed full-stack delivery — PDF export matches this on-page version."
        variant="page"
        headingLevel="h1"
      />
      <SectionBleed className="border-y border-border">
        <GridCell className="md:py-10">
          <ResumeView />
        </GridCell>
      </SectionBleed>
    </SectionShell>
  );
}
