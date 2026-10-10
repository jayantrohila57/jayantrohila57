import { chromium } from "playwright";

const base = process.env.VERIFY_BASE ?? "https://jayantrohila.com";
const MIN = 16;
const TOL = 0.85;

const viewports = [
  { name: "390", width: 390, height: 1200 },
  { name: "1024", width: 1024, height: 1400 },
  { name: "1440", width: 1440, height: 1400 },
];

function auditAbout(page) {
  return page.evaluate(
    ({ min, tol }) => {
      const flags = [];
      const main = document.querySelector("main");
      const column = document.querySelector("[data-page-column]");
      if (!main || !column) return [{ reason: "missing main/column" }];

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
          if (blockish.has(d) && (child.textContent || "").trim()) return false;
        }
        return true;
      }

      function bw(st, side) {
        return Number.parseFloat(st.getPropertyValue(`border-${side}-width`)) || 0;
      }

      function hasBorder(node) {
        const st = getComputedStyle(node);
        return bw(st, "left") > 0 || bw(st, "right") > 0 || bw(st, "top") > 0 || bw(st, "bottom") > 0;
      }

      function nearestBordered(el) {
        let node = el.parentElement;
        while (node && node !== column && node !== document.body) {
          if (hasBorder(node)) return node;
          node = node.parentElement;
        }
        return null;
      }

      const colRect = column.getBoundingClientRect();
      const colSt = getComputedStyle(column);
      const colBL = bw(colSt, "left");
      const colBR = bw(colSt, "right");

      const nodes = main.querySelectorAll(
        "p, h1, h2, h3, h4, h5, h6, a, button, li, dt, dd, label, span",
      );

      for (const el of nodes) {
        if (!isLeafText(el)) continue;
        const st = getComputedStyle(el);
        if (st.display === "none" || st.visibility === "hidden") continue;
        const rect = el.getBoundingClientRect();
        if (rect.width < 1 || rect.height < 1) continue;

        const lr = rect.left - (colRect.left + colBL);
        const rr = colRect.right - colBR - rect.right;
        if (lr < min - tol) {
          flags.push({ kind: "rail-left", value: lr, text: el.textContent?.trim().slice(0, 40) });
        }
        if (rr < min - tol) {
          flags.push({ kind: "rail-right", value: rr, text: el.textContent?.trim().slice(0, 40) });
        }

        const anc = nearestBordered(el);
        if (!anc) continue;
        const ar = anc.getBoundingClientRect();
        const ast = getComputedStyle(anc);
        for (const [side, bl, br, bt, bb] of [
          ["left", bw(ast, "left"), 0, 0, 0],
          ["right", 0, bw(ast, "right"), 0, 0],
          ["top", 0, 0, bw(ast, "top"), 0],
          ["bottom", 0, 0, 0, bw(ast, "bottom")],
        ]) {
          const w = side === "left" ? bl : side === "right" ? br : side === "top" ? bt : bb;
          if (w <= 0) continue;
          let d = 0;
          if (side === "left") d = rect.left - (ar.left + bl);
          if (side === "right") d = ar.right - br - rect.right;
          if (side === "top") d = rect.top - (ar.top + bt);
          if (side === "bottom") d = ar.bottom - bb - rect.bottom;
          if (d < min - tol) {
            flags.push({
              kind: `border-${side}`,
              value: d,
              text: el.textContent?.trim().slice(0, 40),
              ancestor: anc.tagName.toLowerCase(),
            });
          }
        }
      }
      return flags;
    },
    { min: MIN, tol: TOL },
  );
}

const browser = await chromium.launch({ headless: true });
const summary = {};
let total = 0;

for (const vp of viewports) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
  });
  await page.goto(`${base}/about`, { waitUntil: "networkidle", timeout: 120_000 });
  const flags = await auditAbout(page);
  summary[`/about @ ${vp.name}`] = flags.length;
  total += flags.length;
  if (flags.length) {
    console.error(`/about @ ${vp.name} sample:`, JSON.stringify(flags.slice(0, 8), null, 2));
  }
  await page.close();
}

await browser.close();
console.log("About padding audit:", summary, "TOTAL:", total);
process.exit(total > 0 ? 1 : 0);
