"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { DecorIcon } from "@/components/decor-icon";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/portfolio";
import { Code2, Link2, Mail } from "lucide-react";

const channels = [
  {
    title: "Email",
    value: profile.social.email,
    icon: <Mail />,
    href: `mailto:${profile.social.email}`,
  },
  {
    title: "GitHub",
    value: "jayantrohila57",
    icon: <Code2 />,
    href: profile.social.github,
    external: true,
  },
  {
    title: "LinkedIn",
    value: "jayant-rohila",
    icon: <Link2 />,
    href: profile.social.linkedin,
    external: true,
  },
];

export function PortfolioContactPanel({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={cn("relative mx-auto w-full max-w-lg border border-border", className)}>
      <div className="border-b px-6 py-8">
        <div className="mb-6 flex flex-col gap-2">
          <h2 className="font-semibold text-xl md:text-2xl">Get in touch</h2>
          <p className="text-muted-foreground text-sm">
            Product engineering conversations and open-source questions — no
            phone or form spam.
          </p>
        </div>
        <div className="grid gap-2 md:grid-cols-1">
          {channels.map((item) => (
            <div className="flex items-center gap-4 p-2" key={item.title}>
              <div className="[&_svg]:size-5 [&_svg]:text-muted-foreground">
                {item.icon}
              </div>
              <div className="flex flex-col gap-y-0.5">
                <h3 className="text-sm">{item.title}</h3>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-xs hover:text-foreground"
                  >
                    {item.value}
                  </a>
                ) : (
                  <div className="flex items-center gap-2">
                    <a
                      href={item.href}
                      className="text-muted-foreground text-xs hover:text-foreground"
                    >
                      {item.value}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="text-[10px] text-muted-foreground hover:text-foreground"
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {profile.openToOpportunities ? (
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            Open to opportunities
          </p>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-3 px-6 py-6">
        <Button asChild variant="accent">
          <a href={`mailto:${profile.social.email}`}>Send email</a>
        </Button>
        <Button asChild variant="outline">
          <Link href={siteConfig.resumePath}>View resume</Link>
        </Button>
      </div>
      <DecorIcon position="top-left" />
      <DecorIcon position="top-right" />
      <DecorIcon position="bottom-left" />
      <DecorIcon position="bottom-right" />
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
