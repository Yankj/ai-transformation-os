# MVP-01: Agent Runtime Learning Loop

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

| Dimension | Required evidence |
| --- | --- |
| Mental model | ≥5 linked cards: agent loop, state, tool execution, trace/observability, evaluation/safety |
| Engineering | One runnable or reproducibly specified vertical slice in `projects/agent-runtime-lab/` |
| Architecture | Runtime boundary diagram and at least one ADR |
| Evaluation | ≥10 scenario cases with expected outcome and observed result |
| Communication | One demo walkthrough plus one article/video brief |
| Reflection | One weekly review and a final retrospective with next bets |

## Scope: smallest useful vertical slice

```text
Task input → runtime state → model decision → approved tool call
          → tool result → stop/continue → trace → evaluator
```

The lab needs a deterministic fake model/tool mode so its control flow can be
tested without credentials. A provider adapter may be added later, but a live
model call is not the definition of success.

## 14-day sequence

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
