# ATOS collaboration guide

## Mission

This repository is the durable operating system for the career path from
Software Engineer to AI Native Builder. Treat every change as a reusable
asset, not a one-off answer.

## Working rules

- Prefer Markdown, open formats, and explicit links over platform-specific
  databases or chat-only knowledge.
- A learning item is not complete until it has evidence: an experiment, demo,
  architecture diagram, or a written explanation.
- Keep claims traceable. Put source links and the date accessed in knowledge
  notes; put measured results in experiment reports.
- Link work in both directions: a knowledge card names its related experiment;
  an experiment names the knowledge cards and output it produced.
- Do not place API keys, personal data, or proprietary employer material in
  the repository. Use `.env` locally and document variable names in
  `.env.example` if code needs them.

## Where work belongs

| Need | Location |
| --- | --- |
| Strategy, decisions, roadmaps | `docs/` |
| Atomic, connected learning notes | `knowledge/` |
| Runnable or designed portfolio work | `projects/` |
| Article/video/shareable drafts | `content/` |
| Weekly and milestone evidence | `reviews/` |
| Reusable writing/experiment formats | `templates/` |

## Change quality bar

1. Update the nearest README/index when adding an asset.
2. Use a template where one exists; improve the template when repetition
   reveals a gap.
3. Keep the MVP scoped. Record attractive but non-essential ideas in
   `docs/strategy/parking-lot.md`.
4. For architecture-level choices, add an ADR in `docs/decisions/`.
