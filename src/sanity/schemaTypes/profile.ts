import { defineField, defineType } from "sanity";

export default defineType({
  name: "profile",
  title: "Profile",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
    }),
    defineField({
      name: "availability",
      title: "Availability",
      type: "object",
      fields: [
        defineField({
          name: "status",
          title: "Status",
          type: "string",
          options: {
            list: [
              { title: "Available", value: "available" },
              { title: "Limited", value: "limited" },
              { title: "Unavailable", value: "unavailable" },
            ],
            layout: "radio",
          },
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "message",
          title: "Message",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "resume",
      title: "Resume URL",
      type: "url",
    }),
    defineField({
      name: "social",
      title: "Social Links",
      type: "array",
      of: [
        {
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
        },
      ],
    }),
  ],
});
