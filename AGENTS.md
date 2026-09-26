<!-- GENERATED from contracts/*.json by scripts/build-agents.mjs — do not edit by hand. -->
# Robo Presentation OS — authoring contract for agents

Create editable Robo presentations from structured deck JSON. Do not invent new visual grammar when a contract already covers the content shape.

## Core rules
1. Choose a layout from the question the slide must answer, not from decoration.
2. One slide has one governing message.
3. Titles should state a conclusion or decision whenever evidence supports one.
4. Reading titles alone should reveal the deck argument.
5. Do not force content into a preset layout; use the closest semantic layout and simplify or split the slide.
6. Facts, assumptions, estimates, and recommendations must be distinguishable.
7. Never invent sources, screenshots, numbers, quotes, customer names, or system outputs.

## Workflow
1. Define audience, decision, evidence, and output.
2. Write one conclusion-oriented title per slide.
3. Pick the semantic layout whose question matches the slide.
4. Fill only the fields supported by that layout.
5. Choose one variant deliberately for the audience and medium.
6. Run structural QA before PPTX generation.
7. Render PPTX to PDF/PNG and run visual grading before delivery.

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

## Variants
| Variant | Scheme | Best fit |
|---|---|---|
| `robo-core` | light | External corporate, partner, investor, and general-purpose communication. |
| `robo-lab-tech` | dark | AI demos, product architecture, automation, agent systems, and technical strategy. |
| `board-consulting` | light | Board reviews, investor materials, decision memos, strategy, and dense comparisons. |
| `impact-story` | light | Human-impact storytelling, social innovation, field narratives, and partner engagement. |

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
- Fail on missing required fields or unsupported layout types.
- Warn on generic titles, duplicate titles, excess density, and repeated layout monotony.
- Render every gallery deck to PNG in CI.
- Fail visual grading on broken dimensions, near-blank renders, missing expected slides, or regression drift beyond the accepted threshold.
- Keep evidence metadata truthful and explicit.

## Commands
```bash
npm run slides:contracts:check
npm run slides:qa
npm run slides:gallery
npm run slides:visual
```
