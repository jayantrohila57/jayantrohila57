import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const outDir = join(process.cwd(), "layout-captures");
mkdirSync(outDir, { recursive: true });

const url = "https://jayantrohila.com/";
const viewports = [
  { name: "mobile-390", width: 390, height: 844 },
  { name: "tablet-1024", width: 1024, height: 1366 },
  { name: "desktop-1440", width: 1440, height: 900 },
];

const browser = await chromium.launch({ headless: true });

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 120_000 });
  await page.waitForTimeout(1500);
  await page.screenshot({
    path: join(outDir, `homepage-${vp.name}.png`),
    fullPage: true,
  });
  console.log("saved", vp.name);
  await context.close();
}

await browser.close();
