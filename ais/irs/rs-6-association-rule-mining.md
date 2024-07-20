<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Association Rule Mining

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
  <span class="value">2025-07-17</span>
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

1.  **Support**: Frequency of ($A$ and $B$) occurring together
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
StarWars → [StarTrek, TheMatrix, Dune, ...] // a list in descending order of co-occurrence or confidence
```
