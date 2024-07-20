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

1.  A **model** is a hypothesis using a selected **representation** for addressing a given task.

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

    -   **Classification**: Predicting a categorical value / class label.
        -   Binary Classification
        -   Multi-Class Classification
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

## Clustering

1.  A Task of Unsupervised Learning

    -   Clustering groups data without predefined labels using multiple iterations.
    -   Assignments are based on instance features.

2.  Clustering vs. Classification

    -   Classification: Uses labeled data to train a model for predicting class labels.
    -   Clustering: Segments data without predefined labels to identify patterns or insights.

3.  k-Means Clustering

    Algorithm

    -   Initialise: Select $k$ data points as initial cluster centers.
    -   Assign: Assign each point to the nearest centroid based on a distance metric.
    -   Update: Recalculate centroids as the mean of the assigned points.
    -   Repeat until assignments stabilise (convergence).

    Measuring Distance

    -   Euclidean Distance (most common):

        $$
        d_{ij}=\sqrt{\sum_p(x_{ip}-x_{jp})^2}
        $$

    -   Other metrics: Manhattan Distance (for numerical data), specialised methods for categorical / mixed data.

    Choosing $k$ & Initialisation

    -   Choosing $k$:
        -   Use domain knowledge or heuristic methods (e.g., Elbow Method).
    -   Initialisation:
        -   Random selection (default).
        -   K-Mean++: A smarter initialisation reducing poor cluster placements.

4.  Hierarchical Clustering

    Mechanism

    -   Starts with each data point as an individual cluster.
    -   Iteratively merges the two closest clusters until only one remains.
    -   The process is visualised using a dendrogram, showing hierarchical merging.

    Measuring Distance Between Clusters

    -   Single Linkage (Minimum Distance): Uses the shortest distance between any two points in clusters.
    -   Complete Linkage (Maximum Distance): Uses the farthest distance between two points.
    -   Average Linkage (Mean Distance): Uses the average distance between all points.

    Advantages

    -   No need to predefined the number of clusters.
    -   Provides an intuitive hierarchical structure (dendrogram).

    Limitations

    -   Computationally expensive for large datasets.
    -   Sensitive to outliers.
    -   Low stability (small changes in data can lead to different clustering results).
    -   The choice of distance metric significantly impacts the outcome.

5.  Two-Step Clustering

    Nonhierarchical Clustering

    -   k-Means: Partitions data into a predetermined number (k) of non-overlapping clusters, ensuring homogeneity.
    -   Kohonen Clustering: Uses Self-Organising Maps (SOM), a neural network approach that forms clusters without predefining their number.
    -   Cluster Dipersion: Measured using sum of distances (or squared Euclidean distance) from points to their cluster centroid.

    Two-Step Clustering

    -   Step 1: Preclustering - Forms small clusters.
    -   Step 2: Hierarchical Clustering - Groups preclusters.
    -   Advantage: Automatically exclude outliers.

6.  Cluster Analysis

    Goal of Clustering

    -   Objective: Group data into homogeneous clusters, where members within a cluster are similar, while those in different clusters are distinct.
    -   Purpose: Extract meaningful insights from data.
    -   Example: Customer segmentation based on lifestyle, purchase behaviour, etc.

    Technical Considerations

    -   Number of Clusters: Can be predefined or determined from data (e.g., using methods like Elbow method or Silhouette analysis).
    -   Similarity Measurement: Distance metrics (e.g., Euclidean, Manhattan, Cosine similarity) help define how similar data points are.
    -   Key Questions
        -   How many clusters? → Cluster count selection.
        -   How to measure similarity? → Choice of distance metric.

7.  Applications

    -   Decision-Making
        -   Target marketing to specific customer groups / Segments data without predefined labels to identify patterns or insights.
        -   Identify potential interest in new services.
    -   Building Classifiers
        -   Use labelled clusters to build classifiers.
    -   Analysis for Insights
        -   Clustering helped design 20 clothing sizes using five key body measurements for U.S. army women's uniforms.
        -   Revealed new perspectives on body shape distribution.

## Machine Learning and Search

