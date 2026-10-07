"use client";

import { Command } from "cmdk";
import { ArrowUpRight, Copy, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useLenisScrollLock } from "@/components/smooth-scroll";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { profile, projects } from "@/data/portfolio";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useLenisScrollLock(open);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const copyEmail = useCallback(async () => {
    await navigator.clipboard.writeText(profile.social.email);
    setOpen(false);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-[var(--radius-sm)] border border-border px-2 py-1 font-mono text-[11px] text-muted transition-colors hover:text-foreground md:inline-flex"
      >
        <span>⌘K</span>
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0">
          <DialogTitle>Command</DialogTitle>
          <Command className="bg-panel" label="Portfolio command menu">
            <Command.Input
              placeholder="Navigate or search projects…"
              className="w-full border-b border-border bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted"
            />
            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="px-3 py-6 text-center text-sm text-muted">
                No results.
              </Command.Empty>
              <Command.Group
                heading="Navigate"
                className="px-2 py-2 text-[10px] font-mono tracking-widest text-muted uppercase [&_[cmdk-group-heading]]:mb-2"
              >
                <Command.Item
                  onSelect={() => {
                    router.push("/");
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded-[var(--radius-sm)] px-3 py-2 text-sm aria-selected:bg-elevated"
                >
                  Home
                </Command.Item>
                {mainNav.map((item) => (
                  <Command.Item
                    key={item.href}
                    onSelect={() => {
                      router.push(item.href);
                      setOpen(false);
                    }}
                    className="cursor-pointer rounded-[var(--radius-sm)] px-3 py-2 text-sm aria-selected:bg-elevated"
                  >
                    {item.label}
                  </Command.Item>
                ))}
                <Command.Item
                  onSelect={() => {
                    router.push("/contact");
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded-[var(--radius-sm)] px-3 py-2 text-sm aria-selected:bg-elevated"
                >
                  Contact
                </Command.Item>
              </Command.Group>
              <Command.Group
                heading="Projects"
                className="px-2 py-2 text-[10px] font-mono tracking-widest text-muted uppercase"
              >
                {projects.map((p) => (
                  <Command.Item
                    key={p.slug}
                    onSelect={() => {
                      router.push(`/work/${p.slug}`);
                      setOpen(false);
                    }}
                    className="cursor-pointer rounded-[var(--radius-sm)] px-3 py-2 text-sm aria-selected:bg-elevated"
                  >
                    {p.title}
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group
                heading="Actions"
                className="px-2 py-2 text-[10px] font-mono tracking-widest text-muted uppercase"
              >
                <Command.Item
                  onSelect={() => {
                    window.open(siteConfig.social.github, "_blank");
                    setOpen(false);
                  }}
                  className="flex cursor-pointer items-center gap-2 rounded-[var(--radius-sm)] px-3 py-2 text-sm aria-selected:bg-elevated"
                >
                  Open GitHub <ArrowUpRight className="size-3" />
                </Command.Item>
                <Command.Item
                  onSelect={() => {
                    window.location.href = `mailto:${profile.social.email}`;
                    setOpen(false);
                  }}
                  className="flex cursor-pointer items-center gap-2 rounded-[var(--radius-sm)] px-3 py-2 text-sm aria-selected:bg-elevated"
                >
                  Send email <Mail className="size-3" />
                </Command.Item>
                <Command.Item
                  onSelect={copyEmail}
                  className="flex cursor-pointer items-center gap-2 rounded-[var(--radius-sm)] px-3 py-2 text-sm aria-selected:bg-elevated"
                >
                  Copy email <Copy className="size-3" />
                </Command.Item>
                <Command.Item
                  onSelect={() => {
                    router.push(siteConfig.resumePath);
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded-[var(--radius-sm)] px-3 py-2 text-sm aria-selected:bg-elevated"
                >
                  View resume
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
