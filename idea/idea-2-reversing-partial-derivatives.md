<h1 style="color: #ccc">Idea 2</h1>

# Reversing Partial Derivatives

*Nov 4, 2019*

1. Proof

   Take definite integral of $ f( x) =x $ as the limit of Riemann Sum

   $$ \int ^{x}_{0} f( x) dx=\lim\limits _{n\rightarrow \infty }\sum ^{n}_{i=1} f\left( x^{*}_{i}\right) \Delta x $$

   $$ \begin{aligned}
\int ^{x}_{0} xdx & =\lim\limits _{n\rightarrow \infty }\sum\limits ^{n}_{i=1}\left( x^{*}_{i}\right)\frac{x}{n}\\
 & =\lim\limits _{n\rightarrow \infty }\frac{x}{n}\sum\limits ^{n}_{i=1} x^{*}_{i}
\end{aligned} $$

   From each interval we choose the right point, $ x^{*}_{i} =i\cdotp \Delta x $

   $$ \begin{aligned}
\int ^{x}_{0} xdx & =\lim\limits _{n\rightarrow \infty }\frac{x}{n}\sum ^{n}_{i=1} i\cdotp \frac{x}{n}\\
 & =\lim _{n\rightarrow \infty }\frac{x^{2}}{n^{2}}\sum ^{n}_{i=1} i
\end{aligned} $$

   Use partial sum formula $ \sum ^{n}_{i=1} i=\frac{1}{2} n( n+1) $

   $$ \begin{aligned}
\int ^{x}_{0} xdx & =\lim _{n\rightarrow \infty }\frac{x^{2}}{n^{2}} \cdotp \frac{1}{2} n( n+1)\\
 & =\frac{1}{2}\lim _{n\rightarrow \infty }\frac{n^{2} x^{2} +nx^{2}}{n^{2}}\\
 & =\frac{1}{2} x^{2}
\end{aligned} $$
