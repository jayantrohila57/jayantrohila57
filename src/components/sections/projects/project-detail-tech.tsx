import { Section } from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import { TechBadge } from "@/components/ui/tech-badge";
import type { Project } from "@/data/types";

interface ProjectDetailTechProps {
  project: Project;
}

export function ProjectDetailTech({ project }: ProjectDetailTechProps) {
  return (
    <>
      <SectionHeader
        title="Technologies Used"
        subtitle="Stack"
        description="Core technologies and tools used in this project."
      />
      <Section className="bg-muted/30">
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <TechBadge key={tech} tech={tech} variant="outline" size="lg" />
          ))}
        </div>
      </Section>
    </>
  );
}
