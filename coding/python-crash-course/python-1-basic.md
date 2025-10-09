<h1 style="color: #ccc">Python Crash Course</h1>

# Python Basics

## Getting Started

The `print` function is used to display text or output in Python. For example:

```python
print("Hello, World!")
```

This will output the text `Hello, World!` to the console.

To run this script, save it as a `.py` file (e.g., `hello.py`) and run the following command in your terminal:

```bash
python hello.py
```

Modern IDEs, like Visual Studio Code, use colours to highlight keywords, variables, and other code elements. This makes code easier to read, debug, and understand.

## Variables and Data Types

A **variable** in Python stores data that can be used and manipulated later. The **value** is the data assigned to the variable. For example:

```python
message = "Hello Python Crash Course World!"
print(message)
```

Here, `message` is the variable, and `"Hello Python Crash Course World!"` is its value.

When naming variables, use short but descriptive names to make your code clear and readable.

If you reference a variable that has not been defined, Python will raise an error. Python provides a **traceback**, which is an error message showing where the issue occurred. For example:

```python
print(mesage)
```

This will result in:

```
NameError: name 'mesage' is not defined
```

The last line of the traceback indicates the type of error (`NameError`) and its location.
