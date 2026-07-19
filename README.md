# AI Transformation OS (ATOS)

> AI 时代软件工程师职业升级操作系统

ATOS is a long-lived, Git-native system for turning an experienced software
engineer's learning, reasoning, and practice into connected, reusable assets.
It is deliberately more than a study plan, note repository, demo collection,
or blog: it is the system that makes each of those reinforce the others.

## North star

Help traditional software engineers progress through:

`Software Engineer → AI Engineer → AI Platform Engineer → AI Solution Architect → AI Native Builder`

The founder's current wedge is enterprise Agent Runtime capability. The first
MVP proves one complete loop in 14 days:

`Learn → Capture knowledge → Build evidence → Publish → Review → Improve system`

Read the [project charter](docs/strategy/project-charter.md),
[career roadmap](docs/strategy/career-roadmap.md), and
[MVP plan](docs/strategy/mvp-agent-runtime.md) first.

## What makes an item complete

Every meaningful learning item must produce at least one durable artifact:

- a runnable demo or experiment;
- an architecture diagram or design decision;
- a connected Markdown knowledge card.

The artifact then becomes raw material for content, portfolio proof, and
future products. The operating loop is defined in
[the operating model](docs/operating-system/operating-model.md).

## Repository map

| Area | Purpose |
| --- | --- |
| [`docs/`](docs/README.md) | Strategy, architecture, operating rules, decisions |
| [`knowledge/`](knowledge/README.md) | Atomic and linked knowledge assets |
| [`projects/`](projects/README.md) | Demos and portfolio projects |
| [`content/`](content/README.md) | Public-facing drafts and distribution assets |
| [`reviews/`](reviews/README.md) | Weekly reviews and milestone evidence |
| [`templates/`](templates/README.md) | Repeatable formats for the system |

## Start here (first 90 minutes)

1. Read the MVP outcomes and explicitly choose the first runtime scenario.
2. Create one knowledge card for the agent-runtime mental model.
3. Create the experiment record before writing code.
4. Build the smallest vertical slice: input → agent loop → tool boundary →
   trace → evaluation case.
5. Record what happened, then turn it into one public-facing content brief.

Use the templates rather than free-form notes. The aim is compounding value,
not perfect documentation.

## Current focus

**MVP-01 — Agent Runtime Learning Loop**

- Duration: 14 days
- Outcome: an explainable Agent Runtime lab, five connected knowledge cards,
  a demo walkthrough, one publishable draft, and a measured retrospective.
- Scope guardrail: build one runtime vertical slice before exploring multi-agent
  orchestration, RAG platform design, or production infrastructure.

See the [MVP scorecard](docs/strategy/mvp-agent-runtime.md#definition-of-done).

## Working with AI collaborators

Humans own intent, truth, and final decisions. AI collaborators accelerate
research, drafting, implementation, review, and connection-making. The shared
contract lives in [the collaboration protocol](docs/architecture/agent-collaboration.md).

## Principles

1. Learning is engineering.
2. Knowledge compounds only when it is connected.
3. Evidence beats claims.
4. Outputs are designed for reuse and productization.
5. Platform neutrality protects long-term value.
