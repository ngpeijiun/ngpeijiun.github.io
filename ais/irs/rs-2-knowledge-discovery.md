<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Knowledge Discovery

<div class="badge">
    <span class="key">Type</span>
    <span class="value">Course</span>
</div>
<div class="badge">
    <span class="key">Instructor</span>
    <span class="value">Barry Shepherd</span>
</div>
<div class="badge">
    <span class="key">Institution</span>
    <span class="value">NUS-ISS</span>
</div>
<div class="badge">
    <span class="key">Note Updated</span>
    <span class="value">2025-07-29</span>
</div>

## What is Knowledge Discovery in Databases (KDD)?

**Knowledge Discovery in Databases (KDD)** is the process of identifying valid, novel, potentially useful, and ultimately understandable patterns in data to support decision-making. It transforms raw or historical data into structured knowledge that powers intelligent reasoning systems.

## From Expert Knowledge to Data-Driven Knowledge

Early expert systems relied heavily on **expert knowledge** acquisition, which is often difficult and time-consuming. KDD offers a scalable alternative by extracting knowledge automatically from **historical data** through **machine learning** and **statistical modelling** to support reasoning, decision-making, and planning.

Key types of knowledge that can be discovered through KDD:

1.  **Association Rule Mining**
    -   Finds relationships between variables (e.g., Market Basket Analysis: "*People who buy X also buy Y*").
2.  **Regression Analysis**
    -   Predicts continuous numerical outcomes (e.g., stock prices, customer churn).
3.  **Classification**
    -   Categorises data into predefined classes (e.g., spam vs. not spam).
4.  **Clustering**
    -   Groups similar data points without predefined labels (e.g., customer segmentation for targeted marketing).
5.  **Anomaly Detection (Outliers)**
    -   Identifies unusual patterns (e.g., fraud detection in banking, network intrusion detection).
6.  **Sequential Pattern Mining**
    -   Discovers frequent ordered event patterns (e.g., "*After purchasing a phone, customers often by a case within a week*").
7.  **Text Mining and Analysis**
    -   *Sentiment Analysis*: Extracts insights from unstructured text (e.g., social media sentiment analysis).
8.  **Structural and Relational Knowledge**
    -   *Graph Mining*: Discovers relationships in networks (e.g., social network analysis).
    -   *Link Prediction*: Predicting missing or future connections (e.g., friend recommendations).

## KDD, Data Mining, and Data Science

1.  **KDD** (1990s)<br>
    KDD is the overall *process* of extracting useful knowledge from structured databases.
2.  **Data Mining** (2000s)<br>
    Data Mining is a key *step* within KDD, focusing specifically on applying algorithms to discover patterns in data. Over time, the distinction between KDD and data mining has blurred, and the terms are often used interchangeably.
3.  **Data Science** (2010s)<br>
    Data Science is a broader field combining data engineering (data collection, unstructured data, big data), data analytics (statistics, machine learning, visualisation), MLOps (machine learning operations), and domain expertise to analyse data and uncover insights for informed decision-making.

## Machine Learning and Machine Reasoning

Machine learning uncovers insights and rules from data that can enhance machine reasoning. Likewise, expert knowledge from symbolic reasoning can help train and guide machine learning. While they can enhance each other, this reinforcement is typically limited&mdash;not a continuous feedback loop&mdash;but rather a way to complement each other at key stages of the system's development.

## The Role of Data

The success of machine learning and deep learning depends on **large, diverse** datasets.

| Data Type | Size | Example Data | Example Applications |
|:---|:---|:---|:---|
| User-level | Moderate | Registration, demographics | Customer analytics, retention |
| Events (discrete) | Huge | Transactions, web clicks | Recommendations, fraud detection |
| Sensor data (continuous) | Massive | Images, speech, IoT | Facial recognition, smart city |

The data size is a function of both *length* (#records) and *width* (#variables).

## Predictive Modelling

Predictive models learn from past events to estimate future outcomes:

1.  Will a customer churn?
2.  Will a patient respond to a treatment?

### Variables

1.  **Input Variables (Features)**: used to predict outcomes (e.g., age, education).
2.  **Output Variable (Target)**: value to be predicted (e.g., income > 50k).

### Data Types

1.  **Categorical**: e.g., marital status (converted via one-hot encoding)
2.  **Numerical**: e.g., hours worked per week

### One-Hot Encoding

Converts a categorical variable with $N$ values into $N$ binary columns for model input.

**Example: Email Campaign Response Model**

1.  Input: customer demographics, purchase history, offer details
2.  Output: binary label (responded: Yes/No)
3.  Models: Logistic Regression, Decision Trees, Rulesets, Deep Neural Networks

## Data Preparation and Feature Engineering

Raw data is rarely ready for modelling. It must go through **data preparation**, which includes:

1.  **Integration** of multiple sources (user, purchase, offer)
2.  **Cleaning** missing/inconsistent values
3.  **Feataure Engineering** to create informative variables
4.  **Balancing** to fix class imbalance

**Creating a Modelling Dataset**

In large-scale real-world settings (e.g., Kaggle's Valued Shoppers Challenge), datasets are built by:

1.  Aggregating customer transactions and activities
2.  Merging them with demographic/account data
3.  Transforming it into a structured modelling dataset

## CRISP-DM

The **CRISP-DM** (Cross-Industry Standard Process for Data Mining) is a widely used process model for KDD projects.

1.  Business Understanding
2.  Data Understanding
3.  Data Preparation
4.  Modelling
5.  Evaluation
6.  Deployment

Iteration is key&mdash;data and models are refined continuously until they are suitable for deployment. Importantly, the focus is on **knowledge discovery**, not just prediction. The resulting model is typically executable, but execution may not be necessary if the goal is simply to represent or interpret patterns and insights uncovered in the data.

## Transparency and Explainability

In many domains, it is essential to understand how a model makes decisions:

1.  Why was this ad shown?
2.  Why did the model recommend this drug?

Some models are inherently more explainable:

1.  **High transparency**: decision trees, rule sets, linear regression
2.  **Low transparency**: neural networks, ensemble models

Understanding model logic helps build **trust**, detect **bias**, and ensure **accountability**.
