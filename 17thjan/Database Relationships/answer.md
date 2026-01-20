Database Realtionships
Definition of databse Realtionship:
A database realtionship defines how data in one table is connected to data in another table using keys(primary key and foreign key). Realtionship reduce data duplication, maintain consistency, and allow meaning ful data retrivel across mulitple tables.

Types of Database Realtionships:

1. One to One (1:1):
Defintion:
Each record in table A is linked to exactly one record in table B and vice-versa 
E-commerce structure:
=> users(id,email, password)
=>user_profiles(id, user_id, address, phone)
user_profiles.user_id is a foreign key reffering users.id

Diagram:
Users User_Profiles
----- -------------
1 ───────────► 1
2 ───────────► 2update usser set user_id=80 where user_id =4

2. One to Many (1:N)
Defintion:
One record in table A can be relatesd to multiple records in table B but each record in table B relates to only one record in table A.
E-commerce structure:
=>Customers
=>orders
One customer can place many orders.
Example structure:
=> customers(id,name,email)
=> orders(id, customer_id, order_date)

orders.customers_id refernces customers_id.

Diagram:
Customer 1 ───► Order 1
├─► Order 2
└─► Order 3

3. Many to One(N:1)
Defintion:
Multiple records in table A are linked to a single record in table B
E-commerce Example:
=> Products
=> Categories
Many products belong to one category

Example structure:
=> category(id,name)
=>Products(id,name, category_id)
products.category_id refernces to category_id.

Diagram:
Product 1 ─┐
Product 2 ─┼──► Category
Product 3 ─┘

4. Many to Many (M:N)
Defintion:
Multiple records in table A are related  to multiple record in Table B . This require a junction table.
E-commerce Example:
=>orders
=>products
An order can contain many products, and a product can be part of many orders.
Example structure:
=>orders(id,order_date)
=>products(id,name,price)
=>order_items(order_id,product_id, quantity)
 both columns in order_items are foreign keys

 Diagram:
 Orders ───► Order_Items ◄─── Products

 Why reationships are important in E-commerce:
 => Prevents data duplication
 => Maintain data integrity
 => Enable complex queries(orders with products, customers with orders)
 => Reflects real-world business rules accurately.
 