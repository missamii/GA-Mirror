
# SQL 101

### Lesson Objectives
- Explain relational databases (RDBs)
- Describe Entity Relational Diagrams
- Identify & diagram 3 relationship types
- Define foreign key
- Install PostgreSQL
- Create & manipulate SQL databases using basic CRUD commands
- Give some reasons why you would choose a relational or a non DB for your app



---

## Part I: Visualizing Database Relationships


### DB vs. DBMS
- SQL stands for `structured query language`; it is a structured language that allows you to query a DB
- SQL is the DB language; PostgreSQL is the Database Management System (DBMS)
- There are several other SQL DBMSs, such as MySQL, SQLite, etc. They are all very similar, with slightly different features & pros & cons.
- Each DBMS has its own, slightly different, version of SQL.
- MongoDB is the DBMS, which is a NoSQL (or non sql) DB; written in JSON (or BSON)

### Terminology review
- **Database** - The actual set of data being stored. We may create multiple databases on our computer, usually one for each application.
- **Database Management System** - The software that lets a user interact (query) the data in a database. Examples are PostgreSQL, MySQL, MongoDB, etc.
- **Database CLI** - A tool offered by most DBMSs that allows us to query the database from the command line. For PostgreSQL, we'll use `psql`.
- **NoSQL Databases** - Stands for "No SQL", "Not SQL" or "Not Only SQL". Store data without using tables. More like 'big buckets' of data.

---

### ACID theory of databases
- Atomicity Consistency Isolation Durability
- *Note:* NoSQL DBs do not follow the ACID model
- Acid theory using the example of a bank account:
- **Atomicity:**
  - incomplete transactions will be reverted; meaning the DB tracks the transactions start to finish
  - From Greek ‘atoms’ meaning ‘indivisible’
- **Consistency:**
  - If one part of a transaction didn’t work, none of it works, which ensures that your DB goes from one valid state to another, no failures
- **Isolation:**
  - If two transactions happen simultaneously, or need to happen in conjunction, the DB should be able to isolate those activities and execute them both
- **Durability:**
  - After a transaction is successful, your data should persist continuously so you can always access it - if your computer dies, if your server crashes, if your data center burns down (you should be replicating to another data center), the data should still be available
  - Could unplug the DB and it’ll resume exactly where it left off

---

### What is a relational database?
- The most popular type of DB
- Tables are related to one another, unlike in Mongo, where entries do not necessarily have any relation to other entries
- Stores info in columns and rows, much like a spreadsheet

### SQL vs. MongoDB
Mongo:
- Databases
  - Collections
    - Documents
      - Fields

SQL:
- Databases
  - Tables
    - Columns
      - Rows


---


### Entities

Let's diagram an ERD for a book. What is some data we'd like to store about a book?
- title
- author
- year_published

| id | title | author | year_published
| --- | --- | --- | --- |
| 1 | "Gone with the Wind" | "Margaret Mitchell" | 1936
| 2 | "War and Peace" | "Leo Tolstoy" | 1865
| 3 | "Harry Potter & the Goblet of Fire" | "J.K. Rowling" | 2000


### Multiple entities

Let's say we're diagraming a library. What are our entities?

