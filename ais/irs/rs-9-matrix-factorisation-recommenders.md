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
    <span class="value">2025-09-30</span>
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

**Performing the Factorisation**

1.  **SVD (Singular Value Decomposition)** is a standard factorisation method.
2.  But real-world rating matrices are very *sparse*, making exact SVD impractical.
3.  Instead, *incremental learning* methods (e.g., gradient descent) are used to approximate factors.

## Factorising with Gradient Descent

**Optimisation Objective**

To learn $P$ and $Q$, minimise the error over known ratings:

$$
\min_{p,q}{\sum_{(u,i) \in K}{\left(r_{u,i}-p_u \cdot q_i^\top\right)^2 + \lambda(\|p_u\|^2+\|q_i\|^2)}}
$$

where,

-   $K$ is the set of observed ratings.
-   $\lambda$ is the regularisation term to prevent overfitting.

This objective balances accuracy (fitting ratings) and simplicity (small latent vectors).

**Gradient Descent**

Training examples are represented as triplets consisting of a user, an item, and a rating. For each observed rating, the algorithm updates both the user and item latent vectors in order to reduce the prediction error.

Update Rules:

$$
p_u \leftarrow p_u + \gamma \left( (r_{u,i} - \hat{r}_{u,i})q_i - \lambda p_u \right)\\
q_i \leftarrow q_i + \gamma \left( (r_{u,i} - \hat{r}_{u,i})p_u - \lambda q_i \right)
$$

where,

-   $p_u$ is the latent vector for user $u$.
-   $q_i$ is the latent vector for item $i$.
-   $r_{u,j}$ is the actual rating.
-   $\hat{r}_{u,j}$ is the predicted rating.
-   $\gamma$ is the learning rate.
-   $\lambda$ is the regularisation constant.

Stochastic Gradient Descent (SGD) method was popularised by Simon Funk in the Netflix Prize competition.

**Overfitting & Regularisation**

1.  Overfitting occurs if too many latent factors capture noise rather than signal.
2.  Regularisation adds a penalty to keep latent values small, preventing over-complexity.
3.  The optimal number of factors $k$ is usually 50-100, tuned by validation.

## Alternating Least Square (ALS)

**Overview**

Alternating Least Square (ALS) is a matrix factorisation technique commonly used in large-scale recommender system. This user-item rating matrix $R$ is factorised into two smaller matrices:

$$
R \approx A \times B^\top
$$

where,

-   $A \in \mathbb{R}^{m \times k}$ is the user-feature matrix.
-   $B \in \mathbb{R}^{n \times k}$ is the item-feature matrix.
-   $k \ll m,n$ is the number of latent features (e.g., 50-100).

The goal is to find user vectors $a_i$ and item vectors $b_j$ that minimises the squared reconstruction error:

$$
\operatorname{cost} = \sum_{i,j}{(r_{ij}-a_i \cdot b_j)^2}
$$

This optimisation alternates between fixing one matrix and solving for the other until convergence.

**Connection to Linear Regression**

If we fix the user matrix $A$ and optimise only for $B$, the problem reduces to multiple linear regression tasks:

$$
y = \beta X = \beta_1 x_1 + \beta_2 x_2 + \beta_3 x_3 + \cdots
$$

where,

-   $R$ (ratings) corresponds to the output variable $y$.
-   $A$ (user features) corresponds to the input variable $X$.
-   $B$ (item features) corresponds to the coefficient $\beta$.

The solution for regression coefficients is given by the Ordinary Least Squares (OLS) formula:

$$
\beta = (X^\top X)^{-1} X^\top y
$$

Thus, ALS can be viewed as repeatedly solving sets of regression problems.

**Algorithm**

1.  Initialisation<br>
    Assign random weights to $A$ and $B$. Ratings are usually normalised to range between $0$ and $1$.
2.  Optimise item matrix $B$<br>
    Fix $A$, and use regression to estimate item weights in $B$. Each item requires building one regression model, using the ratings of all users who interacted with it.
3.  Optimise user matrix $A$<br>
    Fix $B$, and use regression to estimate user weights in $A$. Each user requires building one regression model, using the ratings of items they interacted with.
