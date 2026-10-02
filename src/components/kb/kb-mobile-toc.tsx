"use client";

import type { TOCItemType } from "fumadocs-core/toc";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export function KbMobileToc({ toc }: { toc: TOCItemType[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <nav
      className="not-prose mb-6 border border-site-border xl:hidden"
      aria-label="On this page"
    >
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-site-muted"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        On this page
        <span aria-hidden>{open ? "−" : "+"}</span>
      </button>
      {open ? (
        <ul className="border-t border-site-border px-2 py-2">
          {toc.map((item) => (
            <li key={item.url}>
              <a
                href={item.url}
                className={cn(
                  "block py-2 text-sm text-site-muted hover:text-site-accent",
                  item.depth > 2 && "ps-3",
                  item.depth > 3 && "ps-6",
                )}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </nav>
  );
}
