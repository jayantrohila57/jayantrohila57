import { ArrowRight, BookOpen, Briefcase, Globe, Layers } from "lucide-react";
import Link from "next/link";

const primaryCtas = [
  {
    href: "/about/overview",
    label: "About overview",
    description: "Purpose of this site and how the archive is organized",
  },
  {
    href: "/career/timeline",
    label: "Career timeline",
    description: "Roles from Teevro through aiQmen",
  },
];

const secondaryCtas = [
  {
    href: "/work/projects",
    label: "Work",
    description: "Public projects including bad-money",
    icon: Layers,
  },
  {
    href: "/presence/website",
    label: "Presence",
    description: "Canonical links and handles",
    icon: Globe,
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

export function LandingPage() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-fd-border">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fd-primary/10 via-transparent to-transparent"
          aria-hidden
        />
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-6 py-16 md:py-24">
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
              <span>at aiQmen · Noida</span>
            </p>
            <p className="max-w-2xl text-lg text-fd-muted-foreground text-pretty md:text-xl">
              Product engineer and consultant building software with a public,
              versioned identity docs site — one consistent story across the web,
              with Notion as the working source of truth behind these pages.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {primaryCtas.map((cta) => (
              <Link
                key={cta.href}
                href={cta.href}
                className="group inline-flex min-w-[min(100%,14rem)] flex-col gap-1 rounded-xl border border-fd-border bg-fd-card px-5 py-4 text-start transition-colors hover:border-fd-primary/40 hover:bg-fd-accent/30"
              >
                <span className="inline-flex items-center gap-2 font-medium">
                  {cta.label}
                  <ArrowRight
                    className="size-4 text-fd-muted-foreground transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
                <span className="text-sm text-fd-muted-foreground">
                  {cta.description}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-14">
        <div className="mb-8 flex items-center gap-2 text-fd-muted-foreground">
          <BookOpen className="size-5" aria-hidden />
          <h2 className="text-sm font-medium tracking-wide uppercase">
            Explore the docs
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {secondaryCtas.map(({ href, label, description, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-start gap-4 rounded-xl border border-fd-border bg-fd-secondary/30 p-5 transition-colors hover:bg-fd-accent/40"
            >
              <span className="rounded-lg bg-fd-primary/10 p-2 text-fd-primary">
                <Icon className="size-5" aria-hidden />
              </span>
              <div>
                <p className="font-medium">{label}</p>
                <p className="mt-1 text-sm text-fd-muted-foreground">
                  {description}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-fd-muted-foreground leading-relaxed">
          Browse About, Career, Work, Presence, Archive, and Normalize from any
          doc page sidebar. Content here is public-only: no compensation, HR
          letters, government IDs, or private contact details on the landing
          page.
        </p>
      </section>

      <footer className="mt-auto border-t border-fd-border bg-fd-secondary/20">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
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
