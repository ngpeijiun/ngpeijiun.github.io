<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Matrix Factorisation Recommenders

>   Hidden factors shape visible choices.

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
    <span class="value">2025-08-30</span>
</div>

## Categories of Recommender Systems

Recommender systems can be classified into five main categories:

1.  **Collaborative Filtering (CF)**
    -   Neighbourhood-Based (User-Based, Item-Based)
    -   Model-Based (Clustering, Classification, Matrix Factorisation)
2.  **Content-Based (CB)**
    -   Uses item attributes to match user preferences.
3.  **Knowledge-Based**
    -   Applies explicit rules/constraints for recommendations.
4.  **Community-Based**
    -   Leverages trust and social network connections.
5.  **Hybrid Systems**
    -   Combine two or more methods (e.g., CF + CB).

## Introduction

Matrix Factorisation (MF) is a **model-based collaborative filtering** method. Instead of relying on user-user or item-item similarities, it discovers **latent factors** that explain user preferences and item characteristics. These hidden dimensions allow recommendations to be generated even in very sparse datasets.

## Matrix Factorisation Model

We start with a sparse **user-item ratings matrix** $R \in \mathbb{R}^{m \times n}$.

Matrix factorisation decomposes $R$ into lower-dimensional matrices.

$$
R \approx PQ^\top
$$

where,

-   $P \in \mathbb{R}^{m \times k}$ is the user-latent factor matrix.
-   $Q \in \mathbb{R}^{n \times k}$ is the item-latent factor matrix.
-   $k \ll m,n$ is the number of latent factors (e.g., 50-100).

Then the predicted rating for user $u$ on item $i$ is:

$$
\hat{r}_{u,i} = p_u \cdot q_i^\top
$$

where $p_u$ is the $u$-th row of $P$ (latent factor for user $u$) and $q_i$ is the $i$-th of $Q$ (latent vector for item $i$).

## Performing the Factorisation

1.  **SVD (Singular Value Decomposition)** is a standard factorisation method.
2.  But real-world rating matrices are very *sparse*, making exact SVD impractical.
3.  Instead, *incremental learning* methods (e.g., gradient descent) are used to approximate factors.

### Optimisation Objective

To learn $P$ and $Q$, minimise the error over known ratings:

$$
\min_{p,q}{\sum_{(u,i) \in K}{\left(r_{u,i}-p_u \cdot q_i^\top\right)^2 + \lambda(\|p_u\|^2+\|q_i\|^2)}}
$$

where,

-   $K$ is the set of observed ratings.
-   $\lambda$ is the regularisation term to prevent overfitting.

This objective balances accuracy (fitting ratings) and simplicity (small latent vectors).

## Factorising with Gradient Descent

Learning Methods:

1.  Stochastic Gradient Descent (SGD)
2.  Alternating Least Squares (ALS)
