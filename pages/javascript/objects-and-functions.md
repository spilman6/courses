---
title: 'Objects and Functions'
subtitle: 'Modern JavaScript'
videos:
- ZTguyiACw1k
- WOOPFgqyLtQ
- s6yrF5FmwNo
- 5XaS9A_kKEQ
- m6A5wXUYF1I
- Q76SPkXuU_4
- 1Nl2o-_hE6s
---

# Objects in JavaScript

Objects are a way to group related data together. They are similar to objects in C#, but since JavaScript is a dynamic language, they are more flexible.

## Getting the Starter Code

Before we get started, let's fork and clone down some starter code.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/ZTguyiACw1k" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

You can find the starter code [here](https://github.com/RDAppel/example-website2).

## Looking at the Starter Code Objects

Let's take a look at the starter code that we just cloned down.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/WOOPFgqyLtQ" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that we added to our JavaScript file:

```javascript
const title = "Adidas"
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
const image = "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const color = "#deaf01"

const cardInfo4 = { title, text, image, color }
```

> [!NOTE] GitHub Copilot created the image url for us. It actually just used the image for the Nike shoes from cardInfo1.

## Printing Objects to the Console

Let's print the cardInfo objects to the console to see what they look like.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/s6yrF5FmwNo" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>

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
