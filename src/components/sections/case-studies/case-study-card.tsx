import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, TrendingUp } from "lucide-react";
import type { CaseStudy } from "@/data/types";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Card className="group flex flex-col transition-all hover:shadow-lg gap-0">
      <CardHeader className="pb-6">
        <div className="mb-2 flex flex-wrap gap-2">
          <Badge variant="secondary">{caseStudy.industry}</Badge>
          <Badge variant="outline">{caseStudy.year}</Badge>
          {caseStudy.featured && (
            <Badge className="bg-primary/10 text-primary">Featured</Badge>
          )}
        </div>
        <CardTitle className="text-xl group-hover:text-primary">
          <Link href={`/case-studies/${caseStudy.slug}`}>
            {caseStudy.title}
          </Link>
        </CardTitle>
        <CardDescription>{caseStudy.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-6">
        <p className="mb-4 line-clamp-3 text-muted-foreground text-sm">
          {caseStudy.problem.summary}
        </p>
        {/* Key Metric Preview */}
        {caseStudy.impact.metrics[0] && (
          <div className="flex items-center gap-2 rounded-lg bg-green-500/10 px-3 py-2 w-fit">
            <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              {caseStudy.impact.metrics[0].label}:{" "}
              {caseStudy.impact.metrics[0].value}
            </span>
          </div>
        )}
      </CardContent>
      <Separator />
      <CardFooter className="pt-6">
        <Link
          href={`/case-studies/${caseStudy.slug}`}
          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Read Case Study
          <ArrowRight className="h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  );
}
