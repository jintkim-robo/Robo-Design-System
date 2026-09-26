import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "../..");

function readJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));
}

export function loadTheme(meta = {}) {
  const presetName = meta.preset || "robo-lab-tech";
  const variants = readJson("contracts/variants.json").variants;
  const variant = variants.find(v => v.id === presetName) || variants.find(v => v.id === "robo-core");
  return {
    brand: meta.brand || "robo-lab",
    presetName: variant.id,
    label: variant.label,
    scheme: variant.scheme,
    dark: variant.scheme === "dark",
    ...variant.visual,
    ...variant.composition,
    ...variant.features
  };
}

export function paths() {
  return { root: ROOT };
}
