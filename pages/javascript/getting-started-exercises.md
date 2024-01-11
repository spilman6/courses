
# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/ZplYC6-PiAE" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Create a webpage that contains a `p` element with some text.

Add a script tag with the following code:

```javascript
const p = document.querySelector('p')

setTimeout(() => {

}, 3000)
```

After 3 seconds, the text inside the `p` element should be replaced with the text `3 seconds elapsed`.

## Hint

<details>
	<summary>How do I change the text of an element?</summary>

You can change the text of an element by setting the `textContent` property:

```javascript
const p = document.querySelector('p')
p.textContent = 'Hello world'
```

</details>

## Answer

<details>
	<summary>Show the answer</summary>

```javascript
const p = document.querySelector('p')

setTimeout(() => {
	p.textContent = '3 seconds elapsed'
}, 3000)
```

</details>

<details>
	<summary>Walkthrough Video</summary>
    	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/t0s9JjVT8pE" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>
