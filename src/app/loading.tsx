import { Loader2 } from "lucide-react";
import { LayoutWrapper } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site.config";

export default function Loading() {
  return (
    <LayoutWrapper>
      <div className="container flex items-center justify-center min-h-[60vh]">
        <Card className="w-full max-w-md border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <CardTitle className="text-2xl font-bold text-foreground">
                {siteConfig.siteName}
              </CardTitle>
            </div>
            <CardDescription className="text-base text-muted-foreground mt-4">
              Loading amazing content...
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary animate-pulse"
                  style={{
                    animation: "loading 2s ease-in-out infinite",
                  }}
                />
              </div>

              {/* Loading Dots */}
              <div className="flex justify-center space-x-2">
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <div
                  className="w-2 h-2 bg-primary rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </LayoutWrapper>
  );
}
