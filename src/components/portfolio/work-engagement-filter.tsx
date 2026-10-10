"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FlexShell, GridCell, SectionBleed } from "@/components/layout/shells";
import {
  type WorkEngagement,
  workEngagementFilters,
} from "@/data/work-engagement";
import { cn } from "@/lib/utils";

function filterHref(type: WorkEngagement | "all") {
  if (type === "all") return "/work";
  return `/work?type=${type}`;
}

export function WorkEngagementFilter() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active =
    pathname === "/work"
      ? (searchParams.get("type") as WorkEngagement | null) ?? "all"
      : "all";

  if (pathname !== "/work") return null;

  return (
    <SectionBleed className="border-t border-border">
      <GridCell
        className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
      >
        <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          Filter by type
        </p>
        <FlexShell direction="row" gap="2" wrap className="flex-wrap">
          {workEngagementFilters.map((filter) => {
            const isActive = active === filter.key;
            return (
              <Link
                key={filter.key}
                href={filterHref(filter.key)}
                role="tab"
                aria-selected={isActive}
                className={cn(
                  "rounded-md border px-3 py-1.5 font-mono text-xs transition-colors",
                  isActive
                    ? "border-foreground/30 bg-foreground/10 text-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/20 hover:text-foreground",
                )}
              >
                {filter.label}
              </Link>
            );
          })}
        </FlexShell>
      </GridCell>
    </SectionBleed>
  );
}
