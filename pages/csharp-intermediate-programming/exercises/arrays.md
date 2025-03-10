---
title: Exercise 5 - Arrays
subtitle: C# Intermediate Programming
hideNav: false

live: https://fvtc.software/appel/csharp-intermediate-programming/exercises/arrays
dev: http://localhost:3006/appel/csharp-intermediate-programming/exercises/arrays
repo: https://github.com/rappel/courses
---

# Exercise 5 - Arrays

In this exercise, you will practice working with arrays in C#. You will create a console application that uses arrays to store and manipulate data.

## Instructions

Open Visual Studio and from the command palette, run `FVTC: Connect to Live Exercise`, then specify a location for your project. The starter code should automatically download.

> [!NOTE] If you haven't installed the FVTC Live Exercise Extension, you can [download it here](api.fvtc.software/downloads).

In the `Program.cs` file, you will need to add the following:

1. Create a (private) member variable to store an array of integers. Initialize the array with the following values: `1, 2, 3, 4, 5, 6, 7, 8, 9, 10`.

2. Create a method called `ArrayToString` that converts the array to a string and prints it to the console.

3. Create a method called `SumArray` that calculates the sum of all the elements in the array and returns the result.

4. Create a method called `AverageArray` that calculates the average of all the elements in the array and returns the result.

5. In the `Main` method, call the `ArrayToString`, `SumArray`, and `AverageArray` methods and print the results to the console. The results should look like this:

```bash
Array: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
Sum: 55
Average: 5.5
```

## Running and Testing your Code

To run and test your code, right-click on the `Exercise.UI` project in the Explorer window and select `Open in Integrated Terminal`. In the terminal window, type `dotnet run` and press Enter. To test, type `dotnet test` and press Enter.

## Submission

Once you have completed the exercise, run `FVTC: Submit Live Exercise` in the command palette to submit your code for grading.

> [!TIP] Confirm here that your submission was successful.