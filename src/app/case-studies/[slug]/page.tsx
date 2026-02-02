import { ArrowLeft, Building2, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LayoutWrapper } from "@/components/layout";
import { Section } from "@/components/layout/section";
import {
  CaseStudyImpact,
  CaseStudyProblem,
  CaseStudySolution,
} from "@/components/sections/case-studies";
import { Badge } from "@/components/ui/badge";
import { getCaseStudies, getCaseStudyBySlug } from "@/sanity/query/queries";

interface CaseStudyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: study.title,
    description: study.problem.summary,
    openGraph: {
      title: study.title,
      description: study.problem.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const study = await getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <LayoutWrapper>
      {/* Header */}
      <Section>
        <Link
          href="/case-studies"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Case Studies
        </Link>

        <div className="mb-4 flex flex-wrap gap-2">
          <Badge variant="secondary">{study.industry}</Badge>
          <Badge variant="outline">{study.year}</Badge>
          {study.featured && (
            <Badge className="bg-primary/10 text-primary">Featured</Badge>
          )}
        </div>

        <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {study.title}
        </h1>
        <p className="mt-2 text-xl text-muted-foreground">{study.subtitle}</p>

        {/* Meta */}
        <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Building2 className="h-4 w-4" />
            <span>{study.client}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" />
            <span>{study.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{study.year}</span>
          </div>
        </div>
      </Section>

      {/* Case Study Sections */}
      <CaseStudyProblem caseStudy={study} />
      <CaseStudySolution caseStudy={study} />
      <CaseStudyImpact caseStudy={study} />
    </LayoutWrapper>
  );
}
