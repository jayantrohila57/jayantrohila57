import Link from "next/link";
import { SectionLabel } from "@/components/site/section-label";
import type { KbSection } from "@/lib/kb/page-context";
import { getSectionLabel } from "@/lib/kb/page-context";
import { cn } from "@/lib/cn";

type Crumb = { label: string; href?: string };

export function DocHero({
  section,
  breadcrumbs,
  title,
  description,
  meta,
  archive,
  className,
}: {
  section: KbSection | "root";
  breadcrumbs: Crumb[];
  title: string;
  description?: string;
  meta?: string[];
  archive?: boolean;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "not-prose mb-8 border-b border-site-border pb-8",
        archive && "border-dashed",
        className,
      )}
    >
      <nav aria-label="Breadcrumb" className="mb-4 overflow-x-auto">
        <ol className="flex flex-wrap items-center gap-1 font-mono text-[0.65rem] text-site-muted">
          {breadcrumbs.map((crumb, i) => (
            <li key={`${crumb.label}-${i}`} className="flex items-center gap-1">
              {i > 0 ? <span aria-hidden className="opacity-50">/</span> : null}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-site-accent whitespace-nowrap"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-site-ink whitespace-nowrap">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <SectionLabel>
        {archive ? "Archive · " : ""}
        {getSectionLabel(section)}
      </SectionLabel>
      <h1 className="mt-3 max-w-3xl font-display text-3xl font-medium tracking-tight text-balance text-site-ink md:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-[70ch] text-lg leading-relaxed text-site-muted text-pretty">
          {description}
        </p>
      ) : null}
      {meta && meta.length > 0 ? (
        <ul className="mt-5 flex flex-wrap gap-2">
          {meta.map((item) => (
            <li
              key={item}
              className="border border-site-border px-2 py-1 font-mono text-[0.65rem] text-site-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
