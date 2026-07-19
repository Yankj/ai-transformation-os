# Operating model: the ATOS loop

## The unit of progress

The atomic unit is an **evidence loop**, not a study session.

```text
Intent → question → card → experiment → result → synthesis → review
  ↑                                                           │
  └────────────── next question / system improvement ────────┘
```

## Required links

Every loop has a unique ID, for example `AR-001`, and connects:

| Asset | Minimum fields |
| --- | --- |
| Knowledge card | Question, answer, source, confidence, links |
| Experiment | Hypothesis, setup, procedure, result, decision |
| Demo | Scenario, architecture, run/verify instructions |
| Content brief | Audience, promise, evidence, CTA |
| Review | Outcome, evidence, insight, next commitment |

Use relative Markdown links to bind these assets. A note with no links is an
inbox item, not knowledge.

## Cadence

- **Daily (20 min):** choose one evidence loop; update its status and links.
- **Twice weekly (45 min):** synthesize cards into the demo and update tests.
- **Weekly (45 min):** publish or prepare one insight; complete a review.
- **Milestone:** decide whether to deepen, package, or stop the theme.

## Quality gates

Before declaring work complete, ask:

1. Can another engineer reproduce or challenge this?
2. What evidence supports the conclusion?
3. What connects it to a previous or future asset?
4. Could this be reused in a post, talk, workshop, or product?
5. What would change my mind?

## Decision rights

The founder owns goals, public claims, and final trade-offs. AI collaborators
may draft, research, test, connect, and challenge assumptions, but must label
inference separately from evidence and never invent results.
