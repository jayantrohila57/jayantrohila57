import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const base = "https://jayantrohila.com";
const outDir = "/opt/cursor/artifacts/design-final";
mkdirSync(outDir, { recursive: true });

const routes = ["/", "/work", "/writing", "/about"];
const widths = [390, 768, 1024, 1440];

async function waitForDeploy(page) {
  for (let i = 0; i < 48; i++) {
    await page.goto(`${base}/`, { waitUntil: "networkidle", timeout: 120_000 });
    const ok = await page.evaluate(() => {
      const bg = getComputedStyle(document.documentElement).getPropertyValue(
        "--background",
      );
      return bg.trim().length > 0 && document.documentElement.classList.contains("dark");
    });
    if (ok) return;
    await page.waitForTimeout(12_000);
  }
  throw new Error("deploy wait timeout");
}

const browser = await chromium.launch({ headless: true });
const probe = await browser.newPage();
await waitForDeploy(probe);
await probe.close();

const report = { routes: {}, tokenSample: null };

for (const route of routes) {
  report.routes[route] = {};
  for (const width of widths) {
    const page = await browser.newPage({
      viewport: { width, height: width < 768 ? 1200 : 900 },
    });
    await page.goto(`${base}${route}`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });

    const tokens = await page.evaluate(() => {
      const root = document.documentElement;
      const cs = getComputedStyle(root);
      const body = getComputedStyle(document.body);
      return {
        background: cs.getPropertyValue("--background").trim(),
        foreground: cs.getPropertyValue("--foreground").trim(),
        border: cs.getPropertyValue("--border").trim(),
        bodyBg: body.backgroundColor,
        bodyColor: body.color,
        hasTypeEyebrow: Boolean(document.querySelector(".type-eyebrow, .type-eyebrow-sm")),
      };
    });

    report.routes[route][width] = tokens;
    if (!report.tokenSample) report.tokenSample = tokens;

    await page.screenshot({
      path: join(outDir, `${route === "/" ? "home" : route.slice(1)}-${width}.png`),
      fullPage: true,
    });
    await page.close();
  }
}

await browser.close();

writeFileSync(join(outDir, "design-verify.json"), JSON.stringify(report, null, 2));

let failed = false;
const expectedDarkBg = "#0b0d0f";
if (!report.tokenSample?.background?.toLowerCase().includes("0b0d0f")) {
  console.error("Unexpected --background:", report.tokenSample?.background);
  failed = true;
}

for (const route of routes) {
  for (const width of widths) {
    const t = report.routes[route][width];
    if (!t.hasTypeEyebrow && route !== "/") {
      console.warn(`no eyebrow class on ${route} @ ${width}`);
    }
  }
}

if (failed) process.exit(1);
console.log("verify-design-live: OK");
console.log("artifacts:", outDir);
