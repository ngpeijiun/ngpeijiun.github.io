<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Knowledge Discovery

*Mar 28, 2025*

## Reasoning from Data

### Expert Knowledge

1.  Core Concept

    Early reasoning systems like expert systems use explicit knowledge from human experts to answer user queries through a reasoning system.

2.  Knowledge Flow

    -   Expert → Knowledge Base<br>
        Knowledge is traditionally acquired from human experts (a difficult and time-consuming process).
    -   Knowledge Discovery<br>
        Modern systems discover knowledge from historical data via machine learning and statistical modelling.

3.  Reasoning System

    -   Takes questions from users.
    -   Uses the knowledge base and current data to infer answers.

4.  Examples of Knowledge Models

    -   Rules & Frames
    -   Knowledge Graphs
    -   Predictive Models
    -   Bayesian Networks
    -   Deep Neural Networks

5.  Knowledge Discovery in Database (KDD)

    The process of extracting useful patterns from data to support decision-making. Often used interchangeably with data mining.

### Machine Reasoning and Machine Learning

1.  Machine Reasoning (Symbolic)

    -   Applies reasoning on expert knowledge.
    -   Produces inferred knowledge.

2.  Machine Learning (Numeric)

    -   Learns patterns from training data.
    -   Generates induced models.
    -   Produces predictions.

3.  Integration

    -   Knowledge Extraction: Machine reasoning derives insights from learned models.
    -   Knowledge Transfer: Machine learning learns from the structured knowledge produced by reasoning.

### Reasoning Using Predictive Models

1.  Data is Essential

    The huge growth of data over recent years had led to, or enabled the success of deep learning.

2.  Predictive models use historical data to estimate future outcomes. Machine learning (ML) enables these models to generalise from past examples and answer forward-looking questions.

3.  Types of Predictive Models

    -   Linear Regression (numerical output)
    -   Logistic Regression (categorical output, classification models)
    -   Naive Bayes
    -   Nearest Neighbour
    -   Association Rules
    -   Decision Trees
    -   Random Forests
    -   Support Vector Machines
    -   Gradient Boosting Machines
    -   Bayesian Networks
    -   Neural Networks

4.  ML Lifecycle

    -   Business Understanding
    -   Data Collection
    -   Data Processing
        -   Data Integration: Combine datasets into a consistent format.
        -   Data Cleaning: Handle missing values, remove duplicates, correct inconsistencies.
        -   Data Balancing: Address skewed class distribution (e.g., resampling, techniques).
    -   Exploratory Data Analysis (EDA)
        -   Descriptive Statistics: Mean, median, standard deviation, distributions.
        -   Visual Analysis: Histograms, scatter plots, box plots to detect patterns and outliers.
        -   Correlation Analysis: Identifying relationships between variables.
        -   Target Leakage Detection: Ensuring no future information contaminates training data.
    -   Feature Engineering
        -   Construct new, more informative features, e.g., $\text{TotalCost}=\text{UnitPrice}\times \text{Quantity}$
        -   Feature Scaling (e.g., Standardisation, Min-Max Scaling, Log-Scaling)
    -   Encoding Categorical Values
        -   One-Hot Encoding: Convert categorical variables into binary format.
    -   Modelling
        -   A cleaned and fully numeric dataset ready for ML algorithms.
        -   Apply ML algorithms on the prepared dataset.
        -   Perform model training, tuning, and selection.
    -   Evaluation
        -   Assess model performance using metrics (e.g., accuracy, RMSE, AUC).
        -   Ensure the model is not just statistically good but fit for the real-world application.
    -   Deployment
        -   Deploy the model in production to support decisions or automate processes.
        -   Monitor performance and update as needed.

5.  A model can also serve as a representation of discovered knowledge, not just for prediction (e.g., insights from clustering or association rules).

### Reasoning Transparency and Explainability

1.  Some predictive models can be more easily understood than others:

    -   Decision Trees
    -   Association Rules
    -   Similarity-based Reasoning

2.  Decision Trees

    -   A decision tree is easily understood and is form of deductive reasoning.
    -   Raw trees are often too big to be understandable. Tree pruning can often improve accuracy by reducing overfitting, and also make the tree easier to understand.
    -   Trees can also be converted to a set of rules, making it easier to understand.

3.  Association Rules

    -   Things that frequently occur at the same time or in the same context can be mined to find associations.
    -   These associations can be represented as rules, each with an associated confidence level.
    -   Sort by Support or Confidence to see the most important rules.

4.  Similarity-based Reasoning

    -   Also called memory-based reasoning.
    -   Find the k most similar neighbours.
    -   Classification: Taking the majority vote.
    -   Regression: Averaging the k neighbours.
    -   Larger k suppresses effect of noise, makes classification boundary less distinct, and reduce overfitting.
    -   Normaling the data improve its accuracy dramatically.
    -   Decisions are explainable.
    -   Faster predictions can be made by pre-loading the data into efficient data structures, e.g., k-d tree, ball tree.

## Recommender Systems

1.  Big issues for recommender systems:

    -   Data Sparsity
    -   The Cold Start Problem

2.  Main approaches:

    -   Popularity-based: Simple, non-personalised, recommend best selling, top-rated, trending items, good for cold-start (new) users.
    -   Market Basket Analysis: Recommend items that are often bought or viewed at the same time as the product you are currently viewing.
    -   Content-based Filtering: Recommend items similar to those you have already bought or viewed.
    -   Collaborative Filtering: Recommend what people similar to you buy or like.

### Market Basket Analysis

1.  Items that occur together are called an item-set.

2.  If an item-set has a large count, then there is a potential association between the items in the item set.

3.  Co-occurrence Counting

    -   A simple approach to MBA is to cross-tabulate into a symmetric table to show how often each possible pair of products were bought together.
    -   Pairwise co-occurrence, a dictionary may suffice:
        ```python
        StarWars -> [StarTrek, TheMatrix, Dune, ...] # a list in descdening order of co-occurrence
        ```

4.  Association Rules

    -   Co-occurrence is not practical for large datasets.
    -   Apriori algorithm can find associations between multiple items, they use heuristics to reduce the combinatorial size of the search space.
    -   Association rules can have multiple items on the LHS or RHS.

5.  Association Rule Metrics

    -   Support: How frequently A and B appear together in the dataset.
        $$
        P(A\cap B)
        $$
    -   Confidence
        $$
        P(A\mid B) =\frac{P(A\cap B)}{P(A)}
        $$
    -   Lift
        $$
        \frac{P(A\cap B)}{P(A)\times P(B)}
        $$

        -   If lift = 1 then the probability of occurence of A and B are independent (no association).
        -   If lift &gt; 1, then positive correlation.
        -   If lift &lt; 1, then negative correlation.

6.  Recommending with Taxonomies

    -   No need to have all items at the same level
    -   Level should reflect importance
    -   Items should occur in approximately the same frequency, otherwise rules are dominated by the common items
    -   Hence, roll-up rare items to higher levels so they are more frequent; and break-down (drill-down into) very frequent items.

7.  Virtual Items

    -   Expand the scope of association mining from items / products to any category variable of interest, as virtual item into the basket.
    -   To find associations between purchased items and new customers, use "new_customer" as a virtual item.
    -   Include numerical concepts into the basket by discretised them: young_age, middle_age, senior_age.

8.  Sequence Mining

    -   Similar to association mining, but the order in which items are placed into the basket is important.
    -   Session-based recommender system: Many website browsing sessions are made by anonymous users, the only ID is the cookie ID. Hence storing historical data for the user is usually not possible.
    -   Clickstream Mining.
