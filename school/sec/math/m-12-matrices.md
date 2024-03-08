<h1 style="color: #ccc">O-Level Mathematics</h1>

# Matrices

*Mar 27, 2024*

## Matrices

1. A matrix is a rectangular arrangement of numbers into rows and columns.

2. Matrix order or matrix dimension, denoted by $m\times n$, indicates that the matrix has $m$ rows and $n$ columns.

3. Matrix element or matrix entry, denoted by $a_{ij}$, is the entry located at row $i$ and column $j$ of the matrix.

    $$
    {A}_{2\times 3} =\begin{bmatrix}
    a_{11} & a_{12} & a_{13}\\
    a_{21} & a_{22} & a_{23}
    \end{bmatrix}
    $$

4. A row matrix is a matrix consisting of a single row with an order of $1\times n$.

    $$
    {A}_{1\times 3} =\begin{bmatrix}
    a_{11} & a_{12} & a_{13}
    \end{bmatrix}
    $$

5. A column matrix is a matrix consisting of a single column with an order $m\times 1$.

    $$
    {A}_{3\times 1} =\begin{bmatrix}
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
    kA=\begin{bmatrix}
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

    Consider the following linear equations with two variables,

    $$
    4x−2y=4\\
    5x+3y=16
    $$

    These equations can be represented in matrix form as matrix multiplication,

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
    {A}_{m\times r} \cdot {B}_{r\times n} ={C}_{m\times n}
    $$

    Given the following ${A}_{2\times 3}$ and ${B}_{3\times 3}$,

    $$
    {A}_{2\times 3} =\begin{bmatrix}
    a_{1} & a_{2} & a_{3}\\
    b_{1} & b_{2} & b_{3}
    \end{bmatrix}
    $$

    $$
    {B}_{3\times 3} =\begin{bmatrix}
    p_{1} & q_{1} & r_{1}\\
    p_{2} & q_{2} & r_{2}\\
    p_{3} & q_{3} & r_{3}
    \end{bmatrix}
    $$

    The matrix product of ${A}_{2\times 3}$ and ${B}_{3\times 3}$,

    $$
    {A}_{2\times 3} \cdot {B}_{3\times 3} =\begin{bmatrix}
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

    If the number of columns in the left matrix is not equal to the number of rows in the right matrix, the product of the matrix is undefined.

## Properties of Matrix Multiplication

1. Matrix multiplication is not commutative

    $$
    {A}_{m\times r} \cdot {B}_{r\times n} \neq {B}_{r\times n} \cdot {A}_{m\times r}
    $$

2. Matrix multiplication is associative

    $$
    \left({A}_{m\times r} \cdot {B}_{r\times s}\right){C}_{s\times n} ={A}_{m\times r}\left({B}_{r\times s} \cdot {C}_{s\times n}\right)
    $$

    **Proof.**

    Let ${P}_{m\times s}$ denote the matrix product of $AB$, ${Q}_{r\times n}$ denote the matrix product of $BC$.

    The $(i,j)$-entry of the matrix product of $(A\cdot B)C$ is given by

    $$
    P_{i} \cdotp C_{j} =p_{i1} c_{1j} +p_{i2} c_{2j} +\cdots +p_{is} c_{sj} =\sum _{l=1}^{s} p_{il} c_{lj} \tag{1}
    $$

    The $(i,j)$-entry of the matrix product of $A(B\cdot C)$ is given by

    $$
    A_{i} \cdotp Q_{j} =a_{i1} q_{1j} +a_{i2} q_{2j} +\cdots +a_{ir} q_{rj} =\sum _{k=1}^{r} a_{ik} q_{kj} \tag{2}
    $$

    The $(i,l)$-entry of the matrix product of $AB$ is given by

    $$
    p_{il} =a_{i1} b_{1l} +a_{i2} b_{2l} +\cdots +a_{ir} b_{rl} =\sum _{k=1}^{r} a_{ik} b_{kl} \tag{3}
    $$

    The $(k,j)$-entry of the matrix product of $BC$ is given by

    $$
    q_{kj} =b_{k1} c_{1j} +b_{k2} c_{2j} +\cdots +b_{ks} c_{sj} =\sum _{l=1}^{s} b_{kl} c_{lj} \tag{4}
    $$

    We want to prove that,

    $$
    P_{i} \cdot C_{j} =A_{i} \cdot Q_{j}
    $$

    Now,

    $$
    \begin{aligned}
    \text{LHS} = & P_{i} C_{j} &  & \\
    = & \sum _{l=1}^{s} p_{il} c_{lj} &  & \text{by }( 1)\\
    = & \sum _{l=1}^{s}\left(\sum _{k=1}^{r} a_{ik} b_{kl}\right) c_{lj} &  & \text{by }( 3)\\
    = & \sum _{k=1}^{r}\sum _{l=1}^{s} a_{ik} b_{kl} c_{lj} &  & \\
    = & \sum _{k=1}^{r} a_{ik}\left(\sum _{l=1}^{s} b_{kl} c_{lj}\right) &  & \\
    = & \sum _{k=1}^{r} a_{ik} q_{kj} &  & \text{by} \ ( 4)\\
    = & A_{i} \cdotp Q_{j} &  & \text{by} \ ( 2)\\
    = & \text{RHS} &  & 
    \end{aligned}
    $$

    <p style='text-align: right;'>■</p>

3. Matrix multiplication is distributive

    $$
    {A}_{m\times r}\left({B}_{r\times n} +{C}_{r\times n}\right) ={A}_{m\times r} \cdotp {B}_{r\times n} +{A}_{m\times r} \cdotp {C}_{r\times n}
    $$

    **Proof.**

    Let ${P}_{r\times n}$ denote the matrix sum of $B+C$.

    The $(i,j)$-entry of the matrix product of $A(B+C)$ is given by

    $$
    A_{i} \cdotp P_{j} =a_{i1} p_{1j} +a_{i2} p_{2j} +\cdots +a_{ir} p_{rj} =\sum _{k=1}^{r} a_{ik} p_{kj} \tag{1}
    $$

    The $(k,j)$-entry of the matrix sum of $B+C$ is given by

    $$
    p_{kj} =b_{kj} +c_{kj} \tag{2}
    $$

    The $(i,j)$-entry of the matrix product of $A\cdot B$ is given by

    $$
    A_{i} B_{j} =a_{i1} b_{1j} +a_{i2} b_{2j} +\cdots +a_{ir} b_{rj} =\sum _{k=1}^{r} a_{ik} b_{kj} \tag{3}
    $$

    The $(i,j)$-entry of the matrix product of $A\cdot C$ is given by

    $$
    A_{i} C_{j} =a_{i1} c_{1j} +a_{i2} c_{2j} +\cdots +a_{ir} c_{rj} =\sum _{k=1}^{r} a_{ik} c_{kj} \tag{4}
    $$

    We want to prove that,

    $$
    A_{i} \cdot P_{j} =A_{i} \cdot B_{j} +A_{i} \cdot C_{j}
    $$

    $$
    \begin{aligned}
    \text{LHS} = & A_{i} P_{j} &  & \\
    = & \sum _{k=1}^{r} a_{ik} p_{kj} &  & \text{by }( 1)\\
    = & \sum _{k=1}^{r} a_{ik}( b_{kj} +c_{kj}) &  & \text{by }( 2)\\
    = & \sum _{k=1}^{r} a_{ik} b_{kj} +\sum _{k=1}^{r} a_{ik} c_{kj} &  & \\
    = & A_{i} Q_{j} &  & \text{by }( 3)\text{ \& }( 4)\\
    = & \text{RHS} &  & 
    \end{aligned}
    $$

    <p style='text-align: right;'>■</p>

## Types of Matrices

1. A square matrix is a matrix that has the same number of rows and columns.

    $$
    L=\begin{bmatrix}
    2 & 0 & 1\\
    9 & 5 & 1\\
    0 & 3 & 8
    \end{bmatrix}
    $$

    $$
    M=\begin{bmatrix}
    4 & 2\\
    7 & 5
    \end{bmatrix}
    $$

2. A zero matrix, or null matrix, denoted by $O$, is a matrix in which all elements are zeros.

    $$
    {O}_{2\times 3} =\begin{bmatrix}
    0 & 0 & 0\\
    0 & 0 & 0
    \end{bmatrix}
    $$

    $$
    {O}_{2\times 3} \cdotp {A}_{3\times 1} ={O}_{2\times 1}
    $$

    If both $O$ and $A$ are square matrices with the same dimension, then their product, regardless of the order of multiplication, always yields a zero matrix.

    $$
    OA=AO=O
    $$

3. A diagonal matrix is a square matrix in which all elements are zeros except those in the main diagonal.

    $$
    X=\begin{bmatrix}
    4 & 0 & 0\\
    0 & 1 & 0\\
    0 & 0 & 1
    \end{bmatrix}
    $$

    $$
    Y=\begin{bmatrix}
    1 & 0\\
    0 & 2
    \end{bmatrix}
    $$

