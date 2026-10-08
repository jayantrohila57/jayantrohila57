import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const base = "https://jayantrohila.com";
const outDir = "/opt/cursor/artifacts/childpages-final";
mkdirSync(outDir, { recursive: true });

const routes = [
  "/",
  "/about",
  "/contact",
  "/work",
  "/work/taskflow",
  "/engineering",
  "/experiments",
  "/resume",
  "/does-not-exist-404",
];

const viewports = [
  { name: "390", width: 390, height: 844 },
  { name: "1024", width: 1024, height: 1366 },
  { name: "1440", width: 1440, height: 900 },
];

async function waitForDeploy(page) {
  for (let i = 0; i < 40; i++) {
    const res = await page.goto(`${base}/work/taskflow`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });
    const html = await res?.text();
    if (
      html?.includes('title="Search') &&
      html?.includes("Toggle menu") &&
      !html?.includes("w-[calc(100%+2rem)]")
    ) {
      return;
    }
    await page.waitForTimeout(15_000);
  }
  throw new Error("deploy wait timeout");
}

const browser = await chromium.launch({ headless: true });
const probe = await browser.newPage();
await waitForDeploy(probe);
await probe.close();

for (const route of routes) {
  const slug = route.replace(/\//g, "_").replace(/^_/, "") || "home";
  for (const vp of viewports) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
    });
    await page.goto(`${base}${route}`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });
    await page.waitForTimeout(800);
    await page.screenshot({
      path: join(outDir, `${slug}-${vp.name}.png`),
      fullPage: true,
    });
    await page.close();
    console.log("saved", slug, vp.name);
  }
}

await browser.close();
