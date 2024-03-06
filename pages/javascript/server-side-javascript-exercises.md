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

For the exercises, we're going to use the npm module `ansi-colors`. This module was discussed in the lecture, but if you want to take another look at it, you can find it [here](https://www.npmjs.com/package/ansi-colors).

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

## Solution {#exercise-1-solution}

<details>
	<summary>Show the answer</summary>

dice-roller.js

```javascript
const roll = () => console.log('hi')
module.exports = { roll }
```

app.js

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

Building on the previous exercise, you're going to modify the `roll` function to generate a random number between 1 and N. You'll then print the number to the console.

You're also going to add some color to the output using the `ansi-colors` module.

If the user rolls a 1, the number should be printed in red. If the user rolls the highest number, it should be printed in green. Otherwise, it should be printed in yellow.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Modify the `roll` function to take a parameter `max` that represents the maximum number that can be rolled. This code will generate a random number between 1 and `max`:

```javascript
Math.floor(Math.random() * max) + 1
```

Install and use the `ansi-colors` module to print the number in the appropriate color. If the number is 1, print it in red. If it's the maximum number, print it in green. Otherwise, print it in yellow.

In your app, call the `roll` function with a few different numbers to confirm that it's working.

## Hint {#exercise-2-hint}

<details>
	<summary>How do I install a module?</summary>

You can install a module using `npm install <module-name>`. This will add the module to your `node_modules` folder.

```bash
npm install ansi-colors
```

</details>

<details>
	<summary>How do I use the ansi-colors module?</summary>

You can use the module by requiring it and then calling the appropriate function. For example, to print something in red, you would use `colors.red('my string')`.

```javascript
const colors = require('ansi-colors')
console.log(colors.red('my string'))
```

</details>

## Solution {#exercise-2-solution}

<details>
	<summary>Show the answer</summary>

dice-roller.js:

```javascript
const colors = require('ansi-colors')

const roll = (max) => {
	const number = Math.floor(Math.random() * max) + 1

	const color = number === 1 ? colors.red
		: number === max ? colors.green : colors.yellow

	console.log(color(number))
}

module.exports = { roll }
```

app.js:

```javascript
const diceRoller = require('./dice-roller')

// testing the roll function
console.log('Rolling four 6-sided dice:')
diceRoller.roll(6)
diceRoller.roll(6)
diceRoller.roll(6)
diceRoller.roll(6)

console.log('Rolling two 10-sided dice:')
diceRoller.roll(10)
diceRoller.roll(10)

console.log('Rolling a 20-sided die:')
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


