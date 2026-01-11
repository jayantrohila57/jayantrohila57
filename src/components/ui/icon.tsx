import * as SVGL from "@ridemountainpig/svgl-react";
import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

export type SvglIconName = keyof typeof SVGL;

export type SvglIconProps = {
  name: SvglIconName;
  className?: string;
};

type SvglComponent = ComponentType<
  SVGProps<SVGSVGElement> & { className?: string }
>;

const svglIconMap = new Map<SvglIconName, SvglComponent>(
  Object.entries(SVGL).map(([key, component]) => [
    key as SvglIconName,
    component as SvglComponent,
  ]),
);

export function SvglIcon({ name, className }: SvglIconProps) {
  const Icon = svglIconMap.get(name);
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
