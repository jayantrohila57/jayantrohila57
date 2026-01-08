import type { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout";
import { Section, SectionHeader } from "@/components/layout/section";
import { CaseStudyCard } from "@/components/sections/case-studies";
import caseStudies from "@/data/case-studies.json";
import type { CaseStudy } from "@/data/types";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "In-depth explorations of projects I've worked on, from problem to solution to impact.",
};

export default function CaseStudiesPage() {
  const studies = caseStudies as CaseStudy[];

  return (
    <LayoutWrapper>
      <Section>
        <SectionHeader
          subtitle="Case Studies"
          title="Deep Dives"
          description="In-depth explorations of projects I've worked on, from problem to solution to impact."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <CaseStudyCard key={study.id} caseStudy={study} />
          ))}
        </div>
      </Section>
    </LayoutWrapper>
  );
}
