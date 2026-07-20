---
id: ADR-002
status: proposed
date: 2026-07-20
---

# ADR-002: Learning flow uses phase gates, not document completion

## Context

Previous design treated "writing a knowledge card" as the completion signal for
a learning session. This created a gap: the AI could convert raw notes into
structured Markdown without the founder having demonstrated understanding.
There was no examination phase and no quality gate between "I read something"
and "it is archived as knowledge."

## Decision

Every daily learning topic follows a 6-phase flow with explicit gates:

```
Launch → Examine → Practice → Reflect → Assemble → Seed
```

- **Examine (Phase 2)** is the quality gate. The AI asks ≤3 questions focused
  on mechanism, boundary, and failure path. The founder must answer in their
  own words. Only when the founder passes this gate does the flow advance.
- **Assemble (Phase 5)** writes to Git only on an explicit "archive" command
  from the founder. Unconfirmed content stays in the conversation or `.local/`.
- The AI's role changes per phase: Guide → Examiner → Coach → Partner → Editor → Curator.

## Consequences

- Learning speed may decrease slightly because the examine phase cannot be
  skipped, even under time pressure.
- Knowledge card quality increases because each card is backed by demonstrated
  understanding, not just transcription.
- The AI must track the current phase and enforce gate logic, which adds
  state awareness to every session.
- The founder retains final control: only they can say "archive" or move past
  a failed exam by studying more material.
