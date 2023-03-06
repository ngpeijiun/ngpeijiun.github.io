<h1 style="color: #ccc">Introduction to Programming in Python</h1>

# What is Computation?

*Aug 7, 2022*

## Topics

1. Data structures
2. Iteration and recursion
3. Abstraction of procedures and data types
4. Organise and modularise systems using classes and methods
5. Different classes of algorithms, searching and sorting
6. Complexity of algorithms

## Introduction to Computers

1. What does a computer do?

    - Performs calculations <br> A billion calculations per second, or one calculation per nanosecond!

    - Remembers results <br> GB to TB of storage!

2. Computers are machines

    - **Fixed program** computer <br> Calculator

    - **Stored program** computer <br> Machine stores and executes instructions

3. Types of knowledge

    - **Declarative** knowledge <br> Statements describing intended outcome or fact.

    - **Imperative** knowledge <br> Recipes or how-to's describing step-by-step instructions in detail.

   <span style="font-family: Copperplate">**Declarative Example.**</span> Definition of square root of n

    $$
    \text{square root of } n=\sqrt{n} \text{, where} \sqrt{n} \cdot \sqrt{n} = n
    $$

   <span style="font-family: Copperplate">**Imperative Example.**</span> A numerical method to find square root of n

    ```pseudocode
    guess = n / 2
    repeat until close enough
        new_guess = (guess + n / guess) / 2
        guess = new_guess
    ```

4. What is an algorithm?

   An **algorithm** consists of a sequence of **steps**, a **flow of control** of these steps and a means of determining **when to stop**.

5. Where things go wrong

    - **Syntactic errors** (compile-time errors)
    - Syntactically correct, but **static semantic errors** (compile-time errors)
    - Static semantically correct, but **dynamic semantic errors** (runtime errors); different meaning than what the programmer intended.

## Python Basics

### Objects

1. Objects can be **scalar** or **non-scalar**.

2. Scalar objects

    - `int`
    - `float`
    - `bool`
    - `NoneType`
    - Can use `type()` to see the type of object.

   <span style="font-family: Copperplate">Example.</span>

    ```python
    type(1)
    # <class 'int'>
    type(1.1)
    # <class 'float'>
    type(True)
    # <class 'bool'>
    type(None)
    # <class 'NoneType'>
    ```

3. Non-scalar objecs

    - `str`
    - `list`

   <span style="font-family: Copperplate">Example.</span>

    ```python
    type('hello world')
    # <class 'str'>
    type([1, 2, 3])
    # <class 'list'>
    ```

3. Type conversion

   <span style="font-family: Copperplate">Example.</span>

    ```python
    3
    # 3
    float(3)
    # 3.0
    type(float(3))
    # <class 'float'>
    3.9
    # 3.9
    int(3.9)
    # 3
    type(int(3.9))
    # <class 'int'>
    ```

4. Print to console

   <span style="font-family: Copperplate">Example.</span>

    ```python
    print(3)
    # 3
    print(float(3))
    # 3.0
    print('hello world')
    # hello world
    ```

### Operators

1. Operators

    | Operator | Name |
    |:---:|---|
    | `+` | Addition |
    | `-` | Subtraction |
    | `*` | Multiplication |
    | `**` | Exponentiation |
    | `/` | Division |
    | `//` | Integer division / quotient |
    | `%` | Modulus / remainder |

2. Rules of precedence

   The order of operator evaluation depends on the rules of precedence. The acronym PEMDAS is a useful way to remember the rules.

    | Order | PEMDAS |
    |:---:|---|
    | 1 | Parentheses |
    | 2 | Exponentiation |
    | 3 | Multiplication and division |
    | 4 | Addition and subtraction |

3. Expressions

   Syntax for a simple expression

    ```grammar
    <object> <operator> <object>
    ```

   <span style="font-family: Copperplate">Example.</span>

    ```python
    20 + 32
    ```

### Variables

1. Assignments

    **Equal character** is an assignment of a **value** to a **variable**.

   <span style="font-family: Copperplate">Example.</span>

    ```python
    pi = 3.14159
    pi_approx = 22 / 7
    ```

    - Value of a variable is stored in computer memory.
    - Variable is a name to access a specific memory location to store or retrieve the value.
    - Assignment stores the value to the specific memory location of the variable.

2. Variable naming uses snake-case convention

   <span style="font-family: Copperplate">Example.</span>

    ```python
    a_multiple_words_variable_name_uses_snake_case = 4
    ```

2. Mnemonic variable name

   <span style="font-family: Copperplate">Example.</span>

    ```python
    pi = 3.14159
    radius = 2.2
    area = pi * radius ** 2
    ```
