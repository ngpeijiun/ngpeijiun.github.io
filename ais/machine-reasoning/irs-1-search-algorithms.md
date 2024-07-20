<h1 style="color: #ccc">Machine Reasoning</h1>

# Search Algorithms

*Feb 17, 2025*

## Machine Reasoning Overview

1.  Human Intelligence

    Intelligence measures a human or AI's ability to achieve goals (*Legg & Hutter, 2007*).

    -   **Problem-solving using knowledge**:
        -   **Analogy & Metaphor** → Applying known concepts to new situations.
        -   **Intuition & Experience** → Drawing on expertise to make rapid judgements.
        -   **Deliberate Reasoning** → Step-by-step logical deduction to discover new knowledge.
    -   Machine intelligence follows similar principles: **search**, **representation**, **reasoning**, and **learning**.

2.  Artificial Intelligence (AI)

    AI enables **problem-solving** and **decision-making** through computational methods.

3.  Evaluating Machine Intelligence

    -   **Turing Test** (*Alan Turing, 1950*): A machine is considered intelligent if a judge cannot distinguish it from a human in conversation.
    -   AI can **exceed human intelligence** in specific domains.

4.  Processing Unstructured Data

    -   **Traditional ML** struggles with text, images, and audio.
    -   **Deep Learning & Generative AI** (LLMs, GANs) extract meaningful representations.
    -   **Multimodal AI** integrates multiple data types (e.g., text + images).

5.  From Raw Data to Intelligence

    -   **Data Collection** → Gather raw data.
    -   **Data Processing** → Clean and structure data.
    -   **Information Extraction** → Identify patterns.
    -   **Knowledge Formation** → Organise data into knowledge bases.
    -   **Inference & Reasoning** → Draw conclusions from structured knowledge.

6.  Cornerstones of Machine Reasoning

    -   **Search & Optimisation** → Exploring paths to solutions.
    -   **Knowledge Representation** → Structured storage (graphs, ontologies, rules).
    -   **Inference & Reasoning** → Deduction, abduction, analogy.
    -   **Learning & Generalisation** → Extracting patterns and making prediction.

7.  Knowledge-Intensive Tasks

    -   **Analytic Tasks**
        -   **Regression** → Predict outcomes.
        -   **Classification** → Categorise data.
        -   **Diagnosis** → Identify cause.
        -   **Monitoring** → Detect anomalies.
    -   **Synthetic Tasks**
        -   **Design** → Structure components.
        -   **Planning** → Sequence actions.
        -   **Scheduling** → Allocate resources.
        -   **Optimisation** → Find optimal solutions.

8.  AI Challenges

    -   **Data Bias** → AI models inherit biases from training data.
    -   **Lack of Explainability** → Deep learning models are "black boxes".
        -   **XAI (Explainable AI)** improves transparency.
    -   **Shallow Understanding** → AI often relies on statistical patterns instead of causal reasoning.
        -   **Conversational AI (e.g., ChatGPT-4o)** → Shows improved understanding through intuitive and context-aware responses.
        -   **Reasoning AI (e.g., ChatGPT-o1)** → Shows improved understanding through logical step-by-step reasoning.

## Uninformed Search

1.  **Tree Search**

    -   **Depth-First Search (DFS)**

        Explores a single branch of the tree as deeply as possible before backtracking.

    -   **Breadth-First Search (BFS)**

        Explores all nodes at the current depth level before moving deeper. It guarantees finding the **shortest path** when the target is reached.

2.  Tree vs. Graph

    -   A **tree** is a hierarchical structure with a single root and no cycles, ensuring unique paths between nodes. In contrast, a **graph** is more general, allowing cycles and multiple paths, making it suitable for complex networks.
    -   Every tree is a graph, but not every graph is a tree. Specifically, a tree is a connected undirected graph with no cycles.

3.  **Graph Search**

    -   **Dijkstra's algorithm**, also known as **Uniform-Cost Search (UCS)**, in an **uninformed search** method used to find the **shortest path** in a **weighted graph**. It expands the node with the **lowest cumulative cost** at each step.

