<h1 style="color: #ccc">Machine Reasoning</h1>

# Machine Reasoning

*Jan 14, 2025*

## Machine Reasoning Overview

1.  Human intelligence is the capability of problem-solving and decision-making using knowledge.

    -   Using existing knowledge to solve new problems
    -   Learning of new knowledge from new experiences
    -   Discovery of knowledge

    Machine intelligence is expected to do the same.

2.  AI is machine intelligence that is designed to perform tasks for problem-solving and decision-making which require intelligence if done by humans.

3.  How to evaluate machine intelligence

    -   Human intelligence has been taken as the gold standard of machine intelligence.
    -   Turing test

4.  The significance of Turing test

    -   Natural language understanding and generation
    -   Knowledge representation
    -   Self learning
    -   Automated reasoning

5.  Efficient processing of unstructured data

    -   Machine learning methods often find unstructured data, such as text documents, challenging to process due to the virtually infinite variations in training datasets. In contrast, deep learning methods can effectively handle unstructure data, making general observations without requiring manual feature extraction.
    -   Generative AI specialises in creating new content, whereas predictive AI focuses on analysing and interpreting existing data.

6.  Data is transformed into intelligence through progressive levels of processing:

    | Processing | Stage |
    |:---|:---|
    | Data Collection | Data |
    | Data Processing | Information |
    | Analysis/Cognition | Knowledge |
    | Inference/Understanding | Intelligence |

7.  Cornerstones for machine reasoning system

    -   representation (knowledge base)
    -   learning (generalisation)
    -   searching (inference for solution)
    -   reasoning (inference for solution)

    Examples

    -   Different *search* algorithms are used with different types of *representations* (e.g., trees or graphs).
    -   A machine *learning* model, such as a decision tree or a neural network, serves as a *representation* of knowledge derived from data.
    -   Adopting a model requires selecting both its *representation* and the appropriate *learning* or *searching* techniques.
    -   A machine *learning* model is expected to *generalise* effectively, enabling it to *reason* about new situations or patterns.

8.  Knowledge intensive task

    -   Analytic task (focused on analysing existing systems or solutions)
        -   Classification
        -   Prediction
        -   Diagnosis (Analysis)
        -   Assessment (Evaluation)
        -   Monitoring (?)
    -   Synthetic task (focused on creating systems or solutions that do not yet exist)
        -   Design (Configuration)
        -   Modelling
        -   Planning
        -   Scheduling
        -   Assignment
        -   Optimisation

9.  Challenges and issues with AI

    -   Criticisms of "black-box" AI
        -   Limited explainability of AI models
        -   The need for Explainable AI (XAI)
        -   The right to an explanation in automated decision-making process
    -   Data bias
        -   Bias in data annotation and collection
    -   Lack of depth in understanding
        -   AI models often extract associations rather than identifying cause-and-effect relationships.
        -   However, advances in AI demonstrate an increased depth of understanding. For example, while conversational AI like ChatGPT-4o provides holistic, intuitive answers, reasoning AI like ChatGPT-o1 offers step-by-step reasoning designed for human-level problem-solving.

## Uninformed Search

1.  Tree search

    -   Depth-first search (DFS)<br>
        Explores a single branch of the tree as deeply as possible before backtracking to explore other branches.
    -   Breadth-first search (BFS)<br>
        Explores all nodes at the current depth level before moving to the next level. Backtracking is not required, and when the target is found, the path is guaranteed to be the shortest.

2.  Tree vs Graph

    -   A tree is a hierarchical structure with a single root and no cycles, ensuring a unique path exists between any two nodes. In contrast, a graph is a more general structure that allows for cycles, multiple paths between nodes, and may not have a single root, making it suitable for representing complex relationships like networks.
    -   Every tree is a type of graph, but not every graph is a tree. Specifically, a tree is a connected undirected graph with no cycles.

3.  A knowledge graph is a model used to represent information about entities of interest within a specific domain or task (e.g., people, places, or events) and the connections between them.

    -   Nodes (vertices)<br>
        Represent the entities of interest.
    -   Links (edges) <br>
        Represent the relationships between nodes.
    -   Labels (attributes) <br>
        Provide additional information; labels on nodes indicate the entities' names, while labels on links describe the relationships between the nodes.

