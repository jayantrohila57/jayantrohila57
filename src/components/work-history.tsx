import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/components/ui/card";
import {
  Timeline,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import type { Experience } from "@/data/types";

interface WorkHistoryProps {
  experiences: Experience[];
}

export default function WorkHistory({ experiences }: WorkHistoryProps) {
  // Transform experiences data into timeline items
  const timelineItems = experiences.flatMap((experience, expIndex) =>
    experience.roles.map((role, roleIndex) => ({
      id: `${expIndex}-${roleIndex}`,
      date: `${role.startDate} - ${role.endDate}`,
      title: `${role.title} at ${experience.company}`,
      description: role.description,
      company: experience.company,
      location: experience.location,
      type: experience.type,
      achievements: role.achievements,
      tech: role.tech,
    })),
  );

  return (
    <Timeline>
      <Accordion className="w-full p-2">
        {timelineItems.map((item) => (
          <TimelineItem key={item.id} step={Number(item.id)}>
            <TimelineHeader>
              <TimelineSeparator />
              <AccordionItem value={item.id} className="border-none w-full">
                <AccordionTrigger className="py-0 hover:no-underline">
                  <div className="flex flex-col items-start gap-2">
                    <TimelineDate className="min-w-[120px]">
                      {item.date}
                    </TimelineDate>
                    <TimelineTitle className="text-left">
                      {item.title}
                    </TimelineTitle>
                  </div>
                </AccordionTrigger>
                <TimelineIndicator />
                <AccordionContent className="pt-4 pb-2">
                  <Card className="shadow-sm border-muted">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">
                        {item.company}
                      </CardTitle>
                      <CardDescription>
                        {item.location} • {item.type}
                      </CardDescription>
                    </CardHeader>
                    <CardPanel className="px-6 pb-6">
                      <div className="space-y-4">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>

                        {item.achievements && item.achievements.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold">
                              Key Achievements
                            </h4>
                            <ul className="text-sm text-muted-foreground list-disc list-outside ml-4 space-y-1">
                              {item.achievements.map((achievement, index) => (
                                <li key={`${item.id}-ach-${index}`}>
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {item.tech && item.tech.length > 0 && (
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold">
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {item.tech.map((tech, index) => (
                                <span
                                  key={`${item.id}-tech-${index}`}
                                  className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground border border-transparent"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardPanel>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </TimelineHeader>
          </TimelineItem>
        ))}
      </Accordion>
    </Timeline>
  );
}
