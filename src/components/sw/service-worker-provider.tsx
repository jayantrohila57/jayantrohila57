"use client";

import { useEffect } from "react";

export function ServiceWorkerProvider() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("serviceWorker" in navigator) {
        // Register immediately in development, wait for load in production
        const registerSW = () => {
          // First, unregister any existing service workers to avoid conflicts
          navigator.serviceWorker
            .getRegistrations()
            .then((registrations) => {
              const unregisterPromises = registrations.map((registration) => {
                return registration.unregister();
              });

              return Promise.all(unregisterPromises);
            })
            .then(() => {
              // Now register the new service worker
              return navigator.serviceWorker.register("/sw.js", {
                scope: "/",
              });
            })
            .then((registration) => {
              // Force update the service worker
              if (registration.waiting) {
                registration.waiting.postMessage({ type: "SKIP_WAITING" });
              }

              // Check if there's an active service worker
              if (registration.active) {
                // Active service worker
              } else if (registration.installing) {
                // Listen for installation completion
                registration.installing.addEventListener("statechange", () => {
                  if (
                    registration.installing?.state === "installed" &&
                    navigator.serviceWorker.controller
                  ) {
                    window.location.reload();
                  }
                });
              } else if (registration.waiting) {
                // Waiting service worker
              }
            })
            .catch((registrationError) => {
              console.error(
                "Service Worker Provider: SW registration failed: ",
                registrationError,
              );

              // Try to register a simple test service worker
              navigator.serviceWorker
                .register("/test-sw.js", {
                  scope: "/",
                })
                .then((_testRegistration) => {
                  // Test service worker registered
                })
                .catch((testError) => {
                  console.error(
                    "Service Worker Provider: Test SW also failed: ",
                    testError,
                  );
                });
            });

          // Listen for service worker updates
          navigator.serviceWorker.addEventListener("controllerchange", () => {
            window.location.reload();
          });
        };

        // In development, register immediately
        if (
          window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1"
        ) {
          registerSW();
        } else {
          // In production, wait for page load
          window.addEventListener("load", registerSW);
        }
      } else {
        console.warn(
          "Service Worker Provider: Browser does not support service workers",
        );
      }
    }
  }, []);

  return null;
}
