---
title: Functions and Events
subtitle: Modern JavaScript
---

# Functions

Functions in JavaScript are blocks of code that can be called and executed. They are used to group code together and make it reusable. They are similar to methods in C#, except that they are not tied to a class.

Here is the syntax for a function in JavaScript:

```javascript
function function_name(parameters) {
	// code to be executed
}
```

Like with methods in C#, the parameters are optional. We'll look at parameters in more detail later.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```javascript
function printMessage() {
	console.log('Hello world')
	console.log('From the function')
}

printMessage()
```

In JavaScript, functions generally start with a lowercase letter, and use camelCase for multi-word names. This is a convention, not a rule, but it is a good idea to follow it.


# Return Values

Just like in C#, functions in JavaScript can return a value. This is done using the `return` keyword. Let's look at a simple example:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```javascript
function getText() {
	return document.querySelector('p').textContent
}

console.log(getText())
```

# Function Parameters

Parameters are the values that are passed into a function when it is called. They are used to pass data into the function, just like arguments in C# methods.

There are a few important differences however. In JavaScript, you can pass any number of parameters to a function, and you can pass any type of data. This is because JavaScript is a dynamically typed language, and does not require you to specify the type of the parameters.

Additionally, in JavaScript, you can pass fewer parameters to a function than it expects. This can lead to errors if you are not careful, but it can also be useful in some situations.

In this video we'll look at how to use parameters in functions.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code:

```javascript
function printMessage(message, element) {
	if (element) element.textContent = message
}

printMessage('Ryan', document.querySelector('p'))
```

## Default Parameters

In JavaScript, you can also specify default values for parameters. This means that if a parameter is not passed to the function, it will use the default value instead.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

As you saw in the video, you can specify default values for parameters in two ways.

1. Assigning a value to the parameter in the function definition:

```javascript
function printMessage(message = 'Hello world', element = document.body) {
	if (element) element.textContent = message
}

printMessage('Ryan', document.querySelector('p'))
```

Here the `element` parameter is assigned a default value of `document.body`. If no value is passed for `element`, it will use `document.body`.

2. Using the `||` operator:

```javascript
function printMessage(message, element) {
	message = message || 'Hello world'
	element = element || document.body
	if (element) element.textContent = message
}

//printMessage('Ryan', document.querySelector('p'))
printMessage('Ryan')
```

Here the `element` parameter is assigned the value of `document.body` if it is falsy. This is a common pattern in JavaScript, but it can be confusing to beginners.

## Functions as Arguments

In JavaScript, you can also pass functions as arguments to other functions. This is a powerful feature that allows you to create more flexible and reusable code.

Commonly an argument that is a function is called a `callback function`. This is because it is a function that is called back by another function.

We have already seen this in action when we used `setTimeout` to call a function after a delay. Let's look at the `setTimeout` function again:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code:

```javascript
function displayHello() {
	document.querySelector('p').textContent = 'Hello!'
}

setTimeout(displayHello, 3000)
```

We can also write functions that take a callback function as an argument. Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code:

```javascript
function displaySum(n1, n2, callback) {
	const sum = n1 + n2
	if (callback) callback(sum)
}

function logValue(value) {
	console.log(value)
}

function displayValue(value) {
	document.querySelector('p').textContent = value
}

//displaySum(2, 3, logValue)
displaySum(2, 3, displayValue)
```

> [!IMPORTANT] In the code above, we are passing the `displayValue` function as an argument. We are not invoking it with `displayValue()`. This is because we want to pass the function itself, not the result of calling the function.

# Anonymous Functions

In JavaScript, you can also create functions without a name. These are called `anonymous functions`. They are useful when you are only going to use the function once, like in the previous examples. Notice how in the previous examples we defined the `displayHello`, `logValue`, and `displayValue` functions separately, and later only used them once? This is a perfect use case for anonymous functions.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the updated code:

```javascript
function displaySum(n1, n2, callback) {
	const sum = n1 + n2
	if (callback) callback(sum)
}

