---
title: 'Higher Order Functions'
subtitle: 'Modern JavaScript'
---

# Higher Order Functions

Higher order functions are functions that take other functions as arguments or return functions as their results. This is a powerful feature of JavaScript that allows us to write more modular and reusable code.

## setTimeout and setInterval

Two common higher order functions are setTimeout and setInterval. Both of these functions take a function as an argument and execute it after a certain amount of time.

We have touched on these before, but let's take a closer look at how they work.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/d4DCgCqxGbs" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the `app.js` code from the video:

setTimeout:

```javascript
const id = setTimeout(() => console.log('hi'), 2000)

// clearTimeout(id)
```

setInterval:

```javascript
let count = 0
const id = setInterval(() => {
  console.log('hi')
  count++
  if (count > 10) clearInterval(id)
}, 200)
```

## Array Methods

Another common use of higher order functions is with array methods. Many of the array methods in JavaScript take a function as an argument and execute it for each element in the array.

We have seen this with the `forEach` method, but there are many other array methods that use this pattern.

I will be using the following arrays for the upcoming examples. So, if you're following along (you should be), make sure to declare these arrays in your `app.js` file.

```javascript
const pets = [
	{ name: 'Luna', age: 6, type: 'cat' },
	{ name: 'Luke', age: 6, type: 'cat' },
	{ name: 'Leia', age: 6, type: 'cat' },
	{ name: 'Daisy', age: 4, type: 'dog' },
	{ name: 'Lilly', age: 1, type: 'dog' },
	{ name: 'Noodle', age: 0, type: 'cat' },
	{ name: 'Nugget', age: 0, type: 'cat' },
	{ name: 'Freddy', age: 2, type: 'fish' },
	{ name: 'Ethel', age: 2, type: 'fish' }
]

const kids = [
	{ name: 'Blake', age: 6 },
	{ name: 'Avery', age: 4 },
	{ name: 'Riley', age: 1 }
]
```

### Filter

The `filter` method creates a new array with all elements that pass the test implemented by the provided function.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/UHClqIav7TM" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is how we would filter the baby pets (age < 2), using a for loop:

```javascript
const babies = []
for (let i = 0; i < pets.length; i++) {
	if (pets[i].age < 2) babies.push(pets[i])
}
console.log(babies)
```

And here is how we would do the same thing using the `filter` method:

```javascript
const babies = pets.filter(pet => pet.age < 2)
console.log(babies)
```

### Find and Some

The `find` method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

The `some` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/NXDKGb5NSp4" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here are the `find` and `some` methods from the video:

```javascript
const isBaby = x => x.age < 2

// find
const baby = kids.find(isBaby) // or pets.find(isBaby), to find the first baby pet
console.log(baby)

// some
const hasMonkey = pets.some(({ type }) => type.toLowerCase() === 'monkey')
console.log({ hasMonkey })
```

### Map

The `map` method creates a new array with the results of calling a provided function on every element in the calling array.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/ooqvPeWfXgE" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is how we would use a for loop to create an array of pet names:

```javascript
const names = []
for (let i = 0; i < pets.length; i++) {
	names.push(pets[i].name)
}
console.log(names)
```
Again, there's nothing wrong with using a for loop, but the `map` method is a more elegant solution:

```javascript
const names = pets.map(({ name }) => name)
console.log(names)
```

### Reduce

The `reduce` method is the most powerful of the array methods. It executes a reducer function (that you provide) on each element of the array, resulting in a "single" output value.

> [!NOTE] The "single" output value can be an array, object, number, string, etc. It's up to you to decide what the output should be.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/wtl_uPbbWXI" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is how we would use a for loop to sum the ages of the pets:

```javascript
let sum = 0
for (let i = 0; i < pets.length; i++) {
	sum += pets[i].age
}
console.log(sum)
```

And here is how we would do the same thing using the `reduce` method:

```javascript
const sum = pets.reduce((c, { age }) => c + age, 0)
console.log(sum)
```

Let's take another look at the `reduce` method. In this example we'll start with a sentence and end with an object that contains the count of each letter in the sentence.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/J2OK64sxfN0" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

```javascript
const sentence = 'Hey there!'
const expected = {
	"h": 2,
	"e": 3,
	"y": 1,
	" ": 1,
	"t": 1,
	"r": 1,
	"!": 1
}

const characters = sentence.split('')
const result = characters.reduce((prev, letter) => {
	if (prev[letter]) prev[letter]++
	else prev[letter] = 1
	return prev
}, { })
```

## Function Composition

We often use the previous array methods together to create more complex operations. This is called function composition.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/z-RpIXc20Y0" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the code from the video:

```javascript
const isBaby = x => x.age < 2
const isDog = ({ type }) => type.toLowerCase() === 'dog'

const babyDogNames = pets.filter(isDog).filter(isBaby).map(x => x.name)
//console.log(babyDogNames)

const babyNotDogNames = pets
	.filter(p => !isDog(p))
	.filter(isBaby)
	.map(x => x.name)
console.log(babyNotDogNames)
```

## Function Currying

Function currying is a technique that allows us to create a new function by partially applying a function to its arguments. This is a powerful technique that allows us to create more modular and reusable code.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/BYxNrYy_Ft8" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the code for the curried add function from the video:

```javascript
const add = n1 => n2 => n1 + n2
const add5 = add(5)
console.log(add5(10)) // 15
```

Here is a more useful example of function currying. It uses the `filter` method to create a function that filters an array of pets by age.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/7V3Fl7cA4yo" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

```javascript
const makeFilterByAge = (min, max) => ({ age }) => age >= min && age <= max

const isBaby = makeFilterByAge(0, 2)
const isYoung = makeFilterByAge(3, 5)
const isMiddle = makeFilterByAge(6, 10)
const isOld = makeFilterByAge(11, 1000)

console.log(pets.filter(isBaby))
console.log(pets.filter(isYoung))
console.log(pets.filter(isMiddle))
console.log(pets.filter(isOld))
```

# Exercises

[Higher Order Functions Exercises](/appel/javascript/higher-order-functions-exercises)