<h1 style="color: #ccc">Knowledge Graph Embedding</h1>

# Sentiment Analysis with Logistic Regression

*Sep 29, 2021*

## Knowledge Graph Embeddings

1.  An overview of graph embedding techniques

    KG embedding (KGE) techniques represent entities and relationships in a KG as low-dimensional vectors in a continuous space. These embeddings preserve the structural and semantic properties of the graph, making them scalable for large datasets. KGE is widely used in machine learning tasks, such as link prediction, entity classification, and clustering, by facilitating efficient representation learning.

### Translational Distance Models

These models treat relationships as translations in the embedding space.

1.  SE (Structured Embeddings) (Bordes et al., 2011)

    Represents entities as vectors and relations as matrices, optimising a margin-based ranking loss function.

2.  TransE* (Borders et al., 2013)

    Models relationships as vector translations but struggles with complex relations like one-to-many.

3.  TransH (Wang et al., 2014)

    Projects entities onto a relation-specific hyperplane to better handle one-to-many relations.

4.  TransR*/TransD (Lin et al., 2015; Ji et al., 2015)

    Uses separate entity and relation spaces to capture richer semantics.

5.  KG2E (He et al., 2015)

    Extends TransE by modelling entities and relations as Gaussian distributions to incorporate uncertainty.

6.  RotatE (Sun et al., 2019)

    Represents relations as rotations in complex space to capture symmetry, inversion, and composition.

### Semantic Matching Models

These models use similarity-based scoring functions.

1.  DistMult (Yang et al., 2014)

    Uses a bilinear diagonal matrix for entity interactions but fails to model asymmetric relations.

2.  ComplEx (Trouillon et al., 2016)

    Extends DistMult to complex numbers to capture asymmetric relations.

3.  HolE (Nickel et al., 2016)

    Uses circular correlation to encode compositional interactions between entities and relations.

4.  Analogy (Liu et al., 2017)

    Enforces analogical properties in KGEs.

5.  SimplE (Kazemi & Poole, 2018)

    Extends CP decomposition by explicitly modelling inverse relations.

### Neural Network-Based Models

These models use deep learning to learn embeddings.

-   Automatically learn features from data.

1.  GCN (Graph Convolutional Network) (Kipf & Welling, 2017)

    Generalises CNNs to graph-structured data for node classification and link prediction.

2.  GAT (Graph Attention Network) (Velickovic et al., 2018)

    Uses attention mechanisms to assign different weights to node neighbours.

3.  ConvE* (Dettmers et al., 2018)

    Applies convolutional layers to capture entity-relationship interactions.

4.  R-GCN (Relational Graph Convolutional Network) (Schlichtkrull et al., 2018)

    Aggregates information from neighbours using message passing in relational graphs.

5.  KBGAT (Knowledge Graph Attention Network) (Nathani et al., 2019)

    Enhances entity-relation modelling using attention-based graph neural networks.

6.  GraphSAGE (Hamilton et al., 2017)

    Uses inductive learning by sampling node neighbourhoods for scalable embedding learning.

7.  CompGCN (Compositional Graph Convolutional Network) (Vashishth et al., 2020)

    Integrates relational information directly into graph convolutions.

### Tensor Factorisation Models

These models decompose the adjacency tensor of the KG.

1.  RESCAL (Nickel et al., 2011)

    Uses matrix factorisation to capture pairwise entity interactions

2.  TuckER (Balazevic et al., 2019)

    Applies Tucker decomposition for expressive KGEs.

### Random Walk and Graph-Based Models

These methods exploit graph structures.

1.  DeepWalk (Perozzi et al., 2014)

    Uses random walks and Word2Vec to learn node embeddings.

2.  Node2Vec (Grover & Leskovec, 2016)

    Enhances DeepWalk with flexible BFS/DFS-like walk strategies.

3.  HOPE, LINE, PTransE

    Various methods using graph proximity and path-based relations.

### Transformer-Based Models

Recent methods leverage transformers for KGE.

1.  BERT-based KG Embeddings

    Uses transformer models like BERT to encode KG triples.

2.  KG-BERT (Yao et al., 2019)

    Fine-tunes BERT on triple classification tasks for KGs.

3.  KEPLER (Wang et al., 2021)

    Integrates KGEs into pretrained language models (PLMs).

4.  Graph-BERT, CoKE

    Leverages self-attention for KG representation learning.

### Hyperbolic and Geometric Models

These models use curved spaces to capture hierarchical structures.

