---
title: Functions - Exercise 3
subtitle: "JavaScript"
course: "JavaScript"
---

# Exercise 3

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

<details open>
	<summary class="video">Walkthrough Video</summary>
    	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/-dRicTc2GFA"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

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

You can also run the code [here](https://onecompiler.com/javascript/3zvmsuzm3).

</details>