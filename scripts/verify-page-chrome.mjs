import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const base = "https://jayantrohila.com";
const routes = [
  "/work",
  "/work/taskflow",
  "/about",
  "/resume",
  "/engineering",
  "/contact",
  "/experiments",
];
const viewports = [
  { name: "mobile-390", width: 390, height: 844 },
  { name: "desktop-1280", width: 1280, height: 800 },
];
const outDir = "/opt/cursor/artifacts/page-chrome-verify";
mkdirSync(outDir, { recursive: true });

const results = [];

const browser = await chromium.launch({ headless: true });

for (const route of routes) {
  for (const vp of viewports) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
    });
    await page.goto(`${base}${route}`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });
    const back = page.getByRole("button", { name: "Go back" });
    const count = await back.count();
    const visible = count > 0 ? await back.isVisible() : false;
    const breadcrumb = page.locator('nav[aria-label="breadcrumb"]');
    const crumbVisible = await breadcrumb.isVisible();
    results.push({ route, viewport: vp.name, backVisible: visible, breadcrumb: crumbVisible });
    if (visible && crumbVisible) {
      const box = await page.locator("main .border-b").first().boundingBox();
      if (box) {
        await page.screenshot({
          path: join(outDir, `${route.replace(/\//g, "_")}-${vp.name}.png`),
          clip: {
            x: Math.max(0, box.x),
            y: Math.max(0, box.y),
            width: Math.min(vp.width, box.width),
            height: Math.min(120, box.height),
          },
        });
      }
    }
    await page.close();
  }
}

writeFileSync(join(outDir, "results.json"), JSON.stringify(results, null, 2));
console.log(JSON.stringify(results, null, 2));

const failed = results.filter((r) => !r.backVisible || !r.breadcrumb);
if (failed.length) {
  process.exitCode = 1;
}

await browser.close();
