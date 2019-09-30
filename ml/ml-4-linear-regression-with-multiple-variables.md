<h1 style="color: #ccc">Machine Learning 4</h1>

# Linear Regression with Multiple Variables

*Oct 16, 2016*

## Multivariate Linear Regression

### Multiple Features

1. Notation

   * $ n $ = number of features
   * $ { x }^{ (i) } $ = vector input (features) of i<sup>th</sup> training example
   * $ { x }_{ j }^{ (i) } $ = value of feature $ j $ in i<sup>th</sup> training example

3. Multivariate Linear Regression Model (Linear Regression with Multiple Variables)

   $$ { h }_{ \theta  }(x)={ \theta  }_{ 0 }+{ \theta  }_{ 1 }{ x }_{ 1 }+{ \theta  }_{ 2 }{ x }_{ 2 }+\cdots +{ \theta  }_{ n }{ x }_{ n } $$

   $$ { x }_{ 0 } = 1,x=\begin{bmatrix} { x }_{ 0 } \\ { x }_{ 1 } \\ { x }_{ 2 } \\ \vdots  \\ { x }_{ n } \end{bmatrix},\theta =\begin{bmatrix} { \theta  }_{ 0 } \\ { \theta  }_{ 1 } \\ { \theta  }_{ 2 } \\ \vdots  \\ { \theta  }_{ n } \end{bmatrix} $$

   $$ { h }_{ \theta  }(x)={ \theta  }^{ \top }x $$

### Gradient Descent for Multiple Variables

1. Problem Formulation

   **Hypothesis:** $ { { h } }_{ \theta  }(x)={ \theta  }^{ \top }x={ \theta  }_{ 0 }{ x }_{ 0 }+{ \theta  }_{ 1 }{ x }_{ 1 }+{ \theta  }_{ 2 }{ x }_{ 2 }+\cdots +{ \theta  }_{ n }{ x }_{ n } $

   **Parameters:** $ { \theta  }_{ 0 },{ \theta  }_{ 1 },{ \theta  }_{ 2 },\cdots ,{ \theta  }_{ n } $

   **Cost Function:**

   $$ J(\theta)=J({ \theta  }_{ 0 },{ \theta  }_{ 1 },{ \theta  }_{ 2 },\cdots ,{ \theta  }_{ n })=\frac { 1 }{ 2m } \sum _{ i=1 }^{ m }{ { ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) }^{ 2 } } $$

   **Goal:** $ \underset { \theta  }{ min } J(\theta )=\underset { { \theta  }_{ 0 }{ \theta  }_{ 1 }{ \theta  }_{ 2 }\cdots { \theta  }_{ n } }{ min } J({ \theta  }_{ 0 },{ \theta  }_{ 1 },{ \theta  }_{ 2 },\cdots ,{ \theta  }_{ n }) $

2. Gradient Descent:

   ```
   repeat until convergence {
   ```

   $$ { \theta  }_{ j }:={ \theta  }_{ j }-\alpha \frac { \partial  }{ \partial { \theta  }_{ j } } J(\theta )={ \theta  }_{ j }-\alpha \frac { \partial  }{ \partial { \theta  }_{ j } } J({ \theta  }_{ 0 },\cdots ,{ \theta  }_{ n }) $$

   (simultaneously update for every $ j=0,\cdots ,n $)

   ```
   }
   ```

3. Solving derivative

   $$ \frac { \partial  }{ \partial { \theta  }_{ j } } J(\theta )=\frac { 1 }{ m } \sum _{ i=1 }^{ m }{ ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }){ x }_{ j }^{ (i) } } $$

