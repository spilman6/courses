---
title: One-to-Many Relationships
subtitle: Data Access for Programmers
hideNav: false

live: https://fvtc.software/appel/data-access-for-programmers/one-to-many-relationships
---

# One-to-Many Relationships

In this unit, we're going to look at how to work with multi-valued data. It would be really convenient if entity attributes were always one-to-one, but that's not the case. For example, a customer can have multiple orders, and an order can have multiple items. In this unit, we'll look at how to work with these types of relationships.

## Single vs. Multi-Valued Attributes

As mentioned, an entity attribute can have multiple values. Let's look at some examples.

The following videos will use this data as a starting point.

| First Name | Last Name | Address          | Phone        | Departments      | Start Date | Pay Dates |
| ---------- | --------- | ---------------- | ------------ | ---------------- | ---------- | --------- |
| Jill       | Meyer     | 2533 Oakwood Ln. | 920 881-4345 | Sales, Marketing | 10/5/2017  | 10/15/2017, 11/1/2017, 11/15/2017, 12/1/2017, 12/15/2017, 1/1/2018 |

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/mqufmZsfigU" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Simple vs. Composite Data

Similar to how data is either single-valued, or multi-valued, data can also be simple or composite. Simple data is data that is not composed of other data, while Composite is composed of other data. For example, a person's age is simple data, while a person's name is composite data. The age is just a single number, while the name is composed of a first name and a last name.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/RQ-WYZNuI5Y" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Multi-Valued Attributes in JSON

Next, let's take the data above and put it into a JSON object. Starting with just the single-valued attributes, we would have:

```json
{
	"First Name": "Jill",
	"Last Name": "Meyer",
	"Address": "2533 Oakwood Ln.",
	"Phone": "920 881-4345",
	"Start Date": "10/5/2017"
}
```

In this video, we'll look at how arrays can be used to represent multi-valued attributes.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/PPHbJzCTQSA" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

And by adding the multi-valued attributes, we would have:

```json
{
	"First Name": "Jill",
	"Last Name": "Meyer",
	"Address": "2533 Oakwood Ln.",
	"Phone": "920 881-4345",
	"Start Date": "10/5/2017",
	"Departments": [
		"Sales",
		"Marketing"
	],
	"Paycheck Dates": [
		"10/15/2017",
		"11/1/2017",
		"11/15/2017",
		"12/1/2017",
		"12/15/2017",
		"1/1/2018"
	]
}
```

# Exercise 1

For this exercise, use the following data and create a JSON object that represents it.

| Company  | Vehicles      |
| ----     | ------------- |
| BMW      | X1, X2, X3    |
| Ford     | Mustang, F150 |
| Honda    | Civic, Accord |

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/QNeyUitUQgE" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

<details>
	<summary>Show the Answer</summary>

```json
[
	{
		"Company": "BMW",
		"Vehicles": [ "X1", "X2", "X3" ]
	}, 
	{
		"Company": "Ford",
		"Vehicles": [ "Mustang", "F150" ]
	},
	{
		"Company": "Honda",
		"Vehicles": [ "Civic", "Accord" ]
	}
]
```
</details>

# Programming Demos

There are a couple of simple programs preloaded onto your VM, that use arrays. One is in C#, and the other is in JavaScript. You can run them if you want, but you don't need to. They're just there for reference.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/9GvEQ04Sx7M" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

<details>
	<summary>Show the C# Code</summary>

```csharp
using System;

namespace demo1
{
	class Program
	{
		static void Main()
		{
			// create an array that holds 5 integers
			int[] arrayOfInts = { 5, 4, 3, 2, 1 };

			// iterate through the array, and print each number
			foreach (int number in arrayOfInts)
			{
				Console.WriteLine(number);
			}
		}
	}
}

```
</details>

<details>
	<summary>Show the JavaScript Code</summary>

```javascript
// create an array of integers (numbers)
const arrayOfNumbers = [ 5, 4, 3, 2, 1 ]

// iterate through the array, and print each number
arrayOfNumbers.forEach(number => {
	console.log(number)
})
```
</details>

# ERDs with Multi-Valued Attributes

Our next goal is to create databases that can hold multi-valued data. This video will show you the main problem with attempting to store multi-valued data in a relational database.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/AoQFzM0X_HQ" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## One-to-Many Relationships

As mentioned in the previous video, we are going to break up the multi-valued attributes into separate tables. This process is called Data Normalization, or just Normalization for short. We'll learn more about this in a couple of weeks but for today, let's create a couple of tables that will hold the data from the previous video, and then we'll link them together.

If you're not already logged into your VM, please login and follow along with the video.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/rsUhUTEKVQk" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Exercise 2

For this exercise, create an ERD that represents the following data.

> [!NOTE]
> You can create additional columns if you need (like for a Foreign Key).

| Employee ID | First Name | Last Name | Department  |
| ----------- | ---------- | --------- | ----------- |
| 1           | Phillip    | Nelson    | Sales       |
| 2           | Jim        | Tusker    | Management  |
| 3           | Patty      | Volt      | Management  |
| 4           | Cathy      | Zeinert   | Marketing   |
| 5           | Aaron      | Chime     | Sales       |
| 6           | Phillip    | Vue       | Marketing   |

Watch the video for the answer.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/XYEA7jh_fYg" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Exercise 3

For this exercise, create an ERD that represents the following data. For this one there's an additional Business Rule. A customer can only buy one type of cookie.

> [!NOTE]
> Like in the previous exercise, you can create additional columns as needed.

| Cookie Type     | Orders              |
| --------------- | ------------------- |
| Thin Mint       | Tim, Connie, Dave   |
| Caramel Delight | Joan, Bill          |
| Shortbread      | Bob                 |
| Peanut Butter   | Katy, Carrie, Betty |

Watch the video for the answer.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/qiSPiZLtvX8" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Creating a Multi-Table Database

Creating a database with multiple tables is pretty similar to what we did in the previously with single-table databases. There is an extra step however, so watch this video for details.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/bmM8OraGrdM" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Review Questions

1. Would a `Full Name` column (Ex: John B. Smith) hold simple or composite data?

<details>
	<summary>Show the Answer</summary>
	Composite
</details>

2. Would a column called `Last Service Date` be single-valued or multi-valued?

<details>
	<summary>Show the Answer</summary>
	Single-valued, because a vehicle can only have one last service date.
</details>

3. What does an array hold?

<details>
	<summary>Show the Answer</summary>
	An array holds multiple values of the same type.
</details>

4. Why are multi-valued fields considered bad?

<details>
	<summary>Show the Answer</summary>

1. They are difficult put into a database table directly.
2. We didn't discuss this above, but they are also difficult to search, update, sort, filter, etc.
</details>
