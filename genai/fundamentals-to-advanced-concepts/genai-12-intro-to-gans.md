<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# Introduction to GANs

May 23, 2025

## Introduction to GANs

1.  In 2014, Ian Goodfellow introduced Generative Adversarial Networks (GANs), which Yann LeCun called "the most interesting idea in the last 10 years in Machine Learning".

2.  GANs vs. VAEs

    Unlike VAEs, GANs do not use an encoder-decoder setup. Instead, they directly learn the data distribution $P(X)$.

3.  Training Set

    GANs train on real examples&mdash;often images. The Discriminator learns to tell real from fake, while the Generator learns to mimic the real data.

4.  Discriminator

    A neural network that classifies inputs as real or fake. It receives both real samples and Generator outputs, providing feedback that helps improve the Generator. Its goal is to maximise classification accuracy.

5.  Random Noise

    Randomly sampled vectors (usually Gaussian) fed into the Generator. They introduce variation, allowing diverse outputs.

6.  Generator

    A neural network that turns noise into synthetic images. It aims to produce outputs indistinguishable from real data, improving through Discriminator feedback.

7.  Fake Image

    An image generated from noise. It is evaluated alongside real images during training. As training progresses, these images become increasingly realistic.

8.  Training Objective

    GANs operate as a game between two networks:

    -   The generator tries to fool the Discriminator.
    -   The Discriminator tries to detect fakes.

    Each network learns independently, pushing the other to improve.