4. Algorithm

   ```
   repeat until convergence {
       simultaneous for j in 0..n {
   ```

   $$ { \theta  }_{ j }:={ \theta  }_{ j }-\alpha \frac { 1 }{ m } \sum _{ i=1 }^{ m }{ { (h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) } { x }_{ j }^{ (i) } $$

   ```
       }
   }
   ```

### Gradient Descent in Practice - Feature Scaling

1. If you make sure that the features are on similar scale, take on similar ranges of values, then gradient descent can converge more quickly. Otherwise, the contour shape may be very very skewed and uneven, gradient descent can oscillate back and forth and may end up taking a long time before it finally find its way to the global minimum.

2. Get every feature into approximately a $ -1\le { x }_{ i }\le 1 $ range.

3. Mean Normalization

   To make features have approximately zero mean (do not apply to $ { x }_{ 0 } $), i.e. $ -0.5\le { x }_{ i }\le 0.5 $

   $$ { x }_{ i }:=\frac { { x }_{ i }-{ \mu  }_{ i } }{ { s }_{ i } } \quad or\quad { x }_{ i }:=\frac { { x }_{ i }-{ \mu  }_{ i } }{ { \sigma  }_{ i } } $$

   * $ { \mu  }_{ i } $ = mean
   * $ { s }_{ i } $ = range (max - min)
   * $ { \sigma }_{ i } $ = standard deviation

### Gradient Descent in Practice - Learning Rate

1. To make sure gradient descent is working correctly, $ J(\theta ) $ should decrease with number of iterations. If $ J(\theta ) $ increases or doesn't converge with number of iterations, use smaller $ \alpha $.

2. For sufficiently small $ \alpha $, $ J(\theta ) $ should decrease on every iteration. But if $ \alpha $ is too small, gradient descent can be slow to converge.

3. Choosing $ \alpha $

   $$ \cdots ,0.001,0.003,0.01,0.03,0.1,0.3,1,\cdots $$

### Features and Polynomial Regression

1. Polynomial

   * Quadratic function: $ { \theta  }_{ 0 }+{ \theta  }_{ 1 }x+{ \theta  }_{ 2 }{ x }^{ 2 } $
   * Cubic function: $ { \theta  }_{ 0 }+{ \theta  }_{ 1 }x+{ \theta  }_{ 2 }{ x }^{ 2 }+{ \theta  }_{ 3 }{ x }^{ 3 } $

2. Applying multivariate linear regression to polynomial regression

   $$ { h }_{ \theta  }(\theta )={ \theta  }_{ 0 }+{ \theta  }_{ 1 }{ x }_{ 1 }+{ \theta  }_{ 2 }{ x }_{ 2 }+{ \theta  }_{ 3 }{ x }_{ 3 }={ \theta  }_{ 0 }+{ \theta  }_{ 1 }{ x }_{ 1 }+{ \theta  }_{ 2 }{ ({ x }_{ 1 }) }^{ 2 }+{ \theta  }_{ 3 }{ ({ x }_{ 1 }) }^{ 3 } $$

   * Feature scaling becomes increasingly important

3. Choice of features

   $$ { h }_{ \theta  }(\theta )={ \theta  }_{ 0 }+{ \theta  }_{ 1 }{ x }_{ 1 }+{ \theta  }_{ 2 }{ ({ x }_{ 1 }) }^{ 2 } $$

   $$ { h }_{ \theta  }(\theta )={ \theta  }_{ 0 }+{ \theta  }_{ 1 }{ x }_{ 1 }+{ \theta  }_{ 2 }\sqrt { { x }_{ 1 } } $$

## Computing Parameters Analytically

### Normal Equation

1. Intuition

   $$ \theta \in { R }^{ n+1 } $$

   $$ J(\theta)=J({ \theta  }_{ 0 },{ \theta  }_{ 1 },{ \theta  }_{ 2 },\cdots ,{ \theta  }_{ n })=\frac { 1 }{ 2m } \sum _{ i=1 }^{ m }{ { ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) }^{ 2 } } $$

   For every $ j $, set

   $$ \frac { \partial  }{ \partial { \theta  }_{ j } } J(\theta )=\frac { 1 }{ m } \sum _{ i=1 }^{ m }{ ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }){ x }_{ j }^{ (i) } }=0 $$

   Solve for $ { \theta  }_{ 0 },{ \theta  }_{ 1 },{ \theta  }_{ 2 },\cdots ,{ \theta  }_{ n } $

2. $ m=4 $ examples and $ n=3 $ features

   $$ X=\begin{bmatrix} 1 & { x }_{ 1 }^{ (1) } & { x }_{ 2 }^{ (1) } & { x }_{ 3 }^{ (1) } \\ 1 & { x }_{ 1 }^{ (2) } & { x }_{ 2 }^{ (2) } & { x }_{ 3 }^{ (2) } \\ 1 & { x }_{ 1 }^{ (3) } & { x }_{ 2 }^{ (3) } & { x }_{ 3 }^{ (3) } \\ 1 & { x }_{ 1 }^{ (4) } & { x }_{ 2 }^{ (4) } & { x }_{ 3 }^{ (4) } \end{bmatrix},y=\begin{bmatrix} { y }^{ (1) } \\ { y }^{ (2) } \\ { y }^{ (3) } \\ { y }^{ (4) } \end{bmatrix} $$

   $$ \theta =\begin{bmatrix} { \theta  }_{ 0 } \\ { \theta  }_{ 1 } \\ { \theta  }_{ 2 } \\ { \theta  }_{ 3 } \end{bmatrix}={ ({ X }^{ \top }X) }^{ -1 }{ X }^{ \top }y $$

   ```
   pinv(X'*X)*X'*y
   ```

3. Gradient Descent

   * Need to choose $ \alpha $
   * Needs many iterations
   * Works well even when $ n $ is large

4. Normal Equation

   * No need to choose $ \alpha $
   * Doesn't need to iterate
   * Need to compute $ { ({ X }^{ \top }X) }^{ -1 } $, slow if $ n $ is very large
   * The algorithm performance of inverting a matrix roughly is $ O({ n }^{ 3 }) $

### Normal Equation Noninvertibility

1. Normal Equation

   $$ \theta ={ ({ X }^{ \top }X) }^{ -1 }{ X }^{ \top }y $$

   What if $ { X }^{ \top }X $ is non-invertible (singular / degenerate)?

   Octave pseudo inverse `` pinv() `` will produce the right result even if $ { X }^{ \top }X $ is non-invertible.

2. What causes $ { X }^{ \top }X $ to be non-invertible?

   * Redundant features (linearly dependent), e.g. $ { x }_{ 1 } $ = size in feet<sup>2</sup>, $ { x }_{ 2 } $ = size in m<sup>2</sup>
   * Too many features (e.g. $ m\le n $), delete some features or use regularization
