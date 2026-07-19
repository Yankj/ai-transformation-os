# Human + AI collaboration protocol

## Roles

| Role | Accountable for | Typical AI support |
| --- | --- | --- |
| Founder / product owner | Intent, priorities, public claims, user value | Challenge scope, synthesize options |
| Chief architect | System boundaries, interfaces, trade-offs | Draft ADRs, identify coupling/risk |
| AI PM | Outcome, backlog, evidence cadence | Break down loops, maintain scorecard |
| Research agent | Source-grounded discovery | Extract claims and source dates |
| Builder agent | Implementation and tests | Create vertical slices and verification |
| Editor agent | Clear reusable communication | Convert evidence into content formats |

One person or one AI instance can fill several roles, but accountability must
remain clear.

## Task contract

Each task should state: objective, scope, inputs, expected artifact, acceptance
criteria, and where to write it. Avoid requests such as “learn Agent Runtime”
without a concrete evidence outcome.

## Collaboration rules

1. Work on different files when parallelising; coordinate before touching a
   shared index or architecture document.
2. Cite sources and label assumptions. Do not turn unverified AI output into a
   public claim.
3. A completed task updates links and records verification, not only prose.
4. Escalate scope changes as a decision, rather than silently expanding work.

## Definition of an AI-native workflow

AI-native does not mean “many agents.” It means the workflow has explicit
context, contracts, tool boundaries, evaluation, traceability, and a human
decision point where it matters.
