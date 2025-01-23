---
title: Getting Started
subtitle: Version Control Essentials
hideNav: false

live: https://fvtc.software/appel/version-control-essentials/getting-started
---

# Getting Started

## What is Git?

Before we start using Git, let's take a moment to understand what it is, and why it is so popular. Over 70% of developers worldwide use Git. Git is a free, open-source version control system.

## What does it do?

Git allows you to keep track of changes to your code. It allows you to see who made changes, when they made them, and what changes they made. This is useful when working on a project with multiple people, as it allows you to collaborate more effectively.

Additionally, Git allows you to create branches, which are separate versions of your code. This allows you to work on new features without affecting the main codebase. Once you are finished with your changes, you can merge them back into the main codebase.

## Terminology

Let's go over some of the terminology used in Git:

- **Git**: Git is the version control system that we will be using. It is a program that allows you to keep track of changes to your code.

- **Repository**: A repository is a collection of files and folders that make up your project. It is stored on your computer and contains all of the information about your project, including the history of changes to your code.

- **Commit**: A commit is a snapshot of your project at a specific point in time. I like to think of a commit as a save point in a video game. If something goes wrong, you can always go back to a previous commit.

- **Local Repository**: A local repository is a repository that is stored on your computer. This allows you to keep track of changes to your code.

- **Remote Repository**: A remote repository is a repository that is stored on a server. This allows you to collaborate with others and share your code with them.

## Is Git Already Installed?

You can quickly check to see if git is installed on your computer, and which version. Simply open a terminal (or command prompt) and type the following command:

```bash
git --version
```

If you see a version number, then Git is already installed on your computer. If you see an error message or if your version is less than 2.30, you will need to install Git.

## Installing Git

To install Git, go to [https://git-scm.com/downloads](https://git-scm.com/downloads) and download the version for your operating system.

The following videos will walk you through the installation process. Choose the corresponding video for your operating system

<details>
    <summary class="video">Windows 10</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

<details>
    <summary class="video">Windows 11</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

<details>
    <summary class="video">macOS</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>



# Local Repositories

A local repository is a repository that is stored on your computer. This allows you to keep track of changes to your code.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/7LL7_XxCdB8" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Initializing a Repository

To create a local repository, open a terminal and navigate to the directory where you want to store your code. Then, run the following command:

```bash
git init
```

> [!NOTE] You only need to run this command once per repository. If you have cloned a repository from a remote repository, you do not need to run this command.

This will create a new directory called `.git` in your current directory. This directory contains all of the information about your repository, including the history of changes to your code.

## Staging Changes

Before you can commit changes to your repository, you need to stage them. This tells Git which files you want to commit. To stage a file, run the following command:

```bash
git add <file>
```

You can also stage all of the files in your repository by running the following command:

```bash
git add .
```

## Committing Changes

Once you have staged your changes, you can commit them to your repository. To commit your changes, run the following command:

```bash
git commit -m "Commit message"
```

The commit message should be a short description of the changes you are committing. For example, if you are fixing a bug, you might use the following commit message:

```bash
git commit -m "Fix bug #1234"
```

# Remote Hosting

A remote repository is a repository that is hosted on a server. This allows multiple people to work on the same project at the same time. GitHub, Bitbucket, and Azure DevOps are all examples of remote repositories. Depending on your instructor, you will be using one of these services to submit your assignments.

This video will show you how to create a repository on GitHub, Bitbucket, and Azure DevOps. The process is very similar for all three services.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/asMNJ8uJFws" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Pushing Code to GitHub

Even if you're not using GitHub for your class, watch this video because the process is very similar for all three services.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/wsYSY6553gc" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

To push your code to GitHub, you need to add a remote repository. To do this, run the following command:

```bash
git remote add origin <url>
```
> [!NOTE] This line is displayed in the GitHub repository when you create it, so you can copy and paste it.

Then, push your code to GitHub by running the following command:

```bash
git push -u origin main
```

> [!NOTE] If your branch is called `master`, just replace `main` with `master`.

## Pushing Code to Bitbucket

The process for pushing code to Bitbucket is very similar to pushing code to GitHub. But there is an additional step! You will need an App Password to push code to Bitbucket. In this video, I will walk you through how to do this.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/ysCr09d1alc" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Pushing Code to Azure DevOps

Again, the process for pushing code to Azure DevOps is very similar to pushing code to GitHub. In this video, I will walk you through how to do this.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/Edk4rCBZzr0" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Subsequent Pushes

After you have pushed your code to one of these services, if you make any changes to your code, you can push them by running the following commands.

First stage your changes:

```bash
git add .
``` 

Then commit your changes:

```bash
git commit -m "New code added!"
```

Finally, push your changes:

```bash
git push
```
