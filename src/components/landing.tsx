import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { CareerTimeline } from "@/components/site/career-timeline";
import { PageHeader } from "@/components/site/page-header";
import { ProjectCard } from "@/components/site/project-card";
import { SectionLabel } from "@/components/site/section-label";
import { TechnologyBadge } from "@/components/site/technology-badge";
import { siteConfig } from "@/config/site";
import { flagshipProjects, projects } from "@/data/projects";
import { technologies, toolboxHighlightIds } from "@/data/technologies";

const currently = {
  role: "Product Engineer @ aiQmen",
  location: "Noida, India",
  focus:
    "Shipping web products with typed APIs and clear UX — employer deliverables stay off the public site.",
  links: [
    { label: "Work GitHub", href: "https://github.com/jayantaiqmen" },
    { label: "Career timeline", href: "/career/timeline" },
  ],
};

const openSourceHighlights = projects.filter(
  (p) => !p.flagship && p.slug !== "jayantrohila57",
).slice(0, 4);

export function LandingPage() {
  const toolbox = toolboxHighlightIds
    .map((id) => technologies.find((t) => t.id === id))
    .filter(Boolean);

  return (
    <div className="site-container pb-20">
      <section className="relative border-b border-site-border py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-1/3 max-w-md border-l border-site-border/60 opacity-40"
          aria-hidden
        />
        <PageHeader
          eyebrow="Developer home"
          title="Product engineer building web systems with evidence, not adjectives."
          description="Portfolio, career timeline, and project case studies for Jayant Rohila — full-stack work at aiQmen and open-source experiments on GitHub."
        >
          <div className="flex flex-wrap gap-3">
            <Link
              href="/work/case-studies"
              className="inline-flex items-center gap-2 border border-site-ink bg-site-ink px-4 py-2.5 text-sm font-medium text-site-paper transition-opacity hover:opacity-90"
            >
              Selected work
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 border border-site-border px-4 py-2.5 text-sm font-medium text-site-ink hover:bg-site-surface"
            >
              Resume
            </Link>
            <a
              href={siteConfig.social.github}
              rel="noreferrer noopener"
              target="_blank"
              className="inline-flex items-center gap-2 border border-site-border px-4 py-2.5 text-sm font-medium text-site-ink hover:bg-site-surface"
            >
              GitHub
            </a>
          </div>
        </PageHeader>
      </section>

      <section
        className="grid gap-8 border-b border-site-border py-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-12"
        aria-labelledby="currently-heading"
      >
        <div>
          <SectionLabel>Currently</SectionLabel>
          <h2
            id="currently-heading"
            className="mt-3 font-display text-2xl font-medium text-site-ink"
          >
            {currently.role}
          </h2>
          <p className="mt-2 font-mono text-xs text-site-muted">
            {currently.location}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-site-muted text-pretty">
            {currently.focus}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {currently.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-site-accent hover:underline"
                >
                  {link.label} →
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border border-site-border bg-site-surface p-6 font-mono text-xs leading-relaxed text-site-muted">
          <p className="text-site-ink">// workspace snapshot</p>
          <p className="mt-3">stack: TypeScript · Next.js · tRPC · Postgres</p>
          <p>shipping: product engineering @ aiQmen</p>
          <p>oss: e-commerce · env-manager · taskflow</p>
          <p className="mt-3 text-site-accent">
            → case studies document real repo architecture
          </p>
        </div>
      </section>

      <section className="border-b border-site-border py-14" aria-labelledby="work-heading">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2
              id="work-heading"
              className="mt-3 font-display text-3xl font-medium text-site-ink"
            >
              Flagship repositories
            </h2>
            <p className="mt-2 max-w-xl text-sm text-site-muted text-pretty">
              Previews are drawn from READMEs and documented patterns — not
              fabricated UI screenshots.
            </p>
          </div>
          <Link
            href="/work/projects"
            className="text-sm font-medium text-site-accent hover:underline"
          >
            All projects →
          </Link>
        </div>
        <div className="grid gap-6">
          {flagshipProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      </section>

      <section
        className="grid gap-10 border-b border-site-border py-14 lg:grid-cols-2 lg:gap-16"
        aria-labelledby="journey-heading"
      >
        <div>
          <SectionLabel>Engineering journey</SectionLabel>
          <h2
            id="journey-heading"
            className="mt-3 font-display text-3xl font-medium text-site-ink"
          >
            Career timeline
          </h2>
          <p className="mt-2 text-sm text-site-muted text-pretty">
            From ServiceNow trainee work through Binmile delivery to product
            engineering at aiQmen — dates match the public career index.
          </p>
          <Link
            href="/career/timeline"
            className="mt-4 inline-block text-sm font-medium text-site-accent hover:underline"
          >
            Full timeline & education →
          </Link>
        </div>
        <CareerTimeline compact />
      </section>

      <section className="border-b border-site-border py-14" aria-labelledby="toolbox-heading">
        <SectionLabel>Toolbox</SectionLabel>
        <h2
          id="toolbox-heading"
          className="mt-3 font-display text-3xl font-medium text-site-ink"
        >
          Technologies with repo evidence
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {toolbox.map((tech) =>
            tech ? (
              <TechnologyBadge key={tech.id} technology={tech} showEvidence />
            ) : null,
          )}
        </div>
        <Link
          href="/work/skills"
          className="mt-6 inline-block text-sm font-medium text-site-accent hover:underline"
        >
          Full skills index →
        </Link>
      </section>

      <section className="border-b border-site-border py-14" aria-labelledby="oss-heading">
        <SectionLabel>Open source</SectionLabel>
        <h2
          id="oss-heading"
          className="mt-3 font-display text-3xl font-medium text-site-ink"
        >
          More on GitHub
        </h2>
        <ul className="mt-8 divide-y divide-site-border border border-site-border">
          {openSourceHighlights.map((project) => (
            <li
              key={project.slug}
              className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium text-site-ink">{project.name}</p>
                <p className="text-sm text-site-muted">{project.summary}</p>
              </div>
              <a
                href={project.repo}
                rel="noreferrer noopener"
                target="_blank"
                className="font-mono text-xs text-site-accent hover:underline"
              >
                repository →
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="grid gap-10 py-14 md:grid-cols-2"
        aria-labelledby="about-contact-heading"
      >
        <div>
          <SectionLabel>About</SectionLabel>
          <h2
            id="about-contact-heading"
            className="mt-3 font-display text-2xl font-medium text-site-ink"
          >
            Who I am
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-site-muted text-pretty">
            I design and ship web products — full-stack applications with a
            product-minded focus. This site is the structured public record:
            career, projects, skills, and contact paths.
          </p>
          <Link
            href="/about/overview"
            className="mt-4 inline-block text-sm font-medium text-site-accent hover:underline"
          >
            Read about →
          </Link>
        </div>
        <div className="border border-site-border bg-site-surface p-6">
          <SectionLabel>Contact</SectionLabel>
          <h3 className="mt-3 font-display text-xl text-site-ink">
            Professional inquiries
          </h3>
          <p className="mt-3 text-sm text-site-muted">
            Email or LinkedIn — same addresses listed on the public about page.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm">
            <a
              href="mailto:jrohila55@gmail.com"
              className="inline-flex items-center gap-2 font-medium text-site-accent hover:underline"
            >
              <Mail className="size-4" aria-hidden />
              jrohila55@gmail.com
            </a>
            <a
              href={siteConfig.social.linkedin}
              rel="noreferrer noopener"
              target="_blank"
              className="text-site-muted hover:text-site-accent hover:underline"
            >
              LinkedIn profile →
            </a>
            <Link
              href="/contact"
              className="text-site-muted hover:text-site-accent hover:underline"
            >
              Contact page →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
