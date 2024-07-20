<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# Variational Autoencoders (VAEs)

May 25, 2025

## Introduction and Problem Statement

We explore two foundational generative models: Variational Autoencoders (VAEs) and Generative Adversarial Networks (GANs). Though generative models have existed for a while, their real-world impact surged around 2023. VAEs and GANs are considered first-generation GenAI technologies.

AI technologies are typically classified by learning approach:

-   **Supervised learning** uses labelled data.
-   **Unsupervised learning** finds structure without labels.
-   **Reinforcement learning** learns through interaction and is often unsupervised.

Self-supervised and semi-supervised learning are variants of supervised learning. Recommenders are great example of semi-supervised learning, because they combine small amount of ratings with large amount of unrated data. GenAI mainly falls under unsupervised learning, though LLMs like GPT-4 use self-supervised pretraining followed by instruction fine-tuning and RLHF (Reinforcement Learning with Human Feedback) for alignment with human intent and safety.

The goal of generative learning is to model the data distribution $P(X)$, allowing new samples similar to the training data. However, in practice, we only have limited samples&mdash;not the full distribution. For example, sampling five adult male heights from random homes in Singapore produces very different datasets each time, revealing little about the true $P(X)$.

Generative models aim to approximate $P(X)$:

-   **Autoencoders / VAEs** learn $P(Z)$ as a proxy.
-   **GANs and diffusion models** directly learn $P(X)$.

## Autoencoders: The Art of Reconstruction

We explore autoencoders and variational autoencoders (VAEs)&mdash;key models behind generative systems used for image reconstruction, anomaly detection, data compression, and synthetic data creation.

An autoencoder compresses input data, like a handwritten digit, into a latent space $Z$, preserving essential features while disgarding noise. It consists of two neural networks:

-   The **encoder** compresses the input.
-   The **decoder** reconstructs it.

They are trained together via **self-supervised learning** to minimise reconstruction error.

Once trained, we can sample from $Z$ and decode new data, though without control over what is generated. To guide generation (e.g., specific digits), we use **conditional autoencoders**, which incorporate labels during training. Both encoder and decoder receive the label to condition the output.

**Variational Autoencoders (VAEs)** add a probabilistic layer, assuming the data is multimodal and each mode follows a Gaussian distribution. For digit data (0-9), VAEs learn the parameters $(\mu,\sigma)$ of 10 Gaussians in the latent space. After training, we sample from these distributions to generate data.

## VAE Fundamentals

Variational Autoencoders (VAEs) have multiple applications including data generation, anomaly detection, and specialised variants for tasks like privacy, sequential data, and personalised recommendations.

### VAE Overview

**Variational Autoencoders (VAEs)**, introduced in 2013, gained popularity for image generation by providing a probabilistic approach to learning compressed data representations. Their key strength lies in generating realistic data by **approximating the true distribution $P(X)$ of the training data**.

VAEs are commonly used to generate synthetic&mdash;but not identical&mdash;data for tasks like data augmentation. While they can generate convincing images (e.g., human faces), they often lack the detail and sharpness of newer models like GANs or diffusion models.

### Latent Space and Vector Operations

A major advantage of VAEs is their latent space $Z$, which supports meaningful vector operations. Each point in $Z$ represents a potential data sample, and operations like interpolation and arithmetic are possible.

For example, by adjusting latent vectors, a VAE can simulate aging or add a smile to a face. This flexibility allows creative control and precise tuning of generated outputs.

## VAE Variants

Over time, Variational Autoencoders (VAEs) have evolved into specialised variants that tackle specific challenges and expand their capabilities. Below are key variants and how they are applied.

### Disentangled VAEs

Disentangled VAEs aim to learn latent spaces where each dimension corresponds to a distinct feature, like shape, colour, or orientation&mdash;enabling fine control over generated content.

**Applications**

Used in data augmentation and design, they allow targeted edits (e.g., changing colour without altering shape), supporting diverse dataset generation and creative outputs.

### Adversarial Autoencoders (AAEs)

AAEs integrate GAN-style training into VAEs, using a discriminator to shape the latent space towards a desired prior, improving generation but increasing training complexity.

**Applications**

Ideal for privacy-preserving synthetic data generation, such as anonymised healthcare records that retain statistical patterns while meeting privacy standards (e.g., HIPAA, GDPR).

### Variational Recurrent Autoencoders (VRAEs)

VRAEs adapt VAEs for sequential data, capturing temporal patterns and dependencies in time series.

**Applications**

Used in predictive maintenance&mdash;e.g., analysing sensor data in manufacturing to detect anomalies and prevent equipment failures.

### Hierarchical VAEs (HVAEs)

HVAEs use multiple latent layers to model complex data. Higher layers capture global traits (e.g., genre), while lower ones capture finer details (e.g., specific actors).

