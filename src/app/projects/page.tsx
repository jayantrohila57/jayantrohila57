"use client";

import * as React from "react";
import type { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout";
import { Section } from "@/components/layout/section";
import { ProjectCard, ProjectFilters } from "@/components/sections/projects";
import projects from "@/data/projects.json";
import type { Project } from "@/data/types";
import SectionHeader from "@/components/layout/section-header";

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = React.useState<Project[]>(
    projects as Project[],
  );

  return (
    <LayoutWrapper>
      <SectionHeader
        subtitle="Portfolio"
        title="All Projects"
        description="A comprehensive collection of my work across various industries and technologies."
      />
      <Section>
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
