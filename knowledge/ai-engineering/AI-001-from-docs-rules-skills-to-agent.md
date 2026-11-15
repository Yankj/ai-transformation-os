---
id: AI-001
type: pattern
status: draft
created: 2026-11-15
updated: 2026-11-15
confidence: medium
links:
  - ../../knowledge/delivery-paradigm/DP-001-three-delivery-modes.md
  - ../../knowledge/agent-runtime/AR-001-agent-loop-and-runtime-boundaries.md
  - ../../knowledge/agent-evolution/AE-001-agent-capability-maturity-model.md
  - ../../reviews/2026-11-15-mvp01-restart.md
---

# AI-001：AI 友好工程不是多写几条 Prompt，而是 Docs、Rules、Skills 一层层长成可执行能力

> **English summary:** AI output quality depends on the quality of project
> context. Docs explain why, Rules declare what should or should not be done,
> and Skills encode sequenced work with completion checks. Workflows orchestrate
> those skills across tools; Agents choose among them. This progression is
> complementary, not a replacement chain, and it should not be described as a
> finished Agent platform.

## 一句话回答 / One-paragraph answer

把项目设计、研发规范、调试方法和常见问题结构化进仓库，是为了让 AI 和新人拿到同一份上下文。这是 Docs 与 Rules 的工作。Rules 擅长表达「应该是什么、不要做什么」，但不擅长表达「按什么顺序做、做完如何检查」。当一件事已经是清晰的 SOP——有触发条件、步骤依赖和完成标准——就应把它写成 Skill：必要时带校验脚本，而不是继续堆静态规则。再往上，跨工具的交付链路是 Workflow；能根据上下文选择调用哪些 Skill 或 Workflow 的，才是 Agent。这条链是互补的，不是后者替换前者。

## 为什么重要 / Why it matters

AI 输出不稳定时，人们常先换模型或把 Prompt 写得更长。更常见的原因其实是：关键知识还散落在文档站点、聊天记录和口头传统里。上下文不对，生成结果就不会对。

对做过组件复用和低代码物料的人来说，这并不陌生。当年要解决的是：能力如何独立发布、按契约分发、在运行时被消费，而不是每个项目手工升级一份拷贝。今天要解决的是同一类问题的新形态：规范、SOP 和交付流程如何成为 AI 可执行的契约。连续性在于契约、治理和复用，而不在于「做过平台所以会做 Agent」。

## 模型 / Mechanism

### 演进层级

```text
Docs（为什么） → Rules（是什么 / 不是什么） → Skills（怎么做，做到什么算完）
                 → Workflow（如何把步骤和工具串起来） → Agent（如何选择下一步）
```

| 层级 | 主要职责 | 适合表达的内容 | 不适合单独承担的内容 |
| --- | --- | --- | --- |
| Docs | 提供背景和理由，让人与 AI 理解上下文 | 架构说明、调试方法、常见问题 | 强制执行顺序或验收 |
| Rules | 声明边界和约束 | 代码风格、分层原则、命名、安全红线 | 多步骤 SOP、需要脚本校验的流程 |
| Skills | 把 SOP 变成可执行步骤 | 有触发条件、顺序、完成标准和校验的工作 | 跨系统的长期编排，或开放式自主决策 |
| Workflow | 编排跨工具、跨系统的链路 | 从需求确认到预发验收的受控路径 | 在每个节点动态决定「下一步做什么」 |
| Agent | 依据上下文选择工具、Skill 或 Workflow | 需要判断和分支的任务 | 在没有契约和校验时直接操作生产变更 |

一句话区分：**Rules 管「是什么」，Skills 管「怎么做」，Workflow 管「如何串起来」，Agent 管「如何选择」。**

### 什么时候该用 Skill，而不是继续写 Rules

| 场景 | 用 Rules | 用 Skill |
| --- | --- | --- |
| 代码风格、命名、架构分层 | 是 | — |
| 安全与合规红线 | 是 | — |
| 多步骤 SOP，步骤有先后 | — | 是 |
| 做完后需要脚本或清单校验 | — | 是 |
| 有明确的完成标准 | — | 是 |
| 同一流程会在多个项目重复发生 | 可作为补充约束 | 是 |

