---
title: 'Advanced Routing and MongoDB'
subtitle: 'Modern JavaScript'
---

# Advanced Routing and MongoDB

In this unit, we will learn how to interact with a MongoDB database and create more advanced routes in our Express.js application.

## Getting Started

We're going to be building on the Joke API that we created in the last unit. If you don't have that code available, you can [download it from here](https://github.com/RDAppel/joke-api-lecture/tree/part1-complete).

# MongoDB

MongoDB is a NoSQL database that stores data in a JSON-like format. It is a popular choice for Node.js applications.

## Registering for MongoDB Atlas

We are going to use MongoDB Atlas, a cloud-based database service. You can sign up for a free account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/_hJzEYHXD1s" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

Now that you have signed up for MongoDB Atlas, you can create a project and we can add a database to it.

## Creating a Database

This video will show you how to create a database in MongoDB Atlas.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/rBbqcHRFJLg" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

Now that you have created a database, let's connect to it in our Express.js application.

## Getting Started with MongoDB

Before we connect to our MongoDB database, we are going to need to do a little setup. 

In this video, we will add a joke to the database, install the MongoDB Node.js driver, and create a "secret" file to store our database connection string.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/Z3VNgkxhVFw" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

Here is the command to install the MongoDB Node.js driver:

```bash
npm i mongodb
```

## Connecting to MongoDB

Now that we have the MongoDB Node.js driver installed, we can connect to our database.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/uGn6ACD2m_o" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

Here is the `getConnection` function that we created in the video:

```javascript
const getConnection = async (dbName, collectionName) => {
    await client.connect()
    return client.db(dbName).db.collection(collectionName)
}
```

And here is the updated endpoint that returns a random joke from the database:

```javascript
app.get('/api/v1/random', async (request, response) => {
    const collection = await getConnection('Jokes-API', 'Jokes')
    const jokes = await collection.find({}).toArray()
    const randomIndex = Math.floor(Math.random() * jokes.length)
    response.json(jokes[randomIndex])
})
```

Next, we will update the other endpoints to use the MongoDB database.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/0pfGaUIaaQU" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

Here is the updated code for the remaining endpoints:

```javascript
// todo: update the other endpoints
```

# Advanced Routing

In this section, we will learn how to create more advanced routes in our Express.js application. This will help us to organize our code and make it easier to maintain.

## Express Router

The express.Router class can be used to create modular, mountable route handlers. 

Let's take a look at how it's used:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/hlL8q6MLXRw" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

## Error Handling Endpoint

We can add an error handling endpoint to our Express.js application. This will allow us to return a custom error message when an error occurs.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/zFtzWv9eWAg" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

You can access the [completed code here](https://github.com/RDAppel/joke-api-lecture/tree/dev).

# Exercises

[MongoDB and Advanced Routing Exercises](/appel/javascript/mongodb-and-advanced-routing-exercises)



