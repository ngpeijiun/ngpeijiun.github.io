<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Audio Cognition

<div class="badge">
    <span class="key">Type</span>
    <span class="value">Course</span>
</div>
<div class="badge">
    <span class="key">Instructor</span>
    <span class="value">Gary Leung</span>
</div>
<div class="badge">
    <span class="key">Institution</span>
    <span class="value">NUS-ISS</span>
</div>
<div class="badge">
    <span class="key">Note Updated</span>
    <span class="value">2025-07-16</span>
</div>

## Learning Outcomes

By the end of this course, you will be able to:

1.  Explain how machines perceive, understand, and interpret auditory inputs such as *sound*, *speech*, and *music*.
2.  Describe the fundamental concepts of **audio signal processing**.
3.  Evaluate the performance of state-of-the-art models, including **audio foundation models**, in audio cognition tasks.

## Audio, Speech, and Music

1.  **Audio**<br>
    Vibrations that travel through a medium and are perceived by the ear. Includes speech, music, sound effects, and ambient noise.
2.  **Speech**<br>
    Vocal communication using vocal cords to produce meaningful sounds. Used for information exchange, emotional expression, and social interaction.
3.  **Music**<br>
    Artistic expression through organised sounds and rhythms.
    -   **Elements**: melody, harmony, rhythm, instrumentation, vocals, lyrics, arrangement.
    -   **Purpose**: aethetic enjoyment and emotional impact.

## Audio Applications

Machines can interpret and respond to auditory inputs in various real-world applications, including:

1.  **Voice Assistants and Smart Speakers**
    -   Used for hand-free queries, reminders, smart home control, and more.
    -   Examples: Amazon Alexa, Google Assistant, Apple Siri, Microsoft Cortana.
2.  **Interactive Voice Response (IVR) Systems**
    -   Deployed in customer service phone lines for banks, airlines, and utility providers.
    -   Allow automated call routing and self-service interactions via voice commands.
3.  **Voice Command Systems in Vehicles**
    -   Enable drivers to control GPS, music, and calls without taking hands off the wheel.
4.  **Voice-Activated Home Automation**
    -   Controls lighting, thermostats, appliances, and security systems using spoken commands.
5.  **Language Learning Apps**
    -   Provide interactive speaking and listening practice for learners.
    -   Offer pronouncation feedback and conversational simulations.
6.  **Speech Therapy Tools**
    -   Assist individuals with speech impairments through guided exercises and feedback.
    -   Used in clinical and at-home rehabilitation.

## Audio Signal Processing

### Sampling Rate

What is Sampling?

1.  **Analog audio** is a continuous waveform.
2.  **Sampling** converts this analog signal into a digital one by measuring it at regular time intervals.
3.  Each measurement is called a **sample**.
4.  The **sampling rate** is how many samples are taken per second (measured in **Hz**).

>   ![Sampling Rate](_media/irs-2-sampling-rate.png)

Human Auditory Range

1.  The human ear typically hears frequencies from **50 Hz to 15 kHz**.
2.  To capture all these frequencies, a sufficiently high sampling rate is needed.

Nyquist Theorem

1.  To accurately reconstruct a signal, the sampling rate should be **at least twice the highest frequency** in the signal.
2.  For speech (~ 15 kHz max), at least **30 kHz** is required.

Common Sampling Rates

| Use Case | Sampling Rate |
|:---|:---|
| Telephone-grade audio | 8 kHz |
| Mobile/PC voice communication | 16 kHz |
| CD-quality audio | 44.1 kHz |

### Audio Coding

Quantisation

1.  Continuous signal levels are **quantised to discrete values**.
2.  Each sample is represented as a fixed-point number in computer. Example: 16-bit representation ranges from $-32,767$ to $32,767$.

Encoding Format

1.  **Linear Coding**
    -   **Pulse-Code Modulation (PCM)** is the basic method for digitally representing audio signals.
    -   16-bit PCM is widely used in **speech processing**.
2.  **Non-linear Coding**
    -   **A-law** (Europe) and **μ-law (mu-law)** (US and Japan) use only 256 levels with 8-bit encoding.
    -   Logarithmic encoding (A-law/μ-law) allocates more resolution to quieter sounds, where human hearing is more sensitive. Despite using fewer bits, non-linear coding preserves quality&mdash;making it efficient for bandwidth-limited systems like traditional telephony.

### File Formats

Popular Formats

1.  **WAV**: PCM-based, uncompressed, lossless. Developed by Microsoft and IBM.
2.  **MP3**: Lossy compression format.
3.  **FLAC**: Free Lossless Audio Codec, widely supported.
4.  **OGG**: Free multimedia container format, supports various codecs.

Speech Processing

1.  Usually uses *non-compressed PCM* format for audio input.
2.  Speech recognition models are often tailored for *specific sampling rates*.

### Spectrogram

To better understand how audio signals vary over time and frequency, we use **spectrograms**, which transform 1D waveforms into 2D representations.

1.  **Waveform** (1D): Represents amplitude over time.
2.  **Spectrogram** (2D): Represents how frequencies evolve over time.
    -   **X-axis** → Time
    -   **Y-axis** → Frequency
    -   **Colour Intensity** → Amplitude/Energy (e.g., yellow = strong signal, purple = weak signal)

