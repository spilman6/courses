---
title: Web API with Express.js
subtitle: Modern JavaScript
hideNav: false

live: https://fvtc.software/appel/javascirpt_archive/web-api-with-express
---

# Web API with Express.js

Express.js is a web application framework for Node.js. It is designed for building web applications and APIs.

## Getting Setup

We are going to create an API that returns a random joke.

Create a new directory for your project called `joke-api` and open it with Visual Studio Code.

In your project directory, create a new file called `app.js`.

Run the following commands to initialize your project and install Express.js:

```bash
npm init -y

npm install express
```

## Creating a Web API

Now we can start building our API. Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/ZmfMU47Ech8" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the code from the video:

```javascript
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (request, response) => {
	response.send('Hello World!')
})

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})
```

## Responding with JSON

We can add more endpoints to our API. Let's add an endpoint that returns a random joke as a JSON object.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/omu7GiyPhh0" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the code from the video:

```javascript
// array of joke objects
const jokes = [
	{ "joke": "Why did the chicken cross the road?", "puchline": "To get to the other side!" }
	// Add more jokes here (shortened for brevity)
]

// allow express to parse JSON
app.use(express.json())

// create a new endpoint
app.get('/api/v1/random', (request, response) => {
	const randomIndex = Math.floor(Math.random() * jokes.length)
	response.json(jokes[randomIndex])
})
```

## Responding with HTML

We can also respond with HTML. Let's add an endpoint that returns an HTML page.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/8lLNjhOh2cw" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is what we added to our `app.js` file:

```javascript
// add path module
const path = require('path')

// root of the static files
const root = path.join(__dirname, 'public')

// added middleware to serve static files
app.use(express.static('public'))

// changed root route to serve an HTML file
app.get('/', (request, response) => {
	  response.sendFile('index.html', { root })
})
```

Here is the HTML file that we created in the video:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="styles/site.css">
	<script src="scripts/site.js" defer></script>
</head>
<body>
	<div class="joke">
		<h1>Random Joke</h1>
		<p>Joke will go here</p>
		<p class="punchline">Punchline will go here</p>
		<button>Get Joke</button>
	</div>
</body>
</html>
```

Here is the `site.js` file that we created in the video:

```javascript
const getJoke = async () => {
	const response = await fetch('/api/v1/random')
	const data = await response.json()
	console.log(data)
}

getJoke()
```

Continuing on, we will get our joke to display and do some miscellaneous clean up.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/PYpT14oSnFw" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the [link to the stylesheet](https://gist.github.com/RDAppel/e99a30f281d61225acfe2549524095a1) that we used in the video.

And here is the updated `site.js` file:

```javascript
const getJoke = async () => {
	const response = await fetch('/api/v1/random')
	const { joke, punchline } = await response.json()
	
	document.querySelector('.joke p').textContent = joke
	document.querySelector('.joke .punchline').textContent = punchline
}

getJoke()
document.querySelector('.joke button').addEventListener('click', getJoke)
```

## Removing Duplicate Jokes

Next we'll keep track of the joke that we received, and make sure we don't get the same joke twice in a row.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/wLM-fa6Hta8" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here are the updates we made to our `app.js` file:

```javascript
const jokes = [
	{ "joke": "Why did the chicken cross the road?", "punchline": "To get to the other side!" },
	// Add more jokes here (shortened for brevity)
].map((joke, id) => ({ id, ...joke })) // add id to each joke

// new endpoint that excludes a joke by id
app.get('/api/v1/random/exclude/:id', (request, response) => {
	const { id } = request.params
	const filteredJokes = jokes.filter(joke => joke.id.toString() !== id)
	const randomIndex = Math.floor(Math.random() * filteredJokes.length)
	response.json(filteredJokes[randomIndex])
})
```

And here is the updated `site.js` file:

```javascript
let ignoreId = -1

const getJoke = async () => {
	const response = await fetch(`/api/v1/random/exclude/${ignoreId}`)
	const { id, joke, punchline } = await response.json()
	
	ignoreId = id
	document.querySelector('.joke p').textContent = joke
	document.querySelector('.joke .punchline').textContent = punchline
}

getJoke()
document.querySelector('.joke button').addEventListener('click', getJoke)
```

## Adding a new Joke

Finally, we will add an endpoint that allows us to add a new joke to our list of jokes. We'll use a Visual Studio Code extension called REST Client to test our new endpoint.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/DacEX7A8C7Q" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the code we added to our `app.js` file:

```javascript
app.post('/api/v1/new',  (request, response) => {
	const { joke, punchline } = request.body
	jokes.push({ id: jokes.length, joke, punchline })
	response.json({ message: 'New joke added!' })
})
```

And here is the REST Client code we used to test our new endpoint:

```http
### Variables
@url = http://localhost:3001

### Get random joke
GET {{url}}/api/v1/random

### Add joke
POST {{url}}/api/v1/new
Content-Type: application/json

{
  "joke": "This is a joke",
  "punchline": "This is a punchline"
}
```

## Handling Errors

We can add error handling to our API. Let's add a 404 handler to our `app.js` file.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/YfJEDCd5m7k" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the code we added to our `app.js` file:

```javascript
app.use((request, response) => {
	response.status(404).sendFile('404.html', { root })
})
```

And here is the `404.html` file we created:

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<link rel="stylesheet" href="styles/site.css">
	<script src="scripts/site.js" defer></script>
</head>

<body>
	<div class="error">
		<h1><span>404</span><p>The page could not be found.</p></h1>
	</div>
</body>

</html>
```


# Exercises

[ Web Api with Express Exercises](/appel/javascript/web-api-with-express-exercises)