import { defineCollections, defineConfig } from "fumadocs-mdx/config";
import {
  stackFrontmatterSchema,
  updatesFrontmatterSchema,
  workFrontmatterSchema,
  writingFrontmatterSchema,
} from "./content/frontmatter-schemas";

export const writing = defineCollections({
  type: "doc",
  dir: "content/writing",
  schema: writingFrontmatterSchema,
  postprocess: {
    includeProcessedMarkdown: true,
  },
});

export const updates = defineCollections({
  type: "doc",
  dir: "content/updates",
  schema: updatesFrontmatterSchema,
});

export const work = defineCollections({
  type: "doc",
  dir: "content/work",
  schema: workFrontmatterSchema,
});

export const stack = defineCollections({
  type: "doc",
  dir: "content/stack",
  schema: stackFrontmatterSchema,
});

export default defineConfig({});
