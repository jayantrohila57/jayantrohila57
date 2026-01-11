import { defineType, defineField } from "sanity";

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",

  fields: [
    defineField({
      name: "company",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "companyUrl",
      title: "Company Website",
      type: "url",
    }),

    defineField({
      name: "logo",
      title: "Company Logo",
      type: "image",
      options: { hotspot: true },
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "full-time" },
          { title: "Part-time", value: "part-time" },
          { title: "Contract", value: "contract" },
          { title: "Freelance", value: "freelance" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "roles",
      title: "Roles at Company",
      type: "array",
      of: [
        {
          type: "object",
          name: "role",
          fields: [
            defineField({
              name: "title",
              title: "Role Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "startDate",
              title: "Start Date",
              type: "date",
              options: { dateFormat: "MMM YYYY" },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "endDate",
              title: "End Date",
              type: "string",
              description: "Use 'Present' if currently working",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "description",
              title: "Role Description",
              type: "text",
              rows: 3,
            }),

            defineField({
              name: "achievements",
              title: "Key Achievements",
              type: "array",
              of: [{ type: "string" }],
            }),

            defineField({
              name: "tech",
              title: "Technologies Used",
              type: "array",
              of: [{ type: "string" }],
              options: {
                layout: "tags",
              },
            }),
          ],
        },
      ],
    }),
  ],
});
