import { LandingPage } from "@/components/landing";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Jayant Rohila — Product Engineer",
  description:
    "Product engineer at aiQmen (Noida). Home previews all public identity docs — About, Career, Work, Presence, Archive, and Normalize at jayantrohila.com.",
  path: "/",
});

export default function HomePage() {
  return <LandingPage />;
}
