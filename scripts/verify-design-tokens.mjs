import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "src";
const ALLOW_HEX = new Set(["src/lib/design-tokens.ts", "src/app/global.css"]);

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (/\.(tsx|ts)$/.test(name)) acc.push(p);
  }
  return acc;
}

const rules = [
  {
    name: "arbitrary-10px-text",
    re: /text-\[10px\]/,
    allow: () => false,
  },
  {
    name: "arbitrary-11px-text",
    re: /text-\[11px\]/,
    allow: () => false,
  },
  {
    name: "arbitrary-radius-var",
    re: /rounded-\[var\(--radius/,
    allow: () => false,
  },
  {
    name: "hex-bg-in-components",
    re: /bg-\[#/,
    allow: (file) => ALLOW_HEX.has(file.replace(/\\/g, "/")),
  },
];

const violations = [];

for (const file of walk(ROOT)) {
  const rel = file.replace(/\\/g, "/");
  const content = readFileSync(file, "utf8");
  const codeOnly = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, "");
  for (const rule of rules) {
    if (rule.allow(rel)) continue;
    if (rule.re.test(codeOnly)) {
      violations.push({ file: rel, rule: rule.name });
    }
  }
}

if (violations.length) {
  console.error("Design token violations:");
  for (const v of violations) {
    console.error(`  ${v.rule}: ${v.file}`);
  }
  process.exit(1);
}

console.log("verify-design-tokens: OK (0 violations)");
