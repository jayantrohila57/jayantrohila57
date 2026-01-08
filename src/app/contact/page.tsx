import type { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout";
import { Section, SectionHeader } from "@/components/layout/section";
import {
  SocialConnections,
  EmailCTA,
  AvailabilityStatus,
} from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me for project inquiries, collaborations, or just to say hello.",
};

export default function ContactPage() {
  return (
    <LayoutWrapper>
      <Section>
        <SectionHeader
          subtitle="Contact"
          title="Get in Touch"
          description="I'm always interested in hearing about new projects and opportunities."
          align="center"
        />
      </Section>

      <AvailabilityStatus />
      <EmailCTA />
      <SocialConnections />
    </LayoutWrapper>
  );
}
