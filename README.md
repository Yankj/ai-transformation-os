# AI Transformation OS（ATOS）

> 写给想把 AI 用进真实交付的工程师：把交付方式怎么变、工程上下文怎么长成可执行能力，写成可检查的方法。  
> For engineers bringing AI into real delivery: how work should be done, and how Docs, Rules, Skills and Agents evolve—with evidence, not a study plan.

**语言 / Language**：中文为主；英文用于核心术语和摘要。

## 当前主张 / Current thesis

AI 改变的不只是写代码的速度，更是协作环节本身值不值得保留。复杂工作仍然需要专业分工；但简单和中等复杂度的需求，可以用更少的交接完成。

本仓库当前对外讲清楚三件事：

1. **三类交付范式并存**：产品自主交付（PDE）、产品 + 全栈研发交付、传统专业分工 + AI 提效。见 [DP-001](knowledge/delivery-paradigm/DP-001-three-delivery-modes.md)。
2. **工程能力是长出来的**：Docs → Rules → Skills → Workflow → Agent。Rules 管「是什么」，Skills 管「怎么做」。见 [AI-001](knowledge/ai-engineering/AI-001-from-docs-rules-skills-to-agent.md)。
3. **Runtime 仍然重要，但还不是已完成的证据。** 企业级 Agent 需要显式的状态、工具策略、停止条件、追踪和评估。这块的设计见 [AR-001](knowledge/agent-runtime/AR-001-agent-loop-and-runtime-boundaries.md)，工程实现标为下一步。

这些主张来自可迁移的方法，以及小范围试点观察；它们不是规模化效率结论，也不代表已经建成一套 Agent 平台。

## 先读这些 / Start here

- [DP-001 三类交付范式](knowledge/delivery-paradigm/DP-001-three-delivery-modes.md)
- [AI-001 从 Rules 到 Skills，再到 Agent](knowledge/ai-engineering/AI-001-from-docs-rules-skills-to-agent.md)
- [AR-001 Agent Runtime 的边界](knowledge/agent-runtime/AR-001-agent-loop-and-runtime-boundaries.md)
- [AE-001 Agent 能力成熟度](knowledge/agent-evolution/AE-001-agent-capability-maturity-model.md)
- [2026-11-15 重启复盘](reviews/2026-11-15-mvp01-restart.md)
- [MVP-01 计划与现状](docs/strategy/mvp-agent-runtime.md)

## 现在做到哪 / Current status

| 资产 | 状态 |
| --- | --- |
| 操作系统、信息边界与校验门禁 | 已建立 |
| 交付范式知识卡（三类模式） | 2026-11 新增，Draft |
| Docs → Rules → Skills → Agent 知识卡 | 2026-11 新增，Draft |
| Agent Runtime 边界（AR-001）、能力成熟度（AE-001）、LLM 基础（LF-001～005） | Draft，可读 |
| Agent Runtime Lab | 已设计，**未实现** |
| Lab 演示与评测结果 | 未开始 |
| MVP-01 14 天闭环 | **未完成**，见[复盘](reviews/2026-11-15-mvp01-restart.md) |

ATOS 是一个 Git 原生（Git-native）的公开沉淀系统。2026 年 7 月先搭好运行骨架，并写下 Agent Runtime 边界、能力成熟度和一组基础卡片。原计划用 14 天跑通「学习 → 沉淀 → 工程证据 → 发布 → 复盘」的闭环，这个闭环没有完成。本次更新先把已经想清楚、可以公开的方法写成知识卡；停滞的经过写在[复盘](reviews/2026-11-15-mvp01-restart.md)里。

## 仓库地图 / Repository map

| 目录 | 用途 |
| --- | --- |
| [`docs/`](docs/README.md) | 战略、架构、运行机制与决策 |
| [`knowledge/`](knowledge/README.md) | 原子化、可连接的知识资产 |
| [`projects/`](projects/README.md) | Demo、实验与作品集工程 |
| [`content/`](content/README.md) | 可公开传播的内容资产 |
| [`reviews/`](reviews/README.md) | 周复盘与里程碑证据 |
| [`templates/`](templates/README.md) | 可重复使用的工作模板 |

## 开源协作与隐私 / Open source and privacy

- 请先阅读 [贡献指南](CONTRIBUTING.md)、[行为准则](CODE_OF_CONDUCT.md)、[安全政策](SECURITY.md) 与 [隐私脱敏政策](PRIVACY.md)。
- 信息边界见 [information boundaries](docs/architecture/information-boundaries.md)。
- **禁止**提交真实姓名、联系方式、账号、密钥、雇主内部信息、客户数据或可识别的工作经历。
- 提交前运行 `npm run verify`；它会检查仓库链接和常见敏感信息模式，但不能替代人工审查。
- 本仓库以 [Apache-2.0](LICENSE) 授权。

## 原则 / Principles

1. 学习必须工程化 / Learning is engineering.
2. 知识只有建立连接才会复利 / Connected knowledge compounds.
3. 证据优先于主张 / Evidence beats claims.
4. 成果为复用和产品化而设计 / Design outputs for reuse and productization.
5. 平台无关性保护长期价值 / Platform neutrality protects long-term value.
