# AI Transformation OS（ATOS）

> AI 时代软件工程师职业升级操作系统<br>
> Career Transformation Operating System for Software Engineers in the AI Era

> **语言 / Language**：中文为主，英文用于核心术语、对外协作和必要摘要。<br>
> Chinese is primary; English supports core terms, external collaboration, and concise summaries.

ATOS 是一个长期演进、Git 原生（Git-native）的个人成长与职业升级操作系统。
它把资深软件工程师的学习、认知和实践，沉淀为相互连接、可验证、可复用的资产。
它不是学习计划、知识库、Demo 集合或博客；而是让这些成果形成复利的系统。

ATOS is a long-lived, Git-native system that turns learning, reasoning, and
practice into connected, verifiable, reusable assets. It is not merely a study
plan, knowledge base, demo collection, or blog.

## 北极星目标 / North star

帮助传统软件工程师完成职业跃迁：

`Software Engineer → AI Engineer → AI Platform Engineer → AI Solution Architect → AI Native Builder`

当前切入点是企业级 **Agent Runtime**。首个 MVP 在 14 天内验证一个完整闭环：

`学习 Learn → 知识沉淀 Capture → 工程证据 Build → 内容输出 Publish → 复盘 Review → 系统改进 Improve`

从以下文档开始：

- [项目章程 / Project charter](docs/strategy/project-charter.md)
- [职业路线 / Career roadmap](docs/strategy/career-roadmap.md)
- [MVP-01 计划 / MVP plan](docs/strategy/mvp-agent-runtime.md)
- [双语与术语规范 / Language policy](docs/language-policy.md)

## 什么算完成 / Definition of done

每个有价值的学习主题必须至少产生一类可复用证据：

- 可运行的 Demo 或实验（experiment）；
- 架构图或架构决策（ADR）；
- 可链接的 Markdown 知识卡（knowledge card）。

这些证据随后成为作品集、文章、分享、课程或产品的原材料。具体工作流见
[ATOS 运行模型 / Operating model](docs/operating-system/operating-model.md)。

## 仓库地图 / Repository map

| 目录 | 用途 / Purpose |
| --- | --- |
| [`docs/`](docs/README.md) | 战略、架构、运行机制与决策 / strategy and decisions |
| [`knowledge/`](knowledge/README.md) | 原子化、可连接的知识资产 / knowledge assets |
| [`projects/`](projects/README.md) | Demo、实验与作品集工程 / engineering proof |
| [`content/`](content/README.md) | 可公开传播的内容资产 / public content assets |
| [`reviews/`](reviews/README.md) | 周复盘与里程碑证据 / review evidence |
| [`templates/`](templates/README.md) | 可重复使用的工作模板 / reusable formats |

## 当前焦点 / Current focus

**MVP-01：Agent Runtime 学习闭环 / Agent Runtime Learning Loop**

- 周期：14 天 / 14 days
- 成果：可解释的 Agent Runtime Lab、5 张互联知识卡、Demo 演示、一份内容初稿和一次量化复盘。
- 约束：先完成一个单 Agent 垂直切片，再考虑多 Agent、RAG 或部署。

完整验收标准见 [MVP-01 scorecard](docs/strategy/mvp-agent-runtime.md#definition-of-done)。

## 开源协作与隐私 / Open source and privacy

- 请先阅读 [贡献指南 / Contributing](CONTRIBUTING.md)、[行为准则 / Code of Conduct](CODE_OF_CONDUCT.md)、[安全政策 / Security](SECURITY.md) 与 [隐私脱敏政策 / Privacy](PRIVACY.md)。
- **禁止**提交真实姓名、联系方式、账号、密钥、雇主内部信息、客户数据或可识别的工作经历。
- 在提交前运行 `npm run verify`；它会检查仓库链接和常见敏感信息模式，但不能替代人工审查。
- 本仓库以 [Apache-2.0](LICENSE) 授权；未来可交付产品将根据其独立边界选择许可。

## 与 AI 协作 / Working with AI

人类负责意图、事实和最终决策；AI 负责加速研究、起草、实现、审查和建立连接。
协作约定见 [Human + AI collaboration protocol](docs/architecture/agent-collaboration.md)。

## 原则 / Principles

1. 学习必须工程化 / Learning is engineering.
2. 知识只有建立连接才会复利 / Connected knowledge compounds.
3. 证据优先于主张 / Evidence beats claims.
4. 成果为复用和产品化而设计 / Design outputs for reuse and productization.
5. 平台无关性保护长期价值 / Platform neutrality protects long-term value.
