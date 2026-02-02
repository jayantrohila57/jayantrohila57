import { getProjects } from "@/sanity/query/queries";
import { ProjectsClientPage } from "./client-page";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return <ProjectsClientPage projects={projects} />;
}
