export type CaseStudyMetric = {
  label: string;
  value: string;
};

export type ProjectCaseStudy = {
  atGlance: {
    role: string;
    duration: string;
    team: string;
    stack: string;
  };
  problem: string;
  contribution: string;
  challenges: string[];
  features: string[];
  decisions: string[];
  metrics?: CaseStudyMetric[];
  outcome: string;
  maturity?: string;
};
