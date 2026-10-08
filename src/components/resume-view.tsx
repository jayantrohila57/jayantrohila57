"use client";

import { Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_PDF_PATH, resumeData } from "@/lib/resume-data";

type ResumeViewProps = {
  showActions?: boolean;
};

export function ResumeView({ showActions = true }: ResumeViewProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-print-root mx-auto w-full max-w-none">
      {showActions ? (
        <div className="resume-no-print mb-8 flex flex-wrap items-center gap-3">
          <Button asChild variant="accent" className="gap-2">
            <a href={RESUME_PDF_PATH} download>
              <Download className="size-4" aria-hidden />
              Download PDF
            </a>
          </Button>
          <Button
            type="button"
            variant="outline"
            className="gap-2 shadow-xs"
            onClick={handlePrint}
          >
            <Printer className="size-4" aria-hidden />
            Print
          </Button>
        </div>
      ) : null}

      <article
        className="resume-document border border-border bg-panel text-foreground print:border-0 print:bg-white print:text-black print:shadow-none"
        aria-label="Resume"
      >
        <header className="border-b border-border px-4 py-6 md:px-8 md:py-8 print:border-black/20">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            {resumeData.name}
          </h1>
          <p className="mt-2 text-base text-muted-foreground md:text-lg print:text-black/70">
            {resumeData.headline}
          </p>
          <p className="mt-4 font-mono text-xs text-muted-foreground md:text-sm print:text-black/80">
            {resumeData.location} ·{" "}
            <a
              href={`mailto:${resumeData.email}`}
              className="text-link-accent underline-offset-2 hover:underline print:text-black"
            >
              {resumeData.email}
            </a>
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {resumeData.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-link-accent underline-offset-2 hover:underline print:text-black"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <div className="px-4 py-6 md:px-8 md:py-8">
          <section>
            <h2 className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase print:text-black">
              Summary
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base print:text-black">
              {resumeData.summary}
            </p>
          </section>

          <section className="mt-10">
            <h2 className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase print:text-black">
              Experience
            </h2>
            <ul className="mt-5 divide-y divide-border">
              {resumeData.experience.map((role) => (
                <li
                  key={`${role.organization}-${role.period}`}
                  className="py-6 first:pt-0 last:pb-0"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-medium text-foreground">{role.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground print:text-black/70">
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground print:text-black/80">
                    {role.organization}
                    {role.location ? ` · ${role.location}` : ""}
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground print:text-black">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase print:text-black">
              Education
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              {resumeData.education.map((item) => (
                <li key={item.credential}>
                  <p className="font-medium text-foreground">{item.credential}</p>
                  <p className="text-muted-foreground print:text-black/80">
                    {item.institution}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground print:text-black/70">
                    {item.period}
                    {"href" in item && item.href ? (
                      <>
                        {" · "}
                        <a
                          href={item.href}
                          className="underline-offset-2 hover:underline print:text-black"
                          rel="noreferrer noopener"
                          target="_blank"
                        >
                          Certificate
                        </a>
                      </>
                    ) : null}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase print:text-black">
              Skills
            </h2>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground print:text-black">
              {resumeData.skills.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="font-mono text-[10px] tracking-[0.18em] text-muted-foreground uppercase print:text-black">
              Selected projects
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              {resumeData.projects.map((project) => (
                <li key={project.href} className="leading-relaxed">
                  <a
                    href={project.href}
                    className="font-medium text-foreground underline-offset-2 hover:underline print:text-black"
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {project.name}
                  </a>
                  <span className="text-muted-foreground print:text-black/80">
                    {" "}
                    — {project.summary}
                  </span>
                  {project.liveHref ? (
                    <>
                      {" "}
                      <a
                        href={project.liveHref}
                        className="text-link-accent underline-offset-2 hover:underline print:text-black"
                        rel="noreferrer noopener"
                        target="_blank"
                      >
                        Live demo
                      </a>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
