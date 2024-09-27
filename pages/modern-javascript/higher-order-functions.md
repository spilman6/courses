---
title: Higher Order Functions
subtitle: Modern JavaScript
---

# Higher Order Functions

Higher order functions are functions that take other functions as arguments or return functions as their results. This is a powerful feature of JavaScript that allows us to write more modular and reusable code.

## setTimeout and setInterval

Two common higher order functions are setTimeout and setInterval. Both of these functions take a function as an argument and execute it after a certain amount of time.

We have touched on these before, but let's take a closer look at how they work.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/d4DCgCqxGbs" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the `app.js` code from the video:

setTimeout:

```javascript
const id = setTimeout(() => console.log('hi'), 2000)

// clearTimeout(id)
```

setInterval:

```javascript
let count = 0
const id = setInterval(() => {
  console.log('hi')
  count++
  if (count > 10) clearInterval(id)
}, 200)
```

# Array Methods

Another common use of higher order functions is with array methods. Many of the array methods in JavaScript take a function as an argument and execute it for each element in the array.

For the next few sections, I will be using the following arrays. To save you some time, please copy and paste these arrays into your `app.js` file.

```javascript
const pets = [
	{ name: 'Luna', age: 6, type: 'cat' },
	{ name: 'Luke', age: 6, type: 'cat' },
	{ name: 'Leia', age: 6, type: 'cat' },
	{ name: 'Daisy', age: 4, type: 'dog' },
	{ name: 'Lilly', age: 1, type: 'dog' },
	{ name: 'Noodle', age: 0, type: 'cat' },
	{ name: 'Nugget', age: 0, type: 'cat' },
	{ name: 'Freddy', age: 2, type: 'fish' },
	{ name: 'Ethel', age: 2, type: 'fish' }
]

const kids = [
	{ name: 'Blake', age: 6 },
	{ name: 'Avery', age: 4 },
	{ name: 'Riley', age: 1 }
]
```

## forEach

The `forEach` method is used to iterate over an array and execute a function for each element in the array.

We have completed the same code using a `for` loop, but I think you will agree that the `forEach` method is much cleaner and easier to read.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Here is the code from the video:

```javascript

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i].name)
}

pets.forEach(pet => console.log(pet.name))
```

### Using Object Destructuring

Another advantage of using the `forEach` method is that it is more reusable. Take a look at the following example:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Here is the example code:

```javascript
const logName = ({ name }) => console.log(name)

//pets.forEach(logName)
kids.forEach(logName)
```
In the future, we are going to see a bunch of ways that we can write small reusable functions like this.

> [!Important] The `forEach` method does not return anything, and it does not modify the original array.

## Filter

Next, let's look at the `filter` method. The `filter` method is used to create a new array with all elements that pass the test implemented by the provided function.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Here is the code that we added to the `app.js` file:

```javascript
pets.filter(({type}) => type === 'cat')
    .forEach(logName)
```

Imagine for a moment that we wanted to use `for` loops to achieve the same result. It would be a lot more code and a lot harder to read!

> [!Important] The `filter` method always returns a new array, with the same or fewer number of elements as the original array.

### Chaining Methods

As you saw in the previous example, we can chain methods together. This is a common practice in JavaScript and is a great way to write clean and readable code.

## Map

The `map` method, like the `filter` method, returns a new array. The difference is that the `map` method transforms each element in the array using the provided function. Let's take a look:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Here is the code from the video:

```javascript