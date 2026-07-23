---
id: LF-003
type: concept
status: draft
created: 2026-07-23
updated: 2026-07-23
confidence: medium
links:
  - LF-001-transformer-architecture-overview.md
  - LF-005-pretraining-vs-inference.md
---

# LF-003：为什么现代大模型转向 Decoder-Only 架构？

> **English summary:** Decoder-Only (causal LM) architecture has become the
> dominant choice for LLMs (GPT, Llama, DeepSeek) because it unifies
> understanding and generation as next-token prediction, maximizes training
> signal per token, and simplifies engineering (KV Cache, tensor parallelism).

## 一句话回答 / One-paragraph answer

当前主流大模型放弃了 Encoder-Decoder 结构，转向 Decoder-Only（纯因果语言模型）。
核心原因有三：理解和生成在数学本质上都是"根据上文预测下一个词"，统一范式消除了
架构分裂；因果语言建模让每个 Token 位置都成为训练目标，梯度利用率极高；单一
结构极大简化了 KV Cache、张量并行等工程优化。

## 为什么重要 / Why it matters

架构选型决定了模型的训练效率、推理优化路径和能力边界。理解 Decoder-Only 的优势
有助于：理解为什么 GPT/Llama/DeepSeek 都是同一架构范式；理解 KV Cache 为什么
是推理加速的核心；在评估新模型或设计 Agent Runtime 时做出正确的工程假设。

## 模型 / 机制 / Model / mechanism

### 架构对比

```text
  Encoder-Decoder                 Decoder-Only (Causal LM)
+----------+   +----------+     +---------------------------+
| Encoder  |-->| Decoder  |     |       Decoder-Only        |
|(双向注意力)|   |(因果注意力)|     | (统一因果自注意力架构)     |
+----------+   +----------+     +---------------------------+
```

### 三大核心优势

| 优势 | 解释 |
| --- | --- |
| 统一表达范式 | 理解（Prompt）与生成（Completion）都是"根据上文预测下一个词"，无需区分编码/解码阶段 |
| 预训练效率高 | 因果 LM 下序列中每个 Token 都是训练目标（n 个 Token 产生 n 个监督信号），梯度利用率远高于 Encoder-Decoder |
| 工程极简 | 单一结构利于 KV Cache 实现、分布式张量并行、流水线并行；无需维护 Encoder 和 Decoder 两套参数和通信 |

### 因果掩码（Causal Mask）

Decoder-Only 通过下三角掩码矩阵确保位置 t 只能看到 1..t 的 Token：

```text
Token:    [A] [B] [C] [D]
[A]        1   0   0   0
[B]        1   1   0   0
[C]        1   1   1   0
[D]        1   1   1   1
```

这使得一次前向传播就能同时计算所有位置的预测损失（训练时并行），而推理时逐 Token
自回归生成。

### 典型代表

GPT 系列、Llama 系列、DeepSeek、Qwen、Mistral 等当前主流开源/闭源大模型均采用
Decoder-Only 架构。

## 证据与来源 / Evidence and sources

- Vaswani et al., "Attention Is All You Need", NeurIPS 2017：原始 Encoder-Decoder 架构。
- Radford et al., "Language Models are Unsupervised Multitask Learners" (GPT-2), 2019：Decoder-Only 路线的奠基。
- 学习笔记整理，2026-07-23。

## 边界与待验证 / Boundaries and trade-offs

- Decoder-Only 并非在所有任务上绝对优于 Encoder-Decoder：T5 等 Encoder-Decoder
  模型在特定 NLU 基准上仍有竞争力。
- 双向理解能力（如 BERT 式完形填空）在纯因果架构中需要特殊 Prompt 设计来模拟。
- 本卡不涉及 MoE（Mixture of Experts）等在此基础上进一步的结构创新。

## Connected assets

- 架构基础：[LF-001 Transformer 宏观架构](LF-001-transformer-architecture-overview.md)
- 推理优化（KV Cache）：[LF-005 预训练 vs 推理](LF-005-pretraining-vs-inference.md)
- Agent Runtime 视角：[AR-001 Agent loop and runtime boundaries](../agent-runtime/AR-001-agent-loop-and-runtime-boundaries.md)

## 产品化假设 / Productization hypothesis

Decoder-Only vs Encoder-Decoder 的选型对比可整理为技术决策 Checklist，帮助团队
在自研模型或选型时快速判断。验证信号：工程师能解释"为什么 KV Cache 只对
Decoder-Only 自然适配"。
