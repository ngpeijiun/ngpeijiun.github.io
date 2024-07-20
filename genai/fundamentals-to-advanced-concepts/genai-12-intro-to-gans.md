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

## Training of GAN

Train GANs using techniques such as progressive growing, Wasserstein loss and spectral normalisation to prevent mode collapse and instability

## GAN Variants

Generative Adversarial Networks (GANs) have significantly advanced generative modelling, particularly in image synthesis, style transfer, and domain adaptation. Since their introduction, numerous architectural and conceptual variants have been proposed to address limitations of the original GAN framework.

Despite their ability to model target data distributions, standard GANs commonly face several challenges:

-   Mode collapse: limited diversity in generated outputs
-   Training instability: difficulty balancing adversarial optimisation
-   Lack of control: limited ability to guide generation using user input or semantics

To mitigate these issues, researchers have developed a range of GAN variants, each tailored to specific tasks and domains.

In the following sections, we examine five key GAN variants.

## References

1. [Wasserstein GAN - arXiv](https://arxiv.org/abs/1704.00028)
2. [GANs in Depth - Lilian Weng's Blog](https://lilianweng.github.io/posts/2017-08-20-gan/)
3. [Conditional GAN Example - Keras](https://keras.io/examples/generative/conditional_gan/)
4. [DCGAN Tutorial - PyTorch](https://docs.pytorch.org/tutorials/beginner/dcgan_faces_tutorial.html)
5. [Reparameterization Trick - Gregory Gundersen's Blog](https://gregorygundersen.com/blog/2018/04/29/reparameterization/)
