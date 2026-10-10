import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const base = "https://jayantrohila.com";
const outDir = "/opt/cursor/artifacts/padding-final";
mkdirSync(outDir, { recursive: true });

const routes = [
  { slug: "home", path: "/" },
  { slug: "work", path: "/work" },
  { slug: "writing", path: "/writing" },
  { slug: "about", path: "/about" },
  { slug: "elsewhere", path: "/elsewhere" },
  { slug: "resume", path: "/resume" },
];

const widths = [
  { name: "390", width: 390, height: 2000 },
  { name: "1440", width: 1440, height: 2400 },
];

async function waitForDeploy(page) {
  for (let i = 0; i < 40; i++) {
    await page.goto(`${base}/`, { waitUntil: "networkidle", timeout: 120_000 });
    if (await page.evaluate(() => Boolean(document.querySelector("[data-page-column]")))) {
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
  for (const vp of widths) {
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
    });
    await page.goto(`${base}${route.path}`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });
    await page.screenshot({
      path: join(outDir, `${route.slug}-${vp.name}.png`),
      fullPage: true,
    });
    await page.close();
    console.log("saved", route.slug, vp.name);
  }
}

await browser.close();
