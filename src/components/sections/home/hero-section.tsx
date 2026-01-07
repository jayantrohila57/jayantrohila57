import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/layout/section";
import { ArrowRight, Download, MapPin } from "lucide-react";
import profile from "@/data/profile.json";

export function HeroSection() {
  return (
    <Section className="relative overflow-hidden pt-20 md:pt-28 lg:pt-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="flex flex-col items-center text-center">
        {/* Availability Badge */}
        {profile.availability.status === "available" && (
          <Badge
            variant="outline"
            className="mb-6 gap-2 border-green-500/50 bg-green-500/10 px-4 py-1.5 text-green-600 dark:text-green-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {profile.availability.message}
          </Badge>
        )}

        {/* Name & Role */}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <p className="mt-4 text-xl font-medium text-muted-foreground md:text-2xl lg:text-3xl">
          {profile.role}
        </p>

        {/* Summary */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {profile.summary}
        </p>

        {/* Location */}
        <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{profile.location}</span>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button asChild size="lg" className="gap-2">
            <Link href="/projects">
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
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
