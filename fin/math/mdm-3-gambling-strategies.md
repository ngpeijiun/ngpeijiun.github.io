<h1 style="color: #ccc">Million Dollar Maths</h1>

# Gambling System

*Feb 10, 2024*

## Kelly Criterion

1. The derivation of of the **Kelly criterion** involves maximising the expected value of the logarithm of wealth, which represents the compound growth rate over time. The goal is to find the fraction $f^*$ of the current bankroll to bet that maximises this expected logarithmic value.

2. Start point

    Assume you have a current bankroll $W$, and you are considering a bet with a probability $p$ of winning and a probability $q=1-p$ of losing. If you win the bet, your return on the bet is $b$ times the amount bet, where $b$ is the net odds received on the wager (not including the original stake).

    If you bet a fraction $f$ of your bankroll, then:

    - If you win, your new bankroll will be $W\left(1+fb\right)$.
    - If you lose, your new bankroll will be $W\left(1-f\right)$.

3. Exponential growth representation

    Let us assume you make $n$ bets, and out of these, a proportion $p$ are wins, and $q$ are losses. The growth of your wealth $W_n$ after $n$ bets can be modelled as:

    $$
    W_{n} =W_{0}( 1+fb)^{np}( 1-f)^{nq}
    $$

4. Introducing the logarithm

    To optimise this growth over the long term, we aim to maximise $W_n$. Given the multiplicative nature of wealth growth, direct optimisation is complex due to the exponential factors. This is where logarithms come into play, simplifying the multiplicative relationships into additive ones, making it easier to handle mathematically.

    Taking the logarithm of $W_n$, we get:

    $$
    \log( W_{n}) =\log( W_{0}) +np\log( 1+fb) +nq\log( 1-f)
    $$

5. Maximising logarithmic growth

    We want to find value of $f$ that maximises $\log(W_n)$,

    $$
    \begin{aligned}
    f^{*} & =\underset{f}{\arg\max}\log( W_{n})\\
    & =\underset{f}{\arg\max}[\log( W_{0}) +np\log( 1+fb) +nq\log( 1-f)]\\
    & =\underset{f}{\arg\max}[ np\log( 1+fb) +nq\log( 1-f)]
    \end{aligned}
    $$

    We take derivative with respect to $f$ and set it to zero,

    $$
    \begin{aligned}
    \frac{\partial }{\partial f}[ np\log( 1+fb) +nq\log( 1-f)] & =0 \\
    np\frac{b}{1+fb} +nq\frac{-1}{1-f} & =0
    \end{aligned}
    $$

    Solve for $f$,

    $$
    \begin{aligned}
    p\frac{b}{1+fb} & =q\frac{1}{1-f} &  & \\
    pb( 1-f) & =q( 1+fb) &  & \\
    pb-pfb & =q+qfb &  & \\
    pb-q & =fb( p+q) &  & \\
    f & =\frac{pb-q}{b( p+q)} &  & \\
    & =\frac{bp-q}{b} &  & p+q=1\\
    & =p-\frac{q}{b} &  &
    \end{aligned}
    $$

    This yields the Kelly formula:

    $$
    f^{*} =p-\frac{q}{b}
    $$

6. Conclusion

    The Kelly formula, or Kelly Criterion, optimises the fraction of a bankroll to bet to maximise long-term expected wealth growth. It balances potential gains and losses by considering winning probability, losing probability, and payout odds. This strategy is used in gambling and investing to determine the most efficient stake size for wealth growth while mitigating financial risks.


