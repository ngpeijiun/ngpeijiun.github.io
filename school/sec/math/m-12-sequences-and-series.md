<h1 style="color: #ccc">O-Level Mathematics</h1>

# Sequences and Series

*Feb 24, 2022*

## Sequences

1. A sequence is a set of numbers that follows a particular rule.

2. The n<sup>th</sup> term, denoted by $T_{n}$, is the n<sup>th</sup> number in the sequence.

## Arithmetic Progression

1. An arithmetic progression is a sequence in which the difference between any two successive terms is a constant.

2. $T_{n}$ of an arithmetic progression

    $$
    T_{n} =a+( n-1) d
    $$

    where

    $$
    \begin{aligned}
    T_{n} & =\text{n}^{th}\text{ term}\\
    a & =\text{first term}\\
    n & =\text{number of terms}\\
    d & =\text{common difference}
    \end{aligned}
    $$

## Geometric Progression

1. A geometric progression is a sequence in which any two successive terms differ from each other by a common ratio.

2. $T_{n}$ of a geometric progression

    $$
    T_{n} =ar^{n-1}
    $$

    where

    $$
    \begin{aligned}
    T_{n} & =\text{n}^{th}\text{ term}\\
    a & =\text{first term}\\
    n & =\text{number of terms}\\
    r & =\text{common ratio}
    \end{aligned}
    $$

## Series

1. A series is a sum of a sequence.

## Arithmetic Series

1. An arithmetic series is a sum of a finite arithmetic progression.

2. **Theorem 2.** Sum of the first $n$ positive integers

    $$
    \sum _{k=1}^{n} k=\frac{1}{2} n( n+1)
    $$

    **Proof 1.**

    Start with the binomial expansion of $(k-1)^{2}$,

    $$
    \begin{aligned}
    ( k-1)^{2} & =k^{2} -2k+1\\
    k^{2} -( k-1)^{2} & =2k-1
    \end{aligned}
    $$

    Sum both sides for the value of $k$ from $1$ to $n$,

    $$
    \sum _{k=1}^{n}\left[ k^{2} -( k-1)^{2}\right] =2\sum _{k=1}^{n} k-\sum _{k=1}^{n} 1
    $$

    The $LHS$ telescopes and equals $n^{2}$,

    $$
    \begin{aligned}
    n^{2} & =2\sum _{k=1}^{n} k-n\\
    2\sum _{k=1}^{n} k & =n^{2} +n\\
    \sum _{k=1}^{n} k & =\frac{1}{2} n( n+1)
    \end{aligned}
    $$

    <p style='text-align: right;'>$\blacksquare$</p>

    **Proof 2. (by mathematical induction)**

    Initial Step: For $n=1$, $LHS=1$ and $RHS=\frac{1}{2}( 1)( 2) =1$, so the theorem is true for $n=1$.

    Inductive Step:

    Assume that,

    $$
    1+2+\cdots +k=\frac{1}{2} k( k+1)
    $$

    We want to prove that,

    $$
    1+2+\cdots +k+( k+1) =\frac{1}{2}( k+1)( k+2)
    $$

    $$
    \begin{aligned}
    LHS & =1+2+\cdots +k+( k+1)\\
     & =\frac{1}{2} k( k+1) +( k+1)\\
     & =\frac{1}{2}[ k( k+1) +2( k+1)]\\
     & =\frac{1}{2}( k+1)( k+2)\\
     & =RHS
    \end{aligned}
    $$

    Thus the theorem is true for all $n\geq1$.

    <p style='text-align: right;'>$\blacksquare$</p>

3. **Theorem 3.** Sum of the first $n$ arithmetic progression

    $$
    S_{n} =\frac{1}{2} n( a_{1} +a_{n})
    $$

    where

    $$
    \begin{aligned}
    S_{n} & =\text{sum of the first n terms}\\
    n & =\text{number of terms}\\
    a_{1} & =\text{first term}\\
    a_{n} & =\text{n}^{th}\text{ term}
    \end{aligned}
    $$

    **Proof 1.**

    $$
    \begin{aligned}
    S_{n} & =a_{1} +a_{2} +\cdots +a_{n}\\
     & =a_{1} +[ a_{1} +( 2-1) d] +\cdots +[ a_{1} +( n-1) d]\\
     & =\sum _{k=1}^{n} a_{1} +d\sum _{k=1}^{n-1} k\\
     & =na_{1} +d\cdot \frac{1}{2}( n-1) n\\
     & =\frac{1}{2} n[ 2a_{1} +( n-1) d]\\
     & =\frac{1}{2} n( a_{1} +a_{2})
    \end{aligned}
    $$

    <p style='text-align: right;'>$\blacksquare$</p>

    **Proof 2. (by mathematical induction)**

    Initial Step: For $n=1$, $LHS=a_{1}$ and $RHS=\frac{1}{2}( 2)( a_{1} +a_{1}) =a_{1}$, so the theorem is true for $n=1$.

    Inductive Step:

    Assume that,

    $$
    a_{1} +a_{2} +\cdots +a_{k} =\frac{1}{2} k( a_{1} +a_{k})
    $$

    We want to prove that,

    $$
    a_{1} +a_{2} +\cdots +a_{k} +a_{k+1} =\frac{1}{2}( k+1)( a_{1} +a_{k+1})
    $$

    $$
    \begin{aligned}
    LHS & =a_{1} +a_{2} +\cdots +a_{k} +a_{k+1}\\
     & =\frac{1}{2} k( a_{1} +a_{k}) +a_{k+1}\\
     & =\frac{1}{2}( ka_{1} +ka_{k} +2a_{k+1})\\
     & =\frac{1}{2}[ ka_{1} +k( a_{k+1} -d) +2a_{k+1}]\\
     & =\frac{1}{2}[ ka_{1} +( a_{k+1} -dk) +( ka_{k+1} +a_{k+1})]\\
     & =\frac{1}{2}[ ka_{1} +a_{1} +( k+1) a_{k+1}]\\
     & =\frac{1}{2}( k+1)( a_{1} +a_{k+1})\\
     & =RHS
    \end{aligned}\\
    $$

    Thus the theorem is true for all $n\geq1$.

    <p style='text-align: right;'>$\blacksquare$</p>

4. **Corollary 3.1.** If the common difference is known instead of $T_{n}$, sum of the first $n$ arithmetic progression

    $$
    S_{n} =\frac{1}{2} n[ 2a +( n-1) d]
    $$

## Geometric Series

1. A geometric series is a sum of a finite or infinite geometric progression.

2. **Theorem 4.** Sum of the first $n$ geometric progression

    $$
    S_{n} =\frac{a\left( 1-r^{n}\right)}{1-r}
    $$

    where

    $$
    \begin{aligned}
    S_{n} & =\text{sum of the first n terms}\\
    n & =\text{number of terms}\\
    a & =\text{first term}\\
    r & =\text{common ratio}
    \end{aligned}
    $$

    **Proof 1.**

    $$
    S_{n} =a+ar+ar^{2} +\cdots +ar^{n-1} \tag{1}
    $$

    $$
    S_{n} \cdot r=ar+ar^{2} +\cdots +ar^{n} \tag{2}
    $$

    $(1)-(2)$ to telecope $RHS$,

    $$
    \begin{aligned}
    S_{n} -S_{n} \cdot r & =a-ar^{n}\\
    S_{n}( 1-r) & =a\left( 1-r^{n}\right)\\
    S_{n} & =\frac{a\left( 1-r^{n}\right)}{1-r}
    \end{aligned}
    $$

    <p style='text-align: right;'>$\blacksquare$</p>

    **Proof 2. (by mathematical induction)**

    Initial Step: For $n=1$, $LHS=a$ and $RHS=\frac{a\left( 1-r^{1}\right)}{1-r} =a$, so the theorem is true for $n=1$.

    Inductive Step:

    Assume that,

    $$
    a+ar+ar^{2} +\cdots +ar^{k-1} =\frac{a\left( 1-r^{k}\right)}{1-r}
    $$

    We want to prove that,

    $$
    a+ar+ar^{2} +\cdots +ar^{k-1} +ar^{k} =\frac{a\left( 1-r^{k+1}\right)}{1-r}
    $$

    $$
    \begin{aligned}
    LHS & =a+ar+ar^{2} +\cdots +ar^{k-1} +ar^{k}\\
     & =\frac{a\left( 1-r^{k}\right)}{1-r} +ar^{k}\\
     & =\frac{a\left( 1-r^{k}\right) +ar^{k}( 1-r)}{1-r}\\
     & =\frac{a-ar^{k} +ar^{k} -ar^{k+1}}{1-r}\\
     & =\frac{a\left( 1-r^{k+1}\right)}{1-r}\\
     & =RHS
    \end{aligned}
    $$

    Thus the theorem is true for all $n\geq1$.

    <p style='text-align: right;'>$\blacksquare$</p>

3. **Corollary 4.1.** Sum of infinite geometric progression with the common ratio less than $1$

    $$
    S_{\infty } =\frac{a}{1-r}
    $$

    **Proof.**

    $$
    \begin{aligned}
    S_{\infty } & =\lim _{n\rightarrow \infty } S_{n}\\
     & =\lim _{n\rightarrow \infty }\frac{a\left( 1-r^{n}\right)}{1-r}\\
     & =\frac{a( 1-0)}{1-r}\\
     & =\frac{a}{1-r}
    \end{aligned}
    $$

    <p style='text-align: right;'>$\blacksquare$</p>
