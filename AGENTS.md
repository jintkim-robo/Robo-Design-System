<!-- GENERATED from contracts/*.json by scripts/build-agents.mjs — do not edit by hand. -->
# Robo Presentation OS — authoring contract for agents

Create editable Robo presentations from structured deck JSON. Brand identity is part of the content system, not a cosmetic skin.

## Core rules
1. Choose a layout from the question the slide must answer, not from decoration.
2. One slide has one governing message.
3. Titles should state a conclusion or decision whenever evidence supports one.
4. Reading titles alone should reveal the deck argument.
5. Do not force content into a preset layout; use the closest semantic layout and simplify or split the slide.
6. Facts, assumptions, estimates, and recommendations must be distinguishable.
7. Never invent sources, screenshots, numbers, quotes, customer names, or system outputs.

## Brand selection
| Brand | Essence | Tension | Signature motif |
|---|---|---|---|
| `robo-coop` | A cooperative operating system where people and machines expand human agency together. | Human warmth × machine precision | `dual-sync` |
| `robo-lab` | An applied systems lab where emerging technology becomes real-world infrastructure and systemic change. | Experimental frontier × production discipline | `system-grid` |
| `coop-lab` | A venture and ownership lab for building companies, governance, and value distribution differently. | Constructive rebellion × credible venture building | `collective-blocks` |
| `robo-university` | A continuous learning system that helps people explore emerging tools, build agency, and keep updating. | Exploration × progression | `learning-path` |

A deck's `meta.brand` must match the selected variant's brand. Do not use one brand's visual grammar as a generic skin for another brand.

## Workflow
1. Define audience, decision, evidence, and output.
2. Choose the correct Robo brand from deck ownership and purpose.
3. Write one conclusion-oriented title per slide.
4. Pick the semantic layout whose question matches the slide.
5. Fill only the fields supported by that layout.
6. Choose that brand's Core or Expressive variant deliberately.
7. Run structural QA before PPTX generation.
8. Render PPTX to PDF/PNG and run visual grading before delivery.

## Brand-owned variants
| Variant | Brand | Mode | Scheme | Best fit |
|---|---|---|---|---|
| `robo-coop-core` | `robo-coop` | core | light | Corporate, governance, partner, investor, consortium, and organization-wide communication. |
| `robo-coop-dark` | `robo-coop` | expressive | dark | Keynotes, operating-system narratives, human-machine cooperation, and high-contrast event decks. |
| `robo-lab-core` | `robo-lab` | core | dark | AI systems, product architecture, automation, technical strategy, prototypes, and client demos. |
| `robo-lab-cyber` | `robo-lab` | expressive | dark | Flagship AI demos, agent systems, experimental launches, technical keynotes, and future-facing product narratives. |
| `coop-lab-core` | `coop-lab` | core | light | Venture building, entrepreneurship programs, ecosystem partnerships, funding, and cooperative business models. |
| `coop-lab-hack` | `coop-lab` | expressive | dark | Manifestos, startup events, new ownership concepts, experimental venture launches, and provocative strategy. |
| `robo-university-core` | `robo-university` | core | light | Training, curriculum, cohort learning, capability building, learning outcomes, and education partnerships. |
| `robo-university-explore` | `robo-university` | expressive | dark | Learning launches, explorative workshops, future-skills narratives, community learning, and experimental education. |

## Brand grammar
### Robo Co-op
**Tagline:** Support Together — Human⇄Machine Cooperative OS
**Essence:** A cooperative operating system where people and machines expand human agency together.
**Use:** paired rails, sync points, human/machine handoff, black-and-white foundation, cyan signal with amber human accent.
**Principles:** Lead with clarity, dignity, and trust. Use paired or mirrored structures to express cooperation. Use Sync Cyan for connection and Coop Amber sparingly for human agency, care, or decision points. Prefer calm, rigorous composition over futuristic spectacle.
**Avoid:** generic AI neon, robot clip-art, cold enterprise blue everywhere, decorative circuit boards.

### Robo Lab
**Tagline:** Work Together — Pioneering Systemic Lab
**Essence:** An applied systems lab where emerging technology becomes real-world infrastructure and systemic change.
**Use:** system grid, trace lines, module IDs, status notation, blue/cyan signal, measured cyberpunk energy.
**Principles:** Make system structure visible. Use technical notation only when it carries meaning. Core mode is precise and restrained; Cyber mode adds scan, trace, glow-like contrast, and sharper system framing. Cyberpunk is a spice, not a costume: no gratuitous neon or fictional code.
**Avoid:** Kakao imitation, generic hacker green, neon overload, fake terminal text, sci-fi decoration without system meaning.

### Co-op Lab
**Tagline:** Startup Together — Cooperative Entrepreneurship Lab
**Essence:** A venture and ownership lab for building companies, governance, and value distribution differently.
**Use:** offset blocks, shared ownership tiles, manifesto labels, coral/red field, creative purple counterpoint.
**Principles:** Feel entrepreneurial, collective, and slightly insurgent. Use overlap and offset to show shared ownership and distributed power. Core mode stays partner-ready; Hack mode can be more editorial, brutalist, and manifesto-like. Keep the energy sharp without sacrificing readability.
**Avoid:** generic startup gradient, cute community illustrations, corporate-red monotony, chaotic zine styling that obscures the message.

### Robo University
**Tagline:** Learn Together — Explorative Digital Education
**Essence:** A continuous learning system that helps people explore emerging tools, build agency, and keep updating.
**Use:** learning paths, checkpoints, module maps, version/progress notation, lime signal, purple discovery accent, gold achievement cue.
**Principles:** Make progress visible without making learning feel linear or school-like. Use paths, checkpoints, and branching modules as the visual grammar. Fresh Lime is the active learning signal; Energy Purple marks exploration; Achieve Gold marks milestones. Keep the tone optimistic, capable, and exploratory.
**Avoid:** school chalkboard clichés, childish gamification, green-on-white accessibility failures, dense academic-document styling.

## Layouts
| Layout | Question | Best for | Required fields |
|---|---|---|---|
| `cover` | What is this presentation about? | deck opener; major standalone presentation | title |
| `statement` | What is the single idea the audience should remember? | thesis; insight; transition; executive conclusion | title, body |
| `metrics` | What changed numerically or operationally? | KPIs; outcomes; before/after measures; operating scorecard | title, metrics |
| `comparison` | How do the options differ? | options; before/after; maturity stages; vendor or approach comparison | title, columns |
| `process` | How does the work move from start to finish? | workflow; implementation; operating model; roadmap with ordered stages | title, steps |
| `architecture` | What connects to what? | system architecture; agent workflow; data flow; operating stack | title, layers |
| `demo` | What should the audience notice during the demo? | AI demo; agent run; automation walkthrough; product flow | title, steps, screen |

## Components
| Component | Purpose | Constraints |
|---|---|---|
| `code-header` | Machine-readable section context. | Small and subordinate to the title. Never use as the main title. |
| `metric-card` | One metric plus a short interpretation. | Value dominates. One sentence of interpretation maximum. |
| `terminal-window` | Show real agent, API, prompt, command, or system activity. | Never invent decorative code. Highlight at most one line. |
| `system-node` | Represent a human, agent, service, data source, or system in a flow. | Keep labels short. Relationships must be explicit. |
| `evidence-strip` | Show source, assumption, status, or evidence metadata at low visual weight. | Never fabricate evidence metadata. Keep below the main reading hierarchy. |

## Non-negotiable QA
- A PPTX that opens is not automatically a good deck.
- Fail on missing required fields, unsupported layouts, or brand/variant mismatch.
- Warn on generic titles, duplicate titles, excess density, repeated layout monotony, and deprecated aliases.
- Render every active layout × variant combination to PNG in CI.
- Fail visual grading on broken dimensions, near-blank renders, missing expected slides, or regression drift beyond the accepted threshold.
- Keep evidence metadata truthful and explicit.

## Commands
```bash
npm run slides:contracts:check
npm run slides:qa
npm run slides:gallery
npm run slides:visual
```
