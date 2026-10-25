import { stack, work, writing } from "collections/server";
import {
  assertKnownStackSlugs,
  assertNoDenylist,
} from "../../../content/content-validation";

export type WritingDoc = (typeof writing)[number];
export type WorkDoc = (typeof work)[number];
export type StackDoc = (typeof stack)[number];

function slugFromDoc(doc: { info: { path: string } }) {
  const base = doc.info.path.split("/").pop() ?? doc.info.path;
  return base.replace(/\.mdx?$/i, "");
}

const stackSlugSet = new Set(stack.map((doc) => (doc as StackDoc).slug));

function validateCorpus() {
  for (const doc of writing) {
    const slug = slugFromDoc(doc);
    const { body: _b, toc: _t, structuredData: _s, _exports: _e, ...fm } = doc;
    assertNoDenylist(JSON.stringify(fm), `writing/${slug}`);
    const stackRefs = (doc as WritingDoc).stack;
    if (stackRefs?.length) {
      assertKnownStackSlugs(stackRefs, stackSlugSet, `writing/${slug}`);
    }
  }
  for (const doc of work) {
    const { body: _b, toc: _t, structuredData: _s, _exports: _e, ...fm } = doc;
    assertNoDenylist(JSON.stringify(fm), `work/${slugFromDoc(doc)}`);
  }
}

validateCorpus();

export function getWritingPages(): WritingDoc[] {
  return writing;
}

export function getWritingPage(slug: string): WritingDoc | undefined {
  return writing.find((doc) => slugFromDoc(doc) === slug);
}

export function getWorkPages(): WorkDoc[] {
  return work;
}

export function getWorkPage(slug: string): WorkDoc | undefined {
  return work.find((doc) => slugFromDoc(doc) === slug);
}

export function getStackPages(): StackDoc[] {
  return stack;
}

export { slugFromDoc };
