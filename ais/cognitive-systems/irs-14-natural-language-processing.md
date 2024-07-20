<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Natural Language Processing

*Apr 27, 2025*

## Natural Language Understanding (NLU)

1.  Interprets user input by identifying:

    -   Intent → via Classification
    -   Slots → via Named Entity Recognition (NER)

### Intent Classification

1.  Classifies user input (sentence/document) into predefined intent classes using supervised learning.

    -   Preprocessing: Convert text into vectors.
        -   TF-IDF
        -   Embeddings
    -   Common Models
        -   k-Nearest Neighbours (kNN)
        -   Naive Bayes
        -   Decision Trees
        -   Logistic Regression
        -   Support Vector Machines (SVM)

2.  TF-IDF

    **TF-IDF** stands for **Term Frequency-Inverse Document Frequency**. It is a method for turning text into vectors by measuring how important a word is in a document relative to a collection of documents.

    Given a set of documents:

    $$
    D=\{d_1,d_2,\cdots,d_N\}
    $$

    **Term Frequency**

    The term frequency of a word $t$ in a document $d$ is:

    $$
    \operatorname{tf}_{t,d}=\frac{n_{t,d}}{\sum_{k}{n_{k,d}}}
    $$

    where,

    -   $n_{t,d}$ is the number of times term $t$ appears in document $d$.
    -   $\sum_{k}{n_{k,d}}$ is the total count of all terms in $d$.

    **Document Frequency**

    The document frequency of a term $t$ is the fraction of documents that contain $t$:

    $$
    \operatorname{df}_t=\frac{|{d\in D:t\in d}|}{N}
    $$

    where,

    -   $|{d\in D:t\in d}|$ counts how many documents contain term $t$.
    -   $N$ is the total number of documents.

    **Entropy-Like Formulation**

    To capture how informative a term is&mdash;meaning terms that are rare across documents but frequent in a specific one&mdash;we can express the weighting in an entropy-like form:

    $$
    \begin{aligned}
    w_{t,d}&=-\operatorname{tf}_{t,d}\cdot\log{\operatorname{df}_t}\\
    &=\operatorname{tf}_{t,d}\cdot\log{\frac{1}{\operatorname{df}_t}}
    \end{aligned}
    $$

    **Inverse Document Frequency**

    From this, we define the inverse document frequency as:

    $$
    \operatorname{idf}_t=\log{\frac{1}{\operatorname{df}_t}}
    $$

    **TF-IDF**

    Finally, the TF-IDF score for term $t$ in document $d$ is simply:

    $$
    w_{t,d}=\operatorname{tf}_{t,d}\times\operatorname{idf}_t
    $$

3.  TF-IDF Representation

    TF-IDF representation is a sparse vector that reflects how important a word is to a document relative to a larger corpus.

    **Vocabulary-IDF Mapping**

    First, compute the vocabulary and the associated IDF values from the corpus:

    $$
    \begin{bmatrix}
    t_1&\operatorname{idf}_1\\
    t_2&\operatorname{idf}_2\\
    \vdots&\vdots\\
    t_m&\operatorname{idf}_m\\
    \end{bmatrix}
    $$

    Each row maps a term (or token) to its corresponding IDF score.

    **Tokenisation**

    Preprocessing the input text by applying:

    -   Lowercasing
    -   Stemming/Lemmatisation
    -   Punctuation Removal
    -   Stopword Removal

    Extract the resulting set of clean tokens:

    $$
    \text{Tokens}=\{t_1,t_2,\cdots,t_T\}
    $$

    **Bag of Words**

    Construct the raw count vector (bag of words) by counting the frequency of each token based on the corpus vocabulary:

    $$
    \vec{c}=[\cdots,n_1,0,0,n_2,0,n_3,\cdots]
    $$

    where $n_i$ is the number of times token $t_i$ appears in the input.

    Most entries are zero since the input text typically uses only a small subset of the full vocabulary.

    **Term Frequency (TF) Vector**

    Normalise the raw counts by the total number of tokens to obtain the term frequency:

    $$
    \vec{\operatorname{tf}}=[\cdots,\operatorname{tf}_1,0,0,\operatorname{tf}_2,0,\operatorname{tf}_3 \cdots]
    $$

    where

    $$
    \operatorname{tf}_i=\frac{n_i}{\sum_k{n_k}}
    $$

    **TF-IDF Vector**

    Multiply each term frequency by its corresponding IDF value to get the TF-IDF weighted vector:

    $$
    \vec{v}=[\cdots,w_1,0,0,w_2,0,w_3,\cdots]
    $$

    where

    $$
    w_i=\operatorname{tf}_i\times\operatorname{idf}_i
    $$

4.  Embeddings

    Embeddings are dense vector representations of words or sentences that capture their **semantic** meaning based on context.

    **Word Embeddings**

    Each word is mapped to a dense vector, where semantically similar words lie close together.

    -   Word2Vec<br>
        <p style="color: #888">Learns vectors by predicting context (Skip-gram) or the target word (CBOW).</p>
    -   GloVe (Global Vectors for Word Representation)<br>
        <p style="color: #888">Factorises a word co-occurrence matrix to preserve global and local word relationships.</p>
    -   BERT (Bidirectional Encoder Representations from Transformers)<br>
        <p style="color: #888">Uses transformers to generate context-aware embeddings based on word usage.</p>

    Example

    >   "*king*" and "*queen*" are closer in vector space than "*king*" and "*banana*".

    **Sentence and Document Embeddings**

    Larger text units (sentences, paragraphs, documents) require aggregation or direct learning of embeddings.

    -   Averaging Word Embeddings<br>
        Simple but effective; ignores word order.
    -   Doc2Vec<br>
        Learns a unique vector per document; extends Word2Vec to capture document-level meaning.
    -   SentenceTransformer<br>
        Fine-tuned transformer models that generate fixed-size embeddings for full sentences.

    Example

    >   "*How are you?*" and "*What's up?*" are mapped to nearby vectors in the embedding space.

    **Summary**

    | Method | Purpose | Example Models |
    |:---|:---|:---|
    | Word Embeddings | Represent individual word meanings | Word2Vec, GloVe, BERT |
    | Sentence/Document Embeddings | Represent sentences or documents | Averaging, Doc2Vec, SentenceTransformer |

5.  Similarity-Based Intent Classification

    **Semantic Search**

    Semantic search classifies user intent by comparing the vector of a new input to vectors of known intents. The closest match in the vector space indicates the most likely intent.

    **Cosine Similarity**

    Cosine similarity measures the **angle** between two vectors, indicating how similar their *directions* are regardless of *magnitude*.

    Mathematically, for vectors $A$ and $B$:

    $$
    \operatorname{sim}(A,B)=\frac{A\cdot B}{\|A\|\|B\|}
    $$

    where,

    -   $A\cdot B$ is the dot product of the two vectors.
    -   $\|A\|$ and $\|B\|$ are their Euclidean norms (i.e., magnitudes).

    In expanded form:

    $$
    \operatorname{sim}(A,B)=\frac{\sum_{i=1}^{n}{A_iB_i}}{\sqrt{\sum_{i=1}^{n}{A_i^2}}\cdot\sqrt{\sum_{i=1}^{n}{B_i^2}}}
    $$

6.  What happens next?

    Incomplete Interpretation

    -   Seek information or clarification from user.
    -   Use context or language model knowledge for best guess.

    Complete Interpretation

    -   API call if required, and collect results.
    -   Generate text response with API results.

### Named Entity Recognition (NER)

## Natural Language Generaion (NLG)

## Language Language Models (LLM)
