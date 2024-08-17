---
title: Functions
subtitle: Computer Programming C++
---

# Functions in C++

In this lesson, we will learn about functions in C++. Functions are a way to organize code into reusable blocks. They are a fundamental concept in programming and are used in every programming language.

> [!NOTE] You should be familiar with methods from C#. Functions are similar, but technically different. A method is a function that is part of a class. Therefore, all methods are functions, but not all functions are methods.

## Function Syntax

Here is the basic syntax for a function in C++:

```cpp
return_type function_name(parameters) {
	// code
}
```

- `return_type` is the type of value that the function will return. If the function does not return a value, use `void`.
- `function_name` is the name of the function. This is how you will call the function.
- `parameters` are the values that the function will accept. `parameters` are optional.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code:
```cpp
void PrintHi()
{
	cout << "Hi";
}

int main()
{
	PrintHi();
	
	(void)_getch();
	return 0;
}
```

# Parameters

Parameters are the values that the function will accept. In C++ you must specify the type of each parameter.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```cpp
void PrintHi(int count, bool formal)
{
	for (int i = 0; i < count; i++)
	{
		if (!formal) cout << "Hi\n";
		else cout << "Hello good sir!\n";
	}
}

int main()
{
	PrintHi(3, true);
	
	(void)_getch();
	return 0;
}
```

## Optional Parameters

In C++, you can provide default values for parameters. This allows you to call the function without providing a value for that parameter. This is referred to as an "optional parameter", and is also sometimes called a "default parameter."

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```cpp
void PrintHi(int count = 1, bool formal = false)
{
	for (int i = 0; i < count; i++)
	{
		if (!formal) cout << "Hi\n";
		else cout << "Hello good sir!\n";
	}
}
```

# Function Overloading

Function overloading is a feature in C++ that allows you to define multiple functions with the same name, but different parameters. This is useful when you want to perform the same operation on different types of data.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here are the overloaded functions from the video:

```cpp
void PrintHi(int count)
{
	PrintHi(count, false);
}

void PrintHi(int count, bool formal)
{
	for (int i = 0; i < count; i++)
	{
		if (!formal) cout << "Hi\n";
		else cout << "Hello good sir!\n";
	}
}
```

> [!NOTE] This code will not compile! The following section [function prototypes](#function-prototypes) will explain why, and how to fix it.

# Function Prototypes

The C++ compiler reads your code from top to bottom. This means that if you call a function before it is defined, the compiler will not know what you are talking about. To fix this, you can use a function prototype. Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```cpp
// function prototypes
void PrintHi(int count);
void PrintHi(int count, bool formal);

int main()
{
	PrintHi(2);

	(void)_getch();
	return 0;
}

void PrintHi(int count)
{
	PrintHi(count, false);
}

void PrintHi(int count, bool formal)
{
	for (int i = 0; i < count; i++)
	{
		if (!formal) cout << "Hi\n";
		else cout << "Hello good sir!\n";
	}
}
```

# Return Values

Often when we execute a function, we want to get a value back. Similar to C#, we can have a function return a value.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```cpp
// function prototypes
int GetUserNumber(int max = 10);

int main()
{
	int number = GetUserNumber(50);
	cout << "Your number is " << number << ".\n";

	(void)_getch();
	return 0;
}

int GetUserNumber(int max)
{
	int value = 0;
	while (value < 1 || value > max)
	{
		cout << "Enter a number between 1 and " << max << ": ";
		cin >> value;
	}

	return value;
}
```

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

In this exercise, modify the `GetUserNumber` function to accept a minimum value as well as a maximum value. Have the minimum default to 1.

If the function is called and the minimum value is greater than the maximum value, swap the values.

Test the function by calling it with:

```cpp
int userNumber1 = GetUserNumber(5, 10);
int userNumber2 = GetUserNumber(10, 5);

cout << "User number 1: " << userNumber1 << endl;
cout << "User number 2: " << userNumber2 << endl;
```

## Hint {#exercise-1-hints}

<details>
	<summary>How do I swap two values?</summary>

You will probably need to use a temporary variable to swap the values, like this:

```cpp
int t = min;
min = max;
max = t;
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the Answer</summary>

```cpp
// function prototypes
int GetUserNumber(int max = 10, int min = 1);

int main()
{
	//int number = GetUserNumber();
	//cout << "Your number is " << number << ".\n";

	int userNumber1 = GetUserNumber(5, 10);
	int userNumber2 = GetUserNumber(10);

	(void)_getch();
	return 0;
}

int GetUserNumber(int max, int min)
{
	if (min > max)
	{
		int t = min;
		min = max;
		max = t;
	}

	int value = 0;
	while (value < min || value > max)
	{
		cout << "Enter a number between " << min << " and " << max << ": ";
		cin >> value;
	}

	return value;
}
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

# Recursion

Recursion is a technique in programming where a function calls itself. In order to prevent infinite loops, you must have a base case that will stop the recursion.

Let's look at an example:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the example from the video:

```cpp
```

# The Call Stack

When a function is called, the computer creates a new stack frame. This stack frame contains the local variables for that function. When the function returns, the stack frame is removed.

We can monitor the call stack by using the `callstack` window in Visual Studio. This is useful for debugging because it allows you to see where a function was called from.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

> [!WARNING] The `main` function should never be called manually! Calling `main` manually will cause all of the local variables to be duplicated (on the new stack frame), and the variables on the previous frame will not be deleted!

# Exercise 2

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>



## Hints {#exercise-2-hints}

<details>
	<summary>How do I ?</summary>

Answer

</details>

## Solution {#exercise-2-solution}

<details>
	<summary>Show the Answer</summary>



</details>

<details>
	<summary>Walkthrough Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

