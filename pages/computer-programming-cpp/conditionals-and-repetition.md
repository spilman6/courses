---
title: Conditionals and Repetition
subtitle: Computer Programming C++
hideNav: false

live: https://fvtc.software/appel/computer-programming-cpp/conditionals-and-repetition
---

# Conditional Statements

Conditional statements are used to execute code based on a condition. Just like in C#, we have the `if`, `else if`, and `else` statements, as well as the `switch` statement.

## If Statements

If statements work much the same way as they do in C#, with one key difference. In C#, you can only use a `bool` condition. For example, this code will not compile in C#:

```csharp
int x = 10;
if (x) // error
{
}
```

In C++, you can use any data type in an `if` statement. The condition is considered `true` if the value is not `0`, and `false` if the value is `0`.

Let's look at an example:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/40IfOI5DTT8" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Here is the code from the video:

```cpp
int livesRemaining = 3;
if (livesRemaining)
{
    std::cout << "You are still alive!";
}
```

In this example, the `if` statement will execute because `livesRemaining` is not `0`. In C#, you would have to write `if (livesRemaining > 0)`.

## Else If and Else Statements

Else if and else statements work the same way as they do in C#. Here is an example:

```cpp
int health = 90;
if (health > 80)
{
    std::cout << "You are healthy.";
}
else if (health > 50)
{
    std::cout << "You are okay.";
}
else
{
    std::cout << "You are unhealthy.";
}
```

Omitting the curly braces is also allowed in C++.

Just like in C#, you can omit the curly braces if there is only one statement in the `if`, `else if`, or `else` block.

In your intro to programming class, you were taught to always use curly braces. This is good practice while you are learning, but in the real world, you will see them omitted in certain situations.

The previous example, I would consider a good candidate for omitting the curly braces:

```cpp
if (health > 80) std::cout << "You are healthy.";
else if (health > 50) std::cout << "You are okay.";
else std::cout << "You are unhealthy.";
```

It is still clear what is happening, and the code takes up less space.

## Switch Statement

The switch statement works much the same way as it does in C#. Here is an example:

```cpp
int dayOfChristmas = 1;
cout << "Enter the day of Christmas (1 - 12): ";
cin >> dayOfChristmas;

switch (dayOfChristmas)
{
    case 12: cout << "Twelve drummers drumming.\n"; break;
    case 11: cout << "Eleven pipers piping.\n"; break;
    case 10: cout << "Ten lords a-leaping.\n"; break;
    case 9: cout << "Nine ladies dancing.\n"; break;
    case 8: cout << "Eight maids a-milking.\n"; break;
    case 7: cout << "Seven swans a-swimming.\n"; break;
    case 6: cout << "Six geese a-laying.\n"; break;
    case 5: cout << "Five golden rings.\n"; break;
    case 4: cout << "Four calling birds.\n"; break;
    case 3: cout << "Three French hens.\n"; break;
    case 2: cout << "Two turtle doves.\n"; break;
    case 1: cout << "A partridge in a pear tree.\n"; break;
    default: cout << "Invalid day of Christmas.\n";
}
```

In this example, if the user enters `3`, the program will output "Three French hens". If the user enters any invalid number, the program will output "Invalid day of Christmas".

> [!NOTE] I purposely omitted the `break` statement on the `default` case. This is because the `default` case is the last case in the switch statement, and the program will exit the switch statement after it is executed. You can add a `break` statement if you want, but it is not necessary.

### Case Fall Through

In the previous example, I used the `break` statement to exit the switch statement. If you omit the `break` statement, the code will "fall through" to the next case. This is a feature of C++ that is not present in C#. It can be used in certain situations to reduce code duplication.

# Operators

For the most part, operators in C++ are the same as C#. Most of the operators you are familiar with will work the same way in C++. Here are some of the most common operators you will use in C++:

## Arithmetic

These operators are used to perform arithmetic operations on numbers. They include: `+`, `-`, `*`, `/`, and `%`.

```cpp
int x = 10;
int y = 3;
int sum = x + y; // 13
int difference = x - y; // 7
int product = x * y; // 30
int quotient = x / y; // 3
int remainder = x % y; // 1
```

> [!NOTE] The `%` operator is the modulus operator, which returns the remainder of a division operation. It only works with integer types.

## Comparison

These operators are used to compare two values and always return a `bool`. They are also known as __Relational Operators__, and include: `==`, `!=`, `>`, `<`, `>=`, `<=`.

```cpp
int x = 10;
int y = 3;
bool isEqual = x == y; // false
bool isNotEqual = x != y; // true
bool isGreater = x > y; // true
bool isLess = x < y; // false
bool isGreaterOrEqual = x >= y; // true
bool isLessOrEqual = x <= y; // false
```

## Logical

These operators are used to combine multiple conditions and always return a `bool`. They are also known as __Boolean Operators__, and include: `&&`, `||`, `!`.

