---
title: 'Web API with Express.js - Exercises'
subtitle: 'Modern JavaScript'
---

# Getting Started

In this exercise, you will create a simple web API using Express.js that returns a random color.

You will also be creating an index page that displays the color returned by the API.

## Getting Setup

Create a new directory for your project called `color-api` and open it with Visual Studio Code.

In your project directory, create a new file called `app.js`.

Run the following commands to initialize your project and install Express.js:

```bash
npm init -y

npm install express
```

# Exercise 1

Creating the Color API

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Create a new file called `color-codes.json` and add the following JSON data to it:

```json
[
	"#c13847",
	"#afe900",
	"#283b9d",
	// add your colors here
]
```

Then add two or three additional colors of your choice to the file. You can use the color picker tool at [https://www.w3schools.com/colors/colors_picker.asp](https://www.w3schools.com/colors/colors_picker.asp) to find the hex codes for the colors.

Modify your `app.js` file to send a random color from the `color-codes.json` file when a `GET` request is made to the `/api/v1/color/random` endpoint.

It should return a JSON object with the following structure:

```json
{ "color": "#c13847" }
```

Test the Endpoint by running the application and visiting the endpoint in your browser.

## Hints {#exercise-1-hints}

<details>
	<summary>How do I read the JSON file?</summary>

You can just use the `require` function to read the JSON file. For example:

```javascript
const colors = require('./color-codes.json')
```

</details>

<details>
	<summary>How do I create an endpoint?</summary>

You can use the `app.get` method to create a new endpoint. For example:

```javascript
app.get('/api/v1/color/random', (request, response) => {
	// Your code here
})
```

</details>

<details>
	<summary>How do I send a JSON response?</summary>

You can use the `response.json` method to send a JSON response. For example:

```javascript
response.json({ color })
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the answer</summary>

app.js:

```javascript
const express = require('express')
const colors = require('./color-codes.json')

const app = express()
const port = 3000

app.use(express.json())

app.get('/api/v1/color/random', (request, response) => {
	const randomIndex = Math.floor(Math.random() * colors.length)
	const color = colors[randomIndex]
	response.json({ color })
})

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 2

Add static route handling to serve the `index.html` file.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Create a new directory called `public` in your project directory.

In the `public` directory, create a new file called `index.html` and add the following HTML code to it:

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<script src="site.js" defer></script>
</head>

<body>
	<div class="color">
		<p>Color will go here.</p>
		<button>New Color</button>
	</div>
</body>

</html>
```

Use the [stylesheet found here](https://gist.github.com/RDAppel/ea0ff788b216f3bf7ed0ef687526c6b0), either by downloading it or copying the contents into a new file called `site.css` in the `public` directory.

Modify your `app.js` file to serve the `index.html` file when a `GET` request is made to the root endpoint (`/`).

Test the application by running it and visiting `http://localhost:3000` in your browser.

## Hints {#exercise-2-hints}

<details>
	<summary>How do I serve static files?</summary>

You can use the `express.static` middleware to serve static files. For example:

```javascript
app.use(express.static('public'))
```

And then respond with the `index.html` file using the `response.sendFile` method.

```javascript
app.get('/', (request, response) => {
	response.sendFile('index.html', { root })
})
```

Making sure to define the `root` variable at the top of your `app.js` file.

```javascript
const path = require('path')
const root = path.join(__dirname, 'public')
```

</details>

## Solution {#exercise-2-solution}

<details>
	<summary>Show the answer</summary>

app.js:

```javascript
const express = require('express')
const colors = require('./color-codes.json')
const path = require('path')

const app = express()
const port = 3001

const root = path.join(__dirname, 'public')

app.use(express.json())
app.use(express.static('public'))

app.get('/', (request, response) => {
	response.sendFile('index.html', { root })
})

app.get('/api/v1/color/random', (request, response) => {
	const randomIndex = Math.floor(Math.random() * colors.length)
	const color = colors[randomIndex]
	response.json({ color })
})

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 3

Add a site.js file to your project that fetches the color from the API and updates the color on the page.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

The background color of the `div` with the class `color` should change to the color returned by the API when the "New Color" button is clicked, and the color should be displayed in the `p` tag.

The code to change the background color of the `div` is:

```javascript
element.style.backgroundColor = color
```

## Hints {#exercise-3-hints}

<details>
	<summary>How do I fetch data from an API?</summary>

You can use the `fetch` function to make a request to the API. For example:

```javascript
const response = await fetch('/api/v1/color/random')
const data = await response.json()
```

</details>

## Solution {#exercise-3-solution}

<details>
	<summary>Show the answer</summary>

site.js:

```javascript
const div = document.querySelector('.color')
const p = div.querySelector('p')

const updateColor = async () => {
	const response = await fetch('/api/v1/color/random')
	const { color } = await response.json()

	div.style.backgroundColor = color
	p.textContent = color
}

updateColor()
div.querySelector('button').addEventListener('click', updateColor)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>




