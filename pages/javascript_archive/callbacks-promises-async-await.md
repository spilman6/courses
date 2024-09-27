---
title: Callbacks, Promises, and Async/Await
subtitle: Modern JavaScript
hideNav: false

live: https://fvtc.software/appel/javascript_archive/callbacks-promises-async-await
---

# Callbacks

Callbacks are a way to handle asynchronous operations in JavaScript. They are functions that are passed as arguments to other functions and are called when the operation is complete.

Let's take a closer look at the `setTimeout` function.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/vsDge08vkUQ" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the starting code from the video:

```javascript
setTimeout(() => console.log('Hi'), 2000)
setTimeout(() => console.log('there!'), 2000)
setTimeout(() => console.log('How'), 2000)
setTimeout(() => console.log('are'), 2000)
setTimeout(() => console.log('you?'), 2000)
```

As you saw in the video, when setTimeout is called, but it doesn't block the execution of the code. Instead, it schedules the function to be called after a certain amount of time. This is an example of an asynchronous operation.

This causes a problem when we want to execute code in a specific order. For example, if we want to log "Hi there! How are you?" in that order, we can't use setTimeout as it is.

We can nest the setTimeout calls to achieve this, but this can lead to a situation called "callback hell". This is when you have a lot of nested callbacks, which can make the code hard to read and maintain.

```javascript
setTimeout(() => {
	console.log('Hi')
	setTimeout(() => {
		console.log('there!')
		setTimeout(() => {
			console.log('How')
			setTimeout(() => {
				console.log('are')
				setTimeout(() => {
					console.log('you?')
				}, 2000)
			}, 2000)
		}, 2000)
	}, 2000)
}, 2000)
```

We can refactor this code to make it a bit better. Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/yGqz-bPclX0" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```javascript
const printAfterDelay = seconds => (message, callback) => {
	setTimeout(() => {
		console.log(message)
		if (callback) callback()
	}, seconds * 1000)
}

const printAfter1s = printAfterDelay(1)

printAfter1s('Hi', () =>
	printAfter1s('there!', () =>
		printAfter1s('How', () =>
			printAfter1s('are', () =>
				printAfter1s('you?')))))
```

Much better! But we can do even better than this.

This is where Promises come in...

# Promises

Promises are a way to handle asynchronous operations in JavaScript. They are objects that represent a value that is not yet known, but will be resolved at some point in the future.

Let's modify the previous example to use Promises.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/5dmU0nDuxcg" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

As always, here is the code from the video:

```javascript
const logMessage = seconds => message => new Promise(resolve => {
	setTimeout(() => {
		console.log(message)
		resolve()
	}, seconds * 1000)
})

const logAfter1s = logMessage(1)

logAfter1s('Hi')
	.then(() => logAfter1s('there!'))
	.then(() => logAfter1s('How'))
	.then(() => logAfter1s('are'))
	.then(() => logAfter1s('you?'))
