---
title: Introduction to Git
subtitle: Version Control Essentials
hideNav: false

live: https://fvtc.software/appel/version-control-essentials/intro-to-git
dev: http://localhost:3006/appel/version-control-essentials/intro-to-git
repo: https://github.com/rappel/courses
---

# Introduction to Git

## What is Git?

Before we start using Git, let's take a moment to understand what it is, and why it is so popular. Over 70% of developers worldwide use Git. Git is a free, open-source version control system.

Git allows you to keep track of changes to your code by creating snapshots of your project at different points in time. Then, you can compare these snapshots to see what has changed.

Git also lets you upload your code to a remote repository, this allow you to access your code from anywhere, collaborate with others, and keeps your code safe in case something happens to your computer.

As you create these snapshots, Git keeps track of not only the changes you make to your code but also who made the changes and when they were made. This makes it easy to see what has changed in your project over time.

This video will give you a brief overview of Git and its features:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Next, we will talk about some Key Concepts in Git.

## Key Concepts

Let's go over some of the terminology you will encounter when using Git:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

- **Git**: Git is software that allows you to keep track of changes to your code. It is a free, open-source version control system. It has become the standard for version control in the software development industry. In the next section, we will check to see if Git is already installed on your computer, and if not, we will install it.

- **Commit**: A commit is a snapshot of your project at a specific point in time. I like to think of a commit as a save point in a video game. If something goes wrong, you can always go back to a previous commit.

- **Repository**: A (local) repository is a collection of files and folders that make up your project. It is stored on your computer and contains all of the information about your project, including the history of changes to your code.

- **Remote**: A remote (repository) is a repository that is stored on a server. This allows you to collaborate with others and share your code with them. In this course, we will be using [Github](https://github.com) and [Azure DevOps](https://dev.azure.com) to host our remote repositories. These are the two most popular platforms for hosting Git repositories, though there are many others.

- **Clone**: Cloning a repository means making a copy of it on your computer. This allows you to work on the project locally without affecting the original repository.

- **Push**: Pushing changes means sending your commits to a remote repository. This allows others to see your changes and collaborate with you.

- **Others**: We will be covering more concepts in upcoming lessons, such as branches, pull requests, and merging. These are more advanced concepts that you will need to know as you become more comfortable with Git.


# Navigating the Command Line

Before we start using Git, let's take a moment to look at some basic commands you will need to know to navigate the command line. The command line is a text-based interface that allows you to interact with your computer using commands.

If you are using MacOS or Linux, use the Terminal. If you are using Windows, use PowerShell, not the Command Prompt. The Command Prompt does not support some of the commands we will be using.

> [!NOTE] If you have experience using command line tools, specifically `ls`, `cd`, and `mkdir`, you can skip directly to [Exercise 1](#exercise-1).

Here are some basic commands you will need to know:

- `ls`: List the files and folders in the current directory (folder).

- `cd`: Change directories. For example, `cd MyProject` will take you to the myProject folder, assuming it exists in the current directory. You can also use `cd ..` to go up to the parent directory, or `cd ~` to go to your home directory. You can also combine them with slashes to navigate to a specific directory, such as `cd ~/../Joe/Desktop`, which will take you to the Desktop folder for the user Joe (assuming that user exists).

- `mkdir`: Make a new directory. For example, `mkdir MyProject` will create a new folder called MyProject in the current directory.

> [!NOTE] The terms "directory" and "folder" are synonymous. I will be using them interchangeably throughout this course.

In this video we will see these commands in action:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

1. Open up your terminal (or PowerShell) and navigate to your desktop.

2. Create a new directory called `Exercise1`.

3. Show the files and folders in the current directory, to confirm that the folder was created.

4. Navigate into the `Exercise1` directory.

## Hints {#exercise-1-hints}

<details>
	<summary>How do I create a new folder?</summary>

Use the `mkdir` command followed by the name of the folder that you want to create. For example, `mkdir MyFolder` will create a new folder called MyFolder:

```bash
mkdir MyFolder
```

</details>

<details>
	<summary>How do I navigate into a folder?</summary>

Use the `cd` command followed by the name of the folder that you want to navigate into. For example, `cd MyFolder` will take you into the MyFolder folder:

```bash
cd MyFolder
```

</details>

<details>
	<summary>How do I list the files and folders in the current directory?</summary>

Use the `ls` command to list the files and folders in the current directory:

```bash
ls
```

</details>

## Submission {#exercise-1-submission}

Once you have completed the exercise, copy the commands you used to complete the exercise and paste them into the text area below. Then click the "Submit Exercise" button.

<div data-language="bash" class="exercise-submission">
	<textarea placeholder="Paste your code here..."></textarea>
	<button type="button" class="submit-button">Submit Exercise</button>
</div>


## Solution {#exercise-1-solution}

> [!NOTE] Your instructor can see if you view the solution before submitting your answer, so please try to solve the exercise on your own first.

<details>
	<summary>Show the Answer</summary>

Here are the commands you need to complete the exercise:

```bash
cd Desktop
mkdir Exercise1
ls
cd Exercise1
```

</details>

<details>
	<summary>Walkthrough Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>



