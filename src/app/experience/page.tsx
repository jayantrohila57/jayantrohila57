import type { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout";
import { Section } from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import { ExperienceTimeline } from "@/components/sections/experience";
import { getExperiences } from "@/sanity/query/queries";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My professional journey building products at scale across multiple companies and roles.",
};

export default async function ExperiencePage() {
  const [experiences] = await Promise.all([getExperiences()]);
  return (
    <LayoutWrapper>
      <SectionHeader
        subtitle="Career"
        title="Work Experience"
        description="My professional journey building products at scale."
      />
      <Section>
        <ExperienceTimeline experiences={experiences} />
      </Section>
    </LayoutWrapper>
  );
}
