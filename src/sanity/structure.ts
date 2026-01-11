import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      // ===== Portfolio =====
      S.listItem()
        .title("Portfolio")
        .icon(() => "💼")
        .child(
          S.list()
            .title("Portfolio")
            .items([
              S.documentTypeListItem("profile").title("Profile"),
              S.documentTypeListItem("experience").title("Experience"),
              S.documentTypeListItem("project").title("Projects"),
              S.documentTypeListItem("skills").title("Skills"),
            ]),
        ),

      S.divider(),

      // ===== Blog =====
      S.listItem()
        .title("Blog")
        .icon(() => "📝")
        .child(
          S.list()
            .title("Blog")
            .items([
              S.documentTypeListItem("post").title("Posts"),
              S.documentTypeListItem("category").title("Categories"),
              S.documentTypeListItem("author").title("Authors"),
            ]),
        ),

      S.divider(),

      // ===== System =====
      S.listItem()
        .title("System")
        .icon(() => "⚙️")
        .child(
          S.list()
            .title("System")
            .items(
              S.documentTypeListItems().filter(
                (item) =>
                  item.getId() &&
                  ![
                    "post",
                    "category",
                    "author",
                    "profile",
                    "experience",
                    "project",
                    "skills",
                  ].includes(item.getId()!),
              ),
            ),
        ),
    ]);