**Applications**

Effective in personalised recommendations, like tailoring movie suggestions. They also support transfer learning, improving recommendations for new users/items by leveraging knowledge from related domains.

## VAE Applications

Variational Autoencoders (VAEs) are versatile tools for generating realistic data and modelling complex distributions.

### Image Generation

VAEs generate synthetic data resembling the training set, useful for data augmentation. While less sharp than GANs or Diffusion Models, VAEs are effective for producing diverse and creative image samples.

### Anomaly Detection

By learning the data distribution $P(X)$, VAEs can detect anomalies&mdash;data points that deviate from normal patterns. This is valuable in areas like manufacturing (detecting defects), healthcare (flagging abnormal scans), and security (identifying threats in X-ray images).

### Creative Design & Data Augmentation

VAEs support creative exploration by generating variations of input data, enabling new design creation and expanding datasets for machine learning tasks.

## Mathematical Foundation of VAEs

### Modelling the Distribution $P(Z)$ and $P(X|Z)$

**Process Overview**

1.  Dataset
    -   Includes text, music, or images.
    -   Draws from an unknown distribution $P_X$.
2.  Model Training (Unsupervised Learning)
    -   Machine learns structure data
    -   Goal: approximate $P_X$ using $P_Z$.
3.  Generate New Data
    -   Sample from $P_Z$ to produce new text, music, or images.
    -   Ideally, $P_Z \approx P_X$.

**VAE Structure**

-   **Input $X$** → Encoded into latent space $Z$.
-   **Latent Space $Z$** → Decoded to reconstruct output $X_r$.

**Key Probabilities**

-   $P(Z)$ is the prior distribution over the latent space.
-   $P(X|Z)$ is the likelihood of reconstructing data $X_r$ from latent variable $Z$.

Joint Probability:

$$
P(X,Z) = P(X|Z)P(Z)
$$

Bayes' Theorem:

$$
P(Z \mid X) = \frac{P(X|Z)P(Z)}{P(X)}
$$

The true data distribution $P(X)$ (the marginal probability in Bayes' Theorem) and likelihood $P(X|Z)$ are unknown.

$$
P(X) = \int_{-\infty}^{+\infty} P(Z) P(X|Z) dZ
$$

The integral to calculate $P(X)$ is intractable due to:

1.  High-dimensional latent space<br>
    $Z$ typically lies in a high-dimensional space, making it computationally intensive or impossible to integrate over all possible $Z$ values.
2.  No closed-form for $P(X|Z)$<br>
    The likelihood function may not have an analytical expression.
3.  Complex interaction<br>
    Even if $P(Z)$ is simple (e.g., Gaussian), the product $P(Z) \cdot P(X|Z)$ may not have a tractable form.

### Optimising the Variational Lower Bound of $\log P(X)$

**Model Architecture**

1.  Input $X$ → $P(X)$ unknown

2.  Encoder → Neural Network

3.  Latent Space $Z$ → Choose $q(Z) \approx p(Z|X)$ → Gaussian

4.  Decoder → Neural Network

5.  Reconstructed Input $X_r$ → $P(X|Z)$ likelihood

**KL Divergence**

We begin with the KL divergence (Kullback-Leibler divergence) between the approximate posterior and the true posterior.

$$
\operatorname{KL}[q(Z),p(Z|X)] = \sum_Z q(Z) \log \frac{q(Z)}{p(Z|X)}
$$

Apply negative log identity:

$$
\operatorname{KL}[q(Z),p(Z|X)] = -\sum_Z q(Z) \log \frac{p(Z|X)}{q(Z)} \tag{1}
$$

**Apply Bayes' Theorem**

$$
p(Z|X) = \frac{p(X|Z)p(Z)}{p(X)}
$$

Substitute Bayes' Theorem into $(1)$:

$$
\begin{aligned}
\operatorname{KL}[q(Z),p(Z|X)] & = -\sum_Z q(Z) \log \left( \frac{p(X|Z)p(Z)}{p(X)} \cdot \frac{1}{q(Z)} \right) \\
& = -\sum_Z q(Z) \log \left( \frac{p(X|Z)p(Z)}{q(Z)p(X)} \right) \\
& = -\sum_Z q(Z) \log \left( \frac{p(X|Z)p(Z)}{q(Z)} - \log p(X) \right) \\
& = -\sum_Z q(Z) \log \frac{p(X|Z)p(Z)}{q(Z)} + \sum_Z q(Z) \log p(X) \\
\end{aligned}
$$

Since $\sum_Z q(Z) = 1$:

$$
\operatorname{KL}[q(Z),p(Z|X)] = -\sum_Z q(Z) \log \frac{p(X|Z)p(Z)}{q(Z)} + \log p(X) \tag{2}
$$
