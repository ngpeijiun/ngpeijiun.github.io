<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Content-Based Recommenders

>   A user will like new items that are similar in content to items they liked before.

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
    <span class="value">2025-08-12</span>
</div>

## Overview

Content-Based Recommender Systems (CBRS) aim to recommend items similar to those a user has previously liked. They rely solely on **item features** and **user preferences**, without requiring data from other users.

## Key Components

1.  **Content Analyser**

    Extracts structured descriptions or features from product data, which may include:

    -   **Structured metadata**: e.g., movie genre, length, year, director
    -   **Unstructured text**: product descriptions, reviews

    Techniques:

    -   Use existing structured data from manufacturers.
    -   Apply **text mining** to extract features.

2.  **Profile Learner**

    Build a user profile by:

    -   Recording past interactions (e.g., items clicked, watched, or rated)
    -   Generalising into a vector of preferences

3.  **Filtering Engine**

    Matches the **user vectors** with **product vectors** and rank the results by **similarity**.

## Methods for Content-Based Recommendations

Content-based recommenders can use two main similarity-based approaches:

1.  **Instance-Based Similarity** (item-item)

    (*as covered in Similarity-Based Recommendation*)

    -   Compares each candidate item directly to the individual items the user has liked.
    -   Finds the **nearest neighbours** for each liked item and recommends them.
    -   Pros: Transparent ("*Because you liked...*"), easy to explain.
    -   Cons: May overfit to a narrow subset of the catalogue.

2.  **Profile-Based Similarity** (user-item)

    -   Aggregates all items the user liked into a single **prototype vector** (e.g., average of feature vectors).
    -   Compares this prototype vector to all candidate items.
    -   Pros: Captures the *overall preference pattern*; more generalised matching.
    -   Cons: May dilute unique tastes if the user's interests are diverse.

## Similarity & Distance Measures

### Consine Similarity

$$
\operatorname{sim}(A,B) = \frac{A \cdot B}{\|A\|\|B\|}
$$

1.  Focuses on direction of vectors, ignoring magnitude, not scaling sensitive.
2.  Ideal for high-dimensional data (e.g., text).
3.  Range: $[-1,1]$ (or $[0,1]$ if all components are non-negative).

### Euclidean Distance

$$
\operatorname{dist}(A,B) = \|A-B\| = \sqrt{\sum^n_{i=1}{(A_i-B_i)^2}}
$$

1.  Measures absolute magnitude difference.
2.  Convert to similarity using:

    $$
    \operatorname{sim}(A,B) = \frac{1}{1 + \operatorname{dist}(A,B)}
    $$

    -   Focuses on absolute magnitude difference, scaling sensitive.
    -   Range: $(0,1]$

## Text-Based Feature Extraction

When structured features are unavailable, use text mining techniques such as TF-IDF weighting, which assigns higher weight to rare but informative terms.

## Real-World Examples

**Best Buy**

1.  Simplest: Count `query → SKU` clicks and recommend most clicked.
2.  Better: Use text mining techniques to extract features from queries and match with product descriptions using similarity.

**Pandora**

1.  Human experts annotated songs with 450+ features (genre, rhythm, etc.).
2.  Use binary classifiers to predict user-song match.
3.  Helps promote long-tail music (unpopular but relevant).

## Serendipity in Content-Based Filtering

Problem: Over-specialisation&mdash;recommending the same type of items repeatedly.

Goal: Enhance **exploration** and discover *interesting surprises*.

Solutions:

1.  Introduce **randomness**:
    -   Completely random items
    -   Random pick from top-K similar items
2.  Filter out overly similar items (above *similarity threshold*).

## Summary

1.  Strengths<br>
    No need for other users' data; no cold start for items.
2.  Limitations<br>
    Narrow recommendations, overspecialisation.
3.  Techniques<br>
    Cosine similarity, feature vector matching.
4.  Enhancements<br>
    Serendipity, text mining, domain-specific features.

**Two Approaches**

| Approach | What's Compared | Strengths | Limitations |
|:---|:---|:---|:---|
| Instance-Based | Item ↔ Item | Transparent, specific | Narrow; may miss variety |
| Profile-Based | User ↔ Item | Capture general pattern | Can dilute unique tastes |
