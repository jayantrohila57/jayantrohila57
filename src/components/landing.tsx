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
      "What this site is, how it relates to Notion, and a public narrative bio.",
    pages: [
      {
        href: "/about/overview",
        title: "Overview",
        summary:
          "jayantrohila.com is a versioned public identity archive — not a legal vault. Current snapshot: Product Engineer at aiQmen (Noida), from 18 May 2026.",
      },
      {
        href: "/about/bio",
        title: "Bio",
        summary:
          "Public narrative: aiQmen, Binmile (Associate Software Developer), Teevro internship, B.Tech and diploma (Saharanpur), freeCodeCamp Responsive Web Design (Feb 2022).",
      },
    ],
  },
  {
    id: "career",
    title: "Career",
    icon: Briefcase,
    intro: "Employers, dates, and HR-aligned titles.",
    pages: [
      {
        href: "/career/timeline",
        title: "Timeline",
        summary:
          "Chronological table: aiQmen (May 2026–present), Binmile (Mar 2024–LWD 16 Apr 2026), Teevro intern (Jan–Apr 2023), education and certification rows.",
      },
      {
        href: "/career/aiqmen",
        title: "aiQmen",
        summary:
          "Product Engineer / Consultant–Product Engineer at AIQMEN DESIGNS AND TECHNOLOGIES PVT LTD; DOJ 18 May 2026; Noida.",
      },
      {
        href: "/career/binmile",
        title: "Binmile",
        summary:
          "Associate Software Developer at Binmile Technologies Pvt. Ltd., 18 Mar 2024 – 16 Apr 2026. Canonical HR title over informal SDE labels.",
      },
      {
        href: "/career/teevro",
        title: "Teevro",
        summary:
          "Full Stack Development Intern at Teevro Solutions Pvt. Ltd., 24 Jan 2023 – 30 Apr 2023.",
      },
      {
        href: "/career/education",
        title: "Education",
        summary:
          "B.Tech CS, Dev Bhoomi Group of Institutions (2020–2023); diploma CS, DWARIKADHEESH REMS (canonical 2016–2019); freeCodeCamp cert Feb 2022.",
      },
    ],
  },
  {
    id: "work",
    title: "Work",
    icon: Layers,
    intro: "Public projects, skills, and write-ups.",
    pages: [
      {
        href: "/work/projects",
        title: "Projects",
        summary:
          "bad-money open-source repo (jayantrohila57/bad-money). Lucsum noted as company/docs cross-link only — not employment.",
      },
      {
        href: "/work/case-studies",
        title: "Case studies",
        summary:
          "Draft holder for longer public write-ups when URLs are pinned; points to Projects until posts exist.",
      },
      {
        href: "/work/skills",
        title: "Skills",
        summary:
          "Product engineering, full-stack delivery, and documentation-first public identity — tied to public roles and repos.",
      },
    ],
  },
  {
    id: "presence",
    title: "Presence",
    icon: Globe,
    intro: "Canonical URLs and handles for the public web.",
    pages: [
      {
        href: "/presence/website",
        title: "Website",
        summary:
          "Primary site https://jayantrohila.com — landing at / and docs under paths like /about/overview.",
      },
      {
        href: "/presence/linkedin",
        title: "LinkedIn",
        summary: "Profile: linkedin.com/in/jayant-rohila — align titles with Career timeline.",
      },
      {
        href: "/presence/github",
        title: "GitHub",
        summary: "github.com/jayantrohila57 — includes bad-money and this docs repository.",
      },
      {
        href: "/presence/linktree",
        title: "Linktree",
        summary: "linktr.ee/JayantRohila — should mirror canonical Presence URLs.",
      },
      {
        href: "/presence/domains-handles",
        title: "Domains & handles",
        summary:
          "Inventory of public domains and social handles; no private inboxes on this site.",
      },
    ],
  },
  {
    id: "archive",
    title: "Archive",
    icon: Archive,
    intro: "Mentions, conflicts, and source bibliography.",
    pages: [
      {
        href: "/archive/mentions",
        title: "Mentions",
        summary:
          "Draft ledger for third-party citations; each entry needs a verified public URL before publish.",
      },
      {
        href: "/archive/conflicts",
        title: "Conflicts",
        summary:
          "Diploma years 2016–2019 vs 2016–2020; Binmile title variants (Associate Software Developer vs SDE).",
      },
      {
        href: "/archive/sources",
        title: "Sources",
        summary:
          "Canonical link table: site, LinkedIn, GitHub, Linktree, bad-money repo; Notion as private working SoT.",
      },
    ],
  },
  {
    id: "normalize",
    title: "Normalize",
    icon: Scale,
    intro: "Rules and workflow for keeping public facts consistent.",
    pages: [
      {
        href: "/normalize/charter",
        title: "Charter",
        summary:
          "Mission: Apple-like consistency across public identity; in/out of scope for PII and HR material.",
      },
      {
        href: "/normalize/checklist",
        title: "Checklist",
        summary:
          "Nine-step publish flow: classify fact, source, canonical field, cross-links, landing update, changelog, build.",
      },
      {
        href: "/normalize/changelog",
        title: "Changelog",
        summary:
          "Site history including Fumadocs migration (#22), landing page, and public fact fill.",
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
              This home page previews every section of the public docs — jump
              straight into About, Career, Work, Presence, Archive, or
              Normalize. Notion remains the working source of truth; git deploys
              the curated public slice to jayantrohila.com.
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
