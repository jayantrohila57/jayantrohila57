import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { BlogsSection } from "@/components/blogs-section";
import { CallToAction } from "@/components/cta";
import { Contact } from "@/components/contact";
import { ContactSection } from "@/components/contact-section";
import { DecorIcon } from "@/components/decor-icon";
import { NotFoundPage } from "@/components/efferd-not-found";
import { FeatureSection } from "@/components/feature-section";
import { FullWidthDivider } from "@/components/full-width-divider";
import { GridFiller } from "@/components/grid-filler";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero";
import { Integrations } from "@/components/integrations";
import { LogoCloud } from "@/components/logo-cloud";
import { OutlineText } from "@/components/outline-text";
import { profile } from "@/data/portfolio";
import { generatePageMetadata } from "@/config/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Efferd block playground",
  description:
    "Preview installed @efferd registry blocks with placeholder copy before homepage wiring.",
  path: "/playground/efferd",
  noIndex: true,
});

function BlockFrame({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-border py-16" id={id}>
      <div className="mb-8 px-4">
        <p className="font-mono text-[10px] text-muted uppercase tracking-widest">
          @efferd/{id}
        </p>
        <h2 className="mt-2 font-medium text-xl">{title}</h2>
        <p className="mt-1 text-muted text-sm">
          Placeholder preview — {profile.name} · {profile.publicHeadline}
        </p>
      </div>
      {children}
    </section>
  );
}

export default function EfferdPlaygroundPage() {
  return (
    <div className="min-h-dvh bg-background">
      <div className="mx-auto max-w-5xl border-x">
        <header className="border-b px-4 py-8">
          <h1 className="font-semibold text-2xl">Efferd block playground</h1>
          <p className="mt-2 max-w-2xl text-muted text-sm">
            Reference preview of installed blocks. Live landing uses the same components
            with portfolio data on `/`.
          </p>
        </header>

        <BlockFrame id="header-1" title="Header">
          <Header />
        </BlockFrame>

        <BlockFrame id="hero-3" title="Hero (hero-3 installed; hero-2 overwrote shared hero.tsx)">
          <HeroSection />
        </BlockFrame>

        <BlockFrame id="features-6" title="Features bento">
          <FeatureSection />
        </BlockFrame>

        <BlockFrame id="logo-cloud-1" title="Logo cloud">
          <LogoCloud />
        </BlockFrame>

        <BlockFrame id="integrations-2" title="Integrations grid">
          <Integrations />
        </BlockFrame>

        <BlockFrame id="blogs-1" title="Blogs list">
          <BlogsSection />
        </BlockFrame>

        <BlockFrame id="contact-5" title="Contact panel">
          <div className="px-4">
            <ContactSection />
          </div>
        </BlockFrame>

        <BlockFrame id="contact-2" title="Contact cards">
          <Contact />
        </BlockFrame>

        <BlockFrame id="cta-3" title="CTA">
          <CallToAction />
        </BlockFrame>

        <BlockFrame id="not-found-1" title="Not found">
          <NotFoundPage />
        </BlockFrame>

        <BlockFrame id="app-shell-5" title="App shell">
          <AppShell>
            <div className="p-8 text-muted text-sm">
              App shell children slot — sample workspace content.
            </div>
          </AppShell>
        </BlockFrame>

        <BlockFrame id="helpers" title="Helpers">
          <div className="relative px-4 py-8">
            <FullWidthDivider />
            <OutlineText className="text-6xl">OUTLINE</OutlineText>
            <GridFiller className="mt-8 h-24" totalItems={5} columns={3} />
            <div className="relative mt-8 h-24 border">
              <DecorIcon position="top-left" />
              <DecorIcon position="bottom-right" />
            </div>
            <FullWidthDivider className="mt-8" />
          </div>
        </BlockFrame>
      </div>
    </div>
  );
}
