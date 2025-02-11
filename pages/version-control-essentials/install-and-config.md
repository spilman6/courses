---
title: Installation and Configuration
subtitle: Version Control Essentials
hideNav: false

# next:
#   title: Creating Local Repos
#   url: /appel/version-control-essentials/create-local-repos

# previous:
#   title: Home
#   url: /appel/version-control-essentials

live: https://fvtc.software/appel/version-control-essentials/install-and-config
dev: http://localhost:3006/appel/version-control-essentials/install-and-config
repo: https://github.com/rdappel/courses
---

# Installing Git

## Is Git Already Installed?

You can quickly check to see if git is installed on your computer, and which version. Simply open a terminal (or command prompt) and type the following command:

```bash
git --version
```

If you see a version number, then Git is already installed on your computer. If you see an error message or if your version is less than 2.30, you will need to install Git.

If you haven't run commands from a terminal before, you can watch this video to learn how:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

## Downloading and Installation

To install Git, go to [https://git-scm.com/downloads](https://git-scm.com/downloads) and download the version for your operating system.

The following videos will walk you through the installation process. Choose the corresponding video for your operating system:

<details>
    <summary class="video">Windows 10/11</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/fey75kkPXYs" width="100%" height="100%" frameborder="0"
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

# User Configuration

Now that Git is installed, you need to configure it with your name and email address. This information will be used to identify you when you make changes to your code.

> [!NOTE] If you are on campus, using a school computer, this step is not necessary. Git will use your school email address and username.

This video will walk you through the process of configuring Git:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/cuo-Gl98Ewc" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

> [!NOTE] You can use your school email address, or your personal email if you prefer

Here is the command to set your user name:

```bash
git config --global user.name "Your Name"
```

And here is the command to set your email address:

```bash
git config --global user.email "Your Email"
```

> [!TIP] You can change your name and email address at any time by running these commands again, or by modifying the `.gitconfig` file in your home directory.