<h1 style="color: #ccc">O-Level Mathematics</h1>

# Matrices

*Feb 17, 2023*

## Matrices

1. A matrix is a rectangular arrangement of numbers into rows and columns.

2. Matrix order or matrix dimension, denoted by $m\times n$, indicates that the matrix has $m$ rows and $n$ columns.

3. Matrix element or matrix entry, denoted by $a_{ij}$, is the entry located at row $i$ and column $j$ of the matrix.

    $$
    \underset{(2\times 3)}{A} =\begin{bmatrix}
    a_{11} & a_{12} & a_{13}\\
    a_{21} & a_{22} & a_{23}
    \end{bmatrix}
    $$

4. A row matrix is a matrix consisting of one row with order $1\times n$.

    $$
    \underset{(1\times 3)}{A} =\begin{bmatrix}
    a_{11} & a_{12} & a_{13}
    \end{bmatrix}
    $$

5. A column matrix is a matrix consisting of one column with order $m\times 1$.

    $$
    \underset{(3\times 1)}{A} =\begin{bmatrix}
    a_{11}\\
    a_{21}\\
    a_{31}
    \end{bmatrix}
    $$

## Matrix Arithmetic

1. Addition and subtraction

    Only matrices of the same order can be added or subtracted. Matrix addition and subtracion are commutative and associative.

    $$
    A + B =\begin{bmatrix}
    a & b & c\\
    d & e & f\\
    g & h & i
    \end{bmatrix} +\begin{bmatrix}
    q & r & s\\
    t & u & v\\
    x & y & z
    \end{bmatrix} =\begin{bmatrix}
    a+q & b+r & c+s\\
    d+t & e+u & f+v\\
    g+x & h+y & i+z
    \end{bmatrix}
    $$

2. Scalar multiplication

    Scalar multiplication is the product of a scalar and a matrix.

    If $A=\begin{bmatrix}a & b\\c & d\end{bmatrix}$ is a matrix and $k$ is a scalar, the scalar product of $A$ and $k$ is,

    $$
    kA=k\times \begin{bmatrix}
    a & b\\
    c & d
    \end{bmatrix} =\begin{bmatrix}
    ka & kb\\
    kc & kd
    \end{bmatrix}
    $$

    Scalar multiplication is distributive,

    $$
    a( A+B) =aA+aB\\
    ( a+b) A=aA+bA
    $$

3. Matrix multiplication

    Take linear equations with two variables,

    $$
    4x−2y=4\\
    5x+3y=16
    $$

    They can be represented in matrix form with matrix multiplication,

    $$
    \begin{bmatrix}
    4 & -2\\
    5 & 3
    \end{bmatrix} \cdot \begin{bmatrix}
    x\\
    y
    \end{bmatrix} =\begin{bmatrix}
    4\\
    16
    \end{bmatrix}
    $$

    The result of matrix multiplication would be,

    $$
    \begin{bmatrix}
    ( 4)( x) +( -2)( y)\\
    ( 5)( x) +( 3)( y)
    \end{bmatrix} =\begin{bmatrix}
    4\\
    16
    \end{bmatrix}
    $$

    Hence we define that the matrix multiplication of matrices to be only possible when the number of columns of the first matrix is equal to the number of rows of the second matrix,

    $$
    \underset{( m\times r)}{A} \cdot \underset{( r\times n)}{B} =\underset{( m\times n)}{C}
    $$

    Given the following $\underset{(2\times3)}{A}$ and $\underset{(3\times3)}{B}$,

    $$
    \underset{( 2\times 3)}{A} =\begin{bmatrix}
    a_{1} & a_{2} & a_{3}\\
    b_{1} & b_{2} & b_{3}
    \end{bmatrix}
    $$

    $$
    \underset{( 3\times 3)}{B} =\begin{bmatrix}
    p_{1} & q_{1} & r_{1}\\
    p_{2} & q_{2} & r_{2}\\
    p_{3} & q_{3} & r_{3}
    \end{bmatrix}
    $$

    The matrix product of $\underset{(2\times3)}{A}$ and $\underset{(3\times3)}{B}$,

    $$
    \underset{( 2\times 3)}{A} \cdot \underset{( 3\times 3)}{B} =\begin{bmatrix}
    a_{1} & a_{2} & a_{3}\\
    b_{1} & b_{2} & b_{3}
    \end{bmatrix} \cdot \begin{bmatrix}
    p_{1} & q_{1} & r_{1}\\
    p_{2} & q_{2} & r_{2}\\
    p_{3} & q_{3} & r_{3}
    \end{bmatrix} =\begin{bmatrix}
    c_{11} & c_{12} & c_{13}\\
    c_{21} & c_{22} & c_{23}
    \end{bmatrix}
    $$

    $$
    c_{11} =a_{1} p_{1} +a_{2} p_{2} +a_{3} p_{3}\\
    c_{12} =a_{1} q_{1} +a_{2} q_{2} +a_{3} q_{3}\\
    c_{13} =a_{1} r_{1} +a_{2} r_{2} +a_{3} r_{3}\\
    c_{21} =b_{1} p_{1} +b_{2} p_{2} +b_{3} p_{3}\\
    c_{22} =b_{1} q_{1} +b_{2} q_{2} +b_{3} q_{3}\\
    c_{23} =b_{1} r_{1} +b_{2} r_{2} +b_{3} r_{3}\\
    $$

