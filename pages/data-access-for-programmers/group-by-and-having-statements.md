---
title: 'Group By and Having Statements'
course: 'Data Access for Programmers'
previous: 'Single Table Queries'
next: 'One-to-Many Relationships'
---

# Group By and Having Statements

This lesson covers the `GROUP BY` and `HAVING` statements. These statements are used to aggregate data and filter the results of a query. 

## Aggregating Data

The `GROUP BY` statement is used to aggregate data. The result of a `GROUP BY` statement is a single row for each group.

```sql
SELECT * FROM customer GROUP BY CITY;
```

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/GkU6QjHyaoI" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Group By with Aggregate Functions

The `GROUP BY` statement is often used with aggregate functions. Starting with the `COUNT` function, the following query will return the number of customers in each city.

```sql
SELECT CITY, count(*) FROM customer GROUP BY CITY;
```

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/229n2VPb8PI" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Having Statement

The `HAVING` statement is used to filter the results of a query. The `HAVING` statement is similar to the `WHERE` statement, but it is used with `GROUP BY` statements. The following query will select the cities that the customers collectively have a balance less than 15000.

```sql
SELECT CITY, sum(BALANCE) FROM customer GROUP BY CITY HAVING sum(BALANCE) < 15000;
```

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/54DfYQDvH_Q" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Exercise 1

Show the cities that have multiple customers residing, that have balances of at least $1000.

For example, if we had the following data:

| CUSTOMER | CITY     | BALANCE |
|----------|----------|---------|
| Jim      | Appleton | 500     |
| Bob      | Appleton | 1000    |
| Joe      | Oshkosh  | 1500    |
| Sue      | Oshkosh  | 2000    |

The query would return only Oshkosh, because Appleton only has one customer with a balance of at least $1000.

<details>
	<summary>Show the Answer</summary>

```sql
SELECT CITY FROM customer WHERE BALANCE >= 1000 GROUP BY CITY HAVING count(*) > 1
```
</details>

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/2NL90gjPXoQ" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Review Questions

1. What statement (Where or Having) would you use to remove customers that live in a particular city?

<details>
	<summary>Show the Answer</summary>
	Where
</details>

2. What statement (Where or Having) would you use to remove customers that live in the same city as other customers?

<details>
	<summary>Show the Answer</summary>
	Having
</details>

3. Does using Group By change how an aggregate function works?

<details>
	<summary>Show the Answer</summary>
	Yes, it will return a single row for each group.
</details>