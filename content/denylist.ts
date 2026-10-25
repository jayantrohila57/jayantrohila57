/** Build fails if any MDX body or frontmatter string mentions these terms (case-insensitive). */
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
  "Codethread Black",
  "jayantaiqmen",
] as const;

export function findDenylistViolation(text: string): string | undefined {
  const lower = text.toLowerCase();
  for (const term of CONTENT_DENYLIST) {
    if (lower.includes(term.toLowerCase())) {
      return term;
    }
  }
  return undefined;
}
