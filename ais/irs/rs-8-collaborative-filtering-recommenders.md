<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Collaborative Filtering Recommenders

>   People who behaved similarly in the past will behave similarly in the future.

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
    <span class="value">2025-08-26</span>
</div>

## Introduction

**Collaborative Filtering (CF)** is a widely used approach in recommender systems. It predicts a user's preferences by leveraging the preferences of other **similar users** or **similar items**.

1.  **User-Based CF**: Find users similar to the target user and recommend items they liked.
2.  **Item-Based CF**: Find items similar to those the user liked and recommend them.

## User-Item Ratings Matrix

The foundation of collaborative filtering is the **user-item ratings matrix**:

1.  Rows represent users.
2.  Columns represent items.
3.  Entries represent ratings&mdash;either **explicit** (directly given, e.g., stars or likes) or **implicit** (inferred from behaviours such as page views, clicks or purchases).

Challenges:

1.  **Sparsity**: Most entries are missing, since users typically rate only a small fraction of items.
2.  **Cold Start**: Difficult to make recommendations for new users (few ratings given) or new items (few ratings received).

## Measuring User Similarity

To recommend, we first measure similarity between users based on their ratings.

1.  **Cosine Similarity**

    $$
    \operatorname{sim}(A,B) = \frac{A \cdot B}{\|A\|\|B\|}
    $$

2.  **Euclidean Distance**

    $$
    \operatorname{dist}(A,B) = \|A-B\| = \sqrt{\sum_{i=1}^n{(A_i-B_i)^2}}
    $$

3.  **Pearson Correlation**

    User rating behaviours differ: some users are lenient raters (always high), others are strict raters (always low).

    **Pearson correlation** is similar to cosine similarity but removes rating bias by subtracting each user's mean rating from their individual ratings. Its value ranges from -1 to +1.

    Define mean-centred user vectors:

    $$
    u^\prime=(r_{u,i}-\bar{r}_u)_{i \in C}, v^\prime=(r_{v,i}-\bar{r}_v)_{i \in C}
    $$

    where,

    -   $u$ and $v$ are the users being compared.
    -   $u^\prime$ and $v^\prime$ are the mean-centred rating vectors, where each rating is adjusted by substracting the respective user's mean rating.
    -   $r_{u,i}$ is the rating given by user $u$ to item $i$.
    -   $\bar{r}_u$ is the average of user $u$.
    -   $i \in C$ are the items that both $u$ and $v$ have rated.

    Pearson Correlation (cosine-like form):

    $$
    \operatorname{corr}(u,v) = \frac{u^\prime \cdot v^\prime}{\|u^\prime\|\|v^\prime\|}
    $$

    In expanded form:

    $$
    \operatorname{corr}(u,v) = \frac{\sum_{i \in C}{(r_{u,i}-\bar{r}_u)(r_{v,i}-\bar{r}_v)}}{\sqrt{\sum_{i \in C}{(r_{u,i}-\bar{r}_u)^2}\sum_{i \in C}{(r_{v,i}-\bar{r}_v)^2}}}
    $$

## Handling Missing Values

1.  **Pairwise Complete**: Only use items rated by both users.
2.  **Impute as 0**: Assume missing values are zeros.

## User-Based Collaborative Filtering

User-based collaborative filtering predicts a user's rating for a target item by leveraging the ratings given by other users who have demonstrated similar preferences in the past.

**Prediction Formula**

For user $u$ and target item $i$:

$$
\hat{r}_{u,i} = \frac{\sum_{v \in N_i(u)}{ w_{u,v} \cdot r_{v,i} }}{\sum_{v \in N_i(u)}{ |w_{u,v}| }}
$$

-   $u$ is the target user.
-   $i$ is the target item.
-   $\hat{r}_{u,i}$ is the predicted rating of the user $u$ on item $i$.
-   $N_i(u)$ is the set of neighbours of $u$ who also rated item $i$.
-   $w_{u,v}$ is the similarity weight between users $u$ and $v$.
-   $r_{v,i}$ is the rating of user $v$ on item $i$.

### Normalisation Methods

1.  Z-Score Normalisation

    Z-score normalisation adjusts ratings by centring them on a user's mean rating and scaling by the user's rating standard deviation:

    $$
    z_{u,i} = \frac{r_{u,i}-\bar{r}_u}{\sigma_u}
    $$

    where,

    -   $u$ is the target user.
    -   $i$ is the target item.
    -   $z_{u,i}$ is the z-score normalised rating of user $u$ on item $i$.
    -   $r_{u,i}$ is the rating of user $u$ on item $i$.
    -   $\bar{r}_u$ is the mean rating of user $u$.
    -   $\sigma_u$ is the standard deviation of user $u$'s ratings.

    The predicted rating is then rescaled back to the user's original rating scale:

    $$
    \hat{r}_{u,i} = \bar{r}_u + \sigma_u \cdot \frac{\sum_{v \in N_i(u)}{w_{u,v}z_{v,i}}}{\sum_{v \in N_i(u)}{|w_{u,v}|}}
    $$

    -   $\hat{r}_{u,i}$ is the predicted rating of the user $u$ on item $i$.
    -   $N_i(u)$ is the set of neighbours of $u$ who also rated item $i$.
    -   $w_{u,v}$ is the similarity weight between users $u$ and $v$.
    -   $z_{v,i}$ is the z-score normalised rating of neighbour $v$ for item $i$.

    This approach is useful when users differ not only in their mean ratings but also in the variability of their ratings. However, it can sometimes produce predictions outside the valid rating range.

    After Z-score normalisation, cosine similarity is usually sufficient, since ratings are already mean- and variance-adjusted. In such cases, Pearson correlation offers little additional benefit.

