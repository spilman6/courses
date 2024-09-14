---
title: Classes
subtitle: Computer Programming C++
hideNav: false
---

# Classes

Classes in C++ are user-defined data types that can contain data members and member functions. They are used to model real-world entities and are the building blocks of object-oriented programming.

Let's take a look at how to create a class in C++:

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
#include <iostream>
#include <conio.h>

using namespace std;

class Animal
{
	string m_name;
	int m_age;
};

int main()
{
	Animal fluffykins;

	(void)_getch();
	return 0;
}
```

# Mutator and Accessor Methods

Mutator methods, also known as setter methods, are used to modify the private data members of a class. Accessor methods, also known as getter methods, are used to access the private data members of a class.

Let's start with the mutator methods:

## Mutator Methods

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the class code:

```cpp
class Animal
{

private:

	string m_name;
	int m_age = 0;

public:

	// mutator methods (setters)
	void SetName(string name) { m_name = name; }
	void SetAge(int age) { if (age >= 0) m_age = age; }

};
```

And the code that we created in main:

```cpp
Animal fluffykins;
fluffykins.SetName("Fluffykins");
fluffykins.SetAge(3);
```

## Accessor Methods

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is what we added to the animal class:

```cpp
// accessor methods (getters)
string GetName() { return m_name; }
int GetAge() { return m_age; }
```

And the code that was added to main:

```cpp
cout << fluffykins.GetName() << " is " << fluffykins.GetAge() << " years old!\n";
```

# Additional Methods

In addition to mutator and accessor methods, classes can have other member functions that perform various tasks. Let's take a look at an example:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code for our display method:

```cpp
void Display()
{
	cout << GetName() << " is " << GetAge() << " years old!\n";
}
```

And here is the updated main function:

```cpp
int main()
{
	Animal jimmy;
	jimmy.SetName("Jimmy");
	jimmy.SetAge(7);
	jimmy.Display();

	Animal daisy;
	daisy.SetName("Daisy");
	daisy.SetAge(6);
	daisy.Display();

	(void)_getch();
	return 0;
}
```

# Const Parameters and Methods

As we saw earlier in the course, you can use the `const` keyword in multiple places in C++. When using classes, you can use `const` in a couple of new ways. 

Take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

In the video, we modified the mutator methods to have `const` parameters:

```cpp
void SetName(const string name) { m_name = name; }
void SetAge(const int age) { if (age >= 0) m_age = age; }
```

And we also added `const` to the other methods:

```cpp
string GetName() const { return m_name; }
int GetAge() const { return m_age; }
void Display() const { cout << GetName() << " is " << GetAge() << " years old!\n"; }
```

This usage of `const` is known as a `const` method. It means that the method does not modify the object's data members.

# Separating Class Code

As you can see, our Animal class is getting a bit long. It's a good idea to separate classes into their own files. We have seen this before with structs, but let's look at it again with classes:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code for the Animal class in a separate file called `Animal.h`:

```cpp
#pragma once

#include <iostream>

class Animal
{

private:

	std::string m_name;
	int m_age = 0;

public:

	// mutator methods (setters)
	void SetName(const std::string name) { m_name = name; }
	void SetAge(const int age) { if (age >= 0) m_age = age; }

	// accessor methods (getters)
	std::string GetName() const { return m_name; }
	int GetAge() const { return m_age; }

	void Display() const
	{
		std::cout << GetName() << " is " << GetAge() << " years old!\n";
	}

};
```

> [!IMPORTANT] Remember to include the header file in your Main.cpp.

> [!TIP] You can use the shortcut `Ctrl + K, Ctrl + O` to toggle between the header and source files in Visual Studio.

# Exercise 1

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, you will add a class to the project named `Person`. The class should have it's own header file named `Person.h`. 

Give the person a `m_name` field, along with the following methods:

- `SetName` - A mutator method that sets the person's name.

- `GetName` - An accessor method that returns the person's name.

- `Display` - A method that displays the person's name.

> [!TIP] Try not to look at the Animal class code while creating the Person class.

When you are done creating the class, use the following code in your main function to test it:

```cpp
Person bob;
bob.SetName("Bob");
bob.Display();
```

> [!IMPORTANT] Remember to include the header file in your Main.cpp.

## Hints {#exercise-1-hints}

<details>
	<summary>How do I create a class?</summary>

To create a class you need to use the `class` keyword followed by the class name. Here is an example:

```cpp
class Person
{

private:

	// fields go here

public:

	// methods go here

};
```

</details>

<details>
	<summary>How do I create an accessor method?</summary>

To create an accessor method, you need to create a method that returns the value of a private field. Here is an example:

```cpp
string GetName() const { return m_name; }
```

</details>

<details>
	<summary>How do I create a mutator method?</summary>

To create a mutator method, you need to create a method that sets the value of a private field. Here is an example:

```cpp
void SetName(const string name) { m_name = name; }
```

</details>

## Solution {#exercise-1-solution}

<details>
	<summary>Show the Answer</summary>

```cpp	
#pragma once

#include <iostream>

class Person
{

private:

	std::string m_name;

public:

	void SetName(const std::string name) { m_name = name; }
	std::string GetName() const { return m_name; }

	void Display() const
	{
		std::cout << GetName() << "\n";
	}

};
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

# Constructors

Constructors are special member functions that are called when an object is created. They are used to initialize the object's data members.

If you do not provide a constructor for your class, C++ will provide a default constructor for you.

There are two ways to determine that a method is a constructor:

1. The method has the exact same name as the class. Capitalization matters.

