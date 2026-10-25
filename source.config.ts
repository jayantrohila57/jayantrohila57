import { defineCollections, defineConfig } from "fumadocs-mdx/config";
import { z } from "zod";
import { assertNoDenylist } from "./content/content-validation";
import { PROJECT_SLUGS } from "./content/projects";
import { TAG_SLUGS } from "./content/tags";

const tagSchema = z.array(z.enum(TAG_SLUGS)).max(5);

const projectRefSchema = z.enum(PROJECT_SLUGS).optional();

const sourceEntrySchema = z.object({
  type: z.enum(["pr", "issue", "release", "commit"]),
  repo: z.string().min(1),
  id: z.string().min(1),
});

const categorySchema = z.enum([
  "engineering",
  "ai",
  "building-loftlancer",
  "project",
  "career",
]);

const distributionSchema = z
  .object({
    x: z.string().optional(),
    linkedin: z.string().optional(),
    devto: z.string().optional(),
    hashnode: z.string().optional(),
    newsletter: z.boolean().optional(),
  })
  .optional();

const caseStudyAtGlanceSchema = z.object({
  role: z.string(),
  duration: z.string(),
  team: z.string(),
  stack: z.string(),
});

const caseStudySchema = z.object({
  atGlance: caseStudyAtGlanceSchema,
  problem: z.string(),
  contribution: z.string(),
  challenges: z.array(z.string()),
  features: z.array(z.string()),
  decisions: z.array(z.string()),
  metrics: z
    .array(z.object({ label: z.string(), value: z.string() }))
    .optional(),
  outcome: z.string(),
  maturity: z.string().optional(),
});

const projectSectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.array(z.string()),
});

function validateDocStrings(data: Record<string, unknown>, path: string) {
  const serialized = JSON.stringify(data);
  assertNoDenylist(serialized, path);
}

export const writing = defineCollections({
  type: "doc",
  dir: "content/writing",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    updated: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .optional(),
    category: categorySchema,
    tags: tagSchema,
    project: projectRefSchema,
    stack: z.array(z.string()).optional(),
    sources: z.array(sourceEntrySchema).optional(),
    distribution: distributionSchema,
    og: z.string().optional(),
  }),
  postprocess: {
    includeProcessedMarkdown: true,
  },
});

export const updates = defineCollections({
  type: "doc",
  dir: "content/updates",
  schema: z.object({
    title: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    category: categorySchema,
    summary: z.string().optional(),
    description: z.string().optional(),
    project: projectRefSchema,
    tags: tagSchema,
    stack: z.array(z.string()).optional(),
    sources: z.array(sourceEntrySchema).min(1),
    status: z.enum(["shipped", "in-progress"]),
    distribution: distributionSchema,
  }),
});

export const work = defineCollections({
  type: "doc",
  dir: "content/work",
  schema: z
    .object({
      title: z.string(),
      summary: z.string(),
      repo: z.string().url().optional(),
      live: z.string().url().optional(),
      years: z.string(),
      role: z.string().optional(),
      stack: z.array(z.string()),
      featured: z.boolean(),
      order: z.number().int(),
      eyebrow: z.string(),
      description: z.string(),
      status: z.string(),
      categories: z.array(z.string()),
      workEngagement: z.enum(["personal", "professional", "freelance"]),
      visualType: z.enum([
        "dashboard",
        "ai",
        "browser",
        "terminal",
        "architecture",
        "data",
        "editor",
        "custom",
      ]),
      ogTitle: z.string().optional(),
      ogDescription: z.string().optional(),
      caseStudy: caseStudySchema.optional(),
      sections: z.array(projectSectionSchema).optional(),
    })
    .superRefine((data, _ctx) => {
      validateDocStrings(data as Record<string, unknown>, "work frontmatter");
      if (data.caseStudy) {
        validateDocStrings(
          data.caseStudy as Record<string, unknown>,
          "work caseStudy",
        );
      }
      if (data.sections) {
        for (const section of data.sections) {
          validateDocStrings(
            section as Record<string, unknown>,
            "work section",
          );
        }
      }
    }),
});

export const stack = defineCollections({
  type: "doc",
  dir: "content/stack",
  schema: z
    .object({
      name: z.string(),
      slug: z.string().regex(/^[a-z0-9-]+$/),
      area: z.enum([
        "language",
        "frontend",
        "backend",
        "data",
        "platform",
        "quality",
        "ai",
      ]),
      docsUrl: z.string().url().optional(),
      repos: z.array(z.string()).optional(),
      summary: z.string().optional(),
      snippets: z
        .array(
          z.object({
            repo: z.string(),
            path: z.string(),
            ref: z.string().optional(),
            lines: z.string().optional(),
          }),
        )
        .optional(),
      projectSlugs: z.array(z.enum(PROJECT_SLUGS)).optional(),
    })
    .superRefine((data, _ctx) => {
      validateDocStrings(data as Record<string, unknown>, `stack/${data.slug}`);
    }),
});

export default defineConfig({});
