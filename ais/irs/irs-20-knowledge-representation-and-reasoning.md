<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# Knowledge Representation and Reasoning

<div class="badge">
    <span class="key">Type</span>
    <span class="value">Course</span>
</div>
<div class="badge">
    <span class="key">Instructor</span>
    <span class="value">Wang Aobo</span>
</div>
<div class="badge">
    <span class="key">Institution</span>
    <span class="value">NUS-ISS</span>
</div>
<div class="badge">
    <span class="key">Note Updated</span>
    <span class="value">2025-08-14</span>
</div>

## Introduction to Knowledge Representation and Reasoning

Knowledge Representation and Reasoning is the study of how to represent information about the world in a form that a computer system can use to solve complex tasks such as diagnosing a medical condition, planning a route, or answering questions.

Core Goals:

1.  Represent **facts** and **rules** about a domain.
2.  Enable systems to **reason** logically over these facts to draw new conclusions.

## Limitation of Data-Driven Approaches

**Overconfidence in Solving Problems**

Benchmark success ≠ real-world readiness

Example&ndash;Car Navigation

1.  Path planning works in controlled settings.
2.  Minor changes in environment can cause failures.

**Adversarial Vulnerabilities in DNNs**

1.  Stop Sign Attack: Stickers on a stop sign cause misclassification as "Speed limit 45".
2.  Adversarial Apparel: Special T-shirt patterns fool object detectors, mislabelling or missing pedestrians entirely.

**Knowledge Awareness Gap**

1.  Purse statistical systems (e.g., DNNs) lack built-in commonsense or symbolic constraints.
2.  A KRR layer could reject absurd outputs by cross-checking it against known rules, map data, or context (e.g., the car's map says there is a stop sign at the junction, even though DNN interprets it as a speed limit).

**Driverless vs. Careless**

1.  Without safety-critical reasoning checks, "driverless" AI may become "careless" AI.
2.  KRR can add **guardrails** through explicit rules and logical consistency checks.
