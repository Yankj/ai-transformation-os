---
id: ADR-001
status: accepted
date: 2026-07-19
---

# ADR-001: Use Git-native Markdown as the source of truth

## Context

ATOS needs durable, AI-readable, reviewable assets that remain useful across
tools and collaborators over several years.

## Decision

Store strategic documentation, knowledge assets, experiment reports, and
content drafts as Markdown in Git. External tools may consume or synchronize
this content, but they do not become the authoritative store.

## Consequences

- Assets are diffable, linkable, portable, and available offline.
- Rich databases and visual PKM features require optional exports/integrations.
- Folder indexes and metadata need deliberate upkeep.
