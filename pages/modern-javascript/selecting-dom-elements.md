---
title: Selecting DOM Elements
subtitle: Modern JavaScript
---

# Selecting DOM Elements

In this unit, we will learn how to select DOM elements using the `querySelector`, `querySelectorAll`, and `getElementById` methods. We will also learn how to attach a JavaScript file to an HTML page.

## Getting the Example Website

Before we get started, let's clone down some starter code.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

You can find the starter code [here](https://github.com/fvtc/js-ryans-webpage).

# The Document Object Model (DOM)

The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Creating and Attaching our JavaScript File

Now that we have our starter code, let's create a JavaScript file and attach it to our HTML page.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that we added to our HTML:

```html
<script src="site.js" defer></script>
```

The `defer` attribute tells the browser to wait until the HTML has been parsed before executing the JavaScript. This is important because we want to make sure that the JavaScript has access to the DOM before it tries to select any elements.

Here is the code that we ended up with in our JavaScript file:

```javascript
console.log(document.querySelector('h1'))
```

# Selecting Elements by Tag

As you saw in the video above, we can select DOM elements using the `querySelector` method. This method takes a CSS selector as an argument and returns the first element that matches the selector.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

In this exercise, you will modify the example that we've been working on, to change the text "Main Content Section" color to red.

I want you to store the element in a variable called `mainContentSection` and then use that variable to change the color.

## Hints {#exercise-1-hints}

<details>
	<summary>How do I get the element and store it into a variable?</summary>

Since the element is the first `h2` tag on the page, you can use the `querySelector` method to get it and store it in a variable.

```javascript
const mainContentSection = document.querySelector('h2')
```

</details>

<details>
	<summary>How do I change the color of the text to red?</summary>

You can use the `style` property of the element to change the color.

```javascript
mainContentSection.style.color = 'red'
```

Or using the HEX value:

```javascript
mainContentSection.style.color = '#ff0000'
```


</details>

## Solution {#exercise-1-solution}

<details>
  <summary>Show the Answer</summary>


```javascript
const mainContentSection = document.querySelector('h2')
mainContentSection.style.color = 'red'
// or
// mainContentSection.style.color = '#ff0000'
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

# Selecting Elements by ID and Class

In addition to selecting elements by tag, we can also select elements by ID and class. Take a look:

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
const about = document.querySelector('#about') // id="about"
about.style.color = 'orange'

const active = document.querySelector('.active') // class="active"
active.style.color = 'blue'
```

# Combining Selectors

We can also combine selectors to get more specific elements. Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

As you saw, the following code will selecto the active element inside of a `section` tag:

```javascript
const active = section.querySelector('section .active')
active.style.color = 'blue'
```

# Selecting Multiple Elements

In addition to selecting a single element, we can also select multiple elements using the `querySelectorAll` method. This method takes a CSS selector as an argument and returns a NodeList of elements that match the selector.

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
const activeElements = document.querySelectorAll('.active')

// add border
//activeElements.forEach(el => el.style.border = '1px solid red')

for (let i = 0; i < activeElements.length; i++)
{
	activeElements[i].style.border = '1px solid red'
}
```

# Exercise 2

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>




## Hints {#exercise-2-hints}

<details>
	<summary>How do I?</summary>

S

```javascript

```

</details>


## Solution {#exercise-1-solution}

<details>
  <summary>Show the Answer</summary>


```javascript

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
