import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const base = "https://jayantrohila.com";
const outDir = "/opt/cursor/artifacts/blog-final";
mkdirSync(outDir, { recursive: true });

const postSlug = "smooth-scroll-nested-scroll-areas";
const widths = [
  { name: "390", width: 390, height: 2400 },
  { name: "1440", width: 1440, height: 2800 },
];

async function waitForBlog(page) {
  for (let i = 0; i < 40; i++) {
    await page.goto(`${base}/writing`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });
    const ok = await page.evaluate(() =>
      Boolean(document.querySelector("#blog a[href^='/writing/']")),
    );
    if (ok) return;
    await page.waitForTimeout(12_000);
  }
  throw new Error("blog deploy wait timeout");
}

const browser = await chromium.launch({ headless: true });
const probe = await browser.newPage();
await waitForBlog(probe);
await probe.close();

for (const vp of widths) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
  });
  await page.goto(`${base}/writing`, {
    waitUntil: "networkidle",
    timeout: 120_000,
  });
  await page.screenshot({
    path: join(outDir, `writing-${vp.name}.png`),
    fullPage: true,
  });
  await page.goto(`${base}/writing/${postSlug}`, {
    waitUntil: "networkidle",
    timeout: 120_000,
  });
  await page.screenshot({
    path: join(outDir, `post-lenis-${vp.name}.png`),
    fullPage: true,
  });
  await page.close();
  console.log("saved", vp.name);
}

await browser.close();
