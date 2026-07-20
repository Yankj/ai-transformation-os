# MVP-01 学习大纲：Agent Runtime / Learning syllabus

## 学习目标 / Outcome

14 天后，不以"学过某个框架"为标准，而以能独立解释、实现和评估一个可观察的单
Agent Runtime 垂直切片为标准。每一天按
[创始人主导学习协议](../operating-system/founder-led-learning-protocol.md) 完成一个小闭环。

## 阶段流程 / Phase flow

每一天的学习都遵循 6 阶段流程：
Launch → Examine → Practice → Reflect → Assemble → Seed。
详见 [创始人主导学习协议](../operating-system/founder-led-learning-protocol.md)。

## 大纲 / 14-day outline

| Day | 学习问题 / Learning question | 最小实践 / Practice | 当日证据 / Evidence |
| --- | --- | --- | --- |
| 1 | Agent、Workflow、Runtime、Tool 的边界是什么？ | 画最小状态机 | 解释边界与终态 |
| 2 | Runtime State 和 Context 分别是什么？ | 设计 state snapshot | 能复现一次运行所需状态 |
| 3 | Agent loop 如何从输入走到终态？ | 伪代码或 deterministic loop | 显式 stop reason |
| 4 | Tool contract 如何定义输入、输出和错误？ | 为 `get_order_status` 设计 schema | 正常与错误结果契约 |
| 5 | Tool policy、approval 与 sandbox 放在哪一层？ | 为两种拒绝路径画决策表 | 允许/拒绝/待批准证据 |
| 6 | 什么是好的 Trace？ | 设计最小事件序列与 traceId | 可诊断的一次失败路径 |
| 7 | 第一周学到了什么，缺什么？ | 运行或桌面推演前 5 个 case | 周复盘与范围调整 |
| 8 | Evaluation 应评估什么，而非只评估文案？ | 为案例定义 oracle 与断言 | 10 个案例的评估设计 |
| 9 | 如何让 Evals 变成回归保护？ | 为 deterministic mode 设计 harness | pass/fail 与诊断格式 |
| 10 | timeout、retry、iteration、cost 如何受控？ | 选择一个失败注入实验 | 明确的预算与恢复策略 |
| 11 | 企业 Runtime 的安全与治理最小面是什么？ | 威胁/控制对应表 | 数据、工具与审计边界 |
| 12 | Runtime 如何成为 Platform capability？ | 画 Agent/Workflow/Knowledge/Tool 接口图 | 可复用能力与产品边界 |
| 13 | 如何把工程证据讲给同行？ | 走通 Demo 叙事 | 一条证据支持一个观点 |
| 14 | 什么值得沉淀、复用或停止？ | 评分 MVP-01 | 复盘、下一主题和内容决策 |

## 每天的停止条件 / Stop condition

当日不追求覆盖所有资料。满足以下条件就停止，记录问题留给明天：

1. 能回答当天学习问题；
2. 有一个实际或可推演的行为作为证据；
3. 能说出一个尚未验证的边界；
4. 已选择明天唯一的问题。

## 学习材料原则 / Source strategy

创始人自行选择材料，优先顺序为：官方运行时/SDK 文档、模型厂商工程文章、开源实现的
代码与测试、论文或系统设计文章。每次只带回真正改变你理解的来源，不为"资料收集"而
收集。

## 与既有经验的连接 / Founder leverage

每天主动用已有前端/平台经验提出一个类比：状态管理、组件契约、错误边界、可观测性、
流式 UX、权限与研发效能。类比必须同时说明"相同点"和"AI Runtime 不同之处"，避免
错误迁移。
