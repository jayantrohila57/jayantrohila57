import { stack, updates, work, writing } from "collections/server";

export type WritingDoc = (typeof writing)[number];
export type WorkDoc = (typeof work)[number];
export type StackDoc = (typeof stack)[number];
export type UpdatesDoc = (typeof updates)[number];

type DocWithInfo = { info: { path: string; fullPath: string } };

/** Public URL slug — basename without extension (flat collections today). */
export function slugFromDoc(doc: DocWithInfo) {
  const base = doc.info.path.split("/").pop() ?? doc.info.path;
  return base.replace(/\.mdx?$/i, "");
}

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

export function getUpdatesPages(): UpdatesDoc[] {
  return updates;
}
