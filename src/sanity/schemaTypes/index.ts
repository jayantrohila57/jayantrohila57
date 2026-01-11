import type { SchemaTypeDefinition } from "sanity";
import { authorType } from "./authorType";
import { blockContentType } from "./blockContentType";
import caseStudy from "./caseStudy";
import { categoryType } from "./categoryType";
import experience from "./experience";
import { postType } from "./postType";
import profile from "./profile";
import project from "./project";
import seoSettings from "./seoSettings";
import siteSettings from "./siteSettings";
import skills from "./skills";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    experience,
    skills,
    profile,
    project,
    caseStudy,
    seoSettings,
    siteSettings,
  ],
};
