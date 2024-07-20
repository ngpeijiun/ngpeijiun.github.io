<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Vision Cognition

<div class="badge">
    <span class="key">Type</span>
    <span class="value">Course</span>
</div>
<div class="badge">
    <span class="key">Instructor</span>
    <span class="value">Tian Jing</span>
</div>
<div class="badge">
    <span class="key">Institution</span>
    <span class="value">NUS-ISS</span>
</div>
<div class="badge">
    <span class="key">Note Updated</span>
    <span class="value">2025-06-27</span>
</div>

## Cognition

**Cognition** is the mental action or process of acquiring knowledge and understanding through:

1.  **Senses**<br>
    Processing input from sight, hearing, touch, smell, and taste.
2.  **Experience**<br>
    Learning from interactions and outcomes.
3.  **Thought**<br>
    Reasoning, problem-solving, decision-making.

>   "Cognition is the mental action or process of acquiring knowledge and understanding through thought, experience, and the senses" &mdash; Quoted from Wikipedia

## Vision Cognition

### Marr's Model

Based on David Marr's Vision: *A Computational Investigation into Human Representation and Processing of Visual Information (1982)*, vision processing involves three sequential stages:

1.  **Early Vision** → Raw feature detection<br>
    Detects basic object *contours* and *edges*.
2.  **Perception** → Structured visual representation<br>
    Constructs *2.5D* sketches: *surface orientations* from a specific viewpoint.
3.  **Cognition** → Semantic understanding of environment<br>
    Interprets structured data using *background knowledge* to understand *3D* objects.

### Cognitive Vision Systems

According to ECVision and modern cognitive vision literature, a cognitive vision system performs the following capabilities:

1.  **Detection**<br>
    Identify objects or events.
2.  **Localisation**<br>
    Determine spatial positions.
3.  **Recognition**<br>
    Classify and match known entities.
4.  **Understanding**<br>
    Interpret meaning in context.

Additional abilities:

1.  **Goal-directed behaviour**
2.  **Adaptation** to unforeseen visual changes
3.  **Anticipation** of object or event occurrence

Achieved through:

1.  **Semantic knowledge learning** (form, function, behaviour)
2.  **Knowledge retention** about environment and self
3.  **Deliberation** (reasoning) over objects, events, and context

References

1.  Christensen & Nagel (2006), *Cognitive Vision Systems*, Springer
2.  Ghosh (2020), *Computational Models for Cognitive Vision*, Wiley

## Knowledge from Vision Data

### Semantic Dimensions of Knowledge

Vision data encodes different types of knowledge across two dimensions:

1.  Semantic Depth
    -   **Surface Semantic**<br>
        Identifiable features
    -   **Deep Semantic**<br>
        Contextual, inferred meaning
2.  Temporal Nature
    -   **Static**<br>
        Unchanging facts
    -   **Dynamic**<br>
        Time-based context and actions

### Types of Knowledege

1.  **Entity Knowledge** (Surface, Static)<br>
    Information about discrete, identifiable objects or concepts, including attributes, properties, and classifications.<br>
    Examples: Recognising a tree, car, or person along with their colour, shape, or size.
2.  **Relational Knowledge** (Deep, Static)<br>
    Understanding connections, spatial arrangement, or contextual relationships between entities.<br>
    Examples: A person sitting on chair; the relative position of buildings.
3.  **Event Knowledge** (Surface, Dynamic)<br>
    Captures context and actions&mdash;what is happening, when, and where.<br>
    Examples: Two people shaking hands; a car turning left at a junction.
4.  **Common Sense Knowledge** (Deep, Static/Dynamic)<br>
    General world knowledge humans use to interpret scenes.<br>
    Examples: Knowing that a cup is on a table and not floating in air.
5.  **Procedural Knowledge** (Deep, Dynamic)<br>
    Sequences of actions to achieve a goal.<br>
    Examples: Steps for handwashing; how to assemble furniture.

### Visual Summary

| | Static | Dynamic |
|:---|:---|:---|
| **Factual Knowledge** | Entity Knowledge | Event Knowledge |
| **Common Knowledge** | Relational Knowledge, Common Sense Knowledge | Procedural Knowledge |

-   **Factual Knowledge** (internal)<br>
    Instance-level facts directly extracted from input vision data.
-   **Common Knowledge** (external)<br>
    Generalised patterns learnt from historical interaction with the world.

## Marr's Three Levels of Vision

1.  **Early Vision**<br>
    -   Low-level image processing (e.g., edges, contours, colours, angles).
    -   Pixel-based representation using colour or grayscale blocks, with each pixel encoded as numerical values.
2.  **Perception** (Recognition)<br>
    -   Intermediate-level image processing (object and shape recognition).
    -   Image classification, object detection, and image segmentation.
3.  **Cognition**<br>
    -   High-level understanding and reasoning from visual data.
    -   Image captioning and optical character recognition (OCR)

### Image Classification

1.  Image-Level Task: Assign a label to an entire image.
2.  Example: Label "*Egyption cat*" with confidence score.

### Object Detection

1.  Block-Level Task: Identify and localise objects using bounding boxes and labels.
2.  Example: Detect a "*cat*" with a bounding box.

### Image Segmentation

1.  Pixel-Level Task: Map each pixel in the image to an object class, producing a detailed object-wise partition of the image.
2.  Example: Foreground cat pixels segmented from background.

### Image Captioning / OCR

1.  Cognitive-Level Task: Generate a natural language description from an image.
2.  Example: "*A herd of giraffes and zebras grazing in a field.*"

## Image Augmentation Techniques

From the paper, Shorten & Khoshgoftaar (2023), *Image Augmentation Techniques for Deep Learning*, common augmentations by model include:

| Model | Techniques |
|:---|:---|
| AlexNet | Translate, Flip, Intensity Change |
| ResNet | Crop, Flip, AutoAugment, Mixup |
| YOLOv4 | Mosaic, Distortion, Flip, GridMask, StyleGAN |
| Swin Transformer | RandAugment, Mixup, CutMix, Random Erasing |

Challenges addressed:

1.  **Image Variations** (illumination, occlusion, etc.)
2.  **Class Imbalance** (few samples per class)
3.  **Domain Shift** (train/test style mismatch)
4.  **Overfitting/Data Remembering** (e.g., model memorises training examples)

## Vision Foundation Models

In practice, we do not train computer vision models from scratch. Instead, we use **pre-trained vision foundation models** (e.g., CLIP, DINO, SAM) and *fine-tune* them to specific tasks. This saves time, reduces compute costs, and benefits from large-scale pretraining on diverse datasets.

## Model Lifecycle

1.  **Data Phase**
    -   **Data Collection**<br>
        Gather raw image data.
    -   **Data Preparation**<br>
        Clean, label, and augment images.
2.  **Training Phase**
    -   **Model Training**<br>
        Train the model (or fine-tune a foundation model).
    -   **Model Evaluation**<br>
        Assess performance using metrics (e.g., accuracy, IoU).
3.  **Deployment Phase**
    -   **Model Deployment**<br>
        Integrate into application or service.
    -   **Model Validation**<br>
        Test in real-world or production-like environments.
4.  **Maintenance Phase**
    -   **Model Monitoring**<br>
        Track drift, errors, and user feedback.
    -   **Model Update**<br>
        Retrain or update with new data or better techniques.