1.  Poincare Embeddings (Nickel & Kiela, 2017)

    Embeds entities in hyperbolic space to model hierarchical structures.

2.  MuRP, RotE, RotH

    Extends hyperbolic embeddings with rotations and manifold techniques.

3.  BoxE (Abboud et al., 2020)

    Uses high-dimensional boxes to represent complex relational patterns.

### Summary of KGE Models

Transitional Distance Models

| Model | Symmetry | Asymmetry | Antisymmetry | Inversion | 1-N | N-1 | N-M | Composition | Transitivity |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
|SE|✗|✗|✗|✗|✗|✗|✗|✗|✗|
|TransE|✗|✓|✓|✓|✓|✓|✓|✓|✗|
|TransH|✗|✓|✓|✓|✓|✓|✓|✓|✗|
|TransR|✓|✓|✓|✓|✓|✓|✓|✓|✗|
|RotatE|✓|✓|✓|✓|✓|✓|✓|✗|✓|

Semantic Matching Models

| Model | Symmetry | Asymmetry | Antisymmetry | Inversion | 1-N | N-1 | N-M | Composition | Transitivity |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
|DistMult|✓|✗|✗|✓|✓|✓|✓|✓|✗|
|ComplEx|✓|✓|✓|✓|✓|✓|✓|✓|✗|

Neural Network-Based Models

| Model | Symmetry | Asymmetry | Antisymmetry | Inversion | 1-N | N-1 | N-M | Composition | Transitivity |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
|R-GCN|✗|✗|✗|✗|✗|✗|✗|✗|✗|
|ConvE|✗|✓|✗|✗|✗|✗|✗|✓|✗|
|KBGAT|✓|✓|✓|✓|✓|✓|✓|✓|✗|
|CompGCN|✓|✓|✓|✓|✓|✓|✓|✓|✗|

Tensor Factorisation Models

| Model | Symmetry | Asymmetry | Antisymmetry | Inversion | 1-N | N-1 | N-M | Composition | Transitivity |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
|TuckER|✓|✓|✓|✓|✓|✓|✓|✓|✗|

Transformer-Based Models

| Model | Symmetry | Asymmetry | Antisymmetry | Inversion | 1-N | N-1 | N-M | Composition | Transitivity |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
|KG-BERT|✗|✓|✗|✗|✗|✗|✗|✓|✗|
|KEPLER|✗|✓|✗|✗|✗|✗|✗|✓|✗|

Hyperbolic and Geometric Models

| Model | Symmetry | Asymmetry | Antisymmetry | Inversion | 1-N | N-1 | N-M | Composition | Transitivity |
|:---|:---|:---|:---|:---|:---|:---|:---|:---|:---|
|Poincare|✓|✓|✓|✓|✗|✗|✗|✗|✗|
|MuRP|✓|✓|✓|✓|✗|✗|✗|✗|✗|
|BoxE|✓|✓|✓|✓|✗|✗|✗|✗|✗|

### Choosing the Right KGE Models

Selecting the appropriate KGE method depends on the structure of the knowledge graph, the types of relationships present, and the specific task requirements. Different models are optimized for different graph characteristics, as shown in the following table:

| Scenario | Recommended Models |
|:---|:---|
| Simple and Sparse Graphs | TransE, TransR |
| Asymmetric Relations | RotatE, ComplEx |
| Complex Relations | ConvE, RotatE |
| Multi-Relational Graphs | R-GCN, RESCAL |
| Hierarchical Graphs | Hyperbolic Embeddings, BoxE |
| Rich Semantics | KG-BERT, KEPLER |
| Small-scale Graphs | RESCAL, TransH |
| Large-scale Graphs | TransE, DistMult (efficient models) |
### Translational Distance Models

1.  Translation-based models represent relationships as translation vectors in an embedding space.

    -   TransE models relationship by assuming $h+r\approx t$, where $h$, $r$, and $t$ are the embeddings of the head, relation, and tail, respectively.
    -   TransH extends TransE by projecting entities onto relation-specific hyperplanes, enhancing the model's ability to capture complex relationships.
    -   TransR/TransD map entities and relations into separate vector spaces, improving the representation of diverse relation types.

#### TransE (Bordes et al., 2013)

1.  Concept

    TransE represents relationships as translations in a vector space. Given a head entity $h$ and a relation $r$, the model predicts the tail entity $t$ such that:

    $$
    h+r\approx t
    $$

2.  Scoring function

    The model evaluates a triplet $(h,r,t)$ using the function:

    $$
    f_r(h,t)=-\|h+r-t\|
    $$

    A higher score (i.e., lower distance) indicates a stronger relationship.

