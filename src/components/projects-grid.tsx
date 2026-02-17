import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/components/ui/card";
import type { Project } from "@/data/types";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="group hover:shadow-lg transition-shadow"
        >
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-lg">{project.title}</CardTitle>
                <CardDescription>{project.subtitle}</CardDescription>
              </div>
              {project.featured && (
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                  Featured
                </span>
              )}
            </div>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardPanel className="py-2">
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.duration}</span>
                  <span>•</span>
                  <span>{project.category}</span>
                </div>

                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 4).map((tech, index) => (
                      <span
                        key={`${project.id}-tech-${index}`}
                        className="inline-block px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="inline-block px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </CardPanel>
          <CardFooter className="gap-2">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant={"outline"}>Live Demo</Button>
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant={"outline"}>GitHub</Button>
              </Link>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
