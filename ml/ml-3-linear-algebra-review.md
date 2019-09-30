<h1 style="color: #ccc">Machine Learning 3</h1>

# Linear Algebra Review

*Oct 9, 2016*

## Matrices and Vectors

1. Dimension of matrix: number of rows x number of columns

   $$ { R }^{ 4\times 2 }=\begin{bmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \\ 7 & 8 \end{bmatrix} $$

   * $ { A }_{ ij } $: $ i,j $ entry in the i<sup>th</sup> row, j<sup>th</sup> column

2. Vector: An $ n\times 1 $ matrix

   $$ y={ R }^{ 4 }=\begin{bmatrix} 1 \\ 2 \\ 3 \\ 4 \end{bmatrix} $$

   * $ { y }_{ i } $: i<sup>th</sup> element

## Addition and Scalar Multiplication

1. Addition

   $$ \begin{bmatrix} { A }_{ 11 } & { A }_{ 12 } \\ { A }_{ 21 } & { A }_{ 22 } \\ { A }_{ 31 } & { A }_{ 32 } \end{bmatrix}+\begin{bmatrix} { B }_{ 11 } & { B }_{ 12 } \\ { B }_{ 21 } & { B }_{ 22 } \\ { B }_{ 31 } & { B }_{ 32 } \end{bmatrix}=\begin{bmatrix} ({ A }_{ 11 }+{ B }_{ 11 }) & ({ A }_{ 12 }+{ B }_{ 12 }) \\ ({ A }_{ 21 }+{ B }_{ 21 }) & ({ A }_{ 22 }+{ B }_{ 22 }) \\ ({ A }_{ 31 }+{ B }_{ 31 }) & ({ A }_{ 32 }+{ B }_{ 32 }) \end{bmatrix} $$

   * You can add only two matrices that are of the same dimensions

2. Scalar Multiplication

   $$ \alpha \times \begin{bmatrix} { A }_{ 11 } & { A }_{ 12 } \\ { A }_{ 21 } & { A }_{ 22 } \\ { A }_{ 31 } & { A }_{ 32 } \end{bmatrix}=\begin{bmatrix} \alpha { A }_{ 11 } & \alpha { A }_{ 12 } \\ \alpha { A }_{ 21 } & \alpha { A }_{ 22 } \\ \alpha { A }_{ 31 } & \alpha { A }_{ 32 } \end{bmatrix} $$

## Matrix Vector Multiplication

1. Vector Multiplication

   $$ \begin{bmatrix} { A }_{ 11 } & { A }_{ 12 } \\ { A }_{ 21 } & { A }_{ 22 } \\ { A }_{ 31 } & { A }_{ 32 } \end{bmatrix}\times \begin{bmatrix} { a }_{ 1 } \\ { a }_{ 2 } \end{bmatrix}=\begin{bmatrix} ({ A }_{ 11 }{ a }_{ 1 }+{ A }_{ 12 }{ a }_{ 2 }) \\ ({ A }_{ 21 }{ a }_{ 1 }+{ A }_{ 22 }{ a }_{ 2 }) \\ ({ A }_{ 31 }{ a }_{ 1 }+{ A }_{ 32 }{ a }_{ 2 }) \end{bmatrix} $$

2. Applying to hypothesis function

   $$ { h }_{ \theta  }(x)={ \theta  }_{ 0 }+{ \theta  }_{ 1 }x $$

   $$ x\in \left\{ { x }_{ 1 },{ x }_{ 2 },{ x }_{ 3 },{ x }_{ 4 } \right\} $$

   $$ \begin{bmatrix} { h }_{ \theta  }({ x }_{ 1 }) \\ { h }_{ \theta  }({ x }_{ 2 }) \\ { h }_{ \theta  }({ x }_{ 3 }) \\ { h }_{ \theta  }({ x }_{ 4 }) \end{bmatrix}=\begin{bmatrix} 1 & { x }_{ 1 } \\ 1 & { x }_{ 2 } \\ 1 & { x }_{ 3 } \\ 1 & { x }_{ 4 } \end{bmatrix}\times \begin{bmatrix} { \theta  }_{ 0 } \\ { \theta  }_{ 1 } \end{bmatrix}=\begin{bmatrix} ({ \theta  }_{ 0 }+{ \theta  }_{ 1 }{ x }_{ 1 }) \\ ({ \theta  }_{ 0 }+{ \theta  }_{ 1 }{ x }_{ 2 }) \\ ({ \theta  }_{ 0 }+{ \theta  }_{ 1 }{ x }_{ 3 }) \\ ({ \theta  }_{ 0 }+{ \theta  }_{ 1 }{ x }_{ 4 }) \end{bmatrix} $$

## Matrix Matrix Multiplication

1. Matrix Multiplication

   $$ \begin{bmatrix} { A }_{ 11 } & { A }_{ 12 } & { A }_{ 13 } \\ { A }_{ 21 } & { A }_{ 22 } & { A }_{ 23 } \end{bmatrix}\times \begin{bmatrix} { x }_{ 1 } \\ { x }_{ 2 } \\ x_{ 3 } \end{bmatrix}=\begin{bmatrix} { \alpha  }_{ 1 } \\ { \alpha  }_{ 2 } \end{bmatrix} $$

   $$ \begin{bmatrix} { A }_{ 11 } & { A }_{ 12 } & { A }_{ 13 } \\ { A }_{ 21 } & { A }_{ 22 } & { A }_{ 23 } \end{bmatrix}\times \begin{bmatrix} { y }_{ 1 } \\ { y }_{ 2 } \\ y_{ 3 } \end{bmatrix}=\begin{bmatrix} { \beta  }_{ 1 } \\ { \beta  }_{ 2 } \end{bmatrix} $$

   $$ \begin{bmatrix} { A }_{ 11 } & { A }_{ 12 } & { A }_{ 13 } \\ { A }_{ 21 } & { A }_{ 22 } & { A }_{ 23 } \end{bmatrix}\times \begin{bmatrix} { x }_{ 1 } & { y }_{ 1 } \\ { x }_{ 2 } & { y }_{ 2 } \\ x_{ 3 } & { y }_{ 3 } \end{bmatrix}=\begin{bmatrix} { \alpha  }_{ 1 } & { \beta  }_{ 1 } \\ { \alpha  }_{ 2 } & { \beta  }_{ 2 } \end{bmatrix} $$

2. Applying to 3 hypotheses functions

   $$ \begin{matrix} { h }_{ a }(x)={ a }_{ 0 }+{ a }_{ 1 }x \\ { h }_{ b }(x)={ b }_{ 0 }+{ b }_{ 1 }x \\ { h }_{ c  }(x)={ c }_{ 0 }+{ c }_{ 1 }x \end{matrix} $$

   $$ x\in \left\{ { x }_{ 1 },{ x }_{ 2 },{ x }_{ 3 },{ x }_{ 4 } \right\} $$

   $$ \begin{bmatrix} { h }_{ a }({ x }_{ 1 }) & { h }_{ b }({ x }_{ 1 }) & { h }_{ c }({ x }_{ 1 }) \\ { h }_{ a }({ x }_{ 2 }) & { h }_{ b }({ x }_{ 1 }) & { h }_{ c }({ x }_{ 1 }) \\ { h }_{ a }({ x }_{ 3 }) & { h }_{ b }({ x }_{ 1 }) & { h }_{ c }({ x }_{ 1 }) \\ { h }_{ a }({ x }_{ 4 }) & { h }_{ b }({ x }_{ 1 }) & { h }_{ c }({ x }_{ 1 }) \end{bmatrix}=\begin{bmatrix} 1 & { x }_{ 1 } \\ 1 & { x }_{ 2 } \\ 1 & { x }_{ 3 } \\ 1 & { x }_{ 4 } \end{bmatrix}\times \begin{bmatrix} { a }_{ 0 } & { b }_{ 0 } & { c }_{ 0 } \\ { a }_{ 1 } & { b }_{ 1 } & { c }_{ 1 } \end{bmatrix} $$

## Matrix Multiplication Properties

1. Not Commutative

   $$ A\cdot B\neq B\cdot A $$

2. Associative

   $$ (A\cdot B)\cdot C=A\cdot (B\cdot C) $$

3. Identity Matrix

   Denoted $ I $ (or $ { I }_{ n\times n } $). For any matrix $ A $,

   $$ { A }_{ m\times n }\cdot { I }_{ n\times n }={ I }_{ m\times m }\cdot { A }_{ m\times n }={ A }_{ m\times n } $$

   So whenever we write the identity matrix $ I $, very often the dimension will be implicit from the content.

## Inverse and Transpose

1. Matrix Inverse

   If $ A $ is an $ m\times m $ matrix (also called square matrix), and if it has an inverse,

   $$ A{ A }^{ -1 }={ A }^{ -1 }A=I $$

   Matrices that don't have an inverse are sometimes called "singular" or "degenerate".

2. Matrix Transpose

   Let $ A $ be an $ m\times n $ matrix, and let $ B = { A }^{ \top } $. Then $ B $ is an $ n\times m $ matrix, and

   $$ { B }_{ ij }={ A }_{ ji } $$