3.  Advantages

    -   Used for knowledge graph completion (KGC) by modelling relations as translations.
    -   Supports some compositional reasoning, aiding in multi-hop path queries.
    -   Unlike DistMult, which struggle with asymmetric relations, TransE is better suited for path-based queries.

4.  Limitations

    -   Struggles with one-to-many and many-to-many relations.
    -   Cannot model symmetric relations due to its directional nature.
    -   Embedding overlap can reduce entity separation.
    -   Oversimplifies large knowledge graphs, limiting expressiveness.

#### TransH (Wang et al., 2014)

1.  Concept

    TransH extends TransE by introducing relation-specific hyperplanes instead of simple vector translation. Each relation $r$ is associated with:

    -   A normal vector $w_r$, defining the hyperplane's orientation.
    -   A translation vector $d_r$, which translates entities in the projected space.

    Entities are first projected onto the hyperplane before translation:

    $$
    h_\perp=h-w^\top_rhw_r,\quad t_\perp=t-w^\top_rtw_r
    $$

    This removes components along $w_r$, ensuring relation-specific geometry.

2.  Projection explanation

    -   The inner product $w^\top_rh$ extracts the component of $h$ along $w_r$.
    -   Scaling by $w_r$ reconstructs this component as a vector.
    -   Subtraction removes this component, yielding $h_\perp$ in the hyperplane.

    The same process applies to $t$.

3.  Translation in projected space

    After projection, translation occurs as:

    $$
    h_\perp+d_r=t_\perp
    $$

    Each relation defines its own geometric space, preventing entities from assuming identical roles across all relations.

4.  Scoring function

    The model evaluates a triplet $(h,r,t)$ using the function:

    $$
    f_r(h,t)=-\|h_\perp+d_r-t_\perp\|
    $$

    A higher score (i.e., lower distance) indicates a stronger relationship.

5.  Advantages over TransE

    -   Handles complex relations<br>
        Supports one-to-many and many-to-many relationships, which TransE struggles with.
        (one-to-many, many-to-many).
    -   More expressive<br>
        Entities can take on different roles in different relations, improving flexibility.
    -   Relation-specific entity representations
        Entities are projected differently based on the relation, avoiding rigid global embeddings.

6.  Limitations

    -   Higher computational cost due to projections.
    -   Struggles with complex relations beyond linear translation.
    -   Performance depends on effective hyperplane learning.

#### Hyperplane

1.  A hyperplane in an $n$-dimensional space is an $(n-1)$-dimensional surface defined by:

    $$
    w^\top x+b=0
    $$

    where:

    -   $w$ is the normal vector to the hyperplane,
    -   $x$ is any point on the hyperplane,
    -   $b$ is the bias term.

2.  In 2D, this equation reduces to that of a line:

    $$
    w_1x+w_2y+b=0
    $$

    Solving for $y$:

    $$
    y=-\frac{w_1}{w_2}x-\frac{b}{w_2}
    $$

    Comparing with the slope-intercept form $y=mx+c$, we see that a 2D hyperplane is simply a straight line, where $m=-\frac{w_1}{w_2}$ and $c=-\frac{b}{w_2}$.

#### TransR (Lin et al., 2015)

1.  Concept

    TransR extends TransE and TransH by introducing relation-specific spaces for entity representation. Unlike TransE, which assumes all entities and relations exist in the same vector space, TransR projects entities into a relation-specific space before applying translation. This makes it more effective at modelling complex and diverse relations.

    Given a triplet $(h,r,t)$, TransR defines:

    -   A general entity space where entities are represented.
    -   A relation-specific space where each relation $r$ has an associated projection matrix $M_r$.
    -   Entities are first projected into the relation space before performing translation.

    Mathematically, the projections of entities $h$ and $t$ into the relation-specific space are:

    $$
    h_r=M_rh,\quad t_r=M_rt
    $$

    Then, the standard TransE translation occurs:

    $$
    h_r+r\approx t_r
    $$

    This enables TransR to model diverse types of relations more effectively than TransE or TransH.

2.  Scoring function

    The model evaluates a triplet $(h,r,t)$ using the function:

    $$
    f_r(h,t)=-\|h_r+r-t_r\|
    $$

    A higher score (i.e., lower distance) indicates a stronger relationship.

