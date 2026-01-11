import { Quote, TrendingUp } from "lucide-react";
import { Section } from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";
import type { CaseStudy } from "@/data/types";

interface CaseStudyImpactProps {
  caseStudy: CaseStudy;
}

export function CaseStudyImpact({ caseStudy }: CaseStudyImpactProps) {
  return (
    <>
      <SectionHeader
        subtitle="Impact"
        title="The Impact"
        description="Real results from real work"
      />
      <Section>
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {caseStudy.impact.summary}
        </p>

        {/* Metrics */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {caseStudy.impact.metrics.map((metric) => (
            <Card key={metric.label} className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
                  <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-3xl font-bold text-primary">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm font-medium">{metric.label}</p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonial */}
        {caseStudy.testimonial && (
          <Card className="mx-auto max-w-3xl">
            <CardContent className="p-8">
              <Quote className="mb-4 h-8 w-8 text-primary/20" />
              <blockquote className="text-lg leading-relaxed">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="mt-4">
                <p className="font-semibold">{caseStudy.testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {caseStudy.testimonial.role}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </Section>
    </>
  );
}
