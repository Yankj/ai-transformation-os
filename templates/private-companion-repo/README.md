# ATOS Private Context

这是 ATOS 的私有上下文仓库（P1），用于保存长期需要、但不应公开的职业与项目上下文。
它不是凭证库；密钥、Token、私钥、Cookie、身份文件和合同原件只可保存在密码管理器、
系统钥匙串或加密存储。

This private repository holds P1 long-lived context that must not be public.
It is not a secret store. Credentials and highly sensitive files never enter Git.

## 目录 / Directories

| 目录 | 保存内容 |
| --- | --- |
| `00-profile/` | 真实职业背景、能力盘点和个人约束 |
| `01-context/` | 脱敏前的工作观察与行业上下文 |
| `02-strategy/` | 私有目标、商业假设和决策记录 |
| `03-raw-notes/` | 需要长期保留的原始复盘与草稿 |
| `04-relationships/` | 最小化保存的访谈和合作上下文 |
| `05-evidence/` | 已授权、非公开的原始证据索引 |
| `06-declassification/` | 导出到公开仓库前的审查记录 |

## 规则 / Rules

1. 只提交 P1；P3 永不进入 Git。
2. 每份可导出内容使用稳定 ID，例如 `PCTX-001`。
3. 公开内容只引用该 ID 和“已脱敏”，绝不链接本仓库。
4. 提交前审阅 `git diff --cached`，并遵守同级公开仓库的 `PRIVACY.md`。
5. 该仓库必须保持私有，且不得作为公开仓库 submodule 或 remote。