3.  Advantages over TransE and TransH

    -   More expressive<br>
        Since each relation has its own projection space, entities can behave differently under different relations.
    -   Handles complex relations better<br>
        TransE struggles with one-to-many, many-to-many, and symmetric relations, whereas TransR can represent these more effectively.
    -   Avoids rigid entity embeddings<br>
        Instead of a single embedding for an entity, TransR adapts entity representations based on the relation context.

4.  Limitations

    -   Higher computational cost<br>
        The need to compute relation-specific projections makes it computationally expensive compared to TransE and TransH.
    -   Projection matrix learning<br>
        The model's performance depends on effectively learning the relation-specific matrices $M_r$.
    -   Still assumes linear translation<br>
        While more flexible than TransE, TransR still assumes that relations are best modelled as translations, which may not always hold for complex relationships.

5.  Applications

    -   Knowledge graph completion (KGC)<br>
        Predict missing links in KG by ranking candidate entities.
    -   Reasoning over multi-hop paths<br>
        Supports more accurate inference in multi-step reasoning tasks.
    -   Relation-specific entity representation<br>
        Allows entities to play different roles in different relations, improving tasks like entity disambiguation.

#### Summary of TransE, TransH and TransR

1.  A summary of different translation-based models

    | Feature | TransE | TransH | TransR |
    |:---|:---|:---|:---|
    | Concept | Represents relationships as translations in a vector space | Introduces relation-specific hyperplanes for translation | Introduces relation-specific spaces for translation |
    | Relation Modelling | Global vector space for all relations | Hyperplane projection for each relation | Relation-specific projection matrices |
    | Translation | Approximate | Exact | Approximate |
    | Computational Cost | Low | Moderate | High |
    | Suitability | Simple relational structures | Moderate complexity, multiple roles per entity | High complexity, diverse relational structures |

### Tensor Factorisation Models

1.  These models decompose a large matrix of KG triplets into smaller embedding matrices.

    -   RESCAL<br>
        Uses a bilinear model with full-rank matrices to capture pairwise interactions.
    -   DistMult<br>
        A simplified version of RESCAL that uses diagonal matrices, making it efficient but limited to symmetric relations.
    -   ComplEx<br>
        Extends DistMult by incorporating complex numbers, enabling the modelling of asymmetric relations.

#### RESCAL (Nickel et al. 2011)

1.  Introduction

    RESCAL is an early and influential factorisation-based model for knowledge graph embedding (KGE). Introduced by Maximilian Nickel et al. in 2011, it models relationships using tensor factorisation.

2.  Concept

    RESCAL represents a knowledge graph (KG) as a three-way adjacency tensor $\mathcal{X}\in\mathbb{R}^{n\times n\times m}$, where:

    -   Entities are represented as vectors.
    -   Relations are represented as square matrices.

    This structure enables RESCAL to model pairwise interactions between entities for each relation.

3.  Mathematical formulation

    A KG consists of triplets $(h,r,t)$, where $h$ and $t$ are entities and $r$ is a relation. RESCAL factorises the adjacency tensor $\mathcal{X}$ as:

    $$
    X_r\approx AR_rA^\top
    $$

    where:

    -   $n$ is the number of entities.
    -   $m$ is the number of unique relations in the KG.
    -   $r\in\{1,\cdots,m\}$ is one of the $m$ relations in KG.
    -   $d$ is the embedding dimension.
    -   $A\in\mathbb{R}^{n\times d}$ is the entity embedding matrix, where each row represents an entity in a $d$-dimensional space.
    -   $R_r\in\mathbb{R}^{d\times d}$ is the full-rank relation matrix for relation $r$, capturing pairwise dependencies between latent features.
    -   $X_r\in\mathbb{R}^{n\times n}$ is the adjacency matrix for relation $r$, where $X_r(i,j)=1$ if $(e_i,r,e_j)$ holds, and zero otherwise.

    The score function for a triplet $(h,r,t)$ is given by:

    $$
    f(h,r,t)=h^\top R_rt
    $$

    where:

    -   $h,t\in\mathbb{R}^d$ are the entity embeddings.
    -   $R_r$ is the relation matrix for relation $r$.

4.  Advantages

    -   Captures complex interactions<br>
        The full-rank relation matrix $R_r$ models dependencies between entity features.
    -   Effective for multi-relational graphs<br>
        Unlike simpler models (e.g., TransE), RESCAL can handle multiple relationships between the same entities.
    -   Efficient factorisation<br>
        Factorising the adjacency tensor provides a structured way to learn representations.

