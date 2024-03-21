---
title: 'Web API with Express.js'
subtitle: 'Modern JavaScript'
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
	// Add more jokes here
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

Here is the code from the video:

```javascript
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





### VIDEOS





<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>
