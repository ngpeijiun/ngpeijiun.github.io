<h1 style="color: #ccc">Essence of Linear Algebra</h1>

# Vectors

*Feb 9, 2025*

## Vectors

1.  The introduction of numbers as coordinates is an act of violence (*Hermann Weyl*).

2.  The fundamental building block for linear algebra is the **vector**.

3.  Broadly speaking, there are three distinct but related ideas about vectors:

    -   **Physics** Perspective: Vectors are **arrows** pointing in space defined by its **length** and the **direction** it's pointing.
    -   **Computer Science** Perspective: Vectors are **ordered list of numbers**. For example, in house price analytics:
        $$
        \begin{bmatrix}
        2,600\text{ ft}^2\\
        \$300,000
        \end{bmatrix}
        $$
    -   **Mathematics** Perspective: Seeks to generalise both views:
        $$
        \vec{v}+\vec{w}=\begin{bmatrix}3\\-5\end{bmatrix}+\begin{bmatrix}2\\1\end{bmatrix}\\
        2\vec{v}=2\begin{bmatrix}3\\-5\end{bmatrix}
        $$

4.  Basis Vectors

    $$
    \begin{bmatrix}
    3\\-2
    \end{bmatrix}=3\hat{i}-2\hat{j}
    $$

5.  Linear Combination of $\vec{v}$ and $\vec{w}$

    $$
    a\vec{v}+b\vec{w}
    $$

6.  The span of $\vec{v}$ and $\vec{w}$ is the set of all possible vectors that you can reach with a linear combination of the given pair of vectors.

7.  In general, if you think of a vector on its own, think of it as an arrow. If you are dealing with a collection of vectors, think of them as points or span. The span of most pairs of vectors ends up being the entire infinite sheet of two-dimensional space. But if they line up, their span is just a line.

8.  If you take two vectors in 3D space that are not pointing in the same direction, their span is some kind of flat sheet cutting through the 3D space (hyperplane). If we add a third vector that points in a separate direction, the span is the entire 3D space.

9.  If the vectors are trapped in a flat sheet, or in a line, one of these vectors are redundant, and we can remove without reducing the span. We said $\vec{v}$ and $\vec{w}$ are linearly dependent:

    $$
    \vec{u}=a\vec{v}+b\vec{w}
    $$

    Linearly independent:

    $$
    \vec{u}\neq a\vec{v}+b\vec{w}
    $$

10. Definition of Basis

    The basis of a vector space is a set of linearly independent vectors that span the full space.
