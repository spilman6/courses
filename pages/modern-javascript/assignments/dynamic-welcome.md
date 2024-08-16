---
title: Assignment 3 - Dynamic Welcome
subtitle: Modern JavaScript
---

# Assignment 3 - Dynamic Welcome

In this assignment, you will modify your homepage from Assignment 2. You will use JavaScript to dynamically add content to the page.

It will show a welcome message to the user. The message will be different, based on the time of day that the page is loaded.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/IwuzbKSF52E" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is some code to help you determine the time of day:

```javascript
const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?
```

You can use these variables to determine what message to display to the user.

## Specifications

Add a `<div>` element to your page with an id of `welcome`. Use the code shown above, in combination with your own code, to add a welcome message to the page. The message should be different, based on the time of day that the page is loaded.

## Submission

### Pushing to GitHub

You're going to push your changes to your github.io repository. Remember that you are adding to an existing repository, so you don't need to use `git init`.

Once your changes are working on your computer, run the following git commands:

```bash
git add .

git commit -m "Added welcome div"

git push
```

### Submitting to Blackboard

Once you have your website pushed to GitHub, submit the link to your GitHub Pages site to Blackboard.
