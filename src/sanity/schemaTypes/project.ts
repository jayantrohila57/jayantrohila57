import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "subtitle", title: "Subtitle", type: "string" }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({ name: "category", title: "Category", type: "string" }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "year", title: "Year", type: "number" }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alternative text", type: "string" }),
      ],
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
    }),
    defineField({
      name: "tech",
      title: "Tech Stack",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({ name: "liveUrl", title: "Live URL", type: "url" }),
    defineField({ name: "githubUrl", title: "GitHub URL", type: "url" }),
    defineField({ name: "overview", title: "Overview", type: "text", rows: 4 }),
    defineField({
      name: "architecture",
      title: "Architecture",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "challenges",
      title: "Challenges",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "challenge",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "results",
      title: "Results",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "result",
          fields: [
            defineField({ name: "metric", title: "Metric", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
            }),
          ],
        }),
      ],
    }),
  ],
});
