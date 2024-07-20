<h1 style="color: #ccc">Machine Reasoning</h1>

# Inductive Reasoning in Machine Learning

*Feb 10, 2025*

## Induction in Machine Learning

1.  Concept

    **Induction** in machine learning involves extracting general rules from data.

    -   **Learning (Generalisation)**: Identifying patterns from observed data to form predictive rules.
    -   **Reasoning (Prediction)**: Using learnt rules to infer new instances.
    -   Example: If ISS staff drive Japanese cars, we generalise that all ISS staff drive them.
        $$
        \exist x\mid s(x)\land j(x)\Rightarrow\forall x\mid s(x)\rightarrow j(x)
        $$

2.  Induction vs. Deduction and Abduction

    -   **Deduction**: Machine Learning models **predict event likelihoods** by using **causes** as features.
    -   **Abduction**: Machine Learning models **estimate hypothesis probabilities** using **observed evidence** as features.
    -   The reasoning process of machine learning models can be viewed as either deductive or abductive, depending on the **perspective**.
    -   The **learning** phase of these models is fundamentally **inductive**, as it **generalises** from training data.

3.  Generalisation in Machine Learning

    -   Hypotheses must generalise beyond training data to correctly classify unseen instances.
    -   **Memorisation** vs. **Generalisation**: A model that memorises data may not generalise well.
    -   **Ockham's Razor**: Prefer the **simplest hypothesis** that fits the data to improve generalisation.

## Machine Learning Models

1.  A **model** is a selected **representation** for addressing a given task.

2.  **Learning problems** are solved by **learning algorithms** that produce the models.

3.  Types of Machine Learning

    -   **Supervised Learning**
        -   Purpose: Used for **predictive** tasks.
        -   Examples: Classification, regression, function approximation, forecasting.
        -   Training Data: Required **labelled** data with known target outputs.
    -   **Unsupervised Learning**
        -   Purpose: Used for **descriptive** tasks.
        -   Examples: Clustering, grouping, granulation, association.
        -   Training Data: Uses **unlabelled data**, identifying patterns without predefined outputs.
    -   **Reinforcement Learning**
        -   Purpose: Focuses on training software agents to **act in an environment** based on **rewards**.
        -   Actions impact the environment, leading to feedback in the form of rewards. Applied in areas like game theory, control theory, operations research, and robotics.

4.  Types of Supervised Learning

    -   **Classification**: Predicting a category / class label.
    -   **Regression**: Predicting a numerical value / continuous value.

## k-Nearest Neighbours

1.  Geometric Models

    Distance-Based Classifiers → Nearest-Neighbour Classifiers

    -   Classifies a new instance by retrieving the most similar training instance (i.e., the one with the smallest Euclidean distance) and assigning its class.
    -   A simple, memory-based method that does not construct an explicit model.

2.  k-Nearest Neighbours (k-NN)

    -   A variation of the nearest-neighbour classifier classifies objects based on the majority class among its $k$ nearest neighbours.
    -   A lazy learning algorithm, meaning it delays computation until classification is required.
    -   Computation is deferred until a query is made.
    -   Can be used for both classification and regression.

3.  Vote-Based Decision

    -   If $k=1$, the object is assigned to its single nearest neighbour's class.
    -   Larger $k$ results in smoother decision boundaries and better generalisation.

4.  Finding Nearest Neighbours

    -   Given an input $x^\prime$ (vector), find $k$ **nearest neighbours** using **distance metrics**.
    -   **Euclidean distance** (for two features):

        $$
        d(x,x^\prime)=\sqrt{(x_1-x_1^\prime)^2+(x_2-x_2^\prime)^2}
        $$

    -   General formula for $n$-dimensional space:

        $$
        d(x,x^\prime)=\sqrt{\sum_{i=1}^n(x_i-x_i^\prime)^2}
        $$

5.  Choosing the Right $k$

    -   Small $k$ (e.g., 1) → Captures local variations, high variance.
    -   Large $k$ (e.g., 100) → Smoothes decision boundaries, low variance but may lose detail.
    -   Optimal $k$ balances complexity and generalisation.

## Bayes Classifier

