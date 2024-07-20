<h1 style="color: #ccc">Machine Reasoning</h1>

# Model Representation

*Feb 9, 2025*

## Understanding Models in AI

1.  What is a Model?

    A **model** is a structured representation of knowledge used to make predictions or generate outcomes based on given inputs. It functions as a mapping from **input(s)** to **output(s)**.

2.  Conceptual Model

    A **conceptual model** provides an abstract description of a system, typically for human understanding. It helps in designing intelligent systems by illustrating how inputs are processed to produce outputs.

3.  Physical Model

    A **physical model** is the actual implementation of a model in a system. Examples include:

    -   **Neural networks** stored in a machine.
    -   **Mathematical functions** with predefined parameters.
    -   **Inference engines** with a knowledge base (rules, cases, etc).

    A simple physical model can be as basic as a text file containing formulas, parameters, or structured rules.

4.  Machine Learning Model

    A **machine learning model** is a program that learns patterns from data to make predictions. Examples:

    -   Natural language processing (NLP): Understanding intent in text.
    -   Image recognition: Identifying objects like cars or dogs.

    Models learn through training, where an algorithm is **optimised** using large datasets. The final model often takes the form of a **computer program with structured data representations**.

5.  Categories of ML Models

    Models are categorised based on:

    -   **Function/Application**:
        -   **Regression**: Predicting numerical values.
        -   **Classification**: Assigning labels to data.
        -   **Clustering**: Grouping similar data points.
    -   **Learning Approach**:
        -   **Neural Networks**
        -   **Decision Trees**
        -   **Support Vector Machines (SVM)** (Structurally similar to NN but with a distinct inference mechanism)

    A **single model** can be applied to **different applications**, and one **application problem** can be solved using **multiple models**.

6.  KBS vs. ML Models

    -   **Traditional Knowledge-Based Systems (KBS)**
        -   Separate **knowledge base (KB)** and **inference engine**.
        -   The model consists of both KB(s) and the inference engine, solving problems within a domain.
    -   **Machine Learning Models as Unified Systems**
        -   ML models integrate both knowledge base and inference engine, enabling end-to-end **learning and inference**.

## Neighbour-Based Inference

1.  Neighbour-based methods, such as k-nearest neighbours (kNN), are considered non-generalising machine learning methods because they do not create a generalised model from the training data. Instead, they store all the training data and make predictions based on the proximity of data points in the feature space. These methods are also known as lazy learning algorithms since they defer computation until a query is made.

    Unlike most other machine learning models, which rely on inductive generalisation to infer a generalised model from specific examples (i.e., learning patterns or relationships in the training data to generalise to unseen cases), neighbour-based methods bypass this process entirely. Rather than reasoning from individual cases to broader generalisations, they focus on direct comparisons within the dataset. As a result, the model representation is simply the training data itself.

## Bayesian Inference

### Bayes' Theorem

1.  Bayes' theorem is a mathematical formula used to calculate the posterior probability of a hypothesis based on observed evidence. The formula is:

    $$
    P( A\mid B) =\frac{P( B\mid A) P( A)}{P( B)}
    $$

    Where:

    -   $P(A\mid B)$: Posterior Probability<br>
        The probability of $A$ (the hypothesis or event) being true given the evidence $B$. It is the result calculated using Bayes' theorem.
    -   $P(B\mid A)$: Likelihood<br>
        The probability of observing the evidence $B$, assuming that $A$ (the hypothesis) is true.
    -   $P(A)$: Prior Probability<br>
        The probability of the hypothesis $A$ before considering any evidence. This reflects your initial belief about $A$.
    -   $P(A,B)=P(B\mid A)P(A)$: Joint Probability<br>
        The probability of observing both the event $A$ (antecedent) and evidence $B$ (consequent) simultaneously.
    -   $P(B)$: Marginal Probability of $B$<br>
        The total probability of observing evidence $B$, taking into account all possible causes or hypotheses. It serves as a normalising factor.

