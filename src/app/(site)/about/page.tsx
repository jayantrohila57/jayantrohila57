import {
  BentoPanel,
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { Timeline, TimelineItem } from "@/components/primitives/timeline";
import { generatePageMetadata } from "@/config/metadata";
import { experience, profile } from "@/data/portfolio";
import { resumeData } from "@/lib/resume-data";

export const metadata = generatePageMetadata({
  title: "About",
  description: profile.longBio,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <SectionFrame border={false} className="pt-12">
        <SectionIntro title="About" description={profile.shortBio} />
        <div className="grid gap-1 lg:grid-cols-3">
          <BentoPanel className="lg:col-span-2" dominant>
            <p className="font-mono text-[10px] text-muted uppercase">Profile</p>
            <h2 className="mt-2 text-3xl font-semibold">{profile.name}</h2>
            <p className="mt-2 text-accent">{profile.title}</p>
            <p className="mt-6 leading-relaxed text-muted">{profile.longBio}</p>
            <p className="mt-6 font-mono text-sm text-muted">{profile.location}</p>
          </BentoPanel>
          <BentoPanel>
            <p className="font-mono text-[10px] text-muted uppercase">Education</p>
            <ul className="mt-4 space-y-4 text-sm">
              {resumeData.education.map((ed) => (
                <li key={ed.credential}>
                  <p className="font-medium">{ed.credential}</p>
                  <p className="text-muted">{ed.institution}</p>
                  <p className="font-mono text-xs text-muted">{ed.period}</p>
                </li>
              ))}
            </ul>
          </BentoPanel>
        </div>
      </SectionFrame>
      <SectionFrame id="experience">
        <SectionIntro title="Experience" />
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
    </>
  );
}
