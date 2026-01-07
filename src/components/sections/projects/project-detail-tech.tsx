import { Section, SectionHeader } from "@/components/layout/section";
import { TechBadge } from "@/components/ui/tech-badge";
import type { Project } from "@/data/types";

interface ProjectDetailTechProps {
  project: Project;
}

export function ProjectDetailTech({ project }: ProjectDetailTechProps) {
  return (
    <Section className="bg-muted/30">
      <SectionHeader title="Technologies Used" />
      <div className="flex flex-wrap gap-3">
        {project.tech.map((tech) => (
          <TechBadge key={tech} tech={tech} variant="outline" size="lg" />
        ))}
      </div>
    </Section>
  );
}
