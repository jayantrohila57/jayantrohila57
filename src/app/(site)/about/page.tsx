import { type BlogListItem, BlogsList } from "@/components/blogs-section";
import { PortfolioContactPanel } from "@/components/contact-section";
import { RootJsonLd } from "@/components/json-ld";
import {
  PAGE_GUTTER_CLASS,
  PageBleed,
  PageBorderedCell,
} from "@/components/primitives/page-column";
import {
  SectionFrame,
  SectionIntro,
} from "@/components/primitives/section-frame";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";
import { siteConfig, specializationLine } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { experience, profile } from "@/data/portfolio";
import { resumeData } from "@/lib/resume-data";
import { cn } from "@/lib/utils";

export const metadata = generatePageMetadata({
  title: staticPageSeo.about.title,
  description: staticPageSeo.about.description,
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
    description:
      item.highlights.length > 0
        ? `${item.summary} ${item.highlights[0]}`
        : item.summary,
    href: "#experience",
  }));

  return (
    <>
      <RootJsonLd />
      <SectionFrame border={false} spacing="tight">
        <SectionIntro
          label="About"
          title={profile.name}
          description={specializationLine}
          action={
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="accent">
                <Link href={siteConfig.resumePath}>View résumé</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={siteConfig.resumePdfPath}>Download PDF</a>
              </Button>
            </div>
          }
        />
        <PageBleed className="grid gap-px border-t border-border bg-border lg:grid-cols-3">
          <PageBorderedCell className="lg:col-span-2 md:py-6">
            <p className="leading-relaxed text-muted-foreground">
              {profile.longBio}
            </p>
            <p className="mt-6 font-mono text-sm text-muted-foreground">
              {profile.title} · {profile.location}
            </p>
          </PageBorderedCell>
          <PageBorderedCell className="md:py-6">
            <p className="font-mono text-[10px] text-muted-foreground uppercase">
              Strengths
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {strengths.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </PageBorderedCell>
        </PageBleed>
      </SectionFrame>
      <SectionFrame id="experience" border spacing="none" bleedContent>
        <div className={cn(PAGE_GUTTER_CLASS, "pt-8 pb-4 md:pt-10")}>
          <SectionIntro title="Experience" />
        </div>
        <BlogsList items={timeline} />
      </SectionFrame>
      <SectionFrame border spacing="none" bleedContent>
        <div className={cn(PAGE_GUTTER_CLASS, "pt-8 pb-4 md:pt-10")}>
          <SectionIntro title="Education" />
        </div>
        <PageBleed className="border-y border-border">
          <ul className="divide-y divide-border">
            {resumeData.education.map((ed) => (
              <li
                key={ed.credential}
                className={cn(PAGE_GUTTER_CLASS, "py-4 text-sm")}
              >
                <p className="font-medium">{ed.credential}</p>
                <p className="text-muted-foreground">{ed.institution}</p>
                <p className="font-mono text-xs text-muted-foreground">
                  {ed.period}
                </p>
              </li>
            ))}
          </ul>
        </PageBleed>
      </SectionFrame>
      <SectionFrame border spacing="none" bleedContent>
        <PageBleed className="border-t border-border">
          <PortfolioContactPanel layout="split" flush showIntro={false} />
        </PageBleed>
      </SectionFrame>
    </>
  );
}
