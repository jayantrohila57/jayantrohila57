import { chromium, devices } from "playwright";

const url =
  "https://jayantrohila.com/writing/smooth-scroll-nested-scroll-areas";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});

await page.goto(url, { waitUntil: "networkidle", timeout: 120_000 });

const pre = page.locator("pre.code-block, pre[data-lenis-prevent-horizontal]").first();
await pre.waitFor({ state: "visible" });

const box = await pre.boundingBox();
if (!box) throw new Error("no pre box");

const cx = box.x + box.width / 2;
const cy = box.y + Math.min(box.height / 2, 40);

const scrollYBefore = await page.evaluate(() => window.scrollY);
await page.mouse.move(cx, cy);
await page.mouse.wheel(0, 120);
await page.waitForTimeout(400);
const scrollYAfter = await page.evaluate(() => window.scrollY);

const verticalWheelOk = scrollYAfter > scrollYBefore;
console.log("vertical wheel over pre:", {
  scrollYBefore,
  scrollYAfter,
  ok: verticalWheelOk,
});

const wideLine =
  "// " + "x".repeat(200);
await pre.evaluate((el, line) => {
  el.textContent = line;
}, wideLine);

const scrollLeftBefore = await pre.evaluate((el) => el.scrollLeft);
await page.mouse.move(cx, cy);
await page.mouse.wheel(80, 0);
await page.waitForTimeout(200);
const scrollLeftAfter = await pre.evaluate((el) => el.scrollLeft);

const horizontalWheelOk = scrollLeftAfter > scrollLeftBefore;
console.log("horizontal wheel over pre:", {
  scrollLeftBefore,
  scrollLeftAfter,
  ok: horizontalWheelOk,
});

await page.close();

const iphone = devices["iPhone 12"];
const touchPage = await browser.newPage({ ...iphone });
await touchPage.goto(url, { waitUntil: "networkidle", timeout: 120_000 });
const touchPre = touchPage
  .locator("pre.code-block, pre[data-lenis-prevent-horizontal]")
  .first();
await touchPre.evaluate((el) => {
  el.textContent = "// " + "touch-scroll-test-".repeat(30);
});
const tbox = await touchPre.boundingBox();
const tx = tbox.x + tbox.width / 2;
const ty = tbox.y + tbox.height / 2;
const leftBefore = await touchPre.evaluate((el) => el.scrollLeft);
await touchPage.touchscreen.tap(tx, ty);
await touchPage.touchscreen.swipe(tx, ty, tx - 80, ty);
await touchPage.waitForTimeout(300);
const leftAfter = await touchPre.evaluate((el) => el.scrollLeft);
const touchOk = leftAfter > leftBefore;
console.log("touch horizontal swipe on pre:", {
  leftBefore,
  leftAfter,
  ok: touchOk,
});

await touchPage.close();
await browser.close();

const allOk = verticalWheelOk && horizontalWheelOk && touchOk;
if (!allOk) process.exit(1);
console.log("ALL OK");
