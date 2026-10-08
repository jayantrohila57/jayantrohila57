"use client";

import { Mail } from "lucide-react";
import { GithubIcon } from "@/components/icons/github-icon";
import { HeaderIconButton } from "@/components/layout/header-icon-button";
import { MobileNav } from "@/components/mobile-nav";
import { CommandMenu } from "@/components/navigation/command-menu";
import { TooltipProvider } from "@/components/ui/tooltip";
import { siteConfig } from "@/config/site";

function HeaderGitHubButton() {
  return (
    <HeaderIconButton
      label="GitHub"
      title="GitHub profile"
      href={siteConfig.social.github}
      external
    >
      <GithubIcon className="size-4" aria-hidden />
    </HeaderIconButton>
  );
}

function HeaderContactButton() {
  return (
    <HeaderIconButton label="Contact" title="Contact page" href="/contact">
      <Mail className="size-4" aria-hidden />
    </HeaderIconButton>
  );
}

export function HeaderActions() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="hidden items-center gap-2 md:flex">
        <HeaderGitHubButton />
        <CommandMenu />
        <HeaderContactButton />
      </div>
      <MobileNav
        githubSlot={<HeaderGitHubButton />}
        contactSlot={<HeaderContactButton />}
        commandSlot={<CommandMenu />}
      />
    </TooltipProvider>
  );
}
