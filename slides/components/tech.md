# Robo Lab / Tech Presentation Components

These components define the technical presentation language on top of canonical Robo Lab tokens.

## Code header

Purpose: add machine-readable context without competing with the message.

Format:
`// ROBO_LAB · <SECTION> · <NN>`

Rules:
- top-left aligned
- monospace
- small size
- muted white/gray
- never use as the main title

## Terminal window

Purpose: show workflow, agent activity, prompt/output, API behavior, or operational status.

Rules:
- dark raised surface
- hairline border
- concise lines only
- use real commands/data when available; never invent decorative code
- one highlighted line maximum

## Metric card

Purpose: emphasize a number plus interpretation.

Rules:
- metric dominates
- label is short
- interpretation is one sentence maximum
- use Robo Lab blue for emphasis, not every card

## System diagram

Purpose: explain relationships between people, AI agents, systems, data, and outcomes.

Rules:
- left-to-right by default
- no crossing connectors unless unavoidable
- group by semantic layer
- label arrows only when the relationship is not obvious
- humans and systems must be visually distinguishable without relying only on color

## Evidence strip

Purpose: show sources, assumptions, or status in a low-noise footer.

Examples:
- `SOURCE · Internal CRM · 2026-09-25`
- `STATUS · Prototype`
- `ASSUMPTION · 20h cohort`

Never fabricate evidence metadata.
