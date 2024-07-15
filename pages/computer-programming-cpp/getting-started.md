---
title: 'Getting Started'
course: 'Computer Programming C++'
---

# Getting Started

This unit will introduce you to the basics of C++. If you are used to programming in C#, much of this unit will be review. Let's get started by creating a project.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

If you do not have "Visual C++" templates available in the New Project window, you need to [Modify your Visual Studio Installation](https://www.youtube.com/watch?v=3Z1b8Z6Q6k8).


## The Main Function

Every program needs an entry point. The windows applications that you wrote in C# had a file called Program.cs, that contained a "Main" function. Similarly, we need to create a starting point for our appliction.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

```cpp
// Getting Started Demo
// Ryan Appel
 
int main()
{
    return 0;
}
```

You can debug your program by pressing the "Start" button in Visual Studio, or by pressing F5, just like you did in C#.

When you debug your program, you will see a console window appear with the following text:

```plaintext
C:\Users\...\RDA.GettingStartedDemo.exe (process 24460) exited with code 0.
To automatically close the console when debugging stops, enable Tools->Options->Debugging->Automatically close the console when debugging stops.
Press any key to close this window . . .
```

Watch what happens when I run the actual program (not the debugger) by opening it from the file explorer.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

The program runs and the console window appears, but it closes immediately. This is because Visual Studio is configured add the "Press any key to close this window . . ." line to the end of the program. This is not a part of the program itself, but rather a feature of Visual Studio.

I want to control this behavior myself, so I can have the same experience when running the program from the file explorer as I do when running it from Visual Studio.

Let's change the following setting.

Go to: `Tools->Options->Debugging` and then uncheck `Automatically close the console when debugging stops`.

## Writing to the Console

Let's print some text to the console. We can do this using the `cout` object, which is part of the `std` namespace.

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
// Getting Started Demo
// Ryan Appel

#include <iostream> // allows us to use cout
#include <conio.h> // allows us to use _getch()

int main()
{
    std::cout << "Hello world!"; // print to the console
    (void)_getch(); // wait for key press
    return 0;
}
```

The `<<` operator is used to send data to the console. In this case, we are sending the string `"Hello world!"`.

Let's print some more text to the console.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Here is the code from the video, for brevity I will only show the new code:

```cpp
std::cout << "Hello World!" << std::endl;
std::cout << "This is a new line.\n";
std::cout << "This is another line." << "\n";
```

Notice how we can use `std::endl` to end the line, or we can use the escape sequence `\n`. Both will produce the same result.

> [!NOTE] Technically `std::endl` will also flush the output buffer, but for our purposes, it is the same as using `\n`.

I personally prefer to use `\n` because it is more concise. So I will be using that in the future. However, you may see `std::endl` in other people's code, so it is good to know what it is.W

## Escape Sequences

Escape sequences are special characters that are used to represent non-printable characters. For example, the escape sequence `\n` represents a new line. Here are some common escape sequences:

- `\n` - New Line
- `\t` - Tab
- `\\` - Backslash
- `\"` - Double Quote
- `\'` - Single Quote
- `\0` - Null Character

> [!NOTE] One nice thing about escape sequences is that they are (for the most part) portable across different programming languages. `\t` will produce a tab in C++, C#, JavaScript, and many other languages.

In this video, we will look at how to use escape sequences.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Here's the code from the video:

```cpp
std::cout << "\"Hello World!\"";
```

# Exercise 1

In this exercise, you will create a new project and write a program that prints the following text to the console:

```plaintext
Ryan is the best instructor ever!
	- Ryan
```

<details>
  <summary>Show the Answer</summary>

```cpp
// Exercise 1
// Ryan Appel

#include <iostream>

int main()
{
	std::cout << "Ryan is the best instructor ever!\n\t- Ryan";
	return 0;
}
```
</details>

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

# The Standard Namespace

The `std` namespace is a collection of classes, functions, and objects that are part of the standard library. It can become cumbersome to write `std::` before everything, so we can use the `using` directive to bring the `std` namespace into scope.

In this video, we will look at how to do this.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Here's the code:

```cpp
#include <iostream>

using namespace std;

int main()
{
    cout << "Hello World!"; // note that we don't need std::
    return 0;
}
```

> [!CAUTION] It is often considered bad practice to use `using namespace std;` This is because it can pollute the global namespace. We will go into more detail about this in the future. For now, we can use it to make our code more concise.

## Variables and Primitive Data Types

You should be familiar with variables and primitive data types from previous classed. In C++, the primitive data types are similar to C#, and include: `int`, `float`, `double`, `char`, `bool`, and `void`.

Note that `string` is not a primitive data type in C++. Instead, it is a class that is part of the `std` namespace. We will go into more detail later.

In this video, we will look at how to declare variables and assign values to them.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Here's the code from the video:

```cpp
int age = 30;
const float pi = 3.14159f;
const double e = 2.71828;
char middleInitial = 'D';
bool isInstructor = true;
```

> [!NOTE] Notice that I added an `f` to the end of the `pi` variable. This is because `3.14159` would be a `double` by default, and I want to make it a `float`. 

### Constants

As explained in the previous video, you can use the `const` keyword to create a constant variable. This is a variable that cannot be changed after it is initialized.

Remember that in C++, you can put the `const` keyword before or after the data type.

```cpp
const float pi = 3.14159f;
float const pi = 3.14159f;
```

Both of these are valid and will produce the same result. Though, I prefer to put the `const` keyword before the data type.

> [!TIP] The general rule of thumb with `const` is that it applies to the thing to its left. If there is nothing to the left, it applies to the thing to its right. We will see `const` used in other contexts in the future. So remember this rule!

## Casting

Casting is the process of converting one data type to another. In C++, there are two types of casting: implicit and explicit.

### Implicit Casting

Implicit casting is when the compiler automatically converts one data type to another. This is done when the conversion is safe and no data is lost. For example, converting an `int` to a `float` is safe because the `float` can hold a larger range of values.

```cpp
int age = 30;
float ageFloat = age; // implicit cast -- ageFloat is 30.0
```

### Explicit Casting

Explicit casting is when you tell the compiler to convert one data type to another. This is done when the conversion is not safe and data may be lost. For example, converting a `float` to an `int` will truncate the decimal portion of the number.

```cpp
float pi = 3.14159f;
int piInt = (int)pi; // explicit cast -- piInt is 3
```

# User Input

In this video, we will look at how to get input from the user. We will use the `cin` object, which is part of the `std` namespace.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Here's the code from the video:

```cpp
#include <iostream>

using namespace std;

int main()
{
    int age;
    cout << "Enter your age: ";
    cin >> age;
    cout << "You are " << age << " years old.";
    return 0;
}
```

The `cin` object is used to get input from the user. The `>>` operator is used to send the input to a variable. In this case, we are sending the input to the `age` variable.

> [!TIP] Sometimes students confuse the `>>` operator with the `<<` operator. I find it helpful to think about which way the data is moving. For example `cout << "hi";` is sending "hi" to the console, and `cin >> age;` is sending an age from the console (user input) to the `age` variable.

# Operators

For the most part, operators in C++ are the same as C#. Most of the operators you are familiar with will work the same way in C++. Here are some of the most common operators you will use in C++:

### Arithmetic Operators: `+`, `-`, `*`, `/`, `%`

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

### Comparison Operators: `==`, `!=`, `>`, `<`, `>=`, `<=`

These operators are used to compare two values and always return a `bool`. They are also known as __Relational Operators__.

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

### Logical Operators: `&&`, `||`, `!`

These operators are used to combine multiple conditions and always return a `bool`. They are also known as __Boolean Operators__.

```cpp
bool isStudent = true;
bool isTeenager = false;
bool isStudentAndTeenager = isStudent && isTeenager; // false
bool isStudentOrTeenager = isStudent || isTeenager; // true
bool isNotStudent = !isStudent; // false
```

> [!TIP] Get in the habit of using the `!` operator instead of `== false` or `!= true`. It is more concise and easier to read. A common sign of a beginner programmer is seeing `if (isStudent == true)` instead of `if (isStudent)`, and `if (isTeenager == false)` instead of `if (!isTeenager)`.

### Assignment Operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`

Again, these operators are the same as C#. They are used to assign values to variables.

```cpp
int x = 10;
x += 5; // x is now 15
x -= 5; // x is now 10
x *= 5; // x is now 50
x /= 5; // x is now 10
x %= 3; // x is now 1
```

### Unary Operators: `++`, `--`

These operators are used to increment or decrement a variable by one.

```cpp
int x = 10;
x++; // x is now 11
x--; // x is now 10
```

> [!TIP] The `++` and `--` operators can be used before or after a variable. When used before, it is called the __prefix__ operator `++i`, and when used after, it is called the __postfix__ operator `i++`. The difference is subtle, and largely irrelevant for now. If you are curious, [here is an article](https://davidzych.com/whats-the-difference-between-i-and-i-in-c/#) that explains the difference.


### Bitwise Operators: `&`, `|`, `^`, `~`, `<<`, `>>`

These operators are used to manipulate individual bits in an integer. They are not used as often as the other operators. As a beginner, you can ignore them for now.

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

### Ternary Operator: `? :`

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

# Conditional Statements

Conditional statements are used to execute code based on a condition. Like in C#, we have the `if`, `else if`, and `else` statements, as well as the `switch` statement.

## If Statements

If statements work much the same way as they do in C#, with one key difference. In C#, you can only use a `bool` condition. For example, this code will not compile in C#:

```csharp
int x = 10;
if (x) // error
{
    // do something
}
```

In C++, you can use any data type in an `if` statement. The condition is considered `true` if the value is not `0`, and `false` if the value is `0`.

Let's look at an example:

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

### Curly Braces

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

Here is the example with fall through:

```cpp
int dayOfChristmas = 1;
cout << "Enter the day of Christmas (1 - 12): ";
cin >> dayOfChristmas;

switch (dayOfChristmas)
{
    case 12: cout << "Twelve drummers drumming.\n"; // break;
    case 11: cout << "Eleven pipers piping.\n"; // break;
    case 10: cout << "Ten lords a-leaping.\n"; // break;
    case 9: cout << "Nine ladies dancing.\n"; // break;
    case 8: cout << "Eight maids a-milking.\n"; // break;
    case 7: cout << "Seven swans a-swimming.\n"; // break;
    case 6: cout << "Six geese a-laying.\n"; // break;
    case 5: cout << "Five golden rings.\n"; // break;
    case 4: cout << "Four calling birds.\n"; // break;
    case 3: cout << "Three French hens.\n"; // break;
    case 2: cout << "Two turtle doves.\n"; // break;
    case 1: cout << "A partridge in a pear tree.\n"; break;
    default: cout << "Invalid day of Christmas.\n";
}
```

In this example, if the user enters `3`, the program will output "Three French hens, Two turtle doves, A partridge in a pear tree". This is because the code falls through to the next case.

Let's run the program and see what the output:

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

Fall through can be a useful feature, but it can also lead to bugs. Be careful when using it, and make sure it is clear what is happening in your code.

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

## While Loop

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

## Do While Loop

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