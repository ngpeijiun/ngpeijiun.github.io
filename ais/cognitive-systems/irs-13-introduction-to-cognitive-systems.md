<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Introduction to Cognitive Systems

*Apr 23, 2025*

1.  Learning Outcomes

    -   Identify business scenarios that require or benefit from cognitive systems.
    -   Understand key concepts and techniques for simulating human reasoning and interaction.
    -   Design applications using standard architectures based on business requirements.
    -   Develop, integrate, and evaluate such systems using existing tools and libraries.

2.  Human Cognition

    Core mental processes that enable intelligent behaviour:

    -   Perception: Interpreting sensory input to understand the environment.
    -   Attention: Focusing on relevant information while filtering distractions.
    -   Memory: Temporarily holds and processes information through short-term or working memory, and stores knowledge over time via long-term memory for later recall.
    -   Thought: Reasoning, problem-solving, and decision-making.
    -   Language: Understanding and expressing through structured communications.
    -   Learning: Acquiring or updating knowledge, skills, and behaviours.

3.  What are Cognitive Systems?

    Cognitive systems emulate human cognitive functions&mdash;perception, attention, memory, thought, language, and learning&mdash;using computational techniques to interact, reason, and adapt intelligently:

    -   Perception<br>
        Interprets sensory data using *computer vision* (CNNs), *speech recognition* (deep ASR), and *sensor fusion* (Kalman filters).
    -   Attention<br>
        Focuses on relevant information with *attention mechanisms* (transformer), *prompting* (grounding responses in quotes), and *saliency models* (vision systems).
    -   Memory<br>
        Stores and retrieves information from long-term memory&mdash;such as *neural weights*, *knowledge graphs*, and *databases*&mdash;while holding and processing information in working memory, as seen in *Chain-of-Thought (CoT) prompting*.
    -   Thought<br>
        Applies *symbolic reasoning*, *Bayesian inference*, *inductive learning*, and *planning and optimisation* to support problem-solving and decision-making.
    -   Language<br>
        Performs *NLU* for understanding input, *NLG* for generating output, and *semantic data structures* (JSON, XML) for system communication&mdash;now all unified through large language models (LLMs).
    -   Learning<br>
        Learns and adapts through techniques such as *supervised/unsupervised learning*, *reinforcement learning*, *fine-tuning*, *transfer learning* and *online learning*, as well as *symbolic rule updates* in knowledge graphs or expert systems.

4.  Spectrums of AI

    -   Task Objective (x-axis)<br>
        From algorithmic **optimality** (precise, efficient solutions) to human-like **creativity** (original, expressive responses).
    -   Cognitive Orientation (y-axis)<br>
        From **action-oriented** tasks (direct exection, control) to **thought-oriented** tasks (reasoning, planning, brainstorming).

    | | Optimality (X-) | Creativity (X+) |
    |:---:|:---:|:---:|
    | **Thought-Oriented (Y+)** | Analytical Reasoners<br>Examples: *Expert Systems*, *Bayesian Networks*, *Planners and Optimisers*. | Creative Thinkers<br>Examples: *ChatGPT*, *DALL-E*, *Github Copilot*. |
    | **Action-Oriented (Y-)** | Precise Executors<br>Examples: *Robotic Process Automation (RPA)*, *Factory Robots*, *Robot Vacuums*. | Adaptive Performers<br>Examples: *AI Agents*, *Autonomous Drones*, *Robot Performers* |

5.  History of AI

    -   1950s-1960s: The Early Days<br>
        First symbolic AI programs like Logic Theorist and General Problem Solver.
        This was the era of symbolic AI&mdash;early programs like Logic Theorist and General Problem Solver showed the first signs of machines "thinking".
    -   1970s: The First AI Winter<br>
        Hype outpaced progress. When AI could not deliver on its big promises, funding dried up and enthusiasm cooled off.
    -   1980s: Rise of Expert Systems<br>
        AI bounced back with rule-based systems that mimicked human experts. These were used in medicine, finance, and more.
    -   1990s: The Second AI Winter<br>
        Expert systems hit their limits. Once again, interest and investment dipped.
    -   2000s: Machine Learning Era Begins<br>
        With more data and better computing, focus shifted to statistical methods and machine learning. Things started heating up again.
    -   2010s-2020s: Deep Learning & AI Explosion<br>
        Breakthroughs in deep learning, especially in NLP, vision, and speech, pushed AI into the spotlight. Transformers (introduced in the 2017 *Attention is All You Need* paper) changed everything. Today, we have foundation models, multimodal AI, and real-world applications everywhere.

6.  AI Applications

    -   Processes: Workflow Automation<br>
        Streamlining operations by automating tasks, interpreting data, and supporting decisions to improve speed and consistency.
    -   Products: Intelligent Systems<br>
        Embedding intelligence into software and devices to enhance user experience.
    -   Insights: Data Science<br>
        Deriving patterns and predictions from data to inform decisions.
