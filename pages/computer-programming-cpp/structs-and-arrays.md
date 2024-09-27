---
title: Structs and Arrays
subtitle: Computer Programming C++
hideNav: false
---

# Structs and Arrays

In this unit we will learn about two types of data structures: structs and arrays. We will also learn how to use these data structures together to create more complex programs.

# Structs

A struct is a user-defined data type that allows you to group together multiple variables of different types. For example, you could create a struct to represent a student, with variables for the student's name, ID number, and gpa.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/zI8nJMOZIFc" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the struct that we created in the video:

```cpp
struct Student
{
	string Name;
	float GPA = 0;
};
```

And then in our main function, we can create a variable of type `Student` like this:

```cpp
Student jim;
jim.Name = "Jim";
jim.GPA = 4.0;
```

## Passing Structs to Functions

You can also pass structs to functions as arguments. This allows you to group together related data and pass it around your program more easily.

One problem with passing structs to functions is that the entire struct is copied when it is passed to the function. This can be inefficient if the struct is large. One way to avoid this is to pass the struct by reference, which allows the function to modify the original struct.

This video will explain in more detail:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/iEdwSAlF5hQ" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```cpp
struct Student
{
	string Name;
	float GPA = 0;
};

void PrintStudent(const Student& student)
{
	cout << student.Name << " has a GPA of " << student.GPA << "\n";
}

int main()
{
	Student jim = { "Jim", 4.0 };
	PrintStudent(jim);

	(void)_getch();
	return 0;
}
```

# Arrays

An array is a data structure that allows you to store multiple values of the same type in a single variable. For example, you could create an array to store the grades of a student in a class.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/XmyFWGoVxhw" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the array that we created in the video:

```cpp
int numbers[10]; // create 10 integers

for (int i = 0; i < 10; i++)
{
	cout << numbers[i] << "\n"; // print each number (whatever happens to be in memory)
}
```

## Initializing Arrays

If we know the values that we want to store in an array when we create it, we can initialize the array using a list of values enclosed in curly braces `{}`.

It's also good practice to use a constant to define the size of the array, so that if we need to change the size of the array later, we only need to change it in one place.

Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/93EAka-_JPw" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the example from the video:

```cpp
const int SIZE = 9;
int numbers[SIZE] = { 12, 45, 31, -6, 0, 22, 6, 44, 50 };

for (int i = 0; i < SIZE; i++)
{
	cout << numbers[i] << "\n";
}
```

## How Indexing Works

When we want to access an element in an array, we use the index of the element. The index is a number that represents the position of the element in the array. The first element in the array has an index of 0, the second element has an index of 1, and so on.

Using index 0 to represent the first element in the array is a common convention in programming languages. This is because the index is actually an offset from the beginning of the array, and the first element is 0 elements away from the beginning. This video explains it in more detail:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/ch4H1X6ACxE" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the updated code:

```cpp
const int SIZE = 3;
int numbers[SIZE];

// get the user input
for (int i = 0; i < SIZE; i++)
{
	cout << (i + 1) << ". Enter an integer: ";
	cin >> numbers[i];
}

// print out the array
for (int i = 0; i < SIZE; i++)
{
	cout << numbers[i] << "\n";
}
```

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/XloEG8nqjT0" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, create an array called "suits" that contains the names of the four suits in a deck of cards: "Hearts", "Diamonds", "Clubs", and "Spades". Then, ask the user to enter a number between 1 and 4, and print out the name of the suit at that index in the array.

Your output should look something like this:

```plaintext
Select a suit from the list below:
1. Hearts
2. Diamonds
3. Clubs
4. Spades

Enter a number between 1 and 4: 2
You selected: Diamonds
```

Remember that the index of the array will be from 0 to 3, (not 1 to 4).

You can do this right in the demo code, but keep the "Student" struct because we will use it in upcoming demos.

## Hints {#exercise-1-hints}

<details>
	<summary>How do you create an array of strings?</summary>

You can create an array of strings like this:

```cpp
const int NUM_SUITS = 4;
string suits[NUM_SUITS] = { "Hearts", "Diamonds", "Clubs", "Spades" };
```

</details>

<details>
	<summary>How do you print the list of suits to the user?</summary>

You can use a loop to print out the list of suits like this:

```cpp
cout << "Select a suit from the list below:\n";
for (int i = 0; i < NUM_SUITS; i++)
{
	cout << (i + 1) << ". " << suits[i] << "\n";
}
```

</details>

<details>
	<summary>How do you print the correct suit based on user input?</summary>

You have to subtract 1 from the user input to get the correct index in the array. Like this:

```cpp
int choice;
cout << "Enter a number between 1 and 4: ";
cin >> choice;

