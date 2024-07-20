<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Natural Language Processing

*Apr 8, 2025*

## Natural Language Understanding (NLU)

1.  Interprets user input by identifying:

    -   Intent → via Classification
    -   Slots → via Named Entity Recognition (NER)

### Intent Classification

1.  Classifies user input (sentence/document) into predefined intent categories using supervised learning.

    -   Preprocessing: Convert text into vectors.
        -   TF-IDF
        -   Embeddings
    -   Common Models
        -   k-Nearest Neighbours (kNN)
        -   Naive Bayes
        -   Decision Trees
        -   Logistic Regression
        -   Support Vector Machines (SVM)

2.  TF-IDF Vectorisation

    TF-IDF stands for Term Frequency-Inverse Document Frequency. It is a way to turn text into vectors based on how important each word is in a document relative to a collection of documents.

    You have a set of documents $D=\{d_1,d_2,\cdots,d_N\}$

    Term frequency for term $t$ in document $d$:

    $$
    \operatorname{tf}_{t,d}=\frac{n_{t,d}}{\sum_{k}{n_{k,d}}}
    $$

    where,

    -   $n_{t,d}$ is the number of times term $t$ appears in document $d$.
    -   $\sum_{k}{n_{k,d}}$ is the total number of terms in document $d$, summing over all terms $k$.

    Document frequency for term $t$:

    $$
    \frac{\operatorname{df}_t}{N}
    $$

    TF-IDF reflects the information content of a term&mdash;terms that are rare across documents but frequent in a specific document carry more information value. We can express TF-IDF using an entropy-like form for term $t$:

    $$
    \begin{aligned}
    w_{t,d}&=-\operatorname{tf}_{t,d}\cdot\log{\frac{\operatorname{df}_t}{N}}\\
    &=\operatorname{tf}_{t,d}\cdot\left(-\log{\frac{\operatorname{df}_t}{N}}\right)\\\
    &=\operatorname{tf}_{t,d}\cdot\log{\frac{N}{\operatorname{df}_t}}
    \end{aligned}
    $$

    Thus, we define inverse document frequency as:

    $$
    \operatorname{idf}_t=\log{\frac{N}{\operatorname{df}_t}}
    $$

    In summary:

    $$
    w_{t,d}=\operatorname{tf}_{t,d}\times\operatorname{idf}_t
    $$

    $$
    \operatorname{tf}_{t,d}=\frac{n_{t,d}}{\sum_{k}{n_{k,d}}}
    $$
    $$

    \begin{aligned}
    \operatorname{idf}_t&=\log{\frac{N}{\operatorname{df}_t}}
    \end{aligned}
    $$


### Named Entity Recognition (NER)

## Natural Language Generaion (NLG)

## Language Language Models (LLM)
