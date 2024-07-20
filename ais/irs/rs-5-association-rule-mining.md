<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Association Rule Mining

>   Items that frequently occur together in the past are likely to occur together again in the future.

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
    <span class="value">2025-07-20</span>
</div>

## Introduction

**Association rule mining** identifies frequent patterns or co-occurences in data to uncover useful relationships between items. This technique is commonly used in:

1.  **Market Basket Analysis**
2.  **Recommender Systems**
3.  **Fraud Detection** (*high confidence, high lift, and low support*)
4.  **Cross-Sell and Up-Sell Insights**

## Key Concepts

**Association Rules**

1.  Format: `If A, then B`
2.  Examples
    -   If `user bought whisky`, then recommend `Coke`
    -   If `user watched Star Wars`, then recommend `Dune`

Rules are typically evaluated using:

1.  **Support**: Probability of ($A$ and $B$) occurring together
2.  **Confidence**: Probability of $B$ given $A$
3.  **Lift**: Measure of how much more likely $B$ is given $A$, compared to random chance

## Market Basket Analysis

**Market Basket Analysis (MBA)** analyses transactions to identify **frequent item-sets**&mdash;groups of items that commonly occur together in the same basket.

```
T1: frozen pizza, cola, milk
T2: milk, potato chips
T3: cola, frozen pizza
T4: milk, peanuts
T5: cola, peanuts
T6: cola, potato chips, peanuts
```

## Co-occurrence Matrix

A symmetrical matrix that captures how often item pairs occur together; the diagonal shows the total number of times each item was bought.

| | Pizza | Milk | Cola | Chips | Peanut |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Pizza** | 2 | 1 | 2 | 0 | 0 |
| **Milk** | 1 | 3 | 1 | 1 | 1 |
| **Cola** | 2 | 1 | 4 | 1 | 2 |
| **Chips** | 0 | 1 | 1 | 2 | 1 |
| **Peanut** | 0 | 1 | 2 | 1 | 3 |

1.  Pizza buyers always buy cola.
2.  But cola buyers do not always buy pizza.

To deploy pairwise co-occurrence as association rules, a simple dictionary structure may suffice.

```
StarWars → [StarTrek, TheMatrix, Dune, ...]
// a list in descending order of co-occurrence or confidence
```

## Rule Metrics

For a given rule:

$$
A\to B
$$

**Rule Support**

**Support** measures the probability of $A$ and $B$ occurring together:

$$
\text{Support}(A \cap B) = \frac{\text{Freq}(A \cap B)}{\text{Total transactions}}
$$

**Rule Confidence**

**Confidence** measures the probability of $B$ given $A$:

$$
\text{Confidence}(A \to B) = \frac{\text{Support}(A \cap B)}{\text{Support}(A)}
$$

Confidence is **direction-sensitive**.

**Rule Lift**

**Lift** measures likelihood of $B$ given $A$, or $A$ and $B$ occurring together, compared to random chance:

$$
\text{Lift}(A \cap B) = \frac{\text{Support}(A \cap B)}{\text{Support}(A) \times \text{Support}(B)}
$$

Interpretation:
-   $\text{Lift} > 1$: Positive association
-   $\text{Lift} = 1$: No association
-   $\text{Lift} < 1$: Negative association

Lift is not direction-sensitive.

## Apriori Algorithm

**Core Principle**

If an itemset is frequent, all of its subsets must also be frequent.

**Steps**

1.  Generate frequent 1-itemsets with support ≥ threshold.
2.  Generate frequent 2-itemsets from frequent 1-itemsets, then filter by support ≥ threshold.
3.  Generate frequent 3-itemsets from frequent 2-itemsets, then filter by support ≥ threshold.
4.  Repeat until no further frequent itemsets can be found.

**Efficiency**

1.  Uses **pruning** to skip supersets of infrequent itemsets that do not meet the support threshold.
2.  Implemented using tree-based or hash-based structures.

## Applications Beyond Retail

1.  Telecom: Bundling optional services
2.  Banking: Discovering cross-sell opportunities
3.  Insurance: Detecting unusual claim combinations
4.  Healthcare: Linking treatments to complications

## Deployment Example

**YouTube**

1.  Count co-viewed video pairs in session.
2.  Given a seed video, build seed-set using top-N co-occurrence.
3.  Personalised via history (watched/liked).
4.  Diversify via graph traversal (neighbouring videos).

**Ranking Criteria**

1.  **User-independent**: Ratings, view count
2.  **User-specific**: History
3.  **Diversification**: Avoid overfitting to one seed.

## Granularity

1.  **Coarse**

    Too little detail → trivial rules<br>
    *frozen pizza, chips, cola, milk*

2.  **Fine**

    Too much detail → rule explosion<br>
    *cheese pizza, tuna pizza, salami pizza, vegetable pizza, chips, cola, milk*

## Taxonomies

Products can be organised hierarchically (e.g., Frozen Food → Ice Cream → Vanilla → Haagen Das).

1.  **Roll-up** *rare items* to higher-level categories.

    If the customer buys a rare-item, roll up to a broader category to ensure the itemset meets support thresholds.

2.  **Drill-down** very *frequent items* for finer insights.

    If the customer buys a frequent item, drill down to more specific subcategories to uncover more informative patterns.

## Virtual Item

Add context as **virtual items**, such as *promotion type, time of day, store location, payment method, gender*.

**Example**

```
{sweater, jacket, new customer}
new customer and jacket → sweater

{outdoor jacket, middle-age, hiking boots}
outdoor jacket and middle-age → hiking boots
```

## Sequence Mining

Considers **order** of item occurrence.

1.  Useful in DNA mining, clickstream analysis,etc.
2.  Algorithms: Extended Apriori (e.g., SPADE)

**Session-Based Recommender Systems**

Many website browsing sessions are made by anonymous users identified only by a cookie ID. As a result, storing historical user data is usually not possible. Recommendations must therefore rely solely on the user's behavior within the current session.

**Example**

>   session1: **home**, **news**, **sport**, finance<br>
session2: finance, news<br>
session3: fashion, home, sport<br>
session4: news, finance, home<br>
session5: sport, home, finance<br>
session6: fashion, **home**, **news**, **sport**<br>
session7: **home**, finance, **news**, finance, **sport**

Frequent sub-sequence: **home** → **news** → **sport**

## Summary

Association rule mining is a powerful technique for uncovering relationships in data. It supports both static (unordered) and sequential (ordered) pattern discovery, with wide applications from retail and telecom to healthcare and video recommendations.
