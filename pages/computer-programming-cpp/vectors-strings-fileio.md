---
title: Vectors, Strings, and File I/O
subtitle: Computer Programming C++
hideNav: false
---

# Vectors

Now that you know how to create arrays, it's time to address the main limitation of arrays: their fixed size. In C++, you can use the `vector` class to create dynamic arrays.

Let's take a look a how to create a vector, and add elements to it:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the relevant code from the video:

```cpp
#include <vector> // include the vector library

using namespace std;

int main()
{
	vector<int> numbers; // create a vector of integers
	numbers.push_back(5); // add 5 to the vector
	numbers.push_back(2);
	numbers.push_back(-1);
	numbers.push_back(500);

```

## Iterating through a vector

There are a few ways to iterate through a vector. This video will go over the most common ways to do so:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that we added:

```cpp
// use an index to iterate through the vector
for (int i = 0; i < numbers.size(); i++)
{
	cout << numbers[i] << "\n";
}

// use an iterator to iterate through the vector
vector<int>::iterator it = numbers.begin();
for (; it != numbers.end(); it++)
{
	cout << *it << "\n";
}

// use a range-based for loop to iterate through the vector
for (const int& i : numbers) // foreach in C#
{
	cout << i << "\n";
}
```

# Strings

Similar to the relationship between arrays and vectors, C++ has a `string` class that is more flexible than character arrays. Here is a video that goes over the basics of using strings:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that we added:

```cpp
#include <string> // include the string library

using namespace std;

int main()
{
	string name = "Ryan";
	// cout << name + " Appel";
	// name.append(" Appel");
	name += " Appel";
	cout << name; // Ryan Appel
}
```

## getline

One of the limitations of using `cin` to get user input is that it only reads up to the first whitespace character. If you want to read an entire line of text, you can use the `getline` function. Here is a video that goes over how to use `getline`:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that we added:

```cpp
string input;
getline(cin, input);
cout << input;
```


# File I/O

In C++, you can read and write to files using the `fstream` library. Let's look at writing first because it is simpler.

## Writing to a file

To write to a file, you can use the `ofstream` class, then use the `<<` operator to write to the file, much like you would use `cout` to write to the console.

Here is a video that goes over how to write to a file:

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
string filepath = "C:\\Temp\\Test.txt";
string input;
getline(cin, input);
cout << input;

ofstream ofs(filepath); // create and open
ofs << input << "\n";
ofs.close(); // remember to close!
```

> [!IMPORTANT] When writing to a file, the folder must already exist. If it doesn't, it will not create the folder for you.

## Reading from a file

To read from a file, you can use the `ifstream` class, in combination with the getline function.

Here is a video that goes over how to read from a file:

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
string filepath = "C:\\Temp\\Test.txt";

string line;
ifstream ifs(filepath);
while (getline(ifs, line))
{
	cout << line << "\n";
}
ifs.close();
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

For this exercise, you will create a program that reads a list of integers from a file, and then writes the sum of those numbers to another file.

The numbers will be separated by a newline character, and will be located in a file called `numbers.txt`. The sum of the numbers will be written to a file called `sum.txt`.

Here is an example of the `numbers.txt` file:

```
10
20
6
30
```

> [!NOTE] The text file is not guaranteed to have four numbers! The file could have any number of numbers.

To turn a string into an integer, you can use the `stoi` function. Here is an example:

```cpp
string number = "10";
int num = stoi(number);
```

## Hints {#exercise-1-hints}

<details>
	<summary>How do I read from a file?</summary>

You can use the `ifstream` class to read from a file. Here is an example:

```cpp
string filepath = "C:\\Temp\\Test.txt";
ifstream ifs(filepath);
while (getline(ifs, line))
{
	cout << line << "\n";
}
ifs.close();
```

</details>

<details>
	<summary>How do I write to a file?</summary>

You can use the `ofstream` class to write to a file. Here is an example:

```cpp
string filepath = "C:\\Temp\\Test.txt";
ofstream ofs(filepath);
ofs << input << "\n";
ofs.close();
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the Answer</summary>

```cpp
#include <iostream>
#include <conio.h>
#include <fstream>
#include <string>

using namespace std;

int main()
{
	string numbersPath = "C:\\Temp\\Numbers.txt";
	string sumPath = "C:\\Temp\\Sum.txt";

	int sum = 0;
	string number;
	ifstream ifs(numbersPath);
	while (getline(ifs, number))
	{
		int n = stoi(number);
		sum += n;
	}
	ifs.close();

	cout << sum;

	ofstream ofs(sumPath);
	ofs << sum;
	ofs.close();

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
