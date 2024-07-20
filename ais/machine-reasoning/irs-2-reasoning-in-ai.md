<h1 style="color: #ccc">Machine Reasoning</h1>

# Reasoning in Artificial Intelligence

*Jan 27, 2025*

## Knowledge-Based Reasoning

1.  Reasoning, in a broad sense, refers to the cognitive process humans use to:

    -   Draw conclusions, solve problems, or make decisions based on a body of knowledge known as the knowledge base.
    -   Generate new knowledge by combining different pieces of information from the knowledge base.

2.  There are several key reasoning methods:

    -   Deductive reasoning
    -   Abductive reasoning
    -   Inductive reasoning
    -   Analogical reasoning

3.  These reasoning methods can be supported by various inference techniques:

    -   Forward chaining
    -   Backward chaining
    -   A combination of both forward and backward chaining

4.  Reasoning focuses on the cognitive (thought) process of drawing conclusions. It emphasises logic, principles, and evidence, addressing the "what" and "why".

5.  Inference focuses on the mechanisms and algorithms used to draw conclusions, explaining the "how".

6.  Deduction

    Deduction allows us to infer a conclusion based on a rule and a known fact.

    Given $A$ and $A\rightarrow B$, we can conclude $B$.

    | Type | Expression |
    |:---|:---|
    | Rule | $A\rightarrow B$ |
    | Fact | $A$ |
    | Conclusion | $B$ |

    Deduction is widely applied in fields such as Discrete Mathematics, Mathematical Logic, and Formal Logic.

7.  Abduction

    Abduction is the process of reasoning backwards to identify a possible cause or explanation.

    Given $B$ and $A\rightarrow B$, we can hypothesise $A$.

    | Type | Expression |
    |:---|:---|
    | Rule | $A\rightarrow B$ |
    | Fact | $B$ |
    | Hypothesis | $A$ |

    Abduction is commonly used in probabilistic reasoning and Bayesian networks, as well as in areas such as diagnostics, hypothesis generation, and problem-solving, where the goal is to identify the most likely explanation for the observed facts.

8.  Inductive generalisation

    Inductive generalisation refers to reasoning from specific cases to a general conclusion. It involves observations or premises about individual elements and extends them to the entire set.

    Given $X=\{a,b,c\}$ and $a\rightarrow P,b\rightarrow P,c\rightarrow P$, we can conclude $X\rightarrow P$.

    | Type | Expression |
    |:---|:---|
    | Rule | $a\rightarrow P,b\rightarrow P,c\rightarrow P$ |
    | Fact | $X=\{a,b,c\}$ |
    | Conclusion | $X\rightarrow P$ |

    Inductive generalisation is heuristic in nature, meaning its conclusions are based on observed patterns and are not guaranteed to be certain. It it commonly applied in areas such as predicate logic, propositional calculus, neural networks, decision trees, and more.

9.  Analogy

    Analogy involves reasoning based on similarities between two systems or situations. By mapping knowledge from a familiar domain, $A$, to a less familiar domain, $B$, conclusions about $B$ can be inferred.

    Given two domains $A$ and $B$, with identifiable similarities, properties in $A$ are used to infer similar properties in $B$.

    | Type | Expression |
    |:---|:---|
    | Known Domain | $A$: A well-understood system |
    | New Domain | $B$: A less familiar system |
    | Conclusion | Properties of $B$ are inferred based on $A$ |

    Analogy is commonly applied in Similarity-Based Reasoning, Case-Based Reasoning, and k-Nearest Neighbours, such as in customer profiling for recommendation.

10. Reasoning is traditionally modelled through formal proofs or argument sketches.

    **Example.**

    >   To prove that the sum of two even numbers is even.

    **Formal Proof.**

    A even number can be written as $2k$, where $k$ is an integer.

    Let $a=2k_1$ and $b=2k_2$.

    Their sum is $a+b=2k_1+2k_2=2(k_1+k_2)$, which is divisible by $2$.

    Therefore, the sum is even.

    <p style='text-align: right;'>■</p>

    **Argument Sketch.**

    The sum of two even numbers is even because each even number can be written as a multiple of 2, and adding two multiples of 2 always gives another multiple of 2.

11. Reasoning with formal proof

    -   Premise<br>
        A statement or proposition that provides evidence or support for a conclusion.
    -   Conclusion<br>
        The statement or proposition that follows logically from the premises.

    Premises lead to a conclusion through reasoning:

    -   The process starts by accepting specific premises. From these premises, intermediate conclusions are derived using inference rules, such as *modus ponens*.
    -   The reasoning concludes by accepting new conclusions, which are inferred either directly or indirectly from the initial premises.

    Example

    -   Premise 1: All humans are mortal.
    -   Premise 2: Socrates is a human.
    -   Intermediate Conclusion: Socrates belongs to the category of mortal beings.
    -   Final Conclusion: Socrates is mortal.

12. Reasoning goes beyond proof

    Reasoning is not confined to formal proofs. It involves drawing new ideas or conclusions based on initial beliefs, which may need to be abandoned when they no longer hold true. More broadly, reasoning requires the regular updating and revision of prior opinions in response to new information.

13. The need for inductive reasoning

    Traditionally, reasoning has been viewed primarily through the lens of deductive reasoning. Deductive reasoning involves applying universal principles to arrive at specific conclusions. For example:

    | Type | Deductive Reasoning |
    |:---|:---|
    | Knowledge | All apples have seeds |
    | From universal to individual | The next apple will have seeds |

    While deductive reasoning is essential, it has been argued that reasoning extends beyond deduction. Inductive reasoning plays a complementary role by developing general rules based on specific observations. This approach operates differently:

    | Type | Inductive Reasoning |
    |:---|:---|
    | Data | Many apples have been found to have seeds |
    | From individual to universal | The next apple will have seeds |

    Together, deductive and inductive reasoning provide a more comprehensive understanding of how we draw conclusions and form knowledge.