4.  Optimality of Uniform-Cost Search

    -   **Breadth-First Search (BFS)** is **optimal** for **unweighted graphs** as it expands nodes level by level, ensuring the shortest path.
    -   **Uniform-Cost Search (UCS)** is **optimal** for **weighted graphs** as it expands the node with the **lowest cumulative cost** at each step.
    -   If **all edge weights are equal**, **UCS behaves identically to BFS**, as both expand nodes in the same order.

## Informed Search

1.  **Combinatorial Explosion**

    A small increase in elements causes an **exponential growth** in the search space, making problems significantly harder.

    Examples:

    -   Travelling Salesman Problem → Route optimisation grows factorially with more locations.
    -   Enigma Codes → Decryption complexity due to vast possible settings.
    -   British Bombe → Used in WWII to break Enigma encryption.

2.  **Informed Search**

    Informed search strategies expand nodes based on **estimated optimality** using an **evaluation function** $f(n)$, typically incorporating **heuristics**.

    Common informed search strategies:

    -   Using **heuristic only**: Greedy Best-First Search (GBFS), Hill Climbing, Tabu Search
    -   Using **heuristic and cumulative cost**: A* Search, Beam Search
    -   Using **heuristic and randomness**: Genetic Algorithm

3.  **Heuristic Function** $h(n)$

    -   Estimates the **shortest path cost** from **node** $n$ to the **goal node**.
    -   Examples:
        -   **Manhattan Distance**
        -   **Straight-line Distance**

4.  **Evaluation Function** $f(n)$

    A key component of the evaluation function $f(n)$ is the heuristic function $h(n)$. When no additional information is available other than the heuristic:

    $$
    f(n)=h(n)
    $$

5.  **Greedy Best-First Search (GBFS)** minimises the estimated cost from the current node to the goal node by expanding the node with the smallest $f(n)$ at each step. While it tracks expanded nodes in a **search tree**, GBFS may settle for locally optimal paths, missing the global optimum.

    **Hill Climbing** is a more restrictive local search variant of GBFS. Unlike GBFS, it does not maintain a search tree or track expanded nodes. Instead, it moves to the next node with the smallest $f(n)$, discarding other options at the same level.

    In both GBFS and Hill Climbing, the evaluation function relies solely on the heuristic function:

    $$
    f(n) = h(n)
    $$

6.  Improving Local Search

    Local search methods, like Hill Climbing, move to better neighbouring nodes but lack mechanisms to avoid revisiting solutions. While Hill Climbing avoids bad moves by "climbing uphill", it can still get stuck in **local maxima, plateaus, or ridges**, and may **cycle through suboptimal solutions**.

    **Tabu Search**

    -   Uses a **Tabu List** to temporarily forbid moves that lead back to previous solutions.
    -   Prevents cycling and local optima traps.
    -   Tabu restrictions are time-based, meaning moves are feasible again after a set certain number of iterations.

    **Simulated Annealing**

    -   Combines Hill Climbing with a **random walk**.
    -   **Accepts worse moves** with a probability $P$, determined by a temperature parameter $T$.
    -   Early in the search, high $T$ allows "downhill" moves to escape local optima.
    -   Over time, as $T$ decreases, the algorithm focuses more on convergence.

7.  **A\* search** is a well-known **best-first search** algorithm that combines **uniform-cost search (UCS)**, which expands the node with the **lowest cumulative cost** $g(n)$, and **greedy best-first search (GBFS)**, which expands the node with the **lowest heuristic estimate** $h(n)$. A* is **more efficient** than UCS as it prioritises promising paths based on $h(n)$. It also guarantees finding the shortest path guided by $g(n)$ if $h(n)$ is **admissible**, ensuring **global optimality**.

    The evaluation function in A* search is:

    $$
    f(n)=g(n)+h(n)
    $$

    -   $g(n)$: The **actual cost** from the **start node** to node $n$.
    -   $h(n)$: The **estimated cost** from node $n$ to the **goal node**.

