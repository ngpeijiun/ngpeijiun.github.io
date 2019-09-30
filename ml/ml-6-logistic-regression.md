<h1 style="color: #ccc">Machine Learning 6</h1>

# Logistic Regression

*Oct 23, 2016*

## Classification and Representation

### Classification

1. Tumor: Malignant (1) / Benign (0)

   $$ y\in \{ 0,1\} $$

2. Logistic Regression

   $$ 0\le { h }_{ \theta  }(x)\le 1 $$

### Hypothesis Representation

1. Logistic Regression Model

   $$ g(z)=\frac { 1 }{ 1+{ e }^{ -z } } $$

   $ g $ is sigmoid function or logistic function

   $$ { h }_{ \theta  }(x)=g({ \theta  }^{ \top }x)=\frac { 1 }{ 1+{ e }^{ -{ \theta  }^{ \top }x } } $$

2. Interpretation of Hypothesis Output

   $$ { h }_{ \theta  }(x)=P(y=1|x;\theta ) $$

   Probability that $ y=1 $, given $ x $, parameterized by $ \theta $

   $ { h }_{ \theta  }(x)=0.7 $ tells patient that 70% chance of tumor being malignant

### Decision Boundary

1. Suppose

   $ g(z)\ge 0.5 $ when $ z\ge 0 $, thus $ { h }_{ \theta  }(x)=g({ \theta  }^{ \top }x)\ge 0.5 $ whenever $ { \theta  }^{ \top }x\ge 0 $

   $ g(z)\lt 0.5 $ when $ z\lt 0 $, thus $ { h }_{ \theta  }(x)=g({ \theta  }^{ \top }x)\lt 0.5 $ whenever $ { \theta  }^{ \top }x\lt 0 $

   Predict $ y=1 $ if $ { \theta  }^{ \top }x\ge 0 $

   Predict $ y=0 $ if $ { \theta  }^{ \top }x\lt 0 $

2. Decision Boundary

   $$ { \theta  }^{ \top }x=0 $$

   Linear Decision Boundary

   $$ { h }_{ \theta  }(x)=g({ \theta  }_{ 0 }+{ \theta  }_{ 1 }{ x }_{ 1 }+{ \theta  }_{ 2 }{ x }_{ 2 }) $$

   Nonlinear Decision Boundary

   $$ { h }_{ \theta  }(x)=g({ \theta  }_{ 0 }+{ \theta  }_{ 1 }{ x }_{ 1 }+{ \theta  }_{ 2 }{ x }_{ 2 }+{ \theta  }_{ 3 }{ x }_{ 1 }^{ 2 }+{ \theta  }_{ 4 }{ x }_{ 2 }^{ 2 }) $$

## Logistic Regression Model

### Cost Function

1. Training Set

   $$ \{ ({ x }^{ (1) },{ y }^{ (1) }),({ x }^{ (2) },{ y }^{ (2) }),\cdots ,({ x }^{ (m) },{ y }^{ (m) })\} $$

   $$ x=\begin{bmatrix} { x }_{ 0 } \\ { x }_{ 1 } \\ \vdots  \\ { x }_{ n } \end{bmatrix},{ x }_{ 0 }=1,y\in \{ 0,1\} $$

   Hypothesis

   $$ { h }_{ \theta  }(x)=\frac { 1 }{ 1+{ e }^{ -{ \theta  }^{ \top }x } } $$

2. Linear Regression Cost Function

   $$ Cost({ h }_{ \theta  }({ x }),{ y })=\frac { 1 }{ 2 } { ({ h }_{ \theta  }({ x })-{ y }) }^{ 2 } $$

   $$ J(\theta )=\frac { 1 }{ m } \sum _{ i=1 }^{ m }{ Cost({ h }_{ \theta  }({ x }^{ (i) }),{ y }^{ (i) }) } =\frac { 1 }{ 2m } \sum _{ i=1 }^{ m }{ { ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) }^{ 2 } } $$

   Applying to logistic regression, this cost function is a non-convex function, which has many local-optima. We need a convex cost function which has a single bow-shaped so that if you run gradient descent, we will be guaranteed that it will converge to the global minimum.

3. Logistic Regression Cost Function

   $$ Cost({ h }_{ \theta  }(x),y)=\begin{cases} -log({ h }_{ \theta  }(x)) & for\quad y=1 \\ -log(1-{ h }_{ \theta  }(x)) & for\quad y=0 \end{cases} $$

   $ Cost=0 $ if $ y=1 $ and $ { h }_{ \theta  }(x)=1 $. But as $ { h }_{ \theta  }(x)\xrightarrow {  } 0 $, $ Cost(x)\xrightarrow {  } \infty $. Capture intuition that that if $ { h }_{ \theta }(x)=0 $, but $ y=1 $, we'll penalize learning algorithm by a very large cost.

