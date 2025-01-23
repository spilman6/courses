---
title: Form Validation and Local Storage - Exercises
subtitle: Modern JavaScript
hideNav: false

live: https://fvtc.software/appel/javascirpt_archive/form-validation-and-local-storage-exercises
---

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/WRQfEqmlJ-s" width="100%" height="100%" frameborder="0"
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
		#output { width: 200px; }
		p > button { float: right; }
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

## Hints {#exercise-1-hints}

<details>
	<summary>How do I make an input required?</summary>

You can make an input required by adding the `required` attribute to the input tag:

```html
<input type="text" ... required>
```

</details>

<details>
	<summary>How do I set a minimum length for an input?</summary>

You can set a minimum length for an input by adding the `minlength` attribute to the input tag:

```html
<input type="text" ... minlength="2">
```

</details>

<details>
	<summary>How do I check if a form is valid?</summary>

You can check if a form is valid by using the `checkValidity` method on the form element:

```javascript
if (form.checkValidity()) {
	// form is valid
}
```

</details>

<details>
	<summary>How do I get the values of the inputs?</summary>

You can get the values of the inputs by using the `value` property of the input elements:

```javascript
const firstName = document.querySelector('#firstName').value
```

</details>

<details>
	<summary>How do I save data to localStorage?</summary>

You can save data to `localStorage` by using the `setItem` method:

```javascript
localStorage.setItem('key', 'value')
```

</details>

<details>
	<summary>How do I convert an object to a string?</summary>

You can convert an object to a string by using the `JSON.stringify` method:

```javascript
const obj = { title: Star Wars', year: 1977 }
const str = JSON.stringify(obj)
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the answer</summary>

HTML:

> [!NOTE] Names and ids were removed from the input fields to make the code easier to read.

```html
<input type="text" ... placeholder="First Name" required minlength="2">
<input type="text" ... placeholder="Last Name" required minlength="2">
```

JavaScript:

> [!NOTE] Your solution may be different than the one shown here.

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
	const isValid = form.checkValidity()

	if (isValid) {
		const firstName = inputs[0].value
		const lastName = inputs[1].value
		addPerson({ firstName, lastName })
	}

	error.textContent = isValid ? '' : 'Please enter a first and last name'
})
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/ivO7l8B4mwk" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 2

<details>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/tLRvTPoKmmU" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Continuing from the previous exercise, modify the script to display the names of the people saved in `localStorage` in the `output` div.

Each name should be displayed in a `p` tag, which should be appended to the `output` div.

When a new person is saved, the `output` div should be updated to include the new person.

## Hints {#exercise-2-hints}

<details>
	<summary>How do I get data from localStorage?</summary>

You can get data from `localStorage` by using the `getItem` method:

```javascript
const data = localStorage.getItem('key')
```

</details>

<details>
	<summary>How do I convert a string to an object?</summary>

You can convert a string to an object by using the `JSON.parse` method:

```javascript
const str = '{"title":"Star Wars","year":1977}'
const obj = JSON.parse(str)
```

</details>

<details>
	<summary>How do I create a new element?</summary>

You can create a new element by using the `createElement` method:

```javascript
const p = document.createElement('p')
```

</details>

<details>
	<summary>How do I append an element to another element?</summary>

You can append an element to another element using the `append` method:

```javascript
const div = document.querySelector('div')
div.append(p)
```

</details>

## Solution {#exercise-2-solution}

<details>
	<summary>Show the answer</summary>

```javascript
const button = document.querySelector('button')
const error = document.querySelector('#error')
const namesDiv = document.querySelector('#output')

const form = document.querySelector('form')
const inputs = form.querySelectorAll('input')

const getExistingPeople = () => JSON.parse(localStorage.getItem('people')) || [ ]

const addPerson = person => {
	localStorage.setItem('people', JSON.stringify([ ...getExistingPeople(), person ]))
}

button.addEventListener('click', e => {
    e.preventDefault()
	const isValid = form.checkValidity()

	if (isValid) {
		const firstName = inputs[0].value
		const lastName = inputs[1].value 
		addPerson({ firstName, lastName })
		appendPerson({ firstName, lastName })
	}

	error.textContent = isValid ? '' : 'Please enter a first and last name'
})

const appendPerson = ({ firstName, lastName }) => {
	const p = document.createElement('p')
	p.textContent = `${firstName} ${lastName}`
	namesDiv.append(p)
}

getExistingPeople().forEach(appendPerson)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/se9ufXOvbsQ" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 3

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/wdTvqGP4l9c" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Continuing from the previous exercise, add a button to each person's `p` tag that will allow the user to remove the person from `localStorage`.

When the button is clicked, the person should be removed from `localStorage` and the `output` div should be updated to reflect the change.

Use the following code to remove an element from the dom:

```javascript
element.remove()
```

Use the following code to get the index of a person in the `people` array:

```javascript
const index = people.findIndex(p => {
	return p.firstName === firstName && p.lastName === lastName
})
```

You can use the index along with the `slice` method to remove the person from the array:

```javascript
const updatedPeople = [ ...people.slice(0, index), ...people.slice(index + 1) ]
```

## Hints {#exercise-3-hints}

<details>
	<summary>How do I create a new button element?</summary>

You can create a new button element by using the `createElement` method:

```javascript
const button = document.createElement('button')
```

</details>

<details>
	<summary>How do I add text to a button?</summary>

You can add text to a button by using the `textContent` property:

```javascript
button.textContent = 'Remove Person'
```

</details>

<details>
	<summary>How do I add an event listener to a button?</summary>

You can add an event listener to a button by using the `addEventListener` method:

```javascript
button.addEventListener('click', () => {
	// your code here
})
```

</details>

## Solution {#exercise-3-solution}

<details>
	<summary>Show the answer</summary>

> [!NOTE] Your solution may be different than the one shown here.

The `appendPerson` function should be modified to include the button. Here is the updated function:

```javascript
const appendPerson = ({ firstName, lastName }) => {
	const p = document.createElement('p')
	p.textContent = `${firstName} ${lastName}`
	namesDiv.append(p)

	const button = document.createElement('button')
	button.textContent = 'Remove'
	p.append(button)
	button.addEventListener('click', () => {
		p.remove()

		const people = getExistingPeople()
		const index = people.findIndex(p => {
			return p.firstName === firstName && p.lastName === lastName
		})
		
		const updatedPeople = [ ...people.slice(0, index), ...people.slice(index + 1) ]
		localStorage.setItem('people', JSON.stringify(updatedPeople))
	})
}
```

</details>


> [!WARNING] There was a small mistake in the walkthrough video!

The anonymous function inside of the people.findIndex method should have had the `&&` operator instead of the `||` operator. Here is the correct code snippet:

```javascript
const index = people.findIndex(p => {
	//return p.firstName === firstName || p.lastName === lastName // this is wrong
	return p.firstName === firstName && p.lastName === lastName // this is correct
})
```

<details>
	<summary>Walkthrough Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/o8dUHYyMDIU" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>
