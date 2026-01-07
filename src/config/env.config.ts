import { z } from "zod";

// Environment variable schema
const envSchema = z.object({
  // Node environment
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  // Site URLs
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  // Analytics
  NEXT_PUBLIC_GA_ID: z.string().optional(),
  NEXT_PUBLIC_VERCEL_ANALYTICS: z.string().optional(),
  // Authentication (if needed)
  NEXTAUTH_URL: z.string().url().optional(),
  NEXTAUTH_SECRET: z.string().optional(),
  // Database (if using external database)
  DATABASE_URL: z.string().url().optional(),
  // Email services
  RESEND_API_KEY: z.string().optional(),
  FORMSPREE_ID: z.string().optional(),
  // Third-party APIs
  NEXT_PUBLIC_GITHUB_TOKEN: z.string().optional(),
  NEXT_PUBLIC_LINKEDIN_CLIENT_ID: z.string().optional(),
  // CDN/Storage
  NEXT_PUBLIC_CDN_URL: z.string().url().optional(),
  AWS_ACCESS_KEY_ID: z.string().optional(),
  AWS_SECRET_ACCESS_KEY: z.string().optional(),
  AWS_REGION: z.string().optional(),
  AWS_S3_BUCKET: z.string().optional(),
  // Feature flags
  NEXT_PUBLIC_ENABLE_ANALYTICS: z.string().optional(),
  NEXT_PUBLIC_ENABLE_COMMENTS: z.string().optional(),
  NEXT_PUBLIC_ENABLE_NEWSLETTER: z.string().optional(),
  // Development
  NEXT_PUBLIC_DEV_MODE: z.string().optional(),
});

// Validate environment variables
function validateEnv() {
  try {
    const rawEnv = envSchema.parse(process.env);
    // Handle boolean transformations and defaults
    return {
      ...rawEnv,
      NEXT_PUBLIC_ENABLE_ANALYTICS:
        rawEnv.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
      NEXT_PUBLIC_ENABLE_COMMENTS:
        rawEnv.NEXT_PUBLIC_ENABLE_COMMENTS === "true",
      NEXT_PUBLIC_ENABLE_NEWSLETTER:
        rawEnv.NEXT_PUBLIC_ENABLE_NEWSLETTER === "true",
      NEXT_PUBLIC_DEV_MODE: rawEnv.NEXT_PUBLIC_DEV_MODE === "true",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.issues.map(
        (err: any) => `${err.path.join(".")}: ${err.message}`,
      );
      throw new Error(
        `Environment validation failed:\n${errorMessages.join("\n")}`,
      );
    }
    throw error;
  }
}

// Export validated environment variables
export const env = validateEnv();

// Type for environment variables
export type Env = z.infer<typeof envSchema>;

// Helper functions to check environment
export const isDevelopment = env.NODE_ENV === "development";
export const isProduction = env.NODE_ENV === "production";
export const isTest = env.NODE_ENV === "test";

// Helper function to get public environment variables
export function getPublicEnv() {
  return {
    NEXT_PUBLIC_SITE_URL: env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_GA_ID: env.NEXT_PUBLIC_GA_ID,
    NEXT_PUBLIC_VERCEL_ANALYTICS: env.NEXT_PUBLIC_VERCEL_ANALYTICS,
    NEXT_PUBLIC_ENABLE_ANALYTICS: env.NEXT_PUBLIC_ENABLE_ANALYTICS,
    NEXT_PUBLIC_ENABLE_COMMENTS: env.NEXT_PUBLIC_ENABLE_COMMENTS,
    NEXT_PUBLIC_ENABLE_NEWSLETTER: env.NEXT_PUBLIC_ENABLE_NEWSLETTER,
    NEXT_PUBLIC_DEV_MODE: env.NEXT_PUBLIC_DEV_MODE,
    NEXT_PUBLIC_CDN_URL: env.NEXT_PUBLIC_CDN_URL,
    NEXT_PUBLIC_GITHUB_TOKEN: env.NEXT_PUBLIC_GITHUB_TOKEN,
    NEXT_PUBLIC_LINKEDIN_CLIENT_ID: env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
  };
}

// Helper function to check if analytics is enabled
export function isAnalyticsEnabled() {
  return (
    env.NEXT_PUBLIC_ENABLE_ANALYTICS &&
    (env.NEXT_PUBLIC_GA_ID || env.NEXT_PUBLIC_VERCEL_ANALYTICS)
  );
}

// Helper function to get database URL (with fallback)
export function getDatabaseUrl() {
  return env.DATABASE_URL || process.env.DATABASE_URL;
}

// Helper function to get email configuration
export function getEmailConfig() {
  return {
    resendApiKey: env.RESEND_API_KEY,
    formspreeId: env.FORMSPREE_ID,
  };
}

// Helper function to get AWS configuration
export function getAWSConfig() {
  return {
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    region: env.AWS_REGION,
    bucket: env.AWS_S3_BUCKET,
  };
}
