1. Why is db.json not suitable as a database for real projects?
A db.json file is a simple file-based storage system and is mainly used for learning, testing, or small demo projects. It is not suitable for real-world applications because of the following limitations:

Limitations of File-Based Storage
=>Performance Issues
File-based databases read and write the entire file for every operation. As data grows, this becomes slow and inefficient.

=>Scalability Problems
A JSON file cannot handle large amounts of data or increasing users. It does not support distributed systems or horizontal scaling.

=>Concurrency Issues
Multiple users accessing or modifying the file at the same time can cause data corruption because file locking is limited.

=>Reliability Issues
If the server crashes while writing to the file, data can be lost or corrupted.

=>No Advanced Features
JSON files do not support indexing, transactions, backups, authentication, or complex queries.

Hence, db.json is useful only for learning purposes and not for production-level applications.

2. What are the ideal characteristics of a database system (apart from just storage)?
A good database system provides much more than simple data storage. The ideal characteristics include:

=>All Changes Saved (Persistence)
Once data is stored, it should not be lost even if the system restarts or crashes.

=>Performance
The database should be able to read and write data quickly, even when handling large datasets.

=>Concurrency
Multiple users should be able to access and modify data at the same time without conflicts or data corruption.

=>Reliability
The system should ensure consistent and correct data even during failures or unexpected shutdowns.

=>Data Integrity
The database must enforce rules to ensure data accuracy and consistency (e.g., no duplicate or invalid data).

=>Scalability
The database should be able to handle growth in data and users without performance degradation.

=>Fault Tolerance
The system should recover automatically from failures such as hardware or network issues.

3. How many types of databases are there? What are their use cases or applications?
Databases are broadly classified into two main types:

1. Relational Databases (SQL)
Relational databases store data in structured tables with rows and columns and use SQL for querying.

Examples: MySQL, PostgreSQL, Oracle, SQL Server

Use Cases:

Banking and financial systems
Student management systems
Inventory and billing applications
Applications requiring strict data consistency and relationships
2. Non-Relational Databases (NoSQL)
Non-relational databases store data in flexible formats such as documents, key-value pairs, graphs, or columns.

Examples: MongoDB, Firebase, Redis, Cassandra

Use Cases:

Social media applications
Real-time chat applications
Big data and analytics
Applications with rapidly changing or unstructured data
Conclusion
Relational databases are best suited for structured and consistent data, while NoSQL databases are ideal for scalable, flexible, and high-performance applications.