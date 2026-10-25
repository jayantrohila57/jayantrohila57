/** Build fails if any MDX body or frontmatter string mentions these terms. */
export const CONTENT_DENYLIST = [
  "LibyUI",
  "SharePal",
  "Pattern Lab",
  "Inkly",
  "Bad Money",
  "Taskflow",
  "Image Editor",
  "Google Review App",
  "RD Group",
] as const;

export function findDenylistViolation(text: string): string | undefined {
  for (const term of CONTENT_DENYLIST) {
    if (text.includes(term)) return term;
  }
  return undefined;
}
