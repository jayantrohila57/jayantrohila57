"use client";

import { Command } from "cmdk";
import { ArrowUpRight, Copy, Mail, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { HeaderIconButton } from "@/components/layout/header-icon-button";
import { useLenisScrollLock } from "@/components/smooth-scroll";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { commandNavExtras, mainNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { profile, projects } from "@/data/portfolio";
import { getBlogPosts } from "@/lib/blog";
import {
  CMDK_GROUP_HEADING_CLASS,
  INTERACTIVE_LIST_ITEM_CLASS,
} from "@/lib/design-tokens";

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
                className={CMDK_GROUP_HEADING_CLASS}
              >
                <Command.Item
                  onSelect={() => {
                    router.push("/");
                    setOpen(false);
                  }}
                  className={INTERACTIVE_LIST_ITEM_CLASS}
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
                    className={INTERACTIVE_LIST_ITEM_CLASS}
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
                    className={INTERACTIVE_LIST_ITEM_CLASS}
                  >
                    {item.label}
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group
                heading="Writing"
                className={CMDK_GROUP_HEADING_CLASS}
              >
                <Command.Item
                  onSelect={() => {
                    router.push("/writing");
                    setOpen(false);
                  }}
                  className={INTERACTIVE_LIST_ITEM_CLASS}
                >
                  Writing overview
                </Command.Item>
                <Command.Item
                  onSelect={() => {
                    router.push("/writing#case-studies");
                    setOpen(false);
                  }}
                  className={INTERACTIVE_LIST_ITEM_CLASS}
                >
                  Case studies index
                </Command.Item>
                <Command.Item
                  onSelect={() => {
                    router.push("/writing#engineering");
                    setOpen(false);
                  }}
                  className={INTERACTIVE_LIST_ITEM_CLASS}
                >
                  Engineering notes
                </Command.Item>
                <Command.Item
                  onSelect={() => {
                    router.push("/writing#blog");
                    setOpen(false);
                  }}
                  className={INTERACTIVE_LIST_ITEM_CLASS}
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
                    className={INTERACTIVE_LIST_ITEM_CLASS}
                  >
                    {post.title}
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group
                heading="Projects"
                className={CMDK_GROUP_HEADING_CLASS}
              >
                {projects.map((p) => (
                  <Command.Item
                    key={p.slug}
                    onSelect={() => {
                      router.push(`/work/${p.slug}`);
                      setOpen(false);
                    }}
                    className={INTERACTIVE_LIST_ITEM_CLASS}
                  >
                    {p.title}
                  </Command.Item>
                ))}
              </Command.Group>
              <Command.Group
                heading="Actions"
                className={CMDK_GROUP_HEADING_CLASS}
              >
                <Command.Item
                  onSelect={() => {
                    window.open(siteConfig.social.github, "_blank");
                    setOpen(false);
                  }}
                  className={cn(INTERACTIVE_LIST_ITEM_CLASS, "flex items-center gap-2")}
                >
                  Open GitHub <ArrowUpRight className="size-3" />
                </Command.Item>
                <Command.Item
                  onSelect={() => {
                    window.location.href = `mailto:${profile.social.email}`;
                    setOpen(false);
                  }}
                  className={cn(INTERACTIVE_LIST_ITEM_CLASS, "flex items-center gap-2")}
                >
                  Send email <Mail className="size-3" />
                </Command.Item>
                <Command.Item
                  onSelect={copyEmail}
                  className={cn(INTERACTIVE_LIST_ITEM_CLASS, "flex items-center gap-2")}
                >
                  Copy email <Copy className="size-3" />
                </Command.Item>
                <Command.Item
                  onSelect={() => {
                    router.push(siteConfig.resumePath);
                    setOpen(false);
                  }}
                  className={INTERACTIVE_LIST_ITEM_CLASS}
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
