import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const base = "https://jayantrohila.com";
const outDir = "/opt/cursor/artifacts/layout-final";
mkdirSync(outDir, { recursive: true });

const viewports = [
  { name: "390", width: 390, height: 844 },
  { name: "1024", width: 1024, height: 1366 },
  { name: "1440", width: 1440, height: 900 },
];

async function waitForDeploy(page) {
  for (let i = 0; i < 40; i++) {
    const res = await page.goto(`${base}/resume`, {
      waitUntil: "domcontentloaded",
      timeout: 60_000,
    });
    const html = await res?.text();
    if (html?.includes("content-image") && html?.includes("breadcrumb")) {
      return true;
    }
    await page.waitForTimeout(15_000);
  }
  throw new Error("Deploy did not include latest markup in time");
}

const browser = await chromium.launch({ headless: true });

for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
  });
  const page = await context.newPage();
  await waitForDeploy(page);
  await page.goto(`${base}/resume`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: join(outDir, `resume-${vp.name}.png`),
    fullPage: true,
  });
  await page.goto(`${base}/work/taskflow`, { waitUntil: "networkidle" });
  await page.waitForTimeout(800);
  const media = page.locator(".content-image").first();
  if (await media.count()) {
    await media.hover();
    await page.waitForTimeout(400);
    await page.screenshot({
      path: join(outDir, `taskflow-media-hover-${vp.name}.png`),
      fullPage: false,
    });
  }
  await context.close();
  console.log("ok", vp.name);
}

// Command palette scroll check (desktop)
const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
const page = await ctx.newPage();
await page.goto(base, { waitUntil: "networkidle" });
await page.keyboard.press("Meta+k");
await page.waitForSelector("[cmdk-list]", { timeout: 10_000 });
const list = page.locator("[cmdk-list]");
const box = await list.boundingBox();
if (box) {
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.wheel(0, 400);
  await page.waitForTimeout(300);
}
await page.screenshot({
  path: join(outDir, "command-menu-scroll.png"),
  fullPage: false,
});
await ctx.close();

await browser.close();
console.log("artifacts in", outDir);
