<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# Machine Learning Fundamentals

Apr 9, 2025

## Introduction to Machine Learning

1.  Artificial Intelligence

    Artificial Intelligence (AI) refers to systems&mdash;whether software, hardware, or robots&mdash;that perform tasks requiring human-like intelligence, such as learning, problem-solving, and decision-making. A key subfield of AI is machine learning, which focuses on algorithms that recognise patterns and support decision-making. Today, machine learning is the most prominent and widely used area of AI.

2.  Machine Learning

    Machine learning lets computers learn from data instead of being explicitly programmed. By recognising patterns in data, models can make decisions and improve over time. While some algorithms add complexity, the core idea stays the same: **machine learning is fundamentally about learning from data**.

3.  Machine Learning Approaches

    -   Supervised Learning
        -   Regression
        -   Classification
    -   Self-Supervised Learning
        -   Generative Models
            -   Autoencoders
            -   GANs (Generative Adversarial Networks)
    -   Unsupervised Learning
        -   Correlation Analysis
        -   Market Basket Analysis
        -   Clustering
        -   Anomaly Detection
        -   Dimensionality Reduction
            -   PCA (Principal Component Analysis)
            -   t-SNE (t-Distributed Stochastic Neighbour Embedding)
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

6.  Reinforcement Learning (RL) is a type of machine learning where an **agent** learns to make decisions by interacting with an **environment**. The agent observes the environment's current **states**, takes **actions**, and receives **feedback** in the form of **rewards** or **penalties**. Over time, it learns a policy&mdash;a strategy for choosing a sequence of actions&mdash;that maximises cumulative rewards.

    Key components:

    -   **Agent**: The decision-maker (e.g., a robot, game bot, or software).
    -   **Environment**: The world the agent interacts with (e.g., a maze, game, or room).
    -   **Action**: A move the agent can make.
    -   **State**: The current condition of the environment.
    -   **Reward/Penalty**: Feedback based on the action taken.
    -   **Policy**: The agent's strategy, a sequence of actions, often learned and updated over time.

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
    | Focuses on maximising long-term cumulative rewards | Focuses on minimising the error function for immediate prediction accuracy |

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

4.  Strengths

    -   **Ability to Learn Complex Patterns**<br>
        ANNs excel at modelling non-linear relationships between inputs and outputs, making them powerful for tasks like non-linear classification and regression.
    -   **High Adaptability**<br>
        They can adjust to new data through retraining or even adapt to similar inputs without explicit retraining.
    -   **Generalisation**<br>
        Once trained, ANNs can accurately handle unseen data.
    -   **Parallel Processing**<br>
        Neural networks perform many computations simultaneously, boosting efficiency.
    -   **Wide Applicability**<br>
        Used successfully in fields like image and speech recognition, NLP, and financial forecasting.
    -   **Fault Tolerance**<br>
        Minor noise or errors in input data do not significantly degrade performance.

5.  Limitations

    -   **High Computational Requirements**<br>
        ANNs are resource-intensive and need powerful hardware.
    -   **Black Box Nature**<br>
        Their internal workings are hard to interpret, making explainability a challenge.
    -   **Overfitting Risk**<br>
        Due to many parameters, they can easily overfit (memorise instead of generalise) without careful regularisation.
    -   **Data Hungry**<br>
        Larger models require large, high-quality datasets to perform well.
    -   **Complex Tuning**<br>
        Performance heavily depends on properly setting numerous hyperparameters and achieving convergence during training.
    -   **Training Challenges**<br>
        Poor architecture or insufficient data can lead to failed or suboptimal training.

## References

1.  [Machine Learning Glossary](https://developers.google.com/machine-learning/glossary)
2.  [Reinforcement Learning](https://www.oracle.com/in/artificial-intelligence/machine-learning/reinforcement-learning/)
3.  [Unsupervised Learning](https://www.datacamp.com/blog/introduction-to-unsupervised-learning)
4.  [K-Means](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html)
5.  [Keras](https://www.tensorflow.org/api_docs/python/tf/keras)
6.  [DataFrame](https://pandas.pydata.org/docs/reference/frame.html)
