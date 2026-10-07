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

const taskflowAppContext = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  colorScheme: "dark",
});
const taskflowPage = await taskflowAppContext.newPage();
try {
  await taskflowPage.goto("https://v1-taskflow.vercel.app/en-US/auth/sign-in", {
    waitUntil: "networkidle",
    timeout: 60_000,
  });
  await taskflowPage.waitForTimeout(2000);
  await taskflowPage.evaluate(() => {
    const nav = document.querySelector("header");
    if (nav) nav.style.display = "none";
  });
  const main = taskflowPage.locator("main").first();
  const appPath = join(outDir, "taskflow-app.png");
  if (await main.count()) {
    await main.screenshot({ path: appPath });
  } else {
    await taskflowPage.screenshot({ path: appPath });
  }
  console.log("ok", "taskflow-app");
} catch (error) {
  console.warn(
    "skip",
    "taskflow-app",
    error instanceof Error ? error.message : error,
  );
} finally {
  await taskflowPage.close();
}
await taskflowAppContext.close();

await browser.close();
