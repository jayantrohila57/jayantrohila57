import Link from "next/link";
import { cn } from "@/lib/cn";
import type { Company } from "@/data/companies";

type CompanyMarkProps = {
  company: Company;
  size?: "sm" | "md" | "lg";
  linked?: boolean;
  className?: string;
};

const sizeClasses = {
  sm: "size-8 text-[0.65rem]",
  md: "size-10 text-xs",
  lg: "size-12 text-sm",
};

export function CompanyMark({
  company,
  size = "md",
  linked = true,
  className,
}: CompanyMarkProps) {
  const inner = (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-sm border border-site-border bg-site-surface font-mono font-semibold text-site-accent",
        sizeClasses[size],
        className,
      )}
      aria-hidden={linked}
    >
      {company.monogram}
    </span>
  );

  if (!linked) return inner;

  return (
    <Link
      href={company.href}
      className="rounded-sm transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-site-accent"
      aria-label={`${company.shortName} — ${company.role}`}
    >
      {inner}
    </Link>
  );
}
