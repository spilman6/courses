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
console.log(document.querySelector('nav'))
```

# Selecting DOM Elements

Now that we have our JavaScript file attached to our HTML page, let's learn how to select DOM elements.

## Selecting by Tag

As you saw in the video above, we can select DOM elements using the `querySelector` method. This method takes a CSS selector as an argument and returns the first element that matches the selector.

Let's play around with querying DOM elements by tag:


## Selecting by ID and Class

Let's take a look at how we can select DOM elements by ID and class:



### Selecting by ID

As shown above, `querySelector` searches the document for the first occurance of that tag. Often we don't want the first, but instead a specific element.

Take a look at this html:

```html
<div>
    <p>This is an example paragraph.</p>
    <p id="target">This is another paragraph.</p>
</div>
```

There are two paragraphs. Using `querySelector('p')`, will access the first, but what if I want the second paragraph? Well, you probably noticed the id. The actual value of the id, in this case I chose `target`, makes no difference, as long as it matches in the query. Take a look:

```javascript
const secondP = document.querySelector('#target')
```

The `#` specifies that we're looking for an element with an id of `target`. Which is exactly what we have. 

We could also have specified the element type, as follows:

```javascript
const secondP = document.querySelector('p#target')
```

This would then look specifically for a `p` tag with the id of `target`.

> [!NOTE] I don't usually do this because if I decide to later change the element in the html, I would have to update the JavaScript to match.

### Selecting by Class

We can also select elements by class. Take a look at this html:

```html
<div>
	<p>This is an example paragraph.</p>
	<p class="target">This is another paragraph.</p>
</div>
```

In this case, since our target is a class, we use a `.` instead of a `#`:

```javascript
const secondP = document.querySelector('.target')
```

We can also specify the element type:

```javascript
const secondP = document.querySelector('p.target')
```

### Combining Selectors

We can also combine selectors. Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/YKc7_t-28OU" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the first example from the video:


```html
<nav>
	<a href="#">Home</a>
	<a href="#">About</a>
	<a class="copyright" href="#">Contact</a>
</nav>

<footer>
	<p class="copyright">Copyright</p>
</footer>
```

This accesses the `a` tag in the `nav`:

```javascript
const temp = document.querySelector('nav .copyright')
```

This accesses the `p` tag in the `footer`:

```javascript
const temp = document.querySelector('footer .copyright')
```

## Selecting Multiple Elements

So far, we've only looked at selecting a single element. But what if we want to select multiple elements? Well, we can use the `querySelectorAll` method. This method takes a CSS selector as an argument and returns a NodeList of all the elements that match the selector.

Let's take a look at how we can use `querySelectorAll`:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/dEFfEhTtNS0" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Again, using the example from the video:

```html
<nav>
	<a href="#">Home</a>
	<a href="#">About</a>
	<a href="#">Contact</a>
</nav>
```

This accesses all the `a` tags:

```javascript
const links = document.querySelectorAll('nav a')

links.forEach(link => { console.log(link) }) // loop over the NodeList and log each element
```

We can also use `querySelectorAll` to select all elements with a specific class:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/4XIUv-KNal8" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

```javascript
// get all elements with class="copyright"
const copyrights = document.querySelectorAll('.copyright')
```

# Pushing Code Changes to GitHub

Now that we have our JavaScript file attached to our HTML page, let's push our code changes to GitHub.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/pPiASlEwCVk" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

The commands shown in the video are:

```bash
git add .
```

```bash
git commit -m "your commit message"
```

> [!NOTE] Make sure to use a descriptive commit message, and not just "your commit message".

```bash
git push
```


# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/vtSEJdJqzM8" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, create a JavaScript file called `exercise1.js` and link it to the HTML file using a `<script>` tag.

In the JavaScript file, select the `<h1>` element and set its `textContent` to "Exercise 1".

## Hints {#exercise-1-hints}

<details>
	<summary>How do I attach a JavaScript file to an HTML file?</summary>

```html
<script src="exercise1.js" defer></script>
```

> [!NOTE] Remember to use the `defer` attribute on the `<script>` tag to ensure that the JavaScript file is loaded after the HTML file has been parsed.

</details>

<details>
	<summary>How do I select the `&lt;h1&gt;` element?</summary>

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

## Solution {#exercise-1-solution}

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
		<iframe src="https://www.youtube.com/embed/9PwpcvcGLZc" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 2

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/gCTPMQfB0jE" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

For this exercise, create another JavaScript file called `exercise2.js` and link it to the HTML file using a `<script>` tag.

**Do not add the defer tag!**

In exercise2.js, do the following:

1. Select the first `<p>` element (the one before the div) and set its `textContent` to "Exercise 2 - Step 1".

2. Select the `<p>` element with the class `underlined` and set its `textContent` to "Exercise 2 - Step 2".

3. Select the `<p>` element inside the `<div>` and set its `textContent` to "Exercise 2 - Step 3".

4. Select the `<p>` element with the id `footer` and set its `textContent` to "Exercise 2 - &lt;Your Name&gt;".

## Hints {#exercise-2-hints}

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
	<summary>How do I select the first `&lt;p&gt;` element?</summary>

```js
const p = document.querySelector('p')
```

</details>

<details>
	<summary>How do I select the `&lt;p&gt;` element with the class `underlined`?</summary>

```js
const p = document.querySelector('.underlined')
```

</details>

<details>
	<summary>How do I select the `&lt;p&gt;` element inside the `&lt;div&gt;`?</summary>

```js
const p = document.querySelector('div p')
```

</details>

<details>
	<summary>How do I select the `&lt;p&gt;` element with the id `footer`?</summary>

```js
const p = document.querySelector('#footer')
```

</details>

## Solution {#exercise-2-solution}

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
<script src="exercise2.js"></script>
</html>
```

JavaScript (exercise2.js):

```js
const p1 = document.querySelector('p')
p1.textContent = 'Exercise 2 - Step 1'

const p2 = document.querySelector('.underlined')
p2.textContent = 'Exercise 2 - Step 2'

const p3 = document.querySelector('div p')
p3.textContent = 'Exercise 2 - Step 3'

const p4 = document.querySelector('#footer')
p4.textContent = 'Exercise 2 - <Your Name>'
```

Alternatively, you could skip the `const` declarations and do it all in one line:

```js
document.querySelector('p').textContent = 'Exercise 2 - Step 1'

document.querySelector('.underlined').textContent = 'Exercise 2 - Step 2'

document.querySelector('div p').textContent = 'Exercise 2 - Step 3'

document.querySelector('#footer').textContent = 'Exercise 2 - <Your Name>'
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/lLzL3BmRqSw" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>
