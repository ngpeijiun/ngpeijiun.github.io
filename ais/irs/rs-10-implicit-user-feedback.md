<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Implicit User Feedback

>   User preferences are often revealed indirectly through their behaviour.

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
    <span class="value">2025-10-01</span>
</div>

## Introduction

1.  Explicit ratings (stars, likes, reviews) are scarce and may be biased.
2.  Implicit feedback (clicks, views, purchases, dwell time) is abundant but noisy.
3.  Real-world recommenders rely mainly on implicit feedback.

The challenge: inferring true *user preference* from noisy, indirect signals.

## Issues with Explicit Ratings

1.  Sparsity: Users rarely provide ratings.
2.  Bias: Peer/friend influence may distort truthfulness.
3.  Availability: Some systems do not collect explicit ratings.
4.  Reliability: Observed behaviour often reflects more accurate preferences.

## Implicit Feedback

**Type of Implicit Feedback**

1.  Binary Actions
    -   Clicked / Not clicked, Purchased / Not purchased
    -   Simple yes/no actions that indicate whether a user interacted with an item.
2.  Intensity Signals
    -   Dwell time (longer viewing may indicate higher interest), Number of views, or repeat purchases, Time spent on a page
    -   Measures the strength or frequency of user engagement with an item.
3.  Contextual Indicators
    -   Time of day, device type, location, Sequence of actions in a session, Repeat visits
    -   Factors that provide additional content about user behaviour and preferences.
4.  Social Signals
    -   Referring a page to others
    -   Actions that involve sharing or recommending content.

**Challenges of Implicit Data**

1.  No Negative Feedback
    -   Absence of interaction ≠ dislike (user may never have seen the item).
2.  Noise and Ambiguity
    -   A click may reflect curiosity, not genuine interest.
    -   Buying ≠ liking (could be necessity or gift).
    -   Mistakes or impulse clicks/purchases create noise.
    -   May represent someone else’s preference if the account is shared.
3.  Popularity Bias
    -   Popular items accumulate more clicks, masking long-tail interests.
4.  Sparsity
    -   Despite volume, each individual user's behaviour is still sparse.

**Implicit Feedback Matrix**

Implicit signals, such as the count of views, can be stored in a user-item matrix:

| User (or Session) | Page1 | Page2 | Page3 | Page4 | Page5 | Page6 |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | 2 | 5 |4 | | 3 | 1 |
| 2 | | 3 | | 5 | 3 | 1 |
| 3 | | | 5 | 3 | | |

1.  Values represent frequency or dwell time.
2.  Can be normalised to a scale (e.g., 1 → 5).

**Explicit and Implicit Ratings**

1.  Explicit: measures polarity (dislike ↔ like).
2.  Implicit: measures strength of engagement (amount of like).
3.  Absence of interaction = *unknown*, not necessarily dislike.

## Integer Implicit Ratings

Example: Deskdrop (internal article-sharing platform).

Event types:

1.  `View` → 1.0
2.  `Like` → 2.0
3.  `BOOKMARK` → 3.0
4.  `FOLLOW` → 4.0
5.  `COMMENT` → 5.0

Two options:

1.  Treat as explicit ratings.
2.  Use algorithms designed for implicit feedback.

## Binary Implicit Ratings

Simplify interactions by converting them into binary values:

1.  $1$ indicates an observed interaction (any interaction).
2.  `NA` indicates an unobserved interaction (absence of interaction).

| User (or Session) | Page1 | Page2 | Page3 | Page4 | Page5 | Page6 |
|:---|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 | 1 | 1 | 1 |   | 1 | 1 |
| 2 |   | 1 |   | 1 | 1 | 1 |
| 3 |   |   | 1 | 1 |   |   |

Problem: If we only use observed interactions, where all values are $1$, both Cosine similarity and Euclidean similarity degenerate:

$$
\operatorname{Cosine}(A,B) = \frac{A \cdot B}{\|A\|\|B\|} = 1\\
\operatorname{Euclidean}(A,B) = \frac{1}{1+\|A-B\|} = 1
$$

Simple Fix: To apply Cosine or Euclidean similarity, we must assume that missing values are $0$ (indicating "not liked"). The `RecommenderLab` R library makes this assumption.

**Jaccard Similarity for Binary Ratings**

An alternative to cosine for binary sets:

$$
\operatorname{sim}_{\text{jaccard}}(A,B) = \frac{|A \cap B|}{|A \cup B |}
$$

