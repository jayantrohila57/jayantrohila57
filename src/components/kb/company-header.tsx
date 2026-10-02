import { CompanyMark } from "@/components/site/company-mark";
import { getCompany } from "@/data/companies";
import { FactGrid } from "./fact-grid";
import type { CompanyFacts } from "@/data/career-roles";
import { ExternalLinkRow } from "./external-link-row";

export function CompanyHeader({
  companyId,
  facts,
}: {
  companyId: string;
  facts: CompanyFacts;
}) {
  const company = getCompany(companyId);
  if (!company) return <FactGrid facts={facts.facts} />;

  return (
    <div className="not-prose mb-8">
      <div className="flex items-start gap-4 border-b border-site-border pb-6">
        <CompanyMark company={company} size="lg" linked={false} />
        <div>
          <h2 className="font-display text-2xl font-medium text-site-ink">
            {company.shortName}
          </h2>
          <p className="mt-1 text-sm text-site-muted">{company.role}</p>
          <p className="mt-1 font-mono text-xs text-site-muted">
            {company.period}
            {company.location ? ` · ${company.location}` : ""}
          </p>
        </div>
      </div>
      <FactGrid facts={facts.facts} />
      {facts.external?.map((link) => (
        <ExternalLinkRow key={link.href} {...link} />
      ))}
    </div>
  );
}
