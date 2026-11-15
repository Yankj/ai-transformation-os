# Agent Runtime Lab

**Project ID:** `AR-LAB-001`  
**Status:** Designed — not implemented (as of 2026-11-15)

The experiment contract, architecture notes, and ten evaluation cases exist.
There is still no `src/`, no deterministic runner, and no observed results.
This project is the next engineering bet after the 2026-11 restart, not a
completed portfolio demo. See the
[milestone retrospective](../../reviews/2026-11-15-mvp01-restart.md).

## Purpose

Build the smallest testable Agent Runtime that demonstrates execution control
rather than prompt cleverness. Its job is to make the runtime's responsibilities
visible: state, model decision adapter, tool policy, lifecycle, trace, and
evaluation.

## Scenario

**Internal delivery-status assistant:** given an order identifier, the agent
may call a read-only `get_order_status` tool, summarize the result, and stop.
It must reject missing IDs, prohibited tool calls, tool failure, and excess
iterations. The domain is intentionally simple so runtime behavior is the
subject under study.

## Architecture

```text
User task
  → Runtime (state machine + limits)
  → Model adapter (deterministic fake first; provider adapter optional)
  → Tool policy → Tool registry → get_order_status
  → Trace sink → evaluation harness
```

## Acceptance criteria

- [ ] Explicit state model and stop reasons.
- [ ] Tool contracts are typed/documented and policy-checked before execution.
- [ ] Deterministic mode covers happy path and four failures.
- [ ] Each run emits a trace with correlation ID and lifecycle events.
- [ ] At least 10 scenario cases can be evaluated reproducibly.
- [ ] The README explains trade-offs, not only how to run it.

## Delivery plan

| Deliverable | Location |
| --- | --- |
| Experiment design | [`experiment.md`](experiment.md) |
| Implementation | `src/` (created once the experiment contract is approved) |
| Evaluation cases | `evals/cases.md` |
| Architecture decision | `../../docs/decisions/` |
| Knowledge cards | `../../knowledge/agent-runtime/` |
| Demo narrative | `../../content/agent-runtime-lab/` |

## Design constraints

- Start dependency-light and provider-neutral.
- Make a fake model and fake tool deterministic for tests and teaching.
- Treat model providers as adapters, not the runtime itself.
- Never use real customer, employer, or secret data.

## Next action

Do not fill observed results by hand. The next real step is a deterministic
implementation that can run the first five cases in `evals/cases.md` without
credentials. Until then, keep the status as Designed.
