---
title: 'Objects and Functions'
subtitle: 'Modern JavaScript'
---

# Objects in JavaScript

Objects are a way to group related data together. They are similar to objects in C#, but since JavaScript is a dynamic language, they are more flexible.

## Creating Objects

Let's take a look at how to create an object in JavaScript.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Functions

Similar to Methods in C#, functions are a way to group code together to perform a specific task. Usually we assign a name to a function, and then call that function by name when we want to run the code inside of it.

## Defining and Calling Functions

Let's look at how to create and call a function in JavaScript.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is an example of a function:

```javascript
function sayHello() {
	console.log("Hello World!")
}
```

When we want to run the code inside of the function, we call it by name:

```javascript
sayHello()
```

If printing "Hello World!" to the console is something we want to do often, calling this is easier than typing out the code every time:

```javascript
console.log("Hello World!")
```

## Parameters and Arguments

Functions can also accept parameters. Parameters are variables that are passed into the function. The values that are passed into the function are called arguments.

> [!NOTE] The terms "parameter" and "argument" are often used interchangeably, but there is a difference. A parameter is a variable that is part of the function definition. An argument is the value that is passed into the function when it is called.

Here is an example of a function that accepts a parameter:

```javascript
function sayHello(name) {
	console.log(`Hello ${name}!`)
}
```

In this example, the `name` variable is a parameter. When we call the function, we pass in the argument "John":

```javascript
sayHello("John")
```

Unlike in other languages, you are not required to supply a value for each parameter. If we call the function without passing in an argument, the value of the parameter will be `undefined`:

```javascript
sayHello()
```

This will currently print "Hello undefined!" to the console, which is probably not what we want. However, we can use this to our advantage if we want to provide a default value for a parameter. For example, if we want to print "Hello world!" if no name is provided, we can do this:

```javascript
function sayHello(name) {
	console.log(`Hello ${name || "world"}!`) // if name is undefined, use "world"
}
```
