# Agent Runtime knowledge map

**MVP ID:** `AR`

## Target questions

1. What is the runtime's contract with an application and model provider?
2. How do state transitions, tool calls, and stop conditions work?
3. What makes execution observable, evaluable, secure, and cost-aware?

## Planned cards

| ID | Card | Evidence target | Status |
| --- | --- | --- | --- |
| [AR-001](AR-001-agent-loop-and-runtime-boundaries.md) | Agent loop and runtime boundaries | State machine and minimal contract | Draft |
| AR-002 | Runtime state and context | Reproducible state snapshot | Planned |
| AR-003 | Tool execution contract | Simulated tool tests | Planned |
| AR-004 | Traces and observability | Trace schema | Planned |
| AR-005 | Evaluation and safety | Scenario evaluation set | Planned |

Create cards with the [knowledge-card template](../../templates/knowledge-card.md)
and link them to the [runtime lab](../../projects/agent-runtime-lab/README.md).