2.  Calculating the probability of evidence $P(B)$

    The total probability of observing evidence $B$ is determined by summing over all possible scenarios (or hypotheses) that could lead to $B$.

    $$
    P( B) =P( B\mid A) P( A) +P\left( B\mid A^{c}\right) P\left( A^{c}\right)
    $$

    Where

    -   $A^c$: The complement of $A$, representing the event where $A$ does not occur.

    Alternatively, $P(B)$ can also be expressed in terms of joint probabilities:

    $$
    P(B)=P( A,B) +P\left( A^{c} ,B\right)
    $$

    Using this formulation, Bayes' theorem can be written as:

    $$
    P( A\mid B) =\frac{P( A,B)}{P( A,B) +P\left( A^{c} ,B\right)}
    $$

    This version of Bayes' theorem expresses the posterior probability as the ratio of the joint probability of $A$ and $B$ to the total probability of all scenarios involving $B$.

3.  Example in medical diagnosis

    Assuming the following probabilities:

    -   $P(A)=0.01$: 1% of people have the disease (prior).
    -   $P(B\mid A)=0.95$: If someone has the disease, the test is 95% accurate (likelihood).
    -   $P(B\mid A^c)=0.05$: If someone does not have the disease, the test gives a false positive result 5% of the time.
    -   $P(A^c)=0.99$: 99% of people do not have the disease (complement of prior probability)

    Now, calculate the posterior probability $P(A\mid B)$, which represents the probability that a person actually has the disease given that they tested positive ($B$).

    Step 1: Compute the joint probabilities $P( A,B)$ and $P\left( A^{c} ,B\right)$:

    $$
    P(A,B)=P(B\mid A)P(A)=0.95\cdot 0.01=0.0095\\
    P(A^c,B)=P(B\mid A^c)P(A^c)=0.05\cdot 0.99=0.0495
    $$

    Step 2: Use Bayes' Theorem to find $P(A\mid B)$:

    $$
    \begin{aligned}
    P( A\mid B) & =\frac{P( A,B)}{P( A,B) +P\left( A^{c} ,B\right)}\\
    & =\frac{0.0095}{0.0095+0.0495}\\
    & \approx 0.161
    \end{aligned}
    $$

    Interpretation:

    Even though the test is highly accurate (95%), the probability that a person actually has the disease given a positive test is only 16.1%. This is because the disease is very rare (low prior probability), so false positive contribute significantly to the positive test results.

### Naive Bayes

1.  Naive Bayes is a method used to calculate the posterior probability of a class $C$ given a set of features $\{F_1,F_2,\cdots,F_n\}$. This probability is expressed as:

    $$
    P( C\mid F_{1} ,F_{2} ,\cdots ,F_{n}) =\frac{P( F_{1} ,F_{2} ,\cdots ,F_{n} \mid C)P( C)}{P( F_{1} ,F_{2} ,\cdots ,F_{n})}
    $$

2.  Independence assumption

    Naive Bayes assumes that all features are conditionally independent of each other, given the class label. This assumption significantly simplifies the computation of the joint probability distribution.

    The joint probability of observing the class $C$ and all features is given by:

    $$
    \begin{aligned}
    P( C,F_{1} ,F_{2} ,\cdots ,F_{n}) & = P( F_{1} ,F_{2} ,\cdots ,F_{n} \mid C)P( C)\\
    & =P( C)\prod _{i=1}^{n} P( F_{i} \mid C)
    \end{aligned}
    $$

    Where:

    -   $P(C)$: The prior probability of the class $C$.
    -   $P(F_i\mid C)$: The likelihood of feature $F_i$ given the class $C$.

    The prior probability $P(C)$ is estimated from the data. If $n$ examples in dataset $D$ belong to class $C$, then:

    $$
    P(C)=\frac{n}{|D|}
    $$

    Using the independence assumption, the total probability of observing the complement of class $C$ and all features is given by:

    $$
    \begin{aligned}
    P( C\prime ,F_{1} ,F_{2} ,\cdots ,F_{n}) & =P( F_{1} ,F_{2} ,\cdots ,F_{n} \mid C\prime ) P( C\prime )\\
    & =P( C\prime )\prod _{i=1}^{n} P( F_{i} \mid C\prime )
    \end{aligned}
    $$

    Recall that an alternative version of Naive Bayes can be written as:

    $$
    P( C\mid F_{1} ,F_{2} ,\cdots ,F_{n}) =\frac{P( C,F_{1} ,F_{2} ,\cdots ,F_{n})}{P( C,F_{1} ,F_{2} ,\cdots ,F_{n}) +P( C\prime ,F_{1} ,F_{2} ,\cdots ,F_{n})}
    $$

    Therefore, Naive Bayes formula can be rewritten as:

    $$
    P( C\mid F_{1} ,F_{2} ,\cdots ,F_{n}) =\frac{P( C)\prod _{i=1}^{n} P( F_{i} \mid C)}{P( C)\prod _{i=1}^{n} P( F_{i} \mid C) +P( C\prime )\prod _{i=1}^{n} P( F_{i} \mid C\prime )}
    $$

