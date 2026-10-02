import Link from "next/link";
import { companies } from "@/data/companies";
import { CompanyMark } from "./company-mark";
import { cn } from "@/lib/cn";

type CareerTimelineProps = {
  compact?: boolean;
  className?: string;
};

export function CareerTimeline({ compact = false, className }: CareerTimelineProps) {
  return (
    <ol className={cn("relative border-l border-site-border", className)}>
      {companies.map((company, index) => (
        <li
          key={company.id}
          className={cn(
            "relative pl-8",
            compact ? "pb-8 last:pb-0" : "pb-10 last:pb-0",
          )}
        >
          <span
            className="absolute top-1 left-0 size-2 -translate-x-[calc(50%+0.5px)] rounded-full border border-site-accent bg-site-paper"
            aria-hidden
          />
          <div className="flex flex-wrap items-start gap-3">
            <CompanyMark company={company} size={compact ? "sm" : "md"} />
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[0.7rem] uppercase tracking-wide text-site-muted">
                {company.period}
                {company.location ? ` · ${company.location}` : ""}
              </p>
              <h3 className="mt-1 font-display text-lg font-medium text-site-ink">
                <Link
                  href={company.href}
                  className="hover:text-site-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-site-accent"
                >
                  {company.shortName}
                </Link>
              </h3>
              <p className="mt-0.5 text-sm text-site-muted">{company.role}</p>
              {!compact && index === 0 ? (
                <p className="mt-2 text-sm text-site-muted text-pretty">
                  Current focus — product engineering for web engagements with modern
                  TypeScript/React stacks.
                </p>
              ) : null}
            </div>
          </div>
        </li>
      ))}
      <li className="relative pl-8 pt-2">
        <span
          className="absolute top-3 left-0 size-2 -translate-x-[calc(50%+0.5px)] rounded-full border border-site-border bg-site-muted/30"
          aria-hidden
        />
        <Link
          href="/career/education"
          className="text-sm font-medium text-site-accent hover:underline"
        >
          Education & certification →
        </Link>
      </li>
    </ol>
  );
}
