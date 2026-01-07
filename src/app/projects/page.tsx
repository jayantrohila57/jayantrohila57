"use client";

import * as React from "react";
import type { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout";
import { Section, SectionHeader } from "@/components/layout/section";
import { ProjectCard, ProjectFilters } from "@/components/sections/projects";
import projects from "@/data/projects.json";
import type { Project } from "@/data/types";

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = React.useState<Project[]>(
    projects as Project[],
  );

  return (
    <LayoutWrapper>
      <Section className="pt-20 md:pt-28">
        <SectionHeader
          subtitle="Portfolio"
          title="All Projects"
          description="A comprehensive collection of my work across various industries and technologies."
        />

        <ProjectFilters
          projects={projects as Project[]}
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
