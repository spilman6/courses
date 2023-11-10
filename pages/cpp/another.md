---
title: 'Getting Started'
description: 'Getting Started with C++'
course: 'Computer Programming C++'
next: 'bla bla bla'
---

# new headline

# Rendered using Markdown! 

This page is rendered on the server. It is ***not*** a static HTML page!

The source file (.md) is parsed and converted to HTML on the server. You can see the source file
on GitHub [here](https://raw.githubusercontent.com/RDAppel/courses/master/pages/cpp/another.md).

## Table of Contents

The ___Table of Contents___ is generated automatically based on the headings in the document.

As you scroll the page the TOC will update to show your current position in the document.

It keeps track of all headings, even if they are nested.

### A sub-sub-heading

You can nest headings as deep as you want.


> Well, maybe not *as deep as you want*... but up to 6 levels (h1-h6).

#### A sub-sub-sub-heading

Testing 123

#### Another sub-sub-sub-heading

Testing 123

#### And yet another sub-sub-sub-heading

Testing 123

# Markdown extensions

StackEdit extends the standard Markdown syntax by adding extra **Markdown extensions**, providing you with some nice features.

> **ProTip:** You can disable any **Markdown extension** in the **File properties** dialog.

> This is a test

![Circuit Banner Image](https://cdn.discordapp.com/attachments/1065057104521597058/1113507329766342706/Ryan_Appel_Wallpaper_microchip_processor_electronics_circuit_bl_61d2a0ee-3617-47fd-81ea-3f04c3142a4b.png)

# Checkboxes?

- [ ] Unchecked
- [x] Checked
- <input type="checkbox" name="uchk"> Clickable

# Code Snippits

You can embed code snippits in your Markdown files.

Here's a C++ example:

```cpp
#include <iostream>
   int main()
   {
    std::cout << "Hello world!";
   return 0;
} 
```

And here's a C# example:

```c#
var names = new List<string>() { "John", "Tom", "Peter" };
foreach (string name in names)
{
    Console.WriteLine(name);
}
```

# Schedule

You can embed HTML in your Markdown files. This is useful for embedding tables:

<table>
    <thead>
	    <tr>
			<th></th>
			<th>Monday</th>
			<th>Tuesday</th>
			<th>Wednesday</th>
			<th>Thursday</th>
		</tr>
    </thead>
	<tbody>
		<tr>
			<td>10:30-11:30</td>
			<td></td>
			<td rowSpan="2">Computer Programming C++</td>
			<td></td>
			<td rowSpan="2">Computer Programming C++</td>
		</tr>
		<tr>
			<td>11:30-12:30</td>
			<td></td>
			<td>TLC Hours</td>
		</tr>
		<tr>
			<td>12:30-1:30</td>
			<td rowSpan="2">C# Introduction to Programming</td>
			<td>TLC Hours</td>
			<td rowSpan="2">C# Introduction to Programming</td>
			<td>TLC Hours</td>
		</tr>
		<tr>
			<td>1:30-2:30</td>
			<td>Office Hours</td>
			<td>Office Hours</td>
		</tr>
		<tr>
			<td>2:30-3:30</td>
			<td rowSpan="3">Office Hours</td>
			<td rowSpan="2">C# Intermediate</td>
			<td>Team Meeting</td>
			<td rowSpan="2">C# Intermediate</td>
		</tr>
		<tr>
			<td>3:30-4:30</td>
			<td></td>
		</tr>
		<tr>
			<td>4:30-5:30</td>
			<td></td>
			<td>AITP</td>
			<td></td>
		</tr>
	</tbody>
</table>
	
