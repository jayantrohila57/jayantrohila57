import { cn } from "@/lib/utils";
import type { ComponentType, SVGProps } from "react";
import * as SVGL from "@ridemountainpig/svgl-react";

export type SvglIconName = keyof typeof SVGL;

export type SvglIconProps = {
  name: SvglIconName;
  className?: string;
};

export function SvglIcon({ name, className }: SvglIconProps) {
  const Icon = SVGL[name] as ComponentType<
    SVGProps<SVGSVGElement> & { className?: string }
  >;
  if (!Icon) return null;
  return (
    <Icon
      className={cn("h-6 w-6 text-foreground dark:text-foreground", className)}
    />
  );
}

export function isSvglIcon(name: string): boolean {
  return name in SVGL;
}
