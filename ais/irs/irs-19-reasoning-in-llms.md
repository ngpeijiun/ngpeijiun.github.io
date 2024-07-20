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
    <span class="value">2025-08-11</span>
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

2.  Tuebingen Cause-Effect Pairs Benchmark

    -   Decide whether $A$ causes $B$ or $B$ causes $A$.
    -   ChatGPT achieves 92.5% accuracy, outperforming traditional algorithms (70-80%).
    -   Source: [ChatGPT causality pairs GitHub](https://github.com/amit-sharma/chatgpt-causality-pairs)

### Logical Reasoning

Logical reasoning tasks require consistent deduction from structured facts and rules.

1.  Big-Bench-Hard Dataset
    -   Includes both "Answer-Only" and "Chain-of-Thought" (CoT) prompting.
    -   CoT significantly improves accuracy by showing intermediate reasoning steps.
2.  Benchmarks and Tools
    -   FOLIO (Fact-based evaluation)<br>
        [Yale-LILY/FOLIO GitHub](https://github.com/Yale-LILY/FOLIO)
    -   PrOntoQA (Ontology-based inference)<br>
        [asaparov/prontoqa GitHub](https://github.com/asaparov/prontoqa)
    -   ProofWriter (Proof generation from facts and rules)<br>
        [AllenAI Proofwriter](https://proofwriter.apps.allenai.org/)

### Mathematical Reasoning

Mathematical reasoning evaluates a model's ability to solve multi-step arithmetic and word problems.

1.  GSM8K Benchmark

    A dataset of 8.5K high-quality grade school math problems with annotated solutions. The problems emphasise **step-by-step reasoning** and **unit-aware calculations**. GPT-4 ranks among the top performers on the leaderboard in both 8-shot and Chain-of-Thought (CoT) prompting variants.

    Sources:

    -   [OpenAI GSM8K GitHub](https://github.com/openai/grade-school-math)
    -   [Papers with Code - Arithmetic Reasoning Leaderboard](https://github.com/paperswithcode)

### Abstract Reasoning

Abstract reasoning involves pattern recognition, analogy, and symbolic manipulation. It if often not based on explicit logical deduction but instead relies on intuitive and implicit recognition of structure.

1.  BIG-Bench-F Database

    Example task: Rearranging elements in a list by switching pairs. LLMs often underperform due to difficulty in generalising symbolic transformations.

    Source: Gendron et al. (2023), *Large Language Models Are Not Strong Abstract Reasoners*

### Defeasible Reasoning

Defeasible reasoning is a type of non-monotonic logic where conclusions can be reversed or weakened with new evidence.

1.  Key Idea

    Reasoning is not fixed&mdash;new information can override prior inferences.

2.  Example

    -   Premise: "*The drinking glass fell*"
    -   Implication: "*The glass broke*"
    -   Update: "*The glass fell on a pillow*"
    -   Result: "*Weakens the original implication*"

3.  CURIOUS Model

    Uses an **inference graph** to model question scenarios and update conclusions accordingly.

    Source: A. Madaam et al., *Think about it! Improving defeasible reasoning by first modelling the question scenario*

## Long-Chain Reasoning

Long-chain reasoning refers to the ability of a language model to handle **multi-step, extended** reasoning tasks that involve chaining together multiple **logical inferences**, **decisions**, or **retrieval steps**. It is crucial for **planning**, **multi-hop QA**, **multi-turn dialogues**, and **complex decision-making**. Larger models (e.g., GPT-4) perform significantly better than smaller ones (e.g., GPT-3.5) due to improved attention span and memory.

### Chain-of-Thought (CoT) Prompting

Standard prompting often yields shallow responses with incorrect answers. Chat of Thought (CoT) prompting encourages the model to generate intermediate reasoning steps before giving the final answer. This enhances accuracy and interpretability.

Source: J. Wei et al., *[Chain-of-Thought Prompting Elicits Reasoning in Large Language Models](https://arxiv.org/pdf/2201.11903)*

### Fine-Tuned CoT (Reasoning Teacher)

Use a large language model to generate high-quality reasoning traces, then train a smaller student model.

Steps:

1.  Teacher generates full reasoning paths.
2.  Outputs that lead to correct answers are curated.
3.  Student is fine-tuned on these CoT traces.

Source: N. Ho et al., *Large Language Models Are Reasoning Teachers*, ACL 2023

### Tree of Thoughts (ToT) Prompting

Tree of Thoughts (ToT) prompting enhances reasoning by allowing the model to explore multiple branches of thought rather than following a single linear path. As it generates these branches, the model evaluates and prunes them to focus on the most promising directions, ultimately converging on optimal solutions. This approach is particularly effective for decision-making and planning tasks that benefit from breadth-first exploration.

Source: [Tree-of-Thought Prompting](https://github.com/dave1010/tree-of-thought-prompting)

## Case Studies

Think about how the ideas in multi-step reasoning by LLMs could be applied in your own field or projects.

| Application Domain | Reference |
|:---|:---|
| Dialogue | [arXiv:2305.11792](https://arxiv.org/pdf/2305.11792), [arXiv:2403.04656](https://arxiv.org/html/2403.04656v1) |
| Forensic Investigation | [arXiv:2402.19366](https://arxiv.org/pdf/2402.19366) |
| Medical Diagnosis | [Natura Article](https://www.nature.com/articles/s41746-024-01010-1), [LinkedIn](https://www.linkedin.com/pulse/tree-thoughts-advanced-chatgpt-skills-clinicians-sam/) |
| Price Negotiation | [arXiv:2402.05863](https://arxiv.org/pdf/2402.05863) |
| Supply Chain Management | [arXiv:2307.03875](https://arxiv.org/pdf/2307.03875) |