1.  Machine Learning Process

    -   Learn the best function and coefficients for predictive tasks.
    -   Optimise to minimise error for accurate predictions.

2.  Search / Optimisation Process

    -   Uses random guided search (generate & test method) to find the best function and coefficients in the hypothesis space.
    -   Minimises an evaluation function, such as error between predicted and target values.

3.  Curve Fitting

    -   Convex search space: Easier optimisation, fewer local minima.
    -   Non-Convex search space: Complex optimisation, multiple local minima.

4.  Evaluation for Search & Optimisation

    -   Supervised ML: MSE.
    -   Reinforcement Learning: Reward function, Q function.
    -   Search: Evaluation, Heuristic, Goal test functions.
    -   Optimisation: Objective function, Utility function, Expectation maximisation.

## Model Performance Evaluation

1.  Performance Metrics for Supervised Learning

    -   **Accuracy** measures the proportion of correctly classified instances.
    -   A better approach is to split data into training (80%) and test set (20%) to assess generalisation.

2.  Performance Metrics for Regression

    -   **Mean Squared Error (MSE)** measures average squared errors.
    -   **Root Mean Squared Error (RMSE)** is the square root of MSE, interpretable in the same unit as the target variable.
    -   **R<sup>2</sup>** measures how well a regression model explains variance in the data.

3.  **R<sup>2</sup> (Coefficient of Determination)**

    Concept

    -   Mean Squared Error (MSE) only considers average error, not data variation.
    -   R<sup>2</sup> compares model error to a simple average, reflecting model usefulness.

    R<sup>2</sup> Formula

    $$
    R^2=1-\frac{\sum(y_i-\hat{y_i})^2}{\sum(y_i-\bar{y})^2}
    $$

    -   Numerator: Total error using model predictions.
    -   Denominator: Total error using mean of y-values.

    Interpreting R<sup>2</sup> Values

    -   Close to 1 → Model explains most data variation (Good fit).
    -   Near 0 → Model performs poorly.
    -   0 → Model is no better than predicting the average y-value.

4.  Performance Metrics for Classification

    | Actual/Predicted | Positive | Negative | |
    |:---|:---:|:---:|:---:|
    | Postive | TP | FN<br>Type II Error | Sensitivity/Recall/TPR<br>$\frac{\text{TP}}{\text{TP}+\text{FN}}$ |
    | Negative | FP<br>Type I Error | TN | Specificity/TNR<br>$\frac{\text{TN}}{\text{TN}+\text{FP}}$ |
    | | Precision<br> $\frac{\text{TP}}{\text{TP}+\text{FP}}$ | Negative Predictive Value<br>$\frac{\text{TN}}{\text{TN}+\text{FN}}$ | Accuracy<br>$\frac{\text{TP}+\text{TN}}{\text{TP}+\text{TN}+\text{FP}+\text{FN}}$ |

    -   Precision
        $$
        \operatorname{Precision}=\frac{\text{TP}}{\text{TP}+\text{FP}}
        $$
    -   Negative Predictive Value
        $$
        \operatorname{NPV}=\frac{\text{TN}}{\text{TN}+\text{FN}}
        $$
    -   Sensitivity/Recall
        $$
        \operatorname{Sensitivity}=\frac{\text{TP}}{\text{TP}+\text{FN}}
        $$
    -   Specificity
        $$
        \operatorname{Specificity}=\frac{\text{TN}}{\text{TN}+\text{FP}}
        $$
    -   Accuracy
        $$
        \operatorname{Accuracy}=\frac{\text{TP}+\text{TN}}{\text{TP}+\text{TN}+\text{FP}+\text{FN}}
        $$
    -   Average Recall
        $$
        \text{Average Recall}=\frac{\text{Recall}+\text{Specificity}}{2}
        $$
    -   F1-Score
        $$
        F_1=\frac{2}{\text{Precision}^{-1}+\text{Recall}^{-1}}
        $$
        $$
        F_1=\frac{2\cdot\text{Precision}\cdot\text{Recall}}{\text{Precision}+\text{Recall}}
        $$
        $$
        F_1=\frac{\text{TP}}{\text{TP}+\frac{1}{2}(\text{FP}+\text{FN})}
        $$

