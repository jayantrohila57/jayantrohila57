import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "seoSettings",
  title: "SEO Settings",
  type: "document",
  fields: [
    defineField({
      name: "titleTemplate",
      title: "Title Template",
      type: "string",
    }),
    defineField({
      name: "defaultTitle",
      title: "Default Title",
      type: "string",
    }),
    defineField({
      name: "defaultDescription",
      title: "Default Description",
      type: "text",
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "openGraph",
      title: "Open Graph",
      type: "object",
      fields: [
        defineField({ name: "type", title: "Type", type: "string" }),
        defineField({ name: "locale", title: "Locale", type: "string" }),
        defineField({ name: "siteName", title: "Site Name", type: "string" }),
        defineField({
          name: "defaultImage",
          title: "Default Image",
          type: "image",
          options: { hotspot: true },
          fields: [defineField({ name: "alt", title: "Alt", type: "string" })],
        }),
      ],
    }),
    defineField({
      name: "twitter",
      title: "Twitter",
      type: "object",
      fields: [
        defineField({ name: "card", title: "Card", type: "string" }),
        defineField({ name: "site", title: "Site", type: "string" }),
        defineField({ name: "creator", title: "Creator", type: "string" }),
      ],
    }),
  ],
});
