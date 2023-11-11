
# What are Objects?

Now that you have an understanding of primitive data-types, we can move on to more complex data-types. The most common (non-primitive) data-type is called an object. Objects are used to represent real-world things. For example, a person, a car, a book, or a house. The following videos will introduce you to objects.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/1xVC54ozhRU"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

## Object Examples

Let's take a look at a couple of examples. The first one is written in C#, and the second one is written in JavaScript.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/SpQgxu8XVTY"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

```csharp
// First we define a class

public class Student
{
	public int ID { get; set; }
	public string FirstName { get; set; }
	public string LastName { get; set; }
	public string City { get; set; }
	public string State { get; set; }
	public string Phone { get; set; }
}

// Then we create an object

Student john = new Student();
john.ID = 120333241;
john.FirstName = "John";
john.LastName = "Smith";
john.City = "Appleton";
john.State = "WI";
john.Phone = "920-722-5013";
```

```javascript
const john = {
	ID: 120333241,
	FirstName: "John",
	LastName: "Smith",
	City: "Appleton",
	State: "WI",
	Phone: "920-722-5013"
}
```

## Running Demo 1

Let's take a look at an object used in a JavaScript program.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/BOeEJ8HKyCc"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

```javascript
// Create a Car instance (object)

const audi = {
	"model": "R8",
	"price": 100000.00
}

console.log(audi.model);
console.log(audi.price);

// Create another object

const toyota = {
	"model": "Supra",
	"price": 45000.00
}

console.log(toyota.model);
console.log(toyota.price);
```

## Object Properties

An object's properties are often primitive data-types, as seen in the previous example. However, an object's properties can also be other objects. Let's take a look at an example.

<details open>
	<summary class="video">Show/Hide Video</summary>
	<div class="video-container">
		<iframe
			src="https://www.youtube.com/embed/leXkMbThfy8"
			width="100%" height="100%" frameborder="0" allowfullscreen
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		></iframe>
	</div>
</details>

```javascript
const john = {
	ID: 120333241,
	FirstName: "John",
	LastName: "Smith",
	City: "Appleton",
	State: "WI",
	Phone: "920-722-5013"
	Course: {
		Title: "Data Access for Programmers",
		Instructor: "Ryan Appel",
		Room: "Appleton Campus C125",
		Credits: 3,
		Start: {
			Date: "8/24",
			Time: "10:30"
		}
	}
}
```

# Review Questions

1. Why do we use objects?
<details>
  <summary>Answer</summary>
  Objects are used to represent real-world things. They combine all of the attributes of that entity, making it easier to work with.
</details>

2. What is a property?
<details>
  <summary>Answer</summary>
  A property is a value that is stored in an object. It's also called a field or attribute.
</details>

3. True or False: An object's properties can be other objects.
<details>
  <summary>Answer</summary>
  True
</details>
