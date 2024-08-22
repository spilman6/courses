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
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
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
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
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
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
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
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
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
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
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
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
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
		<iframe src="https://www.youtube.com/embed/" width="100%" height="100%" frameborder="0"
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