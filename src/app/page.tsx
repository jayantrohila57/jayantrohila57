import { Home as HomeIcon } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { PageActions } from "@/components/ui/page-actions";

export default function Home() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
          <HomeIcon className="h-8 w-8 text-foreground" />
          <CardTitle className="text-4xl font-bold text-foreground">
            Welcome
          </CardTitle>
        </div>
        <CardDescription className="text-lg text-muted-foreground mt-4">
          This app is ready to use. Get started with your journey today.
        </CardDescription>
        <CardAction>
          <PageActions
            actions={[
              {
                href: "/",
                text: "Get Started",
                icon: HomeIcon,
              },
            ]}
          />
        </CardAction>
      </CardHeader>
    </Card>
  );
}
