<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# Diffusion Models

May 28, 2025

## Overview

Diffusion models, introduced around 2020, have become a leading method for image generation, outperforming previous state-of-the-art GANs across benchmarks. Tools like OpenAI's DALL&middot;E and Google's ImageGen use diffusion models due to their impressive results.

The concept draws inspiration from thermodynamic diffusion. Imagine Sophie, an art restorer in Paris, uncovering a dirty, faded painting in an attic. Carefully, she removes the grime layer by layer, gradually revealing the vibrant image underneath. This mirrors the denoising diffusion process: starting with pure noise, a model gradually refines it into a clear image, step by step.

## Core Components

To implement the reverse diffusion process, a neural network architecture is required that can predict the noise $\epsilon$ added to a noisy image at any timestep $\epsilon$. This architecture must also be stable and accurate enough to allow gradual denoising over multiple steps.

The model is implemented as a subclass of `tf.keras.Model` with core components listed below.

```python
class DiffusionModel(models.Model):
    def __init__(self):
        super().__init__()
        self.normalizer = layers.Normalization() # Standardises image pixel values
        self.network = unet # Use as base architecture for denoising, can capture both local and global context.
        self.ema_network = model.clone_model(self.network) # Maintains exponential moving average version of the model to improve inference stability
        self.diffusion_schedule = offset_cosine_diffusion_schedule # The offset cosine controls how noise/signal varies with time.

    def compile(self, **kwargs):
        super().compile(**kwargs)
        self.noise_loss_tracker = metrics.Mean(name="n_loss")

    @property
    def metrics(self):
        return [self.noise_loss_tracker]

    def denormalize(self, images):
        images = self.normalizer.mean + images * self.normalizer.variance**0.5
        return tf.clip_by_value(images, 0.0, 1.0)

    def denoise(self, noisy_images, noise_rates, signal_rates, training):
        network = self.network if training else self.ema_network
        pred_noises = network([noisy_images, noise_rates**2], training=training)
        pred_images = (noisy_images - noise_rates * pred_noises) / signal_rates
        return pred_noises, pred_images
```

## References

1. [Elucidating the Design Space of Diffusion-Based Generative Models - arXiv](https://arxiv.org/abs/2303.01469)
2. [A Tutorial on Variational Autoencoders - arXiv](https://arxiv.org/abs/1505.04597)
3. [Annotated Diffusion Models - Hugging Face Blog](https://huggingface.co/blog/annotated-diffusion)
4. [Image Segmentation with U-Net - Keras](https://keras.io/examples/vision/oxford_pets_image_segmentation/)
5. [Google Research - Imagen](https://imagen.research.google/)
