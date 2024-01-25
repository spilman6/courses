---
title: 'Objects and Functions - Exercises'
subtitle: 'Modern JavaScript'
---

# INCOMPLETE!

Please note that this page is incomplete. It is still being worked on as of 1/24/2024.

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
	<div>
		<h1 class="title"></h1>
		<h2>
			<span class="year"></span>
			<span class="genre"></span>
		</h2>
		<p class="description"></p>
	</div>
	<div>
		<h1 class="title"></h1>
		<h2>
			<span class="year"></span>
			<span class="genre"></span>
		</h2>
		<p class="description"></p>
	</div>
	<div>
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
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
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