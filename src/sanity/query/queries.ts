import { Experience } from "@/data/types";
import { groq } from "next-sanity";
import { client } from "../lib/client";

export const experiencesQuery = groq`
*[_type == "experience"] | order(roles[0].startDate desc) {
  _id,
  company,
  companyUrl,
  location,
  type,
  "logo": logo.asset->url,
  roles[] {
    title,
    startDate,
    endDate,
    description,
    achievements,
    tech
  }
}
`;

export const skillsQuery = groq`
*[_type == "skills"][0]{
  categories[]{
    category,
    description,
    items[]{
      name,
      icon,
      proficiency,
      description
    }
  }
}
`;

export async function getExperiences(): Promise<Experience[]> {
  return client.fetch<Experience[]>(
    experiencesQuery,
    {},
    {
      // cache: "force-cache",
      // next: { revalidate: 60 }, // ISR: refresh every 60s
    },
  );
}

export async function getSkills() {
  return client.fetch(
    skillsQuery,
    {},
    {
      // cache: "force-cache",
      // next: { revalidate: 60 }, // ISR: refresh every 60s
    },
  );
}
