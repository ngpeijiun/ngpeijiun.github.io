<h1 style="color: #ccc">Introduction to Programming in Python</h1>

# Branching and Iteration

*Aug 20, 2022*

## String

1. A string is a list of letters enclosed in double quotes or single quotes.

2. String concatenation

   <span style="font-family: Copperplate">Example.</span>

    ```python
    hi = "hello world"
    name = 'ana'

    greet = hi + ", " + name
    print(green)
    # hello world, ana

    greeting = hi + ", " + name * 3
    print(greeting)
    # hello world, anaanaana
    ```

## Branching

### Comparison and Logic

1. Comparison operators

    | Operator | Description |
    |---|---|
    | `x == y` | `x` is equal to `y`, value equality |
    | `x != y` | `x` is not equal to `y` |
    | `x > y` | `x` is greater than `y` |
    | `x < y` | `x` is less than `y` |
    | `x >= y` | `x` is greater than or equal to `y` |
    | `x <= y` | `x` is less than or equal to `y` |
    | `x is y` | `x` is the same as `y`, reference equality |
    | `x is not y` | `x` is not the same as `y` |

2. Logic operators

    - `and`
    - `or`
    - `not`

   <span style="font-family: Copperplate">Example.</span>

    ```python
    pset_time = 15
    sleep_time = 8

    print(sleep_time > pset_time)
    # False

    derive = True
    drink = False

    both = drink and derive
    print(both)
    # False
    ```

### Branching

1. Evaluate expressions in the branch of codes of which the test condition is `True`.

   <span style="font-family: Copperplate">Example.</span>

    ```python
    x = 0

    if x > 0:
        print("x is greater than 0")
    elif x < 0:
        print("x is less than 0")
    else:
        print("x is equal to 0")
    # x is equal to 0
    ```

### Indentation

1. Indentation is required in Python to denote a block of codes for a branch.

## Iteration

1. `while` loops

   <span style="font-family: Copperplate">Example.</span>

    ```python
    n = 0
    while n < 5:
        print(n)
        n = n + 1
    ```

2. `for` loops

   <span style="font-family: Copperplate">Example.</span>

    ```python
    for n in range(5):
        print(n)
    ```

3. `range(start, stop, step)`

    - Default values for the optional parameters are `start = 0` and `step = 1`.
    - Loop until the `stop - 1`, where `stop` is the required parameters.

   <span style="font-family: Copperplate">Example.</span>

    ```python
    mysum = 0
    for i in range(7, 10):
        mysum += i
    print(mysum)
    # 24

    mysum = 0
    for i in range(5, 11, 2):
        mysum += i
    print(mysum)
    # 21
    ```

4. `break`

    - Immediately exits the innermost loop, skips remaining expressions in code block.

   <span style="font-family: Copperplate">Example.</span>

    ```python
    mysum = 0
    for i in range(5, 11, 2):
        if mysum > 10:
            break
        mysum += i
    print(mysum)
    # 12
    ```

5. `for` vs `while` loops

    | `for` | `while` |
    |---|---|
    | Known number of iterations| Unknown number of iterations |
    | Can rewrite a `for` loop using a `while` loop | May not be able to rewrite a `while` loop using a `for` loop |
