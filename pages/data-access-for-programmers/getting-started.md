---
title: Getting Started
subtitle: Data Access for Programmers
hideNav: false

live: https://fvtc.software/spilman/data-access-for-programmers/getting-started
---

# Welcome to the Class!

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/sLDuwpjPfBQ"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

# Primitive Data Types

There are an infinite number of types of data that programmers need to use when developing an application. However, all data-types can be broken down into its core components. These components are often referred to as "basic" or "primitive" types. Depending on the language that the programmer is using, similar data-types may have different names. The following video will cover some of the most common data-types.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/DO6E9hOeg4k"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

## String Data

The data type that we'll be using most often is called a string, short for a "string of characters".

> [!NOTE]
> Some examples of string data are: "Data Access for Programmers," "Green Bay Packers," and "Starbucks".
<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/-dRicTc2GFA"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

## Numeric Data

After string data, the next most common data-types are numeric types.

> [!NOTE]
> Some examples of integers are: 100, -37, 0, and 3,217,401. <br>
> Examples of floating-point numbers include: 3.14, 0.0, and -1.618.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/6MbgzppUupY"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

## Boolean Data

The last type that we are going to focus on this week is a boolean (true/false) data-type.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/iwbAMmSP4Ls"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

## String Ambiguity

One of the most common problems that programmers face is determining the type of data that they are working with. Since strings can contain numeric characters, it's important to determine which type of data you're working with.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/1i4pzNaLHpY"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

# Exercise 1

Take a minute to look at the following data, then try to determine the data-type of each value.

```ebnf
Name: Kirill Kaprizov
Age: 25
Team: Minnesota Wild
Number: 97
Position: Left Wing
Salary: $9,000,000
```

<details>
	<summary>Show the Answer</summary>

```ebnf
Name: Kirill Kaprizov - String
Age: 25 - Integer
Team: Minnesota Wild - String
Number: 97 - String (or Integer)
Position: Left Wing - String
Salary: $9,000,000 - Float (9000000.00)
```
</details>

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/HOd-IRnhFyo"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

# Calculated Data

Sometimes we chose NOT to store data because it can be calculated from another piece of data. For example, if we have a database that stores the date of birth for a person, we can calculate their age by subtracting their date of birth from today's date.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/sozq2ervdYc"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

# Exercise 2

Let's take a look at the following data. Can you determine the data-type of each value? Or determine if the value is calculated, and should not be stored?

```ebnf
Name: Alex Goligoski
DOB: 7/30/1985
AGE: 37
Team: Minnesota Wild
Number: 47
Height: 5-11
Weight: 173
Shoots: Right
```

<details>
	<summary>Show the Answer</summary>

```ebnf
Name: Alex Goligoski - String
DOB: 7/30/1985 - String (really an object)
AGE: 37 - Integer (calculated)
Team: Minnesota Wild - String
Number: 47 - String (or Integer)
Height: 5-11 - Integer (71 inches)
Weight: 173 - Integer (or Float)
Shoots: Right - String (or Boolean)
```
</details>

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/p33gEY2LZzk"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

# Data-Type Conversion

Sometimes we need to convert data from one type to another. For example, if we have a string that contains a number, we may need to convert it to an integer or floating-point number. Or, if we have a string that contains a date, we may need to convert it to a date object.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/x825r0BYcMs"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

# Accessing your VM

We will be using Virtual Machines in this class. This will make it easier for us to all be using the same software and tools.

> [!IMPORTANT]
> It is important to understand that we have two different Virtual Machine infrastructures. We have Citrix Machines (General Desktop for example), and VMWare vSphere Machines (Training VMs). This class uses the Training VMs.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/uWYML0FP8Co"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

# Programming Demos

The VMs that we are using in this class are pre-configured with all of the software that we will need. This includes Visual Studio Code, Google Chrome, MySQL Workbench, and the MySQL Server. It also includes a few databases that we will be using in our exercises.

On the desktop, you will find a folder called "Programming Demos". This folder contains a number of applications that demonstrate how the concepts that we are learning in class can be applied in real-world applications.

This video will show you how to run the programming demos.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/rJyPbLtdkvk"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

# Review Questions

1. What is the difference between a string and a numeric data-type?
<details>
  <summary>Answer</summary>
  A string is a sequence of characters, while a numeric data-type is a number.
</details>

2. What is the difference between an integer and a floating-point number?
<details>
  <summary>Answer</summary>
  An integer is a whole number, while a floating-point number is a number with a decimal point.
</details>

3. How would you turn an integer into a string?
<details>
  <summary>Answer</summary>
  You would use a "ToString" function.
</details>

4. How would you turn a string into a floating-point number?
<details>
  <summary>Answer</summary>
  You would use a "Parse" function.
</details>
