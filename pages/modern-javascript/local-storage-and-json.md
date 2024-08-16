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

```js
localStorage.setItem('name', 'Ryan')
```