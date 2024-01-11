
# Exercise 1

Create a webpage that contains a `p` element with some text. Add a script tag with the following code:

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