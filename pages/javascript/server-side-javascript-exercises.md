---
title: 'Server-Side JavaScript - Exercises'
subtitle: 'Modern JavaScript'
---

# Getting Started

Before getting started, we're going to need to setup an npm project.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Create a new npm project (using `npm init`) called `dice-roller-exercise`.

Have the entry point be `app.js`, and add your name as the author.

Create the `app.js` file, and a module called `dice-roller.js`

For the exercises, we're going to use the npm module `ansi-colors`. This module was discussed in the lecture, but if you want to take another look at it, you can find it [here](https://www.npmjs.com/package/ansi-colors). Go ahead and install it using:

```bash
npm i ansi-colors
```

# Exercise 1

For the first exercise, you're simply going to create and export a function in your `dice-roller.js` module, and import it into your `app.js`.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

In your dice-roller module, create a function called `roll` that doesn't take any parameters. For now, just have the function print "hi" to the console. Wrap the function in an anonymous object when you export it.

In your app, use `require` to import your module and then call the `roll` function. Run the app to confirm that "hi" is printing to the console.

## Hint {#exercise-1-hint}

<details>
	<summary>How do I export a function?</summary>

You can export a function using the `module.exports` statement.

```javascript
module.exports = myFunction
```

</details>

<details>
	<summary>How do I wrap a function in an anonymous object?</summary>

Simply surround it with curly-braces.

```javascript
{ myFunction } // anonymous object with a function
```

</details>

<details>
    <summary>How do I require my module?</summary>

Assuming the module is in the same folder, you can use `require`, and specify the "current folder" using `./<your-module>`.

```javascript
const myModule = reuqire('./my-module') // will use `my-module.js`
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the answer</summary>

dice-roller.js:

```javascript
const roll = () => console.log('hi')
module.exports = { roll }
```

app.js:

```javascript
const diceRoller = require('./dice-roller')
diceRoller.roll()
```

Alternatively, you could destructure the object and just extract the `roll` function:

app.js:

```javascript
const { roll } = require('./dice-roller')
roll()
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

For the second exercise, you're going to modify the `roll` function to generate a random number between 1 and 6. You'll then print the number to the console.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Modify the `roll` function to generate and console log a number between 1 and 6.

Remember that `Math.random()` generates a random number between 0 and 1, but not including 1.

You can use `Math.floor()` to round the number down to the nearest whole number.

In your app, call the `roll` function a few times to confirm that it's working.

## Hint {#exercise-2-hint}

<details>
	<summary>How do I generate a random number between 1 and 6?</summary>

You can generate a random number between 0 and 5 using the following code:

```javascript
Math.floor(Math.random() * 6)
```

Then you can just add one to the result to get a number between 1 and 6.

```javascript
Math.floor(Math.random() * 6) + 1
```

</details>

## Solution {#exercise-2-solution}

<details>
	<summary>Show the answer</summary>

dice-roller.js:

```javascript
const roll = () => console.log(Math.floor(Math.random() * 6) + 1)
module.exports = { roll }
```

app.js:

```javascript
const diceRoller = require('./dice-roller')

diceRoller.roll()
diceRoller.roll()
diceRoller.roll()
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

Building on the previous exercise, you're going to modify the `roll` function to allow for different sized dice to be rolled. For example, `roll(20)` would generate a random number between 1 and 20.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Modify the `roll` function to take a parameter `sides` that represents the number of sides on the dice. If no value is provided, the function should default to 6.

In your app, call the `roll` function with a few different numbers to confirm that it's working.

## Hint {#exercise-3-hint}

<details>
	<summary>How do I add a default value to a parameter?</summary>

You can add a default value to a parameter by using the `=` operator.

```javascript
const myFunction = (param = 5) => console.log(param)
```

This will set `param` to 5 if no value is provided. For example:

```javascript
myFunction() // 5
myFunction(10) // 10
```

</details>

## Solution {#exercise-3-solution}

<details>
	<summary>Show the answer</summary>

dice-roller.js:

```javascript
const roll = (max = 6) => {
	const result = Math.floor(Math.random() * max) + 1
	console.log(result)
}

module.exports = { roll }
```

app.js:

```javascript
const diceRoller = require('./dice-roller')
diceRoller.roll()
diceRoller.roll(10)
diceRoller.roll(20)
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

Next you're going to allow the user to specify a callback function that will be called with the result of the roll.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Modify the `roll` function to take a second parameter `callback` that represents the function to be called with the result of the roll. If no value is provided, the function should default to `null`.

If the `callback` parameter is null, the function should just print the result to the console. Otherwise, it should call the `callback` function with the result as the parameter.

In your app, call the `roll` function with a few different numbers and a callback function to confirm that it's working.

## Hint {#exercise-4-hint}

<details>
	<summary>How do add a callback parameter to a function?</summary>

You can add a callback parameter to a function just like any other parameter.

```javascript
const myFunction = (callback = null) => {
	const result = "some result"

	if (callback) callback(result)
	else console.log(result)
}
```

</details>

## Solution {#exercise-4-solution}

<details>
	<summary>Show the answer</summary>

dice-roller.js:

```javascript
const roll = (max = 6, callback = null) => {
	const result = Math.floor(Math.random() * max) + 1

	if (callback) callback(result)
	else console.log(result)
}

module.exports = { roll }
```

app.js:

```javascript
const diceRoller = require('./dice-roller')

diceRoller.roll() // prints just the number
diceRoller.roll(10, result => console.log(`You rolled a ${result}`))
diceRoller.roll(20, result => console.log(`You rolled a ${result}`))
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

For the final exercise, you're going to use the `ansi-colors` module to add some color to the output of the `roll` function.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Modify the `roll` function to use the `ansi-colors` module to print the result in a color. For example, if the result is 1, print it in red. If the result is the maximum value, print it in green. Otherwise, print it in white.

In your app, call the `roll` function with a few different numbers, making sure that you don't pass a callback function.

> [!TIP] If you're not seeing the colors, pick a 4-sided dice and roll it a few times.

## Hint {#exercise-5-hint}

<details>
	<summary>How do I use the ansi-colors module?</summary>

You can use the `ansi-colors` module to add color to your output. For example:

```javascript
const colors = require('ansi-colors')

console.log(colors.red('This is red'))
console.log(colors.green('This is green'))
console.log(colors.white('This is white'))
```

</details>

## Solution {#exercise-5-solution}

<details>
	<summary>Show the answer</summary>

dice-roller.js:

```javascript
const { red, green, white } = require('ansi-colors')

const roll = (max = 6, callback = null) => {
	const result = Math.floor(Math.random() * max) + 1

	if (callback) callback(result)
	else {
		if (result === 1) console.log(red(result))
		else if (result === max) console.log(green(result))
		else console.log(white(result))
	}
}

module.exports = { roll }
```

app.js:

```javascript
const diceRoller = require('./dice-roller')

console.log('Rolling five 4-sided dice... hopefully I get some color!')
diceRoller.roll(4)
diceRoller.roll(4)
diceRoller.roll(4)
diceRoller.roll(4)
diceRoller.roll(4)
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

