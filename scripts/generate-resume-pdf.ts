import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import { resumeData } from "../src/lib/resume-data";

const PAGE_WIDTH = 612;
const PAGE_HEIGHT = 792;
const MARGIN = 54;
const LINE_HEIGHT = 14;
const SECTION_GAP = 10;

function wrapText(
  text: string,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>,
  size: number,
  maxWidth: number,
): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) <= maxWidth) {
      current = next;
    } else {
      if (current) lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

async function main() {
  const pdf = await PDFDocument.create();
  let page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const maxWidth = PAGE_WIDTH - MARGIN * 2;
  let y = PAGE_HEIGHT - MARGIN;

  const ensureSpace = (needed: number) => {
    if (y - needed < MARGIN) {
      page = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
      y = PAGE_HEIGHT - MARGIN;
    }
  };

  const drawLine = (
    text: string,
    size: number,
    bold = false,
    color = rgb(0, 0, 0),
  ) => {
    const lines = wrapText(text, bold ? fontBold : font, size, maxWidth);
    for (const line of lines) {
      ensureSpace(LINE_HEIGHT);
      page.drawText(line, {
        x: MARGIN,
        y,
        size,
        font: bold ? fontBold : font,
        color,
      });
      y -= LINE_HEIGHT;
    }
  };

  drawLine(resumeData.name, 18, true);
  drawLine(resumeData.headline, 12);
  drawLine(
    `${resumeData.location} · ${resumeData.email}`,
    10,
    false,
    rgb(0.25, 0.25, 0.25),
  );
  drawLine(
    resumeData.links.map((l) => `${l.label}: ${l.href}`).join(" · "),
    9,
    false,
    rgb(0.2, 0.2, 0.5),
  );
  y -= SECTION_GAP;

  drawLine("SUMMARY", 10, true);
  drawLine(resumeData.summary, 10);
  y -= SECTION_GAP;

  drawLine("EXPERIENCE", 10, true);
  for (const role of resumeData.experience) {
    drawLine(`${role.title} (${role.period})`, 10, true);
    drawLine(
      `${role.organization}${role.location ? ` · ${role.location}` : ""}`,
      9,
      false,
      rgb(0.35, 0.35, 0.35),
    );
    for (const bullet of role.bullets) {
      drawLine(`• ${bullet}`, 9);
    }
    y -= 4;
  }
  y -= SECTION_GAP;

  drawLine("EDUCATION", 10, true);
  for (const item of resumeData.education) {
    const cert = "href" in item && item.href ? ` — ${item.href}` : "";
    drawLine(
      `${item.credential}, ${item.institution} (${item.period})${cert}`,
      9,
    );
  }
  y -= SECTION_GAP;

  drawLine("SKILLS", 10, true);
  for (const skill of resumeData.skills) {
    drawLine(`• ${skill}`, 9);
  }
  y -= SECTION_GAP;

  drawLine("SELECTED PROJECTS", 10, true);
  for (const project of resumeData.projects) {
    drawLine(`${project.name} — ${project.summary}`, 9);
    drawLine(project.href, 8, false, rgb(0.2, 0.2, 0.5));
    y -= 2;
  }

  const bytes = await pdf.save();
  const outPath = join(process.cwd(), "public", "resume.pdf");
  writeFileSync(outPath, bytes);
  console.log(`Wrote ${outPath} (${bytes.length} bytes)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
