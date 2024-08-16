---
title: Local Storage and JSON
subtitle: Modern JavaScript
---

# Local Storage

Local storage is a way to store data in the browser. This data is stored in the browser's memory and persists even after the browser is closed.

Local storage is a key-value store. It only stores strings. We will use JSON to store more complex data types. More on that later.

For now, let's look at how to use local storage.

## Storing Data

To store data in local storage, we use the `setItem` method. This method takes two arguments: a key and a value. Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here's the code:

```javascript
localStorage.setItem('name', 'Ryan')
```

Next, let's grab the data that the user has entered and store it in local storage.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Retrieving Data

Now that we have stored data in local storage, we need to retrieve it. We use the `getItem` method to do this. This method takes one argument: the key of the data we want to retrieve.

Let's retrieve the data we stored earlier:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here's the code:

```javascript
const key = 'user input'
const span = document.querySelector('span')
const userInput = document.querySelector('#input')
const button = document.querySelector('button')

button.addEventListener('click', () => {
	localStorage.setItem(key, userInput.value)
})

const storedValue = localStorage.getItem(key) || 'Welcome'
span.textContent = storedValue
```

## Storing Objects and Arrays

Since Local Storage only stores strings, we need to convert objects and arrays to strings before storing them. We can use JSON for this. JSON stands for JavaScript Object Notation. It is a way to represent data in a string format.

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
const person = {
	name: "Jim",
	age: 50
}

localStorage.setItem('person', JSON.stringify(person))

// console.log(JSON.stringify(person))
// console.log(person)

const titles = [
	"The Lord of the Rings",
	"Harry Potter",
	"Game of Thrones"
]

localStorage.setItem('titles', JSON.stringify(titles))

// console.log(JSON.stringify(titles))
// console.log(titles)
```

## Retrieving Objects and Arrays

To retrieve objects and arrays from local storage, we need to parse the string back into an object or array. We use the `JSON.parse` method to do this.

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
const retreivedPerson = localStorage.getItem('person')
try {
	console.log(JSON.parse(retreivedPerson))
}
catch {
	console.log('invalid json in local storage')
}
```

## Removing Data

To remove data from local storage, we use the `removeItem` method. This method takes one argument: the key of the data we want to remove.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

As always, here is the code:

```javascript
const deleteButton = document.querySelector('#delete')

deleteButton.addEventListener('click', () => {
	localStorage.removeItem(key)
	span.textContent = 'Welcome'
})
```

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, you will create a custom welcome message that will be stored in local storage. When the user visits the page, for the first time they will see a message that simply says 'Welcome'.

The user can then enter their first and last name into two input fields and click a button to save the message. When the user returns to the page, the message will now say, 'Welcome Back, [first name] [last name]!'.

The user should also be able to delete their data by clicking a button.

You must save the first and last name as a single object in local storage! You will need to use JSON.stringify to save the object and JSON.parse to retrieve it.

> [!IMPORTANT] Remember to use the `try` and `catch` blocks when parsing the JSON data from local storage. This will prevent your code from crashing if the data is invalid.

You don't need to create a new project for this exercise. You can add the modify the code from the previous video.

To save you some work, you can replace the body of the HTML file with the following code:

```html
<body>
	<span id="welcome">Welcome</span>
	<br>
	<input type="text" name="first" id="first">
	<br>
	<input type="text" name="last" id="last">
	<br>
	<button id="save-button">Save</button>
	<button id="delete-button">Delete</button>
</body>
```

## Hints {#exercise-2-hints}

<details>
	<summary>How do I get the first and last name from the input fields?</summary>

You can use the `value` property of the input fields to get the text that the user has entered.

```javascript
const firstName = document.querySelector('#first').value
const lastName = document.querySelector('#last').value
```

</details>

<details>
	<summary>How do I save the first and last name as an object in local storage?</summary>

You can create an object with the first and last name and then use `JSON.stringify` to convert it to a string.

```javascript
const user = {
	first: firstName,
	last: lastName
}

localStorage.setItem('user', JSON.stringify(user))
```

</details>

<details>
	<summary>How do I retrieve the first and last name from local storage?</summary>

You can use `localStorage.getItem` to get the string from local storage and then use `JSON.parse` to convert it back to an object.

```javascript
const userString = localStorage.getItem('user')

try {
	const { firstName, lastName } = JSON.parse(userString) // destructuring the object
}
catch {
	console.log('invalid json in local storage')
}
```

</details>

<details>
	<summary>How do I display the first and last name on the page?</summary>

You can use the `textContent` property of an element to display the first and last name.

```javascript
const welcome = document.querySelector('#welcome')
welcome.textContent = `Welcome Back, ${firstName} ${lastName}!`
```

</details>

<details>
	<summary>How do I delete the data from local storage?</summary>

You can use `localStorage.removeItem` to delete the data from local storage.

```javascript
const deleteButton = document.querySelector('#delete-button')
deleteButton.addEventListener('click', () => {
	localStorage.removeItem('user')
	welcome.textContent = 'Welcome'
})
```

</details>

## Solution {#exercise-2-solution}


<details>
	<summary>Show Solution</summary>

```javascript
const key = 'user'
const welcome = document.querySelector('#welcome')
const firstInput = document.querySelector('#first')
const lastInput = document.querySelector('#last')
const saveButton = document.querySelector('#save-button')
const deleteButton = document.querySelector('#delete-button')

saveButton.addEventListener('click', () => {
	const first = firstInput.value
	const last = firstInput.value

	const user = { first, last }
	localStorage.setItem(key, JSON.stringify(user))
})

deleteButton.addEventListener('click', () => {
	localStorage.removeItem(key)
	welcome.textContent = 'Welcome'
})

const data = localStorage.getItem(key)
try {
	const { first, last } = JSON.parse(data)
	welcome.textContent = `Welcome back, ${first} ${last}!`
}
catch {
	welcome.textContent = 'Welcome'
}
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>