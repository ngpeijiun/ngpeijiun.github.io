<h1 style="color: #ccc">Idea</h1>

# A Gradient Tracking Method of Explaining Predictions

*Oct 28, 2019*

## Methodology

### Problem Statement

1. Notation

   $$ \text{Given} \ \hat{y}_{a} =F( a) \ \text{where} \ F\ \text{is a continuous function} ,\ \text{want to find} \ z_{a}\\
\text{such that} \ \hat{y}_{a} =z_{a} =k+g_{a_{1}} +g_{a_{2}} +\cdots +g_{a_{n}} $$

   Want to explain the predictions of any abitrary continuous model $F$ by an explainer $z$ in linear terms

   - The number of features: $n$
   - The arbitrary linear or non-linear continuous prediction model: $ F( x) $
   - The input features vector: $ x\in \mathbb{R}^{n} $
   - The predicted output at $ x=a $: $ \hat{y}_{a} $
   - The linear explainer at $ x=a $: $ z_{a} $
   - The zeroth term of $ z_{a} $ or the impact of constant: $ k $
   - The j<sup>th</sup> term of $ z_{a} $ or the impact of j<sup>th</sup> feature: $ g_{a_{j}} $

### Idea of Calculating Constant k

1. A simple way of finding the constant is to set all input features to $0$. Notice that $k$ remains contant and independent to features vector $x$.

   $$ F( O_{n\times 1}) =k,\ \text{where} \ O_{n\times 1} =\begin{bmatrix}
x_{1} =0\\
x_{2} =0\\
\vdots \\
x_{n} =0
\end{bmatrix} $$

### Idea of Calculating Vector g<sub>a</sub>

1. Denote $ g_{a} $ as a vector of linear terms in explainer $ z_{a} $ corresponding to each element in input features vector $a$.

   $$ g_{a} =\begin{bmatrix}
g_{a_{1}}\\
g_{a_{2}}\\
\vdots \\
g_{a_{n}}
\end{bmatrix} $$

2. Inspired from definite integral definition as a limit of Riemann Sum

   Given a function $ f( x) $ that is continuous on the interval $ [a,b] $ we devide the interval into $n$ subintervals of equal with, $ \Delta x $, and from each interval choose a point, $ x^{*}_{i} $. Then the definite integral of $ f( x) $ from $a$ to $b$ is

   $$ \int ^{b}_{a} f( x) dx=\lim _{n\rightarrow \infty }\sum ^{n}_{i=1} f\left( x^{*}_{i}\right) \Delta x $$

3. Hereby, we present a **vector integral** of calculating $ F( x) $ as a limit of **Gradient Tracking Sum**

   Given a function $ F( x) $ that is continuous on the interval $ [O,A] $. The value of $ F( a) $ can be calculated by tracking the path over features vector $ x $ from point $ O $ to point $ A $.

   $$ a=\overrightarrow{OA} =( a_{1} ,a_{2} ,\cdots ,a_{n}) $$

   We divide the vector interval $ [ O,A] $ into $m$ vector subintervals of equal width, $ \Delta a $.

   $$ \Delta a=\begin{bmatrix}
\Delta a_{1}\\
\Delta a_{2}\\
\vdots \\
\Delta a_{n}
\end{bmatrix} ,\ \text{where} \ \Delta a_{j} =\frac{a_{j}}{m} $$

   From each interval we choose the midpoint, $ a^{*i} $.

   $$ a^{*i} =\begin{bmatrix}
