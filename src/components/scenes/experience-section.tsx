import Link from "next/link";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
} from "@/components/primitives/section-frame";
import { Timeline, TimelineItem } from "@/components/primitives/timeline";
import { experience } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <SectionFrame id="experience">
      <SectionLabel index="07" label="Experience" />
      <SectionIntro
        title="Roles and timelines."
        description="Public career facts — client deliverables not listed."
        action={
          <Link
            href="/about"
            className="font-mono text-xs tracking-wide text-accent hover:underline"
          >
            Full profile →
          </Link>
        }
      />
      <Timeline>
        {experience.map((item) => (
          <TimelineItem
            key={item.id}
            period={item.period}
            title={item.company}
            subtitle={item.role}
            summary={item.summary}
            highlights={item.highlights}
            technologies={item.technologies}
          />
        ))}
      </Timeline>
    </SectionFrame>
  );
}
