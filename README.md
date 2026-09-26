# Robo Design System — Presentation OS

Robo Co-op's design-system source of truth, extended into a machine-readable, testable presentation system for AI-generated and human-authored decks.

## Presentation OS v0.2

The presentation layer now has five explicit parts:

```text
contracts → authoring → editable PPTX → render → visual grade
```

- `contracts/layouts.json` — semantic layout contract and field constraints
- `contracts/components.json` — reusable presentation primitives
- `contracts/variants.json` — audience/tone-specific visual directions
- `AGENTS.md` — generated agent authoring contract
- `generator/` — JSON → editable PPTX
- `grade/` — PPTX → PDF → PNG → visual regression

The source of truth is the machine-readable contract. `AGENTS.md` is generated from it and must not be edited by hand.

## Architecture

```text
Audience / decision / evidence
        ↓
Storyline
        ↓
Semantic layout contract
        ↓
Robo variant
        ↓
Editable PowerPoint
        ↓
Rendered PNG gallery
        ↓
Structural + visual QA
```

## Commands

```bash
npm install
npm run slides:contracts:check
npm run slides:qa
npm run slides:build:example
npm run slides:gallery
npm run slides:visual
```

See:
- [Agent contract](AGENTS.md)
- [Generator](generator/README.md)
- [Visual grade](grade/README.md)
- [Brand foundations](BRAND_FOUNDATIONS.md)
- [Upstream model](UPSTREAM.md)

## License

Robo Co-op logos, wordmarks, brand colours and related brand assets remain proprietary. Public repository visibility does **not** grant permission to reproduce or redistribute Robo Co-op brand assets outside authorized Robo Co-op use. See `LICENSE`.
