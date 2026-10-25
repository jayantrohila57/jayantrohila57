import { findDenylistViolation } from "./denylist";
import { projectSlugSet } from "./projects";
import { tagSlugSet } from "./tags";

export function assertKnownTags(tags: string[], context: string): void {
  for (const tag of tags) {
    if (!tagSlugSet.has(tag)) {
      throw new Error(
        `[content] Unknown tag "${tag}" in ${context}. Allowed: ${[...tagSlugSet].join(", ")}`,
      );
    }
  }
}

export function assertKnownProject(
  slug: string | undefined,
  context: string,
): void {
  if (!slug) return;
  if (!projectSlugSet.has(slug)) {
    throw new Error(
      `[content] Unknown project slug "${slug}" in ${context}. Allowed: ${[...projectSlugSet].join(", ")}`,
    );
  }
}

export function assertKnownStackSlugs(
  slugs: string[],
  known: ReadonlySet<string>,
  context: string,
): void {
  for (const slug of slugs) {
    if (!known.has(slug)) {
      throw new Error(`[content] Unknown stack slug "${slug}" in ${context}.`);
    }
  }
}

export function assertNoDenylist(text: string, context: string): void {
  const hit = findDenylistViolation(text);
  if (hit) {
    throw new Error(`[content] Denylist term "${hit}" found in ${context}.`);
  }
}
