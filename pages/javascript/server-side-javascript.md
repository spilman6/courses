---
title: 'Server Side JavaScript'
subtitle: 'Modern JavaScript'
---

# Server Side JavaScript

In this unit we are going to continue using Node.js to write server side JavaScript. We will also be importing modules (or packages) using npm. We will also be creating our own custom modules.

# NPM

NPM is a package manager for JavaScript. It is used to install and manage packages. It is also used to manage dependencies in a project. 

NPM comes pre-installed with Node.js. To check the version of NPM installed on your machine, run the following command in your terminal:

```bash
npm -v
```

## Using NPM and Installing Packages

Before we can import packages using NPM, we need to create a `package.json` file. This file contains information about the project and the packages that are used in the project.

To create a `package.json` file, you can run the following command in your terminal, then follow the prompts:

```bash
npm init
```

Now that we have a `package.json` file, we can start install and use packages in our project.

We're going to install a package called `ansi-colors` to demonstrate how to install packages using NPM.

`ansi-colors` is a package that allows you to add color to your terminal output. It is a great package to use when you want to add some color to your terminal output.

To install a package, you can use the `npm install` command followed by the name of the package. For example, to install the `ansi-colors` package, you would run the following command:

```bash
npm install ansi-colors
```

You can also shorten the install command to `npm i`:

```bash
npm i ansi-colors
```

This video will walk you through the previous steps, and then show you how to use the `ansi-colors` package:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/FXk9fcJcySw" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

Often times, npm packages will have documentation and examples on their NPM page. This is a great place to start when learning how to use a new package.

Here is the link to the [ansi-colors](https://www.npmjs.com/package/ansi-colors) package on NPM. If you haven't already, take a minute to scan throught the documentation.

To use a package in your project, you need to import it into your JavaScript file. You can do this using the `require` function.

Here is the code from the video:

```javascript
const colors = require('ansi-colors')

console.log(colors.red("red text"))
console.log(colors.green("green text"))
console.log(colors.blue("blue text"))

console.log(colors.bgRed("red background"))

console.log(colors.black.bgWhite("black text, white background"))
```

> [!NOTE] The documentation uses the variable name `c` to import the `ansi-colors` package. I chose to use the variable name `colors` instead, because I think it makes the code more readable. You can use any variable name you like.

## Node Modules and .gitignore

When you install a package using NPM, it is stored in a folder called `node_modules`. This folder is created in the root of your project. It contains all the packages that are installed in your project.

This folder can get notoriously large. So much so, that it has spawned multiple memes. Including this one:

![node_modules meme](https://img.devrant.com/devrant/rant/r_1943782_8ezyM.jpg)

Because of this, it is common practice to not include the `node_modules` folder in your git repository. Instead, you can add a `.gitignore` file to your project and add the `node_modules` folder to it. This will prevent the `node_modules` folder from being included in your git repository.

This video will walk you through the process:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/AvmVtyKOQMU" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

If you are cloning an existing project from a git repository, you will need to run the `npm install` command to install all the packages that are used in the project. This command will read the `package.json` file and install all the packages that are listed in it.

# Enquirer

Then let's take a look at how to use the `enquirer` package:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/XpFDX5ipGqo" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

Here is the code from the video:

```javascript
const { prompt } = require('enquirer')

const questions = [
	{
		type: 'input',
		name: 'firstName',
		message: 'What is your first name?'
	},
	{
		type: 'input',
		name: 'lastName',
		message: 'What is your last name?'
	}
]

prompt(questions).then(answers => console.log(answers))
```

I also ran the following demo code: [MultiSelect](https://www.npmjs.com/package/enquirer#multiselect-prompt) and [Survey](https://www.npmjs.com/package/enquirer#multiselect-prompt)

# Custom Modules

In addition to using packages from NPM, you can also create your own custom modules. A module is a file that contains JavaScript code. You can export code from a module using the `module.exports` object. You can then import the code from a module into another file using the `require` function.

This is a great way to organize your code and make it more readable.

This video will walk you through the process:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/St-nmFfxvpc" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

## Exporting Classes

You can also export classes from a module.

This video will show you how:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/p6MdDkfURMw" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the code from the video:

test-class.js:

```javascript
class Person {
	firstName

	constructor(firstName) {
		this.firstName = firstName
	}

	greet() {
		console.log(`${this.firstName} says hi!`)
	}
}

module.exports = Person
```

app.js:

```javascript
const Person = require('./test-class')
const ryan = new Person('Ryan')
ryan.greet()
```

> [!NOTE] `module.exports` is not the only way to export code from a module. You can also use `exports` instead of `module.exports`. It works a bit differently, but it is also a valid way to export code from a module, I just choose not to use it.

## Exporting Objects and Functions

You can also export objects and functions from a module. I find doing this is easier to understand than exporting classes. 

This video will show you how:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/fh6MxHPtTQc" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the code from the video:

test-functions.js:

```javascript
const createPerson = firstName => {
	return { firstName }
}

const greet = person => {
	console.log(`${person.firstName} says hi!`)
}

module.exports = { createPerson, greet }
```

app.js:

```javascript
const { createPerson, greet } = require('./test-functions')
const ryan2 = createPerson('Ryan')
greet(ryan2)
```

Or if we just want to export a single function:

test-function.js:

```javascript
const createPerson = firstName => {
	return { firstName }
}

module.exports = createPerson
```

app.js:

```javascript
const createPerson = require('./test-function')
const ryan3 = createPerson('Ryan')
console.log(ryan3)
```

# Making a Survey

Let's practice using the `enquirer` package by making a survey that gets the questions from a remote server.

We also want to keep the code organized, so we will create a custom module to handle the survey.

Let's get started:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/NGqNhOFmItk" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the code from the video:

app.js:

```javascript
(async () => {
	const { prompt } = require('enquirer')
	const questions = require('./questions.json')

	console.log(await prompt(questions))
})()
```

questions.json:

```json
[
	{
		"type": "input",
		"name": "firstName",
		"message": "What is your first name?"
	},
	{
		"type": "input",
		"name": "lastName",
		"message": "What is your last name?"
	},
	{
		"type": "input",
		"name": "email",
		"message": "What is your email address?"
	}
]
```

Next we will get the questions from github using the `axios` package.

Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/pIfHQeG7hfE" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the npm page for [axios](https://www.npmjs.com/package/axios).

And here is the code from the video:

app.js:

```javascript
(async () => {
	const { prompt } = require('enquirer')
	const axios = require('axios')

	const { data } = await axios.get('https://raw.githubusercontent.com/RDAppel/survey/master/questions.json')
	const questions = data

	console.log(await prompt(questions))
})()
```

The last step is to create a custom module to handle the survey.

Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/E3-9BY5c98o" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Here is the final code:

survey.js:

```javascript
const { prompt } = require('enquirer')
const axios = require('axios')

let surveyUrl = ''

const setUrl = url => surveyUrl = url

const run = async () => {
	const { data } = await axios.get(surveyUrl)
	return await prompt(data)
}

module.exports = { setUrl, run }
```

app.js:

```javascript
(async () => {

	const survey = require('./survey')
	const url = 'https://raw.githubusercontent.com/RDAppel/survey/master/questions.json'
	survey.setUrl(url)
	const result = await survey.run()
	console.log(result)

})()
```

# Exercises

[Server-Side JavaScript Exercises](/appel/javascript/server-side-javascript-exercises)


