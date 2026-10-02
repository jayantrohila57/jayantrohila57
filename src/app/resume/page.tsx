import { ResumeView } from "@/components/resume-view";
import { baseMetadata } from "@/config/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Resume — Jayant Rohila",
  description:
    "Printable resume for Jayant Rohila — Product Engineer at aiQmen, Noida.",
};

export default function ResumePage() {
  return (
    <main className="site-container py-12">
      <ResumeView />
    </main>
  );
}
