---
title: 'Form Validation and LocalStorage - Exercises'
subtitle: 'Modern JavaScript'
---

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Create a webpage using the following HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Exercises</title>
	<script src="/site.js" defer></script>
	<style>
		form {
			display: flex;
			flex-direction: column;
			width: 200px;
			gap: 10px;
		}
		#error {
			color: red;
			font-weight: bold;
		}
	</style>
</head>
<body>
	<form>
		<input type="text" name="firstName" id="firstName" placeholder="First Name">
		<input type="text" name="lastName" id="lastName" placeholder="Last Name">
		<button id="save">Save Name</button>
	</form>
	<p id="error"></p>
	<div id="output"></div>
</body>
</html>
```

Modify the html to make the two input fields required, and have a minimum length of 2 characters. 

Create a script that listens for the button click event. When the Save button is clicked, the script should check if the two inputs are empty. If they are, the script should display an error message in the paragraph tag. If they are not, the script should save the values of the inputs to `localStorage`.

In regards to storing the data:

- You should allow the user to save multiple people to `localStorage`. 

- Each person should be saved as an object with a 'firstName' and 'lastName' property.

- You should only use a single `key` to save the data to `localStorage`, which means you will need to store the data as an array.

- Remember that `localStorage` can only store strings, so you will need to convert the data to a string before saving it.

To stop the form from submitting, add the following code to your button click event:

```javascript
button.addEventListener('click', e => {
	e.preventDefault()
	// your code here
})
```

This will also make the default error messages disappear.

Test your code by entering some names and checking the `Application` > `localStorage` in the browser's developer tools.

## Hints



## Solution

<details>
	<summary>Show the answer</summary>

HTML:

> [!NOTE] names and ids were removed from the input fields to make the code easier to read.

```html
<input type="text" ... placeholder="First Name" required minlength="2">
<input type="text" ... placeholder="Last Name" required minlength="2">
```

```javascript
const button = document.querySelector('button')
const error = document.querySelector('#error')
const namesDiv = document.querySelector('#output')

const form = document.querySelector('form')
const inputs = form.querySelectorAll('input')

const addPerson = person => {
	const existing = JSON.parse(localStorage.getItem('people')) || []
	localStorage.setItem('people', JSON.stringify([ ...existing, person ]))
}

button.addEventListener('click', e => {
	e.preventDefault()
	if (form.checkValidity()) {
		const firstName = inputs[0].value
		const lastName = inputs[1].value
		addPerson({ firstName, lastName })
		error.textContent = ''
	}
	else {
		error.textContent = 'Please enter a first and last name'
	}
})
```

</details>

# Exercise 2
