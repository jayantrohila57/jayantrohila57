import { CheckCircle2, Clock, MapPin } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Profile } from "@/data/types";

const statusConfig = {
  available: {
    icon: CheckCircle2,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    label: "Available",
  },
  limited: {
    icon: Clock,
    color: "text-yellow-600 dark:text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
    label: "Limited Availability",
  },
  unavailable: {
    icon: Clock,
    color: "text-red-600 dark:text-red-400",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/30",
    label: "Currently Unavailable",
  },
};

export function AvailabilityStatus({ profile }: { profile: Profile }) {
  const statusKey = profile.availability.status as keyof typeof statusConfig;
  const status = statusConfig[statusKey];
  const Icon = status.icon;

  return (
    <Section>
      <Card className="mx-auto max-w-2xl">
        <CardContent className="p-6">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${status.bgColor}`}
            >
              <Icon className={`h-6 w-6 ${status.color}`} />
            </div>
            <div className="flex-1">
              <div className="mb-1 flex items-center justify-center gap-2 md:justify-start">
                <Badge
                  variant="outline"
                  className={`${status.bgColor} ${status.color} ${status.borderColor}`}
                >
                  {status.label}
                </Badge>
              </div>
              <p className="text-muted-foreground">
                {profile.availability.message}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{profile.location}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Section>
  );
}
