<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# Machine Learning Fundamentals

Apr 9, 2025

## Introduction to Machine Learning

1.  Artificial Intelligence

    Artificial Intelligence (AI) refers to systems&mdash;whether software, hardware, or robots&mdash;that perform tasks requiring human-like intelligence, such as decision-making, problem-solving, and learning. A key subfield of AI is machine learning, which focuses on algorithms that recognise patterns and support decision-making. Today, machine learning is the most prominent and widely used area of AI.

2.  Machine Learning

    Machine learning lets computers learn from data instead of being explicitly programmed. By recognising patterns in data, models can make decisions and improve over time. While some algorithms add complexity, the core idea stays the same: **machine learning is fundamentally about learning from data**.

3.  Machine Learning Approaches

    -   Supervised Learning
        -   Regression
        -   Classification
    -   Unsupervised Learning
        -   Correlation Analysis
        -   Market Basket Analysis
        -   Clustering
        -   Anomaly Detection
        -   Dimensionality Reduction
            -   PCA (Principal Component Analysis)
            -   t-SNE (t-Distributed Stochastic Neighbour Embedding)
        -   Generative Models
            -   Autoencoders
            -   GANs (Generative Adversarial Networks)
    -   Reinforcement Learning

4.  Supervised Learning

    Supervised learning is a type of machine learning where a model is trained on labelled data&mdash;each input (features) is paired with the correct output (label). By learning from these examples, the model can accurately map inputs to outputs and make predictions on new, unseen data.

    -   **Features** are the input variables or attributes used to make predictions.
    -   **Labels** are the target outputs the model aims to predict.
    -   **Training** involves adjusting the model's parameters to minimise the error between predicted and actual labels.

    This enables the model to generalise well to new data.

5.  Unsupervised Learning

    Unsupervised learning is a branch of machine learning where algorithms analyse data without predefined labels, using only input features. The goal is to discover meaningful patterns, structures, or anomalies within the data.

    Common techniques include clustering, hierarchical clustering, dimensionality reduction, anomaly detection, and correlation analysis. Inputs can be structured (e.g., customer demographics) or unstructured (e.g., image pixels or audio samples).

    The output is often discovered patterns like customer segments or image regions. Since there is no ground truth for comparison, evaluation is typically qualitative, though domain-specific metrics can sometimes be used. Unsupervised learning is often used in exploratory data analysis, identify structures, or preprocess data for other tasks.

6.  Reinforcement Learning (RL) is a type of machine learning where an **agent** learns to make decisions by interacting with an **environment**. The agent takes **actions**, observes the resulting **state**, and receives **feedback** in the form of **rewards** or **penalties**. Over time, it learns a policy&mdash;a strategy for choosing actions&mdash;that maximises cumulative rewards.

    Key components:

    -   **Agent**: The decision-maker (e.g., a robot, game bot, or software).
    -   **Environment**: The world the agent interacts with (e.g., a maze, game, or room).
    -   **Action**: A move the agent can make.
    -   **State**: The current condition of the environment.
    -   **Reward/Penalty**: Feedback based on the action taken.
    -   **Policy**: The agent's strategy, often learned and updated over time.

    The RL process works as follows:

    1.  The agent observes the environment's current state.
    2.  It chooses an action based on its policy.
    3.  The environment responds, leading to a new state and a reward.
    4.  The agent updates its policy to improve future performance.

    The goal is to optimise behaviour by learning which actions yield the best long-term outcomes.

7.  Differences Between Supervised Learning and Reinforcement Learning

    | Reinforcement Learning | Supervised Learning |
    |:---|:---|
    | No labelled data; learns from reward signals | Requires labelled data (input-output pairs) |
    | Agent interacts with an environment to learn | Learns from static dataset without interaction |
    | Learns through trial-and-error, delayed rewards | Learns from direct feedback (correct answers) |
    | Optimises for long-term cumulative reward | Optimises for immediate prediction accuracy |

## Introduction to Artificial Neural Networks

1.  Artificial Neural Networks are parellel processing networks that mimic the human brain in order to perform tasks that allow modern AI models to function effectively.

2.  Definition

    Neural Networks (NNs) are networks of neurons, as found in real (i.e. biological) brains. Artificial Neurons are crude approximations of the neurons found in brains. They may be physical devices, or purely mathematical/software constructs. Artificial Neural Networks (ANNs) are networks of Artificial Neurons, and hence constitute crude approximations to parts of real brains.

3.  Properties

    -   They are extremely powerful computational devices (Turing Equivalent Univeral Computers).
    -   Massive parallelism makes them very efficient.
    -   They can learn and generalise from training data&mdash;so there is no need for a subtle design.
    -   They are particularly fault-tolerant, and noise tolerant.
    -   In principle, they can do anything a symbolic/logic system can do, and more.
    -   They are very good at dealing with semi-structured and unstructured data (text, images, ...)
