"use client";

import { Code2, Link2, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { DecorIcon } from "@/components/decor-icon";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/portfolio";
import { shellCellClassName } from "@/components/layout/shells";
import { cn } from "@/lib/utils";

const channels = [
  {
    title: "Email",
    value: profile.social.email,
    icon: <Mail />,
    href: `mailto:${profile.social.email}`,
  },
  {
    title: "GitHub",
    value: "github.com/jayantrohila57",
    icon: <Code2 />,
    href: profile.social.github,
    external: true,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/jayant-rohila",
    icon: <Link2 />,
    href: profile.social.linkedin,
    external: true,
  },
];

export function PortfolioContactPanel({
  className,
  showIntro = true,
  layout = "stacked",
  flush = false,
}: {
  className?: string;
  showIntro?: boolean;
  layout?: "stacked" | "split";
  /** Flush to page column rails — no inset card border (homepage). */
  flush?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const intro = showIntro ? (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-xl md:text-2xl">
        Let&apos;s work together
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Available for product engineering conversations, frontend architecture,
        and open-source collaboration.
      </p>
    </div>
  ) : null;

  const channelList = (
    <div className="grid gap-4">
      <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
        Contact
      </p>
      {channels.map((item) => (
        <div className="flex items-start gap-4" key={item.title}>
          <div className="[&_svg]:size-5 [&_svg]:text-muted-foreground">
            {item.icon}
          </div>
          <div className="flex min-w-0 flex-col gap-y-0.5">
            <h3 className="text-sm font-medium">{item.title}</h3>
            {item.external ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="break-all text-muted-foreground text-xs hover:text-foreground"
              >
                {item.value}
              </a>
            ) : (
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={item.href}
                  className="break-all text-muted-foreground text-xs hover:text-foreground"
                >
                  {item.value}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="text-[10px] text-muted-foreground hover:text-foreground"
                >
                  {copied ? "Copied" : "Copy email"}
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const actions = (
    <div className="flex flex-col gap-4">
      <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
        Message
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        Email works best for thoughtful product and engineering conversations.
        Include context from your repo, roadmap, or team when you reach out.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild variant="accent">
          <a href={`mailto:${profile.social.email}`}>Send email</a>
        </Button>
        <Button asChild variant="outline">
          <Link href={siteConfig.resumePath}>View resume</Link>
        </Button>
      </div>
      {profile.openToOpportunities ? (
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="size-1.5 rounded-full bg-brand" />
          Open to product engineering roles · {profile.location}
        </p>
      ) : null}
    </div>
  );

  const cellPad = shellCellClassName();
  const stackedPad = shellCellClassName();

  return (
    <div
      className={cn(
        "relative w-full",
        !flush && layout === "stacked" && "mx-auto max-w-lg border border-border",
        !flush && layout === "split" && "border border-border",
        className,
      )}
    >
      {layout === "split" ? (
        <div className="grid h-full min-h-full gap-px bg-border md:grid-cols-2">
          <div
            className={cn(
              "flex min-h-full flex-col space-y-6 bg-background",
              cellPad,
            )}
          >
            {intro}
            {channelList}
          </div>
          <div className={cn("flex min-h-full flex-col bg-background", cellPad)}>
            {actions}
          </div>
        </div>
      ) : (
        <>
          <div className={cn("space-y-6 border-b", stackedPad)}>
            {intro}
            {channelList}
          </div>
          <div className={cn(stackedPad, !flush && "py-6")}>{actions}</div>
        </>
      )}
      {!flush ? (
        <>
          <DecorIcon position="top-left" />
          <DecorIcon position="top-right" />
          <DecorIcon position="bottom-left" />
          <DecorIcon position="bottom-right" />
        </>
      ) : null}
    </div>
  );
}

export function ContactSection() {
  return (
    <div className="px-4 py-8">
      <PortfolioContactPanel />
    </div>
  );
}
