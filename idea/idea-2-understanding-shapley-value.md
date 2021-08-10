<h1 style="color: #ccc">Idea 2</h1>

# Understanding Shapley Value

Published on *Aug 9, 2021*

## Methodology

### Problem Statement

1. There is a vector $N$ of (of $n$ features) and a function $v$ that maps $N$ to a real number.

  $$ \left|N\right|=n $$

  $$ N=\begin{bmatrix}
  a_{1}\\
  \vdots \\
  a_{n}
  \end{bmatrix}\\ $$

  $$ \text{Given} \ \hat{y}_{N} =v( N)\text{, want to find } z_{N}\\
  \text{ such that }\hat{y}_{N} =z_{N} =k+\varphi _{a_{1}}( v) +\varphi _{a_{2}}( v) +\cdots +\varphi _{a_{n}}( v) $$

### Influence of an Arbitrary Item

1. From vector $N$ choose one item to be $i$, we want to find all permutations in which, under the the absence of influence of all possible subsets of remaining features $N\backslash \{i\}$, item $i$ influences the function $v(N)$.

   $$ N=\begin{bmatrix}
   a_{1}\\
   \vdots \\
   a_{n}
   \end{bmatrix}\\ $$

   For example, if $i$ chosen is $a_{n}$, we have remaining features

   $$ N\backslash \{i\} =\{a_{1} ,\cdots ,a_{n-1}\}\text{, where } |N\backslash \{i\} |=n-1 $$

   Influence of $i=a_{n}$ under the presence of all other remainig features is given by

   $$ \begin{array}{ l }
    v( a_{1} ,\cdots ,a_{n-1} ,a_{n}) -v( a_{1} ,\cdots ,a_{n-1} ,0)\\
   = v(\{a_{1} ,\cdots ,a_{n-1}\} \cup \{i\}) -v(\{a_{1} ,\cdots ,a_{n-1}\})\\
   \end{array} $$

   Therefore, if $S^{n-1}$ is a subset of $N\backslash \{i\}$ that consists of $(n-1)$ elements, which means $S^{n-1}=N\backslash \{i\}$, influence of an arbitrary item $i$ under the presence of all other remainig features is given by

   $$ v\left( S^{n-1} \cup \{i\}\right) -v\left( S^{n-1}\right) $$

   Influence of $i=a_{n}$ under the absence of 1 feature, e.g. $a_{n-1}$ is given by

   $$ \begin{array}{ l }
   v( a_{1} ,\cdots ,a_{n-2} ,0,a_{n}) -v( a_{1} ,\cdots ,a_{n-2} ,0,0)\\
   = v(\{a_{1} ,\cdots ,a_{n-2}\} \cup \{i\}) -v(\{a_{1} ,\cdots ,a_{n-2}\})\\
   \end{array} $$

   Notice here if $S^{n-2}$ is a subset of $N\backslash \{i\}$ that consists of $(n-2)$ elements. There are $(n-1)$ ways of choosing different combinations of $S^{n-2}$.

   Therefore, influence of an arbitrary item $i$ under the absence of a single arbitrary feature, which has $(n-1)$ different manifestations, is given by

   $$ v\left( S^{n-2} \cup \{i\}\right) -v\left( S^{n-2}\right) $$

   To exhause all permutations for the influence of an arbitrary item $i$, we have $\forall k=\{0,1,⋯,n-1\}$

   $$ v\left( S^{k} \cup \{i\}\right) -v\left( S^{k}\right) \tag{1} $$

   Notice that if $x_{(i)}$ is the variable to which we assign the chosen $i$ value, the expression above can be rewritten as the definite integral of the partial differentiation of $v\left( S^{k} \cup \{x_{(i)}\}\right)$ both w.r.t. $x_{(i)}$ on the interval $[0,i]$.

   $$ \int _{0}^{i}\frac{\partial }{\partial x_{(i)}} v\left( S^{k}\cup \{x_{(i)}\}\right) dx_{(i)}= v\left( S^{k} \cup \{i\}\right) -v\left( S^{k}\right) \tag{2} $$

### Probability of Each Observation

1. First, choose one item from vector $N$ to be $i$, then choose $k$ items from the remaining items in $N\backslash \{i\}$, $\forall k=\{0,1,⋯,n-1\}$

   $$
   \text{Permutation of } S^{k} \cup \{i\} =\underbrace{n}_{\text{Choosing } i} \times \underbrace{[( n-1)( n-2) \cdots ( n-k)]}_{\text{Choosing } k\text{ items}}
   $$

   Since sequence of $S^{k}$ doesn't matter,

   $$
   \text{Number of observation of } S^{k} \cup \{i\}=\frac{n( n-1)( n-2) \cdots ( n-k)}{k!}=\frac{n!}{k!( n-k-1) !}
   $$

   So, the probability of observing a single observation of $S^{k} \cup \{i\}$

   $$
   P\left( S^{k} \cup \{i\}\right) =\left(\frac{n!}{k!( n-k-1) !}\right)^{-1} =\frac{k!( n-k-1) !}{n!} \tag{3}
   $$

### Contribution of an Arbitrary Item

1. For a given arbitrary chosen item $i$, to calculate the expected value of the influence of $i$ to $v(N)$, we need to prove that the sum of all probabilities of each observation is equal to 1.

   For each $k$, we take the probability of a single observation of $i$ times the total occurrence of such observation:

   $$
   \begin{aligned}
   & \sum _{k=0}^{n-1}\underbrace{\frac{k!( n-k-1) !}{n!}}_{\text{prob of a single observation}} \times \underbrace{\binom{n-1}{k}}_{\text{total occurence of such observation}}\\
   & =\sum _{k=0}^{n-1}\frac{k!( n-k-1) !}{n!} \cdot \frac{( n-1) !}{k!( n-1-k) !}\\
   & =\sum _{k=0}^{n-1}\frac{( n-1) !}{n!}\\
   & =\frac{n!}{n!}\\
   & =1
   \end{aligned}
   $$

   So, we can calculate the contribution of $i$ to $v(N)$ as the expected value of influence, i.e. the weighted sum of all influence values, with probabilities as the weights.

   $$
   \varphi _{i}( v) =\sum _{k=0}^{n-1}\frac{k!( n-k-1) !}{n!}\sum _{\underbrace{S^{k} \subseteq N\backslash \{i\}}_{\binom{n-1}{k}\text{ subsets}}}\left[ v\left( S^{k} \cup \{i\}\right) -v\left( S^{k}\right)\right]\\ \tag{4}
   $$

   Notice that the probability can also be perceived as the probability of choosing item $i$ times the probability of observing an occurence of observation in each $k$.

   $$
   \varphi _{i}( v) =\frac{1}{n}\sum _{k=0}^{n-1}\binom{n-1}{k}^{-1}\sum _{S^{k} \subseteq N\backslash \{i\}}\left[ v\left( S^{k} \cup \{i\}\right) -v\left( S^{k}\right)\right]\\ \tag{5}
   $$

   Finally, it can be rewritten as the expected value of definite integrated on interval $[0, i]$.

   $$
   \varphi _{i}( v) =\frac{1}{n}\sum _{k=0}^{n-1}\binom{n-1}{k}^{-1}\sum _{S^{k} \subseteq N\backslash \{i\}}\int _{0}^{i}\frac{\partial }{\partial x_{( i)}} v\left( S^{k} \cup \{x_{( i)}\}\right) dx_{( i)} \tag{6}
   $$
