---
id: AR-EXP-001
status: planned
created: 2026-07-19
related:
  - ../../knowledge/agent-runtime/README.md
  - ../../docs/strategy/mvp-agent-runtime.md
---

# Experiment: minimal Agent Runtime vertical slice

## Question

Can a small runtime make agent execution predictable, inspectable, and evaluable
without relying on a live model provider?

## Hypothesis

An explicit state machine, a policy-checked tool boundary, deterministic model
decisions, and structured traces will make failure modes testable and explainable.

## Variables and constraints

| Item | Initial choice | Why |
| --- | --- | --- |
| Scenario | Order delivery status | Simple read-only tool flow |
| Agent count | One | Isolate runtime concerns |
| Model | Deterministic fake | Reproducible control flow |
| Tools | One read-only tool | Make contract/policy visible |
| Iteration limit | TBD | Must produce an explicit stop reason |

## Scenarios to evaluate

| ID | Input/condition | Expected result | Observed result |
| --- | --- | --- | --- |
| AR-E01 | Valid order ID | Approved tool call, grounded response | Pending |
| AR-E02 | Missing order ID | Clarification / no tool call | Pending |
| AR-E03 | Unknown order | Safe not-found response | Pending |
| AR-E04 | Tool timeout | Controlled failure with trace | Pending |
| AR-E05 | Disallowed tool request | Policy rejection with trace | Pending |

Expand to at least ten before declaring MVP-01 done.

## Procedure

1. Write state transition and tool contract.
2. Implement deterministic decisions for each scenario.
3. Capture lifecycle events and stop reason for every run.
4. Run the scenario set and record actual results.
5. Compare results to the hypothesis; create an ADR if a design choice changes.

## Evidence and decision

- Evidence links: Pending
- Result: Pending
- Decision: Pending
- What would falsify the hypothesis: a failure mode that cannot be located or
  reproduced from state and trace data.
