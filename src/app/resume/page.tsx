import { SectionFrame } from "@/components/primitives/section-frame";
import { ResumeView } from "@/components/resume-view";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Resume",
  description:
    "Printable resume for Jayant Rohila — Product Engineer (Frontend), Noida.",
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
