import { Section } from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import type { Project } from "@/data/types";

interface ProjectDetailArchitectureProps {
  project: Project;
}

export function ProjectDetailArchitecture({
  project,
}: ProjectDetailArchitectureProps) {
  return (
    <>
      <SectionHeader
        title="Architecture"
        subtitle="System Design"
        description="High-level overview of the technical architecture and design decisions."
      />
      <Section>
        <p className="max-w-4xl text-lg leading-relaxed text-muted-foreground">
          {project.architecture}
        </p>
      </Section>
    </>
  );
}
