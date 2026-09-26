# Presentation Layer

The presentation layer converts the Robo Design System from a UI/brand system into a repeatable slide-generation system.

## Workflow

1. Define the audience, decision, and output.
2. Write a storyline as one conclusion-oriented title per slide.
3. Choose a semantic layout for each title.
4. Apply the appropriate Robo brand.
5. Apply a taste preset.
6. Render and run QA.
7. Export only after both machine and visual review pass.

## Storyline rule

Titles are not labels such as "Market" or "Solution".

Prefer:
- "AI delivery capacity is constrained by orchestration, not model access"
- "Five-person learning cells reduce the cost of adding new trainees"
- "Robo Lab connects human operators and AI agents in one delivery system"

The title and the visual evidence must support the same claim.

## Layouts

See `layouts/catalog.md`.

Layouts are semantic structures, not fixed templates. A slide may combine or modify them when the story requires it.

## Technical visual language

See `components/tech.md`.

Use the Robo Lab / Tech language for product, architecture, AI demo, automation, and technical strategy decks. Do not apply code-like decoration to human-impact storytelling unless it carries actual meaning.

## Taste

Taste is a controlled parameter layer. See `../taste/presets.json`.

A preset changes emphasis, density, surface treatment, and visual grammar while preserving canonical brand tokens.
