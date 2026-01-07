"use client";

import { siteConfig, baseViewport } from "@/config/site.config";
import { baseMetadata } from "@/config/metadata";

export default function BrandPage() {
  const ogImage = `${siteConfig.siteUrl}/opengraph-image`;
  const twitterImage = `${siteConfig.siteUrl}/twitter-image`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
          Brand & Metadata Debug Page
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Verify all metadata and branding configurations are working correctly
        </p>

        <div className="grid gap-8">
          {/* Site Configuration */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              📍 Site Configuration
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Site Name:
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  {siteConfig.siteName}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Site URL:
                </span>
                <span className="ml-2 text-blue-600 dark:text-blue-400">
                  {siteConfig.siteUrl}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Description:
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  {siteConfig.siteDescription}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Author:
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  {siteConfig.author.name} ({siteConfig.author.role})
                </span>
              </div>
            </div>
          </section>

          {/* Open Graph */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              📱 Open Graph (Facebook, LinkedIn, etc.)
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Title:
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  {siteConfig.siteTitle}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Description:
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  {siteConfig.siteDescription}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Image URL:
                </span>
                <a
                  href={ogImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-600 dark:text-blue-400 hover:underline break-all"
                >
                  {ogImage}
                </a>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Image Size:
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  1200x630px
                </span>
              </div>
            </div>
          </section>

          {/* Twitter Card */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              🐦 Twitter Card
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Card Type:
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  summary_large_image
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Title:
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  {siteConfig.siteTitle}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Description:
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  {siteConfig.siteDescription}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Image URL:
                </span>
                <a
                  href={twitterImage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-600 dark:text-blue-400 hover:underline break-all"
                >
                  {twitterImage}
                </a>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Creator:
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  @jayantrohila
                </span>
              </div>
            </div>
          </section>

          {/* Apple Web App */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              🍎 Apple Web App
            </h2>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Capable:
                </span>
                <span className="ml-2 text-green-600 dark:text-green-400">
                  ✓ Yes
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Status Bar Style:
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  black-translucent
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Title:
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  {siteConfig.siteName}
                </span>
              </div>
              <div>
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Apple Touch Icon:
                </span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  /icon
                </span>
              </div>
            </div>
          </section>

          {/* Theme Configuration */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              🎨 Theme Configuration
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-4">
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    Primary Color:
                  </span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {siteConfig.theme.primaryColor}
                  </span>
                </div>
                <div
                  className="w-12 h-12 rounded border-2 border-gray-300"
                  style={{ backgroundColor: siteConfig.theme.primaryColor }}
                />
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    Background Color:
                  </span>
                  <span className="ml-2 text-gray-600 dark:text-gray-400">
                    {siteConfig.theme.backgroundColor}
                  </span>
                </div>
                <div
                  className="w-12 h-12 rounded border-2 border-gray-300"
                  style={{ backgroundColor: siteConfig.theme.backgroundColor }}
                />
              </div>
            </div>
          </section>

          {/* Image Preview */}
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              🖼️ Social Media Preview
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* OG Image */}
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Open Graph Image
                </h3>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src={ogImage}
                    alt="Open Graph Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'%3E%3Crect fill='%23ddd' width='1200' height='630'/%3E%3Ctext x='50%' y='50%' font-size='24' text-anchor='middle' dy='.3em' fill='%23999'%3ELoading image...%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>

              {/* Twitter Image */}
              <div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  Twitter Card Image
                </h3>
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src={twitterImage}
                    alt="Twitter Card Preview"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='630'%3E%3Crect fill='%23ddd' width='1200' height='630'/%3E%3Ctext x='50%' y='50%' font-size='24' text-anchor='middle' dy='.3em' fill='%23999'%3ELoading image...%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Testing Instructions */}
          <section className="bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md p-6 border border-blue-200 dark:border-blue-700">
            <h2 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-100">
              ✅ Testing Checklist
            </h2>
            <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
              <li>
                ✓ OG Image is loading correctly above (1200x630px)
              </li>
              <li>
                ✓ Twitter Image is loading correctly above (1200x630px)
              </li>
              <li>
                ✓ All URLs are using absolute paths ({siteConfig.siteUrl})
              </li>
              <li>
                ✓ Apple Web App metadata is configured
              </li>
              <li>
                ✓ Theme colors are displaying correctly
              </li>
              <li>
                🔗 Test on social media:
                <ul className="ml-4 mt-2 space-y-1">
                  <li>
                    • Facebook:{" "}
                    <a
                      href={`https://developers.facebook.com/tools/debug/sharing/?url=${encodeURIComponent(siteConfig.siteUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-300 hover:underline"
                    >
                      Sharing Debugger
                    </a>
                  </li>
                  <li>
                    • Twitter:{" "}
                    <a
                      href={`https://cards-dev.twitter.com/validator?url=${encodeURIComponent(siteConfig.siteUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-300 hover:underline"
                    >
                      Card Validator
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