### Scalability Issues

**Problems**

1.  User-based collaborative filtering struggles to scale in large systems.
2.  Frequent changes in user preferences require real-time similarity computation, which is costly.

**Solutions**

1.  Data Reduction: Use sampling or limit to popular items or active users.
2.  Item-Based Collaborative Filtering: More stable and scalable than user-based approaches.

**Case Study**

Amazon adopts item-based collaborative filtering. Item similarities are precomputed offline, allowing efficient and scalable real-time recommendations.

## Item-Based Collaborative Filtering

Item-based collaborative filtering predicts a user's rating for a target item by leveraging the ratings of similar items that the user has already used.

**Prediction Formula**

For user $u$ and target item $i$:

$$
\hat{r}_{u,i}=\frac{\sum_{j \in N_i(u)}{w_{i,j}} \cdot r_{u,j}}{\sum_{j \in N_i(u)}{|w_{i,j}|}}
$$

-   $u$ is the target user.
-   $i$ is the target item.
-   $\hat{r}_{u,i}$ is the predicted rating of the user $u$ on item $i$.
-   $N_i(u)$ is the set of neighbours of $i$ that have also been rated by user $u$.
-   $w_{i,j}$ is the similarity weight between items $i$ and $j$.
-   $r_{u,j}$ is the rating of user $u$ on item $j$.

### Adjusted Cosine Similarity

Similarity between items $i$ and $j$ can be measured using a variant of *Pearson correlation* that corrects for user rating bias by subtracting each user's mean rating before comparing items. This approach is commonly known in recommender systems as **adjusted cosine similarity**.

Define mean-centred item vectors:

$$
i^\prime=(r_{u,i}-\bar{r}_u)_{u \in U}, j^\prime=(r_{u,j}-\bar{r}_u)_{u \in U}
$$

-   $i$ and $j$ are the items being compared.
-   $i^\prime$ and $j^\prime$ are the mean-centred rating vectors, with each component showing how much user $u$ rated the items above or below their own average rating.
-   $r_{u,i}$ is the rating given by user $u$ to item $i$.
-   $\bar{r}_u$ is the average of user $u$.
-   $u \in U$ are the users who have rated both items $i$ and $j$.

The adjusted cosine similarity is then:

$$
\operatorname{sim}(i,j) = \frac{i^\prime \cdot j^\prime}{\|i^\prime\|\|j^\prime\|}
$$

This computes the cosine of the angle between the mean-centred item vectors $i^\prime$ and $j^\prime$.

-   If the value is close to $1$, items are strongly similar (liked/disliked by users in similar ways).
-   If close to $0$, no clear relationship.
-   If negative, users who liked one item tended to dislike the other.

In expanded form:

$$
\operatorname{sim}(i,j) = \frac{\sum_{u \in U}{(r_{u,i}-\bar{r}_u)(r_{u,j}-\bar{r}_u)}}{\sqrt{\sum_{u \in U}{(r_{u,i}-\bar{r}_u)^2}\sum_{u \in U}{(r_{u,j}-\bar{r}_u)^2}}}
$$

Other similarity measures such as cosine similarity and Euclidean distance may also applied.

## Example: Item-Based Recommendations

Consider Toby, who has rated a few movies. By combining his ratings with similarity scores between movies, we estimate his preference for unseen items.

**Process**

1.  Compute cosine similarities between candidate movies and the ones Toby has already rated.
2.  Multiply each rating by similarity (rating x similarity).
3.  Sum across all rated items and normalise by the total similarity.
4.  The highest predicted score corresponds to the best recommendation.

**Outcome**

Toby's predicted ratings suggest that the best recommendation is *Just My Luck*.

## User-Based vs. Item-Based Collaborative Filtering

The choice between user-based and item-based depends on dataset characteristics and application constraints.

**Computational Considerations**

1.  If `#users >> #items` → item-based CF is more efficient.
2.  If `#users << #items` → user-based CF may be preferable.
3.  For real-time recommendations (e.g., e-commerce), item-based is generally more practical due to item similarity stability over time.

User preferences change frequently and new users join all the time, making user-user similarities unstable and costly to update. In constrast, item characteristics and rating patterns remain relatively stable, so item-item similarities can be precomputed and reused efficiently, making them more suitable for real-time recommendations.

## Evaluating Accuracy of Predictions

To compare approaches, performance must be tested on held-out data.

**Procedure**

1.  Data Splitting: Partition the dataset into training and tests sets.
2.  Model Training: Use the training set to compute similarities and build the recommender.
3.  Prediction: Predict ratings for the test set.
4.  Evaluation Metric: Compare predictions to ground-truth ratings.

**Mean Absolute Error (MAE)**

$$
\operatorname{MAE} = \frac{\sum{|\text{actual rating}-\text{predicted rating}|}}{\text{\#test rating}}
$$

1.  Lower MAE indicates higher accuracy.
2.  Evaluation ensures fair comparison across different algorithms and similarity measures.