```

This code is much cleaner and easier to read than the previous examples. We can see the order of execution clearly, and we can handle errors more easily.

We are actually going to make this even better with Async/Await, but before we do that, we're going to take a quick detour and look at IIFEs.

# IIFEs

IIFE stands for Immediately Invoked Function Expression. It is a way to execute a function immediately after it is defined.

Here is an example of an IIFE:

```javascript
(() => console.log('Hello, world!'))()
```

This will log "Hello, world!" to the console, which is a really silly example. You could afterall just write `console.log('Hello, world!')` and get the same result. But IIFEs are useful when you want to create a new scope for your code, and you want to execute it immediately.

Additionally the `await` keyword can only be used inside an `async` function. So we can use an IIFE to create an `async` function and use `await` inside it.

For example:

```javascript
(async () => {
	// This is an async function, so you can use await inside it!
})()
```

This video explains IIFEs in more detail:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/CDH32DOpBpM" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Now that we understand IIFEs, let's take a look at async/await.

# Async/Await

Async/Await is a way to handle asynchronous operations in JavaScript. It is built on top of Promises, and it makes asynchronous code look and behave more like synchronous code.

Let's use async/await to refactor the previous example.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/TL58iZ1zExs" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code with the async/await delay function:

```javascript
const delaySeconds = seconds => {
	return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

// iife
(async () => {
	const numSeconds = .5

	await delaySeconds(numSeconds)
	console.log('Hi')
	await delaySeconds(numSeconds)
	console.log('there!')
	await delaySeconds(numSeconds)
	console.log('How')
	await delaySeconds(numSeconds)
	console.log('are')
	await delaySeconds(numSeconds)
	console.log('you?')
})()
```

> [!NOTE] I made a small refactor to the code in the video. I changed the setTimeout function to resolve the promise directly, instead of creating an anonymous function that resolves the promise.

Here is the promise from the video:

```javascript
new Promise(resolve => setTimeout(() => resolve(), seconds * 1000))
```

And here is the refactored promise:

```javascript
new Promise(resolve => setTimeout(resolve, seconds * 1000))
```

Note how we can have the setTimeout function resolve the promise directly, This is a small improvement that makes the code a bit cleaner.

# HTTP(S) Requests

One of the most common use cases for asyncronous code is making http/https requests. We are going to use the native https module to make a request to a server.

This video explains how to make a simple http request using the https module:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/6oIOqPffh1o" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```javascript
const https = require('https')

const url = 'https://swapi.dev/api/films/1/'

https.get(url, response => {
	let body = ''
	response.on('data', data => body += data.toString())
	response.on('end', () => console.log(JSON.parse(body).opening_crawl))
})
```

This code makes a request to the Star Wars API and logs the opening crawl of the first movie to the console.

Next let's create an async function to make the same request using async/await.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/AtXmvZ057Hs" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the resulting code:

```javascript
(async () => {

const https = require('https')

const getJsonFrom = async url => {
	return new Promise(resolve => {
		https.get(url, response => {
			let body = ''
			response.on('data', data => body += data.toString())
			response.on('end', () => resolve(JSON.parse(body)))
		})
	})
}

const json = await getJsonFrom('https://swapi.dev/api/films/1/')
console.log(json.opening_crawl)
})()
```

The last thing that we need to do before moving on...

## Error Handling

Asynchronous

We need to handle errors when making http requests. We can do this by adding a `.on('error', ...)` event listener to the request object.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/t6Ey-8R4IF4" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the updated http request code:

```javascript
https.get(url, (response, reject) => {
	let body = ''
	response.on('data', data => body += data.toString())
	response.on('end', () => resolve(JSON.parse(body)))
}).on('error', reject)
```

Here is the way to handle errors with the promise syntax:

```javascript
getJsonFrom('https://not-a-real-url')
	.then(json => console.log(json.opening_crawl))
	.catch(error => console.error(error))
```

And here is the way to handle errors with the async/await syntax:

```javascript
try {
	const json = await getJsonFrom('https://not-a-real-url')
	console.log(json.opening_crawl)
} catch (error) {
	console.error("There was a problem", error)
}
```

## API Call from a Browser

We can also make http requests from a browser using the fetch function. This is a modern way to make http requests in the browser, and it is built on top of Promises.

The syntax for fetch is significantly simpler than the native https module! Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/18guCtZuetc" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the JavaScript code from the video:

```javascript
(async () => {

	try {
		const div = document.querySelector('#vehicles')
		const response = await fetch('https://swapi.dev/api/vehicles/')
		const data = await response.json()
		const vehicles = data.results

		const isWalker = type => type.toLowerCase().includes('walker')

		vehicles
			.filter(({ vehicle_class }) => isWalker(vehicle_class))
			.forEach(({ name }) => {
				const p = document.createElement('p')
				p.textContent = name
				div.appendChild(p)
			})
	} catch (error) {
		console.log(error)
	}
	
})()
```

That's it! We have covered callbacks, promises, async/await, IIFEs, and http requests. We are now ready to move on to the exercises.

# Exercises

[Callbacks, Promises and Async/Await Exercises](/appel/javascript/callbacks-promises-async-await-exercises)


