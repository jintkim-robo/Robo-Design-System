# Robo Design System — Presentation OS

Robo Co-op's design-system source of truth, extended into a machine-readable, testable presentation system.

## Story-first Presentation OS

The Presentation OS now separates **reasoning**, **composition**, **rendering**, and **brand expression**.

1. Frame the audience, decision, evidence boundary, and output.
2. Write the governing claim and a headline ledger before drawing.
3. Classify each slide into one of 7 communication intents.
4. Select one of 48 composition archetypes.
5. Map the archetype to the closest supported semantic layout.
6. Apply the selected Robo brand grammar.
7. Run structural QA, render, and visual QA.

The 48 archetypes are a reasoning/composition registry, not 48 hard-coded PPT templates. This preserves flexibility and backward compatibility while making slide choice more deliberate.

## Brand Visual Systems v1

The four Robo brands now have distinct presentation identities:

- **Robo Co-op** — Human ⇄ Machine cooperation, synchronization, governance
- **Robo Lab** — systems, experiments, traces; optional measured cyberpunk
- **Co-op Lab** — cooperative entrepreneurship, ownership, constructive rebellion
- **Robo University** — exploration, learning paths, checkpoints, continuous updating

Each brand has **Core + Expressive** presentation modes.

## Active variants

- `robo-coop-core`
- `robo-coop-dark`
- `robo-lab-core`
- `robo-lab-cyber`
- `coop-lab-core`
- `coop-lab-hack`
- `robo-university-core`
- `robo-university-explore`

Legacy names remain aliases for compatibility, but new decks should use the brand-owned names.

## Architecture

```
audience / decision / evidence
    ↓
governing claim
    ↓
headline ledger / storyline
    ↓
7 communication intents
    ↓
48 composition archetypes
    ↓
7 semantic renderer layouts
    ↓
brand-owned variant
    ↓
editable PowerPoint
    ↓
rendered PNG gallery
    ↓
structural + visual QA
```

Machine-readable sources:
- `contracts/storytelling.json` — story-first workflow, headline/evidence rules, visual semantics, QA
- `contracts/archetypes.json` — 7 intents + 48 composition archetypes and renderer hints
- `contracts/brands.json`
- `contracts/layouts.json`
- `contracts/components.json`
- `contracts/variants.json`

`AGENTS.md` is generated from these contracts.

### Optional slide metadata

Existing deck JSON remains valid. New decks may add:

```json
{
  "type": "comparison",
  "intent": "change",
  "archetype": "20",
  "title": "The redesigned flow removes two handoffs without changing ownership"
}
```

`intent` and `archetype` are validated when present. `type` remains the rendering contract.

## Visual regression

8 variants × 7 semantic layouts = **56 rendered regression cases**.

See [Brand Visual Systems](visual-systems/README.md).

## Commands

```bash
npm install
npm run slides:contracts:check
npm run slides:qa
npm run slides:build:example
npm run slides:gallery
npm run slides:visual
```

## License

Robo Co-op logos, wordmarks, brand colours and related brand assets remain proprietary. Public repository visibility does **not** grant permission to reproduce or redistribute Robo Co-op brand assets outside authorized Robo Co-op use. See `LICENSE`.
