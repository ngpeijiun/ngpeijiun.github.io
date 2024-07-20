<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Introduction to Cognitive Systems

<div class="badge">
    <span class="key">Type</span>
    <span class="value">Course</span>
</div>
<div class="badge">
    <span class="key">Instructor</span>
    <span class="value">Fan Zhenzhen</span>
</div>
<div class="badge">
    <span class="key">Institution</span>
    <span class="value">NUS-ISS</span>
</div>
<div class="badge">
    <span class="key">Note Updated</span>
    <span class="value">2025-07-19</span>
</div>

## Course Learning Outcomes

1.  Identify business scenarios that require or benefit from cognitive systems.
2.  Understand key concepts and techniques for simulating human interaction and reasoning.
3.  Design applications using standard architectures based on business requirements.
4.  Develop, integrate, and evaluate such systems using existing tools and libraries.

## Cognitive Systems

### Human Cognition

Core mental processes that enable intelligent behaviours:

1.  **Perception**<br>
    Interprets sensory input to understand the environment.
2.  **Attention**<br>
    Focuses on relevant information while filtering distractions.
3.  **Memory**<br>
    Holds and processes information temporarily via short-term or working memory, and retains knowledge over time via long-term memory for later recall.
4.  **Thought**<br>
    Performs reasoning, problem-solving, and decision-making.
5.  **Language**<br>
    Understanding and expressing through structured communications.
6.  **Learning**<br>
    Acquiring or updating knowledge, skills, and behaviours.

### What are Cognitive Systems?

Cognitive systems emulate human cognitive functions&mdash;**perception**, **attention**, **memory**, **thought**, **language**, and **learning**&mdash;using computational techniques to interact, reason, and adapt intelligently:

1.  **Perception**<br>
    Interprets sensory data using **computer vision** (CNNs) and **speech recognition** (deep ASR).
2.  **Attention**<br>
    Focuses on relevant information with **attention mechanisms** (GPT, BERT, and ViT), **prompting** (grounding responses in quotes), and **retrieval-augmented generation (RAG)**.
3.  **Memory**<br>
    Stores and retrieves information from long-term memory&mdash;such as **neural weights**, **knowledge graphs**, and **databases**&mdash;while holding and processing information in working memory, such as in **Chain-of-Thought (CoT) prompting**.
4.  **Thought**<br>
    Applies **symbolic reasoning**, **Bayesian inference**, **inductive learning**, and **planning and optimisation** to support problem-solving and decision-making.
5.  **Language**<br>
    Performs **natural language understanding (NLU)** for understanding input, **natural language generation (NLG)** for generating output, and **structured data** (JSON, XML) for system communication&mdash;now all unified through **large language models (LLMs)**.
6.  **Learning**<br>
    Learns and adapts through techniques such as **supervised/unsupervised learning**, **reinforcement learning**, **fine-tuning**, **transfer learning** and **online learning**, as well as **symbolic rule updates** in knowledge graphs or expert systems.

## Spectrums of AI

1.  **Task Objective** (x-axis)<br>
    From algorithmic **optimality** (precise, efficient solutions) to human-like **creativity** (original, expressive responses).
2.  **Cognitive Orientation** (y-axis)<br>
    From **action-oriented** tasks (direct exection, control) to **thought-oriented** tasks (reasoning, planning, brainstorming).

| | Optimality (X-) | Creativity (X+) |
|:---:|:---:|:---:|
| **Thought-Oriented (Y+)** | Analytical Reasoners<br>Examples: **Expert Systems**, **Bayesian Networks**, **Planners and Optimisers**. | Creative Thinkers<br>Examples: **ChatGPT**, **Claude**, **DALL&middot;E**. |
| **Action-Oriented (Y-)** | Precise Executors<br>Examples: **Robotic Process Automation (RPA)**, **Factory Robots**, **Robot Vacuums**. | Adaptive Performers<br>Examples: **AI Agents**, **Autonomous Drones**, **Robot Performers** |

## History of AI

1.  1950s-1960s: The Early Days<br>
    This was the era of symbolic AI&mdash;early programs like Logic Theorist and General Problem Solver showed the first signs of machines "thinking".
2.  1970s: The First AI Winter<br>
    Hype outpaced progress. When AI could not deliver on its big promises, funding dried up and enthusiasm cooled off.
3.  1980s: Rise of Expert Systems<br>
    AI bounced back with rule-based systems that mimicked human experts. These were used in medicine, finance, and more.
4.  1990s: The Second AI Winter<br>
    Expert systems hit their limits. Once again, interest and investment dipped.
5.  2000s: Machine Learning Era Begins<br>
    With more data and better computing, focus shifted to statistical methods and machine learning. Things started heating up again.
6.  2010s-2020s: Deep Learning & AI Explosion<br>
    Breakthroughs in deep learning, especially in NLP, vision, and speech, pushed AI into the spotlight. Transformers (introduced in the 2017 *Attention is All You Need* paper) changed everything. Today, we have foundation models, multimodal AI, and real-world applications everywhere.

## AI Applications

1.  Processes: Workflow Automation<br>
    Streamlines operations by automating tasks, interpreting data, and supporting decisions to improve speed and consistency.
2.  Products: Intelligent Systems<br>
    Embeds intelligence into devices and software to enhance user experience.
3.  Insights: Data Science<br>
    Derives patterns and predictions from data to inform decisions.
