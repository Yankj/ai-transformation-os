# Repository architecture

## Design choice

Use a single Git repository for the current personal operating system. It
keeps strategy, proof, and content linked and reviewable. Split deployable
products into dedicated repositories only when their release cadence,
permissions, or dependencies need independent ownership.

## Information flow

```text
knowledge/ ────────┐
                  ├──→ projects/ ──→ content/ ──→ product opportunities
docs/ (intent) ────┘       │              │
                           └──────→ reviews/ ──→ docs/ (improved system)
```

## Naming and status

- Use descriptive kebab-case names.
- Give related work a stable ID such as `AR-001` in the document front matter.
- Keep working material close to its deliverable; use a README as the index of
  a folder, rather than a global dumping ground.
- Do not delete failed experiments. Mark them as failed and preserve the
  learning, excluding secrets or employer-confidential details.

## Future split triggers

Create a separate repository when any of these holds:

1. A project has independent users, releases, CI, or deployment.
2. The project needs collaborators who should not access personal research.
3. The codebase obscures the operating-system knowledge graph.

Until then, this monorepo is intentionally documentation-first and
tool-agnostic.
