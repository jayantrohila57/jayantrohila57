import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { ArrowRight, Download, MapPin } from "lucide-react";
import profile from "@/data/profile.json";

const Availability = () => {
  const isAvailable = profile.availability.status === "available";

  return (
    <Badge
      variant="outline"
      className="mb-8 gap-2 border-green-500/40 bg-green-500/10 px-4 py-1.5 text-green-600 dark:text-green-400"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      {isAvailable ? profile.availability.message : "Not Available"}
    </Badge>
  );
};

export function HeroSection() {
  return (
    <Section>
      <div className="flex w-full flex-col">
        <Availability />
        <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-7xl lg:text-7xl">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mt-4 text-xl font-medium text-muted-foreground md:text-2xl lg:text-3xl">
          {profile.role}
        </p>
        <p className="mt-6 max-w-2xl text-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {profile.summary}
        </p>
        <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{profile.location}</span>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="gap-2 px-8">
            <Link href="/projects">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2 px-8">
            <a href={profile.resume} download>
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
