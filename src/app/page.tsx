import { ContactSection } from "@/components/contact-section";
import ProfileSection from "@/components/profile-section";
import ProjectsGrid from "@/components/projects-grid";
import SkillsSection from "@/components/skills-section";
import { ModeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame";
import { Separator } from "@/components/ui/separator";
import WorkHistory from "@/components/work-history";

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

  return (
    <Frame>
      <FrameHeader>
        <div className="flex items-center justify-between w-full">
          <Avatar>
            <AvatarImage alt={profile?.name} src={profile?.avatar} />
            <AvatarFallback>{profile?.name?.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <ModeToggle />
        </div>
      </FrameHeader>
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Profile</FrameTitle>
          <FrameDescription>About and contact information</FrameDescription>
        </FrameHeader>
        <FrameHeader>
          <Separator />
        </FrameHeader>
        <ProfileSection profile={profile} />
      </FramePanel>
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Skills</FrameTitle>
          <FrameDescription>Technical skills and expertise</FrameDescription>
        </FrameHeader>
        <FrameHeader>
          <Separator />
        </FrameHeader>
        <SkillsSection skills={skills} />
      </FramePanel>
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Projects</FrameTitle>
          <FrameDescription>Featured projects and work</FrameDescription>
        </FrameHeader>
        <FrameHeader>
          <Separator />
        </FrameHeader>
        <ProjectsGrid projects={projects} />
      </FramePanel>
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Work History</FrameTitle>
          <FrameDescription>Previous work experience</FrameDescription>
        </FrameHeader>
        <FrameHeader>
          <Separator />
        </FrameHeader>
        <WorkHistory experiences={experiences} />
      </FramePanel>
      <FramePanel>
        <FrameHeader>
          <FrameTitle>Contact</FrameTitle>
          <FrameDescription>Get in touch</FrameDescription>
        </FrameHeader>
        <FrameHeader>
          <Separator />
        </FrameHeader>
        <ContactSection />
      </FramePanel>
      <FrameFooter>Footer</FrameFooter>
    </Frame>
  );
}
