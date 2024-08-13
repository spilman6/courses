---
title: 'Assignment 6 - Custom Module'
subtitle: 'Modern JavaScript'
---

# Assignment 6 - Custom Module

In this assignment, you will create a custom module that contains a set of functions that will help determine the time of day. 

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/EAaZSyNnAi0" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

To get started, create a new project folder and initialize it with npm. Then, create a new file called `timeOfDay.js` and add the following functions to it:

1. `getTimeOfDay` - This function should return a string that represents the time of day based on the time provided. The function should accept a single parameter, `time`, which is a number representing the current hour in 24-hour format. The function should return one of the following strings based on the time:

   - `Morning` - If the time is between 4:00 AM and 11:59 AM
   - `Afternoon` - If the time is between 12:00 PM and 4:59 PM
   - `Evening` - If the time is between 5:00 PM and 3:59 AM

> [!TIP] `new Date().getHours()` will return the current hour in 24-hour format, ranging from 0 to 23.

2. `isMorning` - This function should return a boolean value that indicates whether the time is in the morning. The function should accept a single parameter, `time`, which is a number from 0-23 representing the 24 hours in a day. The function should return `true` if the time is between 4:00 AM and 11:59 AM, and `false` otherwise.

3. `isAfternoon` - This function should return a boolean value that indicates whether the time is in the afternoon. The function should accept a single parameter, `time`, similar to above. The function should return `true` if the time is between 12:00 PM and 4:59 PM, and `false` otherwise.

4. `isEvening` - This function should return a boolean value that indicates whether the time is in the evening. The function should accept a single parameter, `time`, like above. The function should return `true` if the time is between 5:00 PM and 3:59 AM, and `false` otherwise.

To test if it's working, use the following code in your `app.js` file:

```javascript
const { getTimeOfDay, isMorning, isAfternoon, isEvening } = require('./timeOfDay')

const currentTime = new Date().getHours()

console.log(`The current time is ${currentTime}:00`)
console.log(`The time of day is ${getTimeOfDay(currentTime)}`)

const timesToTest = [ 4, 9, 12, 16, 18, 23 ]

timesToTest.forEach(time => {
	console.log(`---`)
	console.log(`Is ${time}:00 in the morning? ${isMorning(time)}`)
	console.log(`Is ${time}:00 in the afternoon? ${isAfternoon(time)}`)
	console.log(`Is ${time}:00 in the evening? ${isEvening(time)}`)
})
```

## Submission

Once you have completed the assignment, create a new repository on GitHub and push your code to it.

Once your code is pushed to GitHub, submit the link to your repository to Blackboard.


