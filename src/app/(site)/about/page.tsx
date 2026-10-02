import { BlogsList, type BlogListItem } from "@/components/blogs-section";
import { EfferdRail } from "@/components/efferd-rail";
import { PortfolioContactPanel } from "@/components/contact-section";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { experience, profile } from "@/data/portfolio";
import { resumeData } from "@/lib/resume-data";

export const metadata = generatePageMetadata({
  title: "About",
  description: profile.longBio,
  path: "/about",
});

export default function AboutPage() {
  const timeline: BlogListItem[] = experience.map((item) => ({
    title: `${item.role} · ${item.company}`,
    date: item.period,
    description: item.summary,
    href: "#experience",
  }));

  return (
    <>
      <SectionFrame border={false} className="pt-12">
        <EfferdRail>
          <div className="px-4">
            <SectionIntro title="About" description={profile.shortBio} />
          </div>
          <div className="grid gap-px border-t border-border bg-border lg:grid-cols-3">
            <div className="bg-background p-6 lg:col-span-2">
              <p className="font-mono text-[10px] text-muted uppercase">Profile</p>
              <h2 className="mt-2 text-3xl font-semibold">{profile.name}</h2>
              <p className="mt-2 text-accent">{profile.title}</p>
              <p className="mt-6 leading-relaxed text-muted">{profile.longBio}</p>
              <p className="mt-6 font-mono text-sm text-muted">{profile.location}</p>
            </div>
            <div className="bg-background/90 p-6">
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
            </div>
          </div>
        </EfferdRail>
      </SectionFrame>
      <SectionFrame id="experience" border={false}>
        <EfferdRail>
          <div className="px-4 pt-4">
            <SectionIntro title="Experience" />
          </div>
          <BlogsList items={timeline} />
        </EfferdRail>
      </SectionFrame>
      <SectionFrame border={false} className="pb-16">
        <EfferdRail bordered={false}>
          <PortfolioContactPanel className="mx-4" />
        </EfferdRail>
      </SectionFrame>
    </>
  );
}
