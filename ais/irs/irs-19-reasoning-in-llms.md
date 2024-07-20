<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Reasoning in Large Language Models

<div class="badge">
    <span class="key">Type</span>
    <span class="value">Course</span>
</div>
<div class="badge">
    <span class="key">Instructor</span>
    <span class="value">Gary Leung</span>
</div>
<div class="badge">
    <span class="key">Institution</span>
    <span class="value">NUS-ISS</span>
</div>
<div class="badge">
    <span class="key">Note Updated</span>
    <span class="value">2025-07-27</span>
</div>

## Learning Outcomes

By the end of this course, you will be able to:

1.  Understand what kinds of reasoning tasks large language model (LLMs) can perform.
2.  Gain a high-level understanding of how to build intelligent systems that leverage the reasoning capabilities of LLMs.

## What is Reasoning?

1.  Reasoning is the ability for **complex problem-solving**.
3.  It serves as a fundamental methodology in Artificial General Intelligence (AGI).

## History of LLMs

LLMs have evolved significantly over the past few decades, beginning with rule-based systems and progressing towards foundation models with reasoning capabilities.

| Year | Development Highlights |
|:---|:---|
| 1966 | ELIZA |
| 1980s-1990s | Statistical Language Models |
| 2000s | Neural Probabilistic Language Models |
| 2013 | Word2Vec (distributed representations of words) |
| 2017 | Transformers (attention mechanisms revolutionised the world) |
| 2018 | BERT |
| 2019 | GPT-2, T5 |
| 2020 | GPT-3 |
| Late 2022 | ChatGPT, GPT-3.5 (conversational LLMs) |
| Mar 2023 | GPT-4, Claude 3 |
| Apr 2024 | LLaMA 3 |
| May 2024 | GPT-4o (fully multimodal)
| Jun 2024 | Claude 3.5 |
| Mar 2025 | Gemini 2.5 (CoT reasoning) |
| Apr 2025 | LLaMA 4 |
| May 2025 | Claude 4 |

LLMs can now mimic the structure of logical reasoning, even without explicit symbolic rules.

## Reasoning Techniques

| Technique | Description |
|:---|:---|
| Pre-Training | Foundation training using **self-supervised learning** on large text corpora. Builds broad language capabilities. |
| Alignment Training | Aligns output with human values and instructions using techniques like **instruction tuning** and **RLHF**. |
| Fine-Tuning | Specialises the model for a specific domain or task (e.g., legal, medical) using **supervised learning**. |
| In-Context Learning | Solves tasks using information within the **prompt**&mdash;supports **zero-shot**, **few-shot**, and **chain-of-thought** reasoning without updating weights. |
| Mixture of Experts (MoE) | Dynamically **routes** inputs to a subset of expert modules, improving efficiency and scalability. |
| Autonomous Agent | Equips the model to **reason**, **plan**, and **act** independently using memory, tool use, and reflection loops. |

Source: Jiang et al. (2023), *A Survey of Reasoning with Foundation Models*

## Reasoning Tasks

LLMs can perform a wide range of reasoning tasks across domains. These are often supported by prompt engineering, fine-tuning, or tool integration.

| Category | Examples |
|:---|:---|
| Mathematical Reasoning | Arithmetic, geometry, theorem proving, scientific reasoning |
| Logical Reasoning | Propositional and predicate logic |
| Causal Reasoning | Decision making, explanation, policy optimisation, counterfactuals |
| Visual Reasoning | 2D/3D visual reasoning |
| Multimodal Reasoning | Reasoning across text, image, audio |
| Embodied Reasoning | Introspective, multi-agent, and autonomous reasoning |
| Commonsense Reasoning | Physical/spatial commonsense, commonsense QA |
| Other Tasks | Theory of Mind, abstract/medical reasoning, long-chain, bioinformatics |

### Commonsense Reasoning

Commonsense reasoning refers to the model's ability to apply everyday knowledge and intuitive logic to infer plausible outcomes or validate consistency.

1.  HellaWag Benchmark

    A multiple-choice test designed to evaluate commonsense understanding in narrative completion tasks. GPT-4 achieves 95.3% accuracy on HellaSwag (source: GPT-4 Technical Report).

2.  SUMMEDIT Dataset

    Evaluates consistency of text edits in summaries. The task involves identifying whether edits are factually consistent or not.

    References:

    -   [Salesforce factualNLG GitHub](https://github.com/salesforce/factualNLG)
    -   [Hugging Face SUMMEDIT Dataset](https://huggingface.co/datasets/Salesforce/summedits)

### Causal Reasoning

Causal reasoning involves understanding and manipulating cause-effect relationships, not just correlations.

1.  **Causal Graphs**

    For main causal reasoning tasks:

    -   **Causal Discovery**: Identify cause-effect structure from data.<br>
        Example: Does `education → wage`?
    -   **Effect Inference**: Estimate effects of interventions.<br>
        Example: Will more `study time` improve `exam score`?
    -   **Attribution**: Identify main contributors to an outcome.<br>
        Example: What led to the `sales drop`&mdash;`advertising` or `price`?
    -   **Judgment**: Decision-making based on causal knowledge.<br>
        Example: Will `smoking` cause `lung cancar`?

2.  **Tuebingen Cause-Effect Pairs Benchmark**

    -   Decide whether $A$ causes $B$ or $B$ causes $A$.
    -   ChatGPT achieves 92.5% accuracy, outperforming traditional algorithms (70-80%).
    -   Source: [ChatGPT causality pairs GitHub](https://github.com/amit-sharma/chatgpt-causality-pairs)
