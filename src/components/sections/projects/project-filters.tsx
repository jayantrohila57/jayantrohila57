"use client";

import { X } from "lucide-react";
import * as React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Project } from "@/data/types";

interface ProjectFiltersProps {
  projects: Project[];
  onFilterChange: (filtered: Project[]) => void;
}

export function ProjectFilters({
  projects,
  onFilterChange,
}: ProjectFiltersProps) {
  const [selectedTech, setSelectedTech] = React.useState<string>("all");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [selectedYear, setSelectedYear] = React.useState<string>("all");

  // Get unique values
  const allTech = React.useMemo(() => {
    const techSet = new Set<string>();
    for (const project of projects) {
      for (const tech of project.tech) {
        techSet.add(tech);
      }
    }
    return Array.from(techSet).sort();
  }, [projects]);

  const allCategories = React.useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.category))).sort();
  }, [projects]);

  const allYears = React.useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.year)))
      .sort((a, b) => b - a)
      .map(String);
  }, [projects]);

  // Filter projects
  React.useEffect(() => {
    let filtered = [...projects];

    if (selectedTech !== "all") {
      filtered = filtered.filter((p) => p.tech.includes(selectedTech));
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (selectedYear !== "all") {
      filtered = filtered.filter((p) => p.year === parseInt(selectedYear, 10));
    }

    onFilterChange(filtered);
  }, [selectedTech, selectedCategory, selectedYear, projects, onFilterChange]);

  const hasActiveFilters =
    selectedTech !== "all" ||
    selectedCategory !== "all" ||
    selectedYear !== "all";

  const clearFilters = () => {
    setSelectedTech("all");
    setSelectedCategory("all");
    setSelectedYear("all");
  };

  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-3">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {allCategories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedTech} onValueChange={setSelectedTech}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Technology" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Technologies</SelectItem>
            {allTech.map((tech) => (
              <SelectItem key={tech} value={tech}>
                {tech}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {allYears.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <div className="flex items-center gap-2">
          <div className="flex flex-wrap gap-2">
            {selectedCategory !== "all" && (
              <Badge variant="secondary" className="gap-1">
                {selectedCategory}
                <button
                  type="button"
                  onClick={() => setSelectedCategory("all")}
                  className="ml-1 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedTech !== "all" && (
              <Badge variant="secondary" className="gap-1">
                {selectedTech}
                <button
                  type="button"
                  onClick={() => setSelectedTech("all")}
                  className="ml-1 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedYear !== "all" && (
              <Badge variant="secondary" className="gap-1">
                {selectedYear}
                <button
                  type="button"
                  onClick={() => setSelectedYear("all")}
                  className="ml-1 hover:text-destructive"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
}