4.  Graph search

    -   Dijkstar's algorithm, also known as uniform-cost search (UCS) in the context of AI search algorithms, is a popular uninformed best-first search method used to find the shortest path between nodes in a weighted graph. It operates by iteratively expanding the node with the lowest cumulative cost at each step.

5.  Uniform-cost search is optimal

    -   Breadth-first search explores nodes level by level, ensuring that the shortest path is found in an unweighted graph. In contrast, uniform-cost search expands nodes with the lowest cumulative cost at each step, ensuring that the shortest path is found in a weighted graph.
    -   When all edge weights are equal, uniform-cost search behaves identically to breadth-first search.

## Informed Search

1.  Combinatorial explosion

    A small increase in the number of basic elements causes an exponential growth in the size of search space, making the problem significantly more complex.

    Examples

    -   Travelling salesman problem<br>
        Finding the shortest possible route that visits a set of cities and returns to the starting point.
    -   Enigma codes<br>
        The complexity of deciphering encoded messages due to the vast number of possible combinations.
    -   British bombe<br>
        A device used during World War II to decrypt Enigma-encoded messages, designed to handle the combinatorial explosion of possible settings.

2.  Informed search

    Informed search strategies prioritise expanding nodes based on their estimated optimality, determined by an evaluation function $f(n)$. This function typically incorporates heuristics and other relevant criteria.

    Common informed search strategies
    -   Using heuristic only: Hill Climbing, Tabu Search
    -   Using heuristic and cumulative cost: A* Search, Beam Search
    -   Using heuristic and randomness: Genetic Algorithm

3.  Heuristic function $h(n)$

    -   Estimates the cost of the shortest path (in terms of cumulative cost) from a given node $n$ to the goal node.
    -   Measures the difference between the current state or solution and the ultimate goal state.

    Examples of $h(n)$:

    -   Manhattan distance
    -   Straight-line distance

4.  Evaluation function $f(n)$

    The heuristic function $h(n)$ is a key component of the evaluation function $f(n)$. When no additional information is available other than the heuristic:

    $$
    f(n)=h(n)
    $$

5.  Greedy best-first search aims to minimise the estimated cost from current node to the goal node by expanding the node with the smallest $f(n)$ at each step. However, it does not guarantee a globally optimal solution, as it may settle for suboptimal (locally optimal) paths that might not be the shortest.

    Hill Climbing is a more restrictive local search method and can be viewed as a variant of greedy best-first search. Instead of maintaining multiple branches or backtracking, Hill Climbing focuses exclusively on expanding to the next node with the smallest $f(n)$ and prunes all other nodes at the same level. This makes it more prone to getting stuck in local maxima.

    In both greedy best-first search and Hill Climbing, the evaluation function depends solely on the heuristic function:

    $$
    f(n) = h(n)
    $$

6.  A* search is a widely known form of best-first search. It combines uniform-cost search, which expands the node with the lowest cumulative cost $g(n)$, with greedy best-first search, which expands the node with the smallest heuristic estimate $h(n)$. A* is more efficient than uniform-cost search because it focuses on promising paths based on $h(n)$, bypassing irrelevant areas if $h(n)$ is accurate. It is also more optimal than greedy best-first search, as it guarantees finding the shortest path when $h(n)$ is admissible. This is achieved by considering the cumulative cost $g(n)$, ensuring global optimality.

    The evaluation function in A* search combines two cost functions:

    $$
    f(n) = g(n) + h(n)
    $$

    -   $g(n)$: The actual cost from the start node to the current node $n$.
    -   $h(n)$: The heuristic estimate of the cost from $n$ to the goal node.

