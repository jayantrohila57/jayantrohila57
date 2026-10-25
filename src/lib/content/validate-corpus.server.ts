import "server-only";

import { stack, updates, work, writing } from "collections/server";
import {
  assertKnownProject,
  assertKnownStackSlugs,
  assertNoDenylist,
} from "../../../content/content-validation";
import { readMdxFile } from "@/lib/content/mdx-raw";
import type { StackDoc, UpdatesDoc, WritingDoc } from "@/lib/content/source";
import { slugFromDoc } from "@/lib/content/source";

const stackSlugSet = new Set(stack.map((doc) => (doc as StackDoc).slug));

function assertUniqueSlugs(
  collection: string,
  docs: { info: { path: string; fullPath: string } }[],
) {
  const seen = new Map<string, string>();
  for (const doc of docs) {
    const slug = slugFromDoc(doc);
    const prev = seen.get(slug);
    if (prev && prev !== doc.info.path) {
      throw new Error(
        `[content] Duplicate slug "${slug}" in ${collection}: "${prev}" and "${doc.info.path}"`,
      );
    }
    seen.set(slug, doc.info.path);
  }
}

function validateDocFile(doc: { info: { fullPath: string } }, context: string) {
  const raw = readMdxFile(doc.info.fullPath);
  assertNoDenylist(raw, context);
}

export function validateContentCorpus() {
  assertUniqueSlugs("writing", writing);
  assertUniqueSlugs("work", work);
  assertUniqueSlugs("stack", stack);
  assertUniqueSlugs("updates", updates);

  for (const doc of writing) {
    const slug = slugFromDoc(doc);
    const context = `writing/${slug}`;
    validateDocFile(doc, context);
    assertKnownProject((doc as WritingDoc).project, context);
    const stackRefs = (doc as WritingDoc).stack;
    if (stackRefs?.length) {
      assertKnownStackSlugs(stackRefs, stackSlugSet, context);
    }
  }

  for (const doc of work) {
    validateDocFile(doc, `work/${slugFromDoc(doc)}`);
  }

  for (const doc of stack) {
    validateDocFile(doc, `stack/${(doc as StackDoc).slug}`);
  }

  for (const doc of updates) {
    const slug = slugFromDoc(doc);
    const context = `updates/${slug}`;
    validateDocFile(doc, context);
    const project = (doc as UpdatesDoc).project;
    if (project) {
      assertKnownProject(project, context);
    }
    const stackRefs = (doc as UpdatesDoc).stack;
    if (stackRefs?.length) {
      assertKnownStackSlugs(stackRefs, stackSlugSet, context);
    }
  }
}

validateContentCorpus();