2. The method has no return type, not even `void`.

Let's take a look at how to create a couple of constructors for our Animal class:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code for our default constructor:

```cpp
public:

	// constructors
	Animal() { m_name = "Fido"; } // you could also use SetName("Fido") here

	Animal(const std::string name, const int age)
	{
		SetName(name);
		SetAge(age);
	}
```

And here is how we created an Animal object using the constructor:

```cpp
Animal daisy("Daisy", 6);
```

# Destructors

Destructors are special member functions that are called when an object is destroyed. They are used to clean up resources that the object may have acquired during its lifetime.

Like constructors, destructors have the same name as the class, but they are preceded by a tilde (`~`).

Let's take a look at how to create a destructor for our Animal class:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code for our destructor:

```cpp
~Animal() { std::cout << m_name << " is being deleted!\n"; }
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

For this exercise, you will add two constructors and a destructor to the `Person` class.

The first constructor should be a default constructor that sets the person's name to "Bob".

The second constructor should take a string parameter and set the person's name to the value of the parameter.

The destructor should display a message that says "Goodbye" to the console.

## Hints {#exercise-2-hints}

<details>
	<summary>How do I create a default constructor?</summary>

To create a default constructor, you need to create a constructor that takes no parameters. Here is an example:

```cpp
Person() { m_name = "Bob"; }
```

</details>

<details>
	<summary>How do I create a constructor with parameters?</summary>

To create a constructor with parameters, you need to create a constructor that takes the appropriate parameters. Here is an example:

```cpp
Person(const std::string name) { m_name = name; }
```

</details>

<details>
	<summary>How do I create a destructor?</summary>

To create a destructor, you need to create a method with the same name as the class, but preceded by a tilde (`~`). Here is an example:

```cpp
~Person() { std::cout << "Goodbye\n"; }
```

</details>

## Solution {#exercise-2-solution}

<details>
	<summary>Show the Answer</summary>

```cpp
Person() { m_name = "Bob"; }

Person(const std::string name) { m_name = name; }

~Person() { std::cout << "Goodbye\n"; }
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

# Header Guards

Header guards are used to prevent a header file from being included more than once. This can happen if a header file is included in multiple source files.

Visual Studio uses `#pragma once` to achieve the same effect, but header guards are still commonly used in C++.

Let's take a look:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

# Object Members

Object members are data members that are objects of another class. They can be used to model relationships between classes.

In this video we will give our `Animal` class an owner (a `Person` object):

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

Here is the code that we added to our `Animal` class:

```cpp
#include "Person.h"

// next to the other fields
Person* m_pOwner;

// new mutator method
void SetOwner(Person* pOwner) { m_pOwner = pOwner; }

// new accessor method
Person* GetOwner() const { return m_pOwner; }

//updated Display method
void Display() const
{
	std::cout << GetName() << " is " << GetAge() << " years old!\n";
	if (!m_pOwner) return;
	std::cout << GetName() << " is owned by " << m_pOwner->GetName() << ".\n";
}
```

In main, we set the owner of our `Animal` object:

```cpp
pAnimal->SetOwner(&bob); // we need to use the address-of operator here
```

# Forward Declarations

Forward declarations are used to declare a class before it is defined. This is useful when you have circular dependencies between classes.

In this video we will use a forward declaration to avoid including the `Animal` header file inside of the `Person` header file:

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

And here is the code that we added to the `Person.h` file:

```cpp
// forward declaration
class Animal;

// new field
Animal* m_pPet = nullptr;

// added new setter for the pet
void SetPet(Animal* pPet) { m_pPet = pPet; }

// moved the Display method to the cpp file, here is the declaration
void Display() const;
```

The `Person.cpp` file contains the implementation of the `Display` method:

```cpp
#include "Person.h"
#include "Animal.h"

void Person::Display() const
{
	std::cout << GetName() << "\n";
	if (!m_pPet) return;
	std::cout << m_pPet->GetName() << " is owned by: " << GetName() << ".\n";
}
```

# Exercise 3

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
			allowfullscreen allow="accelometer; autoplay; encrypted-media; gyroscope; picture-in-picture">
		</iframe>
	</div>
</details>

For this exercise, you will create an `Animal.cpp` file, and move any constructors/methods that are more than a single line of code to the cpp file.

> [!IMPORTANT] Remember to add `Animal::` before the method names in the cpp file.

## Hints {#exercise-3-hints}

<details>
	<summary>What do I need to do to move a method to the cpp file?</summary>

If you already have the method created in the header file, you can copy the whole method to the cpp file, and add `Animal::` before the method name. Here is an example:

```cpp
void Test() const
{
	std::cout << "Hello\n";
}
```

Would become:

```cpp
// in the header file:
void Test() const;

// in the cpp file:
void Animal::Test() const
{
	std::cout << "Hello\n";
}
```

</details>

## Solution {#exercise-3-solution}

<details>
	<summary>Show the Answer</summary>

The updates to `Animal.h` should look like this:

```cpp
// updated constructor:
Animal(const std::string name, const int age);

// updated Display method:
void Display() const;
```

Your `Animal.cpp` file should look like this:

```cpp
#include "Animal.h"

Animal::Animal(const std::string name, const int age)
{
	SetName(name);
	SetAge(age);
}

void Animal::Display() const
{
	std::cout << GetName() << " is " << GetAge() << " years old!\n";
	if (!m_pOwner) return;
	std::cout << GetName() << " is owned by " << m_pOwner->GetName() << ".\n";
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


