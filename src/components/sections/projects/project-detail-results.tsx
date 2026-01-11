import { TrendingUp } from "lucide-react";
import { Section } from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/types";

interface ProjectDetailResultsProps {
  project: Project;
}

export function ProjectDetailResults({ project }: ProjectDetailResultsProps) {
  return (
    <>
      <SectionHeader
        title="Results & Impact"
        subtitle="Key Metrics"
        description="Measurable outcomes and business impact."
      />
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {project.results.map((result, index) => (
            <Card
              key={`result-${index}-${result.metric}`}
              className="text-center"
            >
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                  <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-3xl font-bold text-primary">
                  {result.value}
                </p>
                <p className="mt-1 text-sm font-medium">{result.metric}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {result.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
