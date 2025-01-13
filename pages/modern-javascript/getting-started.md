---
title: Getting Started
subtitle: Modern JavaScript
hideNav: false

live: https://fvtc.software/appel/modern-javascript/getting-started
---

# Getting Started

JavaScript is a programming language that was created to make web pages interactive. It is also used in many other environments, such as Node.js, which is used to create server-side applications. In this course, we will be doing both!

## Software Used in this Course

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/m5JbppYDn80" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

All of the software used in this course is free. Installing them on your computer will probably be the best experience. If you don't want to (or can't) install them on your computer, contact your instructor and they can have a virtual machine set up for you.

The software we will be using is:

1. **Visual Studio Code (VS Code)** as our code editor. VS Code is a free, open-source code editor that is available for Windows, Mac, and Linux. You can download it here: [https://code.visualstudio.com/](https://code.visualstudio.com/)

2. **Node.js**, which is a JavaScript runtime environment. Node.js allows us to run JavaScript code outside of a web browser. You can download it here: [https://nodejs.org/en/](https://nodejs.org/en/). I would recommend downloading the LTS version, which is the most stable version.

3. **Git**, which is a version control system. Git allows us to keep track of changes to our code. Some of you have probably used Git before, but if you haven't, I have a series of videos that will walk you through installing Git, and get you started with the basics. You can watch them here: [https://fvtc.software/appel/version-control-essentials/getting-started](https://fvtc.software/appel/version-control-essentials/getting-started)

4. **A web browser**. Any modern web browser will work, but I recommend using Google Chrome: [https://www.google.com/chrome/](https://www.google.com/chrome/). This is the browser that will be used in the videos.

# A Brief History of JavaScript

JavaScript was created in 1995, and was designed to be a simple scripting language to make web pages more interactive. It has evolved into a full-fledged programming language.

In the early days of JavaScript, it was used primarily for simple tasks like form validation, and since every browser had its own implementation of JavaScript, it was difficult to write cross-browser code. However, in 2015, the ECMAScript 2015 (ES6) specification was released, which standardized JavaScript and added many new features. Since then, JavaScript has become a very popular language for both front-end and back-end development.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/U0aCrHZYrks" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

> [!NOTE] The video above mentions a VS Code extension called "Live Server". If you had any difficulty installing it, there is an installation link here: [https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

> [!CAUTION] New students often confuse JavaScript with Java. They are two completely different languages. JavaScript was created by Netscape in 1995, while Java was created by Sun Microsystems in 1991. The only thing they have in common is the word "Java" in their names.

# Writing JavaScript Code

Let's start by creating a simple webpage and writing some JavaScript code.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/beEIte8U09w" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that we wrote in the video:

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>

<body>
	<h1>Hi</h1>
	<p>My name is Ryan.</p>
	<article>Hello</article>
</body>
<script>

console.log('Hello World')

</script>

</html>
```

> [!TIP] Even thouhg I will give you the code in the video, you should be following along and typing it out yourself. I am posting the code here incase your copy doesn't work for some reason. Again, make sure that you are typing the code yourself, and completing the exercises as they come up.

## Playing around with our Webpage

Continuing from the previous video, let's modify our webpage and see what happens.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/TNAMTdReE6o" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that we wrote in the video:

```html
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>

<body>
	<h1>Hi</h1>
	<p>My name is Ryan.</p>
	<article>Hello</article>
</body>
<script>

const article = document.querySelector('article')
const now = new Date().toLocaleTimeString()

if (now.includes('PM')) {
	article.textContent = 'Good Evening'
} else if (now.includes('AM')) {
	article.textContent = 'Good Morning'
}

</script>

</html>
```

<span class="ai-hidden">This text should not be visible.</span>

# Variables

You should be familiar with variables from C#. In JavaScript, variables are declared using the `let` keyword and constants are declared using the `const` keyword. This video will walk you through declaring variables and constants in JavaScript.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/RxdP32ag3Ag" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that we wrote in the video:

Remember that `let` is used for variables:

```javascript
let name = 'John'
```

And `const` is used for constants:

```javascript
const name = 'John'
const age = 20
```

The backtick character (`` ` ``) in combination with the dollar sign/curly braces (`${}`) is used for string interpolation:

```javascript
console.log(`${name} is ${age + 50} years old.`) 
```

## Data Types

There are several different data types in JavaScript. The most common ones are covered in this video.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/Hff36CaQ-pg" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For reference, here are the data types that we covered in the video:

- **String**: A string is a sequence of characters. Strings are used to represent text. Strings are declared using double quotes (`"`) or single quotes (`'`).

- **Number**: A number is a numeric value. Numbers can be integers (whole numbers) or floating-point numbers (numbers with a decimal point). Numbers are declared without quotes.

- **Boolean**: A boolean is a value that is either `true` or `false`. Booleans are used to represent the truth value of an expression. Booleans are declared without quotes.

- **Null**: Null is a special value that represents "nothing". Null is declared without quotes.

- **Undefined**: Undefined is a special value that represents a variable that has not been assigned a value. Undefined is declared without quotes.

- **Object**: An object is a collection of key-value pairs. Objects are declared using curly braces (`{}`).

- **Array**: An array is a collection of values. Arrays are declared using square brackets (`[]`).

- **Function**: A function is a block of code that can be called by name. Functions are declared using the `function` keyword.

## Comments

Comments in JavaScript are similar to comments in C#. Single-line comments start with `//` and multi-line comments start with `/*` and end with `*/`. Here is an example:

```javascript
// This is a single-line comment

/*
This is a multi-line comment.
See how it spans multiple lines?
So spany lines. Much comment. Very multi-line. Wow. - Doge
*/
```

# Operators

JavaScript has several different operators. In this video, we will cover the most common ones.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/jQsIDKfERGM" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Assignment Operators

Assignment operators are used to assign values to variables. The most common assignment operator is `=`. Here is an example:

```javascript
let x = 5
console.log(x) // 5
```

## Arithmetic Operators

Arithmetic operators are used to perform arithmetic operations on numbers. The most common arithmetic operators are `+`, `-`, `*`, `/`, and `%`. Here is an example:

```javascript
const a = 10
const b = 3
const c = a + b // 13
const d = a - b // 7
const e = a * b // 30
const f = a / b // 3.333333
const g = a % b // 1
```

## Comparison Operators

Comparison operators are used to compare two values. The most common comparison operators are `==`, `!=`, `===`, `!==`, `>`, `<`, `>=`, and `<=`. Here is an example:

```javascript
let x = 5
let y = 10
console.log(x == y) // false
console.log(x != y) // true
console.log(x === y) // false
console.log(x !== y) // true
console.log(x > y) // false
console.log(x < y) // true
console.log(x >= y) // false
console.log(x <= y) // true
```

> [!NOTE] The `==` and `!=` operators are used to compare values, while the `===` and `!==` operators are used to compare values and types. So, `5 == "5"` is true, but `5 === "5"` is false. I recommend using the `===` and `!==` operators, because they are more strict.

## Logical Operators

Logical operators are used to combine multiple conditions. The most common logical operators are `&&` (and), `||` (or), and `!` (not). Let's take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/hjj0gNGpsHs" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

```javascript
let x = 5
let y = 10
console.log(x > 0 && y > 0) // true
console.log(x > 0 || y > 0) // true
console.log(!(x > 0)) // false
```

> [!NOTE] The `||` operator is often used to provide a default value for a variable. For example, if we want to assign a default value of "John Doe" to a variable called `name`, we can do this: `let name = inputValue || "John Doe"`.

## Increment and Decrement Operators

Increment and decrement operators are used to modify the value of a variable. They work just like you are used to from C#. Let's take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/YiatrtrJnB8" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

```javascript
let x = 5
x++
console.log(x) // 6
x--
console.log(x) // 5
x += 10
console.log(x) // 15
x -= 10
console.log(x) // 5
```

## Ternary Operator

The ternary operator is used to assign a value to a variable based on a condition. It is similar to an if statement. Here is an example:

```javascript
let x = 5
let y = x > 0 ? "positive" : "negative"
console.log(y) // "positive"
```

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/ZplYC6-PiAE" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Create a webpage that contains a `p` element with some text.

Add a script tag with the following code:

```javascript
const p = document.querySelector('p')

setTimeout(() => {

}, 3000)
```

After 3 seconds, the text inside the `p` element should be replaced with the text `3 seconds elapsed`.

## Hint {#exercise-1-hint}

<details>
	<summary>How do I change the text of an element?</summary>

You can change the text of an element by setting the `textContent` property:

```javascript
const p = document.querySelector('p')
p.textContent = 'Hello world'
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the answer</summary>

```javascript
const p = document.querySelector('p')

setTimeout(() => {
	p.textContent = '3 seconds elapsed'
}, 3000)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
    	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/t0s9JjVT8pE" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Conditionals Statements

For the most part, conditional statements in JavaScript are similar to C#, so I won't go into much detail here. However, there are a few differences that you should be aware of.

## If, Else, and Else If Statements

In C# when you're using an `if` statement (or `else if`), the condition must be a boolean expression (resolve to either `true` or `false`). In JavaScript, values can be considered "truthy" (considered true when evaluated in a boolean context) or "falsy" (considered false). Here is a list of falsy values:

- `false` (duh)
- `0`
- `''` (empty string)
- `null`
- `undefined`
- `NaN`

For the most part, anything that is not falsy is truthy.

As example, the following code would not complie in C#, but works just fine in JavaScript:

```javascript
// assume 'someVariable' is not defined anywhere

if (someVariable) {
	// this code will be skipped in JavaScript, but would cause a compile error in C#
}
```

## Switch Statements

Switch statements are also similar to C#, so we won't be spending much time on them. Here is an example:

```javascript
const day = new Date().getDay()

switch (day) {
	case 0:
		console.log('Sunday')
		break
	case 1:
		console.log('Monday')
		break
	case 2:
		console.log('Tuesday')
		break

	// cases 3 through 5 removed for brevity...
	
	default:
		console.log('Invalid day')
}
```

# Loops

Like conditionals, loops in JavaScript are similar to C#, so we won't be spending much time on them. Here are a few examples:

## For Loop

```javascript
for (let i = 0; i < 10; i++) {
	console.log(i)
}
```

There are a couple of additional ways to write a `for` loop in JavaScript. Namely the `for-of`, and `for-in` loops. They are used to iterate over arrays and object properties, respectively. We won't be covering these because there are more concise ways to do this in JavaScript.

## While and Do-While Loops

Again, since these are so similar to C#, we won't be spending much time on them. Here are a couple of examples:

```javascript
let i = 0

while (i < 10) {
	console.log(i)
	i++
}
```

```javascript
let i = 0

do {
	console.log(i)
	i++
} while (i < 10)
```