a^{*i}_{1}\\
a^{*i}_{2}\\
\vdots \\
a^{*i}_{n}
\end{bmatrix} ,\ \text{where} \ a^{*i}_{j} =\left( i-\frac{1}{2}\right) \Delta a_{j} $$

   Then the **vector integral** of $ F( x) $ from $O$ to $A$ is represented as the limit of **Gradient Tracking Sum**

   $$ S = \lim _{m\rightarrow \infty }\sum ^{m}_{i=1}\sum ^{n}_{j=1} F'_{x_{j}}\left( a^{*i}\right) \Delta a_{j},\ \text{where} \ F'_{x_{j}}\left( a^{*i}\right) =\frac{\partial F}{\partial x_{j}}\left( a^{*i}\right) $$

   The scalar-valued function $ F( x_{1} ,\cdots ,x_{n}) $ on a domain in Euclidean space $ \mathbb{R}^{n} $ has a partial derivative $ \frac{\partial F}{\partial x_{j}} $ with respect to each variable $ x_{j} $. At the point $a$, these partial derivatives define the gradient vector of $F$ at $a$

   $$ \nabla F( a) =( F'_{x_{1}}( a) ,\cdots ,F'_{x_{n}}( a)) $$

   So, we can rewrite the vector integral as

   $$ \int _{a} \nabla F( x) dx=\lim _{m\rightarrow \infty }\sum ^{m}_{i=1} \nabla F\left( a^{*i}\right) \Delta a=g_{a} $$

   And, we can calculate the value of $ F( a) $ by sum of constant $k$ and $ g_{a} $ elements

   $$ F( a) = k+sum\left\{\overrightarrow{g_{a}}\right\} $$

### Intuition

1. If $F$ is a linear model, $ g_{a} $ can easily be calculated from the constant gradient (constant coefficients) $ \nabla F $

2. If $F$ is non-linear model, gradient will be varying across different points, so we can only approximate $ g_{a} $ by walking a small step $ \Delta a $ on the path over $x$ from $0$ to point $a$, and track the gradient $ \nabla F $ on each step to multiply it with step width along the way.

### Gradient Vector of F

1. Definition of derivative at point $a$

   $$ f'( a) =\lim _{h\rightarrow 0}\frac{f( a+h) -f( a)}{h} $$

2. Partial derivative of $F$ at point $a$

   $$ \frac{\partial F}{\partial x_{j}}( a) =\lim _{h\rightarrow 0}\frac{F\left(\begin{bmatrix}
a_{1}\\
\vdots \\
a_{j} +h\\
\vdots \\
a_{n}
\end{bmatrix}\right) -F( a)}{h} $$

   This is also called forward difference.

3. When approximating the derivative by a very small $h$, central difference is preferred over forward and backward difference, to reduce approximation error.

   $$ F'_{x_{j}}( a) \approx \frac{F\left(\begin{bmatrix}
a_{1}\\
\vdots \\
a_{j} +h\\
\vdots \\
a_{n}
\end{bmatrix}\right) -F\left(\begin{bmatrix}
a_{1}\\
\vdots \\
a_{j} -h\\
\vdots \\
a_{n}
\end{bmatrix}\right)}{2h} ,\ \text{where} \ h=10^{-4} $$

## Python Implementation

1. A simple python implementation of this methodology

```python
import numpy as np

def explain(F, x, m = 10 ** 4, h = 10 ** -4):
    n = x.shape[0]
    k = 0
    gradient = np.zeros((n, 1))
    integral = np.zeros((n, 1))

    x_0 = np.zeros((n, 1))
    k = F(x_0)

    dx = x / m
    x_i = np.zeros((n, 1)) + dx / 2
    for i in range(m):
        # Calculate derivatives
        for j in range(n):
            x_p = x_i.copy()
            x_p[j] += h
            x_m = x_i.copy()
            x_m[j] -= h
            gradient[j] = (F(x_p) - F(x_m)) / (2 * h)
        # Calculate integration
        integral = integral + gradient * dx
        x_i = x_i + dx

    return k, integral

# Testing

def complex_model(x):
    return np.sum(x ** 3 * np.roll(x, 1)) + 10 ** (np.squeeze(x[4]) + 1)

n = 9
x = np.arange(n).reshape(n, 1).astype(float)

k, integral = explain(complex_model, x)

print(k)
print(integral)
print(complex_model(x))
print(k + np.sum(integral))

# Asserting the difference is less than 0.01%
assert(abs((k + np.sum(integral)) / complex_model(x) - 1) < 10 ** -4)

# 10.0
# [[0.00000000e+00]
#  [1.99999999e+00]
#  [1.94999999e+01]
#  [8.84999996e+01]
#  [1.00258997e+05]
#  [6.44999997e+02]
#  [1.32449999e+03]
#  [2.43949999e+03]
#  [2.68799999e+03]]
# 107476.0
# 107475.99731289521
```
