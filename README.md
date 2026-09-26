# Robo Design System — Presentation OS

Robo Co-op's design-system source of truth, extended for AI-generated presentations.

This repository starts from the Robo Co-op design tokens, typography, brand palettes, logo system, accessibility rules, and framework-free CSS layer, then adds a presentation-specific layer for repeatable slide generation.

## Direction

```
Story → Layout → Robo styling → QA → Export
```

- **Brand foundations** — existing Robo Co-op / Robo Lab / Co-op Lab / Robo University tokens
- **Slide tokens** — 16:9 canvas, safe areas, grid, typography, spacing and density
- **Layout catalog** — repeatable structures such as statement, comparison, process, matrix, architecture and dashboard
- **Taste controls** — adjustable visual axes instead of one fixed template
- **QA rules** — storyline, hierarchy, legibility, density and consistency checks

## Visual direction

The base brand system remains unchanged. The experimental **Robo Lab / Tech** preset adds a darker technical language: black surfaces, white typography, Robo Lab blue accents, code-like headers, terminal/UI framing and stronger grid structure.

The goal is not “AI makes a pretty slide.” It is a controlled system in which content structure, visual language and validation are independently testable.

## Repository structure

```
tokens/                 core + brand design tokens
src/css/                framework-free UI styles
assets/logos/           canonical logo artwork
scripts/                build and validation utilities

slides/
  tokens/               presentation-specific design tokens
  layouts/              layout vocabulary and selection rules
  components/           presentation components

taste/
  presets.json          visual-axis presets

qa/
  slide-rules.md        presentation QA contract
```

Generated output such as `dist/` and `docs/` is not treated as source of truth.

## Upstream

Foundation source: `Robo-Co-op/Robo-Design-System`

This repository is the experimental evolution path for presentation and AI-generation work.

## License

Robo Co-op logos, wordmarks, brand colours and related brand assets remain proprietary. Public repository visibility does **not** grant permission to reproduce or redistribute Robo Co-op brand assets outside authorized Robo Co-op use. See `LICENSE`.
