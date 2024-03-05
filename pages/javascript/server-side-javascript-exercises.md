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