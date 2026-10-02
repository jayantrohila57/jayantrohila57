import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { Code2, Link2, Mail } from "lucide-react";

const cards = [
  {
    title: "Email",
    description: "Best for hiring or collaboration threads.",
    icon: <Mail />,
    href: `mailto:${profile.social.email}`,
    label: profile.social.email,
  },
  {
    title: "GitHub",
    description: "Repositories, issues, and public project context.",
    icon: <Code2 />,
    href: profile.social.github,
    label: "github.com/jayantrohila57",
    external: true,
  },
  {
    title: "LinkedIn",
    description: "Professional profile and work history.",
    icon: <Link2 />,
    href: profile.social.linkedin,
    label: "linkedin.com/in/jayant-rohila",
    external: true,
  },
];

export function ContactSocialCards() {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <div className="grid gap-0.5 overflow-hidden rounded-lg bg-muted p-0.5 md:grid-cols-3 dark:bg-muted/50">
        {cards.map((item) => (
          <div
            className="flex flex-col gap-3 rounded-lg bg-background px-6 py-6 shadow-xs"
            key={item.title}
          >
            <div
              className={cn(
                "flex items-center gap-x-2",
                "[&_svg]:size-4 [&_svg]:text-muted-foreground",
              )}
            >
              {item.icon}
              <h2 className="text-sm">{item.title}</h2>
            </div>
            <p className="text-muted-foreground text-sm">{item.description}</p>
            <div className="mt-1 flex items-center gap-x-2">
              <Button asChild variant="link" className="h-auto p-0">
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                ) : (
                  <a href={item.href}>{item.label}</a>
                )}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <div className="mb-8 flex max-w-md flex-col justify-center gap-2">
        <h1 className="font-bold text-2xl md:text-3xl">Contact cards</h1>
        <p className="text-base text-muted-foreground">
          Playground preview of contact-2 layout.
        </p>
      </div>
      <ContactSocialCards />
    </div>
  );
}
