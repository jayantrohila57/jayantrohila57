import { type BlogListItem, BlogsList } from "@/components/blogs-section";
import { PortfolioContactPanel } from "@/components/contact-section";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { specializationLine } from "@/config/site";
import { experience, profile } from "@/data/portfolio";
import { resumeData } from "@/lib/resume-data";

export const metadata = generatePageMetadata({
  title: "About",
  description: profile.shortBio,
  path: "/about",
});

const strengths = [
  "Next.js and React product interfaces",
  "Typed APIs (tRPC / REST) and data-heavy views",
  "Design systems and reusable UI (libyui)",
  "Shipping with Vercel, auth, and PostgreSQL-backed apps",
];

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
          <SectionIntro
            label="About"
            title={profile.name}
            description={specializationLine}
          />
        </div>
        <div className="grid gap-px border-t border-border bg-border lg:grid-cols-3">
          <div className="bg-background p-6 lg:col-span-2">
            <p className="leading-relaxed text-muted-foreground">
              {profile.longBio}
            </p>
            <p className="mt-6 font-mono text-sm text-muted-foreground">
              {profile.title} · {profile.location}
            </p>
          </div>
          <div className="bg-background p-6">
            <p className="font-mono text-[10px] text-muted-foreground uppercase">
              Strengths
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {strengths.map((item) => (
                <li key={item}>· {item}</li>
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
      <SectionFrame border>
        <div className="px-4 pt-2">
          <SectionIntro title="Education" />
        </div>
        <ul className="divide-y divide-border px-4 pb-6">
          {resumeData.education.map((ed) => (
            <li key={ed.credential} className="py-4 text-sm">
              <p className="font-medium">{ed.credential}</p>
              <p className="text-muted-foreground">{ed.institution}</p>
              <p className="font-mono text-xs text-muted-foreground">
                {ed.period}
              </p>
            </li>
          ))}
        </ul>
      </SectionFrame>
      <SectionFrame border spacing="tight">
        <PortfolioContactPanel className="mx-4" showIntro={false} />
      </SectionFrame>
    </>
  );
}
