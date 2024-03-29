---
title: 'Assignment 7 - To Do App'
subtitle: 'Modern JavaScript'
---

# Assignment 7 - To Do App

In this assignment, you will create a simple "To Do" API using Express. The API will allow users to view tasks, add new tasks, and mark tasks as complete.

> [!NOTE] You will be continuing to add to this project for Assignment 8, so keep it handy for the next unit!

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

## Getting Started

To get started, fork the [Assignment 7 Starter Code](https://github.com/RDAppel/js-assignment7) repository from GitHub, and then clone it to your computer. This repository contains a basic Express application with a single route that returns an index.html file.

> [!Note] Remember to run `npm install` to install the required dependencies.

## Requirements

Your task is to add the following routes to the application:

1. **GET /api/todos** - This route should return a list of all tasks in the "To Do" list. The response should be a JSON array of tasks.

2. **POST /api/todos** - This route should allow users to add a new task to the "To Do" list. The request body should contain the task item. Respond with the id of the new task as a JSON object, like this: `{ id: 4 }`.

3. **PUT /api/todos/:id** - This route should allow users to mark a task as complete. The route should accept a task ID as a parameter and update the task's `complete` property to `true`. Respond with a JSON object containing the updated task, like this: `{ id: 1, complete: true }`.

### Additional Hints

The "To do" items will be stored in an array. Use this code to get started:

```javascript
const todos = [
	{ id: 1, item: 'Learn JavaScript', complete: false },
	{ id: 2, item: 'Learn Express', complete: false },
	{ id: 3, item: 'Build a To Do App', complete: false }
]
```

Remember that you can add to an array using the `push` method:

```javascript
const { item } = request.body
const id = todos.length + 1
const complete = false
todos.push({ id, item, complete })
```

To find and toggle the `complete` property of a task, you can use the following code:

```javascript
const { id } = request.params
const task = todos.find(todo => todo.id.toString() === id)
task.complete = !task.complete // toggle the complete property
```

## Testing

To test your endpoints, you can use the REST client extension. The project includes an `endpoints.rest` file with sample requests for each route.

## Submission

Once you have completed the assignment, push the changes up to GitHub and submit the link to your repository on Blackboard.