"use client";

import { FileQuestion, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Frame,
  FrameDescription,
  FrameFooter,
  FrameHeader,
  FramePanel,
  FrameTitle,
} from "@/components/ui/frame";

export default function NotFound() {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleSearch = () => {
    window.location.href = "/search";
  };

  return (
    <Frame className="w-full h-full">
      <FrameHeader>
        <FrameTitle className="flex items-center gap-2 text-muted-foreground">
          <FileQuestion className="h-6 w-6" />
          Page Not Found
        </FrameTitle>
        <FrameDescription>
          The page you're looking for doesn't exist or has been moved.
        </FrameDescription>
      </FrameHeader>

      <FramePanel className="w-full h-full">
        <Card className="mb-4 w-full h-full p-10">
          <CardHeader>
            <CardTitle className="text-center text-6xl font-bold text-muted-foreground">
              404
            </CardTitle>
            <CardDescription className="text-center">
              Oops! The page you requested could not be found.
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full h-full">
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">
                Here are some helpful links instead:
              </p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button
                  onClick={handleGoHome}
                  variant="default"
                  className="flex items-center gap-2"
                >
                  <Home className="h-4 w-4" />
                  Go Home
                </Button>
                <Button
                  onClick={handleSearch}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Search className="h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </FramePanel>

      <FrameFooter>
        <p className="text-sm text-muted-foreground text-center">
          If you believe this is an error, please contact our support team.
        </p>
      </FrameFooter>
    </Frame>
  );
}
