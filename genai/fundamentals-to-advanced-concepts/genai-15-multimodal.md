1.  LoRA can be fine tune with as few as 15-20 images.

2.  Orchestrating a Multi-Model Pipeline

```
A robust pipeline uses a central script (often in Python) to coordinate multiple model calls. Here's a more advanced example that introduces actual API usage and structured error handling.

Example Pseudocode: Orchestrating a Multi-Model Pipeline
import requests
from PIL import Image
import io

# === CONFIGURATION ===

DALLE_API = "https://api.openai.com/v1/images/generations"
DALLE_KEY = "your_openai_key"
SD_LOCAL_URL = "http://localhost:7860/sdapi/v1/img2img"
HEADERS = {"Authorization": f"Bearer {DALLE_KEY}"}

# === FUNCTIONS ===

def generate(prompt):
    response = requests.post(DALLE_API, headers=HEADERS, json={"prompt": prompt})
    if response.ok:
        img_url = response.json()["data"][0]["url"]
        return requests.get(img_url).content
    raise Exception("DALL·E API failed")

def refine(image_bytes):
    files = {"init_images": ("input.png", image_bytes, "image/png")}
    payload = {"prompt": "cinematic lighting", "denoising_strength": 0.6}
    response = requests.post(SD_LOCAL_URL, files=files, data=payload)
    if response.ok:
        return response.content
    raise Exception("Stable Diffusion failed")

def save_image(data, filename):
    image = Image.open(io.BytesIO(data))
    image.save(filename)

# === MAIN WORKFLOW ===

def main():
    try:
        print("Step 1: Generating base image with DALL·E...")
        base = generate("A futuristic cityscape at dusk")

        print("Step 2: Refining with Stable Diffusion...")
        refined = refine(base)

        print("Step 3: Saving final output...")
        save_image(refined, "final_output.png")

    except Exception as e:
        print(f"Pipeline failed: {e}")

        # Optionally log error, retry, or revert to cached fallback

main()
```

## References

1. [Google Cloud – Multimodal AI Use Cases](https://cloud.google.com/use-cases/multimodal-ai?utm_source=chatgpt.com)
2. [MIT CSAIL – Frontiers of Generative AI](https://www.csail.mit.edu/news/mit-csail-researchers-discuss-frontiers-generative-ai?utm_source=chatgpt.com)
3. [Stanford CS231n – VAEs and Diffusion Lecture Slides (PDF)](https://cs231n.stanford.edu/slides/2023/lecture_15.pdf?utm_source=chatgpt.com)
4. [Replicate – Stable Diffusion API](https://replicate.com/stability-ai/stable-diffusion?utm_source=chatgpt.com)
