import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const base = "https://jayantrohila.com";
const MIN_GUTTER = 16;
const TOLERANCE = 0.85;

const routes = [
  "/",
  "/work",
  "/work?type=personal",
  "/work/taskflow",
  "/writing",
  "/about",
  "/elsewhere",
  "/interests",
  "/resume",
  "/contact",
  "/does-not-exist-padding-audit",
];

const viewports = [
  { name: "390", width: 390, height: 844 },
  { name: "1024", width: 1024, height: 1366 },
  { name: "1440", width: 1440, height: 900 },
];

async function waitForDeploy(page) {
  for (let i = 0; i < 40; i++) {
    await page.goto(`${base}/`, { waitUntil: "networkidle", timeout: 120_000 });
    const hasMarker = await page.evaluate(() =>
      Boolean(document.querySelector("[data-page-column]")),
    );
    if (hasMarker) return;
    await page.waitForTimeout(15_000);
  }
  throw new Error("deploy wait timeout");
}

function auditPage(page) {
  return page.evaluate(
    ({ min, tol }) => {
      const flags = [];
      const column = document.querySelector("[data-page-column]");
      if (!column) {
        return [{ reason: "missing data-page-column" }];
      }

      const textTags = new Set([
        "P",
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "H6",
        "A",
        "BUTTON",
        "LI",
        "DT",
        "DD",
        "LABEL",
        "SPAN",
      ]);

      const candidates = column.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6, a, button, li, dt, dd, label, span",
      );

      const colRect = column.getBoundingClientRect();
      const colStyle = getComputedStyle(column);
      const colBL = Number.parseFloat(colStyle.borderLeftWidth) || 0;
      const colBR = Number.parseFloat(colStyle.borderRightWidth) || 0;

      function borderW(style, side) {
        return Number.parseFloat(style.getPropertyValue(`border-${side}-width`)) || 0;
      }

      function pushFlag(el, kind, value, extra) {
        const text = (el.textContent || "").trim().slice(0, 40);
        if (!text && el.tagName !== "BUTTON") return;
        flags.push({
          kind,
          value: Math.round(value * 10) / 10,
          tag: el.tagName.toLowerCase(),
          text,
          ...extra,
        });
      }

      for (const el of candidates) {
        if (!textTags.has(el.tagName)) continue;
        if (el.closest('[aria-hidden="true"]')) continue;
        if (el.tagName === "SPAN" && !(el.textContent || "").trim()) continue;

        const style = getComputedStyle(el);
        if (style.display === "none" || style.visibility === "hidden") continue;
        const opacity = Number.parseFloat(style.opacity);
        if (opacity === 0) continue;

        const rect = el.getBoundingClientRect();
        if (rect.width < 1 || rect.height < 1) continue;

        const leftRail = rect.left - (colRect.left + colBL);
        const rightRail = colRect.right - colBR - rect.right;
        if (leftRail < min - tol) {
          pushFlag(el, "rail-left", leftRail, {});
        }
        if (rightRail < min - tol) {
          pushFlag(el, "rail-right", rightRail, {});
        }

        let node = el.parentElement;
        while (node && node !== column && node !== document.body) {
          const ns = getComputedStyle(node);
          const nr = node.getBoundingClientRect();
          const hasBorder =
            borderW(ns, "left") > 0 ||
            borderW(ns, "right") > 0 ||
            borderW(ns, "top") > 0 ||
            borderW(ns, "bottom") > 0;

          if (hasBorder) {
            const bl = borderW(ns, "left");
            const br = borderW(ns, "right");
            const bt = borderW(ns, "top");
            const bb = borderW(ns, "bottom");
            const dLeft = rect.left - (nr.left + bl);
            const dRight = nr.right - br - rect.right;
            const dTop = rect.top - (nr.top + bt);
            const dBottom = nr.bottom - bb - rect.bottom;

            if (bl > 0 && dLeft < min - tol) {
              pushFlag(el, "border-left", dLeft, {
                ancestor: node.tagName.toLowerCase(),
              });
            }
            if (br > 0 && dRight < min - tol) {
              pushFlag(el, "border-right", dRight, {
                ancestor: node.tagName.toLowerCase(),
              });
            }
            if (bt > 0 && dTop < min - tol) {
              pushFlag(el, "border-top", dTop, {
                ancestor: node.tagName.toLowerCase(),
              });
            }
            if (bb > 0 && dBottom < min - tol) {
              pushFlag(el, "border-bottom", dBottom, {
                ancestor: node.tagName.toLowerCase(),
              });
            }
          }
          node = node.parentElement;
        }
      }

      return flags;
    },
    { min: MIN_GUTTER, tol: TOLERANCE },
  );
}

const browser = await chromium.launch({ headless: true });
const probe = await browser.newPage();
await waitForDeploy(probe);
await probe.close();

const report = {};

for (const vp of viewports) {
  for (const route of routes) {
    const key = `${route} @ ${vp.name}`;
    const page = await browser.newPage({
      viewport: { width: vp.width, height: vp.height },
    });
    const path = route.split("?")[0];
    await page.goto(`${base}${path}${route.includes("?") ? `?${route.split("?")[1]}` : ""}`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });
    if (route.includes("#")) {
      await page.evaluate((hash) => {
        const el = document.querySelector(hash);
        el?.scrollIntoView();
      }, `#${route.split("#")[1]}`);
      await page.waitForTimeout(300);
    }
    const flags = await auditPage(page);
    report[key] = flags;
    await page.close();
  }
}

// Mobile menu @ 390
const mobile = await browser.newPage({
  viewport: { width: 390, height: 844 },
});
await mobile.goto(`${base}/`, { waitUntil: "networkidle" });
await mobile.getByRole("button", { name: "Toggle menu" }).click();
await mobile.waitForTimeout(400);
report["mobile-menu @ 390"] = await mobile.evaluate(
  ({ min, tol }) => {
    const menu = document.querySelector("#mobile-menu");
    if (!menu) return [{ reason: "no mobile menu" }];
    const flags = [];
    const links = menu.querySelectorAll("a, button");
    const mr = menu.getBoundingClientRect();
    for (const el of links) {
      const r = el.getBoundingClientRect();
      const left = r.left - mr.left;
      const right = mr.right - r.right;
      if (left < min - tol || right < min - tol) {
        flags.push({
          kind: "mobile-menu",
          left,
          right,
          text: el.textContent?.trim(),
        });
      }
    }
    return flags;
  },
  { min: MIN_GUTTER, tol: TOLERANCE },
);
await mobile.close();
await browser.close();

const outDir = "/opt/cursor/artifacts/padding-final";
mkdirSync(outDir, { recursive: true });

const summary = {};
let total = 0;
for (const [key, flags] of Object.entries(report)) {
  summary[key] = flags.length;
  total += flags.length;
}

const output = { summary, total, report };
writeFileSync(join(outDir, "padding-audit.json"), JSON.stringify(output, null, 2));

console.log("Padding audit summary (flag count per page):");
for (const [key, count] of Object.entries(summary)) {
  console.log(`  ${key}: ${count}`);
}
console.log(`TOTAL: ${total}`);

if (total > 0) {
  console.error("Failures present — see padding-audit.json");
  process.exit(1);
}
