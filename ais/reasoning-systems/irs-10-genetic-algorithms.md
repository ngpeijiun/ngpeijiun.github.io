<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Genetic Algorithms

*Mar 8, 2025*

## Genetic Algorithms

1.  Evolutionary Computation

    Evolution vs. Problem Solving

    -   Environment → Problem
    -   Individual → Candidate Solution
    -   Fitness → Quality

2.  Genetic Algorithms (GA)

    -   General-purpose search and optimisation inspired by natural genetics.
    -   Population-based approach, where each individual represents a potential solution.
    -   Evolutionary process improves solutions through:
        -   Selection (choosing better candidates).
        -   Crossover (combining solutions).
        -   Mutation (introducing variations).

3.  GA Search Steps

    -   Initialise a population.
    -   Evaluate each solution's optimality.
    -   If an optimal solution is found, output it.
    -   Otherwise, select the best individuals.
    -   Apply crossover and mutation to generate offspring.
        -   Crossover combines parent solutions.
        -   Mutation introduces diversity.
    -   Replace old solutions and repeat until termination.

4.  Solution Representation in GA

    -   GA encodes solutions like DNA sequences.
    -   Solutions are represented as strings of values, such as:
        -   Binary (e.g., `010100`)
        -   Integer sequences (e.g., `[5, 6, 1, 9]`)
        -   Floating-point values (e.g., `[14.5, 79.0]`)
    -   Application-agnostic: GA can be applied across different domains by adapting different encodings.

5.  Population Dynamics

    -   Initial Population:
        -   Randomly generated or based on prior knowledge.
        -   Represents a diverse sample of the search space.
        -   Each solution is evaluated for its fitness.
    -   New Population:
        -   Solutions are selected for replication based on fitness.
        -   Crossover and mutation generate new candidates.

## Replacement Strategies

1.  Population Replacement Strategies

    -   Generational GA: Entire population is replaced each cycle.
    -   Steady-state GA: Only a subset of the weakest individuals are replaced.

## Selection Methods

1.  Roulette Wheel Selection (Fitness-Proportionate Selection)

    -   Each solution (chromosome) has a fitness score $f(s_i)$.
    -   Each chromosome's probability $p_i$ is:

        $$
        p_i=\frac{f(s_i)}{\sum_i{f(s_i)}}
        $$

    -   The cumulative probability is exhaustive:

        $$
        \sum_i{p_i}=1
        $$

    -   Spin the roulette wheel to select individuals for the next generation.

        First, assign a cumulative probability $q_i$ to each chromosome:

        $$
        q_i=\sum_{j=1}^i{p_j}
        $$

        Generate a random number $r$ between $0$ and $1$ and select the chromosome where:

        $$
        q_{i-1}\lt r\leq q_i
        $$

        Each individual's selection probability is proportional to its fitness.

2.  Tournament Selection

    -   Binary Tournament: Randomly select two individuals; the fitter one is chosen.
    -   N-Tournament: Select $N$ individuals randomly and choose the best for reproduction.

3.  Rank Selection

    -   Individuals are ranked by fitness, and selection is based on their rank.
    -   Linear Ranking: Assigns a fitness value based on position in the sorted population.
    -   Exponential Ranking: Assigns exponentially decreasing fitness values (e.g., $s,s^2,s^3$).

3.  These methods help maintain diversity and prevent premature convergence in GA.

## Crossover Operators

1.  Single-Point Crossover

    -   A single random point is chosen on parent chromosomes.
    -   Genes are swapped at that point, producing two offspring.

2.  Multi-Point Crossover (K-Point)

    -   Multiple crossover points are chosen.
    -   Segments are exchanged at each crossover point.
    -   Typically, two crossover points are used.

3.  Uniform Crossover

    -   A mask randomly determines which parent contributes each gene.
    -   Ensures more genetic mixing than point-based crossover.

4.  Crossover Rate

    -   Determines how often crossover happens in a population.
    -   If a random number $r$ is less than the crossover rate $p_c$, the chromosome undergoes crossover.
    -   Example:

        With crossover rate $=0.6$, individuals with $r\lt0.6$ are selected.

## Mutation Operators

1.  Properties

    -   Mutation alters a randomly selected bit in a chromosome.
    -   Mutation introduces genetic diversity and prevents premature convergence.
    -   Different mutation strategies exist, from completely random changes to heuristic-based local adjustments.

2.  Bit-Flipping

    -   The most common mutation method is bit-flipping, where a bit ($0$ or $1$) is inverted (e.g., $0$ → $1$ or $1$ → $0$).

