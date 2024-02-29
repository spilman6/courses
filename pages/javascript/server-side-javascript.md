---
title: 'Server Side JavaScript'
subtitle: 'Modern JavaScript'
---

# Server Side JavaScript

In this unit we are going to continue using Node.js to write server side JavaScript. We will also be importing packages using npm.

# NPM

NPM is a package manager for JavaScript. It is used to install and manage packages. It is also used to manage dependencies in a project. 

NPM comes pre-installed with Node.js. To check the version of NPM installed on your machine, run the following command in your terminal:

```bash
npm -v
```

## Initializing a Project

Before we can import packages using NPM, we need to create a `package.json` file. This file contains information about the project and the packages that are used in the project.

This video will walk you through the process:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

Again, to run the command-line tool, you can use the `npm init` command. This will prompt you to answer a few questions about your project.

```bash
npm init
```

## Installing Packages

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

This video will walk you through the process:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

Often times, npm packages will have documentation and examples on their NPM page. This is a great place to start when learning how to use a new package.

Here is the link to the [ansi-colors](https://www.npmjs.com/package/ansi-colors) package on NPM. If you haven't already, take a minute to scan throught the documentation.

## Using Packages

To use a package in your project, you need to import it into your JavaScript file. You can do this using the `require` function.

Let's take a look:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

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
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

## Cloning an Existing Project

If you are cloning an existing project from a git repository, you will need to run the `npm install` command to install all the packages that are used in the project. This command will read the `package.json` file and install all the packages that are listed in it.

This video will walk you through the process:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

Here is a link to the repository that I cloned in the video: [enquirer demo]()

Notice how running the `npm install` command created the `node_modules` folder and installed the `enquirer` package.

`enquirer` is a package that allows you to create interactive command-line prompts. It is a great package to use when you want to create a command-line interface for your project.

Here is the link to the [enquirer](https://www.npmjs.com/package/enquirer) package on NPM. If you haven't already, take a minute to scan throught the documentation.

Then let's take a look at how to use the `enquirer` package:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        ></iframe>
    </div>
</details>

Here is the code from the video:

```javascript
const { prompt } = require('enquirer')
```

# Exercises

[Server-Side JavaScript Exercises](/appel/javascript/server-side-javascript-exercises)


