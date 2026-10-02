import Link from "next/link";
import {
  BentoPanel,
  CrosshairMark,
  SectionFrame,
  SectionLabel,
} from "@/components/primitives/section-frame";
import {
  InterfaceWindow,
  TerminalWindow,
} from "@/components/primitives/interface-window";
import { profile } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-8 pt-6 md:pb-12 md:pt-10">
      <CrosshairMark className="top-24 left-[max(1rem,4vw)]" />
      <div className="site-container">
        <p className="font-mono text-[11px] tracking-[0.25em] text-muted uppercase">
          Product Engineer · aiQmen
        </p>
        <h1 className="mt-6 max-w-4xl text-[clamp(2.75rem,10vw,5.5rem)] leading-[0.92] font-semibold tracking-tight">
          JAYANT
          <br />
          ROHILA
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {profile.shortBio}
        </p>
        <p className="mt-4 font-mono text-[11px] tracking-wide text-muted">
          {profile.metadataLine}
        </p>

        <div className="relative mt-12 border border-border bg-surface/50 p-1 md:mt-16">
          <div className="grid gap-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)_minmax(0,1fr)]">
            <InterfaceWindow title="apps/" className="h-full">
              <div className="space-y-1 text-muted">
                <div>/apps</div>
                <div className="pl-2">web</div>
                <div className="pl-2">dashboard</div>
                <div>/packages</div>
                <div className="pl-2">ui</div>
                <div className="pl-2">config</div>
              </div>
            </InterfaceWindow>
            <InterfaceWindow title="page.tsx — demo" className="h-full">
              <pre className="overflow-x-auto text-[10px] leading-relaxed text-muted">
                {`export default function Home() {
  return (
    <ProductShell>
      <DataTable rows={orders} />
    </ProductShell>
  );
}`}
              </pre>
            </InterfaceWindow>
            <TerminalWindow
              lines={[
                "$ git status",
                "● main",
                "2 files changed",
                "$ pnpm dev",
                "ready — local workspace (illustration)",
              ]}
            />
          </div>
          <p className="border-t border-border px-3 py-2 font-mono text-[10px] text-muted">
            Workspace composition — representative layout, not a live terminal.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-y border-border py-4 font-mono text-[10px] tracking-wider text-muted">
          {profile.heroStrip.map((tech, i) => (
            <span key={tech} className="flex items-center gap-4">
              {i > 0 ? (
                <span aria-hidden className="hidden text-border sm:inline">
                  /
                </span>
              ) : null}
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/work"
            className="inline-flex h-10 items-center rounded-[var(--radius-sm)] border border-accent/40 bg-accent/10 px-4 text-sm text-accent hover:bg-accent/20"
          >
            View selected work
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-10 items-center rounded-[var(--radius-sm)] border border-border px-4 text-sm text-muted hover:text-foreground"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CurrentFocusSection() {
  const { focus } = profile;
  return (
    <SectionFrame id="focus">
      <SectionLabel index="04" label="Current focus" />
      <div className="grid gap-1 md:grid-cols-3">
        <BentoPanel>
          <p className="font-mono text-[10px] text-muted uppercase">Building</p>
          <p className="mt-2 text-sm">{focus.building}</p>
        </BentoPanel>
        <BentoPanel>
          <p className="font-mono text-[10px] text-muted uppercase">Active</p>
          <p className="mt-2 flex items-center gap-2 text-sm">
            <span className="size-1.5 rounded-full bg-accent" />
            {focus.active}
          </p>
        </BentoPanel>
        <BentoPanel>
          <p className="font-mono text-[10px] text-muted uppercase">Exploring</p>
          <p className="mt-2 text-sm">{focus.exploring}</p>
        </BentoPanel>
      </div>
    </SectionFrame>
  );
}
