import { chromium, devices } from "playwright";

const url =
  "https://jayantrohila.com/writing/smooth-scroll-nested-scroll-areas";

async function dispatchHorizontalWheel(page, x, y) {
  const cdp = await page.context().newCDPSession(page);
  await cdp.send("Input.dispatchMouseEvent", {
    type: "mouseWheel",
    x,
    y,
    deltaX: 120,
    deltaY: 0,
  });
}

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});

await page.goto(url, { waitUntil: "networkidle", timeout: 120_000 });

const pre = page.locator("pre.code-block, pre[data-lenis-prevent-horizontal]").first();
await pre.waitFor({ state: "visible" });

await pre.evaluate((el) => {
  el.style.whiteSpace = "pre";
  el.textContent = `// ${"W".repeat(280)}`;
});

const box = await pre.boundingBox();
if (!box) throw new Error("no pre box");

const cx = box.x + box.width / 2;
const cy = box.y + Math.min(box.height / 2, 40);

const scrollLeftBefore = await pre.evaluate((el) => el.scrollLeft);
await dispatchHorizontalWheel(page, cx, cy);
await page.waitForTimeout(200);
const scrollLeftAfter = await pre.evaluate((el) => el.scrollLeft);

const horizontalWheelOk = scrollLeftAfter > scrollLeftBefore;
console.log("horizontal wheel over pre (scrollLeft, CDP deltaX):", {
  scrollLeftBefore,
  scrollLeftAfter,
  ok: horizontalWheelOk,
});

await page.evaluate(() => window.scrollTo(0, 0));
const box2 = await pre.boundingBox();
const cx2 = box2.x + box2.width / 2;
const cy2 = box2.y + Math.min(box2.height / 2, 40);

const scrollYBefore = await page.evaluate(() => window.scrollY);
await page.mouse.move(cx2, cy2);
await page.mouse.wheel(0, 120);
await page.waitForTimeout(400);
const scrollYAfter = await page.evaluate(() => window.scrollY);

const verticalWheelOk = scrollYAfter > scrollYBefore;
console.log("vertical wheel over pre (page scrollY):", {
  scrollYBefore,
  scrollYAfter,
  ok: verticalWheelOk,
});

await page.close();

const iphone = devices["iPhone 12"];
const touchPage = await browser.newPage({ ...iphone });
await touchPage.goto(url, { waitUntil: "networkidle", timeout: 120_000 });
const touchPre = touchPage
  .locator("pre.code-block, pre[data-lenis-prevent-horizontal]")
  .first();
await touchPre.evaluate((el) => {
  el.style.whiteSpace = "pre";
  el.textContent = `// ${"touch-".repeat(80)}`;
});
const tbox = await touchPre.boundingBox();
const tx = tbox.x + tbox.width * 0.75;
const ty = tbox.y + tbox.height / 2;
const leftBefore = await touchPre.evaluate((el) => el.scrollLeft);
const cdp = await touchPage.context().newCDPSession(touchPage);
await cdp.send("Input.dispatchTouchEvent", {
  type: "touchStart",
  touchPoints: [{ x: tx, y: ty }],
});
await cdp.send("Input.dispatchTouchEvent", {
  type: "touchMove",
  touchPoints: [{ x: tx - 90, y: ty }],
});
await cdp.send("Input.dispatchTouchEvent", {
  type: "touchEnd",
  touchPoints: [],
});
await touchPage.waitForTimeout(300);
const leftAfter = await touchPre.evaluate((el) => el.scrollLeft);
const touchOk = leftAfter > leftBefore;
console.log("touch horizontal swipe on pre @ 390:", {
  leftBefore,
  leftAfter,
  ok: touchOk,
});

await touchPage.close();
await browser.close();

const allOk = verticalWheelOk && horizontalWheelOk && touchOk;
if (!allOk) process.exit(1);
console.log("ALL OK");
