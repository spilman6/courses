---
title: 'Arrays'
subtitle: 'Modern JavaScript'
---

# Arrays

Arrays are a special type of object. They are used to store a list of values. Arrays are a very common data structure in programming. They are used to store a list of items, such as a list of names, a list of numbers, or a list of objects.

We are going to use them to store our product objects from the previous unit.

So, open your project from the last unit. If you don't have it, you can download the code [here](github.com/rdappel/example-website2-part2).

However, before we start, let's create a space on our webpage to display some information. This will allow us to run some code and see the results.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/nMbMfXbiPag" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

As you can see, we added a `<div>` element dynamically using JavaScript.

Here is the code that we added in the video:

```javascript
const div = document.createElement('div')
div.id = 'container2'
document.body.append(div)
```

## Creating Arrays and Accessing Elements

As mentioned above, we use arrays to store a list of values. Let's start testing by creating an array of food items.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/hsNL0SbpyXA" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the code to create and print the array:

```javascript
const foods = [ 'sushi', 'pizza', 'tacos' ]
console.log(foods)
```

> [!NOTE] I generally name my arrays using the plural form of the item. This makes it easier to remember that it is an array.

We can access the elements of an array using the index of the element. Think of the index as an offset from the beginning of the array. The first element has an index of 0, the second element has an index of 1, and so on.

This will print the first element of the array:

```javascript
console.log(foods[0])
```

We can determine the length of an array using the `length` property.

This will print the length of the array:

```javascript
console.log(foods.length)
```

We can use the length property to print the last element of the array:

```javascript
console.log(foods[foods.length - 1])
```

We can also add items to the end of the array using the `push` method:

```javascript
foods.push('pasta')
```

This works even though we declared the array using `const`. The `const` keyword only prevents us from assigning a new value to the variable. It does not prevent us from modifying the contents of the array.

When using a functional style of programming, using `push` is not recommended because it modifies the array.

Instead of using `push`, we can use the spread operator...

## The Spread Operator

The spread operator is a special operator that allows us to expand an array into a list of arguments. It is represented by three dots: `...`

Let's take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/lmqFMAD1LG0" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

In the video, we added a couple of styles to our `<div>` element. Here is the code:

```javascript
div.style.display = 'flex'
div.style.justifyContent = 'center'
```

Here is the `printFavFoods` function from the video:

```javascript
const printFavFoods = (fav, secondFav, third) => {
	const foodDiv = document.createElement('div')
	foodDiv.textContent = `My fav is ${fav}, second is ${secondFav}. Third is ${third}.`
	div.append(foodDiv)
}

printFavFoods(...foods) // spread operator
```

## Copying part of an Array

We can use the spread operator to duplicate, and add to, an array. This is useful when we want to add items to an array without modifying the original array.

Similarly we can use the slice method to copy only part of an array. Again, this leaves the original array unchanged.

Let's take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/D-RbVcHovic" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

As you saw in the video, we can use the spread operator to copy an array:

```javascript
const sierraFavs = [ ...foods, 'salad' ]
```

Or we can add 'salad' to the beginning of the array:

```javascript
const sierraFavs = [ 'salad', ...foods ]
```

We can also use the slice method to copy only part of an array:

```javascript
const sierraFavs = [ 'salad', ...foods ].slice(1, 3)
```

This will create a new array containing 'salad', 'pizza', and 'tacos'.


## Iterating over an Array

We can use a `for` loop to iterate over an array. We can use the `length` property to determine how many times to loop.

Arrays also have a built-in `forEach` method that we can use to iterate over the array.

We will take a look at both methods in this video:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/-70alXfiTGk" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the for loop from the video:

```javascript
for (let i = 0; i < sierraFavs.length; i++) console.log(sierraFavs[i])
```

And here is the `forEach` method:

```javascript
sierraFavs.forEach(food => console.log(food))
```

# Converting our Card Info to an Array

Now that we know how to use arrays, let's convert our card info to an array.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/mwxSSd5y5bE" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the getCardInfo fucntion that we converted to an array:

```javascript
const cardInfos = [{
	"title": "Nike",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
	"color": "#deaf01"
}, {
	"title": "Independent",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg",
	"color": "#554a33"
}, {
	"title": "Michael Kors",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
	"color": "#01322f"
}, {
	"title": "HYPERX",
	"text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
	"image": "https://images.pexels.com/photos/2582928/pexels-photo-2582928.jpeg",
	"color": "#7f4252"
}]
```

In the video we modified the displayCard function, and the code that calls it. Here is the modified code:

```javascript
const displayCard = (card, { title, text, image, color }) => {

	card.style.backgroundImage = `url(${image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
	card.style.color = color

	const h1 = card.querySelector('h1')
	h1.textContent = title

	const p = card.querySelector('p')
	p.textContent = text
}

const cards = document.querySelectorAll('.card')
for (let i = 0; i < cards.length; i++) {
	displayCard(cards[i], cardInfos[i + 1])
}
```

## Playing with the Card Offset

Now that we have our card info in an array, we can play with the offset to display different cards.

Let's take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/eAE-UXg9uSU" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the modified code from the video:

```javascript
let offset = 34
const cards = document.querySelectorAll('.card')
for (let i = 0; i < cards.length; i++) {
	let index = (i + offset) % products.length
	displayProduct(cards[i], products[index])
}
```

Again, we are using the `offset` variable to determine which product to display. We are using the modulus operator to wrap the index around to the beginning of the array when we reach the end.

If you are struggling with the modulus operator, Udacity has a video that I recommend watching: [Modulus Operator](https://www.youtube.com/watch?v=MrTtsX2Wg9Q)

## Hooking up the Buttons

Now that we have our card info in an array, we can hook up the buttons to change the offset.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

As you saw in the video, we added a couple of event listeners to the buttons.

This code will log a message to the console when the button is clicked:

```javascript
const previousButton = document.querySelector('button.previous')
const nextButton = document.querySelector('button.next')

previousButton.addEventListener('click', () => console.log('previous'))
nextButton.addEventListener('click', () => console.log('next'))
```

We then wrapped our loop that displays the cards in a function called `updateCards`. The parameter `shift` is used to modify the offset.

Here is the code:

```javascript
const updateCards = shift => {
	offset += shift || 0
	for (let i = 0; i < cards.length; i++) {
		let index = (i + offset) % products.length
		displayProduct(cards[i], products[index])
	}
}

updateCards()
```

> [!NOTE] The `shift` parameter is optional. If it is not provided, it will default to 0.

We then called the `updateCards` function from the event listeners:

```javascript
previousButton.addEventListener('click', () => updateCards(-1))
nextButton.addEventListener('click', () => updateCards(1))
```

That's it! You should now be able to click the buttons to change the cards.

Now that we have our cards working, give the following exercises a try...

# Exercises

[Array Exercises](/appel/javascript/array-exercises)
