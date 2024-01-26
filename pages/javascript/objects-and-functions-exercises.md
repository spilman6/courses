---
title: 'Objects and Functions - Exercises'
subtitle: 'Modern JavaScript'
---

# Setup HTML

We will be using the following HTML for the exercises:

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Objects and Functions Exercises</title>
</head>

<body>
	<div id="movie1">
		<h1 class="title"></h1>
		<h2>
			<span class="year"></span>
			<span class="genre"></span>
		</h2>
		<p class="description"></p>
	</div>
	<div id="movie2">
		<h1 class="title"></h1>
		<h2>
			<span class="year"></span>
			<span class="genre"></span>
		</h2>
		<p class="description"></p>
	</div>
	<div id="movie3">
		<h1 class="title"></h1>
		<h2>
			<span class="year"></span>
			<span class="genre"></span>
		</h2>
		<p class="description"></p>
	</div>
</body>
<script>

</script>
</html>
```

To make the page look a little nicer, add the following CSS:

```css
body {
	font-family: sans-serif;
	background-color: #f5f5f5;
	color: #333;
	margin: 0;
	padding: 0;
}

div {
	background-color: #fff;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	margin: 20px auto;
	max-width: 600px;
	padding: 20px;
}

h1 {
	font-size: 1.5em;
	margin: 0 0 10px;
}

h2 {
	font-size: 1.2em;
	margin: 0 0 10px;
}

p {
	margin: 0;
}

span {
	display: inline-block;
	font-family: monospace;
	margin-right: 10px;
}

.year {
	color: #999;
	font-style: italic;
	font-weight: lighter;
}
```

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/7jgo1nQ0Xf0" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, create three JavaScript objects, each representing a movie.

Feel free to use movies of your choice, or use the following:

| Title | Year | Genre | Description |
| --- | --- | --- | --- |
| Dune | 2021 | Science Fiction | Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy. |
| The Matrix | 1999 | Science Fiction | A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. |
| The Lord of the Rings: The Fellowship of the Ring | 2001 | Fantasy | A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron. |

Call the objects `movie1`, `movie2`, and `movie3`.

## Hints

<details>
	<summary>How do I create an object in JavaScript?</summary>

Using object literal syntax:

```js
const movie1 = {
	title: 'Dune',
	year: 2021,
	genre: 'Science Fiction',
	description: 'Feature adaptation of Frank Herbert\'s science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.'
}
```

</details>

## Solution

<details>
	<summary>Show the answer</summary>

```js
const movie1 = {
	"title": "Dune",
	"year": 2021,
	"genre": "Science Fiction",
	"description": "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy."
}

const movie2 = {
	"title": "The Matrix",
	"year": 1999,
	"genre": "Science Fiction",
	"description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."
}

const movie3 = {
	"title": "The Lord of the Rings: The Fellowship of the Ring",
	"year": 2001,
	"genre": "Fantasy",
	"description": "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
}
```

</details>

<details>
	<summary>Walkthrough Video</summary>
    	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/SSpjI8IFqZk" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 2

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/TU1_PA-cJcA" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Continuing with the previous exercise, create a function called `printMovie` that takes a movie object as a parameter and prints out the movie's title, and description.

**Do not use an arrow function!**

We used a lot of arrow function in this unit and I want you to get a bit practice with regular functions.

If you need a refresher on the syntax for regular functions, take a look:

<details>
	<summary>Function Example</summary>

This example will print the title of the movie:

```js
function printTitle(movie) {
	console.log(movie.title)
}
```

</details>

After you create the function, call it three times, passing in each of the movie objects you created in the previous exercise.

## Hints

<details>
	<summary>How do I call a function in JavaScript?</summary>

You use the name of the function, followed by parentheses, and any arguments you want to pass in.

This would call the `printTitle` function from the previous example:

```js
printTitle(movie1)
```

</details>

## Solution

<details>
	<summary>Show the answer</summary>

```js
function printMovie(movie) {
	console.log(movie.title)
	console.log(movie.description)
}

printMovie(movie1)
printMovie(movie2)
printMovie(movie3)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/Xmsh-NqUiis" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 3

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/ncf3MX060iA" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Continuing with the previous exercise, **create an arrow function** called `populateMovie` that takes an html element and a movie object as parameters.

The function should set the `textContent` of the elements on the page to the movie's title, year, genre, and description.

Use object destructuring to make it easier to access the properties of the movie object. You can do this either in the function's parameter list, or in the function body.

After you create the function, call it three times, passing in each of the movie objects you created in the previous exercise.

## Hints

<details>
	<summary>What is the syntax for an arrow function?</summary>

```js
const myFunction = (param1, param2) => {
	// function body
}
```

</details>

<details>
	<summary>What should I use as parameters?</summary>

You should pass in the HTML elements you want to populate, and the movie object you want to use.

```js
const populateMovie = (element, movieData) => {
	// function body
}
```

</details>

<details>
	<summary>How do I use object destructuring?</summary>

You can use object destructuring in the function's parameter list:

```js
const populateMovie = (element, { title, year, genre, description }) => {
	// function body
}
```

Or in the function body:

```js
const populateMovie = (element, movieData) => {
	const { title, year, genre, description } = movieData
	// function body
}
```

</details>

<details>
	<summary>How do I call the function?</summary>

```js
populateMovie(document.querySelector('#movie1'), movie1)
```

</details>

## Solution

<details>
	<summary>Show the answer</summary>

```js
const populateMovie = (element, { title, year, genre, description }) => {
	element.querySelector('.title').textContent = title
	element.querySelector('.year').textContent = year
	element.querySelector('.genre').textContent = genre
	element.querySelector('.description').textContent = description
}

populateMovie(document.querySelector('#movie1'), movie1)
populateMovie(document.querySelector('#movie2'), movie2)
populateMovie(document.querySelector('#movie3'), movie3)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/xpt8VK3t2gQ" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>

</details>
