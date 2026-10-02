import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function PrevNext({
  previous,
  next,
}: {
  previous?: { name: string; url: string };
  next?: { name: string; url: string };
}) {
  if (!previous && !next) return null;

  return (
    <nav
      className="not-prose mt-12 grid gap-4 border-t border-site-border pt-8 sm:grid-cols-2"
      aria-label="Continue reading"
    >
      {previous ? (
        <Link
          href={previous.url}
          className="group flex flex-col gap-1 border border-site-border p-4 hover:border-site-accent/50"
        >
          <span className="inline-flex items-center gap-1 font-mono text-[0.65rem] uppercase text-site-muted">
            <ArrowLeft className="size-3" aria-hidden />
            Previous
          </span>
          <span className="font-medium text-site-ink group-hover:text-site-accent">
            {previous.name}
          </span>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={next.url}
          className="group flex flex-col gap-1 border border-site-border p-4 text-right hover:border-site-accent/50 sm:col-start-2"
        >
          <span className="inline-flex items-center justify-end gap-1 font-mono text-[0.65rem] uppercase text-site-muted">
            Next
            <ArrowRight className="size-3" aria-hidden />
          </span>
          <span className="font-medium text-site-ink group-hover:text-site-accent">
            {next.name}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
