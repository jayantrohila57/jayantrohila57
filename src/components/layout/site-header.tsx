"use client";

import dynamic from "next/dynamic";
import { Header } from "@/components/header";

const CommandMenu = dynamic(
  () =>
    import("@/components/navigation/command-menu").then((mod) => mod.CommandMenu),
  { ssr: false },
);

export function SiteHeader() {
  return <Header commandSlot={<CommandMenu />} />;
}
