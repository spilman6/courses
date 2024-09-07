---
title: Assignment 5 - Carousel
subtitle: Modern JavaScript
---

# Assignment 5 - Carousel

In this assignment you are going to add a carousel on your homepage. The carousel should display 3 images. The images should automatically change every 5 seconds. The user should be able to manually change the images by clicking on previous/next buttons.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/RlIO-7HDJxY" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Use the following code to help you get started:

Add the following HTML to your page:

```html
<div id="carousel">
	<img alt="Image 1">
	<img alt="Image 2">
	<img alt="Image 3">
</div>
<div id="buttons">
	<button id="prev">Previous</button>
	<button id="next">Next</button>
</div>
```

Add the following to your stylesheet:

```css
#carousel {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-height: 300px;
	overflow: hidden;
	gap: 10px;
}

#carousel img {
	max-height: 300px;
	aspect-ratio: auto 300 / 400;
	border-radius: 10px;
}

#buttons {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
	margin-top: 10px;
}
```

Add the following JavaScript to your site.js file:

```javascript
const urls = [
	'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
	'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
	const offset = currentImage % urls.length
	images.forEach((image, index) => {
		const imageIndex = (index + offset + urls.length) % urls.length
		image.src = urls[imageIndex]
	})
}

showImages()
```

## Specifications

Add code to the JavaScript file to make the carousel work as described above. Use `addEventListener` to listen for clicks on the previous and next buttons.

To shift the images to the left, you can increment the `currentImage` variable. To shift the images to the right, you can decrement the `currentImage` variable. Then, call the `showImages` function to update the images displayed in the carousel.

Use (anonymous) arrow functions to handle the click events.

Note that the first three images in the `urls` array are the images that should be displayed in the carousel. You can add or modify the images in the array to display different images.

Use JavaScript's built-in `setInterval` function to automatically change the images every 5 seconds. It works just like `setTimeout`, but it repeats the function every time the interval is reached. Here is an example:

<div class="no-copy">

```javascript
setTimeout(() => {
	// code to run ONCE after 5 seconds
}, 5000)

setInterval(() => {
	// code to run EVERY 5 seconds
}, 5000)
```

</div>

# Submission

## Pushing to GitHub

You're going to push your changes to your github.io repository. Remember that you are adding to an existing repository, so you don't need to use `git init`.

Once your changes are working on your computer, run the following git commands:

<div class="no-copy">

```bash
git add .

git commit -m "Added carousel"

git push
```

</div>

## Submitting to Blackboard

Once you have your project pushed to GitHub, submit the link to your GitHub Pages site to Blackboard.
