<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Natural Language Understanding (NLU)

<div class="badge">
    <span class="key">Type</span>
    <span class="value">Course</span>
</div>
<div class="badge">
    <span class="key">Instructor</span>
    <span class="value">Fan Zhenzhen</span>
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

Interprets user input by identifying:

1.  Intent → via Classification
2.  Slots → via Named Entity Recognition (NER)

## Intent Classification

Classifies user input (sentence/document) into predefined intent classes using supervised learning:

1.  Preprocessing: Converts text into vectors.
    -   TF-IDF Representations
    -   Embeddings
2.  Common Models
    -   k-Nearest Neighbours (kNN)
    -   Naive Bayes
    -   Decision Trees
    -   Logistic Regression
    -   Support Vector Machines (SVM)

## TF-IDF

**TF-IDF** stands for **Term Frequency-Inverse Document Frequency**. It is a method for turning text into vectors by measuring how important a word is in a document relative to a collection of documents.

Given a set of documents:

$$
D=\{d_1,d_2,\cdots,d_N\}
$$

### Term Frequency

The term frequency of a word $t$ in a document $d$ is:

$$
\operatorname{tf}_{t,d}=\frac{n_{t,d}}{\sum_{k}{n_{k,d}}}
$$

where,

-   $n_{t,d}$ is the number of times term $t$ appears in document $d$.
-   $\sum_{k}{n_{k,d}}$ is the total count of all terms in $d$.

### Document Frequency

The document frequency of a term $t$ is the fraction of documents that contain $t$:

$$
\operatorname{df}_t=\frac{|{d\in D:t\in d}|}{N}
$$

where,

-   $|{d\in D:t\in d}|$ counts how many documents contain term $t$.
-   $N$ is the total number of documents.

### Entropy-Like Formulation

To capture how informative a term is&mdash;meaning terms that are rare across documents but frequent in a specific one&mdash;we can express the weighting in an entropy-like form:

$$
\begin{aligned}
w_{t,d}&=-\operatorname{tf}_{t,d}\cdot\log{\operatorname{df}_t}\\
&=\operatorname{tf}_{t,d}\cdot\log{\frac{1}{\operatorname{df}_t}}
\end{aligned}
$$

### Inverse Document Frequency

From this, we define the inverse document frequency as:

$$
\operatorname{idf}_t=\log{\frac{1}{\operatorname{df}_t}}
$$

### TF-IDF Weight

Finally, the TF-IDF weight for term $t$ in document $d$ is simply:

$$
w_{t,d}=\operatorname{tf}_{t,d}\cdot\operatorname{idf}_t
$$

## TF-IDF Representations

TF-IDF representation is a sparse vector that reflects how important a word is to a document relative to a larger corpus.

### Vocabulary-IDF Mapping

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

### Tokenisation

Preprocessing the input text by applying:

1.  Lowercasing
2.  Stemming/Lemmatisation
3.  Punctuation Removal
4.  Stopword Removal

Extract the resulting set of clean tokens:

$$
\text{Tokens}=\{t_1,t_2,\cdots,t_T\}
$$

### Bag of Words

Construct the raw count vector (bag of words) by counting the frequency of each token based on the corpus vocabulary:

$$
\vec{c}=[\cdots,n_1,0,0,n_2,0,n_3,\cdots]
$$

where $n_i$ is the number of times token $t_i$ appears in the input.

Most entries are zero since the input text typically uses only a small subset of the full vocabulary.

### Term Frequency (TF) Vector

Normalise the raw counts by the total number of tokens to obtain the term frequencies:

$$
\vec{\operatorname{tf}}=[\cdots,\operatorname{tf}_1,0,0,\operatorname{tf}_2,0,\operatorname{tf}_3 \cdots]
$$

where

$$
\operatorname{tf}_i=\frac{n_i}{\sum_k{n_k}}
$$

### TF-IDF Vector

