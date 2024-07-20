<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# Introduction to Generative AI

May 1, 2025

## Generative Adversarial Networks (GANs)

A GAN consists of two neural networks: the **Generator** and the **Discriminator**.

-   The **Generator** creates synthetic data (e.g., images, music) from random noise. Its goal is to make this data indistinguishable from real data.
-   The **Discriminator** evaluates whether input data is real (from a reference dataset) or fake (from the Generator).

They are trained simultaneously in a competitive (zero-sum) setup:

-   The Generator tries to fool the Discriminator.
-   The Discriminator tries to correctly identify fake data.

Over time, the Generator improves its ability to create realistic outputs, and the Discriminator becomes better at spotting fakes. Training ideally continues until the Discriminator can no longer tell the difference&mdash;indicating the Generator's success.

WGAN uses Wasserstein distance (Earth Mover's distance) instead of Jensen-Shannon divergence, creating a smoother training objective that helps prevent model collapse and training instability.

Applications of GANs include:

-   Image generation & enhancement (e.g., super-resolution, style transfer).
-   Deepfakes
-   Video synthesis
-   Data augmentation (e.g., generating realistic synthetic tabular data).

## Long Short-Term Memory Networks (LSTMs)

LSTMs are a type of Recurrent Neural Networks (RNN) designed for sequential data. Unlike feed-forward networks (like CNNs), RNNs have feedback loops that allow information to persist across time steps.

Traditional RNNs face issues like vanishing/exploding gradients, limiting their ability to learn long-term dependencies. LSTMs solve this using cell state and gates:

-   **Cell State**<br>
    A memory pathway that carries long-term information with minimal changes.
-   **Gates** (using sigmoid activations)<br>
    Control what information is added, removed, or passed on, helping the network retain or discard information as needed.
-   **Forget Gate**<br>
    Discards unnecessary information from the cell state.
-   **Input Gate**<br>
    Updates cell state with new information.
-   **Output Gate**<br>
    Passes cell state data to hidden state for predictions.
-   **Hidden Gate**<br>
    Short-term memory, used for predictions.

LSTMs are widely used in natural language processing, time series prediction, and any task involving sequences.

## Introduction to Generative AI and Transformers

Generative AI began with models like Generative Adversarial Networks (GANs), which could create realistic synthetic data such as images. As the field evolved, more powerful models emerged&mdash;particularly Transformers, which form the basis of large language models (LLMs) like ChatGPT.

Generative AI refers to models that can produce new content&mdash;text, images, music, or data&mdash;based on patterns learned from large datasets. For example, GANs generate realistic portraits after being trained on thousands of images, while ChatGPT generates human-like text after training on billions of web pages.

Generative models are typically deep neural networks. Common types include GANs, variational autoencoders, autoregressive models, and Transformers. Among these, Transformers have become especially effective in natural language processing (NLP).

Applications of generative AI include text and image generation, style transfer (e.g., turning neutral faces into smiling one), data augmentation, and video game content creation. In NLP, generative AI helps with translation, summarisation, question answering, and more.

Large language models (LLMs) like GPT are built using Transformer architectures. An LLM is trained on massive amounts of multilingual text to learn grammar, semantics, and structure, enabling it to generate and understand language. Notable examples include GPT by OpenAI (e.g., ChatGPT, GPT-4) and BERT by Google, which uses a bidirectional encoder Transformer.

While other model architectures exist, Transformers remain the most effective approach for building LLMs in today's NLP applications.

## Transformer Architecture

The goal of a large language model is to understand the structure and meaning of sentences in natural language, enabling tasks like translation, summarisation, and question answering.

To do this, input text is first converted into numerical form using **word embeddings**, then processed with **attention mechanisms** (like multi-head attention) that capture the relationships between words. Since word order matters, **positional encoding** is added to preserve word sequence.

The **Transformer architecture** follows an **encoder-decoder** structure. The encoder layers extract rich representations of the input, incorporating embeddings, attention scores, and positional data. The decoder layers then generate appropriate text responses based on these representations.

These components&mdash;embeddings, attention, positional encoding, residual connections, and feedforward neural networks&mdash;replace recurrence. Attention handles sequence relationships, making the model faster and more parallelisable than RNNs.

Overall, transformers use deep stacks of feedforward layers, trained on massave text datasets, to power modern NLP system.

## References

1. [PyTorch](https://pytorch.org/)
2. [Regression Tutorial with Keras](https://machinelearningmastery.com/regression-tutorial-keras-deep-learning-library-python/)
3. [Train/Test Split in Scikit-Learn](https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html)
4. [Keras Documentation](https://keras.io/)
5. [TensorFlow CNN Tutorial](https://www.tensorflow.org/tutorials/images/cnn)
6. [PyTorch CIFAR-10 Tutorial](https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html)
