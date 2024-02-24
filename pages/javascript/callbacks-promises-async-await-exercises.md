---
title: 'Callbacks, Promises, and Async/Await - Exercises'
subtitle: 'Modern JavaScript'
---

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Create a function called `rollDice` that returns a promise. The roll should take 2 seconds to resolve. Use `setTimeout` to delay the resolution. The promise should resolve with a random number between 1 and 6.

You can use the `Math.random` function to generate a random number. The following code will generate a random number between 1 and 6:

```javascript
Math.floor(Math.random() * 6) + 1
```

Run your function by calling it and using `.then` to log the result to the console.

Run your function again using async/await (with an iife) instead of `.then` to log the result to the console.

## Hints {#exercise-1-hints}

<details>
	<summary>How do I return a promise from a function?</summary>

You can return a promise from a function by creating a new promise and returning it. Here's an example:

```javascript
const myFunction = () => {
	return new Promise(resolve => {
		// Your code here
	})
}
```

</details>

<details>
	<summary>How do I delay the resolution of a promise?</summary>

You can delay the resolution of a promise by using the `setTimeout` function. Here's an example:

```javascript
const myFunction = () => {
	return new Promise(resolve => {
		setTimeout(() => resolve('Hello, World!'), 2000)
	})
}
```

</details>

<details>
	<summary>How do I call a function that returns a promise?</summary>

You can call a function that returns a promise using the `.then` method. Here's an example:

```javascript
myFunction().then(result => console.log(result))
```

</details>

<details>
	<summary>How do I use async/await instead of .then?</summary>

You can use async/await instead of `.then` by using the `await` keyword. Here's an example:

```javascript
(async () => {
	const result = await myFunction()
	console.log(result)
})()
```

Or you can call your funcion inside of the console.log with await:

```javascript
(async () => {
	console.log(await myFunction())
})()
```

</details>


## Solution {#exercise-1-solution}

<details>
	<summary>Show the answer</summary>

```javascript
(async () => {

	const rollDice = () => {
		return new Promise(resolve => {
			const roll = Math.floor(Math.random() * 6) + 1
			setTimeout(() => resolve(roll), 2000)
		})
	}

	// using .then()
	rollDice().then(value => console.log(value))

	// using async/await
	console.log(await rollDice())

})()
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

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Modify the `rollDice` function from the previous exercise to take a parameter called `numberOfSides`. The function should return a promise that resolves with a random number between 1 and `numberOfSides`.

Run your function by calling it with different values for `numberOfSides`. You can use `.then` or async/await to log the result to the console.

Once you have that working, modify the function to reject the promise if `numberOfSides` is less than 1. You can use `.catch` or try/catch to handle the rejection.

## Hints {#exercise-2-hints}

<details>
	<summary>How do I add a parameter to a function?</summary>

You can add a parameter to a function by adding it inside the parentheses. Here's an example:

```javascript
const myFunction = (parameter) => {
	// Your code here
}
```

</details>

<details>
	<summary>How do I reject a promise?</summary>

You can reject a promise by calling the `reject` function that's passed to the promise's executor function. Here's an example:

```javascript
const myFunction = (parameter) => {
	return new Promise((resolve, reject) => {
		if (parameter < 1) {
			reject('Error: parameter must be greater than 0')
		} else {
			resolve('Success!')
		}
	})
}
```

</details>

<details>
	<summary>How do I handle a rejected promise?</summary>

If you're using `.then`, you can use the `.catch` method to handle a rejected promise. Here's an example:

```javascript
myFunction()
	.then(result => console.log(result))
	.catch(error => console.error(error))
```

If you're using async/await, you can use a try/catch block to handle a rejected promise. Here's an example:

```javascript
(async () => {
	try {
		console.log(await myFunction())
	} catch (error) {
		console.error(error)
	}
})()
```

</details>

## Solution {#exercise-2-solution}

<details>
	<summary>Show the answer</summary>

```javascript
(async () => {

	const rollDice = numberOfSides => {
		return new Promise((resolve, reject) => {
			if (numberOfSides < 1) {
				reject('Error: numberOfSides must be greater than 0')
			} else {
				const roll = Math.floor(Math.random() * numberOfSides) + 1
				setTimeout(() => resolve(roll), 2000)
			}
		})
	}

	// using .then()
	rollDice(20)
		.then(value => console.log(value))
		.catch(error => console.error(error))

	// using async/await
	try {
		console.log(await rollDice(20))
	} catch (error) {
		console.error(error)
	}

})()
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

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Modify the `rollDice` to be a curried function. When you call `rollDice` with a number of sides, it should return a function that rolls a di with that number of sides.

For example:

```javascript
const rollD6 = rollDice(6)
const rollD20 = rollDice(20)

(async () => {
	console.log(await rollD6())
	console.log(await rollD20())
})()
```

