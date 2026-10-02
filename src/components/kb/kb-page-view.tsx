import Link from "next/link";
import { CareerTimeline } from "@/components/site/career-timeline";
import { architectureByProject } from "@/data/architecture";
import {
  companyFacts,
  roleProgressionByCompany,
} from "@/data/career-roles";
import { flagshipProjects, getProject } from "@/data/projects";
import { technologies, toolboxHighlightIds } from "@/data/technologies";
import { siteConfig } from "@/config/site";
import { ArchiveBanner } from "./archive-banner";
import { ArchitectureDiagram } from "./architecture-diagram";
import { Callout } from "./callout";
import { CodeBlock } from "./code-block";
import { CompanyHeader } from "./company-header";
import { EducationTimeline } from "./education-timeline";
import { ExternalLinkList } from "./external-link-row";
import { ProjectHero } from "./project-hero";
import { ProjectMeta } from "./project-meta";
import { RelatedProjects, RelatedTechnologies } from "./related-panel";
import { RoleProgression } from "./role-progression";
import { TechnologyGrid } from "./technology-grid";
import { TerminalBlock } from "./terminal-block";
import { isArchiveSection } from "@/lib/kb/page-context";

type KbPageViewProps = {
  slug: string[];
};

export function KbPageView({ slug }: KbPageViewProps) {
  const path = slug.join("/");
  const archive = isArchiveSection(slug);

  if (archive && path !== "archive/sources") {
    return <ArchiveBanner />;
  }

  if (path === "career/timeline") {
    return (
      <>
        <Callout variant="engineering">
          Dates and titles match the public career index. Lucsum and similar
          names are company references only — not employment.
        </Callout>
        <CareerTimeline />
        <EducationTimeline />
      </>
    );
  }

  if (path === "career/education") {
    return (
      <Callout variant="note">
        Structured timeline view also appears on the{" "}
        <Link href="/career/timeline" className="underline">
          career timeline
        </Link>{" "}
        page.
      </Callout>
    );
  }

  const companyId = slug[0] === "career" ? slug[1] : undefined;
  if (companyId && companyFacts[companyId]) {
    const facts = companyFacts[companyId];
    const progression = roleProgressionByCompany[companyId];
    return (
      <>
        <CompanyHeader companyId={companyId} facts={facts} />
        {progression ? <RoleProgression steps={progression} /> : null}
        {companyId === "aiqmen" ? (
          <Callout variant="status">
            Employer deliverables and client names are not listed on this public
            site. Open-source evidence lives under Work.
          </Callout>
        ) : null}
      </>
    );
  }

  const caseSlug = path.startsWith("work/case-studies/")
    ? slug[2]
    : undefined;
  if (caseSlug && getProject(caseSlug)) {
    const project = getProject(caseSlug)!;
    const arch = architectureByProject[caseSlug];
    const related = flagshipProjects.filter((p) => p.slug !== caseSlug);
    const techLabels = project.technologyIds
      .map((id) => technologies.find((t) => t.id === id)?.label)
      .filter(Boolean) as string[];

    return (
      <>
        <ProjectHero project={project} />
        <ProjectMeta project={project} />
        {arch ? <ArchitectureDiagram spec={arch} /> : null}
        {project.preview.type === "terminal" ? (
          <TerminalBlock lines={project.preview.lines} title="Quick start" />
        ) : null}
        {project.preview.type === "code" ? (
          <CodeBlock
            language={project.preview.language}
            title="Documented pattern"
          >
            {project.preview.snippet}
          </CodeBlock>
        ) : null}
        <RelatedTechnologies labels={techLabels} />
        <RelatedProjects projects={related.slice(0, 2)} />
      </>
    );
  }

  if (path === "work/case-studies") {
    return (
      <ol className="not-prose mb-8 divide-y divide-site-border border border-site-border">
        {flagshipProjects.map((project) => (
          <li key={project.slug} className="p-5">
            <Link
              href={project.caseStudyHref ?? "#"}
              className="font-display text-xl text-site-ink hover:text-site-accent"
            >
              {project.name}
            </Link>
            <p className="mt-2 max-w-prose text-sm text-site-muted text-pretty">
              {project.summary}
            </p>
            <p className="mt-3 font-mono text-xs text-site-accent">
              Read case study →
            </p>
          </li>
        ))}
      </ol>
    );
  }

  if (path === "work/projects") {
    return (
      <>
        <Callout variant="tip">
          Flagship repos below link to case studies. The full repository table in
          this article is the canonical list — no extra projects invented.
        </Callout>
        <RelatedProjects projects={flagshipProjects} />
      </>
    );
  }

  if (path === "work/skills") {
    const highlighted = toolboxHighlightIds
      .map((id) => technologies.find((t) => t.id === id))
      .filter(Boolean) as typeof technologies;
    return (
      <>
        <Callout variant="engineering">
          Skills are grouped by evidence in public GitHub repos — not ranked by
          years of experience.
        </Callout>
        <TechnologyGrid items={highlighted} showCareer />
      </>
    );
  }

  if (path === "about/overview") {
    return (
      <>
        <FactStrip
          items={[
            { k: "Role", v: siteConfig.author.jobTitle },
            { k: "Location", v: "Noida, India" },
            { k: "Focus", v: "Full-stack web products" },
          ]}
        />
        <RelatedProjects projects={flagshipProjects} />
      </>
    );
  }

  if (path === "about/bio" || path === "about/resume") {
    return (
      <Callout variant="note">
        Narrative and printable resume views complement each other — facts align
        with the career timeline and public GitHub activity.
      </Callout>
    );
  }

  if (path === "contact") {
    return (
      <ExternalLinkList
        links={[
          {
            label: "Email",
            href: "mailto:jrohila55@gmail.com",
            description: "Professional inquiries",
          },
          {
            label: "LinkedIn",
            href: siteConfig.social.linkedin,
          },
          {
            label: "GitHub (personal)",
            href: siteConfig.social.github,
          },
          {
            label: "GitHub (work)",
            href: "https://github.com/jayantaiqmen",
          },
          {
            label: "Linktree",
            href: siteConfig.social.linktree,
          },
        ]}
      />
    );
  }

  if (path === "presence/website") {
    return (
      <ExternalLinkList
        links={[
          {
            label: "Live site",
            href: siteConfig.siteUrl,
          },
          {
            label: "Source repository",
            href: "https://github.com/jayantrohila57/jayantrohila57",
          },
        ]}
      />
    );
  }

  if (
    path.startsWith("presence/") ||
    path.startsWith("archive/mentions")
  ) {
    return (
      <Callout variant="note">
        Links are public profiles and demos — verify freshness on the destination
        site.
      </Callout>
    );
  }

  if (path === "archive/conflicts") {
    return (
      <Callout variant="status">
        When certificates, old sites, or profiles disagree, this page records
        which wording this portfolio uses.
      </Callout>
    );
  }

  return null;
}

function FactStrip({ items }: { items: { k: string; v: string }[] }) {
  return (
    <dl className="not-prose mb-8 flex flex-wrap gap-x-8 gap-y-3 border-y border-site-border py-4">
      {items.map((item) => (
        <div key={item.k} className="min-w-[8rem]">
          <dt className="font-mono text-[0.65rem] uppercase text-site-muted">
            {item.k}
          </dt>
          <dd className="mt-1 text-sm text-site-ink">{item.v}</dd>
        </div>
      ))}
    </dl>
  );
}