14. Truth in reasoning

    -   Deductive reasoning<br>
        Relies on *modus ponens* and ensures logical certainty. If the premises are true and the reasoning process is valid, the conclusion is guaranteed to be true.
    -   Abductive reasoning<br>
        Seeks the most plausible hypothesis to explain an observed fact. While the hypothesis may be reasonable, its truth is not guaranteed, as other potential explanations may exist.
    -   Other methods<br>
        Inductive and analogical reasoning do not guarantee true conclusions, even when the premises are true. Nevertheless, these methods are invaluable in knowledge-based system (KBS), particularly in contexts where deductive rules are unavailable or insufficient.

## Rule-Based Reasoning

1.  Rules are the natural representation of human knowledge used in decision-making.

2.  A rule has two components:

    -   The *if* part<br>
        Known as the antecedent or condition
    -   The *then* part<br>
        Known as the consequent or action

3.  A rule-based reasoning system comprises the following components:

    -   Knowledge base (long-term memory)<br>
        A repository that stores domain-specific rules.
    -   Working memory (short-term memory)<br>
        A dynamic storage area that holds the facts and information relevant to the current reasoning process.
    -   Inference engine<br>
        A component that performs pattern matching and executes the rules.

4.  The inference engine compares the conditions of each rule in the knowledge base (KB) with the available facts.

    -   If a rule's condition matches a fact, the rule is fired, and its corresponding action is executed.
    -   The action may update the fact set by modifying existing facts or adding new ones.
    -   These updates can activate other rules whose conditions are now satisfied, creating inference chains where new rules are fired sequentially.

5.  Match phase

    -   Pattern matching<br>
        In this step, the inference engine compares the conditions of rules (antecedents) with the facts in the working memory. If a condition matches, the corresponding rule becomes eligible for execution.
    -   Approximate matching (optional in fuzzy or similar systems)<br>
        In systems utilising fuzzy logic or probabilistic reasoning, rules can be triggered based on a degree of similarity or likelihood rather than requiring exact matching.

6.  Fire phase

    -   Conflict set<br>
        When multiple rules are activated based on the facts in working memory, they form a conflict set. This occurs when the conditions of multiple rules match the same set of facts, but the rules lead to different conclusions or actions.
    -   Conflict resolution<br>
        If multiple rules are eligible to fire simultaneously (i.e., their conditions are satisfied), the system uses a conflict resolution strategy to determine which rule to execute.

    Common conflict resolution order:

    -   Highest priority (salience of rules)<br>
        Rules with a higher assigned priority are executed first.
    -   Most specific (specificity of rules)<br>
        Rules with the longest and most detailed matching conditions are favoured.
    -   Most recent data (recency of facts)<br>
        Rules associated with the most recently updated facts in working memory are prioritised.

    Conflict resolution is essential for detecting KB completeness, ensuring knowledge verification, or identifying potential conflicts (e.g., conflicting rules in the HDB policy).

7.  Firing order

    The order in which rules are fired depends on the order of facts in the working memory, not the order of rules themselves. By default, many systems use a *last-in*, *first-out* (LIFO) approach, where the most recently added facts in working memory influence rule firing.

8. Rules can be structured as a search tree:

    -   Rule-based reasoning involves navigating a knowledge base of rules to draw conclusions or determine actions.
    -   The process of exploring this search space is known as chaining, which serves as the inference step.

9.  Inference techniques

    -   Forward chaining (data-driven reasoning)
        -   Starts with known data and applies business rules to infer new information.
        -   Can result in unnecessary processing if the inferred data is not directly relevant to the goal.
    -   Backward chaining (goal-driven reasoning)
        -   Starts with a specific goal and works backwards to identify the required steps or data.
        -   Particularly effective for problem-solving and investigative tasks.

    Many KBS, whether rule-based or case-based, employee a combination of forward and backward chaining techniques.

10. Generation and Test is a foundational inference paradigm in classical AI, involving the following steps:

    -   Generation<br>
        Create a potential solution, often using forward chaining.
    -   Test<br>
        Evaluate the solution's validity against the requirements, typically using backward chaining. These steps are generally executed in tandem.

    When multiple potential solutions exist, the focus shifts to gathering evidence to efficiently narrow down the solution set.

    This paradigm was utilised by early expert systems like DENDRAL (for chemical analysis) and MYCIN (for medical diagnosis).

11. Summary of different intelligent systems:

    | Intelligent Systems | Reasoning Methods |
    |:---|:---|
    | Rule-Based Systems | Deductive Reasoning |
    | Case-Based Systems | Analogical Reasoning |
    | Diagnostics Systems | Abductive Reasoning |

## Formal Logic

1.  Propositional logic is a branch of formal logic that deals on propositions, which are declarative statements that can either be true or false. Examples:

    -   $p$: "It is raining."
    -   $q$: "2 + 2 = 4"

3.  Propositional logic expressions are formed using propositions and logical connectives. The truth value of these expressions can be evaluated using truth tables, which determine the truth value of a compound proposition based on the truth values of its components.

4.  Logical connectives are operators that combine or modify propositions to form compound propositions.

    -   AND ($\land$): True if both propositions are true. (conjunction)
        | $A$ | $B$ | $A\land B$ |
        |:---:|:---:|:---:|
        |T|T|T|
        |T|F|F|
        |F|T|F|
        |F|F|F|
    -   OR ($\lor$): True if at least one proposition is true. (disjunction)
        | $A$ | $B$ | $A\lor B$ |
        |:---:|:---:|:---:|
        |T|T|T|
        |T|F|T|
        |F|T|T|
        |F|F|F|
    -   NOT ($\neg$): Negates the truth value of a proposition. (negation)
        | $A$ | $\neg A$ |
        |:---:|:---:|
        |T|F|
        |F|T|
    -   IMPLIES ($\rightarrow$): True unless the first proposition is true and the second is false. (implication/if-then)
        | $A$ | $B$ | $A\rightarrow B$ |
        |:---:|:---:|:---:|
        |T|T|T|
        |T|F|F|
        |F|T|T|
        |F|F|T|
    -   EQUIVALENT ($\leftrightarrow$): True if both propositions have the same truth value. (biconditional/if and only if)
        | $A$ | $B$ | $A\leftrightarrow B$ |
        |:---:|:---:|:---:|
        |T|T|T|
        |T|F|F|
        |F|T|F|
        |F|F|T|

