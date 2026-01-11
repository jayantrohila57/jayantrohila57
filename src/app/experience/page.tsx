import type { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout";
import { Section } from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My professional journey building products at scale across multiple companies and roles.",
};

export default function ExperiencePage() {
  return (
    <LayoutWrapper>
      <SectionHeader
        subtitle="Career"
        title="Work Experience"
        description="My professional journey building products at scale."
      />
      <Section>
        {/* <ExperienceTimeline experiences={experience as Experience[]} /> */}
      </Section>
    </LayoutWrapper>
  );
}
