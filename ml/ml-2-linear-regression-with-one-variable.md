<h1 style="color: #ccc">Machine Learning 2</h1>

# Linear Regression with One Variable

*Oct 9, 2016*

## Model and Cost Function

### Model Representation

1. Notation

   * $ m $ = number of training examples in the training set
   * $ x $ = input variable / feature
   * $ y $ = output variable / target variable
   * $ (x,y) $ = one training example
   * $ ({ x }^{ (i) },{ y }^{ (i) }) $ = i<sup>th</sup> training example
   * $ h $ = hypothesis function that takes input $ x $ and tries to output the estimated value of $ y $

2. Learning algorithm derives the hypothesis function $ h(x) = y $ from an input of training set.

3. Univariate Linear Regression Model (Linear Regression with One Variable)

   $$ { h }_{ \theta  }(x)={ \theta  }_{ 0 }+{ \theta  }_{ 1 }x $$

   * $ { \theta  }_{ i } $ = parameters of the model

### Cost Function

1. Idea: choose $ { \theta  }_{ 0 } $, $ { \theta  }_{ 1 } $ so that $ { h }_{ \theta  }(x) $ is close to $ y $ for our training examples $ (x,y) $

2. Square Error Function

   $$ J({ \theta  }_{ 0 },{ \theta  }_{ 1 })=\frac { 1 }{ 2m } \sum _{ i=1 }^{ m }{ { ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) }^{ 2 } } $$

   * $ J $ = cost function

3. Problem Formulation

   **Hypothesis:** $ { { h } }_{ \theta  }(x)={ \theta  }_{ 0 }+{ \theta  }_{ 1 }x $

   **Parameters:** $ { \theta  }_{ 0 },{ \theta  }_{ 1 } $

   **Cost Function:**

   $$ J({ \theta  }_{ 0 },{ \theta  }_{ 1 })=\frac { 1 }{ 2m } \sum _{ i=1 }^{ m }{ { ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) }^{ 2 } } $$

   **Goal:** $ \underset { { \theta  }_{ 0 }{ \theta  }_{ 1 } }{ min } J({ \theta  }_{ 0 },{ \theta  }_{ 1 }) $

## Parameter Learning

### Gradient Descent

1. Problem Setup

   **Have some function**: $ J({ \theta  }_{ 0 },{ \theta  }_{ 1 }) $

   **Want**: $ \underset { { \theta  }_{ 0 }{ \theta  }_{ 1 } }{ min } J({ \theta  }_{ 0 },{ \theta  }_{ 1 }) $

   Outline:

   * Start with some $ { \theta  }_{ 0 },{ \theta  }_{ 1 } $
   * Keep changing $ { \theta  }_{ 0 },{ \theta  }_{ 1 } $ to reduce $ J({ \theta  }_{ 0 },{ \theta  }_{ 1 }) $ until we hopefully end up at a minimum

2. Algorithm

   ```
   repeat until convergence {
   ```

   $$ { \theta  }_{ j }:={ \theta  }_{ j }-\alpha \frac { \partial  }{ \partial { \theta  }_{ j } } J({ \theta  }_{ 0 },{ \theta  }_{ 1 }) $$

   (simultaneously update for $ j=0,1 $)

   ```
   }
   ```

   * $ \alpha $ = learning rate controls how big a step we take downhill with creating descent

3. Simultaneously update $ { \theta  }_{ 0 },{ \theta  }_{ 1 } $

   $$ temp0:={ \theta  }_{ 0 }-\alpha \frac { \partial  }{ \partial { \theta  }_{ 0 } } J({ \theta  }_{ 0 },{ \theta  }_{ 1 }) $$

   $$ temp1:={ \theta  }_{ 1 }-\alpha \frac { \partial  }{ \partial { \theta  }_{ 1 } } J({ \theta  }_{ 0 },{ \theta  }_{ 1 }) $$

   $$ { \theta  }_{ 0 }:=temp0 $$

   $$ { \theta  }_{ 1 }:=temp1 $$

4. Gradient descent can converge to a local minimum, even with the learning rate $ \alpha $ fixed. As we approach local minimum, gradient descent will automatically take smaller steps. By definition the local minimum is when the derivative is equal to zero. So, there is no need to decrease $ \alpha $ over time.

#### Gradient Descent for Linear Regression

1. Solving derivatives

   $$ { \theta  }_{ 0 }:={ \theta  }_{ 0 }-\alpha \frac { \partial  }{ \partial { \theta  }_{ 0 } } J({ \theta  }_{ 0 },{ \theta  }_{ 1 })  $$

   $$ { \theta  }_{ 1 }:={ \theta  }_{ 1 }-\alpha \frac { \partial  }{ \partial { \theta  }_{ 1 } } J({ \theta  }_{ 0 },{ \theta  }_{ 1 }) $$

   $$ \frac { \partial  }{ \partial { \theta  }_{ 0 } } \left( \frac { 1 }{ 2m } \sum _{ i=1 }^{ m }{ { ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) }^{ 2 } }  \right) =\frac { 1 }{ m } \sum _{ i=1 }^{ m }{ { (h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) } $$

   $$ \frac { \partial  }{ \partial { \theta  }_{ 1 } } \left( \frac { 1 }{ 2m } \sum _{ i=1 }^{ m }{ { ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) }^{ 2 } }  \right) =\frac { 1 }{ m } \sum _{ i=1 }^{ m }{ { (h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) } \cdot { x }^{ (i) } $$

2. Algorithm

   ```
   repeat until convergence {
       simultaneous {
   ```

   $$ { \theta  }_{ 0 }:={ \theta  }_{ 0 }-\alpha \frac { 1 }{ m } \sum _{ i=1 }^{ m }{ { (h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) }  $$

   $$ { \theta  }_{ 1 }:={ \theta  }_{ 1 }-\alpha \frac { 1 }{ m } \sum _{ i=1 }^{ m }{ { (h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) } \cdot { x }^{ (i) } $$

   ```
       }
   }
   ```

3. Linear regression is always going to be a bow shaped function called a convex function. This function doesn't have any local optima except for one global optimum.

4. The gradient descent that we have seen so far is called Batch Gradient Descent because each step of gradient descent uses all the training examples.