> [!TIP] The function that `rollDice` returns should be parameterless.

## Hints {#exercise-3-hints}

<details>
	<summary>What is a curried function?</summary>

A curried function is a function that returns another function. Here's an example:

```javascript
const myFunction = parameter1 => () => {
	// Your code here
}
```

</details>

## Solution {#exercise-3-solution}

<details>
	<summary>Show the answer</summary>

```javascript
(async () => {

	const rollDice = numberOfSides => () => {
		return new Promise((resolve, reject) => {
			if (numberOfSides < 1) {
				reject('Error: numberOfSides must be greater than 0')
			} else {
				const roll = Math.floor(Math.random() * numberOfSides) + 1
				setTimeout(() => resolve(roll), 2000)
			}
		})
	}

	const rollD6 = rollDice(6)
	const rollD20 = rollDice(20)

	console.log(await rollD6())
	console.log(await rollD20())

})()
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

# Exercise 4

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Modify your `rollDice` function call an external api to get a random number between 1 and `numberOfSides`. You can use the following URL to get a random number between 1 and 6:

```plaintext
https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new
```

Changing the `max` parameter in the URL will change the maximum number that the API will return.

This url will return a random number between 1 and 20:

```plaintext
https://www.random.org/integers/?num=1&min=1&max=20&col=1&base=10&format=plain&rnd=new
```

> [!TIP] Don't overthink this. You're basically just replacing the `Math.random` and `setTimeout` with a call to the random.org API.

## Hints {#exercise-4-hints}

<details>
	<summary>How do I make an API request in JavaScript?</summary>

Remember to require the `https` module and use the `get` method to make the request. Here's an example:

```javascript
const https = require('https')

https.get('url', response => {
	let data = ''

	response.on('data', chunk => {
		data += chunk
	})

	response.on('end', () => {
		resolve(data)
	})
})
```

</details>

## Solution {#exercise-4-solution}

<details>
	<summary>Show the answer</summary>

```javascript
(async () => {

	const https = require('https')

	const rollDice = numberOfSides => () => {
		return new Promise((resolve, reject) => {
			if (numberOfSides < 1) {
				reject('Error: numberOfSides must be greater than 0')
			} else {
				const url = `https://www.random.org/integers/?num=1&min=1&max=${numberOfSides}&col=1&base=10&format=plain&rnd=new`

				https.get(url, response => {
					let data = ''

					response.on('data', chunk => {
						data += chunk
					})

					response.on('end', () => {
						resolve(parseInt(data))
					})
				})
			}
		})
	}

	const rollD6 = rollDice(6)
	const rollD20 = rollDice(20)

	console.log(await rollD6())
	console.log(await rollD20())

})()
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

# Exercise 5

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Switching over to the client side, create a new index.html file, using the following code:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Dice Roller</title>
	<style>
		#dice {
			font-size: 3em;
			margin: 0.5em;
			border: 2px solid black;
			border-radius: 0.25em;
			width: 2em;
			height: 2em;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	</style>
</head>
<body>
	<main>
		<div id="dice"></div>
		<select id="numSides">
			<option value="20">20 Sides</option>
			<option value="12">12 Sides</option>
			<option value="10">10 Sides</option>
			<option value="8">8 Sides</option>
			<option value="6">6 Sides</option>
			<option value="4">4 Sides</option>
		</select>
		<button>Roll Dice</button>
	</main>
</body>
<script></script>
</html>
```

Inside the script tag, write a function called `rollDice` that makes a fetch request to the random.org API to get a random number between 1 and the number of sides selected in the dropdown.

Call the `rollDice` function when right after the function definition so that the dice is rolled when the page loads.

Create an event listener for the button that calls the `rollDice` function when the button is clicked.

## Hints {#exercise-5-hints}

<details>
	<summary>How do I make a fetch request in JavaScript?</summary>

You can use the `fetch` function like this:

```javascript
const response = await fetch(url)
const data = await response.json()
```

</details>

<details>
	<summary>How do I get the value of a dropdown in JavaScript?</summary>

You can use the `value` property of the dropdown to get the selected value. Here's an example:

```javascript
const value = document.getElementById('numSides').value
```

</details>

## Solution {#exercise-5-solution}

<details>
	<summary>Show the answer</summary>

```javascript
const rollDice = async () => {
	const numSides = document.getElementById('numSides').value
	const url = `https://www.random.org/integers/?num=1&min=1&max=${numSides}&col=1&base=10&format=plain&rnd=new`
	const response = await fetch(url)
	const data = await response.json()
	document.getElementById('dice').textContent = data
}

rollDice()

document.querySelector('button').addEventListener('click', rollDice)
```