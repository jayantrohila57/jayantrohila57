import { EfferdRail } from "@/components/efferd-rail";
import { FullWidthDivider } from "@/components/full-width-divider";
import { LogoCloud } from "@/components/logo-cloud";
import { PortfolioStackIntegrations } from "@/components/integrations";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
} from "@/components/primitives/section-frame";

export function StackSection() {
  return (
    <SectionFrame id="stack" border={false}>
      <EfferdRail>
        <div className="px-4 pt-4">
          <SectionLabel index="03" label="Stack" />
          <SectionIntro
            title="Technologies tied to real projects."
            description="Only tools with evidence in public repositories."
          />
        </div>
        <FullWidthDivider />
        <LogoCloud />
        <FullWidthDivider />
        <div className="py-4">
          <PortfolioStackIntegrations />
        </div>
      </EfferdRail>
    </SectionFrame>
  );
}
