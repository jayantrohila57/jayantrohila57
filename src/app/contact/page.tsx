import type { Metadata } from "next";
import { LayoutWrapper } from "@/components/layout";
import { Section } from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import {
  AvailabilityStatus,
  EmailCTA,
  SocialConnections,
} from "@/components/sections/contact";

import { getProfile } from "@/sanity/query/queries";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with me for project inquiries, collaborations, or just to say hello.",
};

export default async function ContactPage() {
  const profile = await getProfile();

  if (!profile) {
    return null;
  }

  return (
    <LayoutWrapper>
      <SectionHeader
        subtitle="Contact"
        title="Get in Touch"
        description="I'm always interested in hearing about new projects and opportunities."
      />
      <Section>
        <AvailabilityStatus profile={profile} />
        <EmailCTA />
        <SocialConnections social={profile.social} />
      </Section>
    </LayoutWrapper>
  );
}
