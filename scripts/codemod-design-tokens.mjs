import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (/\.(tsx|ts)$/.test(name)) acc.push(p);
  }
  return acc;
}

const rules = [
  [
    /font-mono text-\[11px\] tracking-\[0\.2em\] text-muted-foreground uppercase/g,
    "type-eyebrow font-mono text-muted-foreground uppercase",
  ],
  [
    /font-mono text-\[10px\] tracking-\[0\.2em\] text-muted-foreground uppercase/g,
    "type-eyebrow-sm font-mono text-muted-foreground uppercase",
  ],
  [
    /font-mono text-\[11px\] tracking-\[0\.18em\] text-muted-foreground uppercase/g,
    "type-eyebrow font-mono text-muted-foreground uppercase tracking-[0.18em]",
  ],
  [
    /font-mono text-\[11px\] text-muted-foreground uppercase tracking-\[0\.18em\]/g,
    "type-eyebrow font-mono text-muted-foreground uppercase tracking-[0.18em]",
  ],
  [/rounded-\[var\(--radius-sm\)\]/g, "rounded-sm"],
  [/rounded-\[var\(--radius-md\)\]/g, "rounded-md"],
  [/rounded-\[var\(--radius-lg\)\]/g, "rounded-lg"],
  [/aria-selected:bg-elevated/g, "aria-selected:bg-accent"],
];

let changed = 0;
for (const file of walk("src")) {
  if (file.includes("design-tokens.ts")) continue;
  const src = readFileSync(file, "utf8");
  let next = src;
  for (const [re, rep] of rules) next = next.replace(re, rep);
  if (next !== src) {
    writeFileSync(file, next);
    changed++;
  }
}
console.log("updated files:", changed);
