import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "caseStudy",
  title: "Case Study",
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
    defineField({ name: "client", title: "Client", type: "string" }),
    defineField({ name: "industry", title: "Industry", type: "string" }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "year", title: "Year", type: "number" }),
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
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "problem",
      title: "Problem",
      type: "object",
      fields: [
        defineField({ name: "summary", title: "Summary", type: "text" }),
        defineField({
          name: "details",
          title: "Details",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
      ],
    }),

    defineField({
      name: "solution",
      title: "Solution",
      type: "object",
      fields: [
        defineField({ name: "summary", title: "Summary", type: "text" }),
        defineField({
          name: "approach",
          title: "Approach",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
        }),
        defineField({
          name: "tech",
          title: "Tech",
          type: "array",
          of: [defineArrayMember({ type: "string" })],
          options: { layout: "tags" },
        }),
      ],
    }),

    defineField({
      name: "impact",
      title: "Impact",
      type: "object",
      fields: [
        defineField({ name: "summary", title: "Summary", type: "text" }),
        defineField({
          name: "metrics",
          title: "Metrics",
          type: "array",
          of: [
            defineArrayMember({
              type: "object",
              name: "metric",
              fields: [
                defineField({ name: "label", title: "Label", type: "string" }),
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
    }),

    defineField({
      name: "testimonial",
      title: "Testimonial",
      type: "object",
      fields: [
        defineField({ name: "quote", title: "Quote", type: "text" }),
        defineField({ name: "author", title: "Author", type: "string" }),
        defineField({ name: "role", title: "Role", type: "string" }),
      ],
    }),
  ],
});
