---
title: 'Multi-Table Queries'
course: 'Data Access for Programmers'
previous: 'One-to-Many Relationships'
next: 'Advanced Joins, Views, and Procedures'
---

# Multi-Table Queries

Now that we have created databases with multiple tables, we can start to query data from multiple tables. This lesson covers the `JOIN` statement, which is used to combine data from multiple tables.

## Joining Tables

In the following video we'll be using the "Henry" database to demonstrate how to join tables. It's already installed on your Virtual Machine, so please open it up, and follow along.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/bmM8OraGrdM" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the final query from the video:

```sql
SELECT * FROM book
JOIN publisher ON book.PUBLISHER_CODE = publisher.PUBLISHER_CODE
JOIN inventory ON book.BOOK_CODE = inventory.BOOK_CODE
```