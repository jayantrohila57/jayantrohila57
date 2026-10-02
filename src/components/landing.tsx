import {
  Archive,
  ArrowRight,
  BookOpen,
  Briefcase,
  Compass,
  Globe,
  Layers,
  Scale,
  User,
} from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type PreviewLink = {
  href: string;
  title: string;
  summary: string;
};

type DocSection = {
  id: string;
  title: string;
  icon: LucideIcon;
  intro: string;
  pages: PreviewLink[];
};

const docSections: DocSection[] = [
  {
    id: "about",
    title: "About",
    icon: User,
    intro:
      "Notion = working SoT; this site = public published slice (synced 2026-10-02).",
    pages: [
      {
        href: "/about/overview",
        title: "Overview",
        summary:
          "Publishing model, aiQmen snapshot (Noida, from 18 May 2026), exclusion policy (no payroll/phone/HR PDFs). Optional public contact email on this page only.",
      },
      {
        href: "/about/bio",
        title: "Bio",
        summary:
          "Full narrative: aiQmen, Binmile (Associate, trainee→associate Jun 2024), Teevro, Braeon ServiceNow trainee ~2021, education, freeCodeCamp cert URL, GitHub primary + jayantaiqmen.",
      },
    ],
  },
  {
    id: "career",
    title: "Career",
    icon: Briefcase,
    intro: "Employers, internships, HR titles — incl. Braeon conflict note.",
    pages: [
      {
        href: "/career/timeline",
        title: "Timeline",
        summary:
          "aiQmen → Binmile (LWD 16 Apr 2026) → Teevro → Braeon ~2021; education + freeCodeCamp link; Lucsum explicitly not employment.",
      },
      {
        href: "/career/aiqmen",
        title: "aiQmen",
        summary:
          "Product Engineer / Consultant–Product Engineer; AIQMEN DESIGNS AND TECHNOLOGIES PVT LTD; DOJ 18 May 2026; Noida; work GitHub jayantaiqmen.",
      },
      {
        href: "/career/binmile",
        title: "Binmile",
        summary:
          "Associate Software Developer 18 Mar 2024–16 Apr 2026; trainee until Associate from 17 Jun 2024; no private work email or emp IDs.",
      },
      {
        href: "/career/teevro",
        title: "Teevro",
        summary:
          "Full Stack Development Intern, Teevro Solutions Pvt. Ltd., 24 Jan–30 Apr 2023.",
      },
      {
        href: "/career/braeon",
        title: "Braeon",
        summary:
          "ServiceNow / Software Developer–Trainee ~Jul/Aug–Oct 2021; annexure date conflict documented — not current employment.",
      },
      {
        href: "/career/education",
        title: "Education",
        summary:
          "B.Tech CSE Dev Bhoomi 2020–2023; diploma DWARIKADHEESH (2016–2019 vs 2016–2020 conflict); freeCodeCamp Responsive Web Design certificate URL.",
      },
    ],
  },
  {
    id: "work",
    title: "Work",
    icon: Layers,
    intro: "23-repo portfolio table + evidence-linked skills (no years-per-skill).",
    pages: [
      {
        href: "/work/projects",
        title: "Projects",
        summary:
          "Full repo + deploy table: libyui, taskflow, bad-money, ai-chat, e-commerce, codethread-black, 68m-holidays, and more. Lucsum = hub only.",
      },
      {
        href: "/work/case-studies",
        title: "Case studies",
        summary:
          "Placeholder for long-form posts; links to SO answer on Sanity+Netlify and mentions ledger until dedicated write-ups exist.",
      },
      {
        href: "/work/skills",
        title: "Skills",
        summary:
          "Languages, frontend, backend, data/CMS, cloud, AI SDK, quality — synced from Notion/site inventory (~41 skills); microfrontends not claimed.",
      },
    ],
  },
  {
    id: "presence",
    title: "Presence",
    icon: Globe,
    intro: "Canonical URLs plus extended Linktree footprint index.",
    pages: [
      {
        href: "/presence/website",
        title: "Website",
        summary:
          "jayantrohila.com + source repo; Notion→git publish model; stale legacy portfolio called out in conflicts.",
      },
      {
        href: "/presence/linkedin",
        title: "LinkedIn",
        summary:
          "linkedin.com/in/jayant-rohila — Product Engineer @ aiQmen, Noida; align Binmile title with HR wording.",
      },
      {
        href: "/presence/github",
        title: "GitHub",
        summary:
          "jayantrohila57 (primary), jayantaiqmen (work), jayantrohila legacy + Pages repo, Sponsors profile.",
      },
      {
        href: "/presence/linktree",
        title: "Linktree",
        summary:
          "linktr.ee/JayantRohila — 35+ outbound links; payment URLs live only in mentions ledger (no amounts).",
      },
      {
        href: "/presence/domains-handles",
        title: "Domains & handles",
        summary:
          "jayantrohila.com / .dev / .pages.dev; Twitter @jayant_rohila; extended social/dev handles → mentions table.",
      },
    ],
  },
  {
    id: "archive",
    title: "Archive",
    icon: Archive,
    intro: "93-URL footprint ledger, conflict log, and source bibliography.",
    pages: [
      {
        href: "/archive/mentions",
        title: "Mentions",
        summary:
          "Full 93-row URL table (owned site, Linktree graph, repos, deploys, payments footprint without amounts) — synced 2026-10-02.",
      },
      {
        href: "/archive/conflicts",
        title: "Conflicts",
        summary:
          "Diploma years, Binmile titles, Braeon annexure, stale VS Marketplace bio, legacy portfolio placeholders.",
      },
      {
        href: "/archive/sources",
        title: "Sources",
        summary:
          "Primary URLs + crawl inventory; Notion working SoT; freeCodeCamp cert and skills.rest indexed.",
      },
    ],
  },
  {
    id: "normalize",
    title: "Normalize",
    icon: Scale,
    intro: "Notion→git sync rules from the public pack.",
    pages: [
      {
        href: "/normalize/charter",
        title: "Charter",
        summary:
          "Notion SoT vs public slice; never publish payroll/phone/emp ID; Lucsum hub-only; skills without years-per-skill.",
      },
      {
        href: "/normalize/checklist",
        title: "Checklist",
        summary:
          "Ten-step Notion export: redact, canonicalize, update career/work/presence/mentions, refresh home teasers, build.",
      },
      {
        href: "/normalize/changelog",
        title: "Changelog",
        summary:
          "2026-10-02 Notion public pack sync (93 mentions, 23 projects, Braeon page); prior landing + Fumadocs (#22).",
      },
    ],
  },
];

