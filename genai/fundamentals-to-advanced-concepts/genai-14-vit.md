1. Training ViT effectively often requires large datasets, which might not be available for all domains.
2. Training ViT can be computationally intensive due to the self-attention mechanisms.
3. ViT’s sequential processing might not capture fine-grained spatial patterns as effectively as CNNs.
4. CLIP is a discriminative and classification model, but can be used to assemble dall-e 2, a generative model.
5. GLIDE is trained as a diffusion model, with U-Net architecture for the denoiser and Transformer architecture for the text encoder. It learns to undo the noise added to an image, guided by the text prompt. Finally, an Upsampler is trained to scale the generated image to 1,024 × 1,024 pixels. GLIDE trains the 3.5 billion parameters model from scratch—2.3 billon parameters for the visual part of the model (U-Net and Upsampler) and 1.2 billion parameters for the Transformer. It is trained on 250 million text–image pairs.
6. U-Net is a perfect model choice when the overall size of the image should stay the same.
7. The DALL.E 2 decoder still uses the U-Net denoiser and Transformer text encoder architectures, but additionally has the predicted CLIP image embeddings to condition on.
8. As with other diffusion models, image generation begins by sampling random noise and progressively refining it using a U-Net denoiser, which is conditioned on both the Transformer-based text encoding and the image embedding. This process produces an initial image at a resolution of 64 × 64 pixels.

   he final stage of the decoder is the Upsampler, which consists of two distinct diffusion models. The first upscales the image from 64 × 64 to 256 × 256 pixels, and the second further enhances it to a final resolution of 1,024 × 1,024 pixels, as illustrated in the figure.
9. Upsampling is advantageous because it allows the model to operate on low-resolution images during the earlier stages, avoiding the need for large, resource-intensive models to process high-dimensional data upfront. Instead, smaller images are used throughout most of the pipeline, and high-resolution outputs are generated only at the end using Upsamplers. This approach reduces the number of model parameters and makes the upstream training process significantly more efficient.
10. DALL.E 2 makes use of the pre-trained CLIP model to immediately produce a text embedding of the input prompt. Then it converts this into an image embedding using a diffusion model called the prior. Lastly, it implements a GLIDE-style diffusion model to generate the output image, conditioned on the predicted image embedding and Transformer-encoded input prompt.
11. The model’s ability to seamlessly blend complex and unrelated concepts into coherent, realistic images is truly remarkable, marking a major advancement in AI and generative modeling.

   ransformer model not only changed the Natural Language Processing area, but also changed the computer vision area dramatically. Furthermore, after we combine the natural language processing and computer vision tasks together into this text-to-image application, we found the real power of the Transformer model!
12. Vision task, classification, text-to-image generation, image-to-text generation, segmentation, anomaly detection, action recognition, autonomous driving.

## References

1. [Elucidating the Design Space of Diffusion-Based Generative Models - arXiv](https://arxiv.org/abs/2303.01469)
2. [ViT on Hugging Face](https://huggingface.co/google/vit-base-patch16-224)
3. [Fine-Tuning ViT - Hugging Face Blog](https://huggingface.co/blog/fine-tune-vit)
4. [DALL.E 2 - arXiv](https://arxiv.org/abs/2204.06125)
5. [GLIDE: Towards Photorealistic Image Generation - arXiv](https://arxiv.org/abs/2103.00020)
6. [CLIP on Hugging Face](https://huggingface.co/openai/clip-vit-base-patch32)
