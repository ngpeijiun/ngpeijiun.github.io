<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# Deep Learning Fundamentals

Apr 18, 2025

## Introduction to Deep Learning

Deep learning is a powerful branch of machine learning that uses many layers of processing&mdash;often artificial neural networks&mdash;to extract increasingly abstract features from raw data. A key idea in deep learning is that **depth matters more than width**: instead of just adding more neurons in shallow layers, stacking more layers allows for multistage, hierarchical information processing&mdash;similar to how the human brain works.

This approach mimics how biological systems interpret information, moving from low-level details to high-level understanding. For example, in image classification using Convolutional Neural Networks (CNNs), the network first detects simple patterns like edges, then more complex shapes, and finally whole objects like animals or faces.

Deep learning models, especially CNNs, have revolutionised tasks involving unstructured data like images, audio, and text. With enough data, computing power, and well-designed architectures, these models can achieve human-like performance in tasks such as medical diagnosis from X-rays, autonomous driving, or natural language processing (e.g., ChatGPT).

In supervised learning, where labelled data is available, deep networks learn to classify objects by adjusting internal parameters&mdash;mainly weights and biases&mdash;during training. Early layers focus on feature extraction; later layers handle classification. This structure allows the model to move from raw input to meaningful decisions.

Overall, deep learning brings us closer to mimicking how the brain processes information&mdash;stage by stage&mdash;and has become foundational in modern AI.

## Artificial Neural Networks (ANNs)

A **single-layer perceptron** (just one layer doing the processing) is a **linear model**&mdash;it cannot **handle nonlinear problems** like complex classification or curved boundaries.

To handle nonlinear functions, we need a **multilayer perceptron (MLP)**:

-   At least **one hidden layer** with **multiple neurons**.
-   **Nonlinear activation functions** (e.g. ReLU, tanh).

This setup enables the network to form **piecewise linear decision boundaries** and learn complex patterns.

But with more layers and nonlinearities, training becomes harder. We use **backpropagation with gradient descent** (or similar algorithms) to adjust weights.

We must also watch out for:

-   **Underfitting**: Model is too simple or not trained enough&mdash;cannot even fit training data.
-   **Overfitting**: Model memorises training data but fails to generalise to unseen data.

To build a solid model:

1.  **Prepare data**: Split into **training, testing** and optionally **validation** sets.
2.  **Configure the pipeline**: Decide on number of layers, neurons, and activations.
3.  **Choose training algorithm**: Usually backpropagation + gradient descent.
4.  **Train and tune** the model carefully.
5.  **Test and evaluate** on unseen data to check real-world performance.

Once tested and validated, your neural network is ready to be used.

## Deep Convolutional Neural Networks (DCNNs)

1.  In the AI era, Deep Convolutional Neural Networks (DCNNs) are the backbone of computer vision, transforming how machines recognise faces, diagnose diseases, and interpret the world.

2.  DCNNs are neural networks designed for grid-like data (e.g., images), using convolutional layers to extract features and fully connected layers for decision-making. They mimic human visual processing and excel at tasks involving spatial hierarchies.

    -   **Input**
    -   **Convolutional Layer (Feature Extraction)**
        -   Applies small **convolutional filters (kernels)** that slide over the input to extract patterns like edges and textures.
        -   Each filter produces a **feature map**, and multiple filters capture diverse patterns.
    -   **Pooling Layer**
        -   Perform **down-sampling** to reduce dimensionality while retaining essential feature.
        -   Helps in reducing computation and preventing overfitting.
        -   Common pooling techniques include **max pooling** (selecting the maximum value in a region) and **average pooling** (taking the mean value).
    -   **Activation Layer**
        -   Introduce **nonlinearity** to the model, allowing it to learn complex patterns.
        -   The most commonly used activation function in deep CCNs is **ReLU (Rectified Linear Unit)**, which helps maintain gradients for better training.
    -   **Dense Layer/Fully Connected Layer (Decision Making)**
        -   Take the extracted features from convolutional layers and map them to final outputs.
        -   Used for tasks like classification (assigning class labels) or function estimation.
        -   These layers still use activation functions to refine predictions.
    -   **Output**
        -   **Dropout**: Reduces overfitting by randomly deactivating neurons during training, forcing the network to learn robust features.
        -   **Batch Normalisation**: Normalises inputs across mini-batches, leading to **smoother and more stable training**.
        -   Both techniques serve as **regularisation methods** that improve the generalisation ability of the network.

3.  Skip connections allow gradients to flow directly through the network through identity mappings. They create shortcuts for gradient flow during backpropagation, addressing the vanishing gradient problem in very deep networks without requiring special activation functions.

4.  Strengths

    DCNNs offer several advantages, particularly in handling complex and unstructured data. Reviewing the key benefits, it becomes evident that they excel in managing intricate patterns and high-dimensional inputs. Additionally, they are **adaptive, high-performing, fully automated, and highly efficient in feature extraction** across diverse datasets.

    -   **Automatic Feature Extraction**<br>
        CNNs learn features directly from data, removing the need for manual feature engineering.
    -   **Parameter Sharing**<br>
        Convolutional layers reuse the same filters across an image, reducing the number of parameters compared to fully connected networks.
    -   **Translation Invariance**<br>
        Recognise patterns (e.g., shapes, objects) regardless of their location within an image.
    -   **Efficient for High-Dimensional Data**<br>
        Scales well with large images or datasets compared to traditional neural networks.
    -   **State-of-the-Art Performance**<br>
        Achieves top results in image classification, object detection, and segmentation tasks.
    -   **Adaptability to Diverse Domain**<br>
        CNNs can handle other types of data (e.g., audio spectrograms, time-series) with minimal changes.

5.  Limitations

    -   **Computationally Intensive**<br>
        Training requires significant hardware resources (e.g., GPUs/TPUs).
    -   **Data Hungry**<br>
        CNNs need large labelled datasets for optimal performance, which can be expensive to acquire.
    -   **Lack of Interpretability**<br>
        The decision-making process of CNNs is not transparent, making debugging and understanding difficult.
    -   **Overfitting Risk**<br>
        Without proper regularisation, CNNs may memorise training data instead of generalising.
    -   **Sensitivity to Hyperparameters**<br>
        Performance depends heavily on the choice of architecture, learning rate, and other settings.

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
