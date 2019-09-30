<h1 style="color: #ccc">Machine Learning 7</h1>

# Regularization

*Oct 23, 2016*

## Solving the Problem of Overfitting

### The Problem of Overfitting

1. Linear regression

   * Under Fit / High Bias: $ { h }_{ \theta  }(x)={ \theta  }_{ 0 }+{ \theta  }_{ 1 }x $

   * Just Right: $ { h }_{ \theta  }(x)={ \theta  }_{ 0 }+{ \theta  }_{ 1 }x+{ \theta  }_{ 2 }{ x }^{ 2 } $

   * Overfitting / High Variance: $ { h }_{ \theta  }(x)={ \theta  }_{ 0 }+{ \theta  }_{ 1 }x+{ \theta  }_{ 2 }{ x }^{ 2 }+{ \theta  }_{ 3 }{ x }^{ 3 }+{ \theta  }_{ 4 }{ x }^{ 4 } $

2. Overfitting

   If we have too many features, the learned hypothesis may fit the training set very well,

   $$ J(\theta )=\frac { 1 }{ 2m } \sum _{ i=1 }^{ m }{ { ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) }^{ 2 } } \approx 0 $$

   But fail to generalize to new examples (predict prices on new examples).

3. A similar thing can apply to logistic regression as well

   * Under Fit / High Bias: $ { h }_{ \theta  }(x)=g({ \theta  }_{ 0 }+{ \theta  }_{ 1 }x) $

   * Just Right: $ { h }_{ \theta  }(x)=g({ \theta  }_{ 0 }+{ \theta  }_{ 1 }x+{ \theta  }_{ 2 }{ x }^{ 2 }) $

   * Overfitting / High Variance: $ { h }_{ \theta  }(x)=g({ \theta  }_{ 0 }+{ \theta  }_{ 1 }x+{ \theta  }_{ 2 }{ x }^{ 2 }+{ \theta  }_{ 3 }{ x }^{ 3 }+{ \theta  }_{ 4 }{ x }^{ 4 }) $

4. Addressing overfitting

   * Reduce number of features
      * Manually select which features to keep
      * Model selection algorithm
   * Regularization
      * Keep all features, but reduce the magnitude / values of parameters $ { \theta }_{ j } $
      * Works well when we have a lot of features, each of which contributes a bit to predict $ y $

### Cost Function

1. Small values for parameters $ { \theta  }_{ 0 },{ \theta  }_{ 1 },\cdots ,{ \theta  }_{ n } $

2. Regularization

   $$ J(\theta )=\frac { 1 }{ 2m } \left[ \sum _{ i=1 }^{ m }{ { ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) }^{ 2 } } +\lambda \sum _{ i=1 }^{ n }{ { \theta  }_{ j }^{ 2 } }  \right] $$

   $$ \underset { \theta  }{ min } J(\theta ) $$

3. What if $ \lambda $ is set to an extremely large value? Say, $ \lambda ={ 10 }^{ 10 } $

   $$ { h }_{ \theta  }(x)={ \theta  }_{ 0 }+{ \theta  }_{ 1 }x+{ \theta  }_{ 2 }{ x }^{ 2 }+{ \theta  }_{ 3 }{ x }^{ 3 }+{ \theta  }_{ 4 }{ x }^{ 4 } $$

   Penalizing all parameters

   $$ { \theta  }_{ 1 }\approx 0,{ \theta  }_{ 2 }\approx 0,{ \theta  }_{ 3 }\approx 0,{ \theta  }_{ 4 }\approx 0 $$

   So we just left with the hypothesis

   $$ { h }_{ \theta  }(x)={ \theta  }_{ 0 } $$

### Regularized Linear Regression

1. Solving derivative

   $$ \frac { \partial  }{ \partial { \theta  }_{ j } } J(\theta )=\frac { 1 }{ m } \sum _{ i=1 }^{ m }{ ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }){ x }_{ j }^{ (i) } } +\frac { \lambda  }{ m } { \theta  }_{ j } $$

2. Gradient Descent

   ```
   repeat until convergence {
   ```

   $$ { \theta  }_{ 0 }:={ \theta  }_{ 0 }-\alpha \frac { 1 }{ m } \sum _{ i=1 }^{ m }{ { (h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) } { x }_{ 0 }^{ (i) } $$

   ```
       simultaneous for j in 1..n {
   ```

   $$ { \theta  }_{ j }:={ \theta  }_{ j }(1-\alpha \frac { \lambda  }{ m } )-\alpha \frac { 1 }{ m } \sum _{ i=1 }^{ m }{ { (h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) } { x }_{ j }^{ (i) } $$

   ```
       }
   }
   ```

   * $ 1-\alpha \frac { \lambda  }{ m }  $ usually a number a little bit less than 1, so think of it as a number like 0.99.

3. Normal Equation

   For every $ j $, set

   $$ \frac { \partial  }{ \partial { \theta  }_{ j } } J(\theta )=\frac { 1 }{ m } \sum _{ i=1 }^{ m }{ ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }){ x }_{ j }^{ (i) } } +\frac { \lambda  }{ m } { \theta  }_{ j }=0 $$

   Solve for $ { \theta  }_{ 0 },{ \theta  }_{ 1 },\cdots ,{ \theta  }_{ n } $

   $$ X=\begin{bmatrix} { ({ x }^{ (1) }) }^{ \top } \\ \vdots  \\ { ({ x }^{ (m) }) }^{ \top } \end{bmatrix},Y=\begin{bmatrix} { y }^{ (1) } \\ \vdots  \\ { y }^{ (m) } \end{bmatrix} $$

   $$ \theta =\begin{bmatrix} { \theta  }_{ 0 } \\ \vdots  \\ { \theta  }_{ n } \end{bmatrix}={ \left( { { X }^{ \top }X+\lambda { \begin{bmatrix} 0 &  &  &  \\  & 1 &  &  \\  &  & \ddots  &  \\  &  &  & 1 \end{bmatrix} }_{ n+1 } } \right)  }^{ -1 }{ X }^{ \top }y $$

4. Noninvertibility

   Suppose $ m\le n $, if $ \lambda \gt 0 $,

   $$ { \left( { { X }^{ \top }X+\lambda { \begin{bmatrix} 0 &  &  &  \\  & 1 &  &  \\  &  & \ddots  &  \\  &  &  & 1 \end{bmatrix} }_{ n+1 } } \right)  } $$ will be invertible

### Regularized Logistic Regression

1. Regularization

   $$ J(\theta )=-\frac { 1 }{ m } \sum _{ i=1 }^{ m } \left[ { { y }^{ (i) }log{ h }_{ \theta  }({ x }^{ (i) })+(1-{ y }^{ (i) })log(1-{ h }_{ \theta  }({ x }^{ (i) })) } \right] +\frac { \lambda  }{ 2m } \sum _{ i=1 }^{ n }{ { \theta  }_{ j }^{ 2 } } $$

2. Gradient Descent

   ```
   repeat until convergence {
   ```

   $$ { \theta  }_{ 0 }:={ \theta  }_{ 0 }-\alpha \frac { 1 }{ m } \sum _{ i=1 }^{ m }{ { (h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) } { x }_{ 0 }^{ (i) } $$

   ```
       simultaneous for j in 1..n {
   ```

   $$ { \theta  }_{ j }:={ \theta  }_{ j }(1-\alpha \frac { \lambda  }{ m } )-\alpha \frac { 1 }{ m } \sum _{ i=1 }^{ m }{ { (h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) } { x }_{ j }^{ (i) } $$

   ```
       }
   }
   ```

   Algorithm looks identical to linear regression!
