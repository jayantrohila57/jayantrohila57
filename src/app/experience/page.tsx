import type { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout";
import { Section, SectionHeader } from "@/components/layout/section";
import { ExperienceTimeline } from "@/components/sections/experience";
import experience from "@/data/experience.json";
import type { Experience } from "@/data/types";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "My professional journey building products at scale across multiple companies and roles.",
};

export default function ExperiencePage() {
  return (
    <LayoutWrapper>
      <Section>
        <SectionHeader
          subtitle="Career"
          title="Work Experience"
          description="My professional journey building products at scale."
        />
      </Section>

      <ExperienceTimeline experiences={experience as Experience[]} />
    </LayoutWrapper>
  );
}
