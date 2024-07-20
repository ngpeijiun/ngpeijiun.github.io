<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# Encoder-Decoder Models

May 9, 2025

## Encoder-Decoder Models

**Encoder-decoder models** are a core deep learning architecture that pairs an encoder (to capture input context) with a decoder (to generate coherent output). The encoder transforms input into a structured representation, while the decoder uses it to produce logically consistent text.

Applications include machine translation, text summarisation, and image/video captioning&mdash;tasks that require both understanding and generating content. These models are key in NLP, content automation, and AI-driven assistance.

Several encoder-decoder models:

1.  BART<br>
    Combines BERT's bidirectional encoding with GPT's autoregressive decoding for strong comprehension and generation. Excels in summarisation, text completion, and translation.
2.  PEGASUS<br>
    Uses sentence-level masking during pretraining for efficient summarisation. Maintains meaning with minimal data, making it ideal for low-resource settings.
3.  T5<br>
    Frames all NLP tasks&mdash;summarisation, translation, classification&mdash;as text-to-text problems. Its flexible design enables easy adaptation across tasks and systems.

## BART

BART (Bidirectional and Auto-Regressive Transformer) combines BERT's bidirectional encoding with GPT's autoregressive decoding. It uses span corruption&mdash;masking entire phrases instead of single words&mdash;to better learn text reconstruction. The decoder then generates tokens one by one, guided by the encoded input for coherent and structured output. This hybrid design makes BART well-suited for summarisation, translation, paraphrasing, and text completion, balancing input fidelity with fluent generation.

## PEGASUS

PEGASUS (Pre-training with Extracted Gap-sentences for Abstractive Summarisation) is optimised for summarisation by masking full sentences&mdash;especially the most informative ones&mdash;during pretraining, rather than individual tokens. This "Gap Sentence Generation" (GSG) approach trains the model to reconstruct missing content, boosting its contextual understanding and ability to generate abstractive, rephrased summaries.

PEGASUS excels with minimal fine-tuning, delivering state-of-the-art results across domains like news, research, and long documents. Its self-supervised learning helps reduce error amplification, enabling coherent and concise summaries with strong logical flow.

## T5

T5 (Text-to-Text Transfer Transformer) reformulates all NLP tasks&mdash;like translation, summarisation, classification, and Q&A&mdash;into a unified text-to-text format using an encoder-decoder architecture. The encoder interprets input text, while the decoder generates the output.

T5 uses **task-specific prefixes** (e.g., "translate English to German" or "summarise") to guide the model, allowing it to handle multiple tasks within a single framework. Pretrained on large datasets, it performs well with minimal fine-tuning, making it highly flexible, scalable, and effective for multilingual and multitask NLP.

## Multimodal Models

Multimodal models process multiple data types&mdash;text, images, audio, and video&mdash;enabling richer and more context-aware AI outputs. They use separate architectures for each modality (e.g., CNNs for images, LSTMs for text) and fuse the outputs to improve understanding and generation.

Examples include ViLBERT (separate models for text and vision) and Show & Tell (CNN for image features + LSTM for captions). This integration supports tasks like image captioning, video analysis, and speech-to-text, making AI more human-like in perception. Applications span autonomous systems, accessibility tools, and interactive assistants.

## GATO

GATO (DeepMind, 2022) is a generalist transformer model that handles text, images, video, and robotics using a single unified architecture. Instead of separate models per modality, GATO tokenises all inputs into a shared sequence format.

This approach allows it to perform diverse tasks&mdash;chatting, gaming, robotic control&mdash;without specialised components. GATO marks a shift towards scalable, multi-domain AI systems that replace narrow, task-specific models.

## Future

The future of Transformers lies in advanced multimodal reasoning, integrating text, images, audio, and video for richer understanding. Continuous learning will enable real-time adaptation without retraining, while enhanced memory will support more coherent and personalised interactions. Causal reasoning will improve decision-making by recognising cause-effect relationships. Finally, smaller, efficient models will deliver powerful AI with lower energy demands, expanding global accessibility.

## References

1. [Explanation of BERT Model (NLP) - GeeksforGeeks](https://www.geeksforgeeks.org/explanation-of-bert-model-nlp/)
2. [GPT Method - Papers with Code](https://paperswithcode.com/method/gpt)
3. [Understanding the Architecture of GPT Models - 30 Days Coding](https://30dayscoding.com/blog/understanding-the-architecture-of-gpt-models)
4. [BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding - arXiv](https://arxiv.org/abs/1810.04805)
5. [DistilBERT Documentation - Hugging Face](https://huggingface.co/docs/transformers/en/model_doc/distilbert)
6. [Transformers GitHub Repository - Hugging Face](https://github.com/huggingface/transformers)
7. [BART Documentation - Hugging Face](https://huggingface.co/docs/transformers/en/model_doc/bart)