5.  Limitations

    -   High computational cost<br>
        Each relation matrix $R_r$ is a dense $d\times d$ matrix, leading to $O(md^2)$ memory usage and $O(nd^2)$ computation per relation.
    -   Risk of overfitting<br>
        The large number of parameters requires regularisation techniques to mitigate overfitting.
    -   Scalability challenges<br>
        Large KGs with many relations can slow down training due to quadratic complexity in $d$.

### Semantic Matching Models

#### DistMult (Yang et al., 2014)

1.  Introduction

    DistMult, introduced by Yang et al. (2025), is a simplified version of RESCAL that constrains relation matrices to be diagonal. This reduces computational complexity while maintaining effectiveness in many knowledge graph embedding (KGE) tasks.

2.  Concept

    DistMult represents a knowledge graph (KG) as a set of triplets $(h,r,t)$, where:

    -   Entities $(h,t)$ are represented as vectors.
    -   Relations $(r)$ are represented as diagonal matrices, reducing interactions to element-wise multiplications.

    This diagonal restriction simplifies computations but limit expressiveness.

3.  Mathematical formulation

    The score function of a triplet $(h,r,t)$ is:

    $$
    f(h,r,t)=h^\top\operatorname{diag}(r)t
    $$

    Since $\operatorname{diag}(r)$ is a diagonal matrix, the function simplifies to:

    $$
    f(h,r,t)=\sum_{i=1}^{d}h_ir_it_i
    $$

    This means each embedding dimension interacts only with its corresponding dimension in the relation vector.

4.  Advantages

    -   Efficient<br>
        Reduces complexity from $O(d^2)$ (RESCAL) to $O(d)$.
    -   Fewer parameters<br>
        Relations are stored as vectors instead of full matrices, reducing memory usage and overfitting risks.
    -   Scalable<br>
        Efficient for handling large KGs.

5.  Limitations

    -   Cannot model asymmetric relations<br>
        Since $f(h,r,t)=f(t,r,h)$, DistMult fails to distinguish asymmetric relations (e.g., "bornIn", vs. "parentOf").
    -   Limited expressiveness<br>
        The diagonal constraint prevents capturing complex interactions between entities.
    -   Weak in mul-relational settings<br>
        Struggles with diverse relation types compared to models like TransE, RotatE, or ComplEx.

#### ComplEx (Trouillon et al., 2016)

1.  Introduction

    ComplEx, introduced by Trouillon et al. (2016), extends DistMult by using complex-valued embeddings to model both symmetric and asymmetric relations in knowledge graphs (KGs). This enhances expressiveness while maintaining computational efficiency.

2.  Concept

    ComplEx represents entities and relations as complex-valued vectors. Unlike DistMult, which is limited to symmetric relations due to element-wise multiplication, ComplEx introduces imaginary components, enabling directional (asymmetric) interactions.

3.  Mathematical Formulation

    A KG consists of triplets $(h,r,t)$, where:

    -   $h,t\in\mathbb{C}^d$ (entities as complex vectors)
    -   $r\in\mathbb{C}^d$ (relations as complex vectors)

    The score function is:

    $$
    f(h,r,t)=\operatorname{Re}\left(\langle h,r,\overline{t}\rangle\right)=\operatorname{Re}\left(\sum_{i=1}^dh_ir_i\overline{t_i}\right)
    $$

    -   $\operatorname{Re}(\cdot)$ extracts the real part.
    -   $\overline{t_i}$ is the complex conjugate of $t_i$.
    -   This formulation allows $f(h,r,t)\neq f(t,r,h)$, since

        $$
        \operatorname{Re}\left(\langle h,r,\overline{t}\rangle\right)\neq\operatorname{Re}\left(\langle t,r,\overline{h}\rangle\right)
        $$

        enabling asymmetric relation modelling.

4.  Advantages

    -   Models asymmetric relations using complex embeddings and conjugate operations.
    -   Efficient and scalable with $O(d)$ complexity, similar to DistMult.
    -   Captures both symmetric and asymmetric relations, generalising DistMult.

5.  Limitations

    -   Lower interpretability due to complex-valued embeddings.
    -   Less expressive compared to full tensor factorisation methods like RESCAL.

### Summary

1.  Summary

    | Feature | RESCAL | DistMult | ComplEx |
    |:---|:---|:---|:---|
    | Relation Matrix | Full | Diagonal | Complex |
    | Complexity<br>(per relation) | $O(d^2)$ | $O(d)$ | $O(d)$ |
    | Asymmetry | Yes | No | Yes |
    | Expressiveness | High | Moderate | Moderate |

### Neural Network-Based Models

#### ConvE (Dettmers et al., 2018)