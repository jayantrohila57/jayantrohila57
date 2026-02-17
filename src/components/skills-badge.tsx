"use client";

import * as SVGL from "@ridemountainpig/svgl-react";
import { useTheme } from "next-themes";
import type { ComponentType, SVGProps } from "react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getThemedIconName, techIconMap } from "./tech-icon-map";

interface TechBadgeProps {
  tech: string;
  variant?: "default" | "secondary" | "outline" | "destructive";
  size?: "default" | "lg";
  className?: string;
}

export function TechBadge({
  tech,
  variant = "outline",
  size = "default",
  className,
}: TechBadgeProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Get the base icon name from the map
  const baseIconName = techIconMap[tech];

  // If no icon mapping exists, render badge without icon
  if (!baseIconName) {
    return (
      <Badge
        variant={variant}
        className={cn(size === "lg" && "px-3 py-1 text-sm", className)}
      >
        {tech}
      </Badge>
    );
  }

  // Get themed icon name (with Light/Dark suffix if applicable)
  const isDark = mounted ? resolvedTheme === "dark" : false;
  const themedIconName = getThemedIconName(baseIconName, isDark);

  // Cast SVGL to allow dynamic access
  const svglIcons = SVGL as unknown as Record<
    string,
    ComponentType<SVGProps<SVGSVGElement>> | undefined
  >;

  // Try to get the icon component
  const Icon = svglIcons[themedIconName];

  // Fallback to base icon if themed version doesn't exist
  const FallbackIcon = Icon ? null : svglIcons[baseIconName];

  const IconComponent = Icon || FallbackIcon;

  return (
    <Badge
      variant={variant}
      className={cn(size === "lg" && "px-3 py-1 text-sm", className)}
    >
      {IconComponent && (
        <IconComponent
          className={cn(size === "lg" ? "h-4 w-4" : "h-3 w-3", "shrink-0")}
        />
      )}
      {tech}
    </Badge>
  );
}