const publicLinks = [
  { label: "jayantrohila.com", href: "https://jayantrohila.com" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jayant-rohila/",
  },
  { label: "GitHub", href: "https://github.com/jayantrohila57" },
  { label: "Linktree", href: "https://linktr.ee/JayantRohila" },
];

function PreviewCard({ href, title, summary }: PreviewLink) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-xl border border-fd-border bg-fd-card p-4 transition-colors hover:border-fd-primary/40 hover:bg-fd-accent/20"
    >
      <h3 className="font-medium text-fd-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-fd-muted-foreground">
        {summary}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-fd-primary">
        Read more
        <ArrowRight
          className="size-3.5 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      </span>
    </Link>
  );
}

function DocSectionBlock({ section }: { section: DocSection }) {
  const Icon = section.icon;
  return (
    <section
      id={section.id}
      className="scroll-mt-20 border-b border-fd-border py-12 last:border-b-0"
      aria-labelledby={`${section.id}-heading`}
    >
      <div className="mb-6 flex items-start gap-3">
        <span className="rounded-lg bg-fd-primary/10 p-2 text-fd-primary">
          <Icon className="size-5" aria-hidden />
        </span>
        <div>
          <h2
            id={`${section.id}-heading`}
            className="text-xl font-semibold tracking-tight"
          >
            {section.title}
          </h2>
          <p className="mt-1 text-sm text-fd-muted-foreground">{section.intro}</p>
        </div>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2">
        {section.pages.map((page) => (
          <li key={page.href}>
            <PreviewCard {...page} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function LandingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-fd-border">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fd-primary/10 via-transparent to-transparent"
          aria-hidden
        />
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 py-16 md:py-20">
          <p className="text-sm font-medium tracking-wide text-fd-muted-foreground uppercase">
            Public identity archive
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Jayant Rohila
            </h1>
            <p className="inline-flex flex-wrap items-center gap-2 text-sm text-fd-muted-foreground">
              <span className="rounded-full border border-fd-border bg-fd-secondary/50 px-3 py-1 font-medium text-fd-foreground">
                Product Engineer
              </span>
              <span>Consultant–Product Engineer at aiQmen · Noida</span>
            </p>
            <p className="max-w-3xl text-lg text-fd-muted-foreground text-pretty md:text-xl">
              This home previews every doc page (synced from the Notion public
              pack, 2026-10-02). Notion remains the working source of truth;
              this repo deploys the redacted public slice to jayantrohila.com.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/about/overview"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              Start with About
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/career/timeline"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium transition-colors hover:bg-fd-accent/30"
            >
              Career timeline
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl px-6">
        <nav
          className="sticky top-0 z-10 -mx-6 border-b border-fd-border bg-fd-background/90 px-6 py-3 backdrop-blur-md"
          aria-label="Docs sections on this site"
        >
          <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-fd-muted-foreground">
            <Compass className="size-3.5" aria-hidden />
            Jump to section
          </p>
          <ul className="flex flex-wrap gap-2">
            {docSections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="rounded-md border border-fd-border bg-fd-secondary/40 px-2.5 py-1 text-xs font-medium transition-colors hover:bg-fd-accent/50"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mb-4 flex items-center gap-2 pt-10 text-fd-muted-foreground">
          <BookOpen className="size-5" aria-hidden />
          <p className="text-sm font-medium uppercase tracking-wide">
            Full docs preview — {docSections.reduce((n, s) => n + s.pages.length, 0)} pages
          </p>
        </div>

        {docSections.map((section) => (
          <DocSectionBlock key={section.id} section={section} />
        ))}

        <p className="max-w-3xl py-10 text-sm leading-relaxed text-fd-muted-foreground">
          Every card links to the matching doc route. Public-only content: no
          compensation, HR letters, government IDs, or private contact details.
          Use the sidebar on any doc page for the same tree while reading.
        </p>
      </div>

      <footer className="mt-auto border-t border-fd-border bg-fd-secondary/20">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="inline-flex items-center gap-2 text-sm text-fd-muted-foreground">
            <Briefcase className="size-4 shrink-0" aria-hidden />
            Consultant–Product Engineer, aiQmen · docs at jayantrohila.com
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {publicLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-fd-muted-foreground underline-offset-4 hover:text-fd-foreground hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
}
