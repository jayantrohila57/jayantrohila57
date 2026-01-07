import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ShellProps {
  children: ReactNode;
  className?: string;
}

export function Shell({ children, className }: ShellProps) {
  return (
    <div className="min-h-screen w-full bg-background">
      <div
        className={cn(
          "mx-auto w-full container max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
}
