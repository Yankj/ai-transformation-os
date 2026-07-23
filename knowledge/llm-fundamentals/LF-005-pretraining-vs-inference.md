---
id: LF-005
type: concept
status: draft
created: 2026-07-23
updated: 2026-07-23
confidence: medium
links:
  - LF-001-transformer-architecture-overview.md
  - LF-003-decoder-only-architecture.md
---

# LF-005：预训练与推理有何本质区别？参数量和 Token 如何量化模型？

> **English summary:** Pre-training is a highly parallel phase that reads
> massive data and updates billions of parameters to minimize cross-entropy
> loss; inference freezes parameters and generates tokens autoregressively,
> optimized via KV Cache, quantization, and FlashAttention. Parameters count
> learnable weights (1B params ~ 2GB in FP16); a Token is the minimal semantic
> unit produced by a tokenizer (~0.75 English words or ~0.6-1.0 Chinese chars).

## 一句话回答 / One-paragraph answer

大模型的生命周期分为预训练和推理两个阶段。预训练是高度并行的"学习"过程：一次
读入海量数据，同时计算所有位置的损失并更新数百亿参数。推理是参数冻结后的"应用"
过程：基于 Prompt 逐 Token 自回归生成，核心优化手段包括 KV Cache、量化和
FlashAttention。参数量衡量模型的可学习权重总数（决定显存和知识容量），Token 是
文本处理的最小语义单元（由分词器切分）。

## 为什么重要 / Why it matters

区分预训练和推理决定了工程投入的方向：预训练关注数据并行、张量并行、混合精度；
推理关注延迟、吞吐和成本。参数量和 Token 是评估模型规模、计算成本和 API 定价
的基本度量单位。对 AI Native Builder 而言，理解这两个维度是做出"用多大模型、
花多少钱、等多久"决策的基础。

## 模型 / 机制 / Model / mechanism

### 预训练 vs 推理对比

| 维度 | 预训练 (Pre-training) | 推理 (Inference) |
| --- | --- | --- |
| 计算模式 | 高度并行（All-at-once） | 自回归（Autoregressive，逐 Token） |
| 参数状态 | 持续更新 | 冻结 |
| 核心目标 | 最小化交叉熵损失 | 低延迟、高吞吐生成 |
| 工程优化 | 数据并行、张量并行、混合精度 | KV Cache、量化、FlashAttention |
| 数据规模 | 数 TB 文本语料 | 单次 Prompt + 上下文 |

### KV Cache 原理简述

推理时，已生成 Token 的 K/V 不会改变。KV Cache 将这些值缓存起来，每生成一个新
Token 只需计算新位置的 Q 与缓存中所有 K 的注意力，避免 O(n^2) 重复计算。这是
Decoder-Only 架构推理加速的核心机制。

### 参数量（Parameters）

- **定义：** 模型所有层中可学习权重（Weights）和偏置（Biases）的总数。
- **显存估算：** 1B 参数以 FP16 存储约需 2GB 显存；以 FP32 约需 4GB。
- **意义：** 决定模型的知识容量上限和计算复杂度。

### Token

- **定义：** 大模型处理文本的最小语义单元，由分词器（BPE、WordPiece 等）切分。
- **换算参考：**
  - 英文：1 Token ~ 0.75 单词
  - 中文：1 Token ~ 0.6 ~ 1.0 个汉字
- **意义：** API 定价、上下文窗口、生成速度均以 Token 为单位。

## 证据与来源 / Evidence and sources

- Vaswani et al., "Attention Is All You Need", NeurIPS 2017。
- Sennrich et al., "Neural Machine Translation of Rare Words with Subword Units" (BPE), ACL 2016。
- 学习笔记整理，2026-07-23。

## 边界与待验证 / Boundaries and trade-offs

- 参数量不完全等于模型能力：数据质量、训练策略、架构细节（如 MoE）同样关键。
- Token 换算因分词器和语言而异，上述数值为粗略参考。
- KV Cache 的显存占用随序列长度线性增长，长上下文场景下成为瓶颈（引出 GQA、MQA
  等优化，可后续建卡）。
- 本卡未覆盖 Fine-tuning / RLHF 等预训练之后的对齐阶段。

## Connected assets

- 架构基础：[LF-001 Transformer 宏观架构](LF-001-transformer-architecture-overview.md)
- Decoder-Only 与 KV Cache 的关系：[LF-003 Decoder-Only 架构](LF-003-decoder-only-architecture.md)
- Agent Runtime 视角（推理阶段的工程治理）：[AR-001](../agent-runtime/AR-001-agent-loop-and-runtime-boundaries.md)

## 产品化假设 / Productization hypothesis

参数量/Token/显存的速算表可做成开发者参考卡片或 CLI 小工具（输入模型参数量和
精度，输出显存需求估算）。验证信号：工程师能在选型时快速估算"这个模型能不能
跑在我的 GPU 上"。