The library building (we'll call it a branch), users and books. Let's think of some attributes about the branch and the users.

Library branch:
- name
- address
- tel_num

| id | name | address | tel_num
| --- | --- | --- | --- |
| 1 | "Stephen A. Schwarzman branch" | "42nd st and 5th ave" | 5555555555
| 2 | "Ottendorfer Library" | "135 Second Avenue New York, NY, 10003" | 2126740947

Users:
- name
- tel_num
- lib_card_num
- books_checked_out

| id | name | tel_num | lib_card_num
| --- | --- | --- | --- |
| 1 | "Liza Ramo" | 5555555555 | 77777777
| 2 | "Ethan Friedman" | 8730239823 | 8349823098
| 3 | "Syed Salahuddin" | 2039802938 | 382402987


---


**Exercise:** With a partner, list the entities of a car dealership and diagram their ERDs.


---


Now that we've diagramed our entities, let's find out how to make them **relate** to each other.


---


### Relationships in SQL
- One to one
  - A country has one capital
- One to many
  - A single GA location has many cohorts
- Many to many
  - A single movie has many actors; A single actor has been in many movies


---


**Exercise:** Take 5 mins with a partner and come up with 3 examples of each type of relationship.


---


### ERDs & data
- Entity Relationship Diagrams are how we visualize the relationships and data relating to the major entities of our program.
- Lines connecting the entities denote relationship - a fork represents `many`, a notch represents `one`
- Data: Attributes of the entity; data that will be stored in our DB as columns.
- ---> Draw each relationship <---
- ---> Draw DB representation <---


### Example ERD for a real live app
- This is the ERD of an internal GA app called Garnet:
-
- ![](
https://raw.githubusercontent.com/ga-wdi-lessons/sql-intro/master/images/Garnet_ERD.png)

---

**Exercise:** Choose one of the examples you came up with in the previous exercise and draw their ERDs and relationships to each other using either a single line or crow's feet.


---

### Data types in SQL
- `VARCHAR`: varying character - a variable-length string with limit (default is 255 chars); use this for data such as `first_name`, `last_name`, etc.
- `TEXT`: variable unlimited length - use this for a string that may be a paragraph/couple of paragraphs long.
- `INT`
- `BOOLEAN`: allowed values are: `TRUE` or `FALSE`
- [Many more](http://www.postgresql.org/docs/9.1/static/datatype.html)

### Optional rules for data types: `Constraints`
- `UNIQUE` - means the value of that field must be unique; for example a `social security num`
- `NOT NULL`- means this field can't be empty
- `SERIAL` - increments by one; only applies to numbers

### Primary keys
- Every row in every table will have a unique ID, just like in Mongo.
- Unique, not null, serial ===  `primary key`
- Once an ID is used, it can never be used for that table again. So if you create `liza` in the students table & I have an ID of `3`, but then you delete me & add someone new, their ID will be `4`, even though now they are the third entry in that table.
- DB automatically assigns these


---


Before we move on, let's take a minute to think about our library example from the beginning of the lesson. We know that a single user can check out many books. How can we keep track of the books that a single user has checked out?


---


### Foreign keys in `1:many` relationships
- **Foreign key:** A key that references a row on a different table
- These are present in `1-to-many` relationships
- The foreign key goes on the `many` table
- For example, if there is a one-to-many relationship between `users` and `books` (a user has many books, a book only has one user), the FK goes on the `books` table
- Why does the FK go on the `many` table? If the FK were on the `users` table, you’d have to have several to reference that user’s several books; but if it’s on the books table, you only have one FK to represent the one user
- *Note:* Technically a 1:1 relationship needs FKs on each table, but if you have isolated 1:1 tables, you should just combine the tables.
- To illustrate why we use a FK instead of duplicating information or adding an array of IDs, let's look at an example:

### `1:many` example:
- Let's assume that each book has only one author (even though that's not always the case in the real world.)

Option 1 - Duplicate Info (Wrong :x:)
- authors:
  - name
  - nationality
  - birth_year
- books
  - title
  - pub_date
  - author_name ****
  - author_nationality ****
  - author_birth_year ****

**Downside:** duplication, keeping data in sync.

Option 2 - Array of IDs (Wrong :x:)
- authors:
  - name
  - nationality
  - book_ids ****
- books
  - title
  - pub_date

**Downside:** Parsing list, can't index (for speed!)

Option 3 (Correct! :white_check_mark:)
- authors
  - name
  - nationality
- books
  - title
  - pub_date
  - author_id

**Correct!**

---

### Join tables & `many:many` relationships
- In `many-to-many` relationships you use `join` tables
- A completely separate table that only contains foreign keys from the two tables.
- A query that accesses multiple tables at one time is called a `join` query
- Example: say you have two tables - `weather` and `cities` - and you want to list all the weather records together with the location of the associated city.
  - `SELECT * FROM weather, cities WHERE city = 'San Francisco';`


### Example `many:many`
- We're not going to go in-depth with many-to-many relationships today, here is a simple example:
- Consider if we wanted to add a categories table (e.g. fiction, non-fiction, sci-fi, romance, etc). Books can belong to many categories (i.e. a book might be a fiction/romance, or a history/non-fiction). And a given category has many books.
- Because of this, we can't put a book_id column on categories, nor a category_id column on books, either way, we might have more than one value in that field (a no-no in terms of performance).
- The solution is to create an additional table, which stores just the relationships between the two tables. Such a table is called a `join` table, and contains two `foreign key` columns.
- In our example, we might create a join table called 'book_category_maps', and each entry in this table would have a unique id, a book_id and a category_id. Each row would represent a specific book's association with a specific category.
- Here is the ERD for this:
- ![](https://raw.githubusercontent.com/ga-wdi-lessons/sql-intro/master/images/many_to_many.png)



---

### I do: Recording Industry app
- I draw ERD & data types: record company, artists, albums, songs

---

### You do: Draw ERD - Library example - 15 mins
- Draw an ERD for the following entities. For each, include the name of the data, the type of data it is, and any special rules. For example for library branches, you'd have a `name` of the library, which would be data type `varchar` and could have a constraint of `unique`.
- Assume books can only have one author
- Entities: Library branches, members, authors, books
- Branches: id, name, address
- Library members: id, first name, last name, birth year, library card number
- Authors: id, first name, last name, birth year, hometown
- Books: id, title, publishing company, publication date, author ID









---

## Part II: Manipulating Data in PSQL

### PSQL
- Cheatsheet

---

### You do: SQL Library lab
- Only the *basic* queries, not the *advanced* ones.


---