Multiply each term frequency by its corresponding IDF value to get the TF-IDF weighted vector:

$$
\vec{v}=[\cdots,w_1,0,0,w_2,0,w_3,\cdots]
$$

where

$$
w_i=\operatorname{tf}_i\cdot\operatorname{idf}_i
$$

## Embeddings

Embeddings are dense vector representations of words or sentences that capture their **semantic** meaning based on context.

**Word Embeddings**

Each word is mapped to a dense vector, where semantically similar words lie close together.

1.  Word2Vec<br>
    <span style="color: #888">Learns vectors by predicting context (Skip-gram) or the target word (CBOW).</span>
2.  GloVe (Global Vectors for Word Representation)<br>
    <span style="color: #888">Factorises a word co-occurrence matrix to preserve global and local word relationships.</span>
3.  BERT (Bidirectional Encoder Representations from Transformers)<br>
    <span style="color: #888">Uses transformers to generate context-aware embeddings based on word usage.</span>

Example

"*king*" and "*queen*" are closer in vector space than "*king*" and "*banana*".

**Sentence and Document Embeddings**

Larger text units (sentences, paragraphs, documents) require aggregation or direct learning of embeddings.

1.  Averaging Word Embeddings<br>
    <span style="color: #888">Simple but effective; ignores word order.</span>
2.  Doc2Vec<br>
    <span style="color: #888">Learns a unique vector per document; extends Word2Vec to capture document-level meaning.</span>
3.  SentenceTransformer<br>
    <span style="color: #888">Pretrained transformer models that generate fixed-size embeddings for full sentences.</span>

Example

"*How are you?*" and "*What's up?*" are mapped to nearby vectors in the embedding space.

## Similarity-Based Intent Classification

**Semantic Search**

Semantic search classifies user intent by comparing the vector of a new input to vectors of known intents. The closest match in the vector space indicates the most likely intent.

**Cosine Similarity**

Cosine similarity measures the **angle** between two vectors, indicating how similar their *directions* are regardless of *magnitudes*.

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

## Slot Detection

**Information Extraction (IE)** identifies structured facts (e.g., entities, events, relationships) from text.

**Slot detection** extracts key info from user input.

Example: "*What is the weather in Sembawang today?*"

→ Sembawang `GPE`, today `DATE` via NER (e.g., SpaCy)

### Strategies for Slot Detection

1.  Used **pretrained NER** for standard entities (e.g., persons, locations, organisations, dates, times).
2.  For custom slots, train a **sequence labelling model** on annotated data. Common models include Hidden Markov Models (HMM), Conditional Random Fields (CRF), Deep Neural Networks like Bi-LSTM and Transformers.
3.  Apply **domain-specific rules** for slot values not covered by standard NER.

BIO Tagging Example

| Token | Alex | is | going | to | Los | Angeles | in | California |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| NER Tag | B-PER | O | O | O | B-LOC | I-LOC | O | B-LOC |

-   `B-` Beginning of an entity.
-   `I-` Inside of the same entity.
-   `O` Outside of any entity.

### Coreference Resolution

**Coreference resolution** is essential for understanding context in conversations. It links *pronouns* or *referring expressions* to the entities they represent.

Example

| Speaker | Utterance |
|:---:|:---|
| You | I would like to know when *Barack Obama* was born. |
| Chatbot | *He* was born on August 4, 1961. |
| You | When was *his* wife born? |
| Chatbot | I don't understand what you said. Please clarify. |

-   "He" → Barack Obama (correctly resolved).
-   "his" → ambiguous if coreference is not resolved.

## What Happens Next?

1.  If interpretation is incomplete
    -   *Ask* the user for clarification or missing information.
    -   Use *contextual cues* or *model knowledge* to infer intent when possible.
2.  If interpretation is complete
    -   Trigger relevant *API calls* (if needed) and retrieve results.
    -   Generate and return a *response* using the *retrieved data*.
