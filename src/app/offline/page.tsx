import { WifiOff, RefreshCw } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { PageActions } from "@/components/ui/page-actions";

export default function OfflinePage() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <WifiOff className="h-8 w-8 text-muted-foreground" />
          <CardTitle className="text-4xl font-bold text-foreground">
            You're Offline
          </CardTitle>
        </div>
        <CardAction>
          <PageActions
            actions={[
              {
                onClick: () => window.location.reload(),
                text: "Try Again",
                icon: RefreshCw,
              },
            ]}
          />
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className="text-lg text-muted-foreground">
          It looks like you've lost your internet connection. Don't worry, you
          can still use some features of this app.
        </CardDescription>

        <div className="space-y-4">
          <CardTitle className="text-lg font-semibold text-foreground">
            What you can do:
          </CardTitle>
          <ul className="space-y-1 text-muted-foreground">
            <li className="flex items-center gap-2">
              <div className="h-1 w-1 bg-muted-foreground rounded-full" />
              Check your internet connection
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1 w-1 bg-muted-foreground rounded-full" />
              Try refreshing the page when you're back online
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1 w-1 bg-muted-foreground rounded-full" />
              Some cached content may still be available
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
