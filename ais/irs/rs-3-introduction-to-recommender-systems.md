<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Introduction to Recommender Systems

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
    <span class="value">2025-07-29</span>
</div>

## What Are Recommender Systems?

Recommender systems are designed to assist users in making choices when the number of options is vast.

1.  Key Challenges: How to reason effectively when there are millions of possible outcomes (e.g., Amazon has 12M+ products).
2.  These systems are core to platform like Netflix, Amazon, YouTube, Grab, LinkedIn, Spotify, Airbnb, and Lazada.
3.  They are **critical revenue drivers**, enhancing **user experience**, **engagement**, and **conversion rates**.

## Importance & Impact

Case Study: Netflix

1.  80% of viewing time is driven by Netflix's recommender system.
2.  Estimated $1B/year in savings due to improved retention and reduced churn.

Netflix Prize

1.  Launched: 2006 with a $1M prize.
2.  Data: 100M movie ratings from 500,000 users on 17,000+ movies.
3.  Goal: Predict 3M unseen ratings; improve **RMSE (Root Mean Square Error)** by 10%.
4.  Winner: BellKor's Pragmatic Chaos (2009).

## Data Sources for Recommender Systems

1.  **Items**
    -   Objects to be recommended (e.g., books, videos, products).
2.  **Users**
    -   Demographics, goals, preferences (explicit or inferred).
3.  **Ratings**: Interactions between users and items.
    -   **Explicit**: e.g., 1-5 star ratings, agree/neutral/disagree.
    -   **Implicit**: e.g., clicks, views, watch time, purchases.
    -   **Text Comments**: user feedback or reviews.
    -   **Tags**: labels like "boring", "inspiring", "too long".
4.  **Context**: Additional conditions.
    -   User expertise level (e.g., is the user a beginner or advanced camera user?)
    -   Location-based filters (e.g., is the user looking for restaurant near their current location?)
    -   Device type or time of day

## Diversity Matters

Recommender systems typically return a list of suggestions, not just one item. These suggestions span multiple categories&mdash;such as literature, fitness gear, video content, beverages, or biographies&mdash;to support both user satisfaction and content discovery.

While accuracy is important, it is not sufficient on its own. Effective recommender systems strike a balance between **relevance** and **diversity**.

| | Low Relevance | High Relevance |
|:---|:---|:---|
| **Low Diversity** | Unhelpful | Repetitive |
| **High Diversity** | Unfocused | Balanced and engaging |

Aim for the ideal zone: recommendations that are both **relevant** and **diverse**.

## Big Issues for Recommender Systems

1.  **Data Sparsity**

    Most user-item interactions are missing, making it difficult to learn meaningful patterns from sparse matrices.

    -   Netflix: 98.8% of ratings are unknown
    -   Movielens: 95.7% of ratings are unknown

2.  **Cold Start Problem**

    Occurs when new users or new items have no prior interactions:

    -   Collaborative filtering cannot be applied.
    -   No reliable signals are available for personalisation.