经验上，Rules 里的长流程很容易被跳步或打乱顺序；同一套 SOP 如果散落在多条规则中，模型也更容易漏掉检查项。Skill 把触发、步骤和校验收在一处，执行力度会从「建议」变成「按契约做完」。

### 一个可迁移的例子：组件库 SOP

以组件库的日常工作为例——不依赖某个具体仓库名称，只保留方法。

原先用 Rules 书写「新建组件要有文档和示例，发布前要检查质量」，执行效果不稳定：生成时常常漏掉示例或文档，要到发布之后才被发现。改成 Skill 之后，可以把工作拆成三类：

1. **初始化**：按模板生成目录、入口、样式、可演示示例、文档和测试骨架，并检查结构是否完整。
2. **更新维护**：按变更规范修改实现，同步示例与变更说明，再检查是否符合约定。
3. **发布检查**：构建、质量检查、确认示例可运行、文档和测试齐全；缺什么就补什么，而不是只打包代码。

这个例子要说明的不是「组件库必须用 Skill」，而是：一旦某件事已经有稳定 SOP，就应把完成标准写成可执行检查，而不是继续用散文去提醒。同一思路也适用于配置变更、标准接入或一次完整的需求交付：先有 Docs 和 Rules 提供上下文与边界，再把重复路径收成 Skill。

### 和交付范式、Runtime 的关系

产品自主交付要成立，产品同学看到的应是需求、方案和验收，而不是仓库操作。对系统来说，这条路径通常是一条 Workflow，里面调用的是受约束的 Skills，质量卡点仍然在人和流水线一侧。见 [DP-001](../delivery-paradigm/DP-001-three-delivery-modes.md)。

当任务需要模型在多个动作之间做选择时，仅有 Skill 还不够，还需要 Runtime 负责状态、策略、停止条件和追踪。见 [AR-001](../agent-runtime/AR-001-agent-loop-and-runtime-boundaries.md)。把 SOP 写成 Skill，是走向 Agent 的必要步骤，但不等于已经拥有一个可治理的 Agent。

## 证据和来源 / Evidence and sources

- 分层定义来自实践中的分工：先把项目上下文沉淀为 Docs 与 Rules，再把其中已经稳定的 SOP 改写成 Skills。这是方法总结，不是某个平台的功能说明。
- 组件库 SOP 的前后对比是定性观察：Rules 阶段容易漏掉示例或文档；Skill 阶段把校验前提前。这里没有可公开的规模化统计，因此不写覆盖率或耗时对比。
- 公开仓库里目前还没有可运行的 Skill 实现或 Workflow 编排代码。本卡记录的是工程判断，应被视为 Draft，等待后续可复现证据。
- 行业侧可对照的是各类「把重复流程写成可执行技能」的做法；本卡不依赖某一家产品的术语体系。

## 边界和取舍 / Boundaries and trade-offs

- 不是所有规范都要变成 Skill。风格和红线留在 Rules 里更合适；把一切流程化会造成维护成本。
- Skill 写得过细，会在上下文变化时迅速过期；写得过粗，又会退回成一篇 Rules。
- 不要把「探索过面向用户的助手，或把内部上线流程收成助手」写成已经建成的 Agent 平台。当前更扎实的层是 Docs、Rules 和 Skills，Agent 仍是上一层的目标态。
- 没有校验的 Skill 只是换了一种格式的说明书。完成标准比步骤清单更重要。

## 关联资产 / Connected assets

- 相关概念：[DP-001 三类交付范式](../delivery-paradigm/DP-001-three-delivery-modes.md)
- 相关概念：[AR-001 Agent Runtime 边界](../agent-runtime/AR-001-agent-loop-and-runtime-boundaries.md)
- 相关概念：[AE-001 Agent 能力成熟度](../agent-evolution/AE-001-agent-capability-maturity-model.md)
- 复盘：[2026-11-15 MVP-01 重启](../../reviews/2026-11-15-mvp01-restart.md)
- 内容机会：可派生为「Rules 不够用的时候」短文，或一份 Skill 编写清单（对应计划中的 AI-002）。

## 产品化假设 / Productization hypothesis

这套分层可以变成团队的上下文治理清单，或一个把现有 Rules 升级为 Skill 的检查表。在公开仓库里出现可运行的示例 Skill 之前，它适合作为方法卡，不适合包装成通用平台能力。