cout << "You selected: " << suits[choice - 1] << "\n";
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the Answer</summary>

```cpp
const int NUM_SUITS = 4;
string suits[NUM_SUITS] = { "Hearts", "Diamonds", "Clubs", "Spades" };

int choice;
cout << "Select a suit from the list below:\n";
for (int i = 0; i < NUM_SUITS; i++)
{
	cout << (i + 1) << ". " << suits[i] << "\n";
}

cout << "\nEnter a number between 1 and 4: ";
cin >> choice;

cout << "You selected: " << suits[choice - 1] << "\n";
```

</details>

<details>
	<summary>Walkthrough Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/CNd9oZhgLmw" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>


# Arrays of Structs

We can create an array of any data type, including structs. This allows us to store multiple instances of the struct in a single variable.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/MReCLrbuZtQ" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```cpp
const int NUM_STUDENTS = 2;
Student students[NUM_STUDENTS] = {
	{ "Jim", 4.0 },
	{ "Sally", 3.5 }
};

for (int i = 0; i < NUM_STUDENTS; i++)
{
	cout << students[i].Name << " has a GPA of " << students[i].GPA << "\n";
}
```

# Struct with Array

We can also create a struct that contains an array as one of its members. This allows us to group together related data in a single variable.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/lyQfKZcx5ng" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```cpp
struct Student
{
	string Name;
	float GPA = 0;
	int CourseIDs[3];
};

Student jim = { "Jim", 4.0, { 101, 102, 103 } };
cout << jim.Name << " is taking courses: ";

for (int i = 0; i < 3; i++)
{
	cout << jim.CourseIDs[i] << " ";
}
```

# Exercise 2

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/rPWqDiVuFGk" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, create a struct called "Course" that contains the name of the course and the number of credits. Then, create an array of courses that contains the following:

- "Intro to Programming" - 3 credits
- "Data Structures" - 4 credits
- "Algorithms" - 4 credits
- "Intermediate Programming" - 3 credits

Then, print out the name and number of credits for each course in the array using a loop.

The output should look something like this:

```plaintext
Course: Intro to Programming
Credits: 3

Course: Data Structures
Credits: 4

Course: Algorithms
Credits: 4

Course: Intermediate Programming
Credits: 3
```

## Hints {#exercise-2-hints}

<details>
	<summary>What should be inside the struct?</summary>

The struct should contain two members: a string for the name of the course and an integer for the number of credits. Like this:

```cpp
struct Course
{
	string Name;
	int Credits;
};
```

</details>

<details>
	<summary>How do you create an array of structs?</summary>

You can create an array of structs like this:

```cpp
const int NUM_COURSES = 4;
Course courses[NUM_COURSES] = {
	{ "Intro to Programming", 3 },
	{ "Data Structures", 4 },
	{ "Algorithms", 4 },
	{ "Intermediate Programming", 3 }
};
```

</details>

<details>
	<summary>How do you access the members of a struct in an array?</summary>

You can access the members of a struct in an array like this:

```cpp
cout << "Course: " << courses[i].Name << "\n";
cout << "Credits: " << courses[i].Credits << "\n\n";
```

</details>

## Solution {#exercise-2-solution}

<details>
	<summary>Show the Answer</summary>

```cpp
Struct Course
{
	string Name;
	int Credits;
};

int main()
{
	const int NUM_COURSES = 4;

	Course courses[NUM_COURSES] = { // This is marked "const" in the walkthrough video, but doesn't need to be.
		{ "Intro to Programming", 3 },
		{ "Data Structures", 4 },
		{ "Algorithms", 4 },
		{ "Intermediate Programming", 3 }
	};

	for (int i = 0; i < NUM_COURSES; i++)
	{
		cout << "Course: " << courses[i].Name << "\n";
		cout << "Credits: " << courses[i].Credits << "\n\n";
	}

	(void)_getch();
	return 0;
}
```

</details>

<details>
	<summary>Walkthrough Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/OK71vcgd1Ho" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Character Arrays

Character arrays are a special type of array that can be used to store strings. Specifically, there is a special way to create and initialize character arrays that makes them behave like strings.

This video will explain how character arrays work and how to use them to store strings:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/17UA29GUnfA" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```cpp
//char name[5] = { 'R', 'y', 'a', 'n', '\0' };
char name[] = "Ryan";
cout << name;
```
