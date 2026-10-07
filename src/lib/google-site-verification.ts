const PLACEHOLDER_PATTERN =
  /your_google|verification_code|changeme|placeholder|example|xxx{3,}/i;

/** Search Console meta token from server or public env; never emit known placeholders. */
export function getGoogleSiteVerification(): string | undefined {
  const raw =
    process.env.GOOGLE_SITE_VERIFICATION ??
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const value = raw?.trim();
  if (!value || PLACEHOLDER_PATTERN.test(value)) {
    return undefined;
  }
  return value;
}
