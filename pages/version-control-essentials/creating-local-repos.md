---
title: Creating Local Repositories
subtitle: Version Control Essentials
hideNav: false

live: https://fvtc.software/appel/version-control-essentials/creating-local-repos
dev: http://localhost:3006/appel/version-control-essentials/creating-local-repos
repo: https://github.com/rdappel/courses
---

# Creating Local Repositories

When introducing Git lot of emphesis was placed on using Git as a colaboration tool, but Git is also a great tool for working on your own. In this section, we will cover how to create a local repository, then learn how to stage and commit changes.

## Initializing a Repository

To create a local repository, open Git Bash (or a terminal) and navigate to the folder where you want to create your repository.

If you already have the folder open in Explorer (windows) or Finder (macOS), you can right-click in the folder and select "Git Bash Here" or "Open in Terminal". This is often the easiest way to open Git Bash or a terminal in the correct folder.

Once you have Git Bash or a terminal open, run the following command to create a new repository:

```bash
git init
```

This will create a new folder called `.git` in your current directory. This folder contains all of the information about your repository, including the history of changes to your code.

> [!NOTE] The `.git` folder is hidden by default. To view it, you may need to enable the option to show hidden files in your file explorer.

This video will show you how to create a local repository in Windows 10. The process is very similar for other operating systems:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/UHdadGCPc64" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

## Staging Changes

Before you can commit changes to your repository, you need to stage them. This tells Git which files you want to commit. 

This video will show you how to stage changes and commit them:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/z2GBW0rBhKI" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

To stage a single file, run the following command:

```bash
git add <file name>
```

To stage all of the files in your repository, run:

```bash
git add .
```

## Committing Changes

Once you have staged your changes, you can commit them to your repository. To commit your changes, run the following command:

```bash
git commit -m "Commit message"
```

The commit message should be a short description of the changes you are committing. For example, if you added a menu to your website, your commit message might be "Added main menu".:

```bash
git commit -m "Added main menu"
```

In the video we also showed `git status` to see the status of your repository, and `git log` to see the history of your commits. We will cover these commands in more detail in a later section.

# Fixing Common Mistakes

It's not uncommon to make mistakes when using Git. Here are a few common mistakes and how to fix them:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/H5UkrhsbFZg" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

## Unhooking a Repository

If you want to unhook a repository, you can delete the `.git` folder. This will remove all of the version control information from your project, but it will not delete any of your files.

## Forgetting the -m Flag

If you forget the -m flag when committing changes, Git will open a text editor for you to enter your commit message. By default, this will be Vim, which can be confusing for new users. If this happens to you, my recommendation (for now) is to exit out of your terminal and run the command again with the -m flag.
