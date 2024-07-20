Linear function:

$$
y=\beta_{0}+\beta_{1}x_{1}+\cdots+\beta_{n}x_{n}
$$

Normal logistic function is like this:

$$
y=\frac{1}{1+e^{-( \beta _{0} +\beta _{1} x_{1} +\cdots +\beta _{n} x_{n})}}
$$

GLM logistic function is like this:

$$
\beta_{0}+\beta_{1}x_{1}+\cdots+\beta_{n}x_{n}=\ln{\left(\frac{y}{1-y}\right)}
$$

So the target variable $y$ has to be first transformed by the link function $g$ into the form above.

```
random_seed = 42

np.random.seed(random_seed)

tf.random.set_seed(random_seed)

tf.keras.utils.set_random_seed(random_seed)  

tf.config.experimental.enable_op_determinism()
```
