"use client";

import { Command } from "cmdk";
import { ArrowUpRight, Copy, Mail, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { HeaderIconButton } from "@/components/layout/header-icon-button";
import { useLenisScrollLock } from "@/components/smooth-scroll";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { commandNavExtras, mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { profile, projects } from "@/data/portfolio";
import { getBlogPosts } from "@/lib/blog";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const blogPosts = getBlogPosts();

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
      <HeaderIconButton
        label="Search"
        title="Search (⌘K)"
        onClick={() => setOpen(true)}
      >
        <Search className="size-4" aria-hidden />
      </HeaderIconButton>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0">
          <DialogTitle>Command</DialogTitle>
          <Command className="bg-panel" label="Portfolio command menu">
            <Command.Input
              placeholder="Navigate or search projects…"
              className="w-full border-b border-border bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted"
            />
            <Command.List
              className="lenis-prevent max-h-80 overflow-y-auto p-2"
              data-lenis-prevent=""
            >
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
                {commandNavExtras.map((item) => (
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
              </Command.Group>
              <Command.Group
                heading="Writing"
                className="px-2 py-2 text-[10px] font-mono tracking-widest text-muted uppercase"
              >
                <Command.Item
                  onSelect={() => {
                    router.push("/writing");
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded-[var(--radius-sm)] px-3 py-2 text-sm aria-selected:bg-elevated"
                >
                  Writing overview
                </Command.Item>
                <Command.Item
                  onSelect={() => {
                    router.push("/writing#case-studies");
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded-[var(--radius-sm)] px-3 py-2 text-sm aria-selected:bg-elevated"
                >
                  Case studies index
                </Command.Item>
                <Command.Item
                  onSelect={() => {
                    router.push("/writing#engineering");
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded-[var(--radius-sm)] px-3 py-2 text-sm aria-selected:bg-elevated"
                >
                  Engineering notes
                </Command.Item>
                <Command.Item
                  onSelect={() => {
                    router.push("/writing#blog");
                    setOpen(false);
                  }}
                  className="cursor-pointer rounded-[var(--radius-sm)] px-3 py-2 text-sm aria-selected:bg-elevated"
                >
                  Blog posts
                </Command.Item>
                {blogPosts.map((post) => (
                  <Command.Item
                    key={post.slug}
                    onSelect={() => {
                      router.push(`/writing/${post.slug}`);
                      setOpen(false);
                    }}
                    className="cursor-pointer rounded-[var(--radius-sm)] px-3 py-2 text-sm aria-selected:bg-elevated"
                  >
                    {post.title}
                  </Command.Item>
                ))}
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
