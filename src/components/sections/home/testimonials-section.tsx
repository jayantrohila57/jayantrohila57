"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import * as React from "react";
import { Section } from "@/components/layout/section";
import SectionHeader from "@/components/layout/section-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import testimonials from "@/data/testimonials.json";
import type { Testimonial } from "@/data/types";

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const allTestimonials = testimonials as Testimonial[];

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % allTestimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length,
    );
  };

  const current = allTestimonials[currentIndex];

  return (
    <>
      <SectionHeader
        subtitle="Testimonials"
        title="What People Say"
        description="Feedback from clients and colleagues I've worked with."
      />
      <Section className="bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <Card className="relative overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <Quote className="mb-6 h-10 w-10 text-primary/20" />

              <blockquote className="text-lg leading-relaxed md:text-xl">
                "{current.quote}"
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={current.avatar} alt={current.author} />
                  <AvatarFallback>
                    {current.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{current.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {current.role}, {current.company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {allTestimonials.map((testimonial, dotIndex) => (
                <button
                  type="button"
                  key={`testimonial-dot-${testimonial.id ?? dotIndex}`}
                  onClick={() => setCurrentIndex(dotIndex)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    dotIndex === currentIndex
                      ? "bg-primary"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${dotIndex + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
