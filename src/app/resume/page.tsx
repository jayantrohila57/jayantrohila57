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
    <main className="site-container py-12">
      <ResumeView />
    </main>
  );
}