//displaySum(2, 3, function(value) {
//	console.log(value)
//})

displaySum(2, 3, function(value) {
	document.querySelector('p').textContent = value
})
```

# Arrow Functions

Arrow functions are a new feature in JavaScript that provide a more concise syntax for writing functions. They are especially useful when you need to write a lot of small functions.

Let's change our previous example to use arrow functions:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code using arrow functions:

```javascript
const displaySum = (n1, n2, callback) => {
	const sum = n1 + n2
	if (callback) callback(sum)
}

//displaySum(2, 3, value => console.log(value))
displaySum(2, 3, value => {
	document.querySelector('p').textContent = value
})
```

## Returning Values

Arrow functions can also return values. If the function body is a single expression, you can omit the curly braces and the `return` keyword. The value of the expression will be returned automatically. For example:

```javascript
const addNumbers = (n1, n2) => {
	return n1 + n2
}
```

Can be written more concisely as:

```javascript
const addNumbers = (n1, n2) => n1 + n2
```

## Removing Parentheses

If an arrow function has only one parameter, you can omit the parentheses around the parameter list. For example:

```javascript
const logValue = (value) => console.log(value)
```

Can be written as:

```javascript
const logValue = value => console.log(value)
```

> [!NOTE] If your function does not take any parameters, or has more than one parameter, you must include the parentheses.

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, I want you to use the following code:

```javascript
function displayMessage(message, element) {
	element.textContent = message
}

setTimeout(function() {
	displayMessage('Hello world', document.querySelector('p'))
}, 3000)
```

Check that your code is working by running it in your browser. You should see the message 'Hello world' appear in the paragraph after 3 seconds.

Now, I want you to rewrite the code to make it more concise using arrow functions.

Additionally, I want you to make the `element` parameter optional, and default to `document.body` if it is not passed. Test it by calling the function with only one argument.

## Hints {#exercise-1-hints}

<details>
	<summary>How do I create an arrow function?</summary>

You can create an arrow function by removing the `function` keyword and adding an arrow (`=>`) between the parameters and the function body.

```javascript
function test() { }
// becomes
const test = () => { }
```

</details>

<details>
	<summary>How do I call a function with only one argument?</summary>

You can call a function with only one argument by removing the second argument from the call.

```javascript
displayMessage('Hello world', document.querySelector('p'))
// becomes
displayMessage('Hello world')
```

</details>

<details>
	<summary>How do I make a parameter optional?</summary>

You can make a parameter optional by assigning a default value to it.

```javascript
const displayMessage = (message, element = document.body) => { }
```

## Solution {#exercise-1-solution}

<details>
	<summary>Show the Answer</summary>

```javascript
const displayMessage = (message, element = document.body) => {
	element.textContent = message
}

displayMessage('Hello world')
```

</details>

<details>
	<summary>Walkthrough Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Events and Event Listeners

Events are actions that happen in the browser, like a user clicking a button or a page loading. You can listen for these events and respond to them using event listeners.

Some of the most common events are:

- `click` - when the user clicks an element
- `mouseover` - when the user moves the mouse over an element
- `keydown` - when the user presses a key

You can listen for these events using the `addEventListener` method. Here is the syntax:

```javascript
element.addEventListener('event', function)
```

Let's create a few:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```javascript
const button = document.querySelector('button')
button.addEventListener('click', () => console.log('Clicked!'))

const input = document.querySelector('input')
input.addEventListener('keydown', () => console.log('Keydown!'))

const p = document.querySelector('p')
p.addEventListener('mouseover', () => console.log('Mouseover!'))
```

## The Event Object

When an event is triggered, an `event` object is created that contains information about the event. This object is passed to the event listener function as a parameter. You can use this object to get information about the event, like the target element or the key that was pressed.

Let's look at an example:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```javascript
const input = document.querySelector('input')
input.addEventListener('keydown', event => {
	console.log(event.key)
})
```

> [!NOTE] It is extremely common to see the event object passed as `e` or `ev` instead of `event`. This is just a shorthand, and you can use any name you like.