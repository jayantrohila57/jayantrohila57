import { FullWidthDivider } from "@/components/full-width-divider";
import { PortfolioStackIntegrations } from "@/components/integrations";
import { LogoCloud } from "@/components/logo-cloud";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
} from "@/components/primitives/section-frame";

export function StackSection() {
  return (
    <SectionFrame id="stack" border>
      <div className="px-4 pt-2">
        <SectionLabel index="03" label="Stack" />
        <SectionIntro
          title="Technologies tied to real projects."
          description="Technologies used across shipped projects and open-source repos."
        />
      </div>
      <FullWidthDivider />
      <LogoCloud />
      <FullWidthDivider />
      <div className="border-t border-border">
        <PortfolioStackIntegrations nested />
      </div>
    </SectionFrame>
  );
}