4. An identity matrix, denoted by $I$, is a diagonal matrix in which all elements of the main diagonal are ones and all other elements are zeros.

    $$
    I_{2} =\begin{bmatrix}
    1 & 0\\
    0 & 1
    \end{bmatrix}
    $$

    $$
    I_{3} =\begin{bmatrix}
    1 & 0 & 0\\
    0 & 1 & 0\\
    0 & 0 & 1
    \end{bmatrix}
    $$

    Given any arbitrary matrix $A_{m\times n}$,

    $$
    AI_{n} =I_{m} A=A
    $$

    If both $I$ and $A$ are square matrices with the same dimension, then their product, regardless of the order of multiplication, always yields the same matrix $A$.

    $$
    AI=IA=A
    $$

## Inverse Matrices

1. Solving linear equations with elimination method

    $$
    7x-2y =45 \tag{1}
    $$

    $$
    5x+y =37 \tag{2}
    $$

    $$
    ( 2) \times 2\Longrightarrow 10x+2y=74 \tag{3}
    $$

    $(1)+(3)$ to eliminate $y$,

    $$
    17x=119\\
    x=7
    $$

    Substitute $x=7$ into $(2)$,

    $$
    5(7)+y=37\\
    y=2
    $$

2. Gaussian-Jordan elimination

    $$
    7x-2y =45 \tag{L1}
    $$

    $$
    5x+y =37 \tag{L2}
    $$

    $$
    \begin{array}{ r l }
    \begin{array}{ c }
    L_{1} :\\
    L_{2} :
    \end{array} & \left[\begin{array}{ c c | }
    7 & -2 & 45\\
    5 & 1 & 37
    \end{array}\right]\\\\
    \begin{array}{ c }
    \frac{1}{7} L_{1}\rightarrow L_{1} :\\
    \frac{1}{5} L_{2}\rightarrow L_{2} :
    \end{array} & \left[\begin{array}{ c c | }
    1 & -\frac{2}{7} & \frac{45}{7}\\
    1 & \frac{1}{5} & \frac{37}{5}
    \end{array}\right]\\\\
    \begin{array}{ r }
    L_{1} :\\
    L_{2} -L_{1}\rightarrow L_{2} :
    \end{array} & \left[\begin{array}{ c c | }
    1 & -\frac{2}{7} & \frac{45}{7}\\
    0 & \frac{17}{35} & \frac{34}{35}
    \end{array}\right]\\\\
    \begin{array}{ r }
    L_{1} :\\
    \frac{35}{17}L_{2} \rightarrow L_{2} :
    \end{array} & \left[\begin{array}{ c c | }
    1 & -\frac{2}{7} & \frac{45}{7}\\
    0 & 1 & 2
    \end{array}\right]\\\\
    \begin{array}{ r }
    L_{1} +\frac{2}{7} L_{2}\rightarrow L_{1} :\\
    L_{2} :
    \end{array} & \left[\begin{array}{ c c | }
    1 & 0 & 7\\
    0 & 1 & 2
    \end{array}\right]
    \end{array}
    $$

