# LLM Fundamentals knowledge map

**MVP ID:** `LF`

## Target questions

1. Transformer 的核心架构组件是什么，它们如何协作？
2. Self-Attention 的数学机制（Q/K/V）如何工作？
3. 为什么主流大模型选择 Decoder-Only 架构？
4. 模型生成文本时，采样参数如何影响输出？
5. 预训练与推理阶段有何本质区别？参数量和 Token 如何量化模型？

## Cards

| ID | Card | Status |
| --- | --- | --- |
| [LF-001](LF-001-transformer-architecture-overview.md) | Transformer 宏观架构：三大法宝与 Encoder-Decoder | Draft |
| [LF-002](LF-002-qkv-scaled-dot-product-attention.md) | Q/K/V 与 Scaled Dot-Product Attention | Draft |
| [LF-003](LF-003-decoder-only-architecture.md) | 为什么现代大模型转向 Decoder-Only | Draft |
| [LF-004](LF-004-sampling-temperature-topp.md) | Softmax 采样策略：Temperature 与 Top-p | Draft |
| [LF-005](LF-005-pretraining-vs-inference.md) | 预训练 vs 推理：生命周期与量化语言 | Draft |

Create cards with the [knowledge-card template](../../templates/knowledge-card.md).