4.  Examples of how logical connectives can represent real-world scenarios:

    | Expression | Meaning |
    |:---|:---|
    | $p$ | Sam has the flu. |
    | $q$ | Sam has a cough. |
    | $p\land q$ | Sam has the flu AND Sam has a cough. |
    | $p\land\neg q$ | Sam has the flu AND Sam does not have no cough. |
    | $p\rightarrow q$ | IF Sam has the flu, THEN Sam has a cough. |

5.  Logical equivalence

    Logical equivalence refers to two expressions being true under the same conditions, meaning they always have the same truth value. It is denoted as $\alpha \equiv \beta$, which holds if and only if $\alpha \models \beta$ and $\beta \models \alpha$ (i.e., $\alpha$ logically entails $\beta$, and vice versa).

    | Type | Expression |
    |:---|:---|
    | Commutativity of $\land$ | $(\alpha\land\beta)\equiv(\beta\land\alpha)$ |
    | Commutativity of $\lor$ | $(\alpha\lor\beta)\equiv(\beta\lor\alpha)$ |
    | Associativity of $\land$ | $\left((\alpha\land\beta)\land\gamma\right)\equiv\left(\alpha\land(\beta\land\gamma)\right)$ |
    | Associativity of $\lor$ | $\left((\alpha\lor\beta)\lor\gamma\right)\equiv\left(\alpha\lor(\beta\lor\gamma)\right)$ |
    | Double-Negation Elimination | $\neg(\neg\alpha)$ |
    | Contraposition | $(\alpha\Rightarrow\beta)\equiv(\neg\beta\Rightarrow\neg\alpha)$ |
    | Implication Elimination | $(\alpha\Rightarrow\beta)\equiv(\neg\alpha\lor\beta)$ |
    | Biconditional Elimination | $(\alpha\Leftrightarrow\beta)\equiv\left((\alpha\Rightarrow\beta)\land(\beta\Rightarrow\alpha)\right)$ |
    | de Morgan | $\neg(\alpha\land\beta)\equiv(\neg\alpha\lor\neg\beta)$ |
    | de Morgan | $\neg(\alpha\lor\beta)\equiv(\neg\alpha\land\neg\beta)$ |
    | Distributivity of $\land$ over $\lor$ | $\left(\alpha\land(\beta\lor\gamma)\right)\equiv\left((\alpha\land\beta)\lor(\alpha\land\gamma)\right)$ |
    | Distributivity of $\lor$ over $\land$ | $\left(\alpha\lor(\beta\land\gamma)\right)\equiv\left((\alpha\lor\beta)\land(\alpha\lor\gamma)\right)$ |