3. Reverse simultaneous equations

    $$
    7x_1-2x_2 =y_1 \tag{L1}
    $$

    $$
    5x_1+x_2 =y_2 \tag{L2}
    $$

    We applied Gaussian-Jordan elimination method to find $x_1=7$ and $x_2=2$, given $y_1=45$ and $y_2=37$. Although effective, Gaussian-Jordan elimination can be computationally demanding for iterative solutions with varying $y_1$ and $y_2$ values. Thus, a more computationally efficient method is needed for solving $x$ variables across different $y$ sets.

    To facilitate this, we manipulate the original calculation as follows:

    $$
    \begin{array}{ r l }
    \begin{array}{ c }
    L_{1} :\\
    L_{2} :
    \end{array} & \left[\begin{array}{ c c | }
    7 & 2 & y_{1}\\
    5 & 1 & y_{2}
    \end{array}\right]\\\\
    \begin{array}{ c }
    \frac{1}{7} L_{1}\rightarrow L_{1} :\\
    \frac{1}{5} L_{2}\rightarrow L_{2} :
    \end{array} & \left[\begin{array}{ c c | }
    1 & -\frac{2}{7} & \frac{1}{7} y_{1}\\
    1 & \frac{1}{5} & \frac{1}{5} y_{2}
    \end{array}\right]\\\\
    \begin{array}{ r }
    L_{1} :\\
    L_{2} -L_{1}\rightarrow L_{2} :
    \end{array} & \left[\begin{array}{ c c | }
    1 & -\frac{2}{7} & \frac{1}{7} y_{1}\\
    0 & \frac{17}{35} & -\frac{1}{7} y_{1} +\frac{1}{5} y_{2}
    \end{array}\right]\\\\
    \begin{array}{ r }
    L_{1} :\\
    \frac{35}{17}L_{2} \rightarrow L_{2} :
    \end{array} & \left[\begin{array}{ c c | }
    1 & -\frac{2}{7} & \frac{1}{7} y_{1}\\
    0 & 1 & -\frac{5}{17} y_{1} +\frac{7}{17} y_{2}
    \end{array}\right]\\\\
    \begin{array}{ r }
    L_{1} +\frac{2}{7} L_{2}\rightarrow L_{1} :\\
    L_{2} :
    \end{array} & \left[\begin{array}{ c c | }
    1 & 0 & \frac{1}{17} y_{1} +\frac{2}{17} y_{2}\\
    0 & 1 & -\frac{5}{17} y_{1} +\frac{7}{17} y_{2}
    \end{array}\right]
    \end{array}
    $$

    This process yields the reverse simultaneous equations,

    $$
    x_1 =\frac{1}{17} y_{1} +\frac{2}{17} y_{2}
    $$

    $$
    x_2 =-\frac{5}{17} y_{1} +\frac{7}{17} y_{2}
    $$

    This set of equations serves as an inversion of the original equations, allowing for the direct calculation of $x_1$ and $x_2$ from any given $y_1$ and $y_2$.

4. Understanding inverse matrix

    Let us denote the following variables,

    $$
    A=\begin{bmatrix}
    7 & -2\\
    5 & 1
    \end{bmatrix} ,B=\begin{bmatrix}
    \frac{1}{17} & \frac{2}{17}\\
    -\frac{5}{17} & \frac{7}{17}
    \end{bmatrix}
    $$

    $$
    x=\begin{bmatrix}
    x_{1}\\
    x_{2}
    \end{bmatrix} ,y=\begin{bmatrix}
    y_{1}\\
    y_{2}
    \end{bmatrix}
    $$

    The initial simultaneous equations represented in matrix form,

    $$
    \begin{bmatrix}
    7 & -2\\
    5 & 1
    \end{bmatrix} \cdotp \begin{bmatrix}
    x_{1}\\
    x_{2}
    \end{bmatrix} =\begin{bmatrix}
    y_{1}\\
    y_{2}
    \end{bmatrix}
    $$

    $$
    Ax=y \tag{M1}
    $$

    The corresponding reverse simultaneous equations represented in matrix form,

    $$
    \begin{bmatrix}
    x_{1}\\
    x_{2}
    \end{bmatrix} =\begin{bmatrix}
    \frac{1}{17} & \frac{2}{17}\\
    -\frac{5}{17} & \frac{7}{17}
    \end{bmatrix} \cdotp \begin{bmatrix}
    y_{1}\\
    y_{2}
    \end{bmatrix}
    $$

    $$
    x=By \tag{M2}
    $$

    Substitute $(\text{M1})$ into $(\text{M2})$,

    $$
    x=BAx \tag{1}
    $$

    Substitute $(\text{M2})$ into $(\text{M1})$,

    $$
    ABy=y \tag{2}
    $$

    Observing $(1)$ and $(2)$, it becomes evident that,

    $$
    AB=BA=I
    $$

    Due to this interesting relationship, we call $B$ the inverse matrix of $A$, denoted by $A^{-1}$.

5. Formal definition of inverse matrix

    The inverse of a square matrix $A$ is another square matrix $A^{-1}$ such that their product, regardless of the order of multiplication, always yields an identity matrix $I$.

    $$
    AA^{-1}=A^{-1}A=I
    $$

