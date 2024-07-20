Reinforcement Learning (RL)
• Online, incremental updates. As the agent steps through the environment it
– observes (sₜ, aₜ, rₜ, sₜ₊₁),
– immediately (or after a few steps) uses that signal to tweak its value‐function or policy parameters,
– carries those updated parameters forward into the very next step or episode.
• Although you “finish” an episode (trajectory) before checking global stopping criteria, learning never really pauses. Every time-step (or at least every episode) refines the agent’s behavior.

Genetic Algorithms (GA) or Evolutionary Strategies (ES)
• Batch (generational) updates. You
– sample a whole population of candidate solutions,
– run each candidate through the entire task till completion,
– compute its fitness,
– then—only once all candidates are evaluated—select/​recombine/mutate to produce the next generation.
• No parameter updates occur “mid‐trajectory.” All the learning (variation + selection) happens after you’ve seen complete solutions for the current generation.

Implications
• If you have only a single fitness score at the end, a GA or ES (evolution strategies) style approach may be very natural.
• If you can assign rewards (or costs) at each small step—or bootstrap partial estimates of future return—then RL methods (TD‐learning, Q-learning, policy gradients, actor-critic, …) can learn online and refine behavior incrementally.

---

When to use which
• Min–Max scaling
– Algorithms that require bounded input (e.g. neural nets with sigmoid/tanh)
– When you know the min/max in advance (e.g. image pixel data in [0,255])
– Distance-based methods (k-NN, k-means) when you want all features on the same [0,1] scale
• Standardization
– Algorithms assuming Gaussian-like input or that are scale-sensitive but don’t require a bounded range (e.g. PCA, logistic regression, SVM, linear models)
– When outliers are not extreme enough to dominate σ or when your data naturally follow a normal distribution

---

Purpose and Supervision
• PCA (Principal Component Analysis)
– Unsupervised
– Finds orthogonal directions (“principal components”) that capture maximal variance in the data.
– Good for reducing dimensionality when you don’t have class labels or when you care about global data structure.
• LDA (Linear Discriminant Analysis)
– Supervised
– Finds linear combinations of features that best separate two or more classes by maximizing the ratio of between-class to within-class scatter.
– You need labeled data; yields at most (C–1) dimensions for C classes.

• t-SNE (t-distributed Stochastic Neighbor Embedding)
– Unsupervised (but can use labels to color or guide)
– Nonlinear, probabilistic technique that seeks to preserve local neighborhood structure (high-dim points that are close stay close in low-dim).
– Primarily for visualization (2D/3D), not for downstream modeling or feature reduction beyond insight.

When to Use Which?
• PCA
– Quick exploration of variance structure
– Preprocessing (denoising) before clustering, regression, etc.
– Visualization beyond 2D/3D via scree plots.

• LDA
– Feature reduction when you have a classification task with labels
– Often used as a classifier itself (maximizes separation) or preprocessing for a downstream classifier.

• t-SNE
– Data exploration and visualization when you want to see cluster patterns or manifold structure.
– Beware: distances and global geometry aren’t preserved—two distant clusters may appear far but their spacing isn’t meaningful.

Summary
• If you need an unsupervised, fast, linear method that preserves global variance structure, pick PCA.
• If you have labels and want to project data to maximize class separation, use LDA.
• If you want a visually intuitive, nonlinear embedding that exposes local clusters (at the expense of interpretability and speed), choose t-SNE.

---

In naive bayes, when a feature is a continuous number, the Prob can be obtained by normal distribution, to calculate the mean and sigma, and apply distribution PDF function.

---

for kNN, Mahattan vs Hamming

---

Decision Tree, Tabular Data

Gini Index, the p^2 is the probability that two randomly chosen items belong to the same class (i.e., a measure of purity).

Strengths: feature selection, interpretability

---

SVM, only training example with alpha greater than 0 will be left as support vectors.

---

Normalisation is not required for decision tree, because the nodes can be split with original values of the feature. This characteristic also makes decision tree good for its interpretability by being able to see the decision split on original values.

For neural network, normalisation is necessary so that all features are having the values at similar range. Otherwise, features will large value will influence the its importance in the prediction.

For SVM, normalisation is necessary to adjust all input features to similar range, so that points are arranged in the higher dimension in the similar scale across all feature dimensions.

---

For k-NN, plot the training and validation accuracy with increase k values in Grid Search, and implement early stop to choose the k value when validation accuracy start to decrease.

For neural network, plot the training and validation accuracy for each epoch in training, and implement early stop when validation accuracy start to decrease.

For SVM, plot the training and validation accuracy with increase C values in Grid Search, and implement early stop to choose the C value when validation accuracy start to decrease.

---

Lagrange multiplier apha_i is important in SVM learning, because it determines which training examples are the support vectors, and which are not (alpha = 0 is not support vector). The lower the C value, the wider the separation margin and the more the number of support vectors, the higher the C value, the narrower the separation margin and the lesser the number of support vectors.

---

Chi-Squared should be under Supervised > Filter Methods > Statistical Method

---

Backward Feature Elimination is based on fitting accuracy and Recursive Feature Elimination is based on coef?

---

PCA -> too many categorical variable use MCA

Step 1: Convert categorical to continuous using MCA
Step 2: Proceed with PCA
