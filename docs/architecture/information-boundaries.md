# 信息边界与私有上下文 / Information boundaries

## 决策 / Decision

ATOS 使用分层存储，而不是试图依靠 `.gitignore` 保护一切。`.gitignore` 只能防止
未跟踪文件被误加入当前仓库；它不能保护已经提交的内容、fork、缓存或历史记录。

ATOS uses layered storage. `.gitignore` only reduces accidental additions of
untracked files; it cannot protect committed content, forks, caches, or history.

## 分类模型 / Classification model

| 等级 | 名称 | 允许位置 | 示例 |
| --- | --- | --- | --- |
| P0 | 公开资产 / Public | `ai-transformation-os/` | 脱敏知识卡、虚构 Demo、公开方法论 |
| P1 | 私有上下文 / Private | `../ai-transformation-os-private/` 私有 Git 仓库 | 真实复盘、职业决策、已授权的非公开上下文 |
| P2 | 本机临时 / Local-only | `ai-transformation-os/.local/`，已忽略 | 未脱敏草稿、临时导出、原始日志 |
| P3 | 凭证与高敏 / Secret | 密码管理器、系统钥匙串或加密存储 | Token、私钥、Cookie、身份文件、合同原件 |

P1 并不等于“可以放心保存秘密”：私有 Git 仍可能被误共享、同步或泄露。因此 P3 永远
不进入任意 Git 仓库。

## 允许进入私有仓库的内容 / P1 examples

- 真实职业背景、能力差距、目标与约束；
- 已去除凭证但仍不适合公开的项目复盘、访谈和反馈；
- 商业化假设、内容策略、潜在合作机会；
- 从 P2 整理出的、需要长期追溯但不宜公开的原始证据。

## 从私有到公开的导出协议 / Declassification protocol

1. 在私有仓库创建或更新原始材料，并使用稳定 ID，例如 `PCTX-001`。
2. 提取不依赖具体人、公司、客户、数字或内部流程的可迁移结论。
3. 使用虚构实体、模拟数据、区间或比例重写案例。
4. 执行 `npm run verify`，再按 [PRIVACY.md](../../PRIVACY.md) 人工审查。
5. 公开资产仅可写“来源：私有上下文 PCTX-001（已脱敏）”，不可创建可解析的私有仓库链接。
6. 对每次公开导出记录审查日期、审查人和剩余风险。

## 禁止的跨层操作 / Prohibited flows

- 不将 P3 复制到 P1、P2 或 P0。
- 不将 P2 当作唯一长期存档。
- 不把私有仓库作为公开仓库的 Git submodule、远程地址或同步目录。
- 不在公开 Commit、Issue、PR、日志、截图或 AI 对话中粘贴 P1/P2 原文。

## 多 Agent 协作要求 / AI collaboration

向 AI 提供上下文前，先按本模型分类。默认只提供 P0；需要 P1 时只给完成任务所需的
最小、已脱敏片段。AI 生成的输出在进入 P0 前必须由人类完成脱敏审查。
