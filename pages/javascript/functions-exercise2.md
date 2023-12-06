---
title: Functions - Exercise 3
subtitle: "JavaScript"
course: "JavaScript"
---

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

Need a refresher? [/appel/javascript/advanced-functions#reduce]

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