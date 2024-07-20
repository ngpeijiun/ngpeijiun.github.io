<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# Diffusion Models

May 28, 2025

## Overview

Diffusion models, introduced around 2020, have become a leading method for image generation, outperforming previous state-of-the-art GANs across benchmarks. Tools like OpenAI's DALL&middot;E and Google's ImageGen use diffusion models due to their impressive results.

The concept draws inspiration from thermodynamic diffusion. Imagine Sophie, an art restorer in Paris, uncovering a dirty, faded painting in an attic. Carefully, she removes the grime layer by layer, gradually revealing the vibrant image underneath. This mirrors the denoising diffusion process: starting with pure noise, a model gradually refines it into a clear image, step by step.

## Forward and Reverse Diffusion Process

### Dataset

A large and varied dataset of images is required to explore the forward diffusion process. In this walkthrough, the [Oxford 102 Flower Dataset](https://www.kaggle.com/datasets/nunenuh/pytorch-challange-flower-dataset) is used.

Loading images with Keras:

```python
```
