import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const outDir = join(process.cwd(), "public", "projects");
mkdirSync(outDir, { recursive: true });

const targets = [
  { slug: "lucsum", url: "https://lucsum.vercel.app" },
  { slug: "loftlancer", url: "https://loftlancer.com" },
  { slug: "stats-on-spotify", url: "https://statsonspotify.vercel.app/" },
  { slug: "modelry", url: "https://modelry.vercel.app" },
  { slug: "feature-kit", url: "https://feature-kits.vercel.app" },
];

const browser = await chromium.launch({ headless: true });
const defaultContext = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 1,
});

for (const { slug, url } of targets) {
  const page = await defaultContext.newPage();
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 });
    await page.waitForTimeout(2500);
    const path = join(outDir, `${slug}.png`);
    await page.screenshot({ path, fullPage: false });
    console.log("ok", slug);
  } catch (error) {
    console.warn("skip", slug, error instanceof Error ? error.message : error);
  } finally {
    await page.close();
  }
}

await defaultContext.close();

await browser.close();
