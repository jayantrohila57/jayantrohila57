import { FullWidthDivider } from "@/components/full-width-divider";
import {
  SectionFrame,
  SectionIntro,
  SectionLabel,
} from "@/components/primitives/section-frame";
import { stackGroups } from "@/data/portfolio";

/** Efferd `logo-cloud-1` — grouped technology labels from portfolio data. */
export function StackSection() {
  return (
    <SectionFrame id="stack" border>
      <div className="px-4 pt-2">
        <SectionLabel index="03" label="Stack" />
        <SectionIntro
          title="Tools I use."
          description="Primary technologies tied to shipped projects — not an exhaustive resume keyword list."
        />
      </div>
      <FullWidthDivider />
      <div className="divide-y divide-border">
        {stackGroups.map((group) => (
          <div key={group.id} className="px-4 py-6 md:px-6">
            <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              {group.label}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {group.items.map((item) => (
                <span
                  key={item.name}
                  className="font-mono text-xs tracking-wide text-foreground/90 uppercase md:text-sm"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <FullWidthDivider />
    </SectionFrame>
  );
}
