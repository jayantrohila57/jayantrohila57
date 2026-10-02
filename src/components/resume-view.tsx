"use client";

import { resumeData, RESUME_PDF_PATH } from "@/lib/resume-data";
import { Download, Printer } from "lucide-react";
import Link from "next/link";

type ResumeViewProps = {
  showActions?: boolean;
};

export function ResumeView({ showActions = true }: ResumeViewProps) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-print-root mx-auto w-full max-w-3xl">
      {showActions ? (
        <div className="resume-no-print mb-8 flex flex-wrap items-center gap-3">
          <a
            href={RESUME_PDF_PATH}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="size-4" aria-hidden />
            Download PDF
          </a>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium transition-colors hover:bg-fd-accent/30"
          >
            <Printer className="size-4" aria-hidden />
            Print
          </button>
          <Link
            href="/about/overview"
            className="text-sm text-fd-muted-foreground underline-offset-4 hover:underline"
          >
            Back to about
          </Link>
        </div>
      ) : null}

      <article
        className="resume-document rounded-xl border border-fd-border bg-fd-card p-8 text-fd-foreground shadow-sm print:border-0 print:shadow-none print:rounded-none print:p-0"
        aria-label="Resume"
      >
        <header className="border-b border-fd-border pb-6 print:border-black/20">
          <h1 className="text-3xl font-semibold tracking-tight">
            {resumeData.name}
          </h1>
          <p className="mt-1 text-lg text-fd-muted-foreground print:text-black/70">
            {resumeData.headline}
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            {resumeData.location} ·{" "}
            <a
              href={`mailto:${resumeData.email}`}
              className="underline-offset-2 hover:underline print:text-black"
            >
              {resumeData.email}
            </a>
          </p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {resumeData.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-fd-primary underline-offset-2 hover:underline print:text-black"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </header>

        <section className="mt-6">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-fd-muted-foreground print:text-black">
            Summary
          </h2>
          <p className="mt-2 text-sm leading-relaxed">{resumeData.summary}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-fd-muted-foreground print:text-black">
            Experience
          </h2>
          <ul className="mt-4 space-y-6">
            {resumeData.experience.map((role) => (
              <li key={`${role.organization}-${role.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium">{role.title}</h3>
                  <span className="text-sm text-fd-muted-foreground print:text-black/70">
                    {role.period}
                  </span>
                </div>
                <p className="text-sm text-fd-muted-foreground print:text-black/80">
                  {role.organization}
                  {role.location ? ` · ${role.location}` : ""}
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-fd-muted-foreground print:text-black">
            Education
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            {resumeData.education.map((item) => (
              <li key={item.credential}>
                <span className="font-medium">{item.credential}</span>
                {" — "}
                {item.institution}
                <span className="text-fd-muted-foreground print:text-black/70">
                  {" "}
                  ({item.period})
                </span>
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
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-fd-muted-foreground print:text-black">
            Skills
          </h2>
          <ul className="mt-3 space-y-1 text-sm leading-relaxed">
            {resumeData.skills.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-fd-muted-foreground print:text-black">
            Selected projects
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            {resumeData.projects.map((project) => (
              <li key={project.href}>
                <a
                  href={project.href}
                  className="font-medium underline-offset-2 hover:underline print:text-black"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {project.name}
                </a>
                {" — "}
                {project.summary}
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