The spectrogram shows which frequencies are active at each time slice and how strong they are.

## Speech and Audio Systems

**Evolution of Speech Recognition Systems**

| Era | Method | Characteristics |
|:---|:---|:---|
| Since 1952 | Pattern Matching | <span style="color: #888">- Early systems for isolated word recognition<br>- Uses templates and distance metrics</span> |
| Since 1980 | HMM Models (GMM-HMM) | <span style="color: #888">- Statistical modelling of speech sequences<br>- Suitable for **continuous speech**<br>- **Accuracy limited** by hand-crafted features</span> |
| Since 2009 | Deep Learning (DNN-HMM) | <span style="color: #888">- Replaces GMMs with DNNs for acoustic modelling<br>- Improves robustness on **natural speech**<br>- Language models were still largely n-gram-based, not LLMs</span> |
| Since 2017 | End-to-End ASR | <span style="color: #888">- Replaces pipeline with **unified neural architecture** (e.g., encoder-decoder, CTC loss function)<br>- Requires **large speech datasets**<br>- Better generalisation and latency</span>

**Challenges in Automatic Speech Recognition (ASR)**

Common challenges affecting ASR accuracy:

1.  **Device and Channel Mismatch**<br>
    Different microphones and hardware cause signal variations.
2.  **Background Noise**<br>
    Environmental sounds reduce signal clarity.
3.  **Speaker Differences**<br>
    Variations in pitch, pace, gender, and style.
4.  **Similar Pronunciations**<br>
    Hard to disambiguate based on audio alone. E.g., "write" vs "right".
5.  **Accent and Dialect Variation**<br>
    Regional and cultural pronunciation differences.
6.  **Pronunciation Variation in Continuous Speech**<br>
    Words blend together; less clear articulation.
7.  **Prosody Differences**<br>
    Intonation, rhythm, and stress patterns impact recognition.
8.  **Homographs (Multiple Pronunciations)**<br>
    Words like "read":
    -   Present: /riːd/ (reed)
    -   Past: /rɛd/ (red)

Also consider challenges like reverberation, overlapping speech, and [spontaneous vs. read speech](https://languagelog.ldc.upenn.edu/nll/?p=60956).

**Evolution of Text-to-Speech (TTS) Systems**

| Era | Method | Description |
|:---|:---|:---|
| Since 1970s | Early Methods | <span style="color: #888">- Based on **formant synthesis** and **PSOLA**<br>- Fully rule-based and robotic sounding</span> |
| Since 1990s | Concatenation Methods | <span style="color: #888">- **Unit selection** from pre-recorded speech<br>- Higher naturalness, less flexible</span> |
| Since 2000 | HHM-Based Methods | <span style="color: #888">- Models speech parameters using **HMMs**<br>- Combines with **vocoder** for waveform generation</span> |
| Since 2012 | Deep Learning | <span style="color: #888">- Uses **DNNs** to model acoustic features<br>- Improves prosody and expressiveness</span> |
| Since 2017 | End-to-End Models | <span style="color: #888">- Fully neural systems (e.g., Tacotron, WaveNet)<br>- Learns mapping from text to waveform directly<br>- High quality, human-like speech</span> |

## Paradigm Shift

A paradigm shift in AI and audio development, transitioning through:

1.  **Machine Learning**
    -   Focus: "*how*" (methods)
    -   Emphasis: learning algorithms
    -   Trend: homogenisation of learning techniques
2.  **Deep Learning**
    -   Focus: features
    -   Emphasis: architectures
3.  **Foundational Models**
    -   Focus: functionalities
    -   Emphasis: models

## Audio Foundation Models

Foundation models, trained on large-scale **multimodal** data such as text, images, and speech, are adapted for specific tasks, transforming general-purpose models into specialised systems. With transformer-based architectures, these models have significantly advanced speech recognition by learning rich audio representations. These models scale up to billions of parameters and support tasks such as **automatic speech recognition (ASR)**, **speaker identification**, and **emotion detection**.

Source: Bommasani et al. (2021), *On the Opportunities and Risks of Foundation Models*

**Categories of Tasks**

1.  **Discriminative Tasks**<br>
    Make discrete decisions on continuous speech input (e.g., classification).
2.  **Generative Tasks**<br>
    Generate continuous speech from input sources (e.g., text-to-speech, music generation).

**Examples**

1.  **Speech Foundation Models**: Whisper, Wav2Vec 2.0
2.  **Audio/Music Generative Models**: AudioGen, AudioLDM2, MusicGen

**Multi-Task Capability**

1.  Supports different tasks using a single model.
2.  Supports multiple spoken languages.

**Multimodality**

1.  Mirrors human perception across senses.
2.  Enables more user-friendly and flexible interfaces.
3.  Facilitates comprehensive problem-solving through multi-modal inputs.

## Whisper Model

1.  Trained on 680k hours of multilingual and multitask supervised data.
2.  Supports three key tasks:
    -   Speech Recognition
    -   Speech Translation
    -   Language Recognition
3.  Model variants with parameter sizes: 39M, 74M, 244M, 769M, 1550M.
