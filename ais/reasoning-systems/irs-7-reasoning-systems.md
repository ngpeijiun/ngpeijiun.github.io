<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Reasoning Systems

*Mar 2, 2025*

## Predictive and Generative AI

1.  Analytic System (Predictive AI)

    -   Obtain knowledge (ML, discovery).
    -   Represent knowledge (reasoning framework).
    -   Infer solutions for new cases.

2.  Synthetic System (Generative AI)

    -   Generate candidate solutions.
    -   Evaluate using goal tests.
    -   Rank and refine candidates.
    -   Iterate until termination criteria are met.

3.  Predictive AI

    -   Analyses historical data to identify patterns and forecast future outcomes.
    -   Used in business forecasting, sales projections, demand estimation, and logistics optimisation.
    -   Helps organisations make informed decisions based on statistical insights.

4.  Generative AI

    -   Produces new content (text, images, code, video) in response to user prompts.
    -   Learns patterns from vast datasets and generates similar, but original, outputs.
    -   Uses foundation models (e.g. Large Language Models) to predict probable outputs.

5.  Key Differences Between Generative AI and Predictive AI

    | Feature | Generative AI | Predictive AI |
    |:---|:---|:---|
    | Training Data | Large, diverse datasets | Smaller, targeted datasets |
    | Output | New content generation | Forecasts future events or trends |
    | Goal | Create human-like responses | Optimise decision-making |

    Generative AI creates novel data, while predictive AI analyses existing data to predict trends.

6.  Predictive AI Architectures

    -   Clustering: Groups data points based on similarities to uncover patterns.
    -   Decision Trees & Random Forests: Use a hierarchical structure to classify data or make decisions.
    -   Regression Models: Identify relationships between variables to predict continuous outcomes.
    -   Time Series Analysis: Analyses chronological data to forecast future trends.

7.  Generative AI Architectures

    -   Diffusion Models: Start with random noise and iteratively refine it to produce realistic outputs.
    -   Generative Adversarial Networks (GANs): Use a generator to create new data and a discriminator to evaluate its authenticity, improving generation quality over time.
    -   Transformer Models: Utilise self-attention mechanisms to analyse sequences and encode data efficiently for generation tasks.
    -   Variational Autoencoders (VAEs): Learn compressed representations of training data to generate new, similar samples.

8.  Explainability & Interpretability

    -   Generative AI: Hard to explain due to complex decision-making processes.
    -   Predictive AI: More transparent as it relies on numbers and statistics.

9.  Contemporary Reasoning Systems

    -   Expert Systems: Rule-based systems that simulate human expertise using if-then rules.
    -   Machine-Learning Models: Statistical models (e.g., neural networks, decision trees) that learn from data to make predictions.
    -   Probabilistic Reasoning System: Handle uncertainty using probability theory (e.g., Bayesian network).
    -   Natural Language Processing (NLP) Systems: Understand and generate human language for tasks like sentiment analysis and chatbot interactions.
    -   Constraint Satisfaction Systems: Solve problems by satisfying constraints (e.g., scheduling, resource allocation).
    -   Automated Reasoning System: Use logical inference techniques for verification and problem-solving.
    -   Cognitive Reasoning System: Mimic human cognition, incorporating elements from psychology and neuroscience.
    -   Hybrid Reasoning Systems: Combine multiple reasoning techniques (e.g., expert systems + machine learning).

## Hybrid Reasoning Systems

1.  Hybrid intelligent systems integrate two or more reasoning techniques:

    -   Deductive reasoning (Analytic Problem Solving)
        -   Techniques: Knowledge-driven rule/process system, information retrieval, Fuzzy Logic, Belief-Desire-Intention (BDI) framework.
    -   Inductive reasoning (Data Mining & Machine Learning)
        -   Techniques: Decision Trees, Association Rules, Neural Networks, Bayesian Networks, Knowledge Graphs, Reinforcement Learning.
    -   Planning & Optimisation (Synthetic Problem Solving)
        -   Techniques: Search, Genetic Algorithm, Constraint Satisfaction, Swarm Intelligence.

2.  Four main system architectures of hybrid reasoning systems:

    -   Independent Sub-systems: Separate reasoning modules operate independently.
    -   Competing Experts: Multiple models compete to provide the best solution.
    -   Cooperating Experts: Different models collaborate to improve decision-making.
    -   Self-Tuning: The system adapts its reasoning approach dynamically.

3.  Independent Sub-systems

    -   Breaks down problems into independent parts.
    -   Each sub-system solves a specific aspect using different techniques.
    -   No collaboration needed (e.g., decision support systems with separate functions).

4.  Competing Experts

    -   Multiple reasoning techniques provide alternative solutions.
    -   An abitrator system selects or combines solutions.
    -   Selection strategies include majority voting, rule-based arbitration, or bidding.

5.  Cooperating Experts

    -   Different techniques work together to form a single solution.
    -   Examples:
        -   Decision Trees and Neural Networks provide complementary inputs for economic forecasting.
        -   Applied in business loan approvals, where rule-based systems access business viability, and neural networks predict property valuation.

6.  Self-Tuning Experts

    -   One system tunes another to improve performance.
    -   Examples:
        -   A Decision Tree extracts rules for a trading strategy.
        -   A Genetic Algorithm optimises the initial solution for better results.

## Modelling Reasoning Systems

