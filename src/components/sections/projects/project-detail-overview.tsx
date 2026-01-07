import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/types";

interface ProjectDetailOverviewProps {
  project: Project;
}

export function ProjectDetailOverview({ project }: ProjectDetailOverviewProps) {
  return (
    <Section className="pt-8 md:pt-12">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Overview */}
        <div className="lg:col-span-2">
          <h2 className="mb-4 text-2xl font-bold">Overview</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {project.overview}
          </p>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6 rounded-xl border bg-card p-6">
          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground uppercase">
              Role
            </h3>
            <p className="font-medium">{project.role}</p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground uppercase">
              Duration
            </h3>
            <p className="font-medium">{project.duration}</p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground uppercase">
              Year
            </h3>
            <p className="font-medium">{project.year}</p>
          </div>
          <div>
            <h3 className="mb-2 text-sm font-medium text-muted-foreground uppercase">
              Category
            </h3>
            <Badge variant="secondary">{project.category}</Badge>
          </div>
        </div>
      </div>
    </Section>
  );
}
