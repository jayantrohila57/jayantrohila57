import {
  getExperiences,
  getProfile,
  getProjects,
  getSkills,
} from "@/sanity/query/queries";

export default async function HomePage() {
  const [experiences, skills, projects, profile] = await Promise.all([
    getExperiences(),
    getSkills(),
    getProjects(),
    getProfile(),
  ]);

  return <div className=""></div>;
}