```cpp
bool isStudent = true;
bool isTeenager = false;
bool isStudentAndTeenager = isStudent && isTeenager; // false
bool isStudentOrTeenager = isStudent || isTeenager; // true
bool isNotStudent = !isStudent; // false
```

> [!TIP] Get in the habit of using the `!` operator instead of `== false` or `!= true`. It is more concise and easier to read. A common sign of a beginner programmer is seeing `if (isStudent == true)` instead of `if (isStudent)`, and `if (isTeenager == false)` instead of `if (!isTeenager)`.

## Assignment

Again, these operators are the same as C#. They are used to assign values to variables and include: `=`, `+=`, `-=`, `*=`, `/=`, `%=`.

```cpp
int x = 10;
x += 5; // x is now 15
x -= 5; // x is now 10
x *= 5; // x is now 50
x /= 5; // x is now 10
x %= 3; // x is now 1
```

## Unary

These operators are used to increment or decrement a variable by one. They are: `++` and `--`.

```cpp
int x = 10;
x++; // x is now 11
x--; // x is now 10
```

> [!TIP] The `++` and `--` operators can be used before or after a variable. When used before, it is called the __prefix__ operator `++i`, and when used after, it is called the __postfix__ operator `i++`. The difference is subtle, and largely irrelevant for now. If you are curious, [here is an article](https://davidzych.com/whats-the-difference-between-i-and-i-in-c/#) that explains the difference.

## Bitwise

These operators are used to manipulate individual bits in an integer. They are not used as often as the other operators. As a beginner, you can ignore them for now.

The bitwise operators include: `&`, `|`, `^`, `~`, `<<`, `>>`.

```cpp
int x =  5; // 0000 0101
int y = 36; // 0010 0100

int and = x & y; //  4 -- 0000 0100
int or  = x | y; // 37 -- 0010 0101
int xor = x ^ y; // 33 -- 0010 0001
int not = ~x;    // -6 -- 1111 1010
int shiftLeft  = x << 2; // 20 -- 0001 0100
int shiftRight = x >> 2; //  1 -- 0000 0001
```

> [!NOTE] You will rarely use bitwise operators in your day-to-day programming. You will not be tested on them, but it is good to know they exist.

## Ternary

The ternary operator is a shorthand way of writing an `if` statement. It is often used to assign a value to a variable based on a condition.

```cpp
int health = 90;
std::cout << "You are " << (health > 30 ? "healthy" : "unhealthy");
```

This code is equivalent to:

```cpp
int health = 90;
if (health > 30) std::cout << "You are healthy";
else std::cout << "You are unhealthy";
```

# Exercise 3

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/uTZIhXY3xFY" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, you will write a program that asks the user to enter a number between 1 and 7. The program will output the day of the week that corresponds to the number. For example, if the user enters 1, the program will output "Sunday".

If the user enters a number outside of the range 1-7, the program will output "Invalid day of the week".

Example Output:

```plaintext
Enter a number between 1 and 7: 4
Wednesday
```

## Hint {#exercise-3-hint}

<details>
	<summary>Which conditional statement should I use?</summary>

For this example, you can use either an `if-else if-else` statement or a `switch` statement. The `switch` statement is more efficient, but you can use whichever you are more comfortable with.

</details>

## Solution {#exercise-3-solution}

<details>
	<summary>Show the Answer</summary>

```cpp
// Exercise 3
// Ryan Appel

#include <iostream>
#include <conio.h>

using namespace std;

int main()
{
	int dayOfWeek = 0;
	cout << "Enter a number between 1 and 7: ";
	cin >> dayOfWeek;

	switch (dayOfWeek)
	{
	case 1: cout << "Sunday\n"; break;
	case 2: cout << "Monday\n"; break;
	case 3: cout << "Tuesday\n"; break;
	case 4: cout << "Wednesday\n"; break;
	case 5: cout << "Thursday\n"; break;
	case 6: cout << "Friday\n"; break;
	case 7: cout << "Saturday\n"; break;
	default: cout << "Invalid day of the week.\n";
	}

	(void)_getch();
	return 0;
}

```

Alternatively, you could use an `if-else if-else` statement:

```cpp
	if (dayOfWeek == 1) cout << "Sunday\n";
	else if (dayOfWeek == 2) cout << "Monday\n";
	else if (dayOfWeek == 3) cout << "Tuesday\n";
	else if (dayOfWeek == 4) cout << "Wednesday\n";
	else if (dayOfWeek == 5) cout << "Thursday\n";
	else if (dayOfWeek == 6) cout << "Friday\n";
	else if (dayOfWeek == 7) cout << "Saturday\n";
	else cout << "Invalid day of the week.\n";
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/nbWmF30atdM" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Repetition Statements

Repetition statements, often called "loops," are used to execute code multiple times. Like in C#, we have the `while`, `do while`, and `for` statements.

## For Loop

For the most part, the `for` loop works the same way as it does in C#.

It should be used when you know how many times you need to execute the loop.

Here is an example:

```cpp
int input = 0;
cout << "Enter a number between 1 and 5: ";
cin >> input;

for (int i = 1; i <= input; i++)
{
    cout << i << "\n";
}
```

Just like in C#, the `for` loop has three parts:

1. Initialization: `int i = 1`
2. Condition: `i <= input`
3. Increment: `i++`

You can omit any of these parts if you want. For example, if you wanted to write an infinite loop, you could write:

```cpp
for (;;) cout << "This is an infinite loop!\n";
```

> [!NOTE] Just like with the `if` statement, you omit the curly braces if there is only one statement in the loop.

## While and Do-While Loops

The `while` loop works the same way as it does in C#.

You should use a `while` loop when you don't know how many times you need to execute the loop.

Here is an example:

```cpp
int i = 0;

while (i < 1 || i > 5) // not a valid number
{
    cout << "Please enter a number between 1 and 5: ";
    cin >> i;
}

cout << i << ", good choice!";
```

There is one key difference between C# and C++. Like the `if` statement, you can use any data type in the condition. The loop will execute as long as the value is not `0`.

Here is an example of a loop that counts down from 10 to 1:

```cpp
int i = 10;
while (i) cout << i-- << "\n";
```

Now, I don't recommend writing code like this, but it is a good example of how the `while` loop works. When `i` reaches `0`, the loop will exit.

The `do while` loop works the same way as it does in C#. 

The key difference between the `do while` loop and the `while` loop is that the `do while` loop will always execute at least once.

The previous example could be rewritten using a `do while` loop:

```cpp
int i;

do
{
    cout << "Please enter a number between 1 and 5: ";
    cin >> i;
} while (i < 1 || i > 5);

cout << i << ", good choice!";
```

# Exercise 4

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/taSPjMDFtGY" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, you will write a program that asks the user to enter a number between 1 and 5. The program will output the following quote "If I'm not back in five minutes, just wait longer." as many times as the user entered, preceaded by the number of the iteration.

If the user enters a number outside of the range 1-5, the program will output "Invalid number".

> [!NOTE] You will be modifying this program in the next exercise.

Example Output:

```plaintext
Enter a number between 1 and 5: 4

1. If I'm not back in five minutes, just wait longer.
2. If I'm not back in five minutes, just wait longer.
3. If I'm not back in five minutes, just wait longer.
4. If I'm not back in five minutes, just wait longer.
	- Ace Ventura
```

## Hints {#exercise-4-hints}

<details>
	<summary>Which loop should I use?</summary>

For this example, you should use a `for` loop. You know how many times you need to execute the loop.

</details>

<details>
	<summary>How can I output the iteration number?</summary>

Add one to the iteration variable when outputting the quote.

</details>

<details>
	<summary>How can I print the author's name only once?</summary>

Don't output the author's name inside the loop. Instead, output it after the loop has finished.

</details>

<details>
	<summary>How can I display the error message if the user enters an invalid number?</summary>

You can use an `if-else` statement to check if the user entered a valid number. Only if the number is valid should you execute the loop.

</details>

## Solution {#exercise-4-solution}

<details>
	<summary>Show the Answer</summary>
	
```cpp
// Exercise 4

#include <iostream>
#include <conio.h>

using namespace std;

int main()
{
	int input = 0;
	cout << "Enter a number between 1 and 5: ";
	cin >> input;

	if (input < 1 || input > 5)
	{
		cout << "Invalid number.\n";		
	}
	else
	{
		for (int i = 0; i < input; i++)
		{
			cout << i + 1 << ". If I'm not back in five minutes, just wait longer.\n";
		}

		cout << "\t- Ace Ventura\n";
	}

	(void)_getch();
	return 0;
}
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/t8eAqiLZ6W8" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

# Exercise 5

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/5WpXZ2Qqb74" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, you will modify the program from the previous exercise. If the user enters an invalid number, the program will output the error message and ask the user to enter a number again, until the user enters a valid number.

## Hints {#exercise-5-hints}

<details>
	<summary>Which loop should I use?</summary>

You will still use a `for` loop for printing the quote, but you'll need a second loop (either a `while` or `do while` loop) to check if the user entered a valid number.

</details>

## Solution {#exercise-5-solution}

<details>
	<summary>Show the Answer</summary>

```cpp
int main()
{
	int input = 0;

	do
	{
		cout << "Enter a number between 1 and 5: ";
		cin >> input;
	}
	while (input < 1 || input > 5);


	for (int i = 0; i < input; i++)
	{
		cout << i + 1 << ". If I'm not back in five minutes, just wait longer.\n";
	}

	cout << "\t- Ace Ventura";

	(void)_getch();
	return 0;
}
```

</details>

<details>
	<summary>Walkthrough Video</summary>
		<div class="video-container">
		<iframe src="https://www.youtube.com/embed/96lXkLBYtZk" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		></iframe>
	</div>
</details>

