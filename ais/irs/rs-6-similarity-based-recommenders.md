<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Similarity-Based Recommendation

>   If two things are similar in some respects, they are probably similar in other respects.

<div class="badge">
    <span class="key">Type</span>
    <span class="value">Course</span>
</div>
<div class="badge">
    <span class="key">Instructor</span>
    <span class="value">Barry Shepherd</span>
</div>
<div class="badge">
    <span class="key">Institution</span>
    <span class="value">NUS-ISS</span>
</div>
<div class="badge">
    <span class="key">Note Updated</span>
    <span class="value">2025-07-21</span>
</div>

## Introduction

**Similarity-Based Reasoning** (also known as **Analogy-Based Reasoning**, or **Case-Based Reasoning** in expert systems) recommends items based on how similar a new item is to previous observed ones.

It solves new problems by finding the most similar examples and applying their solutions&mdash;commonly implemented using **k-Nearest Neighbour (K-NN)** algorithms.

## K-Nearest Neighbour (K-NN)

K-NN recommends or predicts by:

1.  Representing examples (instances) as vectors.
2.  Comparing the new instance to its $K$ most similar neighbours.

**Decision Strategy**

1.  **Classification**: Take the **majority vote** among $K$ neighbours.
2.  **Regression**: Take the **average** value of $K$ neighbours.

No model is built&mdash;hence often called **Memory-Based Reasoning**.

## Choosing K

The choice of $K$ is data-dependent:

1.  A **smaller $K$**: sensitive to noise, sharp decision boundaries.
2.  A **larger $K$**: smoother predictions, but may blur class boundaries.

Which $K$ is the best? → Depends on **hyperparameter tuning** (e.g., via **cross-validation**).

## Data Normalisation

K-NN relies on **distance metrics** (e.g., Euclidean distance), so **normalisation** is essential:

1.  When features have *different units or scales*, distance calculations can be misleading.
2.  Normalising features&mdash;using methods like **Min-Max Normalisation** or **Z-score Normalisation (Standardisation)**&mdash;aligns their scales and improves accuracy.

Always normalise your training data before applying K-NN.

## Weighted Voting

Are all neighbours equally important? Not always.

**Distance-Weighted Voting**

1.  Closer neighbours are likely more relevant → assign higher weight

2.  Weight can be computed as:

    $$
    w_i = \frac{1}{d_i}
    $$

    where,

    -   $d_i$ is the distance to the $i$-th neighbour.

3.  Final classification is based on **weighted majority vote**:

    -   Sum the weights for each class.
    -   Choose the class with the highest total weight.

Use distance-weighted voting&mdash;especially with small $K$&mdash;to give closer neighbours more influence and reduce sensitivity to outliers in noisy or ambiguous regions.

## Curse of Dimensionality

In high-dimensional spaces, distance measures become less meaningful&mdash;all points tend to appear equally far apart. This weakens the effectiveness of K-NN.

Apply **dimensionality reduction** (e.g., PCA, autoencoders) to remove irrelevant features and preserve meaningful similarity, improving both accuracy and speed.
