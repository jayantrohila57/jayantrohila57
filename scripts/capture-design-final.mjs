import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const base = "https://jayantrohila.com";
const outDir = "/opt/cursor/artifacts/design-final";
mkdirSync(outDir, { recursive: true });

const routes = [
  { slug: "home", path: "/" },
  { slug: "work", path: "/work" },
  { slug: "writing", path: "/writing" },
  { slug: "about", path: "/about" },
];

const widths = [390, 768, 1024, 1440];

const browser = await chromium.launch({ headless: true });
for (const route of routes) {
  for (const width of widths) {
    const page = await browser.newPage({
      viewport: { width, height: width < 768 ? 1400 : 1000 },
    });
    await page.goto(`${base}${route.path}`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });
    await page.screenshot({
      path: join(outDir, `${route.slug}-${width}.png`),
      fullPage: true,
    });
    await page.close();
    console.log("saved", route.slug, width);
  }
}
await browser.close();
