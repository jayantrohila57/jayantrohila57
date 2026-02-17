import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Skills } from "@/data/types";

interface SkillsSectionProps {
  skills: Skills | null;
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  if (!skills) return null;

  return (
    <Accordion className="w-full">
      {skills.categories.map((category) => (
        <AccordionItem key={category.category} value={category.category}>
          <AccordionTrigger className="group hover:shadow-lg transition-shadow px-6 py-4">
            <div className="flex items-start justify-between w-full">
              <div className="space-y-1">
                <CardTitle>{category.category}</CardTitle>
                {category.description && (
                  <CardDescription>{category.description}</CardDescription>
                )}
              </div>
              <Badge variant="secondary" className="text-xs">
                {category.items.length} skills
              </Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2">
              {category.items.map((skill, skillIndex) => (
                <Card
                  className="p-0"
                  key={`${category.category}-skill-${skill.name}-${skillIndex}`}
                >
                  <CardHeader>
                    <CardTitle className="text-sm">{skill.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {skill.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