7.  Beam search is a widely used best-first search algorithm in NLP tasks, especially for sequence generation tasks in transformers. In this algorithm, nodes represent sequences of words, and edges represent transitions, such as adding a word to a sequence. The goal is to find the word sequence with the highest likelihood of being the most probable output.

    Beam search works by:

    1.  Ranking candidates using probability scores derived from the language model.
    2.  Expanding the top $\beta$ most promising candidates (where $\beta$, the beam width, determines the number of candidates to consider).
    3.  Pruning less-promising nodes at the same level after each step.

    For candidate sequence $S_n$ in current node $n$, the language model generates a list of possible next word $w_{n+1}$. For each word $w$, the probability score of the updated sequence can be calculated as:

    $$
    \text{Score}(S_n\cup\{w_{n+1}\})=\text{Score}(S_n)+\log{P(w_{n+1}\mid S_n)}
    $$

    Where:

    -   $\text{Score}(S_n)$: The cumulative log-probability of the sequence $S_n$ so far.
    -   $\log{P(w_{n+1}\mid S_n)}$: The log-probability of adding the next word $w_{n+1}$ to the sequence $S_n$.

    The formula for updating the score can be further expanded:

    $$
    \begin{aligned}
    \text{Score}( S_{n+1}) & =\text{Score}( S_{n}) +\log P( w_{n+1} \mid S_{n})\\
    & =\sum _{i=1}^{n}\log P( w_{i} |w_{1} ,w_{2} ,\cdots ,w_{i-1}) +\log P( w_{n+1} \mid w_{1} ,w_{2} ,\cdots ,w_{n})\\
    & =\sum _{i=1}^{n+1}\log P( w_{i} |w_{1} ,w_{2} ,\cdots ,w_{i-1})\\
    & =\sum _{i=1}^{n+1}\log P( w_{i} |w_{< i})
    \end{aligned}
    $$

    Here:

    -   $w_{<i}$ represents all words preceding $w_i$ in the sequence.
    -   The cumulative log-probabilities are computed incrementally for the entire sequence.

8.  Summary of different search algorithms

    | Property | BFS | UCS | GBFS | Hill Climbing | A* | Beam |
    |:---|:---|:---|:---|:---|:---|:---|
    | Expand Size | 1 node | 1 node | 1 node | 1 node | 1 node | $\beta$ nodes |
    | Weighted Edge | No | Yes | Yes/No | Yes/No | Yes | Yes |
    | Cumulative Cost | Yes | Yes | No | No | Yes | Yes |
    | Heuristic Cost | No | No | Yes | Yes | Yes | Yes |
    | Pruning | No | No | No | Yes | No | Yes |
    | Optimality | Global | Global | Local | Local | Global | Local |
    | Speed | Slow | Slow | Fast | Very Fast | Fast | Very Fast |
    | Memory | High | High | High | Very Low | High | Low |

    -   If all edge weights are equal, UCS is identical to BFS.
    -   Without pruning, Hill Climbing is identical to GBFS.
    -   A* search is a combination of UCS and GBFS, using both cumulative cost and heuristic cost.
    -   When $\beta=1$, beam search is identical to Hill Climbing .

## Constraint Satisfaction Problems

1.  Solving a problem using a search approach

    A search approach involves exploring the search space to identify a solution that is both:

    -   Valid<br>
        Meets a set of constraints or business requirements (passes the goal test).
    -   Optimal<br>
        Represents the most cost-effective solution available.

    Basic search algorithm:

    1.  Initialisation<br>
        Define the pool of potential solution candidates, forming the search space.
    2.  Exploration<br>
        Select one candidate solution for evaluation. This can be done using:
        -   Uninformed search: No prior knowledge is used.
        -   Informed search: Heuristic or domain knowledge guides the search.
    3.  Constraint checking<br>
        -   Evaluate whether the candidate satisfies all constraints.
    4.  Optimality checking<br>
        -   Determine whether the candidate is the most optimal solution found so far.
    5.  Termination<br>
        Repeat steps 2-4 until a stopping criterion is met (e.g., a valid and optimal solution is found, or all possibilities are exhausted).

    Each step in the search process also serves as an inference step.

2.  A constraint satisfaction problem (CSP) is a computational problem that requires finding values for a set of variables subject to constraints on which combinations of values are allowed.

    -   Variables<br>
        A CSP has a set of variables $X=\{x_1,x_2,\cdots,x_n\}$.
    -   Domains<br>
        Each variable $x_i$ has a domain $D_i$ of possible values it can take. The domain can be finite (e.g., $\{1,2,3\}$) or infinite (e.g., all real numbers).
    -   Constraints<br>
        A CSP also has a set of constraints. Each constraint restricts the ways that values can be assigned to variables. For example, a constraint might say $x_1\neq x_2$, or $x_2+x_3\leq10$.

    A solution to the CSP is an assignment of a value to every variable, chosen from each variable's domain, that satisfies all constraints simultaneously.

2.  CSPs appear in many real-world scenarios, such as assigning teachers to classes, creating timetables, scheduling transportation, and factory scheduling and resource allocation. Additionally, a wide range of well-known problems can be framed as CSPs, including map colouring, cryptography, the N-Queens puzzle, and various routing problems (e.g., TSP/VRP).