6.  First-order logic (FOL), also known as predicate logic or predicate calculus, is a formal system for expressing statements about objects, their properties, and their relationships. It extends propositional logic by introducing objects, predicates, and quantifiers, making it significantly more expressive.

    -   Terms: Represent objects in the domain of discourse.
        -   Constants: Specific objects (e.g., $a$, $b$, $\text{John}$).
        -   Variables: Represent general object (e.g., $x$, $y$, $z$).
        -   Functions: Map objects to other objects (e.g., $\text{Father}(\text{John})$ represents John's father).
    -   Predicates: Describe properties of objects or relationships between objects. Predicates always return a truth value (true or false).<br>
        Example: $\text{Likes}(\text{John},\text{IceCream})$ means "John likes ice cream".
    -   Quantifiers: Specify the scope of variables in a statement.
        -   Universal quantifier ($\forall$): "For all"<br>
            Example: $\forall x\text{Loves}(x,\text{Pizza})$ means "Everyone loves pizza".
        -   Existential quantifier ($\exists$): "There exists"<br>
            Example: $\exists x\text{Loves}(x,\text{Pizza})$ means "Someone loves pizza".

7.  Sentences

    -   Atomic sentence: Represent a basic fact or assertion without any logical connectives<br>
        Example: $\text{IsFriend}(\text{Jessie},\text{FatherOf}(\text{DiDi}))$ means "Jessie is friend to DiDi's father".
    -   Complex sentence: Formed by combining atomic sentences using logical connectives<br>
        Example: $\text{IsClassmate}(\text{Jessie},\text{Sam})\land\text{TalksTo}(\text{Jessie},\text{Sam})\rightarrow\text{IsFriend}(\text{Jessie},\text{Sam})$<br>
        This means, "If Jessie is a classmate of Sam and Jessie talks to Sam, then Jessie is a friend of Sam".

7.  Propositionalisation

    Propositionalisation is the process of transforming predicate logic statements into propositional forms to establish truth value or to facilitate reasoning. In this process, predicate expressions are either instantiated (assigned specific values) or generalised using quantifiers.

    -   Assign specific value to predicates<br>
        Example: "If Sam studies at NUS, Sam is smart."

        This can be expressed in predicate logic as:

        $$
        \text{StudyAt}(x,\text{NUS})\rightarrow\text{Smart}(x)
        $$

        After substituting $x=\text{Sam}$:

        $$
        \text{StudyAt}(\text{Sam},\text{NUS})\rightarrow\text{Smart}(\text{Sam})
        $$

    -   Universal quantifier<br>
        Example: "Everyone studying at NUS is smart."
        $$
        \forall x\text{StudyAt}(x,\text{NUS})\rightarrow\text{Smart}(x)
        $$
    -   Existential quantifier<br>
        Example: "Someone studying at NUS is smart."
        $$
        \exists x\text{StudyAt}(x,\text{NUS})\land\text{Smart}(x)
        $$

## Knowledge Representation

1.  Forms of knowledge representation

    -   Natural language<br>
        Representing knowledge through text or spoken words, as humans commonly communicate.
    -   Mathematical formulas<br>
        Using equations or mathematical expressions to represent knowledge, particularly in scientific and engineering domains.
    -   Formal logic<br>
        Utilising systems like propositional logic or predicate logic to represent knowledge with precise syntax and semantics.
    -   Semantic networks<br>
        Graph-based representations where nodes represent concepts, and edges define relationships between concepts, often used to model associative knowledge.
    -   Frames<br>
        Structured data models with predefined "slots" (attributes) and "filler" (values) for representing entities and their properties.
    -   Ontology<br>
        A hierarcical representation of domain-specific knowledge, including concepts, relationships, and constraints, often used in AI and semantic system.
    -   Databases<br>
        Organised storage of data with a schema to represent structured information for querying and retrieval.
    -   Semantic web<br>
        Representing knowledge using standards such as RDF (Resource Description Framework) and OWL (Web Ontology Language) to enable interoperability and reasoning over web data.
    -   Knowledge graphs<br>
        Networks of interconnected entities (nodes) and relationship (edges) that enable semantic querying and inference.

2.  Knowledge representation in machines

    -   The selection of a representation method (e.g., data structure) is inherently linked to the inference mechanism (e.g., algorithm) to ensure efficient reasoning and computation.

3.  Semantic network

    A semantic network is a form of knowledge representation that is particularly useful for certain types of logical reasoning. It provides a convenient graphical notation to express relationships between concepts or entities. A semantic network is structured as a graph, where:

    -   Nodes represent concepts or entities.
    -   Edges (links) represent relationships between those concepts. Common types of relationships include:
        -   Is-a (categorisation)<br>
            Example: "A Cat is-a Mammal".
        -   Part-of<br>
            Example: "An Engine is part-of a Car".
        -   Property<br>
            Example: "A Bird has the property Wings".
        -   Causal<br>
            Example: "Rain causes Flood".

    Semantic networks are widely used in fields such as artificial intelligence, natural language processing, and cognitive science. They model how information is structured, enabling both humans and machines to better understand and reason about relationships between concepts.

4.  Frame

    Frames are a knowledge representation structure that organises information about objects, concepts, or situations in terms of attributes (slots) and their values (fillers). They are similar to semantic networks but provide a more structured approach, often incorporating default values for missing information.

    Structure:

    -   Slots<br>
        Represent attributes or properties of the object or concept (e.g., colour, size, location).
    -   Fillers<br>
        Contain specific values for the slots (e.g., "red" as the value for the colour attribute).
    -   Defaults<br>
        Provide default values for slots when specific information is not available.

    Example:

    A frame for a "cat":

    ```yml
    Frame: Cat
    - Species: Felis catus
    - Colour: [Default: black]
    - Sound: [Default: meow]
    - Behaviour: [Default: playful]
    ```

5.  Domain ontology, object-oriented classes and database schema

    Domain ontology, object-oriented classes, and database schema are interrelated concepts used to model, represent, and manage knowledge within a domain. Domain ontology defines the conceptual structure and relationships within the domain, serving as a theoretical framework. Object-oriented classes provide a computational representation of these concepts, encapsulating attributes and behaviours in a programmatic context. The database schema translates this representation into a persistent data structure, organising and storing the data based on the conceptual framework defined by the ontology.

6.  Ontology for distributed AI

    An ontology for distributed AI is a formal and structured framework that defines the concepts, relationships, and properties relevant to distributed AI systems. It acts as a shared knowledge base, enabling effective communication, collaboration, and reasoning among distributed components or agents within the system. In large-scale knowledge representation, a general-purpose ontology is essential for organising and integrating knowledge across multiple specific domains, ensuring consistency and interoperability.

7.  Knowledge graph

    A knowledge graph is a structured representation of information that models entities, their attributes, and relationships within a specific domain. It captures semantic meaning, enabling enhanced understanding, reasoning, and decision-making. Knowledge graphs are widely used in search engines, recommendation systems, natural language processing, and artificial intelligence.

    -   Entities<br>
        Entities are the nodes in the graph, representing real-world objects, concepts, or abstract ideas. For example, "Apple Inc.", "Steve Job", and "iPhone" are entities.
    -   Relationships<br>
        Relationships are the edges connecting entities, representing associations or interactions. These are typically described as predicates, such as "founded by", "manufactures", "developed".
    -   Attributes<br>
        Both entities and relationships can have attributes or properties that provide additional details. For example, the entity "Apple Inc." might have attributes such as "founded in 1976" or "headquartered in Cupertino".
    -   Context and semantics<br>
        Knowledge graphs often incorporate ontologies or schemas to ensure semantic consistency and domain specificity. These structures improve interoperability and enable advanced reasoning capabilities.
    -   Scalability<br>
        Knowledge graphs are designed to evolve, allowing new entities, relationships, and attributes to be added seamlessly without disrupting the existing structure or semantics.

8.  Enhancing knowledge graph for reasoning

    Transforming a knowledge graph into a rule-based system involves combining foundational models like RDF with reasoning frameworks such as OWL and SWRL. This integration enables logical inference, semantic enrichment, and rule-based decision-making.

    **RDF: The Backbone of Knowledge Graphs**

    The Resource Description Framework (RDF) provides the foundational structure for knowledge graphs. Information is represented as triples (subject → predicate → object), enabling flexible, interoperable, and queryable data.

    Example:
    -   Subject: "John"
    -   Predicate: "worksAt"
    -   Object: "DBS Bank"

    These triples form the core graph structure and can be queried using SPARQL, a query language designed for RDF data.

    **OWL: Semantic Enrichment**

    The Web Ontology Language (OWL) extends RDF by adding semantic capabilities to represent complex relationships and hierarchies. With OWL, knowledge graphs gain the ability to infer new facts.

    -   Class hierarchies: Defining categories and their relationships (e.g., "Employee" as a subclass of "Person").
    -   Equivalence: Map synonymous relationships (e.g., "worksAt" and "employedBy" are equivalent).
    -   Property restrictions: Enforce rules such as "Every Employee must work at one Organisation".

    Example:

    If "John works at DBS Bank" and "DBS Bank is an organisation", OWL can infer that "John is employed by an organisation".

    **SWRL: Rule-Based Reasoning**

    The Semantic Web Rule Language (SWRL) extends OWL by enabling rule-based reasoning through logical statements.

    -   Structure: SWRL rules follow the format:<br>
        IF conditions are met → THEN conclusions are drawn

    Example rule:

    -   IF: A person works at a bank, and a bank provides financial services.
    -   THEN: The person works in the financial industry.

    SWRL supports first-order logic, allowing for the encoding of domain-specific rules and enabling deductive reasoning.

    **A Rule-Based Knowledge Graph**

    By integrating RDF, OWL, and SWRL, a knowledge graph evolves into a powerful rule-based system capable of:

    -   First-order logic: Encoding domain-specific rules (e.g., "People over 65 are eligible for senior benefits").
    -   Inference: Automatically deducing new facts from existing data and rules.
    -   Query and explainability: Extracting insights with SPARQL and explaining inferred conclusions.

    This layered approach allows knowledge graphs to provide rich semantic insights, enhance decision-making, and support complex reasoning.

9.  Semantic web

    The semantic web, a vision introduced by Tim Berners-Lee, aims to make data on the web machine-readable and interoperable by leveraging standardised frameworks such as RDF, OWL, and SPARQL. Its overarching goal is to create a universal layer of linked data across the web, enabling machines to understand and process information meaningfully.

    Knowledge graphs are practical implementations inspired by the principles of the semantic web. While the semantic web envisions a global, web-wide ecosystem of linked data, knowledge graphs are typically domain-specific and designed for targeted applications. Notable examples include Google's Knowledge Graph, which powers search engine results, and Facebook's Social Graph, which models social connections. Although knowledge graphs often incorporate semantic web standards, they frequently rely on proprietary technologies to address challenges related to performance and scalability.

    Recent advancements in data science and machine learning, particularly in areas such as graph neural networks (GNNs) and representation learning, have significantly expanded the scope of knowledge graph applications. Beyond traditional use cases like search engines, recommendation systems, and natural language processing, knowledge graphs are increasingly used in scientific research. For example, in fields such as genomics, proteomics, and systems biology, knowledge graphs model complex biological relationships, including gene interactions, protein networks, and disease pathways.

    While knowledge graphs build on the foundational ideas of the semantic web, they often balance the use of open standards with domain-specific and proprietary approaches. This flexibility has made them a powerful tool across a wide range of industries and research domains.

## Reasoning under Uncertainty

1.  Three main aspects of knowledge imperfection

    -   Incompleteness of information<br>
        This refers to situations where critical data or details are missing, making it difficult to arrive at accurate conclusions. Analogical reasoning can be particularly useful in such cases by leveraging similarities between known cases to fill in the gaps or infer missing information. For example, in problem-solving scenarios, incomplete data can be supplemented by comparing the current situation to previous cases with similar attributes.
    -   Imprecision in description<br>
        This refers to vagueness or lack of clarity in defining conditions or facts. For example, a term like "high risk" can be subjective unless it is quantified or placed within a specific context. Imprecision is often tackled using fuzzy or approximate reasoning, which provides a framework to handle vagueness by assigning degrees of membership to different categories.
    -   Uncertainty in occurrence<br>
        This refers to the unpredictability or likelihood of events happening due to specific causes, or the uncertainty in evaluating a hypothesis based on observed facts. Addressing this type of uncertainty often requires deductive or abductive reasoning. Probabilistic reasoning techniques, such as Bayesian network, are frequently used to quantify the probabilities of various hypotheses based on evidence and prior knowledge. Machine learning models can also predict event likelihoods by treating causes as features or estimate hypothesis probabilities by using observed evidence as features. The reasoning process of these models can be viewed as either deductive or abductive, depending on the perspective. However, their training or learning phase is fundamentally an inductive reasoning step involving generalisation.

2. Analogical reasoning

    Analogical reasoning, also known as similarity-based reasoning, involves comparing the observed features or properties of a subject with those of other subjects to identify similarities.

    -   Nearest neighbour approach (kNN)<br>
        This method identifies the closest data points (neighbours) in the feature space to make predictions or classifications. It selects the most similar $k$ subjects and uses majority voting among them to determine the classification or prediction for the subject of interest.
    -   Case-based reasoning (CBR)<br>
        A problem-solving technique that utilises historical cases to address new problems. It identifies and retrieves the most relevant past cases and adapts their solution to better suit the current problem. This case adaptation enhances effectiveness, particularly when no exact match exists.

    Applications include customer profiling for personalised recommendations, hardware diagnosis, medical education, product design, document preparation, lawyer decision support.

3.  Similarity measure

    -   Attributes and weights<br>
        Identify the relevant attributes of the subject and assign weights based on their importance in determining similarity.
    -   Minimal satisfaction level<br>
        Define a threshold similarity score required for a satisfactory comparison. Scores below this threshold may indicate that the comparison is insufficient or irrelevant.

4.  Fuzzy logic evaluates the degree of truth or inclination towards a vague linguitic concept, assigning partial truth values between 0 (false) and 1 (true). This makes it ideal for handling imprecise or ambiguous concepts.

5.  Rules in fuzzy logic

    A fuzzy rule (also known as a fuzzy implication or fuzzy conditional statement) in a multi-input, single-output system generally takes the following form:

    IF $x_1$ is $A_1$ AND ... AND $x_n$ is $A_n$ THEN $y$ is $B$.

    Where:

    -   $x_1,\cdots,x_n,y$: The linguistic variables representing the system's inputs and outputs.
    -   $A_1,\cdots,A_n,B$: The linguistic values (fuzzy subsets) assigned to the variables $x_1,\cdots,x_n,y$.

    These linguistic values are defined as fuzzy subsets within their respective universes of discourse ($X_1,\cdots,X_n,Y$). This structure models the relationship between inputs ($x_1,\cdots,x_n$) and the output ($y$) using fuzzy logic, enabling the system to process imprecise or uncertain information.

6. Fuzzy *modus ponens*

    **Modus Ponens**

    | Type | Expression |
    |:---|:---|
    | Rule | $P\rightarrow Q$ |
    | Fact | $P$ |
    | Conclusion | $Q$ |

    Where $P$ and $Q$ are binary propositions, with $T(P),T(Q)\in \{0,1\}$.

    **Fuzzy Modus Ponens**

    | Type | Expression |
    |:---|:---|
    | Rule | $P\rightarrow Q$ |
    | Fact | $P\prime$ |
    | Conclusion | $Q\prime$ |

    Where:
    -   $P,Q$: Classical binary propositions.
    -   $P\prime,Q\prime$: Fuzzy propositions, with $T(P\prime),T(Q\prime)\in [1,0]$, that represent approximate matches to $P$ and $Q$, respectively.

7.  Fuzzy reasoning, also known as approximate reasoning, employs fuzzy logic to handle situations where precise information is unavailable. It facilitates decision-making in scenarios with incomplete or uncertain data, overcoming the limitations of traditional binary logic. When an input does not perfectly align with a rule's premise, the reasoning process generates an output through an approximation evaluation.

    Applications include automatic washing machine and fuzzy vacuum cleaner.

8.  Abductive reasoning works backwards to identify possible causes or explanations for observed facts. A key approach is probabilistic reasoning, which evaluates explanations based on their likelihood, making abduction more rigorous and evidence-driven.

    Bayesian inference is a probabilistic reasoning method that uses Bayes' Theorem to update the probability of a hypothesis $H$ given evidence $E$.

    $$
    P(H\mid E)=\frac{P(E\mid H)\cdot P(H)}{P(E)}
    $$

## Neighbour-Based Inference

1.  Neighbour-based methods, such as k-nearest neighbours (kNN), are considered non-generalising machine learning methods because they do not create a generalised model from the training data. Instead, they store all the training data and make predictions based on the proximity of data points in the feature space. These methods are also known as lazy learning algorithms since they defer computation until a query is made.

    Unlike most other machine learning models, which rely on inductive generalisation to infer a generalised model from specific examples (i.e., learning patterns or relationships in the training data to generalise to unseen cases), neighbour-based methods bypass this process entirely. Rather than reasoning from individual cases to broader generalisations, they focus on direct comparisons within the dataset. As a result, the model representation is simply the training data itself.

## Bayesian Inference

### Bayes' Theorem

1.  Bayes' theorem is a mathematical formula used to calculate the posterior probability of a hypothesis based on observed evidence. The formula is:

    $$
    P( A\mid B) =\frac{P( B\mid A) P( A)}{P( B)}
    $$

    Where:

    -   $P(A\mid B)$: Posterior Probability<br>
        The probability of $A$ (the hypothesis or event) being true given the evidence $B$. It is the result calculated using Bayes' theorem.
    -   $P(B\mid A)$: Likelihood<br>
        The probability of observing the evidence $B$, assuming that $A$ (the hypothesis) is true.
    -   $P(A)$: Prior Probability<br>
        The probability of the hypothesis $A$ before considering any evidence. This reflects your initial belief about $A$.
    -   $P(A,B)=P(B\mid A)P(A)$: Joint Probability<br>
        The probability of observing both the event $A$ (antecedent) and evidence $B$ (consequent) simultaneously.
    -   $P(B)$: Marginal Probability of $B$<br>
        The total probability of observing evidence $B$, taking into account all possible causes or hypotheses. It serves as a normalising factor.

2.  Calculating the probability of evidence $P(B)$

    The total probability of observing evidence $B$ is determined by summing over all possible scenarios (or hypotheses) that could lead to $B$.

    $$
    P( B) =P( B\mid A) P( A) +P\left( B\mid A^{c}\right) P\left( A^{c}\right)
    $$

    Where

    -   $A^c$: The complement of $A$, representing the event where $A$ does not occur.

    Alternatively, $P(B)$ can also be expressed in terms of joint probabilities:

    $$
    P(B)=P( A,B) +P\left( A^{c} ,B\right)
    $$

    Using this formulation, Bayes' theorem can be written as:

    $$
    P( A\mid B) =\frac{P( A,B)}{P( A,B) +P\left( A^{c} ,B\right)}
    $$

    This version of Bayes' theorem expresses the posterior probability as the ratio of the joint probability of $A$ and $B$ to the total probability of all scenarios involving $B$.

3.  Example in medical diagnosis

    Assuming the following probabilities:

    -   $P(A)=0.01$: 1% of people have the disease (prior).
    -   $P(B\mid A)=0.95$: If someone has the disease, the test is 95% accurate (likelihood).
    -   $P(B\mid A^c)=0.05$: If someone does not have the disease, the test gives a false positive result 5% of the time.
    -   $P(A^c)=0.99$: 99% of people do not have the disease (complement of prior probability)

    Now, calculate the posterior probability $P(A\mid B)$, which represents the probability that a person actually has the disease given that they tested positive ($B$).

    Step 1: Compute the joint probabilities $P( A,B)$ and $P\left( A^{c} ,B\right)$:

    $$
    P(A,B)=P(B\mid A)P(A)=0.95\cdot 0.01=0.0095\\
    P(A^c,B)=P(B\mid A^c)P(A^c)=0.05\cdot 0.99=0.0495
    $$

    Step 2: Use Bayes' Theorem to find $P(A\mid B)$:

    $$
    \begin{aligned}
    P( A\mid B) & =\frac{P( A,B)}{P( A,B) +P\left( A^{c} ,B\right)}\\
    & =\frac{0.0095}{0.0095+0.0495}\\
    & \approx 0.161
    \end{aligned}
    $$

    Interpretation:

    Even though the test is highly accurate (95%), the probability that a person actually has the disease given a positive test is only 16.1%. This is because the disease is very rare (low prior probability), so false positive contribute significantly to the positive test results.

### Naive Bayes

1.  Naive Bayes is a method used to calculate the posterior probability of a class $C$ given a set of features $\{F_1,F_2,\cdots,F_n\}$. This probability is expressed as:

    $$
    P( C\mid F_{1} ,F_{2} ,\cdots ,F_{n}) =\frac{P( F_{1} ,F_{2} ,\cdots ,F_{n} \mid C)P( C)}{P( F_{1} ,F_{2} ,\cdots ,F_{n})}
    $$

2.  Independence assumption

    Naive Bayes assumes that all features are conditionally independent of each other, given the class label. This assumption significantly simplifies the computation of the joint probability distribution.

    The joint probability of observing the class $C$ and all features is given by:

    $$
    \begin{aligned}
    P( C,F_{1} ,F_{2} ,\cdots ,F_{n}) & = P( F_{1} ,F_{2} ,\cdots ,F_{n} \mid C)P( C)\\
    & =P( C)\prod _{i=1}^{n} P( F_{i} \mid C)
    \end{aligned}
    $$

    Where:

    -   $P(C)$: The prior probability of the class $C$.
    -   $P(F_i\mid C)$: The likelihood of feature $F_i$ given the class $C$.

    The prior probability $P(C)$ is estimated from the data. If $n$ examples in dataset $D$ belong to class $C$, then:

    $$
    P(C)=\frac{n}{|D|}
    $$

    Using the independence assumption, the total probability of observing the complement of class $C$ and all features is given by:

    $$
    \begin{aligned}
    P( C\prime ,F_{1} ,F_{2} ,\cdots ,F_{n}) & =P( F_{1} ,F_{2} ,\cdots ,F_{n} \mid C\prime ) P( C\prime )\\
    & =P( C\prime )\prod _{i=1}^{n} P( F_{i} \mid C\prime )
    \end{aligned}
    $$

    Recall that an alternative version of Naive Bayes can be written as:

    $$
    P( C\mid F_{1} ,F_{2} ,\cdots ,F_{n}) =\frac{P( C,F_{1} ,F_{2} ,\cdots ,F_{n})}{P( C,F_{1} ,F_{2} ,\cdots ,F_{n}) +P( C\prime ,F_{1} ,F_{2} ,\cdots ,F_{n})}
    $$

    Therefore, Naive Bayes formula can be rewritten as:

    $$
    P( C\mid F_{1} ,F_{2} ,\cdots ,F_{n}) =\frac{P( C)\prod _{i=1}^{n} P( F_{i} \mid C)}{P( C)\prod _{i=1}^{n} P( F_{i} \mid C) +P( C\prime )\prod _{i=1}^{n} P( F_{i} \mid C\prime )}
    $$

3.  Example

    | Probability | True ($T$) | False ($F$) |
    |:---|:---:|:---:|
    | $P(Y)$ | 0.5 | 0.5 |
    | $P(\text{small}\mid Y)$ | 0.4 | 0.4 |
    | $P(\text{medium}\mid Y)$ | 0.1 | 0.2 |
    | $P(\text{large}\mid Y)$ | 0.5 | 0.4 |
    | $P(\text{red}\mid Y)$ | 0.9 | 0.3 |
    | $P(\text{blue}\mid Y)$ | 0.05 | 0.3 |
    | $P(\text{green}\mid Y)$ | 0.05 | 0.4 |
    | $P(\text{square}\mid Y)$ | 0.05 | 0.4 |
    | $P(\text{triangle}\mid Y)$ | 0.05 | 0.3 |
    | $P(\text{circle}\mid Y)$ | 0.9 | 0.3 |

    Test Instance: The instance to classify is $X=\{\text{medium},\text{red},\text{circle}\}$.

    Step 1: Compute the joint probabilities $P(T,X)$ and $P(F,X)$:

    $$
    \begin{aligned}
    P( T,X) & =P( T) P\left(\text{medium} \mid T\right) P\left(\text{red} \mid T\right) P\left(\text{circle} \mid T\right)\\
    & =0.5\cdot 0.1\cdot 0.9\cdot 0.9\\
    & =0.0405
    \end{aligned}
    $$

    $$
    \begin{aligned}
    P( F,X) & =P( F) P\left(\text{medium} \mid F\right) P\left(\text{red} \mid F\right) P\left(\text{circle} \mid F\right)\\
    & =0.5\cdot 0.2\cdot 0.3\cdot 0.3\\
    & =0.009
    \end{aligned}
    $$

    Step 2: Use Bayes' Theorem to find $P(T\mid X)$:

    $$
    \begin{aligned}
    P( T\mid X) & =\frac{P( T,X)}{P( T,X) +P( F,X)}\\
    & =\frac{0.0405}{0.0405+0.009}\\
    & =0.8181
    \end{aligned}
    $$

    Interpretation:

    The probability of $T$ being true given the instance $X$ is approximately 81.81%.

4.  Naive Bayes as a Bayesian network

    Naive Bayes can be interpreted as a simplified form of a Bayesian network with a specific structure and set of assumptions:

    -   Nodes (Variables)<br>
        The Bayesian network consists of one node for the class $C$ (the hypothesis) and multiple nodes for features $F_1,F_2,\cdots,F_n$ in the dataset.
    -   Edges<br>
        The class $C$ is the parent of all feature nodes. Each feature node $F_i$ is conditionally independent of each other, given the class.

    The components of Naive Bayes correspond directly to elements of the Bayesian network:

    -   Prior probabilities: $P(C),P(C\prime)$ define the probabilities for the root node (class $C$).
    -   Conditional probabilities: $P(F_i\mid C),P(F_i\mid C\prime)$ populate the conditional probability tables (CPTs) for the feature nodes.

    This structure enables Naive Bayes to model the dependencies in the data efficiently while leveraging strong independence assumptions to simplify computations.

5.  Applications

    Naive Bayes simplifies probabilitic inference by assuming conditional independence between features. Despite this simplification, experiments have shown that Naive Bayes performs competitively with other classification methods on standard datasets.

    Applications include medical diagnosis, text categorisation and spam filtering, and intelligent tutoring systems.

### Bayesian Network

1.  Bayesian networks

    A Bayesian network is a probabilistic graphical model that represents a set of variables and their conditional dependencies. It uses a graph structure to represent relationships between variables:

    -   Graph Type<br>
        A Bayesian network employs a Directed Acyclic Graph (DAG) to represent causal relationships. In this structure, the edges are directed, showing the direction of causality or influence. There are no loops, ensuring the graph remains acyclic.
    -   Nodes (Variables)<br>
        Each variable is represented as a node in the graph. Each node is associated with a conditional probability table (CPT) that defines the probabilities of the variable given its parents.
    -   Roots (Sources)<br>
        Root nodes have no parent. They are assigned prior probabilities, as they are independent of other variables.
    -   Edges (Dependencies)<br>
        The edges between nodes represent conditional dependencies. For example, if variable $A$ influences variable $B$, a directed edge will connect $A$ to $B$.

2.  Conditional probability tables

    A CPT represents the conditional probabilities of a node based on its parent nodes. The number of parameters required for a CPT depends on the node's fan-in, which refers to the number of its direct parent nodes.

3.  A Bayesian network implicitly defines a joint distribution:

    $$
    P( X_{1} ,X_{2} \cdots ,X_{n}) =\prod _{i=1}^{n} P\left( X_{i} \mid \text{Parents}( X_{i})\right)
    $$

    Example:

    Consider the scenario: John and Mary both receive calls, the alarm is heard, and there is neither a burglary nor an earthquake. The joint probability of this event is:

    $$
    \begin{aligned}
    & P( J\land M\land A\land \neg B\land \neg E)\\
    & =P( J\mid A) P( M\mid A) P( A\mid \neg B\land \neg E) P( \neg B) P( \neg E)
    \end{aligned}
    $$

    This expression breaks down the joint probability into conditional probabilities based on the structure of the Bayesian network.

4.  Bayesian network inference

    Given the known values of certain evidence variables, calculate the posterior probability of the specified query variables.

5.  Bayesian network

    -   Knowledge representation
    -   Statistical learning & inductive reasoning

6.  Assumptions

    -   Hypotheses are mutually exclusive
    -   Hypotheses are exhaustive
    -   Conditional independence
    -   Need of prior probabilities

## Decision Tree

1.  A decision tree is a supervised machine learning model used for classification and regression tasks. It is called a "tree" because it resembles a tree-like structure, with branches representing decisions and leaves representing outcomes.

2.  Key components of a decision tree:

    -   Root node<br>
        The starting point of the tree. represent the first decision based on the most significant feature.
    -   Internal nodes<br>
        Decision points that split the data based on a specific feature or condition.
    -   Branches<br>
        Paths connecting nodes, representing the outcome of a decision or test condition.
    -   Leaf nodes<br>
        Endpoints of the tree. Contain the final predicted class label (classification) or value (regression).

3.  Splitting

    The data is divided into subsets based on a feature and a threshold. Common splitting criteria include:

    -   Gini index (for classification)
    -   Entropy (used in information gain for classification)
    -   Variance reduction (for regression)

4.  Stopping criteria

    The tree grows until a stopping criterion is met, such as:

    -   Maximum depth
    -   Minimum number of samples per leaf node
    -   No further information gain

5.  Prediction

    -   For classification: The majority class of the leaf node.
    -   For regression: The average of the target values in the leaf node.

6.  Intrinsic feature selection and dimensionality reduction

    -   Feature selection<br>
        At each split, the tree evaluates all features and selects the one that best separates the data (e.g., using information gain or Gini index). Features that do not improves splits are naturally excluded.
    -   Dimensionality reduction<br>
        The tree only retains features used in splits, reducing dimensionality. Unlike explicit methods like PCA, this reduction is implicit and specific to the training data.

7.  Advantages

    -   Easy to understand<br>
        Visualisation makes it intuitive.
    -   Handles non-linear data<br>
        Can model complex relationships.
    -   Feature importance<br>
        Highlights which features are most important.
    -   No need for scaling<br>
        Works with raw data without requiring normalisation.

8.  Disadvantages

    -   Overfitting<br>
        Tends to overfit if the tree grows too deep.
    -   Instability<br>
        Small changes in data can lead to a very different tree.
    -   Not optimal for large datasets<br>
        Computationally expensive for large, complex data.

9.  Improvements

    -   Pruning<br>
        Reduces overfitting by cutting unnecessary branches.
    -   Ensemble methods<br>
        Combine multiple trees for better performance, such as:
        -   Random forest<br>
            Builds multiple trees using random subsets of data and features.
        -   Gradient boosting<br>
            Sequentially builds trees to minimise error.

10. Applications

    -   Classification<br>
        Predicting customer churn, disease diagnosis.
    -   Regression<br>
        Predicting house prices, stock values.
    -   Decision-making<br>
        Loan approvals, fraud detection.

### Gini Index

1.  The Gini Index (or Gini Impurity) is a measure used in decision trees to evaluate the quality of a split. It represents how "pure" or "impure" a node is. A node is considered pure if all data points belong to a single class.

    $$
    \text{Gini Index} =1-\sum _{i=1}^{C} p_{i}^{2}
    $$

    Where:
    -   $p_i$ is the proportion of samples belonging to class $i$ in a node.
    -   $C$ is the total number of class.

## Scikit-Learn

1.  Scikit-learn is a free and open-source machine learning library for Python, designed to facilitate easy and efficient data analysis and modelling. Built upon NumPy, SciPy, and Matplotlib, it offers wide range of tools for both supervised and unsupervised learning tasks.

2.  Installing Scikit-learn

    ```bash
    pip install scikit-learn
    ```


2.  Read up documentation for DT (for classification), DT (for regression), kNN, and NB.

7.  Reference books
    -   Artificial Intelligence: A Modern Approach

## Model Representation

1.  Model

    -   Technically it's a function

2.  Conceptual model

    -   Modeling

3.  Physical model

    -   actual implementation of model
    -   A simple example is a simple formula

4.  Data distribution and correlation between variables

5.  ML Model

    -   Trained on dataset and can work on previously unseen dataset.

6.  Categories of Model

    -   by function: regression, classification, clustering
    -   by method: nn, dt, svm

7.  supervised vs unsupervised learning
    labelled vs unlabelled learning

8.  kNN is lazy learning model, stores training data, and performs calculation when making prediction. Doesn't have training phase, all computation happens when a prediction is made.

9.  Traditional KBS - separate knowledge base and inference engine. rule induction?

    ML model serve both the knowledge base and inference engine. rule extraction?

10. DT - tree structure offers an indexed rule base with learned rules.

    rule induction

11. ID3 algorithm

    Information gain formula

12. Rule extraction from NN via DT induction
    Rule extraction from Deep NN

13. NN embedding
    one-hot encoding
    sparsely distributed variables
    embedding help overcome the problem
    embeddings are vectors
    -   tranforming categorical data
    -   reducing  high dimensional data into lower dimensional vectors

    embeddings
    -   process of vectorise features
    -   numerical vector of the embedding process
    -   embedding layer
    -   embedding model

    In CNNs, embedding enhance feature extraction
    In RNNs, embedding enhance sequential data processing

    Dimensionality reduction

14. Embedding models

    -   PCA
    -   SVD
    -   Word2Vec
    -   BERT
