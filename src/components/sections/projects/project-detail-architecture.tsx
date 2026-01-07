import { Section, SectionHeader } from "@/components/layout/section";
import type { Project } from "@/data/types";

interface ProjectDetailArchitectureProps {
  project: Project;
}

export function ProjectDetailArchitecture({
  project,
}: ProjectDetailArchitectureProps) {
  return (
    <Section>
      <SectionHeader title="Architecture" />
      <p className="max-w-4xl text-lg leading-relaxed text-muted-foreground">
        {project.architecture}
      </p>
    </Section>
  );
}