### Simplified Cost Function and Gradient Descent

1. Simply

   $$ \begin{array}{ c c l } Cost( h_{\theta }( x) ,y) & = & \begin{cases} -log( h_{\theta }( x)) &  & for & y=1\\ -log( 1-h_{\theta }( x)) &  & for & y=0 \end{cases}\\ & = & -ylog( h_{\theta }( x)) -( 1-y) log( 1-h_{\theta }( x)) \end{array} $$

   $$ \begin{array}{ c c l } J( \theta ) & = & \frac{1}{m}\sum\limits ^{m}_{i=1} Cost\left( h_{\theta }\left( x^{( i)}\right) ,y^{( i)}\right)\\ & = & -\frac{1}{m}\sum\limits ^{m}_{i=1}\left[ y^{( i)} log\left( h_{\theta }\left( x^{( i)}\right)\right) +\left( 1-y^{( i)}\right) log\left( 1-h_{\theta }\left( x^{( i)}\right)\right)\right] \end{array} $$

2. Goal

   To fit parameters $ \theta $:

   $$ \underset { \theta  }{ min } J(\theta ) $$

   To make a prediction given new $ x $:

   $$ { h }_{ \theta  }(x)=\frac { 1 }{ 1+{ e }^{ -{ \theta  }^{ \top }x } }=P(y=1|x;\theta ) $$

3. Gradient Descent

   ```
   repeat until convergence {
       simultaneous for j in 0..n {
   ```

   $$ { \theta  }_{ j }:={ \theta  }_{ j }-\alpha \frac { \partial  }{ \partial { \theta  }_{ j } } J(\theta )={ \theta  }_{ j }-\alpha \frac { 1 }{ m } \sum _{ i=1 }^{ m }{ ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }){ x }_{ j }^{ (i) } } $$

   ```
       }
   }
   ```

   Algorithm looks identical to linear regression!

### Advanced Optimization

1. Optimization Algorithm

   Cost function $ J(\theta ) $. Want $ \underset { \theta  }{ min } J(\theta ) $.

   Given $ \theta $, we have code that can compute

   * $ J(\theta ) $
   * $ \frac { \partial  }{ \partial { \theta  }_{ j } } J(\theta ) $, for $ j=0,1,\cdots ,n $

   Basic Optimized Algorithm

   * Gradient Descent

   Advanced Optimized Algorithms

   * Conjugate Gradient
   * BFGS
   * L-BFGS

2. Advantages

   * No need to manually pick $ \alpha $
   * Often faster than gradient descent

3. Disadvantages

   * More complex

4. They have a clever inner-loop called a line search algorithm that automatically tries out different values for the learning rate alpha and automatically picks a good learning rate alpha. So that it can even pick a different learning rate for every iteration. They also do more sophisticated things often end up converging much faster than gradient descent.

5. Sample Octave

   Add ``costFunction.m`` function file:

   ```
   function [J, grad] = costFunction(theta, X, y)

   m = length(y); % number of training examples

   J = 0;
   grad = zeros(size(theta));

   predictions = sigmoid(X * theta);
   cost = -1 * (y .* log(predictions) + (1 - y) .* log(1 - predictions));
   J = 1 / m * sum(cost)

   delta = 1 / m * X' * (predictions - y);
   grad = delta;
   ```

   ```
   options = optimset('GradObj', 'on', 'MaxIter', '100');
   theta = zeros(2, 1);
   [optTheta, funcVal, exitFlag] = fminunc(@costFunction, theta, options);
   ```

## Multiclass Classification

### Multiclass Classification: One-vs-all

1. Examples

   Email foldering / tagging: Work, Friends, Family, Hobby

   $$ y\in \{ 1,2,3,4\} $$

   Medical diagrams: Not ill, Cold, Flu

   $$ y\in \{ 1,2,3\} $$

   Weather: Sunny, Cloudy, Rain, Snow

   $$ y\in \{ 1,2,3,4\} $$

2. Binary Classification: two classes

3. One-vs-all (One-vs-rest) Classification: more than two classes

4. Suppose we have a one-vs-rest classification problem where we have 3 classes of $ y $ training set,

   $$ y\in \{ 1,2,3\} $$

   We are going to take our training set and turn it into 3 separate binary classification problems.

   $$ { h }_{ \theta  }^{ (i) }(x)=P(y=i|x;\theta ) $$

5. One-vs-all

   Train a logistic regression classifier $ { h }_{ \theta  }^{ (i) }(x) $ for each class $ i $ to predict the probability that $ y=1 $.

   On a new input $ x $, to make a prediction, pick the class $ i $ that maximizes

   $$ \underset { i }{ max } { h }_{ \theta  }^{ (i) }(x) $$