8.  Beam search is a widely used best-first search algorithm in NLP tasks, especially for sequence generation tasks in transformers. In this algorithm, nodes represent sequences of words, and edges represent transitions, such as adding a word to a sequence. The goal is to find the word sequence with the highest likelihood of being the most probable output.

    Beam search works by:

    1.  Ranking candidates using probability scores derived from the language model.
    2.  Expanding the top $\beta$ most promising candidates (where $\beta$, the beam width, determines the number of candidates to consider).
    3.  Pruning less-promising nodes at the same level after each step.

    For a candidate sequence $S_n$ in a given node $n$, the language model generates a list of possible next word. For each word, the probability score of the updated sequence can be calculated as:

    $$
    \text{Score}(S_n\cup\{w_{n+1}\})=\text{Score}(S_n)+\log{P(w_{n+1}\mid S_n)}
    $$

    Where:

    -   $\text{Score}(S_n)$: The cumulative log-probability of the sequence $S_n$ so far.
    -   $\log{P(w_{n+1}\mid S_n)}$: The log-probability of adding the next word $w_{n+1}$ to the sequence $S_n$.

    The score update formula can be rewritten in the following form:

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

9.  Summary of different search algorithms

    | Property | BFS | UCS | GBFS | Hill Climbing | A* | Beam |
    |:---|:---|:---|:---|:---|:---|:---|
    | Expand Size | 1 node | 1 node | 1 node | 1 node | 1 node | $\beta$ nodes |
    | Edge Weight | No | Yes | Yes/No | Yes/No | Yes | Yes |
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
        -   Evaluate whether the candidate satisfies all the constraints.
    4.  Optimality checking<br>
        -   Determine whether the candidate is the most optimal solution found so far.
    5.  Termination<br>
        Repeat steps 2-4 until a stopping criterion is met (e.g., a valid and optimal solution is found, or all possibilities are exhausted).

    Each search step in the process also serves as an inference step.

2.  A constraint satisfaction problem (CSP) is a computational problem that requires finding values for a set of variables subject to constraints on which combinations of values are allowed.

    -   Variables<br>
        A CSP has a set of variables $X=\{x_1,x_2,\cdots,x_n\}$.
    -   Domains<br>
        Each variable $x_i$ has a domain $D_i$ of possible values it can take. The domain can be finite (e.g., $\{1,2,3\}$) or infinite (e.g., all real numbers).
    -   Constraints<br>
        A CSP also has a set of constraints. Each constraint restricts the ways that the values can be assigned to the variables. For example, a constraint might say $x_1\neq x_2$, or $x_2+x_3\leq10$.

    A solution to the CSP is an assignment of a value to every variable, chosen from each variable's domain, that satisfies all the constraints simultaneously.

3.  CSPs appear in many real-world scenarios, such as assigning teachers to classes, creating timetables, scheduling transportation, and factory scheduling and resource allocation. Additionally, a wide range of well-known problems can be framed as CSPs, including map colouring, cryptography, the N-Queens problem, and various routing problems (e.g., TSP/VRP).

4.  Solving techniques

    -   DFS, when applied to CSPs, assigns values to variables one at a time in a sequential manner. This approach is commonly referred to as backtracking search. As a basic uninformed search algorithm for solving CSPs, it is capable of solving the N-Queens problem for $n\approx25$.

5.  Improving backtracking efficiency

    -   Variable and value ordering heuristics
        -   Most constrained variable (MCV)<br>
            Also known as mininum remaining value (MRV), this is a variable ordering heuristic that selects the variable with the fewest legal values (i.e., the most constrained) first. This approach helps reduce potential conflicts eartly by prioritising the most challenging variables.
        -   Least constraining value (LCV)<br>
            This is a value ordering heuristic used when assigning a value to a selected variable. It chooses the value that eliminates the fewest options for other variables, thereby maximising flexibility for future assignments.
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
    pip install ortools
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

## More Graph Search Algorithms

1.  More Graph Search Algorithms

    -   **Pathfinding**
        -   Focuses on finding the shortest route between nodes.
        -   Essential for navigation, logistics, and network optimisation.
        -   Common algorithms: Dijkstra's algorithm, A* search, Bellman-Ford.
    -   **Centrality**
        -   Identifies the most "important" nodes in graph.
        -   Used in social network analysis, internet ranking (PageRank), and epidemic modelling.
        -   Key measures: Degree, Betweenness, Closeness, Eigenvector centrality.
    -   **Community Detection**
        -   Groups nodes into densely connected subgraphs.
        -   Useful in social networks, fraud detection, and biological network analysis.
        -   Common methods: Modularity Maximisation, Louvain algorithm, Spectral clustering.

2.  Reference books
    -   Graph Algorithms: Practical Examples in Apache Spark and Neo4j
