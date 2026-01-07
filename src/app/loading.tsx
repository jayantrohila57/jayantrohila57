import { Loader2 } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        {/* Loading Spinner */}
        <div className="relative">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <div className="absolute inset-0 h-12 w-12 animate-ping bg-primary/20 rounded-full" />
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-foreground">
            {siteConfig.siteName}
          </h1>
          <p className="text-muted-foreground">Loading amazing content...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
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
    </div>
  );
}
