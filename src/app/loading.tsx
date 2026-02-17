import { Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Frame,
  FrameDescription,
  FrameHeader,
  FrameTitle,
} from "@/components/ui/frame";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Frame className="w-full">
      <FrameHeader>
        <FrameTitle className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          Loading...
        </FrameTitle>
        <FrameDescription>
          Please wait while we prepare your content.
        </FrameDescription>
      </FrameHeader>

      <div className="p-2 md:p-4 space-y-4">
        <Card>
          <CardHeader>
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-5/6" />
              <Skeleton className="h-3 w-4/6" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-4 w-2/3" />
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-3/4" />
            </div>
          </CardContent>
        </Card>
      </div>
    </Frame>
  );
}
