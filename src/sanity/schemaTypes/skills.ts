import { defineField, defineType } from "sanity";

export default defineType({
  name: "skills",
  title: "Skills",
  type: "document",

  fields: [
    defineField({
      name: "categories",
      title: "Skill Categories",
      type: "array",
      of: [
        {
          type: "object",
          name: "skillCategory",
          fields: [
            defineField({
              name: "category",
              title: "Category Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: "description",
              title: "Category Description",
              type: "text",
            }),

            defineField({
              name: "items",
              title: "Skills",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "skill",
                  fields: [
                    defineField({
                      name: "name",
                      title: "Skill Name",
                      type: "string",
                      validation: (Rule) => Rule.required(),
                    }),

                    defineField({
                      name: "icon",
                      title: "Icon Key",
                      type: "string",
                      description:
                        "Key used in frontend icon mapping (e.g. react, typescript, nextjs)",
                    }),

                    defineField({
                      name: "proficiency",
                      title: "Proficiency",
                      type: "string",
                      options: {
                        list: [
                          { title: "Expert", value: "expert" },
                          { title: "Advanced", value: "advanced" },
                          { title: "Intermediate", value: "intermediate" },
                          { title: "Beginner", value: "beginner" },
                        ],
                        layout: "radio",
                      },
                      validation: (Rule) => Rule.required(),
                    }),

                    defineField({
                      name: "description",
                      title: "Description",
                      type: "text",
                      rows: 2,
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
});
