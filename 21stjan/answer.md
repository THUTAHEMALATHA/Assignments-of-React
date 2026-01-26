# Schema Design Fundamentals - Theory

## 1. What schema design is and what a database schema represents

Schema design is the process of planning how data will be structured, stored, and related in a relational database. It defines tables, columns, data types, relationships, and constraints. A database schema represents the logical blueprint of the database. It does not store actual data but describes how data should be organized and validated.

**Example:** A schema for an e-commerce application may include tables such as `users`, `products`, and `orders`, along with relationships between them.

---

## 2. Why schema design is required before writing backend code

Schema design must be completed before backend development because backend logic depends on how data is structured. APIs, queries, and business rules rely on table relationships and constraints. Poor or changing schema design can break backend code and require frequent rewrites.

**Example:** Without defining foreign keys in advance, linking orders to users becomes complex later.

---

## 3. How poor schema design impacts data consistency, maintenance, and scalability

Poor schema design can lead to:

* **Data inconsistency:** Same data stored in multiple places may not match
* **Maintenance issues:** Updating data requires changes in many tables
* **Scalability problems:** Queries become slow as data grows

**Example:** Storing user email in both `users` and `orders` tables can cause mismatched data if the email is updated.

---

## 4. What validations are in schema design and why databases enforce them

Validations are rules applied to table columns to ensure data accuracy and integrity.

Common validations include:

* **NOT NULL:** Prevents empty values
* **UNIQUE:** Ensures values are not duplicated
* **DEFAULT:** Provides a default value
* **PRIMARY KEY:** Uniquely identifies each record

Databases enforce validations to prevent invalid data and reduce application-level errors.

**Example:** `email UNIQUE NOT NULL` ensures every user has a valid and unique email.

---

## 5. Difference between a database schema and a database table

| Database Schema                       | Database Table            |
| ------------------------------------- | ------------------------- |
| Overall database structure            | Stores actual data        |
| Contains multiple tables              | Represents one entity     |
| Defines relationships and constraints | Contains rows and columns |

A schema is the design, while a table is a component within that design.

---

## 6. Why a table should represent only one entity

Each table should represent a single real-world entity to keep data organized, avoid duplication, and simplify updates and queries.

**Example:** A `users` table should store only user-related data, not order or payment details.

---

## 7. Why redundant or derived data should be avoided in table design

Redundant or derived data increases storage usage, causes inconsistencies, and complicates updates.

**Example:** Storing `total_price` instead of calculating it from `quantity × price` can lead to incorrect values if prices change.

---

## 8. Importance of choosing correct data types while designing tables

Choosing correct data types improves performance, saves storage, and prevents invalid data.

**Examples:**

* Use `INT` for quantities
* Use `DATE` for dates
* Use `BOOLEAN` for true/false values

Incorrect data types can lead to logical errors and slow queries.

---

## Conclusion

Schema design is a critical foundation of relational databases. A well-designed schema ensures data consistency, simplifies bac