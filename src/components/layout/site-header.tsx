"use client";

import { Header } from "@/components/header";
import { CommandMenu } from "@/components/navigation/command-menu";

export function SiteHeader() {
  return <Header commandSlot={<CommandMenu />} />;
}
