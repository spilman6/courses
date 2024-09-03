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
}

printMessage()
```

In JavaScript however, functions generally start with a lowercase letter, and use camelCase for multi-word names. This is a convention, not a rule, but it is a good idea to follow it.

# Function Parameters

Parameters are the values that are passed into a function when it is called. They are used to pass data into the function, just like arguments in C# methods.

There are a few important differences however. In JavaScript, you can pass any number of parameters to a function, and you can pass any type of data. This is because JavaScript is a dynamically typed language, and does not require you to specify the type of the parameters.

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


## Functions as Arguements

```cpp
const button = document.querySelector('button')

function printMessage(message, element) {
	if (element) element.textContent = message
}

function onClick() {
	printMessage('Ryan', document.querySelector('p'))
}

//button.addEventListener('click', onClick)

setTimeout(onClick, 3000)
```




# Return Values

Just like in C#, functions in JavaScript can return a value. This is done using the `return` keyword.

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
const books = [
    {
        "title": "The Name of the Wind",
        "author": "Patrick Rothfuss",
        "page_count": 662
    },
    {
        "title": "Mistborn: The Final Empire",
        "author": "Brandon Sanderson",
        "page_count": 541
    },
    {
        "title": "The Way of Kings",
        "author": "Brandon Sanderson",
        "page_count": 1007
    }
]

function getLastTitle() {
	if (books.length < 1) return null
	return books[books.length - 1].title
}

console.log(getLastTitle() || 'No books found...')
```

# Exercise 1

# Exercise 2

# Anonymous Functions

```cpp
(function() {
	console.log('hi')
})()
```