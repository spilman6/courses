---
title: 'MongoDB and Advanced Routing - Exercises'
subtitle: 'Modern JavaScript'
---

# Getting Started

In this exercise, you will be using MongoDB to build a small movie database API that allows users to view, add, update, and delete movies.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

## Starter Code

To get started, fork the [Movie API Starter Code](https://github.com/RDAppel/js-movie-exercise) repository from GitHub, and then clone it to your computer. This repository contains the following:

- A basic Express application, setup to respond with JSON data.
- A `api-routes.js` file that you will add your routes to.
- An `endpoints.rest` file with sample requests for each route.

> [!NOTE] Remember to run `npm install` to install the required dependencies.

## Database Setup

The `api-routes.js` file will try to access a `mongodb.json` file in a `secrets` directory. This file should contain your MongoDB connection url. It is exactly the same as the one you used in the previous unit, so copy it from there.

You will need to create a new database in MongoDB for this exercise. You can use the same cluster that you created in the previous unit, but create a new database for this exercise. Call the database `movie-api`, and the collection `movies`.

Add the following movies to the collection, for testing:

```json
{
	"title": "The Shawshank Redemption",
	"year": 1994,
	"director": "Frank Darabont",
	"genre": "Drama"
},
{
	"title": "The Godfather",
	"year": 1972,
	"director": "Francis Ford Coppola",
	"genre": "Crime"
},
{
	"title": "The Dork Knight",
	"year": 2008,
	"director": "Christopher Nolan",
	"genre": "Action"
}
```

[!NOTE] `The Dork Knight` is an intentional typo. You will correct it when your `update` route is working.

# Exercise 1

For the first exercise, you will create a route that returns a list of all movies in the database, and another route that returns a single movie by its id.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Create the following routes in the `api-routes.js` file:

1. **GET /movies** - This route should return a list of all movies in the database. The response should be a JSON array of movies.

2. **GET /movies/:id** - This route should return a single movie by its id. The response should be a JSON object with the movie details.

Use the `endpoints.rest` file to test your routes. Be sure to update the `@id` variable in the requests to match the id of a movie in your database.

## Hints {#exercise-1-hints}

<details>
	<summary>How to get all movies from the database?</summary>

You can use the `find` method on the collection to get all movies:

```javascript
const movies = collection.find().toArray()
```

</details>

<details>
	<summary>How to get a single movie by its id?</summary>

You can use the `findOne` method on the collection to get a single movie by its id:

```javascript
const movie = collection.findOne({ _id: new ObjectId(id) })
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the answer</summary>

```javascript
router.get('/movies', async (_, response) => {
	const collection = await getCollection('movie-api', 'movies')
	const movies = await collection.find().toArray()
	response.json(movies)
})

router.get('/movies/:id', async (request, response) => {
	const { id } = request.params
	const collection = await getCollection('movie-api', 'movies')
	const movie = await collection.findOne({ _id: new ObjectId(id) })
	response.json(movie)
})
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

For the second exercise, you will create a route that allows users to add a new movie to the database.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Create the following route in the `api-routes.js` file:

1. **POST /movies** - This route should allow users to add a new movie to the database. The request body should contain the movie details. Respond with the result of the operation, including the id of the new movie.

Use the `endpoints.rest` file to test your route.

## Hints {#exercise-2-hints}

<details>
	<summary>How do I get the movie details from the request body?</summary>

You can destructure the movie details from the request body:

```javascript
const { title, year, director, genre } = request.body
```

Then you can use these variables to create a new movie object.

```javascript
const movie = { title, year, director, genre }
```

</details>

<details>
	<summary>How to add a new movie to the database?</summary>

You can use the `insertOne` method on the collection to add a new movie:

```javascript
const result = await collection.insertOne(movie)
```

The `result` object will contain information about the operation, including the id of the new movie.

</details>

## Solution {#exercise-2-solution}

<details>
	<summary>Show the answer</summary>

```javascript
router.post('/movies', async (request, response) => {
	const { body } = request
	const { title, year, director, genre } = body
	const movie = { title, year, director, genre }

	const collection = await getCollection('movie-api', 'movies')
	const result = await collection.insertOne(movie)
	response.json(result)
})
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 3

For the third exercise, you will create a route that allows users to update a movie in the database.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Create the following route in the `api-routes.js` file:

1. **PUT /movies/:id** - This route should allow users to update a movie in the database. The request body should contain the updated movie details. Respond with the result of the operation.

Since you haven't done this before, you're going to use the `updateOne` method to update the movie. You can use this code:

```javascript
const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: movie })
```

Notice the use of the `$set` operator in the update object. This tells MongoDB to update the fields specified in the `movie` object.

Use the `endpoints.rest` file to test your route. This is where you will correct the title of `The Dark Knight`.

## Solution {#exercise-3-solution}

<details>
	<summary>Show the answer</summary>

```javascript
router.put('/movies/:id', async (request, response) => {
	const { body, params } = request
	const { id } = params
	const { title, year, director, genre } = body
	const movie = { title, year, director, genre }

	const collection = await getCollection('movie-api', 'movies')
	const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: movie })
	response.json(result)
})
```

</details>

# Exercise 4

For this exercise, you will create a route that allows users to delete a movie from the database.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Create the following route in the `api-routes.js` file:

1. **DELETE /movies/:id** - This route should allow users to delete a movie from the database. Respond with the result of the operation.

You will need to use the `deleteOne` method to remove the movie from the database:

```javascript
const result = await collection.deleteOne({ _id: new ObjectId(id) })
```

Use the `endpoints.rest` file to test your route.

## Solution {#exercise-4-solution}

<details>
	<summary>Show the answer</summary>

```javascript
router.delete('/movies/:id', async (request, response) => {
	const { id } = request.params

	const collection = await getCollection('movie-api', 'movies')
	const result = await collection.deleteOne({ _id: new ObjectId(id) })
	response.json(result)
})
```

</details>

# Exercise 5

For the final exercise, you will create a route that allows users to get movies by genre, and by director.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Create the following routes in the `api-routes.js` file:

1. **GET /movies/genre/:genre** - This route should return a list of movies by genre.

2. **GET /movies/director/:director** - This route should return a list of movies by director.

Again, since you haven't done this before, you're going to use the `find` method to get movies by genre and director. 

Here is the code to get movies by genre:

```javascript
router.get('/movies/genre/:genre', async (request, response) => {
	const { genre } = request.params
	const collection = await getCollection('movie-api', 'movies')
	const movies = await collection.find({ genre }).toArray()
	response.json(movies)
})
```

Implement this route in the `api-routes.js` file, and then create an additional route to get movies by director.

Test your routes using the `endpoints.rest` file.

## Solution {#exercise-5-solution}

<details>
	<summary>Show the answer</summary>

```javascript
router.get('/movies/director/:director', async (request, response) => {
	const { director } = request.params
	const collection = await getCollection('movie-api', 'movies')
	const movies = await collection.find({ director }).toArray()
	response.json(movies)
})
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>
