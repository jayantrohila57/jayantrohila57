import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "Site Name", type: "string" }),
    defineField({ name: "siteTitle", title: "Site Title", type: "string" }),
    defineField({
      name: "siteDescription",
      title: "Site Description",
      type: "text",
    }),
    defineField({ name: "siteUrl", title: "Site URL", type: "url" }),
    defineField({
      name: "author",
      title: "Author",
      type: "object",
      fields: [
        defineField({ name: "name", title: "Name", type: "string" }),
        defineField({ name: "email", title: "Email", type: "string" }),
        defineField({ name: "role", title: "Role", type: "string" }),
        defineField({ name: "bio", title: "Bio", type: "text" }),
        defineField({ name: "location", title: "Location", type: "string" }),
        defineField({
          name: "avatar",
          title: "Avatar",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "socialLink",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
            }),
            defineField({ name: "url", title: "URL", type: "url" }),
            defineField({ name: "icon", title: "Icon Key", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "theme",
      title: "Theme",
      type: "object",
      fields: [
        defineField({
          name: "primaryColor",
          title: "Primary Color",
          type: "string",
        }),
        defineField({
          name: "backgroundColor",
          title: "Background Color",
          type: "string",
        }),
        defineField({ name: "textColor", title: "Text Color", type: "string" }),
      ],
    }),
  ],
});
