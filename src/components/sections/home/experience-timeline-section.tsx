import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import experience from "@/data/experience.json";
import type { Experience } from "@/data/types";
import SectionHeader from "@/components/layout/section-header";
import { SectionSingleGrid } from "@/components/layout/section-grid";
import { Shell } from "@/components/layout/shell";
import { TechBadge } from "@/components/ui/tech-badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ExperienceTimelineSection() {
  const recentExperience = (experience as Experience[]).slice(0, 3);

  return (
    <>
      <SectionHeader
        subtitle="Career"
        title="Work Experience"
        description="My professional journey building products at scale."
      />
      <Section>
        <div className="grid grid-cols-1">
          {recentExperience.map((exp, index) => {
            const role = exp.roles[0];
            const isCurrent = role.endDate === "Present";

            return (
              <SectionSingleGrid
                key={exp.id}
                index={index}
                length={recentExperience.length}
                className="p-4"
              >
                <Card className="rounded-none">
                  <CardHeader>
                    <CardTitle>{role.title}</CardTitle>
                    <CardDescription className="flex flex-wrap flex-row items-center gap-4">
                      <div className="flex items-center gap-1.5">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {role.startDate} — {role.endDate}
                        </span>
                      </div>
                    </CardDescription>
                    <CardDescription> {role.description}</CardDescription>
                    <CardAction>
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        <Badge variant="secondary" className="capitalize">
                          {exp.type.replace("-", " ")}
                        </Badge>
                      </div>
                    </CardAction>
                  </CardHeader>
                  <Separator />
                  <CardContent>
                    {role.achievements?.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {role.achievements
                            .slice(0, 3)
                            .map((achievement, i) => (
                              <li
                                key={i}
                                className="flex gap-2 text-sm text-muted-foreground"
                              >
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                  <Separator />
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      {role.tech.map((tech) => (
                        <TechBadge key={tech} tech={tech} variant="outline" />
                      ))}
                    </div>
                  </CardFooter>
                </Card>
              </SectionSingleGrid>
            );
          })}
        </div>
      </Section>

      <Shell>
        <Shell.Container className="bg-muted/30 p-4">
          <div className="flex w-full flex-col">
            <div className="flex flex-row gap-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/experience">
                  View Full Experience
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
        <Shell.BottomDecoration />
      </Shell>
      <Shell>
        <Shell.Container className="p-4">
          <div className="p-4"></div>
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
        <Shell.BottomDecoration />
      </Shell>
    </>
  );
}
