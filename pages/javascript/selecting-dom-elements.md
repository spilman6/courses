---
title: 'Selecting DOM Elements'
subtitle: 'Modern JavaScript'
---

# Selecting DOM Elements

aIn this unit, we will learn how to select DOM elements using the `querySelector` method in JavaScript.

The `querySelector` method is a powerful tool that allows you to select DOM elements using CSS selectors. It returns the first element that matches the specified selector.

## Getting the Example Website

Before we get started, let's clone down some starter code.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/BnYxmvaHtBQ" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

You can find the starter code [here](https://github.com/RDAppel/example-website).

# The Document Object Model (DOM)

The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/vlu4gArqiGI" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Creating and Attaching our JavaScript File

Now that we have our starter code, let's create a JavaScript file and attach it to our HTML page.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/5VTGIBcW1CM" width="100%" height="100%" frameborder="0"
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

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/ypYqrbL6fwA" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Selecting by ID and Class

Let's take a look at how we can select DOM elements by ID and class:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/6vQzdEs3xtM" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

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

# Exercises

[Query Selector Exercises](/appel/javascript/selecting-dom-elements-exercises)
