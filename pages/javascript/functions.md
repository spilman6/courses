---
subtitle: JavaScript
---

# Functions

Similar to Methods in C#, functions are a way to group code together to perform a specific task. Usually we assign a name to a function, and then call that function by name when we want to execute the code inside of it.

Here is an example of a function:

```javascript
function sayHello() {
	console.log("Hello World!")
}
```

If printing "Hello World!" to the console is something we want to do often, this function will save us time by allowing us to call it by name, instead of having to write the code to print "Hello World!"

```javascript
sayHello()
// instead of:
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

In this example, the `name` variable is a parameter. When we call the function, we pass in an argument for the `name` parameter.

```javascript
sayHello("John")
```

> [!NOTE] I have always found is strange that the word "parameter" is used to describe a variable that is part of a function definition. I think it would make more sense to call it a "function variable" or something like that. But, that's just the way it is. I also find it odd that you don't have to use the `var` keyword when declaring a parameter.

## Return Values
