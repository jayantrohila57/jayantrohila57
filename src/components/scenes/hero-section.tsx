import { PortfolioHero } from "@/components/hero";
import { EfferdRail } from "@/components/efferd-rail";
import { FeatureCard } from "@/components/feature-section";
import { FullWidthDivider } from "@/components/full-width-divider";
import { SectionFrame, SectionLabel } from "@/components/primitives/section-frame";
import { profile } from "@/data/portfolio";

export function HeroSection() {
  return <PortfolioHero />;
}

export function CurrentFocusSection() {
  const { focus } = profile;
  const items = [
    { title: "Building", description: focus.building },
    { title: "Active", description: focus.active },
    { title: "Exploring", description: focus.exploring },
  ];

  return (
    <SectionFrame id="focus" border={false} className="py-12 md:py-16">
      <EfferdRail>
        <SectionLabel index="05" label="Current focus" className="px-4" />
        <div className="relative grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          <FullWidthDivider position="top" />
          {items.map((item) => (
            <FeatureCard
              feature={{ title: item.title, description: item.description }}
              key={item.title}
            />
          ))}
          <FullWidthDivider position="bottom" />
        </div>
      </EfferdRail>
    </SectionFrame>
  );
}
