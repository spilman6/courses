---
title: 'Getting Started'
subtitle: 'JavaScript'
---

# Getting Started

JavaScript is a programming language that was created to make web pages interactive. It is also used in many other environments, such as Node.js, which is used to create server-side applications. In this course, we will be doing both!

## Software Used in this Course

All of the software used in this course is free and open-source. If you don't want to install them on your computer, a virtual machine has been provided for you to use. See the [Virtual Machine](/virtual-machine) page for more information on how to use it.

However, if you want to install the software on your computer, it will probably be faster and a more pleasant experience. The software we will be using is:

1. **Visual Studio Code (VS Code)** as our code editor. VS Code is a free, open-source code editor that is available for Windows, Mac, and Linux. You can download it here: [https://code.visualstudio.com/](https://code.visualstudio.com/)

2. **Node.js**, which is a JavaScript runtime environment. Node.js allows us to run JavaScript code outside of a web browser. You can download it here: [https://nodejs.org/en/](https://nodejs.org/en/). I would recommend downloading the LTS version, which is the most stable version.

3. **Git**, which is a version control system. Git allows us to keep track of changes to our code, and to collaborate with others. You can download it here: [https://git-scm.com/downloads](https://git-scm.com/downloads)

4. **A web browser**. Any modern web browser will work, but I recommend using Google Chrome: [https://www.google.com/chrome/](https://www.google.com/chrome/). This is the browser that will be used in the videos.

# Hello World

Let's start by creating a simple "Hello World" program. Create a new file called `app.js` and open it in VS Code. Then, add the following code:

```javascript
console.log("Hello World!")
```

This code will print "Hello World!" to the console. To run this code, open a terminal in VS Code by going to `Terminal > New Terminal`. Then, type the following command:

```bash
node app
```

You should see "Hello World!" printed to the console.

# Variables

Variables are used to store data. They are declared using the `let` keyword. Here is an example:

```javascript
let name = "John"
```

In this example, we are declaring a variable called `name` and assigning it the value "John". We can then use this variable later in our code:

```javascript
let name = "John"
console.log(`Hello ${name}!`)
```

This will print "Hello John!" to the console.

## Data Types

There are several different data types in JavaScript. The most common ones are:

## String**: A string is a sequence of characters. Strings are used to represent text. Strings are declared using double quotes (`"`) or single quotes (`'`).

## Number**: A number is a numeric value. Numbers can be integers (whole numbers) or floating-point numbers (numbers with a decimal point). Numbers are declared without quotes.

## Boolean**: A boolean is a value that is either `true` or `false`. Booleans are used to represent the truth value of an expression. Booleans are declared without quotes.

## Null**: Null is a special value that represents "nothing". Null is declared without quotes.

## Undefined**: Undefined is a special value that represents a variable that has not been assigned a value. Undefined is declared without quotes.

## Object**: An object is a collection of key-value pairs. Objects are declared using curly braces (`{}`).

## Array**: An array is a collection of values. Arrays are declared using square brackets (`[]`).

## Function**: A function is a block of code that can be called by name. Functions are declared using the `function` keyword.

## String Interpolation

String interpolation is a way to insert variables into a string. It is done using the backtick character (`` ` ``) instead of double quotes (`"`). Here is an example:

```javascript
let name = "John"
console.log(`Hello ${name}!`)
```

This will print "Hello John!" to the console.

# Comments

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

JavaScript has several different operators. The most common ones are:

## Assignment Operators

Assignment operators are used to assign values to variables. The most common assignment operator is `=`. Here is an example:

  ```javascript
  let x = 5
  console.log(x) // 5
  ```

## Arithmetic Operators

Arithmetic operators are used to perform arithmetic operations on numbers. The most common arithmetic operators are `+`, `-`, `*`, `/`, and `%`. Here is an example:

  ```javascript
  let x = 5
  let y = 10
  console.log(x + y) // 15
  console.log(x - y) // -5
  console.log(x * y) // 50
  console.log(x / y) // 0.5
  console.log(x % y) // 5
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
> [!NOTE] The `==` and `!=` operators are used to compare values, while the `===` and `!==` operators are used to compare values and types. So, `5 == "5"` is true, but `5 === "5"` is false. I always use the `===` and `!==` operators, because they are more strict.

## Logical Operators

Logical operators are used to combine multiple conditions. The most common logical operators are `&&` (and), `||` (or), and `!` (not). Here is an example:

  ```javascript
  let x = 5
  let y = 10
  console.log(x > 0 && y > 0) // true
  console.log(x > 0 || y > 0) // true
  console.log(!(x > 0)) // false
  ```
> [!NOTE] The `||` operator is often used to provide a default value for a variable. For example, if we want to assign a default value of "John Doe" to a variable called `name`, we can do this: `let name = inputValue || "John Doe"`.

## Increment and Decrement Operators

Increment and decrement operators are used to increase or decrease the value of a variable by 1. The most common increment and decrement operators are `++` and `--`. Here is an example:

  ```javascript
  let x = 5
  x++
  console.log(x) // 6
  x--
  console.log(x) // 5
  ```

## Ternary Operator

The ternary operator is used to assign a value to a variable based on a condition. It is similar to an if statement. Here is an example:

  ```javascript
  let x = 5
  let y = x > 0 ? "positive" : "negative"
  console.log(y) // "positive"
  ```