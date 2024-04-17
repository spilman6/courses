---
title: 'Getting Started Exercises'
course: 'Computer Programming C++'
---

# Exercise 1

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Create a new C++ project in Visual Studio. Write a program that prints your name to the console.

## Hints  {#exercise-1-hints}

<details>
	<summary>How do I create a new project in Visual Studio?</summary>

To create a new project in Visual Studio, follow these steps:

1. In Visual Studio, click on "Create a new project".

2. Select "C++" from the list of project types.

3. Choose "Empty Project" from the list of project templates.

4. Click "Next".

5. Enter a name for your project and click "Create".

6. Right-click on the "Source Files" folder in the Solution Explorer and select "Add" -> "New Item".

7. Name your new file `Main.cpp` and click "Add".

</details>

<details>
    <summary>How do I write a program that prints to the console?</summary>

You can write a program that prints to the console like this:
    
```cpp
#include <iostream>
#include <conio.h>

using namespace std;

int main()
{
    cout << "Hello World!";
    (void)_getch();
    return 0;
}
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the answer</summary>

```cpp
#include <iostream>
#include <conio.h>

using namespace std;

int main()
{
    cout << "Your Name"; // Replace "Your Name" with your name
    (void)_getch();
    return 0;
}
```
</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 2

<details>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Building on the previous exercise, modify the program to ask the user to enter an integer and then print it to the console.

## Hints  {#exercise-2-hints}

<details>
    <summary>How do I get user input in C++?</summary>

You can get user input in C++ using the `cin` object. Here's an example:

```cpp
int number = 0;
cout << "Enter a number: ";
cin >> number;
```

</details>

<details>
    <summary>How do I print a variable to the console?</summary>

You can print a variable to the console like this:

```cpp
int number = 42;
cout << "The number is: " << number << "\n";
```

</details>

## Solution {#exercise-2-solution}

<details>
    <summary>Show the answer</summary>

```cpp
#include <iostream>
#include <conio.h>

using namespace std;

int main()
{
    int number = 0;
    cout << "Enter an integer: ";
    cin >> number;
    cout << "The number you entered is: " << number << "\n";
    (void)_getch();
    return 0;
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

# Exercise 3

<details>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Building on the previous exercise, modify the program to ask the user to enter two integers. Once the user has entered them, print out the sum, difference, product, and quotient of the two numbers. For example, if the user enters 5 and 3, the program should output:

```bash
Sum: 8
Difference: 2
Product: 15
Quotient: 1
```

> [!NOTE] Don't worry about handling division by zero.

## Hints  {#exercise-3-hints}

<details>
    <summary>How do I perform arithmetic operations in C++?</summary>

You can perform arithmetic operations in C++ like this:
    
```cpp
int a = 5;
int b = 3;

cout << "Sum: " << a + b << "\n";
```

</details>

## Solution {#exercise-3-solution}

<details>
    <summary>Show the answer</summary>

```cpp
cout << "Enter an integer: ";
int first = 0;
cin >> first;

cout << "Enter another integer: ";
int second = 0;
cin >> second;

cout << "Sum: " << first + second << "\n";
cout << "Difference: " << first - second << "\n";
cout << "Product: " << first * second << "\n";
cout << "Quotient: " << first / second << "\n";
```

You could also have asked for the user to enter the numbers in a single line, separated by a space, and then used `cin` to read them into two separate variables:

```cpp
int first = 0;
int second = 0;
cout << "Enter two integers separated by a space: ";
cin >> first >> second;
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

# Exercise 4

<details>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Modify the program to ask the user to enter an integer between 1 and 10. If the user enters a number outside this range, display an error message and ask them to try again. It should keep asking the user to enter a number until they enter a valid number.

> [!IMPORTANT] Choose the appropriate type of loop to use in this situation.

## Hints  {#exercise-4-hints}

<details>
    <summary>What type of loop should I use to keep asking the user for input?</summary>

You should use either a `while` loop or a `do-while` loop to keep asking the user for input until they enter a valid number, because you don't know how many times the user will enter an invalid number.

</details>

<details>
    <summary>How do I check if a number is within a specific range?</summary>

You can check if a number is within a specific range like this:

```cpp
bool isValid = (number >= 1 && number <= 10);
```

Or to check if a number is outside a specific range:

```cpp
bool isInvalid = (number < 1 || number > 10);
```

</details>

## Solution {#exercise-4-solution}

<details>
    <summary>Show the answer</summary>

```cpp
int number = 0;

do
{
    cout << "Enter an integer between 1 and 10: ";
    cin >> number;
} while (number < 1 || number > 10);

cout << "You entered: " << number << "\n";
```

You could also use a `while` loop to achieve the same result:

```cpp
int number = 0;

while (number < 1 || number > 10)
{
    cout << "Enter an integer between 1 and 10: ";
    cin >> number;
}

cout << "You entered: " << number << "\n";
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

# Exercise 5

<details>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Add on to the previous exercise. After the user has entered a valid number, display the multiplication table for that number from 1 to 10.

For example, if the user enters 5, the program should output:

```bash
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
// ...
5 x 10 = 50
```

> [!IMPORTANT] Do not hardcode the multiplication table. Use a loop to generate the table.

## Hints  {#exercise-5-hints}

<details>
    <summary>How do I display the multiplication table for a number?</summary>

You can display the multiplication table for a number like this:
    
```cpp
// assuming "number" is the user's input and "i" is the loop counter
cout << number << " x " << i << " = " << number * i << "\n";
```

</details>

## Solution {#exercise-5-solution}

<details>
    <summary>Show the answer</summary>

```cpp
int number = 0;

while (number < 1 || number > 10)
{
    cout << "Enter an integer between 1 and 10: ";
    cin >> number;
}

for (int i = 1; i <= 10; i++)
{
    cout << number << " x " << i << " = " << number * i << "\n";
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

# Exercise 6

<details>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Add to the previous exercise. While displaying the multiplication table, include only the output for the even numbers. When the result is odd, display a message saying "This is an \"odd\" number!".

> [!TIP] Use the modulo operator `%` to determine if a number is even or odd.

## Hints  {#exercise-6-hints}

<details>
    <summary>How do I check if a number is even or odd?</summary>

You can check if a number is even, by modulus dividing it by 2 and checking if the remainder is 0 (or 1 for odd numbers):

```cpp
int ten = 10;
int eleven = 11;

bool tenIsEven = (ten % 2 == 0); // true
bool elevenIsEven = (eleven % 2 == 0); // false
bool elevenIsOdd = (eleven % 2 == 1); // true
```

</details>

## Solution {#exercise-6-solution}

<details>
    <summary>Show the answer</summary>

```cpp
int number = 0;

while (number < 1 || number > 10)
{
    cout << "Enter an integer between 1 and 10: ";
    cin >> number;
}

for (int i = 1; i <= 10; i++)
{
    int result = number * i;
    if (result % 2 == 0)
    {
        cout << number << " x " << i << " = " << result << "\n";
    }
    else
    {
        cout << "This is an odd number!\n";
    }
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