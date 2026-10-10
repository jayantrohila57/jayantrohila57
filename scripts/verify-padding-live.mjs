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

      const blockish = new Set([
        "block",
        "flex",
        "grid",
        "table",
        "table-row",
        "table-cell",
        "list-item",
      ]);

      function isLeafText(el) {
        const text = (el.textContent || "").trim();
        if (!text) return false;
        for (const child of el.children) {
          const d = getComputedStyle(child).display;
          if (d === "none" || d === "contents") continue;
          if (blockish.has(d) && (child.textContent || "").trim()) {
            return false;
          }
        }
        return true;
      }

      function borderW(style, side) {
        return Number.parseFloat(style.getPropertyValue(`border-${side}-width`)) || 0;
      }

      function hasBorder(node) {
        const st = getComputedStyle(node);
        return (
          borderW(st, "left") > 0 ||
          borderW(st, "right") > 0 ||
          borderW(st, "top") > 0 ||
          borderW(st, "bottom") > 0
        );
      }

      function nearestBordered(el) {
        let node = el.parentElement;
        while (node && node !== column && node !== document.body) {
          if (hasBorder(node)) return node;
          node = node.parentElement;
        }
        return null;
      }

      function pushFlag(el, kind, value, extra) {
        flags.push({
          kind,
          value: Math.round(value * 10) / 10,
          tag: el.tagName.toLowerCase(),
          text: (el.textContent || "").trim().slice(0, 48),
          ...extra,
        });
      }

      const colRect = column.getBoundingClientRect();
      const colStyle = getComputedStyle(column);
      const colBL = borderW(colStyle, "left");
      const colBR = borderW(colStyle, "right");

      const candidates = column.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6, a, button, li, dt, dd, label, span",
      );

      for (const el of candidates) {
        if (el.classList.contains("skip-link")) continue;
        if (!isLeafText(el)) continue;

        const style = getComputedStyle(el);
        if (style.display === "none" || style.visibility === "hidden") continue;
        if (Number.parseFloat(style.opacity) === 0) continue;

        const rect = el.getBoundingClientRect();
        if (rect.width < 1 || rect.height < 1) continue;

        const leftRail = rect.left - (colRect.left + colBL);
        const rightRail = colRect.right - colBR - rect.right;
        if (leftRail < min - tol) pushFlag(el, "rail-left", leftRail, {});
        if (rightRail < min - tol) pushFlag(el, "rail-right", rightRail, {});

        const ancestor = nearestBordered(el);
        if (!ancestor) continue;

        const ns = getComputedStyle(ancestor);
        const nr = ancestor.getBoundingClientRect();
        const bl = borderW(ns, "left");
        const br = borderW(ns, "right");
        const bt = borderW(ns, "top");
        const bb = borderW(ns, "bottom");

        if (bl > 0) {
          const d = rect.left - (nr.left + bl);
          if (d < min - tol) {
            pushFlag(el, "border-left", d, {
              ancestor: ancestor.tagName.toLowerCase(),
            });
          }
        }
        if (br > 0) {
          const d = nr.right - br - rect.right;
          if (d < min - tol) {
            pushFlag(el, "border-right", d, {
              ancestor: ancestor.tagName.toLowerCase(),
            });
          }
        }
        if (bt > 0) {
          const d = rect.top - (nr.top + bt);
          if (d < min - tol) {
            pushFlag(el, "border-top", d, {
              ancestor: ancestor.tagName.toLowerCase(),
            });
          }
        }
        if (bb > 0) {
          const d = nr.bottom - bb - rect.bottom;
          if (d < min - tol) {
            pushFlag(el, "border-bottom", d, {
              ancestor: ancestor.tagName.toLowerCase(),
            });
          }
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
    const [path, query] = route.split("?");
    await page.goto(`${base}${path}${query ? `?${query}` : ""}`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });
    report[key] = await auditPage(page);
    await page.close();
  }
}

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
    const mr = menu.getBoundingClientRect();
    const links = menu.querySelectorAll("a");
    for (const el of links) {
      const r = el.getBoundingClientRect();
      const left = r.left - mr.left;
      const right = mr.right - r.right;
      if (left < min - tol || right < min - tol) {
        flags.push({
          kind: "mobile-menu",
          left: Math.round(left),
          right: Math.round(right),
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

writeFileSync(
  join(outDir, "padding-audit.json"),
  JSON.stringify({ summary, total, report }, null, 2),
);

console.log("Padding audit summary (flag count per page):");
for (const [key, count] of Object.entries(summary)) {
  console.log(`  ${key}: ${count}`);
}
console.log(`TOTAL: ${total}`);

if (total > 0) {
  process.exit(1);
}
