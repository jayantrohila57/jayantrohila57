import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const base = "https://jayantrohila.com";
const outDir = "/opt/cursor/artifacts/nav-final";
mkdirSync(outDir, { recursive: true });

async function waitForDeploy(page) {
  for (let i = 0; i < 40; i++) {
    const res = await page.goto(`${base}/writing`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });
    const html = await res?.text();
    if (html?.includes("Writing overview") || html?.includes('href="/writing"')) {
      const nav = await page.evaluate(() => {
        const links = [
          ...document.querySelectorAll('nav[aria-label="Primary"] a'),
        ].map((a) => a.textContent?.trim());
        return links;
      });
      if (
        nav.join("|").includes("Work") &&
        nav.join("|").includes("Writing") &&
        nav.join("|").includes("Elsewhere") &&
        !nav.join("|").includes("Resume")
      ) {
        return;
      }
    }
    await page.waitForTimeout(15_000);
  }
  throw new Error("deploy wait timeout");
}

const browser = await chromium.launch({ headless: true });

const probe = await browser.newPage();
await waitForDeploy(probe);
await probe.close();

// Header 1440
const desktop = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});
await desktop.goto(`${base}/work`, {
  waitUntil: "networkidle",
  timeout: 120_000,
});
await desktop.screenshot({
  path: join(outDir, "header-work-1440.png"),
  fullPage: false,
});
await desktop.close();

// Work filters
const work = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});
await work.goto(`${base}/work?type=personal`, {
  waitUntil: "networkidle",
  timeout: 120_000,
});
await work.screenshot({
  path: join(outDir, "work-filters-1440.png"),
  fullPage: true,
});
await work.close();

// Mobile menu 390
const mobile = await browser.newPage({
  viewport: { width: 390, height: 844 },
});
await mobile.goto(`${base}/about`, {
  waitUntil: "networkidle",
  timeout: 120_000,
});
await mobile.getByRole("button", { name: "Toggle menu" }).click();
await mobile.waitForTimeout(400);
await mobile.screenshot({
  path: join(outDir, "mobile-menu-390.png"),
  fullPage: false,
});
await mobile.close();

// Footer
const footerPage = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});
await footerPage.goto(`${base}/`, {
  waitUntil: "networkidle",
  timeout: 120_000,
});
await footerPage.evaluate(() =>
  window.scrollTo(0, document.body.scrollHeight),
);
await footerPage.waitForTimeout(500);
await footerPage.screenshot({
  path: join(outDir, "footer-1440.png"),
  fullPage: false,
});
await footerPage.close();

await browser.close();
console.log("saved nav-final captures");
