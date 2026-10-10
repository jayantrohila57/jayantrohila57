import { type BlogListItem, BlogsList } from "@/components/blogs-section";
import { PortfolioContactPanel } from "@/components/contact-section";
import { RootJsonLd } from "@/components/json-ld";
import {
  ContentShell,
  FlexShell,
  GridCell,
  GridShell,
  SectionBleed,
  SectionShell,
} from "@/components/layout/shells";
import { generatePageMetadata } from "@/config/metadata";
import { staticPageSeo } from "@/config/page-seo";
import { siteConfig, specializationLine } from "@/config/site";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { experience, profile } from "@/data/portfolio";
import { resumeData } from "@/lib/resume-data";

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

function BandIntro({ title }: { title: string }) {
  return (
    <SectionBleed className="border-t border-border">
      <GridCell className="pt-8 pb-4 md:pt-10">
        <ContentShell variant="compact" title={title} />
      </GridCell>
    </SectionBleed>
  );
}

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
      <SectionShell dividerTop={false} spacing="compact">
        <ContentShell
          eyebrow="About"
          title={profile.name}
          description={specializationLine}
          variant="page"
          headingLevel="h1"
        />
        <SectionBleed className="border-t border-border">
          <GridCell>
            <FlexShell direction="row" gap="2" wrap>
              <Button asChild variant="accent">
                <Link href={siteConfig.resumePath}>View résumé</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={siteConfig.resumePdfPath}>Download PDF</a>
              </Button>
            </FlexShell>
          </GridCell>
        </SectionBleed>
        <GridShell columns="lg:grid-cols-3">
          <GridCell className="lg:col-span-2">
            <p className="leading-relaxed text-muted-foreground">
              {profile.longBio}
            </p>
            <p className="mt-6 font-mono text-sm text-muted-foreground">
              {profile.title} · {profile.location}
            </p>
          </GridCell>
          <GridCell>
            <p className="font-mono text-[10px] text-muted-foreground uppercase">
              Strengths
            </p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {strengths.map((item) => (
                <li key={item}>· {item}</li>
              ))}
            </ul>
          </GridCell>
        </GridShell>
      </SectionShell>

      <SectionShell id="experience" bleed>
        <BandIntro title="Experience" />
        <BlogsList items={timeline} />
      </SectionShell>

      <SectionShell bleed>
        <BandIntro title="Education" />
        <SectionBleed className="border-y border-border">
          <ul className="divide-y divide-border">
            {resumeData.education.map((ed) => (
              <li key={ed.credential}>
                <GridCell className="text-sm">
                  <p className="font-medium">{ed.credential}</p>
                  <p className="text-muted-foreground">{ed.institution}</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {ed.period}
                  </p>
                </GridCell>
              </li>
            ))}
          </ul>
        </SectionBleed>
      </SectionShell>

      <SectionShell bleed>
        <SectionBleed className="border-t border-border">
          <PortfolioContactPanel layout="split" flush showIntro={false} />
        </SectionBleed>
      </SectionShell>
    </>
  );
}
