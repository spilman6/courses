---
title: Array Functions - Exercises
subtitle: "Modern JavaScript"
course: "Modern JavaScript"
---

# Exercise 1

For this exercise, write the missing anonymous function. The function should destructure the first name of a person object and print the name to the console.

Try to inline the function if possible.

Start with this code, and write the function where instructed:

```javascript
const people = [
	{ firstName: "Harper", lastName: "Smith", age: 22 },
	{ firstName: "Kayla", lastName: "Johannson", age: 27 },
	{ firstName: "Tim", lastName: "Richards", age: 44 }
]

people.forEach(/* write your function here */)
```

[Open in OneCompiler](https://onecompiler.com/javascript/3zvmvmcad)

## Hints

<details>
	<summary>How do I get started?</summary>

Start by creating an empty anonymous function that just logs something to the console. Like:

```javascript
() => console.log("bla")
```

Need a refresher?

[JavaScript Anonymous Functions](/appel/javascript/functions#anonymous)

</details>

<details>
	<summary>How do I destructure an object?</summary>

You use the curly braces. For example:

```javascript
const courseInfo = {
	courseId: 55306,
	courseName: "Data Access for Programmers",
	instructorName: "Matthew Dorn",
	credits: 3
}

// destructure courseInfo to get just the id and instructorName
const { coursdId, instructorName } = courseInfo
```

Need a refresher?

[JavaScript Object Destructuring](/appel/javascript/objects#destructuring)

</details>

## Answer

<details>
	<summary>Show the answer</summary>


```javascript
const people = [
	{ firstName: "Harper", lastName: "Smith", age: 22 },
	{ firstName: "Kayla", lastName: "Johannson", age: 27 },
	{ firstName: "Tim", lastName: "Richards", age: 44 }
]

people.forEach(({ firstName }) => console.log(firstName))
```

You can also run the code [here](https://onecompiler.com/javascript/3zvk3dea9).

</details>

<details>
	<summary>Walkthrough Video</summary>
    	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/-dRicTc2GFA"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

# Exercise 2

For this exercise, write the missing map function called `getFullName()`. The map function should destructure the first and last name of a person object and return the full name using string interpolation.

Try to inline the function if possible.

Start with this code, and write the function where instructed:

```javascript
const people = [
	{ firstName: "Harper", lastName: "Smith", age: 22 },
	{ firstName: "Kayla", lastName: "Johannson", age: 27 },
	{ firstName: "Tim", lastName: "Richards", age: 44 }
]

// write your function here:


const names = people.map(getFullName)
console.log({ names })
```

## Hint

<details>
	<summary>How do I get started?</summary>

Start by creating a function that simply returns the person being passed in to the parameter.

Need a refresher?

[JavaScript Function Parameters](/appel/javascript/functions#parameters)

[JavaScript Return Statement](/appel/javascript/functions#return-statement)

</details>

## Answer

<details>
	<summary>Show the answer</summary>

```javascript
const people = [
	{ firstName: "Harper", lastName: "Smith", age: 22 },
	{ firstName: "Kayla", lastName: "Johannson", age: 27 },
	{ firstName: "Tim", lastName: "Richards", age: 44 }
]

// write your function here:
const getFullName = ({ firstName, lastName }) => `${firstName} ${lastName}`

const names = people.map(getFullName)
console.log({ names })
```

You can also run the code [here](https://onecompiler.com/javascript/3zvk3dea9).

</details>

<details>
	<summary>Walkthrough Video</summary>
    	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/-dRicTc2GFA"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

# Exercise 3

For this exercise, write the missing reducer function `getEvenNumbers`. To determine if a number is even, use the mod operator (`%`), and mod the given number by 2. If the remainder equals zero, it's even. Otherwise it's odd.

For example:

```javascript
console.log(5 % 2) // 1, so 5 is odd
console.log(12 % 2) // 0, so 12 is even
```

Start with this code, and write the function where instructed:

```javascript
const numbers = [ 5, 13, 45, 12, 111, 6 ]

// write your function here:


const evenNumbers = numbers.reduce(getEvenNumbers, [ ])
console.log({ evenNumbers })
```

## Hint

<details>
	<summary>How do I get started?</summary>

The thing to remember about reducer functions is that they have two parameters. An accumulator object, and an item from the array. So the function signature should look like:

```javascript
const getEvenNumbers = (acc, item) => { }
```

Need a refresher? (/appel/javascript/advanced-functions#reduce)

</details>

## Answer

<details>
	<summary>Show the answer</summary>

```javascript
const numbers = [ 5, 13, 45, 12, 111, 6 ]

const getEvenNumbers = (acc, item) => {
    if (item % 2 == 1) return acc
    return [ ...acc, item ]
}

const evenNumbers = numbers.reduce(getEvenNumbers, [ ])
console.log({ evenNumbers })
```

You can also run the code [here](https://onecompiler.com/javascript/3zvmsuzm3).

</details>

<details>
	<summary>Walkthrough Video</summary>
    	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/-dRicTc2GFA"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>
