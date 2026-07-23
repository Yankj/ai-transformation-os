---
id: LF-001
type: concept
status: draft
created: 2026-07-23
updated: 2026-07-23
confidence: medium
links:
  - LF-002-qkv-scaled-dot-product-attention.md
  - LF-003-decoder-only-architecture.md
  - LF-005-pretraining-vs-inference.md
---

# LF-001：Transformer 的宏观架构由哪些核心组件构成，它们如何协作？

> **English summary:** The Transformer replaces recurrent sequential processing
> with three core mechanisms -- Word Embedding, Positional Encoding, and
> Self-Attention -- organized into an Encoder (bidirectional understanding) and
> a Decoder (causal autoregressive generation) connected by cross-attention.

## 一句话回答 / One-paragraph answer

Transformer 通过**完全基于注意力机制**的设计取代了 RNN 的串行处理方式，解决了
长距离依赖遗忘和无法大规模并行两大瓶颈。其核心由三个组件构成：词嵌入将离散 Token
映射到高维语义空间；位置编码注入序列顺序信息；自注意力让每个 Token 动态地与所有
其他 Token 计算相关性。架构上分为 Encoder（双向理解）和 Decoder（因果生成），
通过 Cross-Attention 桥接。

## 为什么重要 / Why it matters

Transformer 是当前所有主流大模型（GPT、Llama、DeepSeek 等）的底层架构。理解它的
组件分工是理解后续所有进阶话题（Q/K/V 机制、Decoder-Only 选型、KV Cache 优化等）
的前提。对于从软件工程转向 AI Native Builder 的工程师，这是"模型到底在做什么"
的第一性原理。

## 模型 / 机制 / Model / mechanism

### 三大法宝

1. **词嵌入（Word Embedding）：** 将离散 Token 映射至高维连续向量空间，使文本
   携带语义维度（性别、时态、实体类别等）。

2. **位置编码（Positional Encoding）：** Transformer 并行输入，缺乏天然序列感知。
   通过正弦/余弦函数或可学习向量注入位置信息：

   ```text
   PE(pos, 2i)   = sin(pos / 10000^(2i/d_model))
   PE(pos, 2i+1) = cos(pos / 10000^(2i/d_model))
   ```

3. **自注意力（Self-Attention）：** 每个 Token 动态地与序列中所有 Token 计算
   相关性权重，实现跨任意距离的信息融合。详见 [LF-002](LF-002-qkv-scaled-dot-product-attention.md)。

### Encoder-Decoder 结构

```text
【原始文本输入】
       |
       v
+--------------+
|   Encoder    | -- (Context Vectors) --+
+--------------+                        |
                                        v
                                 +--------------+
                                 |   Decoder    | --> 【目标文本输出】
                                 +--------------+
```

| 组件 | 注意力类型 | 职责 |
| --- | --- | --- |
| Encoder | 双向自注意力 | 深度语义理解，同时看到前后全部 Token |
| Decoder | 掩码自注意力 + 交叉注意力 | 因果生成，预测下一个 Token 时不窥探未来 |

**Encoder 关键结构：** Multi-Head Attention + Residual Connection + Layer Norm + FFN。

**Decoder 关键结构：** Masked Self-Attention（下三角 Causal Mask）+ Cross-Attention
（Q 来自 Decoder，K/V 来自 Encoder）+ FFN。

## 证据与来源 / Evidence and sources

- Vaswani et al., "Attention Is All You Need", NeurIPS 2017：Transformer 原始论文。
- 学习笔记整理，2026-07-23。

## 边界与待验证 / Boundaries and trade-offs

- 位置编码公式是原始论文的正弦方案；现代模型（如 Llama）多采用 RoPE（旋转位置编码），
  后续可单独建卡。
- 本卡描述的是标准 Encoder-Decoder 架构；Decoder-Only 的选型理由见
  [LF-003](LF-003-decoder-only-architecture.md)。
- Multi-Head Attention 的多头分工机制尚未深入展开。

## Connected assets

- 数学细节：[LF-002 Q/K/V 与 Scaled Dot-Product Attention](LF-002-qkv-scaled-dot-product-attention.md)
- 架构选型：[LF-003 Decoder-Only 架构](LF-003-decoder-only-architecture.md)
- 生命周期：[LF-005 预训练 vs 推理](LF-005-pretraining-vs-inference.md)

## 产品化假设 / Productization hypothesis

可作为面向工程师的"Transformer 30 分钟入门"教程或图解卡片的核心骨架。验证信号：
一个有后端经验但无 ML 背景的工程师能在读完后画出 Encoder-Decoder 数据流图。
