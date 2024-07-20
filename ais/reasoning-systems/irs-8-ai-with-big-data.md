<h1 style="color: #ccc">Intelligent Reasoning System</h1>

# AI with Big Data

*Mar 5, 2025*

## Big Data

1.  Big Data

    -   Big data refers to extremely large datasets that traditional data processing tools struggle to handle.
    -   Datasets with many rows offer statistical power, while datasets with many attributes (columns) may lead to higher false discovery rates.
    -   Best interpretation: Big data is a large body of information that is not meaningful when examined in small portions.

2.  Big Data's 5 Vs

    -   Volume: The vast amount of data generated.
    -   Velocity: The speed at which data is produced and processed.
    -   Variety: The different types of data (structured, semi-structured, unstructured).
    -   Veracity: The reliability and accuracy of data, given that real-world data can be messy.
    -   Value: The insights gained must be based on accurate and meaningful data, ensuring useful decision-making.

3.  Traditional DBMS Systems

    -   Data is stored on disk and loaded into memory as needed.
    -   Processing involves CPU cycles on the server and user resources (CPU & memory).
    -   I/O operations are slow, and memory constraints prevent loading large datasets at once.

4.  Handling Big Data

    -   Scaling out via distributed computing enables handling massive datasets.
    -   A distributed system consists of networked computers that communicate via Remote Procedure Calls (RPCs).

## Distributed Computing

1.  Key Features

    -   Fault tolerance (failure recovery).
    -   Shared-nothing architecture (independent nodes).
    -   Hadoop Distributed File System (HDFS) for large-scale storage.
    -   MapReduce (divide-and-conquer approach for parallel processing).

2.  Failure Recovery

    -   More resources increase the chance of failures.
    -   Systems must be scalable and fault-tolerant to recover efficiently.

3.  Shared Nothing Architecture

    -   Nodes operate independently, reducing communication overhead.
    -   Data nodes are unaware of each other; coordination is handled by master servers (Name Node, Job Tracker).

4.  Hadoop Distributed File System (HDFS)

    -   Open-source file system for distributed environments.
    -   Simplifies working with distributed data.
    -   Ensures fault tolerance by replicating data across nodes.

5.  MapReduce

    -   Processes data stored on disk instead of loading it into memory.
    -   Efficient for large-scale data processing by distributing tasks across multiple nodes.
    -   Optimised for parallel execution.

6.  Hadoop

    -   Disk-based distributed computing platform.
    -   Uses HDFS (Hadoop Distributed File System).
    -   Follows a Map-Reduce (divide-and-conquer) approach.

7.  Spark

    -   In-memory distributed computing platform.
    -   Uses Resilient Distributed Datasets (RDDs).
    -   Includes machine learning (ML) libraries and supports various processing modes.

8.  Spark vs. Hadoop MapReduce

    | Factor | Spark | Hadoop MapReduce |
    |:---|:---|:---|
    | Speed | 100x faster | Faster than traditional systems |
    | Language | Scala | Java |
    | Processing | Batch, real-time, iterative, interactive | Batch only |
    | Ease of Use | Simple & compact | Complex & lengthy |
    | Caching | Supports in-memory caching | No caching |

# NoSQL

1.  NoSQL Databases

    -   NoSQL (Not Only SQL) databases store data in a non-tabular format, unlike relational databases.
    -   They come in different models based on their schema design.

2.  Types of NoSQL Databases

    -   Column-Family (Wide-Column) Stores: Store data in tables, rows, and dynamic columns.
    -   Graph Databases: Store data as nodes and edges to represent relationships.
    -   Document Databases: Use JSON-like objects with embedded fields and values.
    -   Key-Value Stores: Store data as key-value pairs for fast lookups.

3.  SQL vs. NoSQL Databases

    | Feature | SQL Databases | NoSQL Databases |
    |:---|:---|:---|
    | Data Model | Structured tables with fixed schema | Flexible schema (JSON, key-value, column-family, graph) |
    | Development History | 1970s, designed to reduce duplication | 2000s, optimised for scalability and agile applications |
    | Examples | MySQL, PostgreSQL, SQL Server, Oracle | MongoDB, Redis, Cassandra, Neo4j, Amazon DynamoDB |

4.  SQL databases store data in structured tables with fixed columns, while NoSQL databases store data in non-tabular and flexible schema. For example, in document databases, data is stored as documents in JSON format, each SQL column becomes a field, and values are stored within JSON objects.

## Big Data and Right Data

1.  Real-World AI with Big Data

    -   More data ≠ better results&mdash;quality matters more than quantity.
    -   Training data is more crucial than the model itself.
    -   Academic models focus on proving functionality, while real-world AI must use the right data for production.
    -   Industry prioritisation: Companies like Tesla focus more on data collection than model tweaking.

2.  AI with the Right Data

    Example: Self-Driving Cars

    -   AI must understand its environment, not just navigate.
    -   Obstacle detection involves recognising, measuring, and navigating around objects.
    -   Pedestrian recognition is complex:
        -   initially, models learn from labelled images.
        -   However, edge cases (wheelchairs, reflections, posters) introduce challenges.
        -   Inconsistent labelling can confuse the model.

3.  Data Annotation

    -   Big tech companies invest millions in annotating data for AI training.
    -   Annotation is not automatic&mdash;humans label data until AI can self-annotate.
    -   The first dataset is critical for model performance.
    -   AI developers must decide how data is annnotated based on domain knowledge.

4.  Challenges in Using the Right Data

    -   Data availability: Need reliable sources.
    -   Data validity: Must stay updated through re-annotation.
    -   Data consistency: Unified formats across sources.
    -   Data coverage: A dataset is only a finite sample, leading to bias risks.
