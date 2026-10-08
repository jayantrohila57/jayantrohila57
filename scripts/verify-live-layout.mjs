import { chromium } from "playwright";

const base = "https://jayantrohila.com";

const routes = [
  "/",
  "/about",
  "/contact",
  "/work",
  "/work/taskflow",
  "/engineering",
  "/experiments",
  "/resume",
  "/does-not-exist-404",
];

const viewports = [
  { name: "390", width: 390, height: 844 },
  { name: "1440", width: 1440, height: 900 },
];

async function waitForDeploy(page) {
  for (let i = 0; i < 40; i++) {
    const res = await page.goto(`${base}/work/taskflow`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });
    const html = await res?.text();
    if (
      html?.includes('title="Search') &&
      html?.includes("Toggle menu") &&
      !html?.includes("w-[calc(100%+2rem)]")
    ) {
      return;
    }
    await page.waitForTimeout(15_000);
  }
  throw new Error("deploy wait timeout");
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await waitForDeploy(page);

const failures = [];

for (const vp of viewports) {
  await page.setViewportSize({ width: vp.width, height: vp.height });
  for (const route of routes) {
    await page.goto(`${base}${route}`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });
    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
    }));
    if (metrics.scrollWidth > metrics.innerWidth) {
      failures.push({
        route,
        vp: vp.name,
        ...metrics,
      });
    }
    if (vp.name === "390" || vp.name === "1440") {
      const header = await page.evaluate(() => {
        const nav = document.querySelector('nav[aria-label="Site"]');
        const buttons = nav?.querySelectorAll("button, a[title]") ?? [];
        const labels = [...buttons].map(
          (el) =>
            el.getAttribute("title") ||
            el.getAttribute("aria-label") ||
            el.textContent?.trim(),
        );
        return labels.filter(Boolean);
      });
      const need = ["GitHub", "Search", "Contact"];
      for (const n of need) {
        if (!header.some((h) => h?.includes(n))) {
          failures.push({
            route,
            vp: vp.name,
            issue: `missing header control: ${n}`,
            header,
          });
        }
      }
      if (vp.name === "390") {
        const hasMenu = header.some((h) => h?.includes("Toggle menu"));
        if (!hasMenu) {
          failures.push({
            route,
            vp: vp.name,
            issue: "missing mobile menu toggle",
            header,
          });
        }
      }
    }
  }
}

// Meta → media seam on taskflow (no empty band between rules)
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(`${base}/work/taskflow`, {
  waitUntil: "networkidle",
  timeout: 120_000,
});
const bandGap = await page.evaluate(() => {
  const grid = document.querySelector(
    ".grid.gap-px.border-b.border-border",
  );
  const media = grid?.nextElementSibling;
  if (!grid || !media) return { ok: false, reason: "nodes missing" };
  const g = grid.getBoundingClientRect();
  const m = media.getBoundingClientRect();
  const gap = m.top - g.bottom;
  return { ok: gap < 2, gap, gBottom: g.bottom, mTop: m.top };
});
if (!bandGap.ok) {
  failures.push({ issue: "taskflow meta/media gap", bandGap });
}

// Scroll-to-top
await page.evaluate(() => window.scrollTo(0, 1200));
await page.waitForTimeout(400);
const scrollBtnVisible = await page
  .locator('button[aria-label="Scroll to top"]')
  .isVisible();
if (!scrollBtnVisible) {
  failures.push({ issue: "scroll-to-top not visible after scroll" });
}

await browser.close();

if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}
console.log("verify-live-layout: ok");
