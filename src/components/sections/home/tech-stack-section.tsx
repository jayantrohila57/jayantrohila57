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

function LevelIndicator({ level }: { level: keyof typeof proficiencyValue }) {
  const value = proficiencyValue[level];
  return (
    <div className="flex items-center gap-1.5 min-w-[100px] justify-end">
      <div className="flex gap-0.5">
        {[1, 2, 3].map((step) => {
          const threshold = step === 1 ? 60 : step === 2 ? 80 : 100;
          return (
            <div
              key={step}
              className={cn(
                "h-1 w-3 rounded-full transition-all",
                value >= threshold
                  ? step === 1
                    ? "bg-yellow-500"
                    : step === 2
                      ? "bg-blue-500"
                      : "bg-green-500"
                  : "bg-muted-foreground/20",
              )}
            />
          );
        })}
      </div>
      <span
        className={cn(
          "text-[10px] font-black uppercase tracking-tighter w-8 text-right",
          level === "expert"
            ? "text-green-500"
            : level === "advanced"
              ? "text-blue-500"
              : "text-yellow-600 dark:text-yellow-400",
        )}
      >
        {level === "expert" ? "EXP" : level === "advanced" ? "ADV" : "INT"}
      </span>
    </div>
  );
}

function DomainCard({ category }: { category: TechCategory }) {
  return (
    <div className="group rounded-2xl border bg-card/50 p-1 shadow-sm transition-all hover:bg-card/80 hover:shadow-md hover:border-primary/20 backdrop-blur-sm flex flex-col h-full">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-border/50 bg-muted/20 rounded-t-xl">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <TechIcon
              name={
                category.category === "Cloud & DevOps"
                  ? "AWS"
                  : category.category === "Frontend"
                    ? "React"
                    : category.category === "Backend"
                      ? "Node.js"
                      : category.category === "Database"
                        ? "PostgreSQL"
                        : category.category === "Messaging & Streaming"
                          ? "Apache Kafka"
                          : "VS Code"
              }
              className="h-5 w-5"
            />
          </div>
          <h4 className="font-bold tracking-tight text-sm uppercase">
            {category.category}
          </h4>
        </div>
        <span className="text-[10px] font-mono font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md">
          {category.items.length < 10
            ? `0${category.items.length}`
            : category.items.length}{" "}
          Techs
        </span>
      </div>

      {/* Grid Body */}
      <div className="flex-1">
        {category.items.map((item, idx) => (
          <div
            key={item.name}
            className={cn(
              "flex items-center justify-between p-3 transition-colors hover:bg-primary/[0.03]",
              idx !== category.items.length - 1 && "border-b border-border/30",
            )}
          >
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-md bg-muted/30 group-hover/item:bg-background transition-colors">
                <TechIcon name={item.name} className="h-4 w-4" />
              </div>
              <span className="text-xs font-semibold tracking-tight">
                {item.name}
              </span>
            </div>
            <LevelIndicator level={item.proficiency} />
          </div>
        ))}
      </div>
    </div>
  );
}

function DomainSkillsGrid() {
  const categories = techStack as TechCategory[];

  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat) => (
        <DomainCard key={cat.category} category={cat} />
      ))}
    </div>
  );
}

export function TechStackSection() {
  return (
    <>
      <SectionHeader
        subtitle="Expertise"
        title="Technical Arsenal"
        description="A specialized breakdown of core competencies and specialized technologies."
      />
      <Section>
        <div className="container mx-auto px-4 relative z-10">
          {/* Bento Grid Section */}
          <div>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <h3 className="text-2xl font-bold tracking-tighter">
                  Domain Matrix
                </h3>
                <p className="text-sm text-muted-foreground">
                  Deep dive into specific technology stacks
                </p>
              </div>
              <div className="hidden md:flex gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                <div className="flex items-center gap-1.5">
                  <div className="h-1 w-3 rounded-full bg-yellow-500" />{" "}
                  Foundation
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-1 w-3 rounded-full bg-blue-500" /> advanced
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="h-1 w-3 rounded-full bg-green-500" /> expert
                </div>
              </div>
            </div>
            <DomainSkillsGrid />
          </div>
        </div>
      </Section>
    </>
  );
}