6. Finding inverse matrix

    As you may have observed in reverse simultaneous equations, the inverse of a matrix can be found using the Gaussian-Jordan elimination method. This involves the coefficients of both x and y variables.

    $$
    7x_1-2x_2 =y_1 + 0y_2 \tag{L1}
    $$

    $$
    5x_1+x_2 =0y_1 + y_2 \tag{L2}
    $$

    $$
    \begin{array}{ r l }
    \begin{array}{ c }
    L_{1} :\\
    L_{2} :
    \end{array} & \left[\begin{array}{ c c|c c }
    7 & -2 & 1 & 0\\
    5 & 1 & 0 & 1
    \end{array}\right]\\\\
    \begin{array}{ c }
    \frac{1}{7} L_{1}\rightarrow L_{1} :\\
    \frac{1}{5} L_{2}\rightarrow L_{2} :
    \end{array} &  \left[\begin{array}{ c c|c c }
    1 & -\frac{2}{7} & \frac{1}{7} & 0\\
    1 & \frac{1}{5} & 0 & \frac{1}{5}
    \end{array}\right]\\\\
    \begin{array}{ r }
    L_{1} :\\
    L_{2} -L_{1}\rightarrow L_{2} :
    \end{array} &  \left[\begin{array}{ c c|c c }
    1 & -\frac{2}{7} & \frac{1}{7} & 0\\
    0 & \frac{17}{35} & -\frac{1}{7} & \frac{1}{5}
    \end{array}\right]\\\\
    \begin{array}{ r }
    L_{1} :\\
    \ \frac{35}{17} L_{2} :
    \end{array} &  \left[\begin{array}{ c c|c c }
    1 & -\frac{2}{7} & \frac{1}{7} & 0\\
    0 & 1 & -\frac{5}{17} & \frac{7}{17}
    \end{array}\right]\\\\
    \begin{array}{ r }
    L_{1} +\frac{2}{7} L_{2}\rightarrow L_{1} :\\
    L_{2} :
    \end{array} & \left[\begin{array}{ c c|c c }
    1 & 0 & \frac{1}{17} & \frac{2}{17}\\
    0 & 1 & -\frac{5}{17} & \frac{7}{17}
    \end{array}\right]
    \end{array}
    $$

7. **Theorem 5.** Given a general $2\times2$ matrix of the form

    $$
    A=\begin{bmatrix}
    a & b\\
    c & d
    \end{bmatrix}
    $$

    The formula to find the inverse matrix $A^{-1}$ is

    $$
    A^{-1} =\frac{1}{|A|}\begin{bmatrix}
    d & -b\\
    -c & a
    \end{bmatrix}
    $$

    $|A|$, also denoted by $\det(A)$, is called the determinant of matrix $A$ where

    $$
    |A|=ad-bc
    $$

    **Proof.**

    Given general linear equations,

    $$
    ax_{1} +bx_{2} =y_{1} \tag{L1}
    $$

    $$
    cx_{2} +dx_{2} =y_{2} \tag{L2}
    $$

    Solving it with Gaussian-Jordan elimination,

    $$
    \begin{array}{ r l }
    \begin{array}{ c }
    L_{1} :\\
    L_{2} :
    \end{array} & \left[\begin{array}{ c c|c c }
    a & b & 1 & 0\\
    c & d & 0 & 1
    \end{array}\right]\\\\
    \begin{array}{ r }
    \frac{1}{a} L_{1}\rightarrow L_{1} :\\
    \frac{1}{c} L_{2}\rightarrow L_{2} :
    \end{array} & \left[\begin{array}{ c c|c c }
    1 & \frac{b}{a} & \frac{1}{a} & 0\\
    1 & \frac{d}{c} & 0 & \frac{1}{c}
    \end{array}\right]\\\\
    \begin{array}{ r }
    L_{1} :\\
    L_{2} -L_{1}\rightarrow L_{2} :
    \end{array} & \left[\begin{array}{ c c|c c }
    1 & \frac{b}{a} & \frac{1}{a} & 0\\
    0 & \frac{ad-bc}{ac} & -\frac{1}{a} & \frac{1}{c}
    \end{array}\right]\\\\
    \begin{array}{ r }
    L_{1} :\\
    \frac{ac}{ad-bc} L_{2}\rightarrow L_{2} :
    \end{array} & \left[\begin{array}{ c c|c c }
    1 & \frac{b}{a} & \frac{1}{a} & 0\\
    0 & 1 & -\frac{c}{ad-bc} & \frac{a}{ad-bc}
    \end{array}\right]\\\\
    \begin{array}{ c }
    L_{1} -\frac{b}{a} L_{2}\rightarrow L_{1} :\\
    L_{2} :
    \end{array} & \left[\begin{array}{ c c|c c }
    1 & 0 & \frac{d}{ad-bc} & -\frac{b}{( ad-bc)}\\
    0 & 1 & -\frac{c}{ad-bc} & \frac{a}{ad-bc}
    \end{array}\right]
    \end{array}
    $$

    This yields the generalised inverse matrix

    $$
    \begin{bmatrix}
    a & b\\
    c & d
    \end{bmatrix}^{-1} =\frac{1}{ad-bc}\begin{bmatrix}
    d & -b\\
    -c & a
    \end{bmatrix}
    $$

    <p style='text-align: right;'>■</p>
