"use client";

import * as React from "react";
import { LayoutWrapper } from "@/components/layout";
import { Section } from "@/components/layout/section";
import SectionHeaderComponent from "@/components/layout/section-header"; // check import path
import { ProjectCard, ProjectFilters } from "@/components/sections/projects";
import type { Project } from "@/data/types";

export function ProjectsClientPage({ projects }: { projects: Project[] }) {
  const [filteredProjects, setFilteredProjects] =
    React.useState<Project[]>(projects);

  return (
    <LayoutWrapper>
      <SectionHeaderComponent
        subtitle="Portfolio"
        title="All Projects"
        description="A comprehensive collection of my work across various industries and technologies."
      />
      <Section>
        <ProjectFilters
          projects={projects}
          onFilterChange={setFilteredProjects}
        />

        {filteredProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-lg text-muted-foreground">
              No projects found matching your filters.
            </p>
          </div>
        )}
      </Section>
    </LayoutWrapper>
  );
}
