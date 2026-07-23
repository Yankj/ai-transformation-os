---
id: LF-004
type: concept
status: draft
created: 2026-07-23
updated: 2026-07-23
confidence: medium
links:
  - LF-002-qkv-scaled-dot-product-attention.md
  - LF-005-pretraining-vs-inference.md
---

# LF-004：Temperature 和 Top-p 如何控制大模型的文本生成？

> **English summary:** After the model outputs raw logits over the vocabulary,
> Temperature scales the logits before Softmax to sharpen or flatten the
> probability distribution, while Top-p (nucleus sampling) restricts sampling
> to the smallest set of tokens whose cumulative probability reaches p.

## 一句话回答 / One-paragraph answer

模型最后一层输出全词表的 Logits（未归一化得分）。Temperature 通过除以温度系数 T
修改 Softmax 的尖锐程度：T 趋近 0 时概率集中于最高分词（确定性输出），T > 1 时
概率分布被平滑（创造性输出）。Top-p 则按概率从高到低排序，仅保留累积概率达到 p
的最小候选集并在其中重新归一化采样，兼顾多样性与通顺度。

## 为什么重要 / Why it matters

采样参数是用户/开发者与模型交互时最直接的"创造力旋钮"。理解 Temperature 和 Top-p
的数学含义，才能在 API 调用、Prompt 工程和 Agent Runtime 配置中做出合理选择：
代码生成需要低 T（确定性），创意写作需要高 T（多样性）。

## 模型 / 机制 / Model / mechanism

### 带温度的 Softmax

```text
P(y_i) = exp(logit_i / T) / sum_j exp(logit_j / T)
```

### Temperature 效果

| T 值 | 概率分布 | 输出特征 |
| --- | --- | --- |
| T -> 0 | 极度尖锐（接近 argmax） | 确定、保守、可复现 |
| T = 1 | 原始分布 | 模型默认行为 |
| T > 1 | 平滑、均匀化 | 随机、多样、有创造性 |

### Top-p（Nucleus Sampling）

```text
1. 将所有词按概率从高到低排序
2. 累加概率直到 >= p（如 0.9）
3. 仅保留这些词，重新归一化
4. 在该集合内按概率采样
```

**与 Top-k 的区别：** Top-k 固定保留 k 个候选词，不管概率分布形状；Top-p 根据
分布动态调整候选集大小。当模型非常确信时（一个词概率 0.95），Top-p=0.9 只保留
1 个词；当模型不确定时，可能保留 20 个词。

### 实践配置参考

| 场景 | Temperature | Top-p |
| --- | --- | --- |
| 代码生成 / 数学推理 | 0 ~ 0.3 | 0.9 ~ 1.0 |
| 通用对话 | 0.7 ~ 1.0 | 0.9 ~ 0.95 |
| 创意写作 / 头脑风暴 | 1.0 ~ 1.5 | 0.95 ~ 1.0 |

## 证据与来源 / Evidence and sources

- Holtzman et al., "The Curious Case of Neural Text Degeneration", ICLR 2020：Top-p 采样原始论文。
- 学习笔记整理，2026-07-23。

## 边界与待验证 / Boundaries and trade-offs

- Temperature 和 Top-p 通常联合使用，效果有交互作用，不是简单叠加。
- 部分 API（如 OpenAI）还暴露 Top-k、frequency_penalty、presence_penalty 等
  额外参数，本卡未覆盖。
- 极低 Temperature 不等于完全确定性（浮点精度和实现细节可能导致微小差异）。

## Connected assets

- 数学上游（Softmax 在 Attention 中的使用）：[LF-002 Q/K/V 与 Attention](LF-002-qkv-scaled-dot-product-attention.md)
- 推理阶段工程：[LF-005 预训练 vs 推理](LF-005-pretraining-vs-inference.md)

## 产品化假设 / Productization hypothesis

可做成互动 Demo：给定一段 Prompt，用滑块调节 T 和 Top-p，实时展示概率分布变化
和生成文本差异。适合作为 API 使用教程或工程师工作坊的动手环节。
