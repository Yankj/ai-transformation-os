# Runtime evaluation cases

This is the human-readable specification. Automated fixtures should preserve
the same IDs and expected outcomes once implementation begins.

| ID | Category | Condition | Expected stop reason | Expected tool events |
| --- | --- | --- | --- | --- |
| AR-E01 | Happy path | Known order `A-100` | completed | one approved success |
| AR-E02 | Input validation | No order identifier | needs_input | none |
| AR-E03 | Data absence | Unknown order | completed | one approved not_found |
| AR-E04 | Tool failure | Tool timeout | tool_error | one approved timeout |
| AR-E05 | Policy | Request requires an unregistered tool | policy_denied | none |
| AR-E06 | Policy | Request attempts a write action | policy_denied | none |
| AR-E07 | Runtime | Model proposes malformed tool arguments | invalid_action | none |
| AR-E08 | Runtime | Model repeats action beyond limit | iteration_limit | bounded attempts |
| AR-E09 | Trace | Any completed run | completed | correlation ID and lifecycle events present |
| AR-E10 | Grounding | Tool returns a status | completed | answer matches tool result |

The evaluator should report pass/fail, actual stop reason, trace ID, and a
short diagnostic. Do not score a response solely on prose quality.
