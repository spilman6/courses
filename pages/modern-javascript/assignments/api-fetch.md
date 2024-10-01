---
title: Assignment 7 - API Fetch
subtitle: Modern JavaScript
hideNav: false

live: https://fvtc.software/appel/modern-javascript/assignments/api-fetch
---

# Assignment 7 - API Fetch

In this assignment you are going to use the fetch api, along with the PokeAPI to display a random pokemon image on your homepage.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

As you saw in the unit exercise, you can use the PokeAPI to get information about pokemon. This includes images of the pokemon, whicha re refered to as "sprites."

The `sprites` object in the response from the API contains a `front_default` property. This is what I recommend you use to display the image of the pokemon. For full documentation visit the [PokeAPI docs](https://pokeapi.co/docs/v2).

To add an image to your page, you can use the following code:

```javascript
const img = document.createElement('img')
img.src = // url of the image from the 'front_default' property
img.alt = // name of the pokemon
parentElement.append(img)
```

# Submission

Push up your changes to GitHub and submit the URL to your repository on Blackboard.
