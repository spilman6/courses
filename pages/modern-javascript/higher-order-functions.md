---
title: Higher Order Functions
subtitle: Modern JavaScript
hideNav: false

live: https://fvtc.software/appel/modern-javascript/higher-order-functions
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

# Array Methods

Another common use of higher order functions is with array methods. Many of the array methods in JavaScript take a function as an argument and execute it for each element in the array.

For the next few sections, I will be using the following arrays. To save you some time, please copy and paste these arrays into your `app.js` file.

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

## forEach

The `forEach` method is used to iterate over an array and execute a function for each element in the array.

We have completed the same code using a `for` loop, but I think you will agree that the `forEach` method is much cleaner and easier to read.

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
// for (let i = 0; i < pets.length; i++) {
//   console.log(pets[i].name)
// }

pets.forEach(pet => console.log(pet.name))
```

### Using Object Destructuring

Another advantage of using the `forEach` method is that it is more reusable. Take a look at the following example:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Here is the example code:

```javascript
const logName = ({ name }) => console.log(name)

//pets.forEach(logName)
kids.forEach(({ name }) => console.log(name))
```
In the future, we are going to see a bunch of ways that we can write small reusable functions like this.

> [!Important] The `forEach` method does not return anything, and it does not modify the original array.

## Filter

Next, let's look at the `filter` method. The `filter` method is used to create a new array with all elements that pass the test implemented by the provided function.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Here is the code that we added to the `app.js` file:

```javascript
pets.filter(({type}) => type === 'cat')
    .forEach(logName)
```

Imagine for a moment that we wanted to use `for` loops to achieve the same result. It would be a lot more code and a lot harder to read!

> [!Important] The `filter` method always returns a new array, with the same or fewer number of elements as the original array.

### Chaining Methods

As you saw in the previous example, we can chain methods together. This is a common practice in JavaScript and is a great way to write clean and readable code.

## Map

The `map` method, like the `filter` method, returns a new array. The difference is that the `map` method transforms each element in the array using the provided function. Let's take a look:

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
const petNames = pets.map(({ name }) => name)
//console.log(petNames)

const olderPets = pets.map(({ name, age, type }) => {
	const newAge = age + 1
	return { name, type, age: newAge }
})
console.log(olderPets)
```

> [!Important] The `map` method always returns a new array, with the same number of elements as the original array.

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

In this exercise, use the `kids` array, and print out the name of each kid that is 3 or older.

Then create a new array where each kid is three years older, and their name is in all uppercase. To uppercase a string, you can use the `string.toUpperCase()` method. Console log the new array.

Make the code as concise as possible. You can use the `logName` function that we created earlier.

## Hints {#exercise-1-hints}

<details>
	<summary>How do I filter the kids that are 3 or older?</summary>

Create a function that returns true if the age is 3 or older, like so:

```javascript
({ age }) => (age >= 3)
```

</details>

<details>
	<summary>How do I make the name uppercase?</summary>

You can use the `toUpperCase` method on a string, like so:

```javascript
const upperName = name.toUpperCase()
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the Answer</summary>

```javascript
kids.filter(({ age }) => age >= 3).forEach(logName)

const olderKids = kids.map(({ name, age }) => ({ name: name.toUpperCase(), age: age + 3 }))
console.log(olderKids)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Find and Some

Sometimes we just want to find the first element in an array that meets a certain condition. This is where the `find` method comes in.

Additionally, we sometimes just want to know if an element exists in an array, but we don't actually care which element it is. This is where the `some` method comes in.

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
const isCat = ({ type }) => type === 'cat'

const firstCat = pets.find(isCat)
console.log(firstCat) // undefined if no cat is found

const hasFish = pets.some(({ type }) => type === 'fish')
if (hasFish) console.log('We have fish!')
```

> [!Important] The `find` method returns the first element that meets the condition, or `undefined` if no element meets the condition. The `some` method returns a boolean value.


## Sort

The `sort` method sorts the elements of an array in place and returns the sorted array. It's important to note that the sort method modifies the array! If you are using node.js version 20 or later, you can use `toSorted` to create a new array that is sorted.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the sort code from the video:

```javascript
const compareAge = (a, b) => a.age === b.age ? 0 : a.age > b.age ? 1 : -1
const compareName = (a, b) => a.name.localeCompare(b.name)
const compareType = (a, b) => a.type.localeCompare(b.type)


//console.log(pets.toSorted(compareAge))
console.log([...pets].sort(compareAge)) // this is the same as the line above
console.log(pets)

//const sorted = pets.sort(compareName)
const sorted = pets.sort(compareType)
console.log(sorted)
```

> [!NOTE] If you have an array of primitive types, you can use the `sort` method directly on the array. For example, `const sortedNames = petNames.sort()` will sort the `petNames` array.

# Exercise 2

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, create an array called sortedCatNames that contains the names of the cats in the pets array, sorted alphabetically. Console log the sortedCatNames array.

## Hints {#exercise-2-hints}

<details>
	<summary>How do I get an array of cats?</summary>

Use the `filter` method to create an array of cats, like so:

```javascript
const cats = pets.filter(({ type }) => type === 'cat')
```

<details>
	<summary>How do I get an array of names?</summary>

Use the `map` method to create an array of names, like so:

```javascript
const petNames = pets.map(({ name }) => name)
```

</details>

<details>
	<summary>How do I sort the array?</summary>

Use the `sort` method to sort the array, like so:

```javascript
const sortedNames = petNames.sort()
```

</details>


## Solution {#exercise-2-solution}

<details>
	<summary>Show the Answer</summary>

```javascript
const cats = pets.filter(({ type }) => type === 'cat')
const sortedCatNames = cats.map(({ name }) => name).sort()
console.log(sortedCatNames)

// if you were using the `isCat` function from earlier:
const sortedCatNames2 = pets.filter(isCat).map(({ name }) => name).sort()
console.log(sortedCatNames2)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Reduce

The `reduce` method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. This is a very powerful method that can be used in many different ways.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```javascript
const totalAge = pets.reduce((acc, { age }) => acc + age, 0)
console.log(totalAge)

const petNames = pets.reduce((acc, { name }) => `${acc} ${name}`, '')
console.log(petNames)
```

> [!Important] The `reduce` method always returns a single value. This value can be a number, string, object, or array.

Let's continue working with Reduce. In this video we will use the `reduce` method to mimic the `map`, and `filter` methods.

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
// equivalent of pet.map (getting the name)
const petNames = pets.reduce((acc, { name }) => [ ...acc, name ], [])
console.log(petNames)

// equivalent of pet.filter (getting cats)
const cats = pets.reduce((acc, pet) => {
	if (pet.type === 'cat') return [ ...acc, pet ]
	return [ ...acc ]
}, [])
console.log(cats)
```

Let's go over one more example. In this video we will use `reduce` to build a new object from an array of objects. This is a very common use case for the `reduce` method.

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
// const desiredOutput = {
// 	cat: [ 'Luna', 'Luke', 'Leia', 'Noodle', 'Nugget' ],
// 	dog: [ 'Daisy', 'Lilly' ],
// 	fish: [ 'Freddy', 'Ethel' ]
// }

const namesByType = pets.reduce((acc, { type, name }) => {
	if (!acc[type]) acc[type] = [ name ]
	else acc[type].push(name)
	return acc
}, {})

console.log(namesByType)
```