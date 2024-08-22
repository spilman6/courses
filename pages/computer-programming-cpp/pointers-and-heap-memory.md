---
title: Pointers and Heap Memory
subtitle: Computer Programming C++
hideNav: false
---

# Pointers

Pointers are variables that store the memory address of another variable.

To declare a pointer, you use the `*` symbol. This can be confusing because the `*` symbol is also used for multiplication, and also for dereferencing a pointer, which we will see later.

Along with the `*` symbol, we will also be using the `&` symbol. The `&` symbol is used to get the memory address of a variable.

Look at the following code:

```cpp
int x; // create a "normal" integer variable
int *p; // create a pointer to an integer variable

x = 5; // assign 5 to x
p = &x; // assign the memory "address of" x to p

cout << x << "\n"; // prints 5 (the value of x)
cout << p << "\n"; // prints the memory address of x
```

This video will explain pointers in more detail:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/2PmBZWznktg" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Dereferencing a Pointer

Dereferencing a pointer means getting the value of the variable that the pointer is pointing to.

We generally don't care about addresses of variables. Just like the address of your house is not as important as the house itself. However, addresses are important to help us find where we need to go.

To dereference a pointer, you use the `*` symbol again.

Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/xKiWyUhCvOM" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code from the video:

```cpp
int x = 5;
int *p = &x; // create and initialize in one line

x = 10; // change the value of x
cout << x << "\n";
cout << p << "\n"; // print the value of the pointer (an address)
cout << &x << "\n"; // print the "address of" x
cout << *p << "\n"; // dereference the pointer (get the value it points to)
```

> [!NOTE] Everytime we use the "new" keyword in C++, we get back a pointer. So we need to understand pointers to use classes and objects!

# Heap Memory

We already know about "the stack." The heap is another place in memory where we can store data. The heap is used for dynamic memory allocation.

When we create a variable on the stack, the memory is automatically allocated and deallocated for us. When we create a variable on the heap, we have to allocate and deallocate the memory ourselves using the `new` and `delete` keywords.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/CfL34DxYLJM" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code:

```cpp
struct Student
{
	string Name;
	float GPA;
	int ClassIDs[30];
};

int main()
{
	Student studentOnStack; // always created!

	char create = 'n';
	cin >> create;

	Student *pStudent;

	if (create == 'y' || create == 'Y')
	{
		pStudent = new Student; // only created if user wants it
	}

	(void)_getch();
	return 0;
}
```

# The Arrow Operator

When we have a pointer to a struct or class, we can't use the `.` operator to access the members of the struct or class. This should make sence because a pointer holds an address, not the actual data.

We could use the `*` operator to dereference the pointer and then use the `.` operator to access the members of the struct or class. However, this is a bit cumbersome. The `.` operator has higher precedence than the `*` operator, so we would end up with something like this:

```cpp
(*pStudent).Name = "John"; // dereference the pointer and access the Name member
```

While this would work, it is not very readable. Instead, we can use the arrow operator `->`. This video will explain the arrow operator:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/DuPD7KuVFjo" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that was modified in the video:

```cpp
if (pStudent)
{
	cout << "Enter student name: ";
	cin >> pStudent->Name; // dereference and access "Name" member
	cout << pStudent->Name;
}
```

> [!TIP] It's okay to get in the habbit of typing the `.`, instead of the `->`. Most major IDEs will automatically change the `.` to `->` for you.

# The Delete Keyword

When we create a variable on the heap, we have to deallocate the memory ourselves. We do this using the `delete` keyword. For example: `delete pStudent;`

This video will explain the `delete` keyword:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/vv-4TraMwN4" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Passing Pointers to Functions

When we pass a pointer to a function, we are passing the memory address of the variable. This means that the function can change the value of the variable, similar to passing by reference.

Let's look at an example:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/xsq1aVCcjK0" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that was added in the video:

```cpp
void PrintStudent(Student* pStudent)
{
	cout << pStudent->Name << " has a GPA of " << pStudent->GPA << "\n";
}

int main()
{
	Student studentOnStack;
	// set the values of studentOnStack
	PrintStudent(&studentOnStack); // pass the "address of" because
								  // PrintStudent expects a pointer 

	Student* pStudent = new Student;
	// set the values of pStudent
	PrintStudent(pStudent);// already have a pointer
}
```

# Returning Pointers from Functions

When we return a pointer from a function, we are returning the memory address of the variable. This means that the function can create a variable on the heap and return the memory address of that variable.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/nwsexCiARSQ" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that we added:

```cpp
Student* CreateRyan()
{
	Student *pS = new Student;
	pS->Name = "Ryan";
	pS->GPA = 3.64f;
	return pS;
}

int main()
{
	Student *pRyan = CreateRyan();
	PrintStudent(pRyan);
}
```

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/WFyff64kWvU" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, you will calculate the area of a shape. Your program will ask the user which shape they would like to calculate the area of. The user can choose between a rectangle and a triangle. The program will then ask the user for the dimensions of the shape and calculate the area.

Use the following structs:

```cpp
struct Rectangle
{
	float Height;
	float Width;
};

struct Tringle
{
	float Base;
	float Height;
};
```

You will need to create the following functions:

1. `GetRectangleInfo` - This function will ask the user for the height and width of the rectangle and return a pointer to a `Rectangle`.

2. `GetTriangleInfo` - This function will ask the user for the base and height of the triangle and return a pointer to a `Triangle`.

3. `CalculateRectangleArea` - This function will take a pointer to a `Rectangle` and return the area.

4. `CalculateTriangleArea` - This function will take a pointer to a `Triangle` and return the area.

For the first two functions, you can use cin/cout to get the dimensions from the user. For the last two functions, you shouldn't use cin/cout.

In the `main` function, you will ask the user which shape they would like to calculate the area of. 'R' for Rectangle, or 'T' for Triangle. 

> [!TIP] You can use `(char)toLower(choice)` to convert the user's choice to lowercase.

You will then call the appropriate function to get the dimensions of the shape. Finally, you will call the appropriate function to calculate the area of the shape and print the result.

Make sure that you only create the shape that the user wants to calculate... i.e. If the user wants to calculate the area of a rectangle, you should not create a triangle!

Here are the formulas for the area of a rectangle and a triangle:

- Rectangle: `Area = Height * Width`

- Triangle: `Area = 0.5 * Base * Height`

## Hints {#exercise-1-hints}

<details>
	<summary>How do I return a pointer from a function?</summary>

You can return a pointer from a function by creating a variable on the heap and returning the memory address of that variable. For example:

```cpp
Rectangle* GetRectangleInfo()
{
	Rectangle *pR = new Rectangle;
	// set the height and width
	return pR;
}
```

</details>

<details>
	<summary>How do I pass a pointer to a function?</summary>

You can pass a pointer to a function by using a pointer as a parameter. For example:

```cpp
void PrintRectangleArea(Rectangle *pR)
{
	float area = CalculateRectangleArea(pR);
	cout << "The area of the rectangle is: " << area << "\n";
}
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the Answer</summary>

```cpp
#include <iostream>
#include <conio.h>
using namespace std;

struct Rectangle
{
	float Height;
	float Width;
};

struct Triangle
{
	float Base;
	float Height;
};

Rectangle* GetRectangleInfo()
{
	Rectangle* pR = new Rectangle;
	cout << "Enter the height of the rectangle: ";
	cin >> pR->Height;
	cout << "Enter the width of the rectangle: ";
	cin >> pR->Width;
	return pR;
}

Triangle* GetTriangleInfo()
{
	Triangle* pT = new Triangle;
	cout << "Enter the base of the triangle: ";
	cin >> pT->Base;
	cout << "Enter the height of the triangle: ";
	cin >> pT->Height;
	return pT;
}

