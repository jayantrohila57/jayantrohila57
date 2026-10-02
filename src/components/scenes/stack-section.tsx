"use client";

import { useState } from "react";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
} from "@/components/primitives/section-frame";
import { projects, stackGroups } from "@/data/portfolio";
import { cn } from "@/lib/cn";

export function StackSection() {
  const [active, setActive] = useState<string | null>(null);

  const related =
    active &&
    projects.filter((p) =>
      stackGroups.some((g) =>
        g.items.some(
          (item) =>
            item.name === active && item.projectSlugs.includes(p.slug),
        ),
      ),
    );

  return (
    <SectionFrame id="stack">
      <SectionLabel index="03" label="Stack" />
      <SectionIntro
        title="Technologies tied to real projects."
        description="Only tools with evidence in public repositories."
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,280px)]">
        <div className="space-y-8">
          {stackGroups.map((group) => (
            <div key={group.id}>
              <p className="font-mono text-[10px] tracking-widest text-muted uppercase">
                {group.label}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(item.name)}
                      onFocus={() => setActive(item.name)}
                      onMouseLeave={() => setActive(null)}
                      onBlur={() => setActive(null)}
                      className={cn(
                        "rounded-[var(--radius-sm)] border px-3 py-2 font-mono text-xs transition-colors",
                        active === item.name
                          ? "border-accent/50 bg-accent/10 text-accent"
                          : "border-border text-muted hover:text-foreground",
                      )}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <aside className="border border-border bg-surface/80 p-4">
          <p className="font-mono text-[10px] text-muted uppercase">Used in</p>
          {active && related && related.length > 0 ? (
            <ul className="mt-3 space-y-2 text-sm">
              {related.map((p) => (
                <li key={p.slug}>{p.title}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-sm text-muted">
              Hover a technology to see linked projects.
            </p>
          )}
        </aside>
      </div>
    </SectionFrame>
  );
}