4.  Solving techniques

    -   Depth-first search, when applied to CSPs, assigns values to variables one at a time in a sequential manner. This approach is commonly referred to as backtracking search. As a basic uninformed algorithm for solving CSPs, it is capable of solving the N-Queens problem for $n\approx25$.

5.  Improving backtracking efficiency

    -   Variable ordering heuristics
        -   Most constrained variable (MCV)<br>
            Also known as mininum remaining value (MRV), this heuristic chooses the variable with the fewest legal values (i.e., the most constrained) first. This approach minimises potential conflicts eartly.
        -   Least constraining value (LCV)<br>
            When assigning a value, choose the one that eliminates the fewest options for other variables. This strategy maximises future flexibility.
    -   Constraint propagation
        -   Forward checking<br>
            After assigning a value to a variable, eliminate inconsistent values from the domains of unassigned variables. This prevents infeasible paths from being explored.
        -   Arc consistency (AC)<br>
            Use algorithm like AC-3 to ensure that every value in the domain of a variable satisfies the constraints relative to other variables. This further prunes the search space.
    -   Dynamic variable reordering<br>
        -   Adjust the order of variables dynamically during search, depending on how the constraints and domains evolve.
    -   Backjumping
        -   Instead of backtracking to the immediate previous variable, backtrack to the most recent variable that is responsible for the conflict. This skips irrelevant parts of the search tree.
    -   Local search
        -   Use local search techniques like min-conflicts heuristics to handle CSPs efficiently in cases where backtracking becomes computationally expensive.

6.  Fail-fast principle

    The fail-fast principle ensures that an algorithm quickly identifies and eliminates paths that cannot lead to a solution, allowing it to focus on more promising areas of the search space. Techniques such as variable ordering heuristic (e.g., MCV and LCV) and constraint propagation are employed to enhance the efficiency of backtracking by adhering to this principle.

## Google OR-Tools

1.  [Google OR-Tools](https://developers.google.com/optimization) is an open-source software suite for combinatorial optimisation. It allows users to model and solve complex optimisation problems in the field of Operational Research, including vehicle routing, flows, integer and linear programming, and constraint programming.

2.  OR-Tools includes solvers for the following:

    -   Vehicle routing<br>
        Identifies optimal vehicle routes while considering specific constraints.
    -   Integer and linear programming<br>
        Solves optimisation problems by maximising or minimising a linear objective function subject to linear inequalities (e.g., assigning tasksk to workers).
    -   Constraint programming<br>
        Provides methods to find feasible solutions for problems defined by constraints.
    -   Graph Algorithms<br>
        Offers tools for solving graph-related problems, such as finding shortest paths, minimum-cost flows, maximum flows, and linear sum assignments.

3.  Installing OR-Tools

    ```bash
    python -m pip install ortools
    ```

4.  N-Queens problem

    -   Problem statement<br>
        How can $N$ queens be placed on an $N\times N$ chessboard such that no two queens threaten each other?

5.  Solving the N-Queens problem

    -   Constraint propagation<br>
        At each step, impose constraints to narrow down possible placements. For example, when a queen is placed on the board, restrict other queens from being placed on the same row, column, or diagonals as the current queen.
    -   Backtracking<br>
        If the solver reaches a point when no valid placement is possible for the next queen, it backtracks by adjusting the position of a previously placed queen. For example, the solver may move a queen to a different square in its current column to explore new possibilities.

6.  Solving the N-Queens using CP Solver

    ```python
    from ortools.constraint_solver import pywrapcp

    def main(board_size):
        # Creates the solver
        solver = pywrapcp.Solver("n-queens")

        # Creates variables
        queens = [solver.IntVar(0, board_size - 1, f"x{i}") for i in range(board_size)]

        # Creates constraints
        solver.Add(solver.AllDifferent(queens))
        solver.Add(solver.AllDifferent([queens[i] + i for i in range(board_size)]))
        solver.Add(solver.AllDifferent([queens[i] - i for i in range(board_size)]))

        # Add decision builder
        db = solver.Phase(queens, solver.CHOOSE_FIRST_BOUND, solver.ASSIGN_MIN_VALUE)
    ```

## Other Graph Algorithms

1.  Other graph algorithms

    -   Pathfinding
    -   Centrality
    -   Community detection

2.  Spanning tree of a graph (slide 70)
