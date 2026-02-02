import { ArrowRight, Download, MapPin } from "lucide-react";
import Link from "next/link";
import { Shell } from "@/components/layout/shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Profile } from "@/data/types";

const Availability = ({
  availability,
}: {
  availability: Profile["availability"];
}) => {
  const statusConfig = {
    available: {
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/40",
      dot: "bg-green-500",
      ping: "bg-green-400",
      label: "Available",
    },
    limited: {
      color: "text-yellow-600 dark:text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/40",
      dot: "bg-yellow-500",
      ping: "bg-yellow-400",
      label: "Limited",
    },
    unavailable: {
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/40",
      dot: "bg-red-500",
      ping: "bg-red-400",
      label: "Unavailable",
    },
  };

  const config = statusConfig[availability.status];

  return (
    <Badge
      variant="outline"
      className={`gap-2 ${config.border} ${config.bg} ${config.color} px-4 py-1.5`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full ${config.ping} opacity-75`}
        />
        <span
          className={`relative inline-flex h-2 w-2 rounded-full ${config.dot}`}
        />
      </span>
      {availability.message || config.label}
    </Badge>
  );
};

export function HeroSection({ profile }: { profile: Profile | null }) {
  if (!profile) return null;

  return (
    <>
      <Shell>
        <Shell.Container>
          <div className="p-4 md:p-12"></div>
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
      </Shell>
      <Shell>
        <Shell.Container className="bg-muted/30 flex flex-col items-start justify-start p-4">
          <Availability availability={profile.availability} />
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
        <Shell.TopDecoration />
      </Shell>
      <Shell>
        <Shell.Container>
          <div className="p-4"></div>
        </Shell.Container>
        <Shell.TopDecoration />
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
      </Shell>
      <Shell>
        <Shell.Container className="bg-muted/30 p-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
            {`Hi, I’m ${profile.name}`}
          </h1>
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
        <Shell.TopDecoration />
      </Shell>
      <Shell>
        <Shell.Container className="bg-muted/30 p-4">
          <p className="max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-2xl">
            {profile.role}
          </p>
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
        <Shell.TopDecoration />
      </Shell>
      <Shell>
        <Shell.Container className="bg-muted/30 p-4">
          <p className="max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {profile.summary}
          </p>
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
        <Shell.TopDecoration />
      </Shell>
      <Shell>
        <Shell.Container className="bg-muted/30 p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{profile.location}</span>
          </div>
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
        <Shell.TopDecoration />
      </Shell>
      <Shell>
        <Shell.Container>
          <div className="p-2"></div>
        </Shell.Container>
        <Shell.TopDecoration />
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
      </Shell>
      <Shell>
        <Shell.Container className="bg-muted/30 p-4">
          <div className="flex w-full flex-col">
            <div className="flex flex-row gap-4">
              <Button asChild size="lg" className="gap-2 px-8">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="gap-2 px-8"
              >
                <a href={profile.resume} download>
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </Shell.Container>
        <Shell.LeftDecoration />
        <Shell.RightDecoration />
        <Shell.TopDecoration />
        <Shell.BottomDecoration />
      </Shell>
    </>
  );
}
