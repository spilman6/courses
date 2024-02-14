---
title: 'Form Validation and Local Storage'
subtitle: 'Modern JavaScript'
---

# Form Validation

In this unit, we will learn how to work with forms in JavaScript. Since the release of HTML5, form validation has become much easier. We can do most of the validation by using the built-in input types and attributes. However, we can also use JavaScript to interact with forms and perform custom validation.

## HTML Form Validation

Let's take a quick look at how we can use HTML to validate forms.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/9yUxjGoP5f4" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the link to the w3schools page that contains a list of the [HTML Form Input Types](https://www.w3schools.com/html/html_form_input_types.asp).

Here is the code for the form that we created in the video:

```html
<form>
	<input type="text" name="name" id="name" placeholder="name" required>
	<input type="email" name="email" id="email" placeholder="email" required>
	<input type="tel" name="phone" id="phone" placeholder="phone" required>
	<input type="password" name="password" id="password" placeholder="password" required minlength="8">
	<input type="submit" id="submit" value="submit">
</form>
```

## Adding Event Listeners to our Inputs

Next, we will add event listeners to our inputs to check for changes and validate the input. We used the  addEventListener method in the last unit to setup a click event on our buttons. We will use the same method to setup input events.

Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/GcfmhPqBP5g" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the JavaScript code that we used to log the input values to the console:

```javascript
const allInputs = document.querySelectorAll('input')
allInputs.forEach(element => {
	if (element.type === 'submit') return

	element.addEventListener('input', () => {
		console.log(element.id)
	})
})
```

And here is the link to the Medium article I mentioned that lists a bunch of the [Add Event Listener DOM Event Types](https://dbchung3.medium.com/add-event-listener-dom-event-types-6c10a844c9d8). Oddly enough, it doesn't list the `input` event that we used in the video, but it does list a bunch of other events that you might find useful. 

## Toggle CSS Class when Valid

In this video, we will create a `.invalid` class in our CSS file and use JavaScript to toggle the class when the input is valid or invalid.

Off-camera, I added a couple of styles to better display the page on the video. You can add this if you want, but it's not necessary:

```html
<style>
	form { width: 220px;}
	input { margin: 2px; }
</style>
```

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/S-2ZvaRDr_w" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the rest of the css that we used in the video:

```css
	.invalid { border: 1px solid red; }
	input:focus {
		outline: none; /* bad practice -- demo only */
		background-color: rgb(241, 241, 241);
	}
```

And we changed the JavaScript to toggle the class when the input is valid or invalid:

```javascript
const allInputs = document.querySelectorAll('input')
allInputs.forEach(element => {
	if (element.type === 'submit') return

	element.classList.add('invalid')
	element.addEventListener('input', () => {
		const { valid } = element.validity
		element.classList.toggle('invalid', !valid)
	})
})
```

## Enabling and Disabling the Submit Button

In this video, we will enable and disable the submit button based on the validity of the form.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/vSuc5t1fBpc" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the JavaScript code that we used to enable and disable the submit button:

```javascript
const checkFormValidity = () => {
	const isValid = selector => document.querySelector(`#${selector}`).checkValidity()
	return [ 'name', 'email', 'phone', 'password' ].every(isValid)
}

const submitButton = document.querySelector('#submit')
submitButton.disabled = true

const allInputs = document.querySelectorAll('input')
allInputs.forEach(element => {
	if (element.type === 'submit') return

	element.classList.add('invalid')
	element.addEventListener('input', () => {
		element.checkValidity()
		const { valid, too } = element.validity
		element.classList.toggle('invalid', !valid)

		submitButton.disabled = !checkFormValidity()
	})
})
```
> [!NOTE] After recording the videos for this page, I thought of a better way to write the `checkFormValidity` function. There is actually a `checkValidity` method that we can use on the form element itself. Here is the updated function:

```javascript
const checkFormValidity = () => {
	// check if the form itself is valid (rather than checking each input)
	return document.querySelector('form').checkValidity()
}
```

# Local Storage

Changing topics, we will now learn how to use local storage in JavaScript. Local storage is a way to store data in the browser. It is a simple key-value store that is available in all modern browsers. We can use it to store data that we want to persist between page loads.

## JSON Stringify and Parse

One thing to note is that local storage can only store strings. This means that if we want to store an object, we need to convert it to a string first. We can do this using the `JSON.stringify` method. We can then convert the string back to an object using the `JSON.parse` method.

Here is a quick video that explains how to use these methods:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/ns-8FBkqV-M" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that we used in the video:

```javascript
const book = {
	"Title": "Dune",
	"Author": "Frank Herbert",
	"Year": 1965 // changed from video to correct year
}

const strName = "{ \"firstName\": \"Ryan\", \"lastName\": \"Appel\" }"

const p = document.querySelector('p')
p.textContent = JSON.stringify(book)

const nameObj = JSON.parse(strName)
console.log(nameObj)
```

## Saving and Retrieving Data

In this video, we will learn how to save and retrieve data from local storage. This is a simple process that involves using the `setItem` and `getItem` methods.

Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/KPmiEplgltY" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the updated html:

```html
<input type="text" id="name">
<button id="save">Save</button>
<p></p>
```

And here is the JavaScript code that we used in the video:

```javascript
const p = document.querySelector('p')
p.textContent = localStorage.getItem('name') || ''

const button = document.querySelector('button')
button.addEventListener('click', () => {
	const name = document.querySelector('input').value
	localStorage.setItem('name', name)
})
```

## Storing Arrays in Local Storage

We can also store arrays (or any type of object) in local storage. We just need to convert the array to a string using `JSON.stringify` before we store it. We can then convert the string back to an array using `JSON.parse` when we retrieve it.

This video explains how to accomplish this:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/7WpeAa0Mdss" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that we used in the video:

```javascript
const p = document.querySelector('p')

/* code in video was commented out */

const names = [ 'Ryan', 'Joe', 'Brian' ]
localStorage.setItem('names', JSON.stringify(names))

const storedNames = JSON.parse(localStorage.getItem('names')) || []
storedNames.forEach(name => {
	const span = document.createElement('span')
	span.textContent = name
	p.append(span)
})
```

## Adding Array Elements to Local Storage

The last feature to implement is the ability to add elements to the array in local storage. We will be using the spread operator to add elements to the array, and then we will update the local storage with the new array.

Let's see how this is done:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/Y0YIwDnO0zU" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the updated code:

```javascript
const getStoredNames = () => JSON.parse(localStorage.getItem('names')) || []

const p = document.querySelector('p')

const button = document.querySelector('button')
button.addEventListener('click', () => {
	const newName = document.querySelector('input').value
	const names = [ ...getStoredNames(), newName ]
	localStorage.setItem('names', JSON.stringify(names))
	displayName(newName)
})

const displayName = name => {
	const span = document.createElement('span')
	span.textContent = name
	p.append(span)
}

getStoredNames().forEach(displayName)
```


# Exercises

[Form Validation and Local Storage Exercises](/appel/javascript/form-validation-and-localstorage-exercises)