3.  Example

    | Probability | True ($T$) | False ($F$) |
    |:---|:---:|:---:|
    | $P(Y)$ | 0.5 | 0.5 |
    | $P(\text{small}\mid Y)$ | 0.4 | 0.4 |
    | $P(\text{medium}\mid Y)$ | 0.1 | 0.2 |
    | $P(\text{large}\mid Y)$ | 0.5 | 0.4 |
    | $P(\text{red}\mid Y)$ | 0.9 | 0.3 |
    | $P(\text{blue}\mid Y)$ | 0.05 | 0.3 |
    | $P(\text{green}\mid Y)$ | 0.05 | 0.4 |
    | $P(\text{square}\mid Y)$ | 0.05 | 0.4 |
    | $P(\text{triangle}\mid Y)$ | 0.05 | 0.3 |
    | $P(\text{circle}\mid Y)$ | 0.9 | 0.3 |

    Test Instance: The instance to classify is $X=\{\text{medium},\text{red},\text{circle}\}$.

    Step 1: Compute the joint probabilities $P(T,X)$ and $P(F,X)$:

    $$
    \begin{aligned}
    P( T,X) & =P( T) P\left(\text{medium} \mid T\right) P\left(\text{red} \mid T\right) P\left(\text{circle} \mid T\right)\\
    & =0.5\cdot 0.1\cdot 0.9\cdot 0.9\\
    & =0.0405
    \end{aligned}
    $$

    $$
    \begin{aligned}
    P( F,X) & =P( F) P\left(\text{medium} \mid F\right) P\left(\text{red} \mid F\right) P\left(\text{circle} \mid F\right)\\
    & =0.5\cdot 0.2\cdot 0.3\cdot 0.3\\
    & =0.009
    \end{aligned}
    $$

    Step 2: Use Bayes' Theorem to find $P(T\mid X)$:

    $$
    \begin{aligned}
    P( T\mid X) & =\frac{P( T,X)}{P( T,X) +P( F,X)}\\
    & =\frac{0.0405}{0.0405+0.009}\\
    & =0.8181
    \end{aligned}
    $$

    Interpretation:

    The probability of $T$ being true given the instance $X$ is approximately 81.81%.

4.  Naive Bayes as a Bayesian network

    Naive Bayes can be interpreted as a simplified form of a Bayesian network with a specific structure and set of assumptions:

    -   Nodes (Variables)<br>
        The Bayesian network consists of one node for the class $C$ (the hypothesis) and multiple nodes for features $F_1,F_2,\cdots,F_n$ in the dataset.
    -   Edges<br>
        The class $C$ is the parent of all feature nodes. Each feature node $F_i$ is conditionally independent of each other, given the class.

    The components of Naive Bayes correspond directly to elements of the Bayesian network:

    -   Prior probabilities: $P(C),P(C\prime)$ define the probabilities for the root node (class $C$).
    -   Conditional probabilities: $P(F_i\mid C),P(F_i\mid C\prime)$ populate the conditional probability tables (CPTs) for the feature nodes.

    This structure enables Naive Bayes to model the dependencies in the data efficiently while leveraging strong independence assumptions to simplify computations.

5.  Applications

    Naive Bayes simplifies probabilitic inference by assuming conditional independence between features. Despite this simplification, experiments have shown that Naive Bayes performs competitively with other classification methods on standard datasets.

    Applications include medical diagnosis, text categorisation and spam filtering, and intelligent tutoring systems.

