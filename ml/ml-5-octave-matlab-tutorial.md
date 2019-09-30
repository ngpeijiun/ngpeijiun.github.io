<h1 style="color: #ccc">Machine Learning 5</h1>

# Octave / Matlab Tutorial

*Oct 16, 2016*

## Octave Tutorial

### Basic Operations

```
5 + 6
3 - 2
5 * 8
1 / 2
2 ^ 6
1 == 2
1 ~= 2
1 && 0
1 || 0
xor(1, 0)
PS1('>> ')

a = 3
a = 3; % semicolon suppressing output
b = 'hi'
c = 3 >= 1

a = pi;
a
disp(a)
disp(springf('2 decimals: %0.2f', a))
disp(springf('2 decimals: %0.6f', a))
format long
a
format short
a

A = [1 2; 3 4; 5 6]
A = [1 2;
3 4;
5 6]
V = [1 2 3]
V = [1; 2; 3]
v = 1:0.1:2
v = 1:6
ones(2, 3)
C = 2*ones(2, 3)
w = zeros(1, 3)
w = rand(1, 3)
w = rand(3, 3)
w = randn(1, 3) % Gaussian distribution
w = -6 + sqrt(10) * (randn(1, 10000));
hist(w)
hist(w, 50)
I = eye(4)

help eye
help randn
help help
```

### Moving Data Around

```
A = [1 2; 3 4; 5 6]
size(A) % 1 by 2 matrix
size(A, 1)
size(A, 2)
v = [1 2 3 4]
length(v)
length([1; 2; 3; 4; 5])

pwd
cd ~/learning
ls
load featuresX.dat
load priceY.dat
load('featuresX.dat')
load('priceY.dat')
who
featuresX
size(featuresX)
priceY
whos
clear featuresX
whos
v = priceY(1:10)
save hello.mat v; % binary format
clear % all variables
load hello.mat
save hello.txt v -ascii % text format

A = [1 2; 3 4; 5 6]
A(3, 2)
A(2, :)
A(:, 2)
A([1 3], :)
A(:, 2) = [10; 11; 12]
A = [A, [100; 101; 102]]
A(:)

A = [1 2; 3 4; 5 6]
B = [11 12; 13 14; 15 16]
C = [A B]
C = [A, B]
C = [A; B]
```

### Computing on Data

```
A = [1 2; 3 4; 5 6]
B = [11 12; 13 14; 15 16]
C = [1 1; 2 2]
A * C
A .* B
A .^ 2

v = [1; 2; 3]
1 ./ v
1 ./ A

log(v)
exp(v)
abs(v)
abs([-1; 2; -3])
-v % -1*v

v + ones(length(v), 1)
v + 1
v .+ 1

A'
(A')'
A''

a = [1 15 2 0.5]
val = max(a)
[val ind] = max(a)
[val, ind] = max(a)
a < 3
find(a < 3)
A = magic(3)
[r c] = find(A >= 7)

sum(a)
prod(a)
floor(a)
ceil(a)

max(rand(3), rand(3))
max(A, [], 1)
max(A, [], 2)
max(A, [], 3)
max(max(A))
max(A(:))

A = magic(9)
sum(A, 1)
sum(A, 2)
A .* eye(9)
sum(sum(A .* eye(9)))
sum(sum(A .* flipud(eye(9))))

A = magic(3)
pinv(A)
```

### Plotting Data

```
t = [0:0.01:0.98]
y1 = sin(2 * pi * 4 * t)
plot(t, y1)
y2 = cos(2 * pi * 4 * t)
plot(t, y2)

plot(t, y1)
hold on
plot(t, y2, 'r')
xlabel('time')
ylabel('value')
legend('sin', 'cos')
title('my plot')
print -dpng 'myPlot.png'
close

figure(1); plot(t, y1);
figure(2); plot(t, y2);
subplot(1, 2, 1)
plot(t, y1)
subplot(1, 2, 2)
plot(t, y2)
axis([0.5 1 -1 1])
clf

A = magic(5);
imagesc(A)
imagesc(A), colorbar, colormap gray
imagesc(magic(15)), colorbar, colormap gray

a = 1, b = 2, c = 3
a = 1; b = 2; c = 3;
```

### Control Statements: for, while, if statement

