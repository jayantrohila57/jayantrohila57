"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SectionFrame,
  SectionLabel,
  BentoPanel,
} from "@/components/primitives/section-frame";
import { profile } from "@/data/portfolio";
import { siteConfig } from "@/config/site";

export function AboutTeaserSection() {
  return (
    <SectionFrame id="about">
      <SectionLabel index="08" label="About" />
      <div className="grid gap-1 lg:grid-cols-2">
        <BentoPanel dominant>
          <p className="font-mono text-[10px] text-muted uppercase">Profile</p>
          <h2 className="mt-3 text-2xl font-semibold">{profile.name}</h2>
          <p className="mt-1 text-accent">{profile.title}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {profile.longBio}
          </p>
          <p className="mt-4 font-mono text-xs text-muted">{profile.location}</p>
          <Link
            href="/about"
            className="mt-6 inline-block font-mono text-xs text-accent hover:underline"
          >
            Read more →
          </Link>
        </BentoPanel>
        <BentoPanel>
          <p className="font-mono text-[10px] text-muted uppercase">Focus</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>Modern web applications (Next.js, React, TypeScript)</li>
            <li>Typed APIs and data-heavy interfaces</li>
            <li>Open-source projects with live demos on GitHub</li>
          </ul>
          <p className="mt-6 font-mono text-[10px] text-muted">
            Lucsum is an upcoming brand hub — not listed as employment on this
            site.
          </p>
        </BentoPanel>
      </div>
    </SectionFrame>
  );
}

export function ContactPanel() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.social.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
      <BentoPanel className="max-w-2xl font-mono text-sm">
        <p className="text-muted">
          <span className="text-accent">$</span> connect jayant
        </p>
        <dl className="mt-6 space-y-3">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <dt className="w-20 text-muted">email</dt>
            <dd>
              <a
                href={`mailto:${profile.social.email}`}
                className="hover:text-accent"
              >
                {profile.social.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="ml-3 text-xs text-muted hover:text-foreground"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </dd>
          </div>
          <div className="flex flex-wrap gap-x-4">
            <dt className="w-20 text-muted">github</dt>
            <dd>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                github.com/jayantrohila57
              </a>
            </dd>
          </div>
          <div className="flex flex-wrap gap-x-4">
            <dt className="w-20 text-muted">linkedin</dt>
            <dd>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                linkedin.com/in/jayant-rohila
              </a>
            </dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.social.email}`}
            className="inline-flex h-10 items-center rounded-[var(--radius-sm)] border border-accent/40 bg-accent/10 px-4 text-sm text-accent"
          >
            Send email
          </a>
          <Link
            href={siteConfig.resumePath}
            className="inline-flex h-10 items-center rounded-[var(--radius-sm)] border border-border px-4 text-sm text-muted hover:text-foreground"
          >
            View resume
          </Link>
        </div>
      </BentoPanel>
  );
}

export function ContactSection() {
  return (
    <SectionFrame id="contact">
      <SectionLabel index="09" label="Contact" />
      <ContactPanel />
    </SectionFrame>
  );
}

export function FinalCtaSection() {
  return (
    <section className="border-t border-border py-20">
      <div className="site-container text-center">
        <p className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
          Build something useful
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
          Have a product or system worth shipping?
        </h2>
        <Link
          href="/contact"
          className="mt-8 inline-flex h-11 items-center rounded-[var(--radius-sm)] border border-accent/40 bg-accent/10 px-6 text-sm text-accent hover:bg-accent/20"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
