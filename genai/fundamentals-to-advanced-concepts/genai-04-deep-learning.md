<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# Deep Learning Fundamentals

Apr 30, 2025

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
