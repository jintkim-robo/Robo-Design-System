#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const read = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), "utf8"));
const layouts = read("contracts/layouts.json");
const components = read("contracts/components.json");
const variants = read("contracts/variants.json");

function generate(layouts, components, variants) {
  const lines = [
    "<!-- GENERATED from contracts/*.json by scripts/build-agents.mjs — do not edit by hand. -->",
    "# Robo Presentation OS — authoring contract for agents",
    "",
    "Create editable Robo presentations from structured deck JSON. Do not invent new visual grammar when a contract already covers the content shape.",
    "",
    "## Core rules",
    ...layouts.rules.map((r,i)=>`${i+1}. ${r}`),
    "",
    "## Workflow",
    "1. Define audience, decision, evidence, and output.",
    "2. Write one conclusion-oriented title per slide.",
    "3. Pick the semantic layout whose question matches the slide.",
    "4. Fill only the fields supported by that layout.",
    "5. Choose one variant deliberately for the audience and medium.",
    "6. Run structural QA before PPTX generation.",
    "7. Render PPTX to PDF/PNG and run visual grading before delivery.",
    "",
    "## Layouts",
    "| Layout | Question | Best for | Required fields |",
    "|---|---|---|---|",
    ...layouts.layouts.map(l=>{
      const req=Object.entries(l.fields).filter(([,v])=>v.required).map(([k])=>k).join(", ");
      return `| \`${l.id}\` | ${l.answers} | ${l.bestFor.join("; ")} | ${req} |`;
    }),
    "",
    "## Variants",
    "| Variant | Scheme | Best fit |",
    "|---|---|---|",
    ...variants.variants.map(v=>`| \`${v.id}\` | ${v.scheme} | ${v.fit} |`),
    "",
    "## Components",
    "| Component | Purpose | Constraints |",
    "|---|---|---|",
    ...components.components.map(c=>`| \`${c.id}\` | ${c.purpose} | ${c.constraints.join(" ")} |`),
    "",
    "## Non-negotiable QA",
    "- A PPTX that opens is not automatically a good deck.",
    "- Fail on missing required fields or unsupported layout types.",
    "- Warn on generic titles, duplicate titles, excess density, and repeated layout monotony.",
    "- Render every gallery deck to PNG in CI.",
    "- Fail visual grading on broken dimensions, near-blank renders, missing expected slides, or regression drift beyond the accepted threshold.",
    "- Keep evidence metadata truthful and explicit.",
    "",
    "## Commands",
    "```bash",
    "npm run slides:contracts:check",
    "npm run slides:qa",
    "npm run slides:gallery",
    "npm run slides:visual",
    "```",
    ""
  ];
  return lines.join("\n");
}

const output = generate(layouts, components, variants);
const target = path.join(ROOT, "AGENTS.md");
if (process.argv.includes("--check")) {
  const current = fs.existsSync(target) ? fs.readFileSync(target, "utf8") : "";
  if (current !== output) {
    console.error("AGENTS.md is out of date. Run: node scripts/build-agents.mjs");
    process.exit(1);
  }
  console.log("AGENTS.md is up to date.");
} else {
  fs.writeFileSync(target, output);
  console.log("WROTE AGENTS.md");
}
