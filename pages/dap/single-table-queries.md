---
title: 'Single Table Queries'
course: 'Data Access for Programmers'
previous: 'Single Table Databases'
next: 'Group By and Having Statements'
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

| Operator | Description |
| --- | --- |
| = | Equal to |
| <> | Not equal to |
| < | Less than |
| <= | Less than or equal to |
| > | Greater than |
| >= | Greater than or equal to |

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

# Limit and Order By

# Exercise 2

# Exercise 3

# Aggregate Functions

## Count Function

## Sum Function

## Min, Max, and Avg Functions

# Exercise 4

# Exercise 5

# Additional Practice

# Programming Demos

--------------------

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
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