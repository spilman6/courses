---
title: Arrays - Exercises
subtitle: Modern JavaScript
hideNav: false

live: https://fvtc.software/appel/javascirpt_archive/arrays-exercises
---

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/9TPk5emE3m4" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Create a webpage that contains a `ul` element that has the class `people`.

Add a script tag to attach a JavaScript file, called `site.js`, to the page. Remember to use the `defer` attribute.

In the `site.js` file, create an array containing the information for 3 people. Each person should have a `firstName`, `lastName`, `age`, and `hobbies` property. Each person in your array should have at least 2 hobbies.

Create an arrow function that prints a person's name and age to the console. For example, "John Smith is 30 years old".

Then loop through the array and call the arrow function for each person. You can either use the `forEach` method or a `for` loop.

Use object destructuring to access the properties of each person.

## Hints  {#exercise-1-hints}

<details>
	<summary>How do I create an array of objects?</summary>

You can create an array of objects like this:

```javascript
const people = [
	{
		// properties for person 1
	},
	{
		// properties for person 2
	},
	{
		// etc...
	}
]
```

</details>

<details>
	<summary>How do I loop through an array?</summary>

You can loop through an array using the `forEach` method:

```javascript
people.forEach(person => {
	// do something with the person
})
```

Or you can use a `for` loop:

```javascript
for (let i = 0; i < people.length; i++) {
	const person = people[i]
	// do something with the person
}
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the answer</summary>

```javascript
const people = [
	{
		firstName: 'John',
		lastName: 'Smith',
		age: 30,
		hobbies: ['reading', 'music']
	},
	{
		firstName: 'Jane',
		lastName: 'Doe',
		age: 25,
		hobbies: ['sports', 'movies']
	},
	{
		firstName: 'Bob',
		lastName: 'Jones',
		age: 20,
		hobbies: ['hiking', 'camping']
	}
]

people.forEach(({ firstName, lastName, age }) => {
	console.log(`${firstName} ${lastName} is ${age} years old`)
})
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/N2sPfjQdI4Q" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 2

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/wiMrugHJv4w" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Create an arrow function called `generatePersonList` that generates `li` and `span` elements for a person and appends them to the `ul` element with the class `people`.

You will have to append the `span` element to the `li` element, and then append the `li` element to the `ul` element.

Use string interpolation to set the text content of the `span` element.

For example, when your function is called like this:

```javascript
generatePersonList({ firstName: 'John', lastName: 'Smith' })
generatePersonList({ firstName: 'Jane', lastName: 'Doe' })
```

It should generate the following HTML:

```html
<ul class="people">
	<li>
		<span>John Smith</span>
	</li>
	<li>
		<span>Jane Doe</span>
	</li>
</ul>
```

When your function is created, call it for each person in your array using the `forEach` method.

## Hints {#exercise-2-hints}

<details>
	<summary>How do I create an element?</summary>

You can create a `li` element like this:

```javascript
const li = document.createElement('li')
```

And you can create a `span` element like this:

```javascript
const span = document.createElement('span')
```

</details>

<details>
	<summary>How do I append an element to another element?</summary>

You can append an element to another element using the `append` method:

```javascript
const ul = document.querySelector('ul.people')
ul.append(li)
```

</details>

## Solution {#exercise-2-solution}

<details>
	<summary>Show the answer</summary>

```javascript
const generatePersonList = ({ firstName, lastName }) => {
	 // access the ul element
	const ul = document.querySelector('ul.people')
	
	// create the li and span elements
	const li = document.createElement('li')
	const span = document.createElement('span')	

	// set the text content of the span element (using string interpolation)
	span.textContent = `${firstName} ${lastName}`

	// append the elements to their parents
	ul.append(li)
	li.append(span)
}

people.forEach(generatePersonList)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/gIaFWQa8fkQ" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 3

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/x26j46u93SQ" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Modify your `generatePersonList` function so that it also displays the person's age and hobbies. 

The age should be displayed in parentheses after the person's name, and the hobbies should be displayed as an unordered list with each hobby appended as a list item.

For example, when your function is called like this:

```javascript
const examplePerson = {
	firstName: 'John',
	lastName: 'Smith',
	age: 30,
	hobbies: ['reading', 'music']
}

generatePersonList(examplePerson)
```

It should generate the following HTML:

```html
<ul class="people">
	<li>
		<span>John Smith (30)</span>
		<ul>
			<li>reading</li>
			<li>music</li>
		</ul>
	</li>
</ul>
```

> [!TIP] You will have to create an unordered list and append it to the `li` element. Then you will have to loop through the hobbies array and create a list item for each hobby.

## Hints {#exercise-3-hints}

<details>
	<summary>How do I create an unordered list?</summary>

You can create an unordered list like this:

```javascript
const ul = document.createElement('ul')
```

</details>

<details>
	<summary>How do I loop through an array and create elements?</summary>

You can loop through an array using the `forEach` method:

```javascript
hobbies.forEach(hobby => {
	// do something with the hobby
})
```

</details>

## Solution {#exercise-3-solution}

<details>
	<summary>Show the answer</summary>

```javascript
const generatePersonList = ({ firstName, lastName, age, hobbies }) => {
	// access the ul element
	const ul = document.querySelector('ul.people')

	// create the li and span elements
	const li = document.createElement('li')
	const span = document.createElement('span')
	const hobbiesUl = document.createElement('ul')

	// set the text content of the span element (using string interpolation)
	span.textContent = `${firstName} ${lastName} (${age})`

	// loop through the hobbies array and create a list item for each hobby
	hobbies.forEach(hobby => {
		const li = document.createElement('li')
		li.textContent = hobby
		hobbiesUl.append(li)
	})

	// append the elements to their parents
	ul.append(li)
	li.append(span)
	li.append(hobbiesUl)
}

people.forEach(generatePersonList)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/9Dn9A-dv4N4" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>
