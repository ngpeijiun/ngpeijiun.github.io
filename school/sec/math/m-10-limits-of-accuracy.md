<h1 style="color: #ccc">O-Level Mathematics</h1>

# Limits of Accuracy

*Feb 23, 2025*

## Understanding Limits of Accuracy

1.  Definition

    -   The limits of accuracy refer to the possible range of values a measured or rounded number can take.
    -   When a value is rounded to a specified unit, the **true value** lies between an **upper bound** and a **lower bound**.

2.  Upper and Lower Bounds of a Rounded Value

    -   If a number is rounded to a given degree of accuracy (e.g., the nearest unit, decimal place, or significant figure), the actual value lies within a range.
    -   The lower bound (LB) is the smallest possible value before rounding up.
    -   The uppper bound (UB) is the largest possible value before rounding down.
    -   If a value is rounded to the nearest $x$:

        $$
        \text{Lower Bound}=\text{Rounded Value}-\frac{x}{2}
        $$

        $$
        \text{Upper Bound}=\text{Rounded Value}+\frac{x}{2}
        $$

    -   Example:

        A length is given as $8$ cm, rounded to the nearest cm.

        The lower bound is $8-0.5=7.5$ cm.

        The upper bound is $8+0.5=8.5$ cm.

        The true length is between $7.5$ cm and $8.5$ cm.

3.  Upper and Lower Bounds in Calculations

    When performing calculations using rounded values, the results also have upper and lower bounds.

    **Addition and Subtraction**

    -   Upper Bound: Add the upper bounds of the values.
    -   Lower Bound: Add the lower bounds of the values.

    Example:

    Given $A=15$ cm (rounded to the nearest cm) and $B=20$ cm (rounded to the nearest cm),

    LB of $A=14.5$ cm, UB of $A=15.5$ cm.

    LB of $B=19.5$ cm, UB of $B=20.5$ cm.

    LB of $A+B=14.5+19.5=34$ cm.

    UB of $A+B=15.5+20.5=36$ cm.

    **Multiplication and Division**

    -   To find the maximum possible result, multiply the largest values.
    -   To find the minimum possible result, multiply the smallest values.

    Example:

    A rectangle has width $7$ cm and length $12$ cm, both rounded to nearest cm.

    LB of width $=6.5$ cm, UB of width $=7.5$ cm.

    LB of length $=11.5$ cm, UB of length $=12.5$ cm.

    Min Area (LB) $=6.5\times11.5=74.75$ cm<sup>2</sup>.

    Max Area (UB) $=7.5\times12.5=93.75$ cm<sup>2</sup>.

    **Speed Calculation (Distance/Time)**

    -   Max Speed = Upper Bound of Distance ÷ Lower Bound of Time
    -   Min Speed = Lower Bound of Distance ÷ Upper Bound of Time

    Example:

    A car travels $120$ km, rounded to the nearest $10$ km, in $2$ hours, rounded to the nearest $0.1$ hour.

    LB of distance $=115$ km, UB of distance $= 125$ km.

    LB of time $=1.95$ hours, UB of time $=2.05$ hours.

    Min Speed (LB) $=\frac{115}{2.05}\approx56.10$ km/h.

    Max Speed (UB) $=\frac{125}{1.95}\approx64.10$ km/h.


