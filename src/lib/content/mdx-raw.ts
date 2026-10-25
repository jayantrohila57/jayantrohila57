import fs from "node:fs";

/** Full file contents (frontmatter + body). */
export function readMdxFile(fullPath: string): string {
  return fs.readFileSync(fullPath, "utf8");
}

/** Markdown body after YAML frontmatter. */
export function readMdxBody(fullPath: string): string {
  const raw = readMdxFile(fullPath);
  return raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "");
}
