import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Profile } from "@/data/types";

interface ProfileSectionProps {
  profile: Profile | null;
}

export default function ProfileSection({ profile }: ProfileSectionProps) {
  if (!profile) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{profile.name}</CardTitle>
        <CardDescription className="text-base">{profile.role}</CardDescription>
      </CardHeader>
      <CardPanel>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-2">About</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {profile.summary}
            </p>
          </div>
          <Separator />
          <div>
            <h4 className="text-sm font-medium mb-2">Availability</h4>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {profile.availability.message}
              </span>
            </div>
          </div>
          {profile.resume && (
            <>
              <Separator />
              <div>
                <h4 className="text-sm font-medium mb-2">Resume</h4>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant={"outline"}>Download Resume</Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </CardPanel>
    </Card>
  );
}