### Bayesian Network

1.  Bayesian networks

    A Bayesian network is a probabilistic graphical model that represents a set of variables and their conditional dependencies. It uses a graph structure to represent relationships between variables:

    -   Graph Type<br>
        A Bayesian network employs a Directed Acyclic Graph (DAG) to represent causal relationships. In this structure, the edges are directed, showing the direction of causality or influence. There are no loops, ensuring the graph remains acyclic.
    -   Nodes (Variables)<br>
        Each variable is represented as a node in the graph. Each node is associated with a conditional probability table (CPT) that defines the probabilities of the variable given its parents.
    -   Roots (Sources)<br>
        Root nodes have no parent. They are assigned prior probabilities, as they are independent of other variables.
    -   Edges (Dependencies)<br>
        The edges between nodes represent conditional dependencies. For example, if variable $A$ influences variable $B$, a directed edge will connect $A$ to $B$.

2.  Conditional probability tables

    A CPT represents the conditional probabilities of a node based on its parent nodes. The number of parameters required for a CPT depends on the node's fan-in, which refers to the number of its direct parent nodes.

3.  A Bayesian network implicitly defines a joint distribution:

    $$
    P( X_{1} ,X_{2} \cdots ,X_{n}) =\prod _{i=1}^{n} P\left( X_{i} \mid \text{Parents}( X_{i})\right)
    $$

    Example:

    Consider the scenario: John and Mary both receive calls, the alarm is heard, and there is neither a burglary nor an earthquake. The joint probability of this event is:

    $$
    \begin{aligned}
    & P( J\land M\land A\land \neg B\land \neg E)\\
    & =P( J\mid A) P( M\mid A) P( A\mid \neg B\land \neg E) P( \neg B) P( \neg E)
    \end{aligned}
    $$

    This expression breaks down the joint probability into conditional probabilities based on the structure of the Bayesian network.

4.  Bayesian network inference

    Given the known values of certain evidence variables, calculate the posterior probability of the specified query variables.

5.  Bayesian network

    -   Knowledge representation
    -   Statistical learning & inductive reasoning

6.  Assumptions

    -   Hypotheses are mutually exclusive
    -   Hypotheses are exhaustive
    -   Conditional independence
    -   Need of prior probabilities

7.  Bayesian Networks Construction Tools

    Bayesian networks are powerful probabilistic graphical models used for reasoning under uncertainty. Various tools facilitate their construction, visualisation, and inference.

    -   Netica: User-friendly tool for building Bayesian Networks. Suitable for both beginners and advanced users.
    -   BayesiaLab: Advanced tool for modeling, analysing, and visualising Bayesian Networks. Offers a 30-day free trial.
    -   BayesFusion: Offers free downloads for academic use.
    -   Hugin: Widely used in academia and industry for Bayesian network modelling and reasoning.
    -   Samlam: Specialises in creating, visualising, and performing inference in Bayesian networks and influence diagrams
    -   pgmpy: A python library for building and performing inference in probabilistic graphical models programmatically.
    -   R-bnlearn: An R package for learning the structure of Bayesian networks and performing inference.

## Decision Tree

1.  A decision tree is a supervised machine learning model used for classification and regression tasks. It is called a "tree" because it resembles a tree-like structure, with branches representing decisions and leaves representing outcomes.

2.  Key components of a decision tree:

    -   Root node<br>
        The starting point of the tree. represent the first decision based on the most significant feature.
    -   Internal nodes<br>
        Decision points that split the data based on a specific feature or condition.
    -   Branches<br>
        Paths connecting nodes, representing the outcome of a decision or test condition.
    -   Leaf nodes<br>
        Endpoints of the tree. Contain the final predicted class label (classification) or value (regression).

3.  Splitting

    The data is divided into subsets based on a feature and a threshold. Common splitting criteria include:

    -   Gini index (for classification)
    -   Entropy (used in information gain for classification)
    -   Variance reduction (for regression)

4.  Stopping criteria

    The tree grows until a stopping criterion is met, such as:

    -   Maximum depth
    -   Minimum number of samples per leaf node
    -   No further information gain

