import { Section, SectionHeader } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import profile from "@/data/profile.json";
import { siteConfig } from "@/data/site.config";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Newspaper,
  ArrowUpRight,
} from "lucide-react";

import { SvglIcon, isSvglIcon } from "@/components/ui/icon";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  GitHub: Github,
  Linkedin,
  LinkedIn: Linkedin,
  Twitter,
  Mail,
  Newspaper,
  DevTo: Newspaper,
};

export function SocialLinksSection() {
  return (
    <Section className="bg-muted/30">
      <SectionHeader
        subtitle="Connect"
        title="Let's Get in Touch"
        description="I'm always open to discussing new projects, creative ideas, or opportunities."
        align="center"
      />

      <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
        {profile.social.map((social) => {
          const isSvgl = isSvglIcon(social.icon);
          const LucideIcon = iconMap[social.icon];

          if (!isSvgl && !LucideIcon) return null;

          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border bg-card p-4 transition-all hover:border-primary hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {isSvgl ? (
                  <SvglIcon
                    name={social.icon as any}
                    className="h-5 w-5 text-current"
                  />
                ) : (
                  <LucideIcon className="h-5 w-5" />
                )}
              </div>
              <div className="flex-1">
                <p className="font-medium">{social.platform}</p>
                <p className="text-sm text-muted-foreground">{social.label}</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <Button asChild size="lg">
          <a href={`mailto:${siteConfig.author.email}`}>
            <Mail className="mr-2 h-4 w-4" />
            Send Me an Email
          </a>
        </Button>
      </div>
    </Section>
  );
}
