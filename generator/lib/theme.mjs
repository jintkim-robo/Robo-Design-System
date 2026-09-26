import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "../..");

function readJson(rel) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, rel), "utf8"));
}

function hex(value) {
  return String(value || "").replace("#", "").toUpperCase();
}

export function loadTheme(meta = {}) {
  const brand = meta.brand || "robo-lab";
  const presetName = meta.preset || "robo-lab-tech";
  const brandTokens = readJson(`tokens/brands/${brand}.json`);
  const taste = readJson("taste/presets.json");
  const preset = taste.presets[presetName] || taste.presets["robo-core"];
  const p = brandTokens.palette;

  if (brand !== "robo-lab") {
    const primary = hex(p.primary?.value || "#000000");
    const dark = preset.lightToDark >= 60;
    return {
      brand,
      presetName,
      preset,
      dark,
      bg: dark ? "0B0D10" : "FFFFFF",
      surface: dark ? "141820" : "F5F7FA",
      surface2: dark ? "1B2029" : "FFFFFF",
      text: dark ? "FFFFFF" : "111111",
      muted: dark ? "AEB7C2" : "5E6874",
      border: dark ? "303946" : "D9E0E7",
      primary,
      accent: primary,
      danger: "D94841",
      success: "1B9A78",
      warning: "D69E2E"
    };
  }

  const dark = preset.lightToDark >= 60;
  return {
    brand,
    presetName,
    preset,
    dark,
    bg: dark ? "0A1226" : "F7FBFE",
    surface: dark ? hex(p["deep-navy"].value) : "FFFFFF",
    surface2: dark ? "101C38" : hex(p["ice-blue"].value),
    text: dark ? "FFFFFF" : hex(p["midnight-blue"].value),
    muted: dark ? hex(p["sky-blue"].value) : "526889",
    border: dark ? "31527F" : "C9DDF0",
    primary: dark ? hex(p["electric-cyan"].value) : hex(p.primary.value),
    accent: hex(p["sky-blue"].value),
    danger: hex(p["tech-orange"].value),
    success: hex(p.teal.value),
    warning: hex(p["alert-yellow"].value)
  };
}

export function paths() {
  return { root: ROOT };
}
