---
title: 'Higher Order Functions - Exercises'
subtitle: 'Modern JavaScript'
---

# Getting Setup

Before we start, this video will walk you through getting setup for the following exercises.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/Ot6i82oUGLg" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the link to the [rooms.json](https://gist.githubusercontent.com/RDAppel/a53f49158335136462b2954c70429521/raw/600006fbfa061e7136c1267a2bad75a2d7e793e5/rooms.json) file.

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/IctZbF2oexY" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Using the `rooms` array, create an array of all the room names. Call the array `roomNames`, and log it to the console.

## Hint {#exercise-1-hint}

<details>
	<summary>How do I get an array of just names?</summary>

You can use the `map` method to create a new array based on the existing array. Here's an example:

```javascript
const petNames = pets.map(pet => pet.name)
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the answer</summary>

```javascript
const roomNames = rooms.map(room => room.name)
console.log(roomNames)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/qp_Gkd2SR0c" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 2

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/xY0tzJV7ZB8" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Using the `rooms` array, create an array of all the rooms that have televisions. Call the array `roomsWithTVs`, and log it to the console.

Make sure that your array contains the entire room object, not just the name of the room.

Remember that the `?.` operator can be used to safely access nested properties. For example, `pet.owner?.name?.trim()` will not throw an error if `pet.owner` or `pet.owner.name` is `null`.

There should be 3 room objects in the resulting array. Family Room, Guest Bedroom, Master Bedroom.

## Hint {#exercise-2-hint}

<details>
	<summary>How do I filter an array?</summary>

You can use the `filter` method to create a new array that only contains the elements that pass a test. Here's an example:

```javascript
const dogs = pets.filter(pet => pet.type === 'dog')
```

</details>

## Solution {#exercise-2-solution}

<details>
	<summary>Show the answer</summary>

```javascript
const roomsWithTVs = rooms.filter(room => room.media?.devices?.includes('tv'))
console.log(roomsWithTVs)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/KSX_S0YPIkI" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 3

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/GA_XbZGhkos" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Using the `rooms` array, create an array that contains the names of all the rooms with at least one fan. Sort the array alphabetically. Call the array `roomsWithFans`, and log it to the console.

## Hint {#exercise-3-hint}

<details>
	<summary>How do I sort an array?</summary>

You can use the `toSortex` method to sort an array. Here's an example:

```javascript
const sortedPets = pets.sort((a, b) => a.name.localeCompare(b.name))
```

</details>

## Solution {#exercise-3-solution}

<details>
	<summary>Show the answer</summary>

```javascript
const roomsWithFans = rooms
	.filter(({ fans }) => fans?.length)
	.map(({ name }) => name)
	.sort((a, b) => a.localeCompare(b))
console.log(roomsWithFans)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/Ffmdi05uslk" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 4

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/iU9N25ugoCM" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Use Array.reduce() to create an array that contains all of the lights without any duplicates. Call the array `allLights`, and log it to the console.

> [!TIP] A common way to make sure that an array doesn't contain duplicates is to convert it to a Set and then back to an array. Below is an example of how to do that:

```javascript
const pets1 = [ 'dog', 'cat' ]
const pets2 = [ 'cat', 'fish' ]
const uniquePets = [...new Set([...pets1, ...pets2])]
console.log(uniquePets) // [ 'dog', 'cat', 'fish' ]
```

## Hint {#exercise-4-hint}

<details>
	<summary>How do I use reduce to create an array?</summary>

You can use the `reduce` method to create an array based on the existing array. Here's an example:

```javascript
const dogs = [
	{ name: 'daisy', likes: [ 'walks', 'treats', 'food' ] },
	{ name: 'buddy', likes: [ 'treats', 'food', 'car rides' ] },
	{ name: 'bruin', likes: [ 'treats', 'human food' ] }
]

const likes = dogs.reduce((prev, curr) => {
	return [ ...prev, ...curr.likes ]
}, [ ])

console.log(likes) 
// [ 'walks', 'treats', 'food', 'treats', 'food', 'car rides', 'treats', 'human food' ]
```

</details>

## Solution {#exercise-4-solution}

<details>
	<summary>Show the answer</summary>

```javascript
const allLights = rooms.reduce((prev, curr) => {
	return [ ...new Set([ ...prev, ...curr.lights ]) ]
}, [ ])

console.log(allLights)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/oAKOFSGVXdk" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 5

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/pCVjeH7TW6E" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Use Array.reduce() to create an object that contains the a `slug` property for each room. The `slug` should be the room name, converted to lowercase, with spaces replaced by hyphens. Call the object `roomSlugs`, and log it to the console.

> [!NOTE] A slug is a URL-friendly version of a string. For example, the slug for "Living Room" would be "living-room".

We have not covered how to 'replace' characters in a string. Before you look at the hint below, try to figure out how to do it on your own. If you get stuck, the hint will help you out.

The result should look similar to:

```javascript
{
	"Outside": "outside",
	"Balcony": "balcony",
	// ... 
	"Main Bathroom": "main-bathroom",
	"Family Room": "family-room",
	"Laundry Room": "laundry-room",
	// ...
	"Main Office": "main-office",
	"Upstairs Office": "upstairs-office"
}
```

## Hints {#exercise-5-hints}

<details>
	<summary>How do I replace characters in a string?</summary>

You can use the `replace` method to replace characters in a string. Here's an example:

```javascript
const sentence = 'Hey there!'
const newSentence = sentence.replace('Hey', 'Hello')
console.log(newSentence) // 'Hello there!'
```

This only replaces the first instance of the word.

If you want to replace all instances, you can use the `replaceAll` method:

```javascript
const sentence = 'Hey there! Hey everyone!'
const newSentence = sentence.replaceAll('Hey', 'Hello')
console.log(newSentence) // 'Hello there! Hello everyone!'
```

</details>

<details>
	<summary>How do I create an object using reduce?</summary>

You can use the `reduce` method to create an object based on the existing array. Here's an example:

```javascript
const pets = [
	{ name: 'daisy', type: 'dog' },
	{ name: 'buddy', type: 'dog' },
	{ name: 'fluffy', type: 'cat' }
]

const petTypes = pets.reduce((prev, { name, type }) => {
	prev[name] = type
	return prev
}, { })
```

</details>

## Solution {#exercise-5-solution}

<details>
	<summary>Show the answer</summary>

```javascript
const roomSlugs = rooms.reduce((prev, ({ name })) => {
	prev[name] = name.toLowerCase().replaceAll(' ', '-')
	return prev
}, { })

console.log(roomSlugs)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/jZ7aozwbd-Y" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>
