const ALLOWED = new Set(["cover","statement","metrics","comparison","process","architecture","demo"]);
const GENERIC_TITLES = new Set(["overview","agenda","market","solution","problem","results","next steps","summary","introduction"]);

function words(value = "") {
  return String(value).trim().split(/\s+/).filter(Boolean).length;
}

function populatedArray(v) {
  return Array.isArray(v) && v.length > 0;
}

export function validateDeck(deck) {
  const errors = [];
  const warnings = [];

  if (!deck || typeof deck !== "object") errors.push("Deck must be an object.");
  if (!deck?.meta?.title) errors.push("meta.title is required.");
  if (!Array.isArray(deck?.slides) || deck.slides.length === 0) errors.push("slides must contain at least one slide.");
  if (errors.length) return { errors, warnings };

  const titles = new Map();

  deck.slides.forEach((slide, i) => {
    const n = i + 1;
    if (!ALLOWED.has(slide.type)) errors.push(`Slide ${n}: unsupported type "${slide.type}".`);
    if (!slide.title) errors.push(`Slide ${n}: title is required.`);
    if (slide.title && slide.title.length > 95) warnings.push(`Slide ${n}: title is long (${slide.title.length} chars).`);

    const key = String(slide.title || "").trim().toLowerCase();
    if (key) {
      if (titles.has(key)) warnings.push(`Slide ${n}: title duplicates slide ${titles.get(key)}.`);
      else titles.set(key, n);
      if (GENERIC_TITLES.has(key)) warnings.push(`Slide ${n}: generic topic title; prefer a conclusion-oriented title.`);
    }

    const bodyWords = words([slide.body, slide.proof, slide.subtitle].filter(Boolean).join(" "));
    if (bodyWords > 90) warnings.push(`Slide ${n}: body copy is dense (${bodyWords} words; default max 90).`);

    if (slide.type === "metrics" && !populatedArray(slide.metrics)) errors.push(`Slide ${n}: metrics layout requires metrics[].`);
    if (slide.type === "comparison" && !populatedArray(slide.columns)) errors.push(`Slide ${n}: comparison layout requires columns[].`);
    if (slide.type === "process" && !populatedArray(slide.steps)) errors.push(`Slide ${n}: process layout requires steps[].`);
    if (slide.type === "architecture" && !populatedArray(slide.layers)) errors.push(`Slide ${n}: architecture layout requires layers[].`);
    if (slide.type === "demo" && !slide.screen) errors.push(`Slide ${n}: demo layout requires screen{}.`);

    const raw = JSON.stringify(slide);
    if (/\b(TODO|TBD|LOREM)\b/i.test(raw)) warnings.push(`Slide ${n}: contains placeholder text.`);
  });

  if (deck.slides[0]?.type !== "cover") warnings.push("First slide is not a cover.");
  return { errors, warnings };
}

export function formatQa(result) {
  const lines = [];
  for (const e of result.errors) lines.push(`FAIL  ${e}`);
  for (const w of result.warnings) lines.push(`WARN  ${w}`);
  if (!result.errors.length) lines.push(`PASS  ${result.warnings.length} warning(s), 0 failures.`);
  return lines.join("\n");
}
