<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# Transformer Architecture

May 1, 2025

## Introduction to NLP

Transformer-based models have redefined NLP, replacing order architectures like RNNs and LSTMs. Core concepts include attention mechanisms, encoder-decoder structures, multi-head attention, and feed-forward layers. These components allow models to understand context and relationships across entire sequences.

Traditional CNNs perform well on images but struggle with text, which is sequential and lacks spatial structure. RNNs were designed to handle such sequences by retaining memory across steps, but they face challenges like vanishing gradients and slow training on long texts. LSTMs improved this with gating mechanisms, but complexity and performance limitations remained.

NLP tasks&mdash;such as sentiment analysis, translation, and chatbots&mdash;require converting raw text into numerical form. Simple methods like Bag of Words represent word counts but ignore order and context. Word embeddings (e.g., Word2Vec, GloVe, fastText) embed semantic meaning in dense vector space, enabling models to learn relationships between words.

Embeddings can be visualised using tools like TensorFlow's Embedding Projector, which applies dimensionality reduction (e.g., PCA, t-SNE) to reveal clusters of semantically related words.

While basic neural networks and RNNs use embeddings for prediction tasks, they process sequences step-by-step. Transformers introduced a self-attention mechanism that considers the entire sequence at once, improving speed and performance. This shift, introduced in the paper "Attention is All You Need" (2017), led to state-of-the-art models like BERT, GPT, and T5.

Transformers process text more efficiently and handle long-range dependencies better than prior models.

## Autoregressive Generation

Transformers have transformed NLP by introducing the attention mechanism, allowing models to focus on the most relevant parts of an input. Unlike RNNs and LSTMs that process text sequentially, Transformers handle entire sequences in parallel using encoder-decoder architecture. The encoder creates a meaningful representation (context vector) from the input, while the decoder generates the output, such as a translation.

A core feature is **self-attention**, which lets the model assign varying importance to words based on their context, enabling it to capture long-range dependencies. **Multi-head attention** further enhances this by allowing the model to consider multiple relationships in parallel&mdash;improving tasks like translation and summarisation.

In practice, attention helps the model priorities key words (e.g., "eating" and "apple") over less relevant ones ("a", "is"). Visualisations use color shading to show how much attention each word receives&mdash;darker areas indicate stronger memory activation. Multiple attention heads may each focus on different aspects of the input.

This mechanism outperforms earlier models in task like translation, sentiment analysis, and question answering. At the heart of Transformers is the encoder-decoder structure: the encoder transforms input into a context vector, and the decoder uses it to generate the output sentence. This setup handles variable-length inputs and outputs effectively.

Transformers process words in parallel, but since they lack inherent word order, **positional embeddings** are added to word embeddings to retain sequence information. These embeddings are generated using sine and cosine functions at different frequencies to represent word positions.

For positional embeddings, the values are computed based on a given position $pos$ and embedding dimension $i$ using the following formulas:

$$
\operatorname{PE}_{(\operatorname{pos},2i)}=\sin{\left(\frac{\operatorname{pos}}{10000^{\frac{2i}{d}}}\right)}
$$

$$
\operatorname{PE}_{(\operatorname{pos},2i+1)}=\cos{\left(\frac{\operatorname{pos}}{10000^{\frac{2i}{d}}}\right)}
$$

where,

-   $\operatorname{pos}$ is the position in the sequence (0-based).
-   $i$ is the dimension index (also 0-based).
-   $d$ is the total dimension of the positional embedding vector.

A heat map of positional encodings shows how the patterns capture both short- and long-term dependencies. By integrating these embeddings, Transformers like BERT and GPT maintain word order while processing sequences in parallel, enabling fluent and coherent text generation.

## Introduction to Transformer

Transformers generate text using *autoregressive decoding*&mdash;predicting one word at a time, based only on previously generated tokens. This is made possible by *masked self-attention* in the decoder, which prevents the model from seeing future tokens during training.

Decoding methods like **greedy decoding**, **beam search**, **top-k sampling**, and **nucleus sampling**, each balancing creativity, coherence, and relevance in applications like translation and summarisation.

The decoder works like a storyteller, using context from the encoder to build output sequences token by token. It has three key components:

1.  **Masked Self-Attention**: Ensures each token only attends to earlier tokens, preserving the autoregressive nature.
2.  **Cross-Attention**: Lets the decoder attend to the encoder's output, aligning the generated sequence with the input context.
3.  **Feed-Forward Network**: Introduces non-linearity, allowing the model to learn complex patterns and refine token representations.

Decoding begins with a start token and generates outputs step by step. The decoder first uses masked self-attention and then integrates encoder outputs through *cross-attention*. Cross-attention helps align the generated text with the input sequence for better performance.

A **causal mask** enforces masked self-attention, blocking attention to future words and ensuring sequential generation. Without this, the model could "cheat" by accessing words that have not been predicted yet.

Each token is independently passed through the feed-forward layers, applying ReLU activation to capture intricate patterns. Though processed separately, tokens retain context via attention layers, enabling the generation of natural, meaningful language.

In summary, the encoder processes the input with self-attention and feed-forward layers to produce context vectors. The decoder uses these vectors, alongside masked and cross-attention, and feed-forward layers, to generate text one token at a time. The final output passes through a softmax layer to predict each next word, forming coherent and context-aware sequences.
