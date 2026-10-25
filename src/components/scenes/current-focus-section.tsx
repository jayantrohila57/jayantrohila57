import {
  SectionFrame,
  SectionLabel,
} from "@/components/primitives/section-frame";

/** Reserved for live updates feed — structure only until P2 wiring. */
export function CurrentFocusSection() {
  return (
    <SectionFrame id="focus" border>
      <div className="pt-2">
        <SectionLabel index="05" label="Current focus" />
      </div>
    </SectionFrame>
  );
}
