
# Single Table Databases

As our data becomes larger and more complex, we need to start thinking about more advanced ways to store it. The most common way is to use a database management system or DBMS. A DBMS is a software system that allows us to store, organize, and manage data. 

## Introduction to Databases

In the following video, we will learn about a few different types of databases and a brief overview of how they work.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/546kH96YSqs"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

## MySQL and MySQL Workbench

A source of some confusion for new students is the difference between MySQL and MySQL Workbench. MySQL is a database management system, while MySQL Workbench is a graphical user interface (GUI) that allows us to interact with MySQL. The following video will give a brief overview of these two tools.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/ZEmyVXtWr-M"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

## Entity Relationship Diagrams

An entity relationship diagram (ERD) is a visual representation of the relationships between entities in a database. It's the first step in designing a database and is a great way to visualize the structure of your data.

> [!NOTE]
> Technically we're not creating an ERD here because there is only one entity, and therefore there is no relationship. However, the process is the same. If you want to be more accurate, you can call it an `entity diagram`.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/S1q0cz_UI-0"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

### Column Attributes

When creating a table, we need to specify the attributes of each column. The following video will give a brief overview of the different column attributes we can use.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/QcHr-D9hG8M"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

For future reference, here is a list of the column attributes we can use:

- `DataType` - The type of data that can be stored in the column.
- `Primary Key` - A unique identifier for each row in the table.
- `Not Null` - The column cannot be empty.
- `Unique` - The column cannot contain duplicate values.
- `Binary` - The column contains binary data.
- `Unsigned` - The column can only contain positive values.
- `Zerofill` - If the column is not long enough to display the value, it will be padded with zeros.
- `Auto Increment` - The column will automatically increment by one for each new row.
- `Generated` - The column will be computed using an expression rather than stored in the table.
- `Default` - The column will be set to the specified value if no value is provided.

# Exercise 1

Create the `Students` table (shown in the previous video) in MySQL Workbench. If you were following along with the video, you can skip this exercise.

> [!NOTE]
> Remember that even though you're allowed to use spaces in your column names, it's not a great idea. In the future, when you're writing queries, you'll have to use backticks (\`) around the column names if they contain spaces. My advice is to use camel case instead. For example, `FirstName` instead of `First Name`.

```ebnf
ID: Integer, Primary Key
First Name: String (VARCHAR)
Last Name: String (VARCHAR)
Phone: String (VARCHAR)
```

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/4sBj8leGS98"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

# Exercise 2

Create an Entity Diagram, suitable to hold the following `Inventory` data:

```ebnf
Item ID: 2447
Description: "Pogo 32 oz. Water Bottle"
Vendor ID
```


<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/npZNtd1jGGk"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>


<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>


# Exercise 3

# Review Questions

1. What is a database management system (DBMS)?
<details>
	<summary>Answer</summary>
	A software system that allows us to store, organize, and manage data.
</details>

2. What is the difference between MySQL and MySQL Workbench?
<details>
	<summary>Answer</summary>
	MySQL is a database management system, while MySQL Workbench is a graphical user interface (GUI) that allows us to interact with MySQL.
</details>

3. What is an entity relationship diagram (ERD)?
<details>
	<summary>Answer</summary>
	A visual representation of the relationships between entities in a database.
</details>

4. What is a column attribute?
<details>
	<summary>Answer</summary>
	A property of a column that specifies how the data in the column should be stored.
</details>


