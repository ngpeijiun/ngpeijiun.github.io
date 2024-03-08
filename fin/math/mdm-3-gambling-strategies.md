<h1 style="color: #ccc">Million Dollar Maths</h1>

# Gambling System

*Feb 10, 2024*

## Kelly Criterion

1. The derivation of the **Kelly criterion** involves maximising the expected value of the logarithm of wealth, which represents the compound growth rate over time. The goal is to find the fraction $f^*$ of the current bankroll to bet that maximises this expected logarithmic value.

2. Starting point

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
    & =\frac{bp-q}{b} &  & \text{for }p+q=1\\
    & =p-\frac{q}{b} &  & 
    \end{aligned}
    $$

    This yields the Kelly formula:

    $$
    f^{*} =p-\frac{q}{b}
    $$

6. Conclusion

    The Kelly formula, or Kelly criterion, optimises the fraction of a bankroll to bet to maximise long-term expected wealth growth. It balances potential gains and losses by considering winning probability, losing probability, and payout odds. This strategy is used in gambling and investing to determine the most efficient stake size for wealth growth while mitigating financial risks.

## General Kelly Criterion

1. Generalise Kelly criterion to allow for partial losses, which is more relevant for investments.

    Assume you have an initial principal $V$, and you are considering an investment with a probability $p$ of gaining and a probability $q=1-p$ of losing. If you make a gain in the investment, your return on investment is $b$ ($0.1$ if the ROI is 10%), and if you make a loss, your negative ROI is $a$ ($0.2$ if the ROI is -20%).

    If you invest a fraction $f$ of your initial principal, then:

    - If you make a gain, your portfolio new NAV will be $V(1+fb)$.
    - If you make a loss, your portfolio new NAV will be $V(1-fa)$.

2. Exponential growth representation

    Let us assume you make $n$ years of investment, and out of these, a proportion $p$ are wins, and $q$ are losses. The growth of your NAV $V_n$ after $n$ years can be modelled as:

    $$
    W_{n} =W_{0}( 1+fb)^{np}( 1-fa)^{nq}
    $$

3. Introducing the logarithm

    Taking the logarithm of $V_n$, we get:

    $$
    \log( V_{n}) =\log( V_{0}) +np\log( 1+fb) +nq\log( 1-fa)
    $$

4. Maximising logarithmic growth

    We want to find value of $f$ that maximises $\log(V_n)$,

    $$
    \begin{aligned}
    f^{*} & =\underset{f}{\arg\max}\log( V_{n})\\
    & =\underset{f}{\arg\max}[\log( V_{0}) +np\log( 1+fb) +nq\log( 1-fa)]\\
    & =\underset{f}{\arg\max}[ np\log( 1+fb) +nq\log( 1-fa)]
    \end{aligned}
    $$

    We take derivative with respect to $f$ and set it to zero,

    $$
    \begin{aligned}
    \frac{\partial }{\partial f}[ np\log( 1+fb) +nq\log( 1-fa)] & =0 \\
    np\frac{b}{1+fb} +nq\frac{-a}{1-fa} & =0
    \end{aligned}
    $$

    Solve for $f$,

    $$
    \begin{aligned}
    p\frac{b}{1+fb} & =q\frac{a}{1-fa} &  & \\
    pb( 1-fa) & =qa( 1+fb) &  & \\
    pb-pfab & =qa+qfab &  & \\
    pb-qa & =fab( p+q) &  & \\
    f & =\frac{pb-qa}{ab( p+q)} &  & \\
    & =\frac{bp-qa}{ab} &  & \text{for }p+q=1\\
    & =\frac{p}{a}-\frac{q}{b} &  & 
    \end{aligned}
    $$

    This yields the Kelly formula:

    $$
    f^{*} =\frac{p}{a}-\frac{q}{b}
    $$

5. Conclusion

    (help me to write this)
