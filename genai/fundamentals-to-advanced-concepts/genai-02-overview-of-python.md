<h1 style="color: #ccc">Generative AI: Fundamentals to Advanced Concepts</h1>

# Overview of Python

Apr 5, 2025

## Introduction to Python and Programming

1.  Python powers some of the most exciting fields today:

    -   Web Development: Frameworks like Django and Flask simplify the creation of websites.
    -   Data Science: Libraries like Pandas and NumPy make it easy to analyse and manipulate data.
    -   Artificial Intelligence (AI): Tools like TensorFlow and PyTorch are used to create intelligent systems.

2.  Python libraries are pre-written code collections that simplify common tasks and extend Python's capabilities.

3.  Useful Resources

    -   [Python documentation](https://www.python.org/about/help/)

## Accessing Data in Pandas

1.  Label-Based Indexing

    In a Series, labels make up the index, enabling value retrieval by label.

    ```python
    import pandas as pd

    # Series Example

    s = pd.Series([10, 20, 30], index=['a', 'b', 'c'])

    # Label-based indexing (Series)

    print('Label-based indexing (Series):')
    print(s['b'])
    # Output:
    # 20
    ```

    In a DataFrame, labels define both rows (index) and columns, forming a two-dimensional labelling system.

    ```python
    # Data Frame Example

    data = {
        'Name': ['Alice', 'Bob', 'Charlie'],
        'Age': [25, 32, 18],
        'City': ['London', 'Paris', 'New York'],
    }
    df = pd.DataFrame(data)

    # Label-based indexing (DataFrame) - Accessing a row using .loc

    print('Label-based indexing (DataFrame - row):')
    print(df.loc[1])
    # Output:
    # Name      Bob
    # Age        32
    # City    Paris
    # Name: 1, dtype: object

    # Label-based indexing (DataFrame) - Accessing a column

    print('Label-based indexing (DataFrame - column):')
    print(df['Name'])
    # Output:
    # 0      Alice
    # 1        Bob
    # 2    Charlie
    # Name: Name, dtype: object
    ```

2.  Integer-Based Indexing

    Integer-based indexing lets you access DataFrame data by position, like indexing Python lists. In DataFrame, use `.iloc` to access rows and columns by integer positions.

    ```python
    # Integer-based indexing (Series)

    print('Integer-based indexing (Series):')
    print(s.iloc[1])
    # Output:
    # 20

    # Integer-based indexing (DataFrame) - Accessing a row using .iloc

    print('Integer-based indexing (DataFrame - row):')
    print(df.iloc[1])
    # Output:
    # Name      Bob
    # Age        32
    # City    Paris
    # Name: 1, dtype: object
    ```

3.  Boolean Indexing

    Boolean indexing filters DataFrames by using a True/False condition to select rows. A Boolean Series is created based on your condition, and only rows with `True` values are kept.

    ```python
    # Boolean indexing (DataFrame)

    print('Boolean indexing (DataFrame):')
    print(df[df['Age'] > 30])
    # Output:
    #   Name  Age   City
    # 1  Bob   32  Paris
    ```

## DataFrame Operations in Pandas

1.  Data is the new oil, and Data Frames are the refineries that transform raw information into meaningful insights. Whether you’re a data scientist, analyst, or engineer, mastering Data Frame operations is essential for extracting, cleaning, and analyzing structured data efficiently.

2.  Filtering Data

    ```python
    import pandas as pd

    data = {
        'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Even'],
        'Age': [25, 32, 18, 46, 29],
        'City': ['London', 'Paris', 'New York', 'London', 'Berlin'],
        'Score': [85, 92, 78, 95, np.nan],
    }
    df = pd.DataFrame(data)

    # Filtering data

    print('Filtering data (Age > 25):')
    print(df[df['Age'] > 25])
    # Output:
    #     Name  Age    City  Score
    # 1    Bob   32   Paris   92.0
    # 3  David   46  London   95.0
    # 4   Even   29  Berlin    NaN

    # Filtering data with multiple conditions

    print('Filtering data (Age > 20 and City is London):')
    print(df[(df['Age'] > 20) & (df['City'] == 'London')])
    # Output:
    #     Name  Age    City  Score
    # 0  Alice   25  London   85.0
    # 3  David   46  London   95.0
    ```

3.  Sorting Data

    ```python
    # Sorting data by Age

    print('Sorting data by Age:')
    print(df.sort_values('Age'))
    # Output:
    #       Name  Age      City  Score
    # 2  Charlie   18  New York   78.0
    # 0    Alice   25    London   85.0
    # 4     Even   29    Berlin    NaN
    # 1      Bob   32     Paris   92.0
    # 3    David   46    London   95.0

    # Sorting data by Name (alphabetical)

    print('Sorting data by Name:')
    print(df.sort_values('Name'))
    # Output
    #       Name  Age      City  Score
    # 0    Alice   25    London   85.0
    # 1      Bob   32     Paris   92.0
    # 2  Charlie   18  New York   78.0
    # 3    David   46    London   95.0
    # 4     Even   29    Berlin    NaN
    ```

4.  Adding and Removing Column

    ```python
    # Adding a new column

    df['Grade'] = ['B', 'A', 'C', 'A+', 'B-']
    print('DataFrame with added Grade column:\n', df)
    # Output:
    #        Name  Age      City  Score Grade
    # 0    Alice   25    London   85.0     B
    # 1      Bob   32     Paris   92.0     A
    # 2  Charlie   18  New York   78.0     C
    # 3    David   46    London   95.0    A+
    # 4     Even   29    Berlin    NaN    B-

    # Adding a new column based on a condition

    df['Senior'] = df['Age'] >= 30
    print('DataFrame with added Senior column:\n', df)
    # Output:
    #        Name  Age      City  Score Grade  Senior
    # 0    Alice   25    London   85.0     B   False
    # 1      Bob   32     Paris   92.0     A    True
    # 2  Charlie   18  New York   78.0     C   False
    # 3    David   46    London   95.0    A+    True
    # 4     Even   29    Berlin    NaN    B-   False

    # Removing a column

    df = df.drop('Grade', axis=1) # axis=1 specifies column
    # df = df.drop(columns=['Grade'])
    print('DataFrame after removing Grade column:\n', df)
    # Output:
    #        Name  Age      City  Score  Senior
    # 0    Alice   25    London   85.0   False
    # 1      Bob   32     Paris   92.0    True
    # 2  Charlie   18  New York   78.0   False
    # 3    David   46    London   95.0    True
    # 4     Even   29    Berlin    NaN   False
    ```

5.  Handling Missing Values

    Handling missing values is essential in data cleaning. In Pandas, missing data (NaN) can disrupt analysis, but you can handle it by filling values (e.g., mean or median) or dropping rows or columns with missing values.

    ```python
    # Handling missing values - filling with a specific value

    df_filled = df.fillna(-1)
    print('DataFrame after filling NaN with -1:\n', df_filled)
    # Output:
    #        Name  Age      City  Score  Senior
    # 0    Alice   25    London   85.0   False
    # 1      Bob   32     Paris   92.0    True
    # 2  Charlie   18  New York   78.0   False
    # 3    David   46    London   95.0    True
    # 4     Even   29    Berlin   -1.0   False

    # Handling missing values - filling with the mean of the column

    df_mean_filled = df.fillna(df.mean(numeric_only=True))
    print('DataFrame after filling NaN with mean score:\n', df_mean_filled)
    # Output:
    #        Name  Age      City  Score  Senior
    # 0    Alice   25    London   85.0   False
    # 1      Bob   32     Paris   92.0    True
    # 2  Charlie   18  New York   78.0   False
    # 3    David   46    London   95.0    True
    # 4     Even   29    Berlin   87.5   False

    # Handling missing values - dropping rows with NaN
    df_dropped = df.dropna()
    print('DataFrame after dropping rows with NaN:\n', df_dropped)
    # Output:
    #        Name  Age      City  Score  Senior
    # 0    Alice   25    London   85.0   False
    # 1      Bob   32     Paris   92.0    True
    # 2  Charlie   18  New York   78.0   False
    # 3    David   46    London   95.0    True
    ```

6.  Handling Duplicates

    ```python
    df.loc[len(df)] = ['Even', 29, 'Berlin', np.nan, False]
    print('Original DataFrame:\n', df)
    # Output:
    #        Name  Age      City  Score  Senior
    # 0    Alice   25    London   85.0   False
    # 1      Bob   32     Paris   92.0    True
    # 2  Charlie   18  New York   78.0   False
    # 3    David   46    London   95.0    True
    # 4     Even   29    Berlin    NaN   False
    # 5     Even   29    Berlin    NaN   False

    # Handling duplicates

    df_no_dup = df.drop_duplicates()
    print('DataFrame after dropping duplicates:\n', df_no_dup)
    # Output:
    #        Name  Age      City  Score  Senior
    # 0    Alice   25    London   85.0   False
    # 1      Bob   32     Paris   92.0    True
    # 2  Charlie   18  New York   78.0   False
    # 3    David   46    London   95.0    True
    # 4     Even   29    Berlin    NaN   False

    # Handling duplicates based on a subset of columns

    df_no_dup_city = df.drop_duplicates(subset=['City'])
    print('DataFrame after dropping duplicates based on City column:\n', df_no_dup_city)
    # Output:
    #        Name  Age      City  Score  Senior
    # 0    Alice   25    London   85.0   False
    # 1      Bob   32     Paris   92.0    True
    # 2  Charlie   18  New York   78.0   False
    # 4     Even   29    Berlin    NaN   False
    ```

## Matplotlib

1.  Matplotlib is a comprehensive data visualisation library that supports static, interactive, and animated plots. Use `pyplot` for simple functions like line, bar, and scatter plots.

2.  Line Chart: Trends over time

    ```python
    import pandas as pd
    import matplotlib.pyplot as plt

    data = {
        'Year': [2020, 2021, 2022, 2023],
        'Sales': [150, 180, 160, 200],
        'Profit': [30, 40, 35, 50],
    }
    df = pd.DataFrame(data)

    plt.plot(df['Year'], df['Sales'])
    plt.xlabel('Year')
    plt.ylabel('Sales')
    plt.title('Sales over Time')
    plt.xticks(df['Year'])
    plt.show()
    ```

3.  Bar Chart: Comparing categories

    ```python
    plt.bar(df['Year'], df['Sales'])
    ```

4.  Scatter Plot: Relationship between numerical variables

    ```python
    plt.scatter(df['Sales'], df['Profit'])
    plt.xlabel('Sales')
    plt.ylabel('Profit')
    plt.title('Sales vs. Profit')
    plt.show()
    ```

## References

1.  [Numpy](https://numpy.org/)
2.  [Pandas](https://pandas.pydata.org/)
3.  [Matplotlib](https://matplotlib.org/stable/index.html)
4.  [Scikit Learn](https://scikit-learn.org/stable/index.html)
