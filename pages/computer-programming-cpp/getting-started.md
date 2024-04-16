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

Next, we need to create a file to write our code.

<details open>
    <summary class="video">Show/Hide Video</summary>
    <div class="video-container">
        <iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
            allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
        </iframe>
    </div>
</details>

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

Now, let's add some code to our program..

To keep the console open when debugging, we will call a function named `_getch()`, which is short for "get character." In order to use it however, we need to include a header file. We will go into the details of these files in the future.

This video will show you how to include the header file and use the `_getch()` function.

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

#include <conio.h> // allows us to use _getch()

int main()
{
    (void)_getch(); // wait for a key press
    return 0;
}
```

> [!TIP] I am casting the return value of `_getch()` which is the character that was pressed, to `void` because I am not using it. Without the cast, the compiler will give a warning.

Now, when you run the program, the console window will stay open until you press a key.

## Writing to the Console

Let's print some text to the console. We can do this using the `cout` object, which is part of the `std` namespace. We will go into more detail about namespaces in the future.

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
    std::cout << "Hello, World!"; // print to the console
    (void)_getch(); // wait for a key press
    return 0;
}
```

The `<<` operator is used to send data to the `cout` object. In this case, we are sending the string `"Hello, World!"`.

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

I personally prefer to use `\n` because it is more concise. So I will be using that in the future. However, you may see `std::endl` in other people's code, so it is good to know what it is.

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

## The Standard Namespace

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

> [!CAUTION] Notice that I added an `f` to the end of the `pi` variable. This is because `3.14159` would be a `double` by default, and I want to make it a `float`. 

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




