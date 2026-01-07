"use client";

import { AlertTriangle, Home as HomeIcon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { PageActions } from "@/components/ui/page-actions";

export default function NotFound() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <AlertTriangle className="h-8 w-8 text-destructive" />
          <CardTitle className="text-4xl font-bold text-foreground">
            Page Not Found
          </CardTitle>
        </div>
        <CardDescription className="text-lg text-muted-foreground mt-4">
          The page you are looking for could not be found. Please check the URL
          and try again, or return to the homepage.
        </CardDescription>
        <CardAction>
          <PageActions
            actions={[
              {
                href: "/",
                text: "Back to Home",
                icon: HomeIcon,
              },
            ]}
          />
        </CardAction>
      </CardHeader>
    </Card>
  );
}
