---
title: 'Assignment 9 - Final Project'
subtitle: 'Modern JavaScript'
---

# Assignment 9 - Final Project

In this assignment, you will partner up with a small team (2-3 people) and together you will create a full-stack application using the skills you have learned throughout the course.

Your team will build a website and API for a Food Truck. The site will allow the users to view the menu, and see the events where the food truck will be located. The API will allow the food truck owner to manage the menu and events.

> [!NOTE] This assignment will be graded as a final project, so make sure to follow the requirements carefully.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/ytl-OH2Jpq4" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

## Web Application

The web application should be built using HTML, CSS, and JavaScript. Your team has creative freedom to design the site as you see fit, but it should be responsive and user-friendly. You can choose the design, colors, and layout of the site, as well as the type of food truck and menu items.

Design will be graded! That being said, I'm not looking for a professional designer, but I am looking for a well-thought-out design that is easy to use and visually appealing.

### Requirements

The web application should have the following pages:

1. **Home Page /** - Create a home page that displays the name of the food truck and a brief description. This page will also display the events where the food truck will be located. When the user clicks on an event, they should be shown more information about the event, including the location, dates, and hours.

2. **Menu Page /menu** - Create a menu page that displays the items available for purchase. Each item should include a name, description, and price.

3. **Contact Page /contact** - Create a contact page that displays the contact information for the food truck. Include a (non-working) contact form.

4. **Admin Page /admin** - Create an admin page that allows the food truck owner to manage the menu and events. The admin page should include forms to add, update, and delete menu items and events.

> [!NOTE] In a real-world application, you would need to implement user authentication to secure the admin page. For this assignment, you can leave the admin page open to the public.

## API

The API should have a MongoDB database to store the menu items and events. The database should have two collections: `menu` and `events`.

### Requirements

The API should have the following endpoints:

1. **GET /api/menu** - This route should return a list of all items on the menu. The response should be a JSON array of items. The items should include an `id`, `name`, `description`, and `price`.

2. **POST /api/menu** - This route should allow the food truck owner to add a new item to the menu. The request body should contain the item `name`, `description`, and `price`.

3. **PUT /api/menu/:id** - This route should allow the food truck owner to update an item on the menu. The route should accept an item ID as a parameter and update the item's `name`, `description`, and `price`.

4. **DELETE /api/menu/:id** - This route should allow the food truck owner to delete an item from the menu. The route should accept an item ID as a parameter and remove the item from the menu.

5. **GET /api/events** - This route should return a list of all events where the food truck will be located. The response should be a JSON array of events. The events should include an `id`, and the `name` of the event.

6. **GET /api/events/:id** - This route should return a single event by ID. The route should accept an event ID as a parameter and return the event's `name`, `location`, `dates`, and `hours`.

7. **POST /api/events** - This route should allow the food truck owner to add a new event. The request body should contain the event `name`, `location`, `dates`, and `hours`.

8. **PUT /api/events/:id** - This route should allow the food truck owner to update an event. The route should accept an event ID as a parameter and update the event's `name`, `location`, `dates`, and `hours`.

9. **DELETE /api/events/:id** - This route should allow the food truck owner to delete an event. The route should accept an event ID as a parameter and remove the event from the list of events.

### Additional Requirements

1. Make sure that the `node_modules` and your `secrets` folder are added to the `.gitignore` file. You should not commit these files to GitHub.

2. Make sure that your code is well-organized and easy to read. Use comments where necessary to explain your code.

3. Make sure that your website contains images and/or other media to make it visually appealing. You can use free stock images from sites like [Unsplash](https://unsplash.com/) or [Pexels](https://www.pexels.com/), or use AI tools like [Midjourney](https://www.midjourney.com/) to generate them.

## Getting Started

1. **Find Partners** - Find 2-3 other students to form a team. Your instructor will create a post in Teams where you can find partners. A link to this post will also be available in Blackboard. Once you have a team, let your instructor know the names of your team members.

2. **Create a New Repository** - One team member should create a new repository on GitHub and invite the other team members as collaborators. Below is a video that shows how to invite collaborators to a repository. (You will need to know your team members' GitHub usernames to invite them.)

<details style="margin-left:1.5rem;">
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/J_kV7GMfEBc" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

3. **Divide the Work** - Divide the work among the team members. You can assign different pages to different team members, or work on the front-end and back-end separately. You will be graded as individuals, so make sure that each team member contributes to the project. Only one person needs to manage the database. That person should create the database and share the connection information with the team.

4. **Start Coding!** - Start building your application. Remember to commit your changes frequently and push them to GitHub. Make sure to `git pull` before you start working to avoid conflicts with your team members. (If you do have a conflict, you can contact your instructor for help.)

5. **Check-In Regularly** - Check in with your team members regularly to make sure everyone is on track. Use the Teams channel that your instructor has setup for your team. If you run into any issues, don't hesitate to ask for help.

## Grading

Your project will be graded based on the following criteria:

1. **Design (20%)** - The design of the website should be visually appealing and user-friendly. The site should be responsive and easy to navigate.

2. **Functionality (60%)** - The website should meet the requirements outlined above. The API should have the specified endpoints and should interact with the MongoDB database.

3. **Code Quality (20%)** - The code should be well-organized and easy to read. Make sure to follow best practices and use comments where necessary.

> [!IMPORTANT] Even though this is a team project, you will be graded individually. I will be looking at the commit history to see who contributed what to the project. Make sure that you're contributing code to the project, and not just "overseeing" the work, or "helping" your team members. If you have any concerns about your team members' contributions, please let me know.

## Submission

Once you have completed the project, push your changes up to GitHub. Each team member should submit the following to Blackboard:

1. A link to the GitHub repository for the project.

2. A `mongodb.json` file with the connection information for the database. (This file should be in the `secrets` folder, and therefore should not be in GitHub.)

3. A brief description of your contributions to the project. Include any challenges you faced and how you overcame them.

4. A brief reflection on the project. (One paragraph max.)

- What did you learn?

- What would you do differently next time?

- What was the most challenging part of the project?

