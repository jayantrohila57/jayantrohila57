import { BlogsList, type BlogListItem } from "@/components/blogs-section";
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
      <SectionFrame border={false} spacing="tight" className="pt-8">
        <div className="px-4">
          <SectionIntro label="About" title={profile.name} description={profile.shortBio} />
        </div>
        <div className="grid gap-px border-t border-border bg-border lg:grid-cols-3">
          <div className="bg-background p-6 lg:col-span-2">
            <p className="font-mono text-[10px] text-muted-foreground uppercase">
              Profile
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{profile.title}</p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {profile.longBio}
            </p>
            <p className="mt-6 font-mono text-sm text-muted-foreground">
              {profile.location}
            </p>
          </div>
          <div className="bg-background p-6">
            <p className="font-mono text-[10px] text-muted-foreground uppercase">
              Education
            </p>
            <ul className="mt-4 space-y-4 text-sm">
              {resumeData.education.map((ed) => (
                <li key={ed.credential}>
                  <p className="font-medium">{ed.credential}</p>
                  <p className="text-muted-foreground">{ed.institution}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {ed.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionFrame>
      <SectionFrame id="experience" border>
        <div className="px-4 pt-2">
          <SectionIntro title="Experience" />
        </div>
        <BlogsList items={timeline} />
      </SectionFrame>
      <SectionFrame border spacing="tight">
        <PortfolioContactPanel className="mx-4" />
      </SectionFrame>
    </>
  );
}
