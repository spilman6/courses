---
title: 'Many-to-Many Relationships'
course: 'Data Access for Programmers'
previous: 'Advanced Joins, Views, and Procedures'
next: 'Database Normalization'
---

# Many-to-Many Relationships

In this unit we will learn how to model many-to-many relationships in JSON, and in a relational database.

# JSON with Many-to-Many Relationships

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
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>



<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/Sdq83ShgXII" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>