float CalculateRectangleArea(Rectangle* pR)
{
	return pR->Height * pR->Width;
}

float CalculateTriangleArea(Triangle* pT)
{
	return 0.5f * pT->Base * pT->Height;
}

int main()
{
	cout << "Which shape would you like to calculate the area of?\n";
	cout << "R for Rectangle\n";
	cout << "T for Triangle\n";

	char choice = ' ';
	char lower = ' ';

	while (lower != 'r' && lower != 't')
	{
		cout << "Enter R or T: ";
		cin >> choice;
		lower = (char)tolower(choice);
	}

	Rectangle* pR = nullptr;
	Triangle* pT = nullptr;

	if (lower == 'r') pR = GetRectangleInfo();
	else pT = GetTriangleInfo();

	float area = pR
		? CalculateRectangleArea(pR)
		: CalculateTriangleArea(pT);

	cout << "The area: " << area << "\n";

	(void)_getch();
	return 0;
}
```

</details>

<details>
	<summary>Walkthrough Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/vUibK37wnzc" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Arrays on the Heap

When we create an array on the stack, we need to know the size of the array at compile time.

When we create an array on the heap, we can allocate the memory at runtime. This means that we can create an array of any size dynamically.

Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/75MEVFHfVec" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that was added in the video:

```cpp
cout << "How many numbers?: ";
int size = 0;
cin >> size;

int *numbers = new int[size];

for (int i = 0; i < size; i++)
{
	cout << (i + 1) << ": ";
	cin >> numbers[i];
}

for (int i = 0; i < size; i++)
{
	cout << numbers[i];
	if (i < size - 1) cout << ", ";
}

delete[] numbers; // delete the array
```

> [!IMPORTANT] The video doesn't show the `delete[] numbers;` line. Deleting an array on the heap needs a `[]` after the `delete` keyword.

# Passing Arrays to Functions

When we pass an array to a function, we are passing the memory address of the first element of the array. The problem is that we don't know the size of the array. We need to pass the size of the array as well.

This video will explain further:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/M5evWLw1N_k" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that was added in the video:

```cpp
void PrintNumbers(int *numbers, int size)
{
	for (int i = 0; i < size; i++)
	{
		cout << numbers[i];
		if (i < size - 1) cout << ", ";
	}
}

// in main:
PrintNumbers(numbers, size);
```

# Exercise 2

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, you will create a program that will ask the user to enter the number of students in a class. The program will then ask the user to enter the names of the students, along with their GPAs. The program will then print the names of the students with a GPA that are greater than a specified value.

Use the following struct:

```cpp
struct Student
{
	string Name;
	float GPA;
};
```

And create the following functions:

1. `GetStudentInfo` - This function will ask the user for the name and GPA of a student and return a pointer to a `Student`. You will need to use the `new` keyword to create the `Student` on the heap.

2. `PrintStudent` - This function will take a pointer to a `Student` and print the name and GPA of that student.

3. `PrintStudentsWithGPA` - This function will take an array of students, the size of the array, and the minimum GPA to display. The function will print the names of the students with a GPA that is greater than the specified value.

Example output:

```plaintext
How many students?: 3

Enter the student's name: John
Enter the student's GPA: 3.5

Enter the student's name: Jane
Enter the student's GPA: 3.2

Enter the student's name: Jack
Enter the student's GPA: 2.9

Enter the minimum GPA: 3.2
John's gpa is 3.5.
Jane's gpa is 3.2.
```

## Hints {#exercise-2-hints}

<details>
	<summary>How do I create an array of students on the heap?</summary>

You can create an array of students on the heap by using `new`, and specifying the size of the array. For example:

```cpp
Student *students = new Student[size];
``` 

</details>

<details>
	<summary>How do I pass an array of students to a function?</summary>

You can pass an array of students to a function by passing a pointer to the array (without `[]`), along with the size of the array. For example:

```cpp
void PrintStudentsWithGPA(Student *students, int size, float gpa)
{
	// code here
}

// in main:
PrintStudentsWithGPA(students, size, gpa);

```

</details>

## Solution {#exercise-2-solution}

<details>
	<summary>Show the Answer</summary>

```cpp
#include <iostream>
#include <conio.h>

using namespace std;

struct Student
{
	string Name;
	float GPA = 0;
};

void PrintStudent(Student *pStudent)
{
	cout << pStudent->Name << "'s gpa is " << pStudent->GPA << ".\n";
}

void PrintStudentsWithGPA(Student *students, int size, float gpa)
{
	for (int i = 0; i < size; i++)
	{
		if (students[i].GPA >= gpa) PrintStudent(&students[i]);
	}
}

Student* GetStudentInfo()
{
	Student *pS = new Student;
	cout << "Enter the student's name: ";
	cin >> pS->Name;
	cout << "Enter the student's GPA: ";
	cin >> pS->GPA;
	cout << "\n";
	return pS;
}

int main()
{
	cout << "How many students?: ";
	int size = 0;
	cin >> size;
	cout << "\n";

	Student *students = new Student[size];

	for (int i = 0; i < size; i++)
	{
		students[i] = *GetStudentInfo();
	}

	float gpa = 0.0f;
	cout << "Enter the minimum GPA: ";
	cin >> gpa;

	PrintStudentsWithGPA(students, size, gpa);

	delete[] students;
	
	(void)_getch();
	return 0;
}
```

</details>

<details>
	<summary>Walkthrough Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/pQ0OjZ5Ml2c" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Splitting Code into Header Files

When we create a program, we generally put all of the code in one file. This is fine for small programs, but as the program grows, it can become difficult to manage.

In this video, we will take the code from [Exercise 1](#exercise-1-solution) and split it into multiple files. Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/GpCpJ0l4iXo" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code after splitting it up:

Main.cpp:

```cpp
#include <conio.h>

#include "Rectangle.h"
#include "Triangle.h"

int main()
{
	std::cout << "Which shape would you like to calculate the area of?:\n";
	std::cout << "R for Rectangle\n";
	std::cout << "T for Triangle\n";

	char choice = ' ';
	char lower = ' ';

	while (lower != 'r' && lower != 't')
	{
		std::cout << "Enter R or T: ";
		std::cin >> choice;
		lower = (char)tolower(choice);
	}

	Rectangle* pR = nullptr;
	Triangle* pT = nullptr;

	if (lower == 'r') pR = GetRectangleInfo();
	else pT = GetTriangleInfo();

	float area = pR
		? CalculateRectangleArea(pR)
		: CalculateTriangleArea(pT);

	std::cout << "The area is: " << area << "\n";
	
	(void)_getch();
	return 0;
}
```

Rectangle.h:

```cpp
#pragma once

#include <iostream>

struct Rectangle
{
	float Height;
	float Width;
};

Rectangle* GetRectangleInfo()
{
	Rectangle* pR = new Rectangle;
	std::cout << "Enter the height of the Rectangle: ";
	std::cin >> pR->Height;
	std::cout << "Enter the width of the Rectangle: ";
	std::cin >> pR->Width;
	return pR;
}

float CalculateRectangleArea(Rectangle* pR)
{
	return pR->Height * pR->Width;
}
```

Triangle.h:

```cpp
#pragma once

#include <iostream>

struct Triangle
{
	float Base;
	float Height;
};

Triangle* GetTriangleInfo()
{
	Triangle* pT = new Triangle;
	std::cout << "Enter the base of the Triangle: ";
	std::cin >> pT->Base;
	std::cout << "Enter the height of the Triangle: ";
	std::cin >> pT->Height;
	return pT;
}

float CalculateTriangleArea(Triangle* pT)
{
	return 0.5f * pT->Base * pT->Height;
}
```

> [!TIP] The `#pragma once` directive is calld an "include guard." We will talk more about this when we start learning about classes.