<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# Attention Mechanism

May 1, 2025

## Attention Mechanism

1.  In the heart of modern Natural Language Processing lies a quiet but powerful idea: **attention**. It is the mechanism that lets machine read between lines, resolve ambiguity, translate with grace, and write like a human. It does not memorise&mdash;it notices.

2.  Understanding Query, Key, and Value in Attention

    In NLP, attention helps models focus on the most relevant words in a sentence. It relies on three core concepts:

    -   **Query (Q)**: Represents the word or token that is currently being attended to. Think of it as a word "asking" for relevant context from the sentence.
    -   **Key (K)**: Represents all other words in the input sentence. Each word has its own key, which helps determine its relevance to the query.
    -   **Value (V)**: Contains the actual information or word embeddings that will be passed forward. The value provides the semantic meaning that is ultimately used by the model.

    Each input token is transformed into Q, K, and V vectors using weight matrices $W_Q$, $W_K$, and $W_V$. Attention is computed as:

    $$
    \text{Attention}(Q,K,V)=\operatorname{softmax}\left(\frac{QK^{\top}}{\sqrt{d_k}}\right)V
    $$

    where,

    -   $Q\in\mathbb{R}^{n\times d_k}$ is the Query matrix.
    -   $K\in\mathbb{R}^{n\times d_k}$ is the Key matrix.
    -   $V\in\mathbb{R}^{n\times d_v}$ is the Value matrix.
    -   $d_k$ is the dimentionality of the key vectors (i.e., number of columns in $K$).

3.  Attention Mechanism Simplified

    Step 1: Compute Scores

    -   The model takes the dot product of the Query (Q) with all the Key (K) vectors.
    -   This results in a set of scores that indicate how relevant each key (word) is to the query.

    Step 2: Scale Scores

    -   Since the dot product values can become very large, they are scaled by $\sqrt{d_k}$, where $d_k$ is the dimension of the key vectors.
    -   This ensures numerical stability and prevents very large values from dominating the attention process.

    Step 3: Apply Softmax

    -   The scores are then passed through a softmax function, which converts them into a probability distribution.
    -   This helps the model decide how much importance to give to each word in the sequence.

    Step 4: Weight Values

    -   Mutiply these probabilities with Value (V) vectors to produce a weighted sum&mdash;the attention output.

4.  Multi-Head Attention

    Multi-head attention extends self-attention by allowing the model to focus on different aspects of the input simultaneously. Although each head receives the same input token embeddings, they use separate learnt projection matrices ($W_Q,W_K,W_V$) to compute their own queries (Q), keys (K), and values (V). This allows each head to capture different contextual features&mdash;such as local or long-range dependencies, syntactic roles, or semantic relations. The outputs from all heads are then concatenated and passed through a linear layer to integrate these diverse insights. This design helps the model develop a richer understanding of language, improving performance in tasks like translation, summarisation, and sentiment analysis.

5.  Feedforward Network

    After multi-head attention, the output passes through a feedforward network consisting of two linear layers with a ReLU activation in between. Applied independently to each sequence position, it helps extract complex patterns and refine contextual understanding. This output then moves to the next transformer layer.

    Together, multi-head attention and feedforward layers enable transformers to capture long-range dependencies and nuanced relationships efficiently. The encoder processes inputs using embeddings, self-attention, and feedforward networks, while Query-Key-Value representations guide attention. This architecture underpins tasks like machine translation and enables high-performance language understanding and generation.

## The Encoder-Decoder Architecture

1.  Transformers have become the foundation of generative AI, especially in natural language processing. But their applications extend beyond text. Transformers are also used in image generation, music composition, and even code generation, which demonstrates their versatility in multiple domains.

2.  Generative AI Evolution

    **Large Language Models (LLMs)**

    Large Language Models (LLMs), like GPT and BERT, are AI systems built on transformer architectures with self-attention mechanisms to understand and generate human-like text. Trained on massive datasets with billions of parameters, they capture deep contextual relationships, enabling tasks such as question answering, content generation, translation, and coding. Their language proficiency powers NLP applications like chatbos, translators, and writing tools.

    **Large Vision Models (LVMs)**

    Large Vision Models (LVMs) are AI systems that process and generate visual content like images and videos using deep learning architectures such as CNNs and transformers. Trained on large datasets, they learn patterns to produce realistic visuals and support tasks like image generation, video analysis, and object detection in applications ranging from computer vision to autonomous systems.

3.  Training a Transformer

    Training a Transformer involves tokenising input data, embedding it into vectors, and adding positional encodings to retain sequence order. The model starts with random weights, which are updated through backpropagation to minimise loss. Hyperparameters like learning rate and batch size are tuned to improve learning efficiency.

    A major challenge is scale&mdash;models like GPT-3 have 175 billion parameters, requiring immense computational resources. CPU are too slow for this, so training relies on GPUs or TPUs to handle the massive data efficiently. As transformer models grow, so do their computational demands, making hardware advancements critical to sustaining progress in AI.

4.  Transformer Variants

    Transformers have transformed AI by efficiently processing sequential data using self-attention. Variants like BERT, GPT, and T5 build on this architecture, each tailored for specific NLP tasks to boost performance.

    -   BERT: Optimised for understanding text bidirectionally, making it ideal for tasks like sentiment analysis, classification, and question answering.
    -   GPT: Uses autoregressive generation to predict the next word, suited for applications like chatbots, content creation, and code generation.
    -   T5: Treats all NLP tasks as text-to-text problems (e.g., translation, summarisation), offering a versatile, unified approach.

5.  Hybrid Architectures

    Transformers are powerful but computationally intensive, leading to hybrid models that pair them with CNNs or RNNs for improved efficiency.

    -   CNN + Transformer: Common in computer vision (e.g., ViTs + ResNet), where CNNs capture local spatial features and transformers model global relationships.
    -   RNN + Transformer: Used in speech and time-series tasks, with RNNs handling short-term dependencies and transformers capturing long-range patterns.

    These hybrids reduce computation while preserving transformers' strengths, making them more scalable and efficient for tasks like image and speech processing.

5.  Sparse and Efficient Transformers

    Standard transformers struggle with long sequences due to the quadratic cost of self-attention, making them inefficient for tasks like document processing or long-range dependency modelling. To overcome this, sparse and efficient transformer variants have been developed to reduce memory and computational demands while preserving performance.

    -   **Longformer**: Uses dilated attention to focus selectively on parts of the sequence, enabling efficient processing of long documents in tasks like summarisation and question answering.
    -   **Linformer**: Projects attention into a lower-dimensional space, cutting down memory use and speeding up inference for long inputs.
    -   **Reformer**: Replaces standard attention with locality-sensitive hashing (LSH), attending only to relevant parts and reducing pairwise computation, ideal for large-scale tasks.

    These models extend transformer usability to longer and more resource-intensive sequences without compromising effectiveness.

6.  Challenges

    Transformers have advanced NLP significantly, but text generation still faces key challenges.

    -   Hallucinations: Models can produce plausible-sounding but false content, often due to gaps or inaccuracies in training data.
    -   Biases: Training data biases&mdash;racial, gender, cultural&mdash;can lead models to reinforce stereotypes or provide skewed responses.
    -   Ethics: Text generation raises concerns about misinformation, plagiarism, and misuse, including fake news and opinion manipulation.

    Ongoing progress requires addressing these issues through better data curation, bias mitigation, and ethical safeguards.

7.  Future Trends

    As text generation models advance, several key areas are driving improvement:

    -   Alignment with Human Values: Models will increasingly focus on producing ethical, unbiased, and socially responsible outputs, ensuring they align with human values and minimise harmful stereotypes.
    -   Long-Term Memory: Future models will better retain context across longer texts or conversations, enhancing coherence, factual accuracy, and logical consistency.
    -   Personalised Agents: Conversational agents will grow more personalised, learning user preferences and contexts to enable more meaningful and tailored interactions&mdash;especially valuable in areas like customer support and mental health.

    These developments will make text generation more powerful, reliable, and adaptable to real-world needs.

## Decoder Techniques for Text Generation

### Greedy Search

Greedy Search is a simple decoding method where the model selects the word with the highest probability at each step and feeds it back into the decoder to predict the next word. This continues until an end-of-sequence token is produced or a length limit is reached, making the process fast and efficient. However, by always choosing the most likely word without considering future possibilities, it can produce suboptimal and less coherent outputs, especially in longer texts.

### Top-K Sampling

Top-k sampling improves text generation by restricting choices to the $k$ most probable tokens at each step, reducing the chance of rare or nonsensical words.

The value of $k$ controls the trade-off between diversity and coherence: higher $k$ increases variety but risks incoherence, while lower $k$ ensures predictability but may reduce creativity.

Adjusting $k$ lets us balance between structured output and more diverse, exploratory text.

### Top-P Sampling

Top-p sampling (or nucleus sampling) is a dynamic decoding method that selects the smallest set of tokens whose cumulative probability exceeds a threshold $p$, rather than a fixed top $k$.

This allows the model to adapt its choices based on actual token probabilities, focusing on likely words while still including some lower-probability ones for diversity. Lower $p$ values make output more predictable; higher values boost creativity.

It strikes a flexible balance between coherence and variation, making it well suited for generating natural, varied text.

### Beam Search

Beam search improves text generation by tracking multiple top candidate sequences (beams) at each step, unlike greedy search which picks only the highest probability word. It scores each beam based on sequence probability and coherence, increasing the chance of finding better outputs. Commonly used in translation and summarisation, it balances quality and efficiency but may still produce repetitive or less creative results if the beam width is too narrow.

### Temperature

Temperature controls randomness in text generation by adjusting the probability distribution of word choices. Higher temperatures increase diversity by favouring less likely words, while lower temperatures make output more predictable. This helps balance creativity and coherence tasks like storytelling, chatbots, and summarisation.

## References

1. [Hugging Face Hub Quick Start](https://huggingface.co/docs/huggingface_hub/v0.23.1/quick-start)  
2. [Google Colab Hub Login Discussion](https://discuss.huggingface.co/t/google-colab-hub-login/21853)  
3. [Hugging Face Transformers BERT Documentation](https://huggingface.co/docs/transformers/en/model_doc/bert)  
4. [Text Classification with BERT using TensorFlow](https://www.tensorflow.org/text/tutorials/classify_text_with_bert)  
5. [Explanation of BERT Model in NLP](https://www.geeksforgeeks.org/explanation-of-bert-model-nlp/)  
6. [BERT Embedding Documentation](https://bert-embedding.readthedocs.io/en/latest/)  
7. [OpenAI API Reference](https://platform.openai.com/docs/api-reference/introduction)  
8. [OpenAI Concepts Documentation](https://platform.openai.com/docs/concepts)  
9. [GPT Examples Documentation](https://docs.gptr.dev/docs/examples/examples)  
