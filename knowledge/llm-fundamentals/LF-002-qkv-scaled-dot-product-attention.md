---
id: LF-002
type: concept
status: draft
created: 2026-07-23
updated: 2026-07-23
confidence: medium
links:
  - LF-001-transformer-architecture-overview.md
  - LF-004-sampling-temperature-topp.md
---

# LF-002：Q/K/V 的数学直觉与 Scaled Dot-Product Attention 如何计算？

> **English summary:** Self-attention maps input vectors into Query, Key, and
> Value matrices via learned projections, then computes attention weights as
> softmax(QK^T / sqrt(d_k)) and produces a weighted sum of Values. The scaling
> factor prevents gradient vanishing in high dimensions.

## 一句话回答 / One-paragraph answer

自注意力的核心是将输入矩阵 X 通过三个可学习权重矩阵 W_Q、W_K、W_V 分别映射为
Query（"我在找什么"）、Key（"我有什么标签"）、Value（"我的实际内容"），然后用
Q 与 K 的点积衡量相关度，经缩放和 Softmax 归一化后作为权重，对 V 做加权求和，
得到融合了全局上下文的新表征。

## 为什么重要 / Why it matters

Q/K/V 是 Transformer 注意力的最小计算单元。理解它才能解释：为什么模型能捕捉
远距离依赖（任意两个 Token 直接计算相关度）、为什么需要 Multi-Head（不同头
关注不同语义子空间）、为什么推理时需要 KV Cache（缓存已计算的 K/V 避免重复计算）。

## 模型 / 机制 / Model / mechanism

### 核心公式

```text
Attention(Q, K, V) = softmax( Q * K^T / sqrt(d_k) ) * V
```

### 计算四步

| 步骤 | 操作 | 直觉 |
| --- | --- | --- |
| 1. 点积打分 | Q * K^T | 衡量 Query 与每个 Key 的匹配程度 |
| 2. 缩放 | / sqrt(d_k) | 防止维度增大时点积值过大，导致 Softmax 饱和、梯度消失 |
| 3. Softmax | 归一化为概率分布 | 权重总和为 1，可解释为"注意力分配" |
| 4. 加权求和 | * V | 按权重提取各位置的语义内容，合成上下文表征 |

### Q/K/V 的图书馆类比

```text
Query  = 你走进图书馆时的"我想找什么"
Key    = 每本书封面上的"标签/索引"
Value  = 书的实际内容

注意力权重 = 你的需求与每本书标签的匹配度
输出       = 按匹配度加权混合所有书的内容
```

### Multi-Head 扩展

将 Q/K/V 拆分为 h 个头，每个头在独立的低维子空间中计算注意力，最后拼接：

```text
MultiHead(Q, K, V) = Concat(head_1, ..., head_h) * W_O
head_i = Attention(Q * W_Q_i, K * W_K_i, V * W_V_i)
```

不同头可以分别关注语法关系、语义关联、位置邻近性等不同模式。

## 证据与来源 / Evidence and sources

- Vaswani et al., "Attention Is All You Need", Section 3.2, NeurIPS 2017。
- 学习笔记整理，2026-07-23。

## 边界与待验证 / Boundaries and trade-offs

- 标准 Scaled Dot-Product Attention 的计算复杂度为 O(n^2 * d)，长序列场景下成为
  瓶颈；FlashAttention 等优化通过分块计算减少显存访问，但不改变数学语义。
- 本卡未展开 Multi-Head 中各头的分工实证研究。
- KV Cache 的工程实现细节属于推理优化范畴，见 [LF-005](LF-005-pretraining-vs-inference.md)。

## Connected assets

- 架构总览：[LF-001 Transformer 宏观架构](LF-001-transformer-architecture-overview.md)
- 采样策略（Softmax 的下游应用）：[LF-004 Temperature 与 Top-p](LF-004-sampling-temperature-topp.md)
- 推理优化：[LF-005 预训练 vs 推理](LF-005-pretraining-vs-inference.md)

## 产品化假设 / Productization hypothesis

Q/K/V 的四步计算图解可做成互动可视化（输入一句话，展示注意力热力图），适合作为
技术博客或教学 Demo。验证信号：读者能用自己的话解释"为什么要除以 sqrt(d_k)"。
