<h1 style="color: #ccc">Machine Reasoning</h1>

# Neural Networks

*Feb 23, 2025*

## Artificial Neural Networks

1.  Introduction

    -   Artificial neural network is a key machine learning (ML) technique.
    -   Inspired by human brain, used in image recognition and natural language processing (NLP).
    -   Composed of neurons (nodes) that work together to solve problems.

2.  Biological Inspiration

    -   Neurons in the brain process signals electrochemically.
    -   Artificial neurons mimic this process through mathematical models.

## Perceptron

**Introduction**

The **perceptron** is the simplest type of artificial neural network (ANN) and is primarily used for binary classification tasks. It was first introduced by Frank Rosenblatt in 1958 as a computational model for understanding how biological neurons function.

**Structure**

A perceptron consists of:

-   **Input Layer**: A set of input features.
-   **Weights**: Each input is assigned a weight to represent its importance.
-   **Summation Function**: Computes the weighted sum of inputs.
-   **Activation Function**: Applies a threshold to determine the output.
-   **Output**: A binary decision ($0$ or $1$).

**Mathematical Representation**

Given an input vector $\mathbf{x}=(x_1,x_2,\cdots,x_n)$ and corresponding weights $\mathbf{w}=(w_1,w_2,\cdots,w_n)$, the percentron computes:

$$
z=\mathbf{w}^\top\mathbf{x}+b=\sum_{j=1}^nw_jx_j+b
$$

where $b$ is the **bias** term

The activation function is typically a step function:

$$
f(z)=
\begin{cases}
1,&\text{if }z\geq0\\
0,&\text{otherwise}
\end{cases}
$$

**Learning Algorithm**

The perceptron learning algorithm adjusts the weights based on the classification error using the following update rule:

1.  Initialise weights and bias to small random values.
2.  For each training sample $(\mathbf{x}^{(i)},y^{(i)})$:

    -   Compute predicted output: $\hat{y}^{(i)}=f\left(\mathbf{w}^\top\mathbf{x}^{(i)}+b\right)$

        $$
        w_j=w_j+\eta\left(y^{(i)}-\hat{y}^{(i)}\right)x_j\\
        b=b+\eta\left(y^{(i)}-\hat{y}^{(i)}\right)
        $$

        where $\eta$ is the **learning rate**.

3.  Repeat until convergence or for a predefined number of iterations.

**Limitations**

-   Can only solve **linearly separable** problems (e.g., AND, OR gates but not XOR).
-   Cannot learn complex patterns due to its **single-layer structure**.
-   Sensitive to the choice of learning rate and initial weights.

**Applications**

-   Basic classification tasks.
-   Function approximation.
-   Early image recognition systems.

**Conclusion**

While perceptrons are limited in their capabilities, they form the foundation of more advanced neural networks, such as **multi-layer perceptrons (MLPs)** and **deep learning models**. Their simplicity makes them an excellent starting point for understanding neural networks.

## Multi-Layer Perceptron (MLP)

**Introduction**

A **Multi-Layer Perceptron (MLP)** is a type of artificial neural network (ANN) that consists of multiple layers of neurons. It is one of the most fundamental architectures used in deep learning and can approximate complex functions by **learning heirarchical representations** from data.

**Architecture**

MLP is composed of the following layers:

1.  **Input Layer**
    -   Receives the raw input features (e.g., pixels in an image, attributes in a dataset).
    -   The numbers of neurons corresponds to the number of input features.
2.  **Hidden Layers**
    -   Consists of multiple layers of neurons, each applying a nonlinear activation function.
    -   Each neuron in a hidden layer receives input from all neurons in the previous layer and computes an output using weighted sums and an activation function.
3.  **Output Layer**
    -   Produces the final prediction.
    -   For classification problems, it uses activation functions like **softmax** or **sigmoid**.
    -   For regression problems, it uses a **linear** activation function.

**Mathematical Representation**

Each neuron performs the following computations:

$$
\mathbf{z}=\mathbf{W}\mathbf{x}+\mathbf{b}\\
\mathbf{a}=f(\mathbf{z})
$$

where:

-   $\mathbf{x}$ is the input vector.
-   $\mathbf{W}$ is the weight matrix.
-   $\mathbf{b}$ is the bias vector.
-   $\mathbf{z}$ is the vector that is the linear combination of inputs and weights.
-   $f(\mathbf{z})$ is the activation function applied to introduce non-linearity.
-   $\mathbf{a}$ is output vector from current neural layer which will be the input vector to the next neural layer.