1.  Optimal Classifier

    -   The Bayes classifier is the optimal classifier, achieving the lowest possible error rate if the complete probability distribution is known.
    -   Any classifier's performance is evaluated based on how closely it approaches the Bayes classifier's accuracy.

2.  Gold Standard

    -   A **full probability distribution** of the data is required to construct the Bayes classifier. In real-world scenarios, obtaining this complete distribution is often infeasible.
    -   While the Bayes classifier sets the gold standard, practical classifier (like k-NN) serve as **approximations** when complete probability distributions are unavailable.

## Regression

1.  Regression is a supervised learning task used for **function approximation** and **curve fitting**.

2.  k-NN Regression

    -   Predicts the value of a target based on the **weighted average** of its k-nearest neighbours.
    -   **Weighting scheme**:
        -   Neighbours closer to the target are given higher weights (e.g., $w=\frac{1}{d}$, where $d$ is the distance).
        -   The default scheme is **uniform**, treating all neighbours equally.
    -   Example:

        For $k=3$, predict $y^\prime$ for an input $x^\prime=5.4$.

        Identify $3$ nearest neighbours, compute weights, and apply the formula:

        $$
        y^\prime=\frac{w_1y_1+w_2y_2+w_3y_3}{w_1+w_2+w_3}
        $$

3.  Linear Regression

    -   **Multiple Linear Regression** models a **linear relationship** between the response variable ($Y$) and predictors ($X_1,X_2,\cdots,X_n$).
    -   Assumption: The relationship follows:

        $$
        y=\beta_0+\beta_1x_1+\beta_2x_2+\cdots+\beta_nx_n+\epsilon
        $$

        -   $\beta$ vector is coefficients.
        -   $\epsilon$ represents noise or error.
    -   Learning in Linear Regression

        The model finds the **optimal parameters** $\beta_0,\beta_1,\cdots,\beta_n$ that minimise the **error of fitting**.

    -   Key Assumption

        A linear regression model assumes a **linear correlation** between the **response variable** ($Y$) and the **predictors** ($X_1,X_2,\cdots,X_n$). When the relationship is **non-linear**, we can incorporate **polynomial features** (e.g., $x^2,x^3$) to model it within a **linear regression framework**.

        Example (Polynomial Degree $=2$):

        $$
        y=\beta_0+\beta_1x_1+\beta_2x_2+\beta_3x_1^2+\beta_4x_2^2+\beta_5x_1x_2
        $$

        Polynomial regression captures non-linearity in the relationship more effectively than standard linear regression.

4.  Model Fitting

    For regression models, accuracy is judged by how close predictions are to actual values.

    Regression models estimate parameters using the least squares method, minimising MSE:

    $$
    \hat{y}_i=\beta_0+\beta_1x_1^{(i)}+\cdots+\beta_nx_n^{(i)}
    $$

    Mean Squared Error (MSE)

    A common metric to measure prediction accuracy:

    $$
    \text{MSE}=\frac{1}{n}\sum_{i=1}^n(y_i-\hat{y_i})^2
    $$

    where:

    -   $n$: number of data points
    -   $y_i$: actual value
    -   $\hat{y_i}$: predicted value

5.  Applications

    -   **Credit Card Activity Prediction**: Forecasting customer spending based on demographics and past transactions.
    -   **Equipment Failure Estimation**: Predicting failure time using utilisation and environmental data.
    -   **Travel Expenditure Forecasting**: Estimating vacation spending from frequent flyer history.

## Performance Score for Regression

1.  Understanding $R^2$ ($R$-Squared)

    -   $R^2$ (Coefficient of Determination) measures how well a regression model explains variance in the data.
    -   Mean Squared Error (MSE) only considers average error, not data variation.
    -   $R^2$ compares model error to a simple average, reflecting model usefulness.

2.  $R^2$ Formula

    $$
    R^2=1-\frac{\sum(y_i-\hat{y_i})^2}{\sum(y_i-\bar{y})^2}
    $$

    -   Numerator: Error using model predictions.
    -   Denominator: Error using mean of y-values.

3.  Interpreting $R^2$ Values

    -   Close to 1 → Model explains most data variation (Good fit).
    -   Near 0 → Model performs poorly.
    -   0 → Model is no better than predicting the average y-value.
