<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Decision Tree Rule Mining

>   Past decisions can be represented as rules; future decisions can be made by following similar rules.

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
    <span class="value">2025-07-19</span>
</div>

## Introduction

A **Decision Tree** is a popular machine learning model used to make decisions or predictions based on data. It resembles a *flowchart* and supports **deductive reasoning**.

1.  Commonly used for **classification** tasks.
2.  Intuitive and interpretable.
3.  Converts data into **if-then** rules.

## Decision Tree Structure

| Component | Description |
|:---|:---|
| Root Node | The starting point of the tree (first decision condition) |
| Decision Nodes | Internal nodes where attribute-based tests are performed |
| Leaf Nodes | End notes that provide the prediction or class label |

**Example: Should I accept a new job offer?**

1.  `salary ≥ $50,000?`
    -   **No** → Decline
    -   **Yes** → Continue
2.  `commute > 1 hour?`
    -   **Yes** → Decline
    -   **No** → Continue
3.  `offers free coffee?`
    -   **Yes** → Accept
    -   **No** → Decline

## Algorithms

Many algorithms can be used to construct decision trees from data:

1.  **ID3**, **C4.5**, **C5.0**
2.  **CART** (Classification and Regression Trees)
3.  **CHAID** (Chi-Squared Automatic Interaction Detection)

## Are Decision Trees Always Understandable?

1.  **Raw trees** can grow extremely large (e.g., 6000+ nodes) and become hard to interpret.
2.  **Tree pruning** helps reduce complexity:
    -   Improves **generalisation**.
    -   Reduces **overfitting**.
    -   Makes the model **easier to understand**.

## Tree Pruning

**Why Prune?**

1.  Overfitting happens when a tree perfectly fits training data but performs poorly on new data.
2.  Pruning can increase accuracy by *simplifying* the model.

**Accuracy vs. Tree Size**

1.  Accuracy increases with tree size up to a point (optimal size).
2.  Beyond that, additional complexity reduces performance.

**Pruning Methods**

| Method | Description |
|:---|:---|
| `max_depth`, `min_samples_split`, `min_samples_leaf` | Manually restrict growth. |
| `ccp_alpha` (Cost Complexity Pruning) | Penalise complexity with a regularisation parameter (e.g., `ccp_apha = 0.01`). |

## Rule Extraction from Trees

Decision trees can be converted into a **set of rules** by tracing each path from root to leaf.

**Example**

```
If Married-civ-spouse <= 0.5 and capital-gain <= 7669.5 then class: ≤50K
If Married-civ-spouse > 0.5 and education-num > 12.5 then class: >50k
```

**Advantages**

1.  **Readable** rules
2.  **Modular** logic (reusable and composable)
3.  Enables **rule set reduction** (e.g., by removing low-importance rules based-on *support*, *confidence*, or *lift*).
