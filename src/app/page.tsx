"use client";

import { useState, useEffect } from "react";
import { ModeToggle } from "@/components/shared/theme/theme-toggle";

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [installError, setInstallError] = useState<string>("");

  useEffect(() => {
    // Check if running on iOS
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream,
    );

    // Check if already installed
    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
      setInstallError("");
    };

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      setShowInstallButton(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      setInstallError(
        "Installation prompt not available. Please try again later.",
      );
      return;
    }

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;

      if (outcome === "accepted") {
        setShowInstallButton(false);
        setDeferredPrompt(null);
        setInstallError("");
      } else {
        setInstallError("Installation cancelled");
      }
    } catch (error) {
      setInstallError("Installation failed. Please try again.");
      console.error("Install error:", error);
    }
  };

  if (isStandalone) {
    return null; // Don't show install button if already installed
  }

  return (
    <div className="p-4 border rounded-lg mb-4 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
      <h3 className="text-lg font-semibold mb-2">Install App</h3>

      {showInstallButton && !isIOS && (
        <div className="space-y-2">
          <button
            onClick={handleInstallClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2 font-medium"
          >
            Install App
          </button>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Get quick access to this app on your device
          </p>
        </div>
      )}

      {isIOS && (
        <div className="space-y-2">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">
            To install this app on your iOS device:
          </p>
          <ol className="text-sm text-gray-600 dark:text-gray-400 list-decimal list-inside space-y-1">
            <li>
              Tap the share button{" "}
              <span role="img" aria-label="share icon">
                ⎋
              </span>
            </li>
            <li>
              Scroll down and tap "Add to Home Screen"{" "}
              <span role="img" aria-label="plus icon">
                ➕
              </span>
            </li>
            <li>Tap "Add" to confirm</li>
          </ol>
        </div>
      )}

      {installError && (
        <p className="text-sm text-red-600 dark:text-red-400 mt-2">
          {installError}
        </p>
      )}

      {!showInstallButton && !isIOS && !installError && (
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Install this app on your device for a better experience.
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [swStatus, setSwStatus] = useState<string>("Checking...");
  const [pwaFeatures, setPwaFeatures] = useState<any>({});

  useEffect(() => {
    // Check service worker status
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        if (registrations.length > 0) {
          setSwStatus(`Active (${registrations.length} registered)`);
        } else {
          setSwStatus("Not registered");
        }
      });
    } else {
      setSwStatus("Not supported");
    }

    // Check PWA features
    const features = {
      serviceWorker: "serviceWorker" in navigator,
      beforeinstallprompt: "onbeforeinstallprompt" in window,
      manifest: !!document.querySelector('link[rel="manifest"]'),
      standalone: window.matchMedia("(display-mode: standalone)").matches,
      https:
        location.protocol === "https:" || location.hostname === "localhost",
    };
    setPwaFeatures(features);
  }, []);

  const manualRegisterSW = async () => {
    try {
      const registration = await navigator.serviceWorker.register("/sw.js");
      console.log("Manual SW registration successful:", registration);
      setSwStatus("Manually registered");
    } catch (error) {
      console.error("Manual SW registration failed:", error);
      setSwStatus("Registration failed");
    }
  };

  const checkPWAInstall = () => {
    console.log("PWA Features:", pwaFeatures);
    console.log("User Agent:", navigator.userAgent);
    console.log("Protocol:", location.protocol);
    console.log("Hostname:", location.hostname);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">PWA Demo</h1>
          <ModeToggle />
        </div>

        <div className="space-y-4">
          {/* Service Worker Status */}
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Service Worker Status
            </h3>
            <p className="text-sm text-gray-600 mb-2">Status: {swStatus}</p>
            <button
              onClick={manualRegisterSW}
              className="bg-purple-500 text-white px-3 py-1 rounded text-sm mr-2"
            >
              Manual Register
            </button>
            <button
              onClick={checkPWAInstall}
              className="bg-gray-500 text-white px-3 py-1 rounded text-sm"
            >
              Check PWA
            </button>
          </div>

          {/* PWA Features Status */}
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">PWA Features Status</h3>
            <div className="text-sm space-y-1">
              <div className="flex justify-between">
                <span>Service Worker:</span>
                <span
                  className={
                    pwaFeatures.serviceWorker
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {pwaFeatures.serviceWorker ? "✅" : "❌"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Install Prompt:</span>
                <span
                  className={
                    pwaFeatures.beforeinstallprompt
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  {pwaFeatures.beforeinstallprompt ? "✅" : "❌"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Manifest:</span>
                <span
                  className={
                    pwaFeatures.manifest ? "text-green-600" : "text-red-600"
                  }
                >
                  {pwaFeatures.manifest ? "✅" : "❌"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>HTTPS/Localhost:</span>
                <span
                  className={
                    pwaFeatures.https ? "text-green-600" : "text-red-600"
                  }
                >
                  {pwaFeatures.https ? "✅" : "❌"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Standalone Mode:</span>
                <span
                  className={
                    pwaFeatures.standalone ? "text-green-600" : "text-gray-600"
                  }
                >
                  {pwaFeatures.standalone ? "✅" : "○"}
                </span>
              </div>
            </div>
          </div>

          <InstallPrompt />

          <div className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">About this PWA</h2>
            <p className="text-gray-600">
              This is a Progressive Web Application built with Next.js. You can
              install it on your device and use it offline.
            </p>
          </div>

          <div className="p-4 border rounded-lg">
            <h2 className="text-xl font-semibold mb-2">PWA Features</h2>
            <ul className="text-gray-600 space-y-1">
              <li>✅ Installable on desktop and mobile</li>
              <li>✅ Works offline with service worker</li>
              <li>✅ Fast loading with caching</li>
              <li>✅ Responsive design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