5.  Performance Metrics for Unsupervised Learning

    -   **Silhouette Coefficient** measures clustering quality by evaluating cohesion (how close points are within a cluster) and separation (how distinct clusters are).

        $$
        s(i)=\frac{b(i)-a(i)}{\max\left(a(i),b(i)\right)}
        $$

    where:

    -   $i$: A single data point in the dataset.
    -   $a(i)$: The mean intra-cluster distance, i.e., the average distance between $i$ and all other points in the same cluster (cohesion).
    -   $b(i)$: The mean nearest-cluster distance, i.e., the average distance between $i$ and the nearest cluster that is not assigned to (separation).
    -   Values range from $-1$ to $1$:
        -   Closer to $1$ → Well-clustered.
        -   Closer to $0$ → Overlapping clusters.
        -   Negative values → Misclassified samples.

    Silhouette Coefficient is computed for each data point and then averaged across all data points to evaluate the clustering quality.

## Cross-Validation

1.  Training and Test Set Split

    -   Splitting data into training and test sets helps evaluate model performance.
    -   Random selection of test instances can introduce bias:
        -   "Lucky" selection: Test data closely resembles training data.
        -   "Unlucky" selection: Test data contains outliers or noise.

2.  Cross-validation is useful when data is limited. Approaches include:

    -   **Validation Set Approach**: Randomly splits data into training and validation sets.
    -   **LOOCV (Leave-One-Out-Cross-Validation)**: Uses each data point as a test score.
    -   **k-Fold Cross-Validation**: Splits data into $k$ subsets, trains on $(k-1)$ folds, tests on the remaining fold.

3.  Validation Set Approach

    -   Compares different models or parameter settings to find the best-performing configuration.

    Steps:
    -   Split data into training and validation sets.
    -   Train models using different parameter combinations.
    -   Select the model with the lowest test error.

    Pros:
    -   Simple, easy to implement

    Cons:
    -   High variance in validation error
    -   Uses only part of the data for training, reducing accuracy.

4.  LOOCV

    -   Splits dataset of size $n$ into:
        -   Training set: $(n-1)$ samples
        -   Validation set: $1$ sample
    -   Repeats for all $n$ samples.
    -   Computes MSE as:

        $$
        \operatorname{CV}(n)=\frac{1}{n}\sum_{i=1}^n\operatorname{MSE}_i
        $$

    Pros:
    -   Low bias, uses almost all data for training.

    Cons:
    -   Computationally expensive (train $n$ models).

5.  k-Fold Cross-Validation

    -   Splits dataset into $k$ folds (e.g., $k=5,10$).
    -   For each iteration:
        -   Uses $(k-1)$ folds for training.
        -   Uses $1$ fold for testing.
    -   Computes MSE across all folds:
        $$
        \operatorname{CV}(k)=\frac{1}{k}\sum_{i=1}^k\operatorname{MSE}_i
        $$

    Pros:
    -   Reduces variance in validation error, balances training and validation data.

    Cons:
    -   More stable but still computationally intensive.

6.  LOOCV vs. k-Fold

    LOOCV
    -   Less bias (almost full dataset for training).
    -   More stable MSE (consistent results).
    -   Highly computationally expensive.

    k-Fold
    -   Reduces computation (solves LOOCV's inefficiency).
    -   More practical for large datasets.
    -   LOOCV is a special case where $k=n$.

## Cluster Validation

1.  To ensure meaningful clustering results, validation is necessary. Common methods include:

    -   Cluster Interpretability (Human Review)
        -   Evaluates whether the clustering results make intuitive sense.
        -   Example: Comparing k-means clusters with different $k$ values in a dataset.
    -   Cluster Stability (Experimental Testing)
        -   Tests how robust clusters are when data is split or slightly modified.
        -   Example: Partitioning data and verifying if clusters remain consistent.
    -   Cluster Separation (Statistical Measures)
        -   Quantifies cluster distinctness using statistical tests.
        -   Example: Silhouette Score, which examines between-cluster and within-cluster variation.
