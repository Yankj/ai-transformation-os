# MVP-01: Agent Runtime Learning Loop

## Status (updated 2026-11-15)

**Incomplete.** The original 14-day window ran from 2026-07-19 and was not
finished. The repository has a runtime boundary card, a designed lab, and a
ten-case evaluation spec; it does not have an implementation, observed
results, a demo walkthrough, or a score recorded during that window.

The 2026-11-15 restart keeps this MVP as the next engineering bet, but does
not resume the calendar as if the sprint were still in progress. Method cards
on delivery paradigms and the Docs → Rules → Skills path were added first.
See the [milestone retrospective](../../reviews/2026-11-15-mvp01-restart.md).

Do not describe the lab as runnable, and do not start a broader topic in place
of the missing evidence.

## Objective

Within 14 days, gain and demonstrate enterprise-oriented Agent Runtime
capability while proving the ATOS flywheel can turn one topic into durable,
connected assets.

## Learning question

> What responsibilities make an Agent Runtime reliable, observable, and
> evolvable enough for enterprise use?

This question is more valuable than “how do I call an agent framework?”
Frameworks are implementation choices; the runtime contract is the durable
engineering object.

## Definition of done

| Dimension | Required evidence | Status on 2026-11-15 |
| --- | --- | --- |
| Mental model | ≥5 linked cards: agent loop, state, tool execution, trace/observability, evaluation/safety | Not done. Only AR-001 exists. |
| Engineering | One runnable or reproducibly specified vertical slice in `projects/agent-runtime-lab/` | Not done. Design only; no `src/`. |
| Architecture | Runtime boundary diagram and at least one ADR | Partial. Boundary model exists; no runtime ADR. |
| Evaluation | ≥10 scenario cases with expected outcome and observed result | Not done. Expected outcomes exist; observed results do not. |
| Communication | One demo walkthrough plus one article/video brief | Not done. Brief only; evidence pending. |
| Reflection | One weekly review and a final retrospective with next bets | Partial as of 2026-11-15: milestone retrospective exists; the week-1 review was never written. |

## Scope: smallest useful vertical slice

```text
Task input → runtime state → model decision → approved tool call
          → tool result → stop/continue → trace → evaluator
```

The lab needs a deterministic fake model/tool mode so its control flow can be
tested without credentials. A provider adapter may be added later, but a live
model call is not the definition of success.

## 14-day sequence

This sequence remains the implementation plan if and when the lab is started.
It is historical context, not a claim that the work is underway.

| Days | Theme | Deliverables |
| --- | --- | --- |
| 1–2 | Define runtime mental model and scenario | 2 cards, scenario, experiment plan |
| 3–4 | State and execution loop | state machine diagram, deterministic vertical slice |
| 5–6 | Tool contracts and safeguards | tool boundary card, failure cases |
| 7 | Observability and first review | trace schema, weekly review |
| 8–9 | Evaluation harness | scenario set, baseline results |
| 10–11 | Enterprise concerns | ADR, reliability/security/cost trade-off notes |
| 12 | Demo polish | walkthrough and architecture narrative |
| 13 | Content synthesis | article/video brief |
| 14 | Retrospective | scorecard, lessons, next MVP decision |

## Scope guardrails

- One scenario, one agent, and one or two tools.
- Simulated tools are acceptable; unclear behavior is not.
- Prefer a testable execution model over a polished UI.
- Do not add RAG, multiple agents, persistent memory, or deployment unless the
  core loop and evaluation evidence are complete.

## Scorecard

At the end, score 0–2 for each item: explainability, reproducibility,
observability, evaluation quality, public clarity, and system reuse. A score
below 9/12 means improve the loop before starting a broader topic.

No score was recorded in July 2026. A retrospective score will be written only
after the lab produces reproducible runs.
