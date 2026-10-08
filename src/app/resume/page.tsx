import { SectionFrame } from "@/components/primitives/section-frame";
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
    <SectionFrame border={false} spacing="tight" className="pt-8">
      <div className="border-t border-border px-4 py-8 md:px-8">
        <ResumeView />
      </div>
    </SectionFrame>
  );
}
