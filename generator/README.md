# Robo Slide Generator v0.1

Generate editable PowerPoint decks from structured JSON using the Robo Design System.

## Pipeline

```
deck.json
  ↓
QA
  ↓
Robo tokens + taste preset
  ↓
semantic layout renderer
  ↓
editable .pptx
```

## Install

```bash
npm install
```

The generator uses `pptxgenjs@4.0.1`.

## Run the included example

```bash
npm run slides:qa
npm run slides:build:example
```

Output:

`generator/output/ai-demo-deck.pptx`

## Generate another deck

```bash
node generator/render-deck.mjs my-deck.json output/my-deck.pptx
```

## Supported slide types

- `cover`
- `statement`
- `metrics`
- `comparison`
- `process`
- `architecture`
- `demo`

See `schema/deck.schema.json` for the machine-readable contract.

## Design behavior

The renderer uses:
- canonical brand tokens from `tokens/brands/`
- presentation geometry from `slides/tokens/`
- taste selection from `taste/presets.json`
- storyline and density checks from the generator QA layer

The `robo-lab-tech` preset uses dark surfaces, white typography, Robo Lab Electric Cyan, code-like metadata, strong grids, and UI framing.

## v0.1 constraints

- Layout is intentionally deterministic rather than free-form.
- Charts and image placement are not implemented yet.
- Automatic render-to-PNG/PDF visual QA is the next layer.
- The generated PPTX is editable: text, cards, rules, and diagrams are native PowerPoint objects.
