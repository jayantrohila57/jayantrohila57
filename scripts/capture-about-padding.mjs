import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const base = process.env.CAPTURE_BASE ?? "https://jayantrohila.com";
const outDir = "/opt/cursor/artifacts/padding-final";
const prefix = process.env.CAPTURE_PREFIX ?? "about-after";
mkdirSync(outDir, { recursive: true });

const widths = [
  { name: "390", width: 390, height: 2400 },
  { name: "1024", width: 1024, height: 2800 },
  { name: "1440", width: 1440, height: 2800 },
];

const browser = await chromium.launch({ headless: true });
for (const vp of widths) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
  });
  await page.goto(`${base}/about`, {
    waitUntil: "networkidle",
    timeout: 120_000,
  });
  await page.screenshot({
    path: join(outDir, `${prefix}-${vp.name}.png`),
    fullPage: true,
  });
  await page.close();
  console.log("saved", `${prefix}-${vp.name}.png`);
}
await browser.close();