4.  Iterate<br>
    Alternate between updating $A$ and $B$ until convergence (or until a time limit is reached).

This process can be summarised as:

1.  Fix $A$, solve for $B$:

    $$
    y = B_1x_1 + B_2x_2 + B_3x_3 + \cdots
    $$

2.  Fix $B$, solve for $A$:

    $$
    y = A_1x_1 + A_2x_2 + A_3x_3 + \cdots
    $$

**Conceptual View**

When updating items $(B)$:

1.  Each column of $B^\top$ is learnt by using the corresponding ratings in $R$ as outputs $(y)$, and user feature vectors from $A$ as inputs $(X)$.
2.  To estimate weights for item $b_j$, construct training data from users who rated $b_j$, and regress their ratings against their latent features in $A$.

When updating users $(A)$:

1.  Each row of $A$ is learnt by using the ratings of the corresponding user in $R$ as outputs $(y)$, and item feature vectors from $B$ as inputs $(X)$.
2.  To estimate weights for user $a_i$, construct training data from items rated by $a_i$, and regress ratings against their latent features in $B$.

**Handling New Users and Items (Cold-Start)**

ALS struggles with the cold-start problem:

1.  If a user has no ratings, or an item has never been rated, the model cannot produce predictions.
2.  A typical workaround is to ask new users for a few sample ratings or wait until they generate activity (page view, transactions, clicks).

Refactorisation challenge:

1.  Incorporating a new user or item usually requires refactorising the entire matrix, which can be computationally expensive.

Alternative strategy:

1.  Factorise only for the new user by reusing the existing item factors matrix $B$.
2.  For example, if user $a_i$ provides some initial ratings, their feature vector $A$ can be estimated directly by regression against the fixed $B$, without retraining the full model.

This approach is used in industrial-scale systems such as Facebook's recommender engine.

## Other Factorisation Methods

Since Funk's pioneering work (2006), many other matrix factorisation approaches have been introduced:

1.  **Non-Negative Matrix Factorisation (NMF)**
    -   Factorises ratings into two non-negative matrices with components constrained to $[0,1]$.
    -   Useful when ratings cannot be negative, enabling more interpretable latent factors.
2.  **Logistic Matrix Factorisation**
    -   Designed for **implicit binary data** (e.g., clicks, views, purchases).
    -   Models user-item interactions using a logistic likelihood function.
3.  **SVD++**
    -   Extends classical SVD by incorporating both explicit ratings and implicit feedback.
    -   Accounts for user behaviour beyond direct ratings (e.g., browsing history).
4.  **Netflix and Parallel ALS**
    -   Developed to scale factorisation to very large datasets (e.g., Netflix Prize).
    -   Implements ALS in parallel for distributed computing.
    -   References: [Large-Scale Parallel Collaborative Filtering for the Netflix Prize](https://www.researchgate.net/publication/220788980_Large-Scale_Parallel_Collaborative_Filtering_for_the_Netflix_Prize)

## Strengths and Weaknesses

Strengths

1.  Handles sparse data effectively.
2.  Captures hidden structure beyond simple similarity.
3.  Basis of the Netflix Prize winning models.

Weaknesses

1.  Struggles with **cold start** (new users/items).
2.  Latent factors are not always interpretable.
3.  Requires careful hyperparameter tuning.

## Evaluation Metrics

Evaluating recommender performance goes beyond prediction error (RMSE/MAE) and requires ranking-based metrics:

**Precision at K (P@K)**

>   One user

1.  Proportion of recommended items in the top-K list that are relevant.
2.  An item is relevant if the user is known to like it (e.g., rating ≥ 4).
3.  Example:
    -   If 3 out of top-10 items are relevant → `P@10 = 0.3`.
    -   If 4 out of 8 considered items are relevant → `P@8 = 0.8`.

**Average Precision at K (AP@K)**

>   One user but average over different values of K

1.  Considers the order of relevant items within the top-K list.
2.  Computed as the average of `P@i for i = 1..K`.
3.  Calculated for a single user.

**Mean Average Precision at K (MAP@K)**

>   The mean of AP@K for all users

1.  Aggregates performance across users.
2.  Defined as the mean of AP@K across all users.
3.  Provides a global measure of how well the recommender ranks relevant items for the entire user base.
