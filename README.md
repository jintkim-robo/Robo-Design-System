# Robo Design System — Presentation OS

Robo Co-op's design-system source of truth, extended into a machine-readable, testable presentation system.

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
brand contract
    ↓
storyline
    ↓
semantic layout
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
- `contracts/brands.json`
- `contracts/layouts.json`
- `contracts/components.json`
- `contracts/variants.json`

`AGENTS.md` is generated from these contracts.

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
