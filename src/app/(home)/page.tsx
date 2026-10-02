import { LandingPage } from "@/components/landing";
import type { Metadata } from "next";
import { appName, siteUrl } from "@/lib/shared";

export const metadata: Metadata = {
  title: appName,
  description:
    "Product engineer and public identity documentation for Jayant Rohila — versioned professional archive at jayantrohila.com.",
  openGraph: {
    title: `${appName} · Product Engineer`,
    description:
      "Public identity docs and professional archive. No private or legal records.",
    url: siteUrl,
  },
};

export default function HomePage() {
  return <LandingPage />;
}
