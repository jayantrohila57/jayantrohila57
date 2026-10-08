import { PageBleed } from "@/components/primitives/page-column";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
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
    <SectionFrame border={false} spacing="tight" className="pb-10">
      <div className="px-4 md:px-6">
        <SectionIntro
          label="Resume"
          title="Jayant Rohila"
          description="Product engineer focused on React, Next.js, and typed full-stack delivery — PDF export matches this on-page version."
        />
      </div>
      <PageBleed className="mt-6 border-t border-border">
        <div className="px-4 py-8 md:px-6 md:py-10">
          <ResumeView />
        </div>
      </PageBleed>
    </SectionFrame>
  );
}
