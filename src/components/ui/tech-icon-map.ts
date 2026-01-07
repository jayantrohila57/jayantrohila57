/**
 * Maps technology names (from JSON data) to SVGL icon component names.
 * The SVGL library exports icons with specific names that may differ from display names.
 * Icons with Light/Dark variants will be handled by the TechBadge component.
 */
export const techIconMap: Record<string, string> = {
  // Frontend
  React: "React",
  "Next.js": "Nextjs",
  TypeScript: "TypeScript",
  "Tailwind CSS": "TailwindCSS",
  HTML5: "HTML5",
  CSS3: "CSS",
  CSS: "CSS",
  JavaScript: "JavaScript",
  "D3.js": "D3",

  // Backend
  "Node.js": "Nodejs",
  Express: "Expressjs",
  Python: "Python",
  Go: "Go",
  GraphQL: "GraphQL",
  "REST API": "FastAPI",

  // Database
  PostgreSQL: "PostgreSQL",
  MongoDB: "MongoDB",
  Redis: "Redis",
  Elasticsearch: "Elasticsearch",
  MySQL: "MySQL",
  ClickHouse: "ClickHouse",

  // Cloud & DevOps
  AWS: "AmazonWebServices",
  Docker: "Docker",
  Kubernetes: "Kubernetes",
  Terraform: "Terraform",
  "GitHub Actions": "GitHub",
  GitHub: "GitHub",
  Vercel: "Vercel",
  ArgoCD: "Argo",
  Prometheus: "Prometheus",
  Grafana: "Grafana",

  // Messaging & Streaming
  "Apache Kafka": "ApacheKafka",
  Kafka: "ApacheKafka",
  RabbitMQ: "Rabbitmq",
  "AWS SQS": "AmazonWebServices",
  Bull: "Redis",

  // Tools & Collaboration
  Git: "Git",
  "VS Code": "VisualStudioCode",
  Figma: "Figma",
  Notion: "Notion",

  // Additional technologies from projects
  Stripe: "Stripe",
  WebRTC: "WebRTC",
  FHIR: "FHIR",
  TensorFlow: "TensorFlow",
  Twilio: "Twilio",
  SendGrid: "SendGrid",
  CloudFront: "AWS",
  "AWS S3": "AWS",
  PHP: "PHP",
  WordPress: "WordPress",
};

/**
 * Icons that have both light and dark variants in the SVGL library.
 * For these icons, we append "Light" or "Dark" based on the current theme.
 */
export const themedIcons: Set<string> = new Set([
  "GitHub",
  "Vercel",
  "Expressjs",
  "Nextjs",
  "ApacheKafka",
  "Notion",
  "React",
  "Go",
  "MongoDB",
  "AmazonWebServices",
]);

/**
 * Gets the appropriate icon name based on the theme.
 * @param baseName - The base icon name from techIconMap
 * @param isDark - Whether dark mode is active
 * @returns The themed icon name
 */
export function getThemedIconName(baseName: string, isDark: boolean): string {
  if (themedIcons.has(baseName)) {
    return `${baseName}${isDark ? "Dark" : "Light"}`;
  }
  return baseName;
}
