---
title: Many-to-Many Relationships
subtitle: Data Access for Programmers
hideNav: false

live: https://fvtc.software/spilman/data-access-for-programmers/many-to-many-relationships
---

# Many-to-Many Relationships

In this unit we will learn how to model many-to-many relationships in JSON, and in a relational database.

## JSON Relationships

Since we can use arrays in JSON, having many-to-many relationship is easy.  We just need to have an array of objects in each of the two entities.  For example, if we have a many-to-many relationship between `instructors` and `courses`, one way to model it could look like this:

```json
{
	"instructors": [
		{
			"ID": 12345,
			"Name": "Ryan Appel",
			"CourseIds": [ 56441, 51232, 51112 ]
		},
		{
			"ID": 23456,
			"Name": "Joe Wetzel",
			"CourseIds": [ 56441, 51232, 53421 ]
		}
	],
	"courses": [
		{
			"ID": 56441,
			"Name": "Data Access for Programmers",
		},
		{
			"ID": 51232,
			"Name": "PHP",
		},
		{
			"ID": 53421,
			"Name": "Intro to Mobile Development",
		},
		{
			"ID": 51112,
			"Name": "C++ Computer Programming",
		}
	]
}
```

This video talks about other ways we could model this relationship.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/Sdq83ShgXII" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## ERDs with Many-to-Many Relationships

When we have a many-to-many relationship, we need to create a third table to store the relationship.  This table is called a junction table.  The junction table will have two columns, each of which is a foreign key to the two tables that are related.  For example, if we have a many-to-many relationship between `Instructors` and `Courses`, we would create a junction table called `InstructorCourses`. 

In the following video, we will create this relationship.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/Ko5_hpkVblE" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

### Artificial Primary Keys

In the previous video, we created a junction table with a composite primary key. This is a good way to do it, but it is not the only way. This is shown in the following video.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/b-J-HocOiPg" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Database Script

Now that our ERDs are starting to get more complicated, it is a good idea to start scripting out our database. This will allow us to easily recreate our database if we need to. It will also allow us to easily share our database with others.

In this video, we will create a script for our database from the ERD we just created.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/LgsXSzxtOFM" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Querying our Database

Now that we have our database created, we can start querying it. In this video, we will write some queries to get data from our database.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/GQCiG11K6Ro" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Review Questions

1. What is a junction table?

<details>
	<summary>Show the Answer</summary>

A junction table is a table creates a many-to-many relationship between two tables.
</details>

2. What is a concatenated primary key?

<details>
	<summary>Show the Answer</summary>

A concatenated primary key is a primary key that is made up of two or more columns.
</details>

3. Why is it a good idea to script out your database?

<details>
	<summary>Show the Answer</summary>

It is a good idea to script out your database so that you can easily recreate it if you need to. It also makes it easy to share your database with others.
</details>
