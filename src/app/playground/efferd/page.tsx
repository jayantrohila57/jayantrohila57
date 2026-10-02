import type { Metadata } from "next";
import { AppShell } from "@/components/app-shell";
import { BlogsSection } from "@/components/blogs-section";
import { CallToAction } from "@/components/cta";
import { Contact } from "@/components/contact";
import { ContactSection } from "@/components/contact-section";
import { DecorIcon } from "@/components/decor-icon";
import { NotFoundPage } from "@/components/efferd-not-found";
import { FeatureSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { FullWidthDivider } from "@/components/full-width-divider";
import { GridFiller } from "@/components/grid-filler";
import { Header } from "@/components/header";
import { EfferdHeroDemo } from "@/components/hero";
import { Integrations } from "@/components/integrations";
import { LogoCloudDemo } from "@/components/logo-cloud";
import { OutlineText } from "@/components/outline-text";
import { PortfolioHero } from "@/components/hero";
import { profile } from "@/data/portfolio";
import { generatePageMetadata } from "@/config/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Efferd block playground",
  description:
    "Preview installed @efferd registry blocks. Live site routes use adapted portfolio-bound variants.",
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
          Reference preview — {profile.name} · {profile.publicHeadline}
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
            Installed registry blocks for reference. Production pages compose
            adapted variants from the same source files.
          </p>
        </header>

        <BlockFrame id="header-1" title="Header (live wiring)">
          <Header />
        </BlockFrame>

        <BlockFrame id="hero-3" title="Hero (live PortfolioHero)">
          <PortfolioHero />
        </BlockFrame>

        <BlockFrame id="hero-demo" title="Hero demo shell">
          <EfferdHeroDemo />
        </BlockFrame>

        <BlockFrame id="features-6" title="Features bento (demo)">
          <FeatureSection />
        </BlockFrame>

        <BlockFrame id="logo-cloud-1" title="Logo cloud (demo wordmarks)">
          <LogoCloudDemo />
        </BlockFrame>

        <BlockFrame id="integrations-2" title="Integrations grid (demo)">
          <Integrations />
        </BlockFrame>

        <BlockFrame id="blogs-1" title="Blogs list (demo)">
          <BlogsSection />
        </BlockFrame>

        <BlockFrame id="contact-5" title="Contact panel (live)">
          <ContactSection />
        </BlockFrame>

        <BlockFrame id="contact-2" title="Contact cards">
          <Contact />
        </BlockFrame>

        <BlockFrame id="cta-3" title="CTA (live defaults)">
          <CallToAction />
        </BlockFrame>

        <BlockFrame id="footer-4" title="Footer (live)">
          <Footer />
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
