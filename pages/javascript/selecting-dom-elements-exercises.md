---
title: 'Selecting DOM Elements - Exercises'
subtitle: 'Modern JavaScript'
---

# Setup HTML

We will be using the following HTML for the exercises:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Week 2 Exercises</title>
	<style>.underlined { text-decoration: underline; }</style>
</head>
<body>
	<h1></h1>
	<p></p>
	<div>
		<p></p>
		<p class="underlined"></p>
	</div>
	<p id="footer"></p>
</body>
</html>
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

For this exercise, create a JavaScript file called `exercise1.js` and link it to the HTML file using a `<script>` tag.

In the JavaScript file, select the `<h1>` element and set its `textContent` to "Exercise 1".

## Hint

<details>
	<summary>How do I attach a JavaScript file to an HTML file?</summary>

```html
<script src="exercise1.js" defer></script>
```

> [!NOTE] Remember to use the `defer` attribute on the `<script>` tag to ensure that the JavaScript file is loaded after the HTML file has been parsed.

</details>

<details>
	<summary>How do I select the `&gt;h1&lt;` element?</summary>

```js
const h1 = document.querySelector('h1')
```

</details>

<details>
	<summary>How do I set the `textContent` of an element?</summary>

```js
h1.textContent = 'Exercise 1'
```

</details>

# Solution

<details>
	<summary>Show the answer</summary>

HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Week 2 Exercises</title>
	<style>.underlined { text-decoration: underline; }</style>
	<script src="exercise1.js" defer></script>
</head>
<body>
	<h1></h1>
	<p></p>
	<div>
		<p></p>
		<p class="underlined"></p>
	</div>
	<p id="footer"></p>
</body>
</html>
```

JavaScript (exercise1.js):

```js
const h1 = document.querySelector('h1')
h1.textContent = 'Exercise '1
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

# Exercise 2

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

For this exercise, create a JavaScript file called `exercise2.js` and link it to the HTML file using a `<script>` tag.

**Do not add the defer tag!**

In exercise2.js, do the following:

1. Select the first `<p>` element (the one before the div) and set its `textContent` to "Exercise 2 - Step 1".

2. Select the `<p>` element with the class `underlined` and set its `textContent` to "Exercise 2 - Step 2".

3. Select the `<p>` element inside the `<div>` and set its `textContent` to "Exercise 2 - Step 3".

4. Select the `<p>` element with the id `footer` and set its `textContent` to "Exercise 2 - &gt;Your Name&lt;".

## Hint

<details>
	<summary>How do I get the script to run without using `defer`?</summary>

Place the `<script>` tag at the bottom of the `<body>` tag.

```html
</body>
<script src="exercise2.js"></script>
```

Or, use the `DOMContentLoaded` event inside of the JavaScript file.

```js
document.addEventListener('DOMContentLoaded', () => {
	// Your code here
})
```
	
</details>

<details>
	<summary>How do I select the first `&gt;p&lt;` element?</summary>

```js
const p = document.querySelector('p')
```

</details>

<details>
	<summary>How do I select the `&gt;p&lt;` element with the class `underlined`?</summary>

```js
const p = document.querySelector('.underlined')
```

</details>

<details>
	<summary>How do I select the `&gt;p&lt;` element inside the `&gt;div&lt;`?</summary>

```js
const p = document.querySelector('div p')
```

</details>

<details>
	<summary>How do I select the `&gt;p&lt;` element with the id `footer`?</summary>

```js
const p = document.querySelector('#footer')
```

</details>