5.  Prediction

    -   For classification: The majority class of the leaf node.
    -   For regression: The average of the target values in the leaf node.

6.  Intrinsic feature selection and dimensionality reduction

    -   Feature selection<br>
        At each split, the tree evaluates all features and selects the one that best separates the data (e.g., using information gain or Gini index). Features that do not improves splits are naturally excluded.
    -   Dimensionality reduction<br>
        The tree only retains features used in splits, reducing dimensionality. Unlike explicit methods like PCA, this reduction is implicit and specific to the training data.

7.  Advantages

    -   Easy to understand<br>
        Visualisation makes it intuitive.
    -   Handles non-linear data<br>
        Can model complex relationships.
    -   Feature importance<br>
        Highlights which features are most important.
    -   No need for scaling<br>
        Works with raw data without requiring normalisation.

8.  Disadvantages

    -   Overfitting<br>
        Tends to overfit if the tree grows too deep.
    -   Instability<br>
        Small changes in data can lead to a very different tree.
    -   Not optimal for large datasets<br>
        Computationally expensive for large, complex data.

9.  Improvements

    -   Pruning<br>
        Reduces overfitting by cutting unnecessary branches.
    -   Ensemble methods<br>
        Combine multiple trees for better performance, such as:
        -   Random forest<br>
            Builds multiple trees using random subsets of data and features.
        -   Gradient boosting<br>
            Sequentially builds trees to minimise error.

10. Applications

    -   Classification<br>
        Predicting customer churn, disease diagnosis.
    -   Regression<br>
        Predicting house prices, stock values.
    -   Decision-making<br>
        Loan approvals, fraud detection.

### Gini Index

1.  Overview

    The **Gini Index** (also known as **Gini Impurity**) is a metric used to measure the impurity or diversity of a dataset in classification problems. It is commonly used in decision tree algorithms such as **CART (Classification and Regression Trees)** to determine the best feature to split on.

2.  Definition

    The Gini Index quantifies the **probability** that a randomly chosen element from a dataset would be **incorrectly classified** if it were randomly labelled based on the class distribution.

    Mathematically, the Gini Index for a node is defined as:

    $$
    \operatorname{Gini(D)}=1-\sum_{i=1}^Cp_i^2
    $$

    where:

    -   $p_i$ is the probability (or proportion) of class $i$ in dataset $D$.
    -   $C$ is the total number of classes.

3.  Properties of Gini Index

    -   **Range**: The Gini Index varies between $0$ and at most $1-\frac{1}{C}$.
        -   **Gini =** $0$: The dataset is pure (all instances belong to a single class).
        -   **Gini is maximised at** $1-\frac{1}{C}$: This occurs when all classes are equally likely.
    -   **Lower values indicate better purity**: The lower the Gini Index, the better the purity of a node in a decision tree.
    -   **Used in CART**: The Gini Index is the primary criterion for splitting nodes in the CART algorithm (unlike ID3 or C4.5, which use Information Gain and Entropy).

4.  Gini Index for Splitting

    When constructing a decision tree, we evaluate the Gini Index for possible splits to determine **the best feature for partitioning**. The Gini Index for a split is computed as a weighted sum of the Gini Indices of the resulting subsets:

    $$
    \operatorname{Gini}_\text{split}=\frac{N_1}{N}\operatorname{Gini}(D_1)+\frac{N_2}{N}\operatorname{Gini}(D_2)+\cdots+\frac{N_k}{N}\operatorname{Gini}(D_k)
    $$

    where:

    -   $N$ is the total number of instances before the split.
    -   $N_i$ is the number of instances in subset $D_i$ after the split.

    To build a decision tree, we repeat this calculation for each feature and choose the feature that results in the lowest **Gini Split** value. This ensures that the chosen feature **maximises purity** at each step.

5.  Binary Splitting

    The formula for Gini Index split above is generalised to account for multi-way splitting. In CART, however, decision trees always split a node into exactly two branches based on a feature's threshold value (for numerical features) or category (for categorical features).

    In this case, $k=2$, so the Gini Index for the split is:

    $$
    \operatorname{Gini}_\text{split}=\frac{N_1}{N}\operatorname{Gini}(D_1)+\frac{N_2}{N}\operatorname{Gini}(D_2)
    $$

