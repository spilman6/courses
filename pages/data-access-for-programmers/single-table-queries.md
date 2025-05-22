---
title: Single Table Queries
subtitle: Data Access for Programmers
hideNav: false

live: https://fvtc.software/spilman/data-access-for-programmers/single-table-queries
---

# Single Table Queries

In this unit, we will continue learning SQL by looking at how to run queries on a single table. We will learn how to
select specific columns, filter rows, and sort the results. We will also learn how to use aggregate functions to
calculate summary statistics.

## Select Statements

In the last unit, we learned how to create a database and table, and how to insert data into the table. At the very end,
we learned how to run a query to retrieve all of the data from the table, using the `SELECT` statement.

In this unit, we will be using the Premiere Database, that is already loaded on your VM. Please follow along with this
video as we take a quick peek at the data in the database.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/v9-qsHv8UdI" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Selecting Columns

We often don't want to retrieve all of the columns from a table. Instead, we want to select specific ones. We can do
this by listing the column names after the `SELECT` statement, separated by commas.

```sql
SELECT CUSTOMER_NAME, CITY, STATE FROM customer
```

Just like running a query with `*`, this will return all of the rows from the table. However, it will only return the
columns that we specified. The order of the columns in the `SELECT` statement will be the order of the columns in the
result table.

> [!NOTE]
> Another name for a "result table" is a "result set," or a "virtual table." <br>
> The result set is not a physical table, but it is a table that exists in memory.

We can also rename the columns in the result table by using the `AS` keyword. This is called an "alias."

```sql
SELECT CUSTOMER_NAME AS NAME, CITY AS LOCATION, STATE FROM customer
```

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/xR0cGAFRWOw" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Comments and Commenting out Code

Comments are a way to add notes to your code. They are ignored by the database, so they don't affect the results of your
query. They are only there to help you and other programmers understand your code.

There are two types of comments in SQL. Single-line comments start with two dashes (`--`). Everything after the dashes
on that line will be ignored by the database.

```sql
-- This is a single-line comment
SELECT * FROM customer
```

This can also be used to comment out a line of code. This is useful if you want to run a query without a certain line of
code, but you don't want to delete that line.

```sql
SELECT CUSTOMER_NAME AS NAME --, CITY AS LOCATION, STATE
FROM customer
```

You can also use multi-line comments, which start with `/*` and end with `*/`. Everything between the `/*` and `*/` will
be ignored by the database.

```sql
SELECT CUSTOMER_NAME AS NAME /*, CITY AS LOCATION, STATE */ FROM customer
```

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/lWraqYwUYns" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Exercise 1

Using the Premiere Database, show all of the addresses (street, city, state, zip) for all of the customers, and have the
column name for the zip code be "ZIP_CODE".

<details>
	<summary>Show the Answer</summary>

```sql
SELECT STREET, CITY, STATE, ZIP AS ZIP_CODE FROM customer
```
</details>

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/wWrPESDDdao" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Filtering results

We often don't want to retrieve all of the rows from a table. Instead, we want to filter the rows based on certain criteria. We can do this by using the `WHERE` clause.

```sql
SELECT * FROM customer
WHERE CREDIT_LIMIT > 10000
```

Here is a list of the comparison operators that we can use in the `WHERE` clause:

| Operator | Description              |
| -------- | ------------------------ |
| =        | Equal to                 |
| <>       | Not equal to             |
| <        | Less than                |
| <=       | Less than or equal to    |
| >        | Greater than             |
| >=       | Greater than or equal to |

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/dVnL78H3clY" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## And and Or Operators

We can also combine multiple conditions in the `WHERE` clause using the `AND` and `OR` operators.

```sql
SELECT * FROM customer WHERE CITY = "Grove"
	AND CREDIT_LIMIT < 10000 AND BALANCE < 200
```

```sql
SELECT * FROM customer
WHERE CITY = "Grove" OR CITY = "Northfield"
```

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/5WACZL2IGio" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Distinct Keyword

We can use the `DISTINCT` keyword to remove duplicate rows from the result set.

```sql
SELECT DISTINCT CITY FROM customer
```

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/lCZneOlkAzU" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Wildcards and the Like Operator

Sometimes we want to filter rows based on a pattern. We can do this using the `LIKE` operator and wildcards.

The `%` is a wildcard that matches any number of characters.

This query will return all of the customers whose city starts with "G":

```sql
SELECT * FROM customer WHERE CITY LIKE "G%"
```

And this query will return all of the customers whose city ends with "field":

```sql
SELECT * FROM customer WHERE CITY LIKE "%field"
```

 The `_` is a wildcard that matches exactly one character.

This query will return all of the customers whose city has exactly 6 characters:

```sql
SELECT * FROM customer WHERE CITY LIKE "______"
```

Let's see it in action.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/1w8yLlmXP6M" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Null Values

Sometimes a column will not have a value for a particular row. This is called a "null" value. We can use the `IS NULL` and `IS NOT NULL` operators to filter rows based on whether or not a column has a null value.

```sql
SELECT * FROM customer WHERE STREET IS NULL
```

```sql
SELECT * FROM customer WHERE STREET IS NOT NULL
```

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/BXfIEb7HkDE" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Limit and Order By

Another way to filter rows is to use the `LIMIT` keyword. This will limit the number of rows that are returned.

```sql
SELECT * FROM customer LIMIT 3 -- This will return the first 3 rows
```

We can add another term to the `LIMIT` clause to specify the offset.

```sql
SELECT * FROM customer LIMIT 3, 3 -- This will return rows 4, 5, and 6
```

We can also sort the rows using the `ORDER BY` clause. By default, the rows will be sorted in ascending order. We can use the `DESC` keyword to sort in descending order.

