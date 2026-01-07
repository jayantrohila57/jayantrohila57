import { Section, SectionHeader } from "@/components/layout/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import type { Project } from "@/data/types";

interface ProjectDetailChallengesProps {
  project: Project;
}

export function ProjectDetailChallenges({
  project,
}: ProjectDetailChallengesProps) {
  return (
    <Section className="bg-muted/30">
      <SectionHeader title="Challenges & Solutions" />
      <div className="grid gap-6 md:grid-cols-2">
        {project.challenges.map((challenge, index) => (
          <Card key={index} className="gap-0">
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg">{challenge.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pb-6">
              <p className="text-muted-foreground text-sm">
                {challenge.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