**Activation Functions**

MLPs use **activation functions** to introduce **non-linearity**, which allows them to learn complex patterns. Common activation functions include:

1.  **Linear**

    $$
    f(z)=z
    $$

    -   Used in the output layer for regression.
    -   Cannot be used in hidden layers, as it is non-linearity.

1.  **Sigmoid**

    $$
    f(z)=\frac{1}{1+e^{-z}}
    $$

    -   Used in the output layer for binary classification.
    -   Issues: Vanishing gradient problem.

2.  **Softmax**

    $$
    f(z_i)=\frac{e^{z_i}}{\sum_je^{z_j}}
    $$

    -   Used in the output layer multi-class classification.

3.  **ReLU (Rectified Linear Unit)**

    $$
    f(z)=\max(0,z)
    $$

    -   Most commonly used in hidden layers.
    -   Helps mitigate vanishing gradients.

4.  **Tanh (Hyperbolic Tangent)**

    $$
    f(z)=\frac{e^z-e^{-z}}{e^z+e^{-z}}
    $$

    -   Most commonly used in hidden layers.
    -   Centred around zero, making optimisation easier.

**Forward Propagation**

**Forward propagation** is the process of passing the input through the network layers to compute the output.

1.  Compute weighted sums for each neural layer:

    $$
    \mathbf{z}^l=\mathbf{W}^l\mathbf{a}^{l-1}+\mathbf{b}^l
    $$

    -   Here, $\mathbf{a}^{l-1}$ is the activation output from the previous layer (where for the first hidden layer, $\mathbf{a}^0=\mathbf{x}$, the input layer).

2.  Apply activation function:

    $$
    \mathbf{a}^l=f(\mathbf{z}^l)
    $$

    -   The computed $\mathbf{a}^l$ will serve as input to the next layer.

3.  Repeat for each layer until reaching the output.

**Loss Gradient with Respect to Weight** $\mathbf{W}^l$

We start from the loss function $L$, and we want to find $\frac{\partial L}{\partial \mathbf{W}^l}$. Using the chain rule:

$$
\frac{\partial L}{\partial \mathbf{W}^l}=\frac{\partial L}{\partial \mathbf{a}^l}\cdot\frac{\partial\mathbf{a}^l}{\partial\mathbf{z}^l}\cdot\frac{\partial\mathbf{z}^l}{\partial\mathbf{W}^l}
$$

-   $\frac{\partial L}{\partial\mathbf{a}^l}$ is the gradient of the loss with respect to the activations.
-   $\frac{\partial\mathbf{a}^l}{\partial\mathbf{z}^l}=f^\prime(\mathbf{z}^l)$ is the derivative of the activation function.
-   $\frac{\partial\mathbf{z}^l}{\partial\mathbf{W}^l}=\mathbf{a}^{l-1}$ since $\mathbf{z}^l=\mathbf{W}^l\mathbf{a}^{l-1}+\mathbf{b}^l$.

Thus, the weight gradient is:

$$
\frac{\partial L}{\partial\mathbf{W}^l}=\delta^l\cdot(\mathbf{a}^{l-1})^\top
$$

where:

$$
\delta^l=\frac{\partial L}{\partial\mathbf{a}^l}\cdot f^\prime(\mathbf{z}^l) \tag{1}
$$

**Loss Gradient with Respect to Bias** $b^l$

The bias gradient follows a similar chain rule:

$$
\frac{\partial L}{\partial\mathbf{b}^l}=\frac{\partial L}{\partial\mathbf{a}^l}\cdot\frac{\partial\mathbf{a}^l}{\partial\mathbf{z}^l}\cdot\frac{\partial\mathbf{z}^l}{\partial\mathbf{b}^l}
$$

Since $\frac{\partial\mathbf{z}^l}{\partial\mathbf{b}^l}=1$, the result is simplified to:

$$
\frac{\partial L}{\partial\mathbf{b}^l}=\delta^l
$$

**Backpropagation**

During backpropagation, we redistribute the error from layer $l+1$ to layer $l$.

From $(1)$, applying chain rule from layer $l+1$ to layer $l$:

$$
\frac{\partial L}{\partial\mathbf{a}^l}=\frac{\partial L}{\partial\mathbf{z}^{l+1}}\cdot\frac{\partial\mathbf{z}^{l+1}}{\partial\mathbf{a}^l}
$$

$$
\frac{\partial L}{\partial\mathbf{a}^l}=\frac{\partial L}{\partial\mathbf{a}^{l+1}}\cdot\frac{\partial\mathbf{a}^{l+1}}{\partial\mathbf{z}^{l+1}}\cdot\frac{\partial\mathbf{z}^{l+1}}{\partial\mathbf{a}^l}
$$

-   $\frac{\partial L}{\partial\mathbf{a}^{l+1}}\cdot\frac{\partial\mathbf{a}^{l+1}}{\partial\mathbf{z}^{l+1}}=\delta^{l+1}$ is the error term telling us how much the loss is affected by changes in $\mathbf{z}^{l+1}$.
-   $\frac{\partial\mathbf{z}^{l+1}}{\partial\mathbf{a}^l}=\mathbf{W}^{l+1}$ since $\mathbf{z}^{l+1}=\mathbf{W}^{l+1}\mathbf{a}^l+\mathbf{b}^{l+1}$.

This simplifies the backpropagation to:

$$
\frac{\partial L}{\partial\mathbf{a}^l}=\delta^{l+1}\cdot\mathbf{W}^{l+1}
$$

Adjusting matrix multiplication to match matrix dimensions:

$$
\frac{\partial L}{\partial\mathbf{a}^l}=(\mathbf{W}^{l+1})^\top\delta^{l+1} \tag{2}
$$

**Backpropagation Intuition**

Error Distribution Intuition:

Each neuron in layer $l$ is connected to multiple neurons in layer $l+1$. Each of those neurons in $l+1$ contributes some amount of error back to layer $l$. The weight matrix $\mathbf{W}^{l+1}$ determines how strongly each neuron in layer $l$ contributes to the activations in layer $l+1$. Since we are moving the error backwards, the contributions from all neurons in layer $l+1$ combine, and the transpose of $\mathbf{W}^{l+1}$ naturally redistributes the error back to layer $l$.

Blame Assignment Intuition:

If an output neuron has a large error, we "blame" the neurons before it. The weight matrix $\mathbf{W}^{l+1}$ tells us how much each neuron in the previous layer was responsible for the next layer's error. When backpropagating, we use $\mathbf{W}^{l+1}$ to distribute the error back, but since we are going in reverse, we take its transpose.

**Training and Parameters Update**

Use gradient descent V(or variants like Adam, RMSprop) to update weights and biases:

$$
\mathbf{W}^l=\mathbf{W}^l-\eta\cdot\frac{\partial L}{\partial\mathbf{W}^l}
$$

$$
\mathbf{b}^l=\mathbf{b}^l-\eta\cdot\frac{\partial L}{\partial\mathbf{b}^l}
$$

where $\eta$ is the learning rate.

Repeat and iterate over multiple epochs until the model reaches an optimal solution (convergence).

Gradients with respect to weights and bias:

$$
\frac{\partial L}{\partial\mathbf{W}^l}=\delta^l(a^{l-1})^\top
$$

$$
\frac{\partial L}{\partial\mathbf{b}^l}=\delta^l
$$

From $(1)$ and $(2)$, the error term $\delta^l$ for layer $l$ from layer $l+1$:

$$
\delta^l=(\mathbf{W}^{l+1})^\top\delta^{l+1}\odot f^\prime(z^l)
$$

At the output layer, the error term $\delta^L$ is:

$$
\delta^L=\frac{\partial L}{\partial\mathbf{a}^L}\cdot f^\prime(\mathbf{z}^L)
$$

**Gradients for Different Loss Functions**

1.  Mean Squared Error (MSE)

    Used for regression (when the output layer uses a linear activation):

    $$
    L=\frac{1}{2}\sum(a^L-y)^2
    $$

    Gradient:

    $$
    \frac{\partial L}{\partial\mathbf{a}^L}=\mathbf{a}^L-\mathbf{y}
    $$

2.  Binary Cross-Entropy Loss

    Used for binary classification (when the output layer uses a sigmoid activation):

    $$
    L=-\sum\left[y\log a^L+(1-y)\log(1-a^L)\right]
    $$

    Gradient:

    $$
    \frac{\partial L}{\partial\mathbf{a}^L}=\frac{\mathbf{a}^L-\mathbf{y}}{\mathbf{a}^L(1-\mathbf{a}^L)}
    $$