```sql
SELECT * FROM customer ORDER BY BALANCE LIMIT 3 -- Get the 3 customers with the lowest balance
```

```sql
SELECT * FROM customer ORDER BY BALANCE DESC LIMIT 3 -- Get the 3 customers with the highest balance
```

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/229n2VPb8PI" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Exercise 2

Using the customer table in the Primer Database, show the city with the zip code 33321. Only show one result.

<details>
	<summary>Show the Answer</summary>

Using the `LIMIT` keyword:

```sql
SELECT CITY FROM customer WHERE ZIP = 33321 LIMIT 1
```
Or you could use the `DISTINCT` keyword:

```sql
SELECT DISTINCT CITY FROM customer WHERE ZIP = 33321
```
</details>

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/-KpbOKoYyEA" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Exercise 3

Show the customer names and their balances of all customers that have "shop" or "store" in the name. Also, show the balances, and order the results by balance from highest to lowest.

<details>
	<summary>Show the Answer</summary>

```sql
SELECT CUSTOMER_NAME, BALANCE FROM customer
WHERE CUSTOMER_NAME LIKE "%shop%" OR CUSTOMER_NAME LIKE "%store%"
ORDER BY BALANCE DESC
```
</details>

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/Od5_A58w7nU" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Aggregate Functions

SQL has a number of built-in functions that we can use to calculate summary statistics. These are called "aggregate functions." There are 5 aggregate functions that we will be using in this course: `COUNT`, `SUM`, `MIN`, `MAX`, and `AVG`.

For the following examples, we will be using the `part` table in the Premiere Database.


## Count Function

The `COUNT` function will count the number of rows in the result set.

```sql
SELECT COUNT(*) FROM part
```

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/66lyi4ZE6Jc" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Sum Function

The `SUM` function will add up all of the values in a column.

```sql
SELECT SUM(ON_HAND) FROM part
```

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/VKtZp6A0Jqs" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Min, Max, and Avg Functions

The `MIN`, `MAX`, and `AVG` functions will find the minimum, maximum, and average values in a column, respectively.

```sql
SELECT DESCRIPTION, MIN(PRICE) FROM part
```
> [!WARNING]
> There are definitely some caveats to using these functions. The following video will explain some of the issues that you may run into.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/ZcvBseCCfgA" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Exercise 4

How many "HouseWare" items do we have on hand that cost over $30?

> [!NOTE]
> By "HouseWare" items, we mean items that have a class of "HW". So start by filtering the rows based on the class.

<details>
	<summary>Show the Answer</summary>

```sql
SELECT sum(ON_HAND) FROM part WHERE CLASS = "HW" AND PRICE > 30
```
</details>

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/VH35GKPjRyc" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Exercise 5

What is the average price of the items in warehouse 3?

<details>
	<summary>Show the Answer</summary>

```sql
SELECT AVG(PRICE) FROM part WHERE WAREHOUSE_ID = 3
```
</details>

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/CZLV0L7eqJk" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Additional Practice

Posted in Blackboard are some additional practice problems, along with the solutions. Please work through these before you begin the assignment. If you have any questions, post them in the Teams channel, because other students may have the same question.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/FLXRKxir47A" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Programming Demos

It has been a while since we have looked at any programming demos. In this video, we will look at a couple of programs, one written in JavaScript and one in Python, that connect to the premiere database, and select the customers.

> [!NOTE]
> I don't expect you to understand everything that is going on in these programs. That being said, I would encourage you to try to run them yourself, and then modify the SQL queries to see what happens.


<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/qh_OxubWSDY" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Review Questions

1. What is a column alias?

<details>
	<summary>Show the Answer</summary>
	A column alias is a way to rename a column in the result set.
</details>

2. What is a result table?

<details>
	<summary>Show the Answer</summary>
	A result table is a table that exists in memory, but not in the database. It is the result of a query.
</details>

3. What rows will show if a query was run with: LIMIT 2, 4?

<details>
	<summary>Show the Answer</summary>
	Rows 3, 4, 5, and 6.
</details>

4. What is the difference between the `LIKE` and `=` operators?

<details>
	<summary>Show the Answer</summary>
	The `LIKE` operator is used with wildcards, while the `=` operator is used to match an exact value.
</details>

5. What is the difference between the `IS NULL` and `IS NOT NULL` operators?

<details>
	<summary>Show the Answer</summary>
	The `IS NULL` operator is used to match rows that have a null value, while the `IS NOT NULL` operator is used to match rows that do not have a null value.
</details>

6. Will a query that uses `AND`, or a query that uses `OR` likely, return more rows?

<details>
	<summary>Show the Answer</summary>
	A query that uses `OR` will likely return more rows, because it will match rows that match either condition.
</details>

7. Arrange the following keywords in the order they would need to be in, in order to run a query: `FROM`, `LIMIT`, `WHERE`, `SELECT`, `ORDER BY`.

<details>
	<summary>Show the Answer</summary>
	`SELECT`, `FROM`, `WHERE`, `ORDER BY`, `LIMIT`
</details>

8. Why do we need to be careful when using aggregate functions?

<details>
	<summary>Show the Answer</summary>
	Because they will return a single value for the entire result set, so they will not return the same number of rows as the original table.
</details>

9. What is the difference between the `COUNT` and `SUM` functions?

<details>
	<summary>Show the Answer</summary>
	The `COUNT` function will count the number of rows in the result set, while the `SUM` function will add up all of the values in a column.
</details>

10. What are the 5 aggregate functions that we covered in this unit?

<details>
	<summary>Show the Answer</summary>
	`COUNT`, `SUM`, `MIN`, `MAX`, and `AVG`.
</details>