import type { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout";
import { Section } from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import { CaseStudyCard } from "@/components/sections/case-studies";
import { getCaseStudies } from "@/sanity/query/queries";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "In-depth explorations of projects I've worked on, from problem to solution to impact.",
};

export default async function CaseStudiesPage() {
  const studies = await getCaseStudies();

  return (
    <LayoutWrapper>
      <SectionHeader
        subtitle="Case Studies"
        title="Deep Dives"
        description="In-depth explorations of projects I've worked on, from problem to solution to impact."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studies.map((study) => (
            <CaseStudyCard key={study.id} caseStudy={study} />
          ))}
        </div>
      </Section>
    </LayoutWrapper>
  );
}
