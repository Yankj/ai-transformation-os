# ATOS 协作指南 / collaboration guide

## Mission

本仓库是从 Software Engineer 成长为 AI Native Builder 的长期操作系统。
每次修改都应是一项可复用资产，而不是一次性回答。

This repository is the durable operating system for the career path from
Software Engineer to AI Native Builder. Treat every change as a reusable asset.

## Working rules

- Prefer Markdown, open formats, and explicit links over platform-specific
  databases or chat-only knowledge.
- A learning item is not complete until it has evidence: an experiment, demo,
  architecture diagram, or a written explanation.
- Keep claims traceable. Put source links and the date accessed in knowledge
  notes; put measured results in experiment reports.
- Link work in both directions: a knowledge card names its related experiment;
  an experiment names the knowledge cards and output it produced.
- Do not place API keys, personal data, or proprietary employer material in
  the repository. Use `.env` locally and document variable names in
  `.env.example` if code needs them.
- 中文为主，核心技术名词保留英文；面向外部协作的关键文档应提供简明英文摘要。
- 提交前运行 `npm run verify`，并按 `PRIVACY.md` 做人工脱敏检查。
- 使用泛化案例、虚构标识和区间/比例，不使用真实公司名、项目名、人员、客户、订单、仓库地址或截图。

## Where work belongs

| Need | Location |
| --- | --- |
| Strategy, decisions, roadmaps | `docs/` |
| Atomic, connected learning notes | `knowledge/` |
| Runnable or designed portfolio work | `projects/` |
| Article/video/shareable drafts | `content/` |
| Weekly and milestone evidence | `reviews/` |
| Reusable writing/experiment formats | `templates/` |

## Change quality bar

1. Update the nearest README/index when adding an asset.
2. Use a template where one exists; improve the template when repetition
   reveals a gap.
3. Keep the MVP scoped. Record attractive but non-essential ideas in
   `docs/strategy/parking-lot.md`.
4. For architecture-level choices, add an ADR in `docs/decisions/`.
