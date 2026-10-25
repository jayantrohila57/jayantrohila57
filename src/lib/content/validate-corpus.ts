import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import type { z } from "zod";
import {
  stackFrontmatterSchema,
  updatesFrontmatterSchema,
  workFrontmatterSchema,
  writingFrontmatterSchema,
} from "../../../content/frontmatter-schemas";
import {
  assertKnownProject,
  assertKnownStackSlugs,
  assertNoDenylist,
} from "../../../content/content-validation";

const CONTENT_ROOT = path.join(process.cwd(), "content");

const COLLECTIONS = [
  { name: "writing", dir: "writing", schema: writingFrontmatterSchema },
  { name: "work", dir: "work", schema: workFrontmatterSchema },
  { name: "stack", dir: "stack", schema: stackFrontmatterSchema },
  { name: "updates", dir: "updates", schema: updatesFrontmatterSchema },
] as const;

function listMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return listMdxFiles(full);
    if (entry.name.endsWith(".mdx") || entry.name.endsWith(".md")) {
      return [full];
    }
    return [];
  });
}

function readMdxFile(filePath: string): string {
  return fs.readFileSync(filePath, "utf8");
}

function slugFromFilePath(collectionDir: string, filePath: string): string {
  const base = path.basename(filePath);
  return base.replace(/\.mdx?$/i, "");
}

function relativePath(collectionDir: string, filePath: string): string {
  return path.relative(collectionDir, filePath).replace(/\\/g, "/");
}

/** Build-time corpus checks (denylist, slugs, Zod frontmatter, project/stack refs). */
export function validateContentCorpus() {
  const stackDir = path.join(CONTENT_ROOT, "stack");
  const stackSlugSet = new Set<string>();
  for (const file of listMdxFiles(stackDir)) {
    const raw = readMdxFile(file);
    const fm = parseFrontmatter(raw, file);
    const parsed = stackFrontmatterSchema.safeParse(fm);
    if (!parsed.success) {
      throw new Error(
        `[content] Invalid stack frontmatter in ${file}: ${parsed.error.message}`,
      );
    }
    stackSlugSet.add(parsed.data.slug);
  }

  for (const collection of COLLECTIONS) {
    const collectionDir = path.join(CONTENT_ROOT, collection.dir);
    const files = listMdxFiles(collectionDir);
    const seenSlugs = new Map<string, string>();

    for (const file of files) {
      const slug = slugFromFilePath(collectionDir, file);
      const rel = relativePath(collectionDir, file);
      const prev = seenSlugs.get(slug);
      if (prev && prev !== rel) {
        throw new Error(
          `[content] Duplicate slug "${slug}" in ${collection.name}: "${prev}" and "${rel}"`,
        );
      }
      seenSlugs.set(slug, rel);

      const raw = readMdxFile(file);
      const context = `${collection.name}/${slug}`;
      assertNoDenylist(raw, context);

      const fm = parseFrontmatter(raw, file);
      const parsed = collection.schema.safeParse(fm);
      if (!parsed.success) {
        throw new Error(
          `[content] Invalid ${collection.name} frontmatter in ${file}: ${parsed.error.message}`,
        );
      }

      if (collection.name === "writing") {
        const data = parsed.data as z.infer<typeof writingFrontmatterSchema>;
        assertKnownProject(data.project, context);
        if (data.stack?.length) {
          assertKnownStackSlugs(data.stack, stackSlugSet, context);
        }
      }
      if (collection.name === "updates") {
        const data = parsed.data as z.infer<typeof updatesFrontmatterSchema>;
        if (data.project) {
          assertKnownProject(data.project, context);
        }
        if (data.stack?.length) {
          assertKnownStackSlugs(data.stack, stackSlugSet, context);
        }
      }
    }
  }
}

function parseFrontmatter(raw: string, filePath: string): unknown {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    throw new Error(`[content] Missing frontmatter in ${filePath}`);
  }
  return yaml.load(match[1]);
}
