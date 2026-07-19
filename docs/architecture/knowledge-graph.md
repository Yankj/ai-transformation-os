# Knowledge graph model

ATOS uses Git-native Markdown links as its first graph store. This is simpler,
portable, and inspectable. A graph database or PKM tool can be an export target
later, never the source of truth.

## Node types

| Node | Purpose |
| --- | --- |
| Concept | A durable explanation or model |
| Pattern | A reusable solution and its trade-offs |
| Experiment | Evidence created by trying something |
| Decision | A chosen direction and rationale |
| Demo | A running/producible application of knowledge |
| Content | A public synthesis of evidence |
| Opportunity | A validated product, service, or audience insight |

## Edge types

Use explicit link labels in Markdown: `explains`, `implements`, `tests`,
`contradicts`, `supersedes`, `publishes`, `could-productize-as`.

Example: `AR-003 [implements](../../projects/agent-runtime-lab/README.md) the
tool-execution boundary and is [tested by](...) AR-EXP-002.`

## Minimum metadata

Use YAML front matter for non-trivial assets:

```yaml
id: AR-001
type: concept
status: draft # draft | validated | superseded
created: YYYY-MM-DD
updated: YYYY-MM-DD
confidence: medium # low | medium | high
links: []
```

`confidence` describes the strength of the claim, not personal certainty.