6.  Advantages

    -   Computationally efficient since it does not require logarithmic calculations.
    -   Simple to interpret and implement.
    -   Works well for binary and multi-class classification tasks.

7.  Limitations

    -   Less sensitive to class imbalance compared to entrophy.
    -   Biased towards attributes with a larger number of distinct values (like Information Gain).

### Entropy

1.  Definition

    **Entropy** is a measure of **uncertainty** or **impurity** in a dataset. In the context of decision trees, it quantifies how mixed a dataset is with respect to different class labels. A **high entropy** value indicates **high disorder** (**more uncertainty**), while a **low entropy** value indicates that the data is **more homogeneous** (**less uncertainty**).

2.  Mathematical Formula

    The entropy $H(D)$ of a dataset $D$ is defined as:

    $$
    H(D)=-\sum_{i=1}^{C}p_i\log_2{p_i}
    $$

    where:

    -   $C$ is the number classes in the dataset.
    -   $p_i$ is the proportion of examples belonging to class $i$ in $D$.
    -   $\log_2$ is the logarithm to base $2$, ensuring entropy is measured in **bits**.

3.  Interpretation of Entropy Values

    -   $H(D)=0$: The dataset is **pure** (all instances belong to the same class).
    -   $H(D)=\log_2C$: The dataset is **maximally impure**, meaning the class distribution is completely mixed.

    For binary classification ($C=2$), the maximum entropy is $H(D)=\log_22=1$, when the classes are split evenly.

4.  Entropy in Decision Trees

    -   Entropy is used in the **ID3 algorithm** to determine the best attribute to split the data.
    -   The attribute that provides the **greatest information gain** (i.e., reduces entropy the most) is chosen as the splitting criterion.

5.  Information Gain and Entropy

    -   **Information gain (IG)** is the **reduction in entropy** after splitting on a feature.
    -   It is computed as:
        $$
        \operatorname{IG}(D,A)=H(D)-\sum_{v\in\operatorname{Values}(A)}\frac{|D_v|}{|D|}H(D_v)
        $$
        -   $D$: The **original dataset** before the split.
        -   $A$: The **attribute** we are splitting on.
        -   $\operatorname{Values}(A)$: The **unique values** that attribute $A$ can take.
        -   $v$: $A$ **specific value** that attribute $A$ can take.
        -   $D_v$: The **subset of dataset** $D$ where attribute $A$ has value $v$.
        -   $H(D)$: The entropy of the original dataset $D$.
        -   $H(D_v)$: The entropy of subset $D_v$ after splitting on $A$.
        -   $\frac{|D_v|}{|D|}$: The **proportion of examples** in $D_v$ relative to the total dataset $D$.
    -   The feature with the highest information gain is selected for splitting.

## Neural Network Embedding

1.  Why Are Embeddings Needed?

    -   ML models require numerical inputs. **One-hot encoding** transforms categorical data into numerical format.
    -   Problems with one-hot encoding:
        -   Expands dimensions without capturing relationships (e.g., no similarity between "apple" and "orange").
        -   Leads to sparse matrices with many zero values, increasing memory usage.
    -   **Embeddings** solve these issues by converting categorical data into dense numerical vectors.

2.  What Are Embeddings?

    -   Embeddings are **vectors** that represent objects like words, images, or videos.
    -   They **capture relationships and similarities** between data points.
    -   The process involves:
        -   Transforming **categorical data** into **numerical form**.
        -   Reducing **high-dimensional data (sparse matrices)** into **lower-dimensional vectors (dense vectors)**.

3.  Different Uses of "Embeddings"

    -   **Embedding Process**: Mapping categorical data to numerical space.
    -   **Embedding Vectors**: The numerical representation resulting from the embedding process.
    -   **Embedding Layers**: Components in ML models that handle embeddings.
    -   **Embedding Models**: Algorithms that generate embeddings (e.g., Word2Vec, BERT).

4.  Neural Network Embeddings

    -   **Embedding layers** are used in neural networks, particularly in:
        -   **CNNs**: Improve feature extraction.
        -   **RNNs**: Improve sequential data processing.

