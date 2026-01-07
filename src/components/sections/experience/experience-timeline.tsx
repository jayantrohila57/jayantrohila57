import { Section, SectionHeader } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { TechBadge } from "@/components/ui/tech-badge";
import { Building2, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import type { Experience } from "@/data/types";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <Section>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 h-full w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, expIndex) =>
            exp.roles.map((role, roleIndex) => {
              const isEven = (expIndex + roleIndex) % 2 === 0;
              const isCurrent = role.endDate === "Present";

              return (
                <div
                  key={`${exp.id}-${roleIndex}`}
                  className={`relative flex flex-col gap-4 pl-12 md:flex-row md:pl-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2.5 top-0 h-3 w-3 rounded-full border-4 border-background md:left-1/2 md:-translate-x-1/2 ${
                      isCurrent ? "bg-green-500" : "bg-primary"
                    }`}
                  />

                  {/* Content */}
                  <div className="flex-1 md:px-8">
                    <div className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md">
                      <div className="mb-4 flex flex-wrap items-center gap-2">
                        <Badge variant="secondary" className="capitalize">
                          {exp.type.replace("-", " ")}
                        </Badge>
                        {isCurrent && (
                          <Badge className="bg-green-500/10 text-green-600 dark:text-green-400">
                            Current
                          </Badge>
                        )}
                      </div>

                      <h3 className="text-xl font-semibold">{role.title}</h3>

                      <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
                      </div>

                      <p className="mt-4 text-muted-foreground">
                        {role.description}
                      </p>

                      {/* Achievements */}
                      <div className="mt-4 space-y-2">
                        <h4 className="text-sm font-medium">
                          Key Achievements:
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

                      {/* Tech Stack */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {role.tech.map((tech) => (
                          <TechBadge key={tech} tech={tech} variant="outline" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="hidden flex-1 md:block" />
                </div>
              );
            }),
          )}
        </div>
      </div>
    </Section>
  );
}