3.  Mutation Rate

    -   $p_m$ (mutation rate) controls the likelihood of bit mutation.
    -   Expected number of mutations = $p_m\times\text{population size}\times\text{bits per chromosome}$.
    -   Each bit undergoes mutation based on a probability check:
        -   Generate a random number $r\in[0,1]$.
        -   If $r\lt p_m$, the bit is flipped.
    -   Example
        -   Given $p_m=0.1$, each bit is checked with a random number.
        -   If the number is less than $p_m$, that bit flips.
        -   The new population is then evaluated for fitness improvements.

## Genetic Algorithm Evolution

1.  Evolution Cycles

    -   GA iterates through selection, crossover, and mutation, continuously refining the population.
    -   Evolution is a cyclic process, with the goal of improving fitness over generations.
    -   Stopping criteria include:
        -   A set number of generations.
        -   Finding a solution that meets a fitness threshold.
        -   Population convergence (lack of diversity).

2.  Key Parameters

    GA performance depends on:

    -   Solution Encoding: How candidates are represented.
    -   Selection Method: Choosing individuals for reproduction.
    -   Genetic Operators: Methods for crossover and mutation.
    -   Parameters Setting:
        -   Population Size: Affects diversity and convergence speed.
        -   Crossover Rate: Probability of recombining solutions.
        -   Mutation Rate: Probability of introducing random changes.

    Trade-offs in parameter selection:

    -   Higher Crossover Rate: Enhances recombination but can disrupt good solutions.
    -   Higher Mutation Rate: Adds diversity but can turn the search into randomness.
    -   Large Population Size: Increases search space coverage but slows convergence.

3.  GA in Action

    A GA run typically shows:

    -   Best Fitness: The highest-performning individual.
    -   Average Fitness: The mean performance of the population.
    -   Over time, both values should increase as the GA optimises solutions.

4.  When to Use GAs

    -   The problem lacks an exact or efficient solution.
    -   The solution space is too large for brute-force search.
    -   There is a way to measure solution quality (fitness function).

5.  Requirements for GAs

    -   A problem model: Establishers constraints and objectives (solution space).
    -   A representation scheme: Defines how solutions are structured.
    -   A fitness function: Evaluates solution quality.

## Genetic Algorithm Applications

1.  Combinatorial Optimisation

    -   Routing & Scheduling: Logistics, transportation, machine vision, control systems.
    -   Resource Allocation: Efficient distribution of resources.
    -   Classic Problems: Travelling salesman, bin-packing, job-shop scheduling.

2.  Numerical Function Optimisation

    -   GA outperforms traditional techniques on complex, multimodal, and noisy functions.

3.  Financial Forecasting

    -   Predicting market trends using genetically optmised models.
    -   GA-derived coefficients improve accuracy in technical indicators.

4.  Design Optimisation

    -   Network Routing: Maximising throughput while minimising costs.
    -   Satellite Orbit Selection: Preventing collisions and reducing blackout periods.

5.  Machine Learning

    -   Neural Networks: Optimising weights and evolving rule sets, e.g., neuroevolution.
    -   Symbolic Learning: Evolving decision-making rules.

6.  Advanced Applications

    -   Satellite Antenna Design (NASA): GA optimises antenna structures for performance.
    -   Self-Animating Characters: AI-generated motion synthesis with neural networks.

## Theoretical Foundations

1.  Schema Theorem: Short, low-order (less complex), and highly fit schema (patterns) increase exponentially over generations.

2.  The Building Block Hypothesis: Small substructures (building blocks) that perform well are preserved and combined over generations.

3.  No Free Lunch Theorem: No single optimisation algorithm is universally best. GAs perform well on problems where:

    -   The search space is large and complex. (e.g., TSP, feature selection).
    -   The problem is complex and no gradient information available. (e,g, black-box optimisation, combinatorial optimisation).
    -   There are many local optima, and global exploration is needed.
    -   The environment is changing (adaptive optimisation).

4.  Population diversity enables adaptability.

    -   Unlike traditional optimisation methods (e.g., gradient descent), GAs maintain a diverse population of solutions.
    -   When the environment changes, some individuals may still be well-suited, preventing a complete loss of progress.
    -   This diversity allows the algorithm to adjust rather than restart from scratch.

## Genetic Algorithm Tools

1.  Excel-based GA Tools

    -   Excel Solver
    -   Evolver
    -   SolveXL

2.  Java-based GA Tools

    -   JGAP

3.  R Packages for GA

    -   Genalg
    -   GA
    -   RGP

4.  Python Packages for GA

    -   DEAP
    -   Pyevolve
    -   Pyvolution
