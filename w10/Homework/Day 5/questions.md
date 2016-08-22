# SQL Homework
---
What are the SQL commands to:

Find all Users => `SELECT * FROM Users`

Change a User's name to "Donald Drumpf" => ` UPDATE user SET name = 'Donald Drumpf' WHERE id = 4;`

Select all Users who are over 25 years old => `SELECT * FROM Users WHERE Age > 25;`

Find all Users who have written at least 2 Posts => ``

Update a Comment of your choice (new content of your choice) => `UPDATE Comment SET COMMENT = 'Hello World. Thank you for making me alive!' WHERE id = 3;`

Perform at least 3 other SQL queries, at least two of which must involve a Join. List them below:
=> `SELECT * FROM POSTS CROSS JOIN comments;
SELECT * FROM comments INNER JOIN sub_comments on comments.id = sub_comments.comments_id;
SELECT * FROM users WHERE first_name = 'Lo';`

---
Of course if I was able to Perform these actually commands in terminal, this is what I think they would work as. Answer research from link below

This helped me figure out Cross Join:
http://www.sqlitetutorial.net/sqlite-cross-join/

For Inner Join(confusing tho):
http://www.sqlitetutorial.net/?s=INNER+JOIN

Last I think is simpler. We did demo this in class via our Labs.