## Properties of Matrix Multiplication

1. Matrix multiplication is not commutative

    $$
    \underset{( m\times r)}{A} \cdot \underset{( r\times n)}{B} \neq \underset{( r\times n)}{B} \cdot \underset{( m\times r)}{A}
    $$

2. Matrix multiplication is associative

    $$
    \left(\underset{( m\times r)}{A} \cdot \underset{( r\times s)}{B}\right)\underset{( s\times n)}{C} =\underset{( m\times r)}{A}\left(\underset{( r\times s)}{B} \cdot \underset{( s\times n)}{C}\right)
    $$

    **Proof.**

    Let $\underset{( m\times s)}{P}$ denote the matrix product of $AB$, $\underset{( r\times n)}{Q}$ denote the matrix product of $BC$.

    The $(i,j)$-entry of the matrix product of $(AB)C$ is given by

    $$
    P_{i} \cdot C_{j} =p_{i1} c_{1j} +p_{i2} c_{2j} +\cdots +p_{is} c_{sj} \tag{1}
    $$

    The $(i,j)$-entry of the matrix product of $A(BC)$ is given by

    $$
    A_{i} \cdot Q_{j} =a_{i1} q_{1j} +a_{i2} q_{2j} +\cdots +a_{ir} q_{rj} \tag{2}
    $$

    The $(i,k)$-entry of the matrix product of $AB$ is given by

    $$
    p_{ik} =a_{i1} b_{1k} +a_{i2} b_{2k} +\cdots +a_{ir} b_{rk} \tag{3}
    $$

    The $(k,j)$-entry of the matrix product of $BC$ is given by

    $$
    q_{kj} =b_{k1} c_{1j} +b_{k2} c_{2j} +\cdots +b_{ks} c_{sj} \tag{4}
    $$

    We want to prove that,

    $$
    P_{i} \cdot C_{j} =A_{i} \cdot Q_{j}
    $$

    $$
    \begin{aligned}
    LHS= & P_{i} \cdot C_{j} &  & \\
    = & p_{i1} c_{1j} +p_{i2} c_{2j} +\cdots +p_{is} c_{sj} &  & \text{by (1)}\\
    = & ( a_{i1} b_{11} +a_{i2} b_{21} +\cdots +a_{ir} b_{r1}) c_{1j} &  & \text{by (3)}\\
    & +( a_{i1} b_{12} +a_{i2} b_{22} +\cdots +a_{ir} b_{r2}) c_{2j} &  & \\
    & \vdots  &  & \\
    & +( a_{i1} b_{1s} +a_{i2} b_{2s} +\cdots +a_{ir} b_{rs}) c_{sj} &  & \\
    = & a_{i1}( b_{11} c_{1j} +b_{12} c_{2j} +\cdots +b_{1s} c_{sj}) &  & \\
    & +a_{i2}( b_{21} c_{1j} +b_{22} c_{2j} +\cdots +b_{2s} c_{sj}) &  & \\
    & \vdots  &  & \\
    & +a_{ir}( b_{r1} c_{1j} +b_{r2} c_{2j} +\cdots +b_{rs} c_{sj}) &  & \\
    = & a_{i1} q_{1j} +a_{i2} q_{2j} +\cdots +a_{ir} q_{rj} &  & \text{by (4)}\\
    = & A_{i} \cdot Q_{j} &  & \text{by (2)}\\
    = & RHS &  & 
    \end{aligned}
    $$

    <p style='text-align: right;'>$\blacksquare$</p>

3. Matrix multiplication is distributive

    $$
    $$
