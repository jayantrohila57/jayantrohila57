import { EfferdRail } from "@/components/efferd-rail";
import { ResumeView } from "@/components/resume-view";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Resume",
  description:
    "Printable resume for Jayant Rohila — Product Engineer (Consultant) · aiQmen, Noida.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <main className="py-12">
      <EfferdRail>
        <div className="border-t border-border px-4 py-8 md:px-8">
          <ResumeView />
        </div>
      </EfferdRail>
    </main>
  );
}
