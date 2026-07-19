# 贡献指南 / Contributing to ATOS

感谢你帮助 ATOS 成为可复用的 AI 工程实践系统。中文为主；代码、API、测试和关键
术语保持英文以便协作。

Thank you for improving ATOS. Chinese is primary; code, APIs, tests, and key
technical terms remain in English for collaboration.

## 贡献前 / Before contributing

1. 阅读 [项目章程](docs/strategy/project-charter.md)、[运行模型](docs/operating-system/operating-model.md) 和 [隐私政策](PRIVACY.md)。
2. 一个变更只解决一个清晰问题；范围扩大时先记录 ADR 或讨论。
3. 不提交个人、雇主、客户或凭证信息。

## 工作流 / Workflow

1. 从 `main` 创建分支，建议格式：`codex/<scope>-<summary>` 或 `<type>/<summary>`。
2. 使用既有模板创建知识卡、实验、内容或 ADR。
3. 更新相关 README/index，并补齐双向 Markdown 链接。
4. 运行 `npm run verify` 和 `git diff --check`。
5. 提交信息使用 Conventional Commits，例如：`docs: add agent runtime state card`。
6. 提交 Pull Request，说明目标、证据、验证方式、隐私检查和后续事项。

## 质量标准 / Quality bar

- 主张必须有来源、实验或明确标记的假设。
- 失败实验应保留结论和边界，而非删除；但仍必须脱敏。
- 文档的中文解释优先清晰，英文术语要一致。
- 不因“内容数量”降低验证和链接质量。

## 行为与安全 / Conduct and security

请遵守 [行为准则](CODE_OF_CONDUCT.md)。安全漏洞和泄露请按
[安全政策](SECURITY.md) 私密报告，不要创建公开 Issue。
