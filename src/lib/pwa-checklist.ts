/**
 * PWA Installation Checklist
 *
 * This file documents all required elements for a PWA to be installable
 */

export const pwaChecklist = {
  manifest: {
    required: true,
    status: "✓ /manifest.webmanifest present",
    details: {
      name: "Required - Full app name",
      short_name: "Required - Short name for home screen",
      start_url: "Required - Should be '/'",
      scope: "Required - Should be '/'",
      display: "Required - Should be 'standalone'",
      theme_color: "Required - Brand color",
      background_color: "Required - App background color",
      icons: "Required - At least 192x192 and 512x512",
    },
  },
  serviceWorker: {
    required: true,
    status: "✓ /sw.js present",
    requirements: [
      "Must be on HTTPS (or localhost)",
      "Must respond to fetch events",
      "Must cache resources for offline",
      "Cache-Control header must allow caching or must-revalidate",
    ],
  },
  metadata: {
    required: true,
    tags: [
      "theme-color meta tag",
      "mobile-web-app-capable meta tag",
      "apple-mobile-web-app-capable",
      "apple-mobile-web-app-status-bar-style",
      "apple-mobile-web-app-title",
      "viewport meta tag with device-width",
    ],
  },
  icons: {
    required: true,
    sizes: [
      {
        size: "32x32",
        path: "/api/image?type=icon&size=32",
        purpose: "favicon",
      },
      {
        size: "192x192",
        path: "/api/image?type=icon&size=192",
        purpose: "android chrome",
      },
      {
        size: "512x512",
        path: "/api/image?type=icon&size=512",
        purpose: "splash screen",
      },
    ],
  },
  https: {
    required: true,
    status: "Production must be HTTPS. Development can use localhost:3000",
  },
  ports: {
    http: "localhost:3000",
    https: "Your production domain",
  },
};

export const debugPWA = () => {
  if (typeof window === "undefined") return;

  const checks = {
    manifestLinked: !!document.querySelector('link[rel="manifest"]'),
    serviceWorkerSupported: "serviceWorker" in navigator,
    httpsOrLocalhost:
      location.protocol === "https:" || location.hostname === "localhost",
    beforeInstallPromptSupported: "onbeforeinstallprompt" in window,
  };

  console.log("=== PWA Debug Info ===");
  console.log("Manifest linked:", checks.manifestLinked);
  console.log("Service Worker supported:", checks.serviceWorkerSupported);
  console.log("HTTPS or localhost:", checks.httpsOrLocalhost);
  console.log(
    "beforeinstallprompt supported:",
    checks.beforeInstallPromptSupported,
  );
  console.log("URL:", location.href);
  console.log("Protocol:", location.protocol);
  console.log("Hostname:", location.hostname);

  return checks;
};
