---
title: Remote Repositories
subtitle: Version Control Essentials
hideNav: false

live: https://fvtc.software/appel/version-control-essentials/remote-repos
---

# Remote Repositories

## What is a Remote Repository?

A remote repository is a version of your project that is hosted on the internet or another network. This allows you to share your code with others and collaborate on projects. Remote repositories are often used in conjunction with local repositories, allowing you to work on your code locally and then push your changes to the remote repository.

## Why Use a Remote Repository?

Remote repositories are useful for several reasons:

- **Collaboration**: Remote repositories allow multiple people to work on the same project simultaneously. This is especially useful for open-source projects or when working with a team.

- **Backup**: Remote repositories provide a backup of your code. If something happens to your local machine, you can always retrieve your code from the remote repository.

- **Code Access**: Remote repositories allow you to access your code from anywhere. This is especially useful if you work on multiple machines or need to access your code while traveling.

## Popular Repository Hosts

- **[GitHub](https://github.com)**: GitHub is one of the most popular remote repository hosting services. It offers a user-friendly interface and a wide range of features for collaboration.

- **[Azure DevOps](https://dev.azure.com)**: Azure DevOps is a cloud-based service that provides a range of tools for software development, including remote repository hosting.

- **[GitLab](https://gitlab.com)**: GitLab is another popular remote repository hosting service that offers a wide range of features for collaboration and project management.

- **[Bitbucket](https://bitbucket.org)**: Bitbucket is a remote repository hosting service that is particularly popular among teams using Atlassian products like Jira and Confluence.

At FVTC, we will be using [GitHub](https://github.com) and [Azure DevOps](https://dev.azure.com) for our remote repositories.

# Creating a Remote Repository

Creating a remote repository is different depending on the hosting service and the Environment you are using. For example, if you're using Git Bash to push a repository to GitHub the process is very different than if you're pusing a Visual Studio project to Azure DevOps.

We will cover both of these processes (and more) in upcoming sections.

For now, let's take a look at how to create a remote repository on GitHub:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/Edk4CBZzr0" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

> [!TIP] Remember to keep the repository page open in your browser. We will be using a couple of the commands that it provides for pushing up a project.

# Pushing to a Remote Repository

Once you have created a remote repository, you can push your local changes to the remote repository. This allows you to share your code with others and collaborate on projects.

This video will show you how to push your local repo to GitHub:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

The commands we ran were:

```bash
git remote add origin <url>

git push -u origin master
```

> [!NOTE] You don't need to memorize these commands, because you can always copy them from the remote repository page. Remember that `Ctrl` + `V` will not work in Git Bash. Instead, right-click in the terminal and select "Paste" from the context menu.

# Pushing Changes to a Repository

Once you have pushed your local repository to a remote repository, you can push changes to the remote repository as you make them. This allows you to share your code with others and collaborate on projects.

The process is different than your initial push because your local repo is already connected to the remote repo.

This video will show you how to push changes to GitHub:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

The commands we ran were:

```bash
git add .

git commit -m "Your message here"

git push
```