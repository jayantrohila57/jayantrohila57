"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export const headerIconButtonClass =
  "size-9 shrink-0 border-border shadow-xs";

type HeaderIconButtonProps = {
  label: string;
  /** Visible on hover / native tooltip fallback */
  title?: string;
  children: ReactNode;
  className?: string;
} & (
  | { href: string; external?: boolean; onClick?: never }
  | { onClick: () => void; href?: never; external?: never }
);

export function HeaderIconButton(props: HeaderIconButtonProps) {
  const { label, title, children, className } = props;
  const tooltip = title ?? label;

  const button = (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn(headerIconButtonClass, className)}
      aria-label={label}
      title={tooltip}
      onClick={props.onClick}
      asChild={Boolean(props.href)}
    >
      {props.href ? (
        <a
          href={props.href}
          target={props.external ? "_blank" : undefined}
          rel={props.external ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      ) : (
        children
      )}
    </Button>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent side="bottom">{tooltip}</TooltipContent>
    </Tooltip>
  );
}