3.  Categorical Cross-Entropy Loss

    Used for multi-class classification (when the output layer uses softmax activations):

    $$
    L=-\sum_iy_i\log a_i^L
    $$

    Gradient:

    $$
    \frac{\partial L}{\mathbf{z}^L}=\mathbf{a}^L-\mathbf{y}
    $$

    (Only works with softmax outputs, this simplifies because softmax and cross-entropy derivatives cancel out.)

**Gradients for Different Activation Functions**

1.  Linear

    $$
    f(z)=z
    $$

    Gradient:

    $$
    f^\prime(\mathbf{z}^l)=\frac{\partial\mathbf{a}^l}{\partial\mathbf{z}^l}=1
    $$

2.  Sigmoid

    $$
    f(z)=\frac{1}{1+e^{-z}}
    $$

    Gradient:

    $$
    f^\prime(\mathbf{z}^l)=\frac{\partial\mathbf{a}^l}{\partial\mathbf{z}^l}=\mathbf{a}^l(1-\mathbf{a}^l)
    $$

3.  Softmax

    $$
    f(z_i)=\frac{e^{z_i}}{\sum_je^{z_j}}
    $$

    Gradient:

    $$
    \frac{\partial L}{\mathbf{z}^L}=\mathbf{a}^L-\mathbf{y}
    $$

    (Only works with cross-entropy loss function, this simplifies because softmax and cross-entropy derivatives cancel out.)

4.  ReLU

    $$
    f(z)=\max(0,z)
    $$

    Gradient:

    $$
    f^\prime(\mathbf{z}^l)=
    \begin{cases}
    1,&z>0\\
    0,&z\leq0
    \end{cases}
    $$

5.  Tanh

    $$
    f(z)=\frac{e^z-e^{-z}}{e^z+e^{-z}}
    $$

    Gradient:

    $$
    f^\prime(\mathbf{z}^l)=\frac{\partial\mathbf{a}^l}{\partial\mathbf{z}^l}=1-(\mathbf{a}^l)^2
    $$

**Optimisation Techniques**

1.  Stochastic Gradient Descent (SGD)

    -   Updates weights using small random batches instead of the entire dataset.
    -   Faster but noisier than batch gradient descent.

2.  Momentum

    -   Helps accelerate SGD by adding a fraction of the previous update to the current one.

3.  Adam (Adaptive Moment Estimation)

    -   Combines momentum and adaptive learning rates for faster convergence.

4.  Batch Normalisation

    -   Normalises inputs to each layer to stabilise learning and improve convergence speed.

**Regularisation Techniques**

1.  L1 and L2 Regularisation (Weight Decay):

    -   Prevents overfitting by penalising large weights.
    -   L1 encourages sparsity; L2 discourages large weights.

2.  Dropout

    -   Randomly drops neurons during training to prevent overfitting.

3.  Early Stopping

    -   Stops training when validation performance deteriorates.

**Applications**

MLPs are widely used in various applications, including:

-   Image recognition: Feature extraction and classification.
-   Natural language processing (NLP): Sentiment analysis, text classification.
-   Financial forecasting: Stock price prediction, risk assessment.
-   Medical diagnosis: Disease prediction based on patient data.
-   Recommendation systems: Personalised content recommendations.

## Kolmogorov-Arnold Networks

**Criticism of Neural Networks**

1.  Neural networks lack explainability, making it difficult to understand hidden layers despite high accuracy.

2.  Synaptic weights are hard to interpret, unlike traditional techniques, reinforcing the "black box" nature.

**Kolmogorov-Arnold Networks (KAN)s**

1.  More explainable alternative to Multi-Layer Perceptron (MLPs).

2.  Inspired by the Kolmogorov-Arnold representation theorem.

3.  Strong mathematical foundation, similar to MLPs.

**MLP vs. KAN**

1.  MLPs use fixed activation functions on neurons.

2.  KANs use learnable activation functions on edges (weights).

3.  This shift improves accuracy and interpretability.

**Accuracy & Interpretability**

1.  Higher Accuracy

    -   Smaller KANs achieve similar or better accuracy than large MLPs.
    -   Faster neural scaling laws.

2.  Better Interpretability

    -   Can be visualised and understood by humans.
    -   Researchers can analyse activation functions and summarise KANs into intuitive one-line functions.

**Potential for Scientific Discovery**

1.  Promising alternatives to MLPs, enhancing deep learning.

