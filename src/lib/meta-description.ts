export const META_DESCRIPTION_MAX_LENGTH = 160;

/** Trim snippet copy for meta, Open Graph, and Twitter (search engines ~150–160 chars). */
export function toMetaDescription(
  text: string,
  maxLength = META_DESCRIPTION_MAX_LENGTH,
): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) {
    return normalized;
  }
  const slice = normalized.slice(0, maxLength - 1);
  const lastSpace = slice.lastIndexOf(" ");
  const trimmed =
    lastSpace > maxLength * 0.6 ? slice.slice(0, lastSpace) : slice;
  return `${trimmed.trimEnd()}…`;
}