1.  Measures set overlap.
2.  Ignores missing values (does not assume $0$ = dislike).

Example

$$
U_1 = \{p_1,p_2,p_3,p_5,p_6\}\\
U_2 = \{p_2,p_4,p_5,p_6\}\\
U_1 \cap U_2 = \{p_2,p_5,p_6\}\\
|U_1 \cap U_2| = 3\\
U_1 \cup U_2 = \{p_1,p_2,p_3,p_4,p_5,p_6\}\\
|U_1 \cup U_2| = 6\\
\operatorname{sim}_{\text{jaccard}} = \frac{3}{6} = 0.5
$$

**Making Recommendation from Binary Data**

Problem: All Ratings = 1

1.  Using standard CF, all predictions become 1.
2.  MAE = 0 (misleading, no ranking ability).

Solution

1.  Ranking by Similarity
    -   Recommend items most similar to those the target user has interacted with.
    -   Similar to **content-based filtering**.
2.  Negative Sampling
    -   Generate artificial 0-values ("*don't like*") to contrast positives.
    -   Allows models to learn from positive vs. negative signals.

## Bayesian Personalised Ranking (BPR)

BPR operates on implicit binary data and assumes that a user prefers every observed (positive) item over all missing (unobserved) ones. Instead of directly predicting ratings, it reformulates the task as a **pairwise ranking problem**: for each user, the model constructs training triplets $(u, i, j)$ such that item $i$ was interacted with by user $u$, while item $j$ was not. The objective is to maximise the probability that $i$ is ranked higher than $j$ for the user.

This creates a pairwise preference matrix containing positive, negative, and missing entries. Although the new dataset expands to roughly $U \times I^2$ comparisons (users x item-pairs), the approach allows collaborative filtering or matrix factorisation to be applied in a ranking-oriented way rather than predicting absolute values.

## Weighted Matrix Factorisation

Another class of methods extends matrix factorisation to implicit feedback. Instead of treating observations as explicit ratings, the raw counts of interactions (e.g., views, clicks, purchases) are converted into a preference matrix $p_{u,i}$, where

$$
p_{u,i} =
\begin{cases}
1 & \text{if user } u \text{ interacted with item } i\\
0 & \text{otherwise}
\end{cases}
$$

Since not all interactions carry equal weight, each preference is assigned a **confidence score**:

$$
c_{u,i} = 1 + \alpha \cdot n_{u,i}
$$

where $n_{u,i}$ is the strength of the interaction (e.g., number of views) and $\alpha$ is a scaling factor (commonly $\alpha \approx 40$). Most frequent interactions translate to higher confidence.

With this formulation, ALS is used to learn user and item factors, but the cost function is modified to weight errors by confidence:

$$
\min_{x,y} \sum_{u,i}{c_{u,i}(p_{u,i}-x_u \cdot y_i^\top)^2 + \lambda\left(\sum_u\|x_u\|^2 + \sum\|y_i\|^2\right)}
$$

Here, $x_u$ and $y_i$ are latent factor vectors for users and items, respectively. Unlike explicit rating MF, the implicit preference matrix has *no missing values*, making optimisation heavier but better aligned with implicit feedback signals.

## Modelling Approaches

1.  Binary Preference Models
    -   Treat observed interactions as positive signals.
    -   Treat missing interactions as *unknown* rather than negative.
2.  Weighted Matrix Factorisation
    -   Converts interactions into preference + confidence matrices.
    -   Weights interactions by strength (e.g., $c_{u,i} = 1 + \alpha \cdot r_{u,i}$).
    -   Implemented with ALS and a weighted cost function.
3.  Bayesian Personalised Ranking (BPR)
    -   Reformulates recommendation as a ranking problem.
    -   Uses pairwise comparisons $(u,i,j)$ to maximise ranking rather than rating prediction.
        $$
        \max \sum_{u,i,j} \ln \sigma (p_u \cdot q_i^\top - p_u \cdot q_j^\top)
        $$
    -   Especially effective for top-N recommendations.
    -   Differs from weighted MF, BPR directly optimises **ranking order**, not rating reconstruction.

## Strengths and Weaknesses

**Strengths**

1.  Abundant and automatically collected data
2.  Reflects natural user behaviour
3.  Enables large-scale personalised recommendations

**Weaknesses**

1.  Ambiguous: not all signals indicate preferences
2.  Biased by exposure and popularity
3.  Hard to interpret compared to explicit ratings