5.  Embedding Process

    -   **Categorical Mapping**
    -   **Dimensionality Reduction**

6.  Common Embedding Models

    -   **Principal Component Analysis (PCA)**: Reduces data complexity but may lead to information loss.
    -   **Singular Value Decomposition (SVD)**
    -   **Word2Vec** (word embeddings): Learns word embeddings from large text corpora.
    -   **BERT** (contextual embeddings): Transformer-based model capturing contextual meanings.

7.  How Embeddings Are Created

    -   Neural Networks generate embeddings through hidden layers.
    -   The process involves factorising input features into vector representations.
    -   Training is guided and optimised iteratively.

## Principal Component Analysis (PCA)

1.  PCA reduces the number of dimensions in large datasets to principal components that retain most of the original information. It does this by transforming potentially correlated variables into a smaller set of variables, called principal components.

## ROC Curve

1.  ROC curve, is a graphical plot that illustrates the performance of a binary classifier model (can be used for multi class classification as well) at varying threshold values. The ROC curve is the plot of the true positive rate (TPR) against the false positive rate (FPR).

## Rule Induction and Extraction

1.  Decision Tree Model

    -   A **tree structure** represents knowledge and inference.
    -   Provides an **indexed rule base** of learned rules.
    -   Widely used in **data mining** for knowledge discovery (**rule induction**).

2.  Neural Network Model

    -   A trained **neural network** stores functions, weights, and parameters to encode knowledge.
    -   **Rule extraction** from NNs aims to approximate **predictive behaviour**.

3.  Rule Induction Using Decision Trees: Bank Loan Example

    **Business Background**

    -   Banks receive numerious loan applications for approval.
    -   Applications include attributes like age, job status, housing, and credit history.
    -   Some applicants default; banks aim to approve low-risk applicants.
    -   Classification task: Predict if an applicant is a likely defaulter or non-defaulter.

    **Rule Induction**

    -   Decision trees use historical data to extract rules.
    -   Features such as age, employment, home ownership, and credit rating determine approval.
    -   Example decision rules:
        -   If young & no job → Reject.
        -   If middle-aged & own house → Approve.
        -   If old & credit rating is excellent → Approve.

    **Decision Tree Construction**

    -   Age is chosen as the root node.
    -   Further branching occurs based on own house, job status, or credit rating.
    -   Leaf nodes indicate the final decision (Approve/Reject).

4.  Decision Tree: Learning, Representation & Reasoning

    -   A **decision tree** is a widely used **data mining** approach.
    -   It applies **statistical methods** and is a key **machine learning** technique.
    -   The resulting tree represents a **structured knowledge base** with **extracted rules**.
    -   **Reasoning** with a decision tree follows a **rule-based approach**.
    -   The **tree structure** itself forms the **reasoning framework**.

5.  Rule Extraction from Neural Networks via Decision Tree Induction

    -   **Extracting rules** from neural networks helps create interpretable models.
    -   These rules **approximate** NN **predictive behaviour**.
    -   **Rule-extraction algorithms** interpret neural networks and analyse **input-output relationships**.

6.  Research on NN Rule Extraction

    -   Rule Extraction via Decision Tree Induction
        -   **Decomposes a neural network** into decision trees
        -   **Extract rules** from individual trees and merges them.
        -   [M. Sato and H. Tsukimoto. "Rule extraction from neural networks via decision tree induction."](https://ieeexplore.ieee.org/document/938448)
    -   Rule Extraction from Deep Neural Networks
        -   Investigates **rule-based representations** of deep networks.
        -   [Hailesilassie, Tameru. "Rule Extraction Algorithm for Deep Neural Networks: A Review."](https://arxiv.org/abs/1610.05267)

## Scikit-Learn

1.  Scikit-learn is a free and open-source machine learning library for Python, designed to facilitate easy and efficient data analysis and modelling. Built upon NumPy, SciPy, and Matplotlib, it offers wide range of tools for both supervised and unsupervised learning tasks.

2.  Installing Scikit-learn

    ```bash
    pip install scikit-learn
    ```

3.  Read up documentation for DT (for classification), DT (for regression), kNN, and NB.
