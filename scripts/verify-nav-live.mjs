import { chromium } from "playwright";

const base = "https://jayantrohila.com";

const mainNavExpected = ["Work", "Writing", "About", "Elsewhere"];

const internalLinks = [
  "/",
  "/work",
  "/work?type=personal",
  "/writing",
  "/writing#case-studies",
  "/about",
  "/elsewhere",
  "/interests",
  "/contact",
  "/resume",
  "/work/taskflow",
];

const redirects = [
  { from: "/engineering", toIncludes: "/writing" },
  { from: "/experiments", toIncludes: "/work" },
  { from: "/blog", toIncludes: "/writing" },
  { from: "/work/skills", toIncludes: "/writing" },
];

async function waitForDeploy(page) {
  for (let i = 0; i < 40; i++) {
    await page.goto(`${base}/work`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });
    const labels = await page.evaluate(() =>
      [...document.querySelectorAll('nav[aria-label="Primary"] a')].map((a) =>
        a.textContent?.trim(),
      ),
    );
    if (
      mainNavExpected.every((l) => labels.includes(l)) &&
      !labels.includes("Resume")
    ) {
      return;
    }
    await page.waitForTimeout(15_000);
  }
  throw new Error("deploy wait timeout");
}

const browser = await chromium.launch({ headless: true });
const failures = [];

for (const vp of [
  { name: "390", width: 390, height: 844 },
  { name: "1440", width: 1440, height: 900 },
]) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
  });
  await waitForDeploy(page);

  const labels = await page.evaluate(() =>
    [...document.querySelectorAll('nav[aria-label="Primary"] a')].map((a) =>
      a.textContent?.trim(),
    ),
  );
  for (let i = 0; i < mainNavExpected.length; i++) {
    if (labels[i] !== mainNavExpected[i]) {
      failures.push({
        issue: "nav order",
        vp: vp.name,
        expected: mainNavExpected,
        got: labels,
      });
      break;
    }
  }

  await page.goto(`${base}/writing`, { waitUntil: "networkidle" });
  const writingActive = await page.evaluate(() => {
    const link = document.querySelector('nav[aria-label="Primary"] a[aria-current="page"]');
    return link?.textContent?.trim();
  });
  if (writingActive !== "Writing") {
    failures.push({ issue: "active state writing", vp: vp.name, writingActive });
  }

  if (vp.name === "390") {
    await page.getByRole("button", { name: "Toggle menu" }).click();
    const hasContact = await page.getByRole("link", { name: "Contact" }).isVisible();
    if (!hasContact) {
      failures.push({ issue: "mobile menu contact CTA", vp: vp.name });
    }
  }

  for (const path of internalLinks) {
    const res = await page.goto(`${base}${path.split("#")[0]}`, {
      waitUntil: "networkidle",
      timeout: 120_000,
    });
    if (res?.status() === 404) {
      failures.push({ issue: "404", path, vp: vp.name });
    }
  }

  await page.close();
}

const redirectPage = await browser.newPage();
for (const { from, toIncludes } of redirects) {
  const res = await redirectPage.goto(`${base}${from}`, {
    waitUntil: "networkidle",
    timeout: 120_000,
  });
  const url = redirectPage.url();
  if (!url.includes(toIncludes)) {
    failures.push({ issue: "redirect", from, url });
  }
  if (res?.status() === 404) {
    failures.push({ issue: "redirect 404", from });
  }
}
await redirectPage.close();
await browser.close();

if (failures.length) {
  console.error(JSON.stringify(failures, null, 2));
  process.exit(1);
}
console.log("verify-nav-live: ok");