```
v = zeros(10, 1);
for i = 1:10,
    v(i) = 2 ^ i;
end;
v
indices = 1:10;
for i = indices,
    disp(i);
end;

i = 1;
while i <= 5,
    v(i) = 100;
    i = i + 1;
end;
i = 1;
while true,
    v(i) = 999;
    i = i + 1;
    if i == 6,
        break;
    end;
end;

v(1) = 2;
if v(1) == 1,
    disp('The value is one');
elseif v(1) == 2,
    disp('The value is two');
else
    disp('The value is not one or two');
end;
```

Add ``squareThisNumber.m`` function file:

```
function y = squareThisNumber(x)

y = x ^ 2;
```

```
cd ~/learning
squareThisNumber(x)

addPath('~/learning')
```

Add ``squareAndCubeThisNumber.m`` function file:

```
function [y1 y2] = squareAndCubeThisNumber(x)

y1 = x ^ 2;
y2 = x ^ 3;
```

```
[a b] = squareAndCubeThisNumber(5)
```

$$ X=\begin{bmatrix} 1 & { x }_{ 1 }^{ (1) } & \cdots  & { x }_{ n }^{ (1) } \\ 1 & { x }_{ 1 }^{ (2) } & \cdots  & { x }_{ n }^{ (2) } \\ \vdots  & \vdots  & \ddots  & \vdots  \\ 1 & { x }_{ 1 }^{ (m) } & \cdots  & { x }_{ n }^{ (m) } \end{bmatrix},y=\begin{bmatrix} { y }^{ (1) } \\ { y }^{ (2) } \\ \vdots  \\ { y }^{ (m) } \end{bmatrix},\theta =\begin{bmatrix} { \theta  }_{ 0 } \\ { \theta  }_{ 1 } \\ \vdots  \\ { \theta  }_{ n } \end{bmatrix} $$

$$ J(\theta )=\frac { 1 }{ 2m } \sum _{ i=1 }^{ m }{ { ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) }^{ 2 } } =\frac { 1 }{ 2m } { (X\theta -y) }^{ 2 } $$

Add ``costFunctionJ.m`` function file:

```
function J = costFunctionJ(X, y, theta)

m = size(X, 1);
predictions = X * theta;
sqrErrors = (predictions - y) .^ 2;

J = 1 / (2 * m) * sum(sqrErrors);
```

```
X = [1 1; 1 2; 1 3]
y = [1; 2; 3]
theta = [0; 1]

j = costFunctionJ(X, y, theta)
```

### Vectorization

$$ { h }_{ \theta  }(x)=\sum _{ j=0 }^{ n }{ { \theta  }_{ j }{ x }_{ j } } ={ \theta  }^{ \top }x $$

Octave Unvectorized Implementation:

```
prediction = 0.0;
for j = 1:n + 1,
    prediction = prediction + theta(j) * x(j)
end;
```

Octave Vectorized Implementation:

```
prediction = theta' * x;
```

C++ Unvectorized Implementation:

```
double prediction = 0.0;
for (int j = 0; j <= n; j++) {
    prediction += theta[j] * x[j];
}
```

C++ Vectorized Implementation:

```
double prediction = theta.transpose() * x;
```

$$ { \theta  }_{ j }:={ \theta  }_{ j }-\alpha \frac { 1 }{ m } \sum _{ i=1 }^{ m }{ { (h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }) } { x }_{ j }^{ (i) } $$

$$ \theta :=\theta -\alpha \delta  $$

$$ \delta =\begin{bmatrix} { \delta  }_{ 0 } \\ { \delta  }_{ 1 } \\ \vdots  \\ { \delta  }_{ n } \end{bmatrix}=\begin{bmatrix} \frac { 1 }{ m } \sum _{ i=1 }^{ m }{ ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }){ x }_{ 0 }^{ (i) } }  \\ \frac { 1 }{ m } \sum _{ i=1 }^{ m }{ ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }){ x }_{ 1 }^{ (i) } }  \\ \vdots  \\ \frac { 1 }{ m } \sum _{ i=1 }^{ m }{ ({ h }_{ \theta  }({ x }^{ (i) })-{ y }^{ (i) }){ x }_{ n }^{ (i) } }  \end{bmatrix}=\frac { 1 }{ m } { X }^{ \top }(X\theta -y) $$

Octave Vectorized Implementation:

```
predictions = X * theta;
delta = 1 / m * X' * (predictions - y);
theta = theta - alpha * delta;
```
