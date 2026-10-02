import type React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { footerNavGroups } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { profile } from "@/data/portfolio";
import { ArrowRightIcon, Code2 } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const explore = footerNavGroups.find((g) => g.title === "Explore");
  const elsewhere = footerNavGroups.find((g) => g.title === "Elsewhere");

  return (
    <footer
      className={cn(
        "border-t border-border",
        "dark:bg-[radial-gradient(35%_128px_at_50%_0%,--theme(--color-foreground/.08),transparent)]",
      )}
    >
      <div className="relative mx-auto max-w-5xl px-4">
        <div className="relative grid grid-cols-1 border-x border-border md:grid-cols-3 md:divide-x">
          <div className="p-4">
            <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              {profile.name}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{profile.title}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {profile.shortBio}
            </p>
          </div>
          {explore ? (
            <LinksGroup
              links={explore.items.map((item) => ({
                title: item.label,
                href: item.href,
                external: item.external,
              }))}
              title={explore.title}
            />
          ) : null}
          <div>
            <SocialCard
              className="border-t-0 md:border-t"
              href={siteConfig.social.github}
              icon={<Code2 className="size-3.5" />}
              title="GitHub"
            />
            {elsewhere ? (
              <LinksGroup
                links={elsewhere.items
                  .filter((item) => item.label !== "GitHub")
                  .map((item) => ({
                    title: item.label,
                    href: item.href,
                    external: item.external,
                  }))}
                title={elsewhere.title}
              />
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-1 border-t border-border p-4 text-center">
        <p className="text-muted-foreground text-xs">
          © {year} {siteConfig.author.name}
        </p>
        <p className="font-mono text-[10px] text-muted-foreground">
          {profile.location} · {siteConfig.siteUrl.replace("https://", "")}
        </p>
      </div>
    </footer>
  );
}

type LinksGroupProps = {
  title: string;
  links: { title: string; href: string; external?: boolean }[];
};

function LinksGroup({ title, links }: LinksGroupProps) {
  return (
    <div className="p-3">
      <h3 className="mt-2 mb-3 font-light text-[10px] text-muted-foreground uppercase tracking-wider">
        {title}
      </h3>
      <ul className="space-y-1.5">
        {links.map((link) => (
          <li key={link.title + link.href}>
            {link.external ? (
              <a
                className="text-muted-foreground text-sm hover:text-foreground"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.title}
              </a>
            ) : (
              <Link
                className="text-muted-foreground text-sm hover:text-foreground"
                href={link.href}
              >
                {link.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialCard({
  title,
  href,
  className,
  icon,
}: React.ComponentProps<"a"> & {
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <a
      className={cn(
        "flex items-center justify-between border-y border-border p-3 text-sm hover:bg-muted dark:hover:bg-muted/50",
        className,
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex items-center gap-2 font-medium [&>svg]:shrink-0">
        {icon}
        {title}
      </span>
      <ArrowRightIcon className="size-4" />
    </a>
  );
}
