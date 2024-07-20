<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# BERT and GPT

May 8, 2025

## Recap on Transformers

In this module, we will explore key transformer models, BERT, GPT, and encoder-decoder architectures. Transformers are neural networks designed to process sequences using self-attention, allowing parallel computation and long-range dependency handling. This makes them more efficient and powerful than traditional RNNs or LSTMs.

We will begin with BERT, a bidirectional model focused on understanding context, ideal for tasks like question answering and sentiment analysis. Next is GPT, a unidirectional model optimised for generating text, used in content creation and chatbots. We will also cover encoder-decoder models like T5, designed for sequence-to-sequence tasks such as translation and summarisation.

Transformers revolutionised NLP by enabling faster training through parallelism and better context retention. Their success extends beyond text&mdash;**multi-modal transformers** handle images, audio, and video, powering applications like image captioning and speech recognition.

BERT is widely used in search engines and virtual assistants for its deep contextual understanding. GPT is popular for automating content generation, legal summaries, and even code writing, boosting productivity.

Hybrid models combine BERT's comprehension with GPT's generation to enhance tasks like machine translation, summarisation, and Q&A systems. Advanced transformers like ChatGPT-4, DALL-E, and HuBERT integrate vision, language, and audio, enabling businesses to build smarter AI tools across domains.

## BERT

BERT (Bidirectional Encoder Representations from Transformers) is a powerful NLP model developed by Google. Unlike earlier models that process text sequentially, BERT uses a **bidirectional encoder** to understand words in context by analysing both their left and right surroundings&mdash;enabling deeper semantic understanding.

BERT is built on the encoder stack of the Transformer architecture and is pre-trained using **Masked Language Modeling (MLM)** and **Next Sequence Prediction (NSP)**. MLM randomly masks words in a sentence, and the model predicts them using surrounding context, while NSP teaches BERT to identify whether one sentence logically follows another. These methods allow BERT to learn language patterns without needing labelled data, using a **self-supervised** learning approach.

BERT generates **contextual word embeddings**, where the same word can have different meanings depending on context&mdash;e.g., "duck" as a bird vs. a verb. This makes BERT ideal for tasks like question-answering, sentiment analysis, translation, summarisation, and search ranking. Variants like RoBERTa, CrystalBERT, and Electra improve on BERT for different use cases.

By combining deep bidirectional learning and self-supervised training, BERT has transformed NLP&mdash;reducing reliance on manual rules, improving model accuracy, and enabling more natural, context-aware language understanding.

### Applications

1.  Sentiment Analysis<br>
    Determines whether text (e.g., reviews or social posts) expresses positive, negative, or neutral sentiment.

2.  Named Entity Recognition (NER)<br>
    Detects entities like names, organisations, or locations&mdash;useful for extracting structured data from text.

3.  Text Classification<br>
    Classifies documents based on content, leveraging BERT's contextual embeddings&mdash;commonly used in topic or intent detection.

4.  Search Engine Optimisation<br>
    Enhances relevance by identifying user intent and matching key phrases to more accurate search results.

### Limitations

1.  Context Window Limit<br>
    Can only process up to 512 tokens (~400 words), limiting its ability to handle long documents.

2.  High Dimensionality<br>
    Uses 768-dimensional token embeddings, making it storage and compute-intensive.

3.  No Generative Ability<br>
    As an encoder-only model, BERT excels at understanding but not generating full sentences&mdash;MLM allows partial generation, but full generative tasks require integration with models like GPT.

### Variants

1.  RoBERTa

    -   Enhanced BERT pre-training with dynamic token masking.
    -   Trained on a larger, more diverse dataset.
    -   Achieves better performance through robust optimisation.

2.  ELECTRA

    -   Classifies if tokens are correct or replaced (token corruption).
    -   More efficient than MLM.
    -   Learns word relationships more effectively.

3.  RoBERTa and ELECTRA boost BERT's performance for tasks like classification, sentiment analysis, and QA. Other variants&mdash;DistillBERT (faster), ALBERT (parameter efficient), SpanBERT (span-based), and CodeBERT (code-related)&mdash;extend BERT's utility across domains.

## GPT

GPT, or Generative Pre-trained Transformer, is a powerful AI model built for **text generation**. It uses a **decoder-only architecture**, meaning it generates text based soley on previously seen inputs&mdash;unlike models like BERT, which are built for understanding text using an encoder structure.

GPT generates sentences one word at a time using an **auto-regressive approach**. This means each word is predicted based on the ones before it, not after. This setup helps GPT create fluent, context-aware text ideal for applications like chatbots, storytelling, and summarisation.

Training GPT involves a technique called **Causal Language Modelling (CLM)**. In CLM, the model is trained to predict the next word in a sequence by only looking at the past words&mdash;never the future ones. For example, in the sentence "All the very ___", the model tries to predict the final word (like "best") using only the previous words. This is different from BERT's masked language modelling (MLM), which hides random words and can look both forwards and backwards.

Under the hood, GPT relies on **masked self-attention** within its decoder layers. This ensures that when predicting a word, it only attends to earlier tokens in the sequence. This design helps preserve the logical flow of text.

The **auto-regressive and sequential nature** of GPT makes its outputs coherent, but also introduces a challenge&mdash;generation is slower because each word depends on all the previous ones, and cannot be parallelised easily.

To make GPT's responses more dynamic, we use a parameter called **temperature** during text generation. A low temperature makes the model stick to the most likely words&mdash;safe but repetitive. A higher temperature introduces more randomness and creativity, which can be useful for storytelling, though it may lead to less predictable results.

Techniques like **zero-shot learning**, **retrieval-augmented generation**, and **fine-tuning with human feedback** further enhance GPT's adaptability and usefulness across many real-world applications.

## Reinforcement Learning from Human Feedback (RLHF)

Reinforcement Learning from Human Feedback (RLHF) improves GPT by guiding it to produce more accurate and contextually appropriate responses. While GPT generates fluent text, it cannot assess factual accuracy on its own. For instance, it cannot decide if "a beginning" or "an end" fits best in "Under Augustus, the Roman Empire came to [MASK]" without historical context. RLHF uses a reward model&mdash;often a GPT variant&mdash;and human feedback to prioritise helpful and reliable answers, resulting in more trustworthy outputs across various contexts.

## Retrieval-Augmented Generation (RAG)

Retrieval-Augmented Generation (RAG) boosts ChatGPT by integrating external knowledge, overcoming its reliance on static training data. Without retrieval, ChatGPT struggles with real-time info, niche topics, or precise facts. RAG fetches relevant documents (e.g., from the internet) and provides them as context for responses, improving accuracy, reducing hallucinations, and enabling up-to-date, domain specific outputs.

## Zero-Shot Learning

Zero-Shot Learning lets GPT perform new tasks without additional training by relying on its pretraining and prompt instructions. This enhances flexibility, removes the need for fine-tuning, and streamlines workflows&mdash;making GPT more efficient for real-time, practical use.
