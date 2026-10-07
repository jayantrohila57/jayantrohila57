import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const outDir = join(process.cwd(), "public", "projects");
mkdirSync(outDir, { recursive: true });

const targets = [
  { slug: "e-commerce", url: "https://e-commerce-jayantrohila.vercel.app" },
  { slug: "env-manager", url: "https://env-manager-web.vercel.app" },
  { slug: "taskflow", url: "https://v1-taskflow.vercel.app/" },
  { slug: "inkly-cms", url: "https://inkly-blog.vercel.app" },
  { slug: "libyui", url: "https://libyui.vercel.app/" },
  { slug: "image-editor", url: "https://v1-image-editor.vercel.app" },
  { slug: "stats-on-spotify", url: "https://statsonspotify.vercel.app/" },
  { slug: "patternlab", url: "https://patternlab.vercel.app" },
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  deviceScaleFactor: 1,
});

for (const { slug, url } of targets) {
  const page = await context.newPage();
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

await context.close();
await browser.close();
