import { LandingPage } from "@/components/landing";
import { generatePageMetadata } from "@/config/metadata";

export const metadata = generatePageMetadata({
  title: "Jayant Rohila — Product Engineer",
  description:
    "Product engineer at aiQmen. Public identity documentation and versioned professional archive at jayantrohila.com.",
  path: "/",
});

export default function HomePage() {
  return <LandingPage />;
}
