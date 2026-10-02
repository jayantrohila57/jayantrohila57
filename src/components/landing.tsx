import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Compass,
  Globe,
  Layers,
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
    intro: "Who I am and how to reach me.",
    pages: [
      {
        href: "/about/overview",
        title: "About",
        summary:
          "Who I am, what I build, stack highlights, and where to find my work and email.",
      },
      {
        href: "/about/bio",
        title: "Bio",
        summary:
          "Background from aiQmen and Binmile through internships, education in Saharanpur, and freeCodeCamp.",
      },
      {
        href: "/resume",
        title: "Resume",
        summary:
          "Printable resume and PDF — experience, education, skills, and selected projects.",
      },
    ],
  },
  {
    id: "career",
    title: "Career",
    icon: Briefcase,
    intro: "Where I have worked and studied.",
    pages: [
      {
        href: "/career/timeline",
        title: "Timeline",
        summary:
          "From Braeon (2021) and Teevro through Binmile to aiQmen today, plus degrees and certification.",
      },
      {
        href: "/career/aiqmen",
        title: "aiQmen",
        summary: "Current role — Product Engineer / Consultant–Product Engineer, from May 2026.",
      },
      {
        href: "/career/binmile",
        title: "Binmile",
        summary: "Associate Software Developer, 2024–2026.",
      },
      {
        href: "/career/teevro",
        title: "Teevro",
        summary: "Full stack internship, early 2023.",
      },
      {
        href: "/career/braeon",
        title: "Braeon",
        summary: "ServiceNow and software trainee experience, 2021.",
      },
      {
        href: "/career/education",
        title: "Education",
        summary: "B.Tech, diploma, and freeCodeCamp certificate.",
      },
    ],
  },
  {
    id: "work",
    title: "Work",
    icon: Layers,
    intro: "Projects, skills, and stories.",
    pages: [
      {
        href: "/work/projects",
        title: "Projects",
        summary:
          "Open source and demos — libyui, taskflow, bad-money, ai-chat, e-commerce, VS Code theme, and more.",
      },
      {
        href: "/work/case-studies",
        title: "Case studies",
        summary: "Inkly CMS, Env Manager, and Taskflow — what I built and why.",
      },
      {
        href: "/work/skills",
        title: "Skills",
        summary:
          "TypeScript, React, Next.js, Node, data stores, cloud, and the tooling I use day to day.",
      },
    ],
  },
  {
    id: "presence",
    title: "Contact & links",
    icon: Globe,
    intro: "Find me online.",
    pages: [
      {
        href: "/presence/website",
        title: "Website",
        summary: "jayantrohila.com and the GitHub repo behind this portfolio.",
      },
      {
        href: "/presence/linkedin",
        title: "LinkedIn",
        summary: "Professional profile — aiQmen, Noida.",
      },
      {
        href: "/presence/github",
        title: "GitHub",
        summary: "Personal, work, and legacy accounts.",
      },
      {
        href: "/presence/linktree",
        title: "Linktree",
        summary: "Shortcut hub for social and side links.",
      },
      {
        href: "/presence/domains-handles",
        title: "Domains & handles",
        summary: "Domains and usernames I use publicly.",
      },
      {
        href: "/archive/mentions",
        title: "Elsewhere on the web",
        summary: "Other profiles, demos, and community accounts worth knowing about.",
      },
      {
        href: "/archive/conflicts",
        title: "Profile notes",
        summary:
          "When LinkedIn, old sites, or certificates disagree — what I list here.",
      },
    ],
  },
];

const publicLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jayant-rohila/" },
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
        View
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
            Portfolio
          </p>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Jayant Rohila
            </h1>
            <p className="inline-flex flex-wrap items-center gap-2 text-sm text-fd-muted-foreground">
              <span className="rounded-full border border-fd-border bg-fd-secondary/50 px-3 py-1 font-medium text-fd-foreground">
                Product Engineer
              </span>
              <span>aiQmen · Noida</span>
            </p>
            <p className="max-w-3xl text-lg text-fd-muted-foreground text-pretty md:text-xl">
              I design and build web products — from product engineering at aiQmen
              to open-source tools on GitHub. Browse my experience, projects, and
              links below.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/work/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              View projects
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium transition-colors hover:bg-fd-accent/30"
            >
              Resume
            </Link>
            <a
              href="https://github.com/jayantrohila57"
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium transition-colors hover:bg-fd-accent/30"
            >
              GitHub
            </a>
            <Link
              href="/about/overview"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium transition-colors hover:bg-fd-accent/30"
            >
              About & contact
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-5xl px-6">
        <nav
          className="sticky top-0 z-10 -mx-6 border-b border-fd-border bg-fd-background/90 px-6 py-3 backdrop-blur-md"
          aria-label="Portfolio sections"
        >
          <p className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-fd-muted-foreground">
            <Compass className="size-3.5" aria-hidden />
            Sections
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
            Portfolio overview
          </p>
        </div>

        {docSections.map((section) => (
          <DocSectionBlock key={section.id} section={section} />
        ))}
      </div>

      <footer className="mt-auto border-t border-fd-border bg-fd-secondary/20">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-fd-muted-foreground">
            Jayant Rohila · Product Engineer · Noida
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
