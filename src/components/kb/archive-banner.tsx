import { Callout } from "./callout";

export function ArchiveBanner() {
  return (
    <Callout variant="status" title="Archive lane">
      This section records public links, profile notes, and normalization docs —
      not primary navigation. Facts are sourced from what is already public; gaps
      stay empty.
    </Callout>
  );
}
