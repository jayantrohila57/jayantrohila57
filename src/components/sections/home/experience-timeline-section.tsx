import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Calendar, MapPin } from "lucide-react";
import experience from "@/data/experience.json";
import type { Experience } from "@/data/types";
import SectionHeader from "@/components/layout/section-header";

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
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block md:-translate-x-1/2" />

          <div className="space-y-12">
            {recentExperience.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col gap-6 md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 hidden h-4 w-4 rounded-full border-4 border-background bg-primary md:left-1/2 md:block md:-translate-x-1/2" />

                {/* Content */}
                <div className="flex-1 md:px-8">
                  <div
                    className={`rounded-xl border bg-card p-6 shadow-sm ${
                      index % 2 === 0 ? "md:text-left" : "md:text-left"
                    }`}
                  >
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                      <Badge variant="secondary">{exp.type}</Badge>
                      {exp.roles[0].endDate === "Present" && (
                        <Badge className="bg-green-500/10 text-green-600 dark:text-green-400">
                          Current
                        </Badge>
                      )}
                    </div>

                    <h3 className="text-xl font-semibold">
                      {exp.roles[0].title}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building2 className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {exp.roles[0].startDate} — {exp.roles[0].endDate}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-muted-foreground">
                      {exp.roles[0].description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.roles[0].tech.slice(0, 5).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/experience">
              View Full Experience
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
