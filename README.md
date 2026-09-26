# Robo Design System — Presentation OS

Robo Co-op's design-system source of truth, extended for AI-generated presentations.

The repository keeps the existing four-brand foundations and adds a presentation layer so decks can be generated with consistent story logic, visual language, and QA.

## Architecture

```
Content
  ↓
Storyline
  ↓
Layout selection
  ↓
Robo brand styling
  ↓
Taste preset
  ↓
QA
  ↓
PPTX / PDF / image export
```

## Layers

- `tokens/` — canonical Robo brand foundations
- `src/css/` — framework-free design-system components
- `assets/logos/` — canonical logo artwork
- `slides/tokens/` — presentation geometry, type, density, spacing
- `slides/layouts/` — semantic slide archetypes
- `slides/components/` — presentation-specific components
- `taste/` — adjustable visual-direction presets
- `qa/` — storyline and rendering quality contract

## Default presentation presets

### Robo Core
Clean, restrained, brand-first. Good for external corporate, partner, and investor communication.

### Robo Lab / Tech
Dark surface, white type, Robo Lab blue accents, code-like metadata, system diagrams, terminal/UI framing, and a stronger technical grid.

### Board / Consulting
Higher information density, explicit comparisons, decision-oriented titles, conservative visual language.

### Impact Story
More human, more whitespace, stronger narrative and evidence pairing.

## Core rule

**The layout serves the story. The story never serves the template.**

Every slide should have one governing message. Reading only the slide titles should reveal the deck's argument.

See:
- [Brand foundations](BRAND_FOUNDATIONS.md)
- [Presentation layer](slides/README.md)
- [Taste presets](taste/presets.json)
- [QA contract](qa/slide-rules.md)
- [Upstream model](UPSTREAM.md)
- [Design influences](INSPIRATION.md)

## Build

The inherited design-system build remains dependency-light:

```bash
npm run build
npm test
npm run docs
```

Generated `dist/` and `docs/` are not treated as source of truth in this experimental repo.

## License

Robo Co-op logos, wordmarks, brand colours and related brand assets remain proprietary. Public repository visibility does **not** grant permission to reproduce or redistribute Robo Co-op brand assets outside authorized Robo Co-op use. See `LICENSE`.
