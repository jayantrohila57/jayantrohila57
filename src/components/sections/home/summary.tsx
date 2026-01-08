import { Section } from "@/components/layout";
import SectionGrid from "@/components/layout/section-grid";
import SectionHeader from "@/components/layout/section-header";
import {
  Code2,
  Server,
  Layout,
  Cloud,
  Container,
  Bot,
  GitBranch,
  Plug,
  Kanban,
  Users,
} from "lucide-react";

export function Summary() {
  const points: { text: string; icon: React.ElementType }[] = [
    {
      text: "Proficient in developing robust and scalable backend applications using Node.js, Next.js, React, and TypeScript.",
      icon: Server,
    },
    {
      text: "2+ years of hands-on experience in full-stack software development.",
      icon: Code2,
    },
    {
      text: "Extensive experience building dynamic and user-friendly front-end interfaces with React, Tailwind, and Next.js.",
      icon: Layout,
    },
    {
      text: "Experienced in deploying and managing applications on cloud platforms (AWS, Azure, GCP), ensuring scalability and reliability.",
      icon: Cloud,
    },
    {
      text: "Implemented multi-stage Docker builds and optimized image layers, reducing final image size by 60% for faster deployments.",
      icon: Container,
    },
    {
      text: "Hands-on experience integrating AI Large Language Models (LLMs) and tools such as ChatGPT, Gemini, and Cursor IDE.",
      icon: Bot,
    },
    {
      text: "Proficient with version control systems (Git) and platforms like GitHub, GitLab, and Bitbucket.",
      icon: GitBranch,
    },
    {
      text: "Proven ability to seamlessly integrate third-party APIs and services.",
      icon: Plug,
    },
    {
      text: "Solid understanding of Agile methodologies (Scrum, Kanban) and their practical application.",
      icon: Kanban,
    },
    {
      text: "Experience working within Agile teams, participating in sprints, and contributing to iterative development.",
      icon: Users,
    },
  ];

  return (
    <>
      <SectionHeader
        subtitle="Summary"
        title="Summary About Me"
        description="A brief overview of my background, skills, and experience."
      />

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {points.map(({ text, icon: Icon }, index) => (
            <SectionGrid
              key={text}
              index={index}
              length={points.length}
              className="p-4"
            >
              <div className="flex items-start gap-3">
                <div className="border p-2 bg-card">
                  <Icon className="h-6 w-6 shrink-0 text-muted-foreground" />
                </div>
                <p className="text-xs leading-relaxed">{text}</p>
              </div>
            </SectionGrid>
          ))}
        </div>
      </Section>
    </>
  );
}
