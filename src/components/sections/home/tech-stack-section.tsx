"use client";

import { Section } from "@/components/layout/section";
import { SvglIcon } from "@/components/ui/icon";
import techStack from "@/data/tech-stack.json";
import type { TechCategory } from "@/data/types";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { techIconMap, getThemedIconName } from "@/components/ui/tech-icon-map";
import { useEffect, useState } from "react";
import SectionHeader from "@/components/layout/section-header";
import { SectionSingleGrid } from "@/components/layout/section-grid";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// --- Types & Config ---

const proficiencyValue = {
  expert: 100,
  advanced: 80,
  intermediate: 60,
};

// --- Sub-components ---

function TechIcon({ name, className }: { name: string; className?: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const baseIconName = techIconMap[name] || name;
  const isDark = mounted ? resolvedTheme === "dark" : false;
  const themedName = getThemedIconName(baseIconName, isDark);

  return <SvglIcon name={themedName as any} className={className} />;
}

const LEVEL_CONFIG = {
  intermediate: {
    value: 60,
    label: "intermediate",
    text: "text-yellow-600",
  },
  advanced: {
    value: 80,
    label: "Advance",
    text: "text-blue-500",
  },
  expert: {
    value: 100,
    label: "Expert",
    text: "text-green-500",
  },
} as const;

const STEPS = [
  { threshold: 60, active: "bg-yellow-500" },
  { threshold: 80, active: "bg-blue-500" },
  { threshold: 100, active: "bg-green-500" },
] as const;

type Level = keyof typeof LEVEL_CONFIG;
function DomainCard({ category }: { category: TechCategory }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle> {category.category}</CardTitle>
          <CardDescription>{category.description}</CardDescription>
          <CardAction>
            <Badge className="bg-green-500/10 text-green-500">
              {category.items.length < 10
                ? `0${category.items.length}`
                : category.items.length}{" "}
            </Badge>
          </CardAction>
        </CardHeader>
        <Separator />
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-1 sm:gap-2 md:gap-4">
          {category.items.map((item, idx) => {
            const { value, label, text } =
              LEVEL_CONFIG[item.proficiency as Level];
            return (
              <Card
                key={item.name}
                className="rounded-none bg-muted/30 p-1 gap-1"
              >
                <CardHeader className="p-2">
                  <CardTitle className="flex flex-row gap-2 text-sm md:text-base items-center justify-start">
                    <TechIcon name={item.name} className="h-4 w-4" />
                    {item.name}
                  </CardTitle>
                  <CardDescription className="text-xs line-clamp-2">
                    {item?.description}
                  </CardDescription>
                  <CardAction>
                    <Badge
                      variant={"outline"}
                      className={cn("text-xs font-bold capitalize", text)}
                    >
                      {label}
                    </Badge>
                  </CardAction>
                </CardHeader>
              </Card>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
}

export function TechStackSection() {
  const categories = techStack as TechCategory[];

  return (
    <>
      <SectionHeader
        subtitle="Expertise"
        title="Technical Arsenal"
        description="A specialized breakdown of core competencies and specialized technologies."
      />
      <Section>
        <div className="grid grid-cols-1">
          {categories.map((cat, index) => (
            <SectionSingleGrid
              key={cat.category}
              index={index}
              length={categories.length}
              className="p-4"
            >
              <DomainCard key={cat.category} category={cat} />
            </SectionSingleGrid>
          ))}
        </div>
      </Section>
    </>
  );
}