1.  Towards Successful AI

    The success of real-world AI systems depends on high-quality data and effective modelling.

    -   Data from the application domain: The foundation for AI models.
    -   Domain knowledge: Supports the modelling process.
    -   Algorithms/methods/models: Adopted based on data and problem requirements.
    -   Modelling: The process of integrating data, domain knowledge, algorithms to create an intelligent system.

2.  Modelling

    -   Modelling bridges data, domain knowledge, and algorithms to develop an intelligent system.
    -   It transforms raw data into structured models using machine learning, statistical methods, and AI techniques.
    -   The trained model enables intelligent decision-making and automation.

3.  Challenges in Real-World AI

    -   Application domain issues
        -   Incomplete factor sets
        -   Uncertainty in variable relationships
        -   Cause-effect dynamics with imprecise time delays
    -   Problem understanding
        -   Data collection and preparation difficulties

4.  Strategy

    A "Data + Knowledge-driven" modelling approach balances statistical learning with domain expertise for better AI solutions.

5.  Case Study: Frost Forecasting

    **Problem Statement**

    -   Frost occurence is influenced by environmental factors (e.g., air temperature, humidity).
    -   Machine learning models can predict frost using historical data.
    -   Challenge: Future environmental readings (e.g., temperature, humidity) are unavailable at forecast time.

    **Approach: Time Series + Prediction Model**

    -   Time Series Forecasting
        -   Predicts future environmental factors: Air Temperature ($T$), Humidity ($H$), Radiation ($R$).
    -   Frost Prediction Model
        -   Uses forecasted values $T_{t+h}^\prime,H_{t+h}^\prime,R_{t+h}^\prime$ to predict frost occurrence $F_{t+h}^\prime$.
    -   Properties
        -   Suitable for long-term forecasting.
        -   Confidence interval shows the uncertainty of forecast.

    **Uncertainty in Forecasting**

    -   Well-behaved: Predictable within a known distribution.
    -   Ill-behaved: Unexpected, unknown unknowns (e.g., extreme climate events).

    **Approach: Casual Modelling**

    -   Concept: Frost occurrence is influenced by environmental factors (temperature, humidity) with a time delay in impact.
    -   Goal: Capture the causal relationship between past environmental observations and future frost occurrence.
    -   Key Features:
        -   Uses historical data to predict frost at time $t+h$.
        -   Provides an early warning of frost a few hours ahead.
        -   Utilises moving averages to manage data imprecision.
        -   Requires an explicit time-delay in the model.
        -   Suitable for short-term forecasting.

    **Alarm Period Modelling**

    -   Concept: Instead of modelling direct causality, introduce an alarm period prior to frost occurrence.
    -   Goal: Relabels the target variable to mark an alarm phase as frost-prone periods before the frost, making prediction easier.
    -   Key Features:
        -   Assumes frost is related to prior environmental changes.
        -   Relabels the target variable to indicate an alarm window before frost.
        -   Simplifies learning compared to causal modelling.
        -   Suitable for short-term forecasting.

    **Variable Granulation**

    -   Environmental randomness and unknown factors make causal relationships imprecise.
    -   Input variables: Use moving averages of past observations.
    -   Target variable: Compute the probability of frost over future time periods.

6.  Family of Modelling Methods

    | Target | Granulation | Delay | Alarm Window | Modelling |
    |:---|:---:|:---:|:---:|:---|
    | Binary Class | No | No | No | Forecast |
    | Binary Class | No | Yes | n/a | Causal |
    | Binary Class | No | No | Yes | Alarm Period |
    | Average Chance | Yes | Yes | n/a | Causal |
    | Average Chance | Yes | No | Yes | Alarm Period |

7.  Case Study: Greenhouse Gas Forecasting

    **Problem Statement**

    -   Methane (CH<sub>4</sub>), a greenhouse gas, is released from paddy fields during rice cultivation.
    -   ML models can predict methane using historical data.

    **Data Analysis**

    -   Time Series Decomposition shows trends, seasonality, and residuals.
    -   Investigates correlation between methane emissions and air temperature.
    -   Change of temperature impacts methane flux more than absolute temperature values.

    **Approach: Data-Knowledge Integration**

    -   Capturing the Change in Temperature Trend
        -   Fit a polynomial regression to air temperature trends over a moving one-week window, shifting daily.
        -   Extend the model by forecasting one day ahead.
        -   Compare it with another polynomial regression fitted to the actual observed trend of the next day.
        -   Evaluate trend shifts by comparing regression coefficients. If no significant change is detected, repeat the process.
    -   Predicting Methane (CH<sub>4</sub>)
        -   Fit a polynomial regression to CH<sub>4</sub> trends and extend the model into the future.
        -   Predict CH<sub>4</sub> spikes, identifying when emissions exceed critical levels.

    **Further Explanation**

    -   Why analyse time series trends?
        -   Air temperature follows daily and seasonal patterns.
        -   CH<sub>4</sub> production is a temperature-dependent process, making trend analysis more meaningful than instant values.
        -   Trend decomposition helps capture temperature-CH<sub>4</sub> relationships.
    -   Why use parametric regression?
        -   It simplifies trend comparisons and detects shifts efficiently.
    -   Why focus on temperature?
        -   Temperature affects CH<sub>4</sub> with a time delay (cause-effect is not instant).
        -   Trend changes in temperature precede CH<sub>4</sub> spikes, making it a useful predictor.
