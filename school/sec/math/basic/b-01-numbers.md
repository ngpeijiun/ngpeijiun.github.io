<h1 style="color: #ccc">Basic Mathematics</h1>

# Numbers

<div class="badge">
    <span class="key">Type</span>
    <span class="value">Book</span>
</div>
<div class="badge">
    <span class="key">Author</span>
    <span class="value">Serge Lang</span>
</div>
<div class="badge">
    <span class="key">Note Updated</span>
    <span class="value">2026-01-29</span>
</div>

## The Integers

**Natural numbers** are the counting numbers.

$$
1,2,3,\cdots
$$

**Whole numbers** are natural numbers with $0$ included.

$$
0,1,2,3,\cdots
$$

**Integers** are whole numbers and their negatives.

$$
\cdots,-3,-2,-1,0,1,2,3,\cdots
$$

**N1.**

$$
0+a = a+0 = a
$$

The additive identity of integers is $0$ and adding $0$ to a number does not change it.

**N2.**

$$
a+(-a) = 0 \quad \text{and also} \quad -a+a = 0
$$

The additive inverse of an integer $a$ is $-a$ and adding $a$ and $-a$ results in $0$.

## Rules for Addition

**Commutativity.**

If $a,b$ are integers, then

$$
a+b = b+a
$$

The sum of integers remains the same regardless of the order of addition.

**Associativity.**

If $a,b,c$ are integers, then

$$
(a+b) + c = a + (b+c)
$$

The sum of integers remains the same regardless of the way they are grouped.

**N3.**

$$
\text{If} \quad a+b = 0 \text{, then} \quad b=-a \quad \text{and} \quad a=-b
$$

If the sum of two integers is $0$, they are additive inverses of each other.

**N4.**

$$
a = -(-a)
$$

The inverse of the inverse of an integer is the integer itself.

**N5.**

$$
-(a+b) = -a-b
$$

The negation of a sum of integers is equal to the sum of their negations.

**Proof.**

To prove $-(a+b) = -a-b$, it suffices to show that $(a+b)+(-a-b)=0$, since additive inverses are defined by having sum zero. Indeed,

$$
\begin{aligned}
\text{LHS} & = (a+b) + (-a-b) \\
& = a+b-a-b & \quad & \text{by associativity} \\
& = a-a + b-b & & \text{by commutativity} \\
& = 0
\end{aligned}
$$

∎

**Lemma.**

*If $a,b$ are positive integers, then $a+b$ is also a positive integer.*

**Corollary.**

*If $a,b$ are negative integers, then $a+b$ is negative.*

**Proof.**

We can write $a=-n$ and $b=-m$, where $m,n$ are positive. Therefore,

$$
a+b = -n-m = -(n+m)
$$

Since $n+m$ is positive by the lemma, $a+b$ is negative.
