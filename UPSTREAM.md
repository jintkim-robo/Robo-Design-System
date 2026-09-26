# Upstream and evolution model

Foundation repository: `Robo-Co-op/Robo-Design-System`

This repository evolves the foundation rather than replacing it.

## Inherited

- four-brand token system
- canonical palettes
- typography
- logo assets
- accessibility checks
- framework-free CSS
- build scripts

## Added here

- presentation tokens
- semantic slide layouts
- presentation components
- taste controls
- presentation QA

## Sync policy

When upstream changes, port foundation-level changes deliberately. Presentation-layer changes should remain isolated under `slides/`, `taste/`, and `qa/` unless a change genuinely belongs in the base design system.

Generated `dist/`, generated `docs/`, and PNG fallbacks were intentionally not copied into the experimental repo because they can be regenerated from source.
