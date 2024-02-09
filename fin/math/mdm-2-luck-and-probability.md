<h1 style="color: #ccc">Million Dollar Maths</h1>

# Luck and Probability

*Feb 9, 2024*

## Probability

1. Some basic uses of math can help in analysing luck and probability, and assessing risk and opportunity in investment and business decisions.

2. **Expected value** is the average value calculated by considering all possible outcomes. It represents the value that would be obtained over an infinite number of trials in a given scenario.

3. Expected value and combinatorial mathematics assist us in determining options that offer the maximum current value and future potential.

## Lady Luck

1. For two events with the same expected value, one with a fixed outcome and the other with a volatile outcome, the volatile event offers more excitement and surprise, making it more suitable for games.

2. **Volatility** can be measured using **standard deviation**. For a large dataset with a normal distribution, we can apply the 68/95/99.7 rule. This suggests that approximately 68% of the data will fall within one standard deviation of the mean, 95% within two standard deviations, and 99.7% within three standard deviations.

3. In many cases in business and science, the three-sigma rule is used as a rule of thumb, implying that nearly all members of a normal distributed set will fall within three standard deviations of the mean. Even for non-normal distributions, this proportion will be at least 88.8%.

4. Standard deviation effectively measures the **role of luck** in a given game -- a large standard deviation indicates a greater opportunity for both winning and losing the game.

## Risk of Ruin

1. Consider a fair coin-tossing game with an expected value of \$0. The winner earns \$1 by correctly guessing whether the coin will land on heads or tails, after placing a \$1 bet. Players are allowed to have a negative balance temporarily, but they will be ejected if their losses exceed the starting stake after 100 throws.

2. The standard deviation ($\sigma$) of this game is calculated as $\sigma =\sqrt{100} =10$.

3. According to 68/95/99.7 rule, after 100 tosses, there is a 68% chance that a player's profit will be between -\$10 and \$10, given the standard deviation of $10$. This implies that for a player with an initial stake of \$10, there is a 32% chance that their profit will fall outside this range. Since outcomes outside the $\pm 10$ range are equally likely to be gains or losses, there is effectively a 16% chance that a player will incur a loss greater than \$10. For players starting with \$10 stake, this translates to a 16% chance of being ejected from the game for exceeding their loss limit.

4. By contrast, a weathier player with an initial stake of \$30 has a 99.7% chance of their profit falling between -\$30 and \$30, and a 0.3% chance of it exceeding this range. Thus, this weathier player faces only a 0.15% risk of being ejected from the game and losing all their stake.

5. This analysis demonstrates that the **risk of ruin**, or the chance of being wiped out, is significantly lower for the wealthier player compared to the player with a smaller starting stake, despite the game being entirely fair.

## Gambler's Ruin

6. **Gambler's ruin** describes the phenomenon where a persistent gambler, who increases his stake when winning but fails to reduce it when losing, will inevitably lose all his money. It also refers to the concept that, in a fair game, a gambler with finite wealth will inevitably go bankrupt when competing against a gambler with infinite wealth.

7. In a fair game, it might seem equally likely for the gambler to go broke or to double his money. Hence, we can assign a probability of $\frac{1}{2}$ for the gambler going broke before he doubles his money. From this point, the probability of him going broke before he manages to double his money twice can be thought of as $\frac{1}{2}+\frac{1}{4}$. This sequence continues as follows:

    $$
    \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots + \left(\frac{1}{2}\right)^{n}
    $$

    This series tends towards a limit of $1$, indicating that the probability of the gambler going broke eventually approaches 100%, despite it being a fair game.

## Volatility and Strategies

1. There are strategies to reduce volatility in games, which also lower the chances of winning due to house edge. If you accept the likelihood of losing but still enjoy playing, adopting such a strategy can extend the duration of your gameplay.

2. Conversely, if your primary motivation is the possibility of a significant win, you might opt for the opposite approach: betting on the riskies outcomes while minimising your exposure to as few times as possible.

## Beyond Normal Distribution

1. The most common distribution pattern is called **normal distribution** or **Gaussian distribution**. This is characterised by data being symmetrically distributed around a central point, without any bias towards the left or right. The mean, median and mode are all located at approximately the same position, with outliers becoming increasingly rare the further away from this central point they are. The 68/95/99.7 rule is most applicable for this type of distribution.

2. However, it is important to note that not all datasets follow such a simple distribution. In cases where the distribution is skewed to the left or right, analysing the expected value by calculating the mean of the dataset may be less informative.

3. Consider the following table of students' pocket money:

    | Pocket Money | Percentage | Remarks |
    |:------------:|:----------:|:-------:|
    |         \$10 |     13.73% |         |
    |         \$20 |     22.55% | Mode    |
    |         \$30 |     15.69% | Median  |
    |         \$40 |     14.71% | Mean    |
    |         \$50 |      9.80% |         |
    |         \$60 |      7.84% |         |
    |         \$70 |      7.84% |         |
    |         \$80 |      4.90% |         |
    |         \$90 |      1.96% |         |
    |        \$100 |      0.98% |         |

    The mean pocket money is approximately \$40, but median and mode represent the amounts most commonly received, as they constitute a significant portion of the total distribution.

4. Another type of skewed distribution worth understanding is the **Poisson distribution**. This distribution is best thought of as applying to scenarios where we are counting events that occur over a fixed interval of time, with the minimum countable number being zero.

5. To clarify the distinction, the goal difference in the number of goals scored in a soccer game follows a normal distribution (since the number can be negative), while the number of goals scored follows a Poisson distribution (as the count is bounded at zero).

6. It is important to note that when applying a Poisson distribution to datasets with a higher mean, the distribution can appear more similar to a normal distribution. The closer the mean is to zero, the more the graph will skew to the right.

## Gambling Fallacies

1. **Gambler's conceit** is the fallacy where a gambler believes they can stop engaging in risky behaviour at any time, often misled by viewing winnings as "free money" for pursuing greater success.

2. Standard deviation is often regarded as gambler's friend, for a game with zero volatility offers zero opportunity for gambling. Keep in mind that standard deviation shows you both how much better off and how much worse off you might be compared to the expected value, and that both outcomes are equally probable. Also, bear in mind that the standard deviation remains constant throughout the game, while expected return grows proportionally to the total bet value. This means that the longer the gambling session, the less likely it is that the gambler will be able to beat the house, as the rate at which you should expect to lose money is larger than what luck can compensate for. This is also a reason not to be too timid in your gambling strategy: the volatility of a single bet is far higher than the volatility of a thousand bets. The more bets your session is divided into, the more likely you are to lose money at a rate closer to the house edge.