2.  Helps scientists (re)discover mathematical and physical laws.

3.  Ziming Liu (MIT):

    "KANs generate hypotheses like an alien life that sees things differently but remains understandable to humans."

**Future & Challenges**

1.  Potential Applications

    -   Embedding prior expert knowledge into KANs.
    -   Aiding physics research (e.g., high-temperature superconductors, nuclear fusion).

2.  Downside

    -   Slower training per parameter due to GPU inefficiency.
    -   Likely not replacing CNNs and transformers, but useful for smaller-scale physics problems.

## Transformers

**Neural Networks vs. Transformers**

1.  Neural Networks

    -   Sequential Processing: Words are processed one after another.
    -   Slow and Context-Losing: Struggles with long-distance relationships between nodes.

2.  Transformers

    -   Parallel Processing: Uses attention mechanisms to process all words simultaneously.
    -   Context-Aware: Tracks relationships between words, enhancing comprehension.

3.  Example: "*What is the colour of the sky?*"

    -   Traditional NNs struggle to connect "*colour*", "*sky*", and "*blue*" over long distances.
    -   Transformers learn relationships effectively, producing "*The sky is blue.*"

**Evolution from Early Models to Transformers**

1.  Early NLP Models and Their Limitations

    -   Early models relied on word frequency and co-occurence patterns.
    -   Struggled with long-range dependencies, limiting their ability to maintain context across multiple sentences.
    -   Example: "*I am from Italy. I speak Italian.*"

        Early models failed to associate "*Italy*" with "*Italian*", leading to weak understanding.

2.  The Shift to Transformers

    -   Traditional NLP models predicted the next word based on previous words, often relying on simple statistical relationships.
    -   Example: A smartphone's autocomplete suggesting "*fine*" after typing "*I am*", based on word frequency.
    -   Transformers revolutionised NLP by enabling:
        -   Long-range dependencies in text.
        -   Better context retention across sentences.
        -   Improvements in tasks like translation, summarisation, and sentiment analysis.
    -   Unlike earlier models, transformers effectively handle complex relationships in text, significantly improving accuracy and efficiency in NLP tasks.

3.  Transformer Architecture

    -   A deep neural network using multiple layers, including multi-head self-attention and feedforward networks.
    -   Enables parallel processing for faster learning and inference.
    -   Key innovations:
        -   Positional Encoding: Assigns unique numbers to words, helping the model understand word order.
        -   Self-Attention: Allows the model to analyse all words at once, determining importance dynamically.

4.  Self-Attention

    -   Words influence each other based on context, improving understanding over time.
    -   Enhances efficiency, making training on large datasets feasible.
    -   Effective for long text sequences by considering distant context.

5.  Applications

    -   NLP tasks (e.g., translation, summarisation).
    -   Biological sequence analysis (e.g., DNA, proteins).
    -   Programming language modelling and more.

## Explainable AI

**Explainable AI (XAI)**

1.  Explainability vs. Performance Trade-off

    -   Black-box AI offers high performance but lacks interpretability.
    -   XAI aims to make AI decisions transparent and understandable.

2.  Algorithmic Fairness

    -   Right to Explanation mandates that individuals can request an explanation for automated decisions.
    -   Example: A loan applicant denied by an AI system has the right to know why.

**Decision Trees & Explainability**

1.  Decision Trees (DTs) are widely used for knowledge discovery.

2.  DTs offer both

    -   Performance (predictive power).
    -   Explainability (transparent decision paths).

3.  Other models, like deep learning, achieve higher performance but at the cost of explainability.

**Towards XAI: System Modelling & Design**

1.  XAI is not AI that explains itself, it is AI designed not to need explanations.

2.  Instead of choosing between simple, explainable models and complex black-box models, a better approach is:

    -   Understanding user needs for explanations.
    -   Designing AI to provide intermediate outputs that enhance transparency.

3.  Case Study: AI application monitors learners of sign language using a camera and provides feedback.

    -   Black-Box Model: Detects mistakes but provides only generic feedback (e.g., "Try again").
    -   Explainable Model: Identifies specific mistakes (e.g., incorrect handshape) and provides targeted feedback.

**Key to Appropriate Modelling: Domain Understanding**

1.  Effective AI requires a clear understanding of human-machine interactions:

    -   Positions of machines and human operators.
    -   Inputs → Inference → Outputs: Define what to observe, how to infer meaning, and what actions to take.
