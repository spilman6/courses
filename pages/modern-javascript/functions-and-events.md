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
function printHello() {
	console.log("Hello world!")
}

printHello()
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
	//console.log(message)
	element.innerText = message
}
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
function printMessage(message, element = document.body) {
	element.textContent = message
}
```

Here the `element` parameter is assigned a default value of `document.body`. If no value is passed for `element`, it will use `document.body`.

2. Using the `||` operator:

```javascript
function printMessage(message, element) {
	element = element || document.body
	element.textContent = message
}
```

Here the `element` parameter is assigned the value of `document.body` if it is falsy. This is a common pattern in JavaScript, but it can be confusing to beginners.

## Rest Parameters

In JavaScript, you can also use rest parameters to pass an arbitrary number of arguments to a function. This is useful when you don't know how many arguments will be passed to the function.

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
function printMessages(...messages) {
	messages.forEach(message => console.log(message))
}
```

## Undefined and Null Parameters

In JavaScript, if you don't pass a value for a parameter, it will be `undefined`. This is different from C#, where you would get a compiler error if you didn't pass a value for a parameter.

Additionally in JavaScript, you can pass `null` as a parameter, which is a special value that represents the absence of a value.

It's a good idea to check for `undefined` and `null` values in your functions, to avoid errors. A simple way to do this is to use the `!` operator, which will convert `undefined` and `null` to `true`.For example:

```javascript
function printMessage(message) {
	if (!message) {
		console.log("No message provided")
		return
	}

	console.log(message)
}
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
function add(a, b) {
	return a + b
}
