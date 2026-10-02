import { SiteShell } from "@/components/site/site-shell";

export default function Layout({ children }: LayoutProps<"/resume">) {
  return <SiteShell>{children}</SiteShell>;
}
