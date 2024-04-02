---
title: 'Assignment 8 - To Do App (MongoDB)'
subtitle: 'Modern JavaScript'
---

# Assignment 8 - To Do App (MongoDB)

This assignment builds on the "To Do" API that you created in Assignment 7. In this assignment, you will integrate a MongoDB database to store the tasks in the "To Do" list.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

## Requirements

1. **Connect to MongoDB** - You can use the same cluster that you created in the previous unit, but create a new database for this assignment. Call the database `todo-api` and create a collection called `todos`. Remember to install the `mongodb` package and connect to your database in your Express application.

2. **Create your "Secrets" Folder** - Create a new folder in the root of your project called `secrets`. This folder will contain the connection to your MongoDB database. You can use the existing `mongodb.json` file from the previous unit. Remember to add the `secrets` folder to your `.gitignore` file.

3. **Move the Endpoints** - Move the existing api routes from the `app.js` file to a new file called `api-routes.js`. Import the routes into the `app.js` file and use the `/api/todos` prefix for the routes. You can leave the existing route that serves the `index.html` file in the `app.js` file.

4. **Modify the Routes** - Modify the routes to interact with the MongoDB database. You should be able to get all tasks, add a new task, and toggle the `complete` property of a task. 

### Additional Hints

#### Connecting to MongoDB

You can use the `getCollection` function from the practice exercises to get the `todos` collection:

```javascript
const { MongoClient, ObjectId } = require('mongodb')

const url = process.env.MONGODB_URI || require('./secrets/mongodb.json').url
const client = new MongoClient(url)

const getCollection = async (dbName, collectionName) => {
	await client.connect()
	return client.db(dbName).collection(collectionName)
}
```

#### MongoDB Methods

For the `GET` route, you will need to use the `find` method to get all tasks:

```javascript
const todos = await collection.find().toArray()
```

For the `POST` route, you can use the `insertOne` method to add a new task:

```javascript
const result = await collection.insertOne({ item, complete })
```

And for the `PUT` route, you can use the `findOne` and `updateOne` methods:

```javascript
	const todo = await collection.findOne({ _id: new ObjectId(id) })
	const complete = !todo.complete
	const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { complete } })
```

#### Router Prefix

Remember that `app.use('/api/todos', require('./api-routes'))` will allow you to use the `/api/todos` prefix for all routes in the `api-routes.js` file.

So in your `api-routes.js` file, you should use the following endpoints:

```javascript
router.get('/', async (_, response) => {
	// this maps to GET /api/todos
})

router.post('/', async (request, response) => {
	// this maps to POST /api/todos
})

router.put('/:id', async (request, response) => {
	// this maps to PUT /api/todos/:id
})
```

## Testing

The endpoints from the `endpoints.rest` file should still work with the new database integration. You can test your endpoints using the REST client extension.

## Submission

Once you have completed the assignment, push the changes up to GitHub and submit the link to your repository on Blackboard.