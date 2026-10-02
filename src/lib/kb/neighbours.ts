import { findNeighbour } from "fumadocs-core/page-tree";
import type { InferPageType } from "fumadocs-core/source";
import type { source } from "@/lib/source";

type Loader = typeof source;
type Page = InferPageType<Loader>;

export function getPageNeighbours(loader: Loader, page: Page) {
  const tree = loader.getPageTree();
  const { previous, next } = findNeighbour(tree, page.url);

  return {
    previous: previous
      ? { name: String(previous.name), url: previous.url }
      : undefined,
    next: next ? { name: String(next.name), url: next.url } : undefined,
  };
}
