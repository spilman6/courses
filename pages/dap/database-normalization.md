---
title: 'Database Normalization'
course: 'Data Access for Programmers'
previous: 'Many-to-Many Relationships'
next: 'RESTful APIs'
---

# Database Normalization

Normalization is the process of organizing data in a database. This includes creating tables and establishing relationships between those tables according to rules designed both to protect the data and to make the database more flexible by eliminating redundancy and inconsistent dependency.

# Determinants and Functional Dependencies

Before we can normalize a database, we need to understand determinants and functional dependencies.

A **determinant** is any attribute whose value determines other values within a row.

A **functional dependency** is a relationship between two attributes, typically between the determinant and the dependent attribute.

If you want to follow along with the video, we'll be using this data:

| Student ID | First Name | Last Name | City | State | Zip | Course IDs | Course Names | Registration Dates |
| ---------- | ---------- | --------- | ---- | ----- | --- | ---------- | ------------ | ------------------ |
| 123        | Jimmy      | Smith     | Appleton | WI | 54911 | 1       | Data Access for Programmers   | 1/05       |
| 124        | Erin       | Donaldson | Neenah   | WI | 54956 | 2, 3    | C# Intro to Programming, PHP  | 1/06, 1/06 |
| 125        | Erica      | Zastrow   | Appleton | WI | 54914 | 1, 4    | Data Access for Programmers, Computer Programming C++ | 1/05, 1/06 |
| 127        | Greg       | Olsen     | Appleton | WI | 54911 | 2       | C# Intro to Programming 		| 1/05       |
| 129        | Kim        | Palmer    | Neenah   | WI | 54956 | 4       | Computer Programming C++      | 1/05       |
| 131        | Bryce      | Davis     | Appleton | WI | 54911 | 1       | Data Access for Programmers	| 1/07       |
| 133        | Erin       | Price     | Appleton | WI | 54913 | 2, 3    | C# Intro to Programming, PHP  | 1/07, 1/05 |
| 134        | Marquise   | Alton     | Appleton | WI | 54915 | 2       | C# Intro to Programming 		| 1/05       |

You can download the Excel file here: [students.xlsx](www.example.com).

> [!NOTE]
> There is an error in the video. The Student ID for Erica Zastrow is 125, not 124.

https://youtu.be/QCHyuVq0uFA

## Dependency Diagram

A **dependency diagram** is a visual representation of the relationships between attributes. In this video we will start to create a dependency diagram for our data. You don't have to follow along, but if you want to, we're using https://app.diagrams.net/.

https://youtu.be/ZD80woN8m9s

So looking at the data above, we have the following determinants: `Student ID`, `Course ID`, and `Student ID` + `Course ID`. We also have the following functional dependencies:

- `Student ID` determines `First Name`, `Last Name`, `City`, `State`, and `Zip`.
- `Course ID` determines `Course Name`.
- `Student ID` + `Course ID` determines `Registration Date`.

# Normalization

As mentioned above, normalization is the process of organizing data in a database. There are several "normal forms" that a database can be in. The higher the normal form, the more normalized the database is. In this class we will focus on the first three normal forms.

## First Normal Form (1NF)

A database is in **First Normal Form** if it meets the following criteria:

- No multi-valued attributes. (Duplicate rows are allowed.)
- Remove all columns that are not dependent on the primary key.

Let's get started by creating new rows for any entity with multi-valued attributes. In our example, the `Course IDs,` `Course Names,` and `Registration Dates` columns are all multi-valued. Erin Donaldson, Erica Zastrow, and Erin Price are all taking two courses, so we will create a new row for each course.

After creating the new rows, we will end up with:

| Student ID | First Name | Last Name | City | State | Zip | Course ID | Course Name | Registration Date |
| ---------- | ---------- | --------- | ---- | ----- | --- | --------- | ----------- | ----------------- |
| 123        | Jimmy      | Smith     | Appleton | WI | 54911 | 1      | Data Access for Programmers   | 1/05 |
| 124        | Erin       | Donaldson | Neenah   | WI | 54956 | 2      | C# Intro to Programming       | 1/06 |
| 124        | Erin       | Donaldson | Neenah   | WI | 54956 | 3      | PHP                           | 1/06 |
| 125        | Erica      | Zastrow   | Appleton | WI | 54914 | 1      | Data Access for Programmers   | 1/05 |
| 125        | Erica      | Zastrow   | Appleton | WI | 54914 | 4      | Computer Programming C++      | 1/06 |
| 127        | Greg       | Olsen     | Appleton | WI | 54911 | 2      | C# Intro to Programming 	   | 1/05 |
| 129        | Kim        | Palmer    | Neenah   | WI | 54956 | 4      | Computer Programming C++      | 1/05 |
| 131        | Bryce      | Davis     | Appleton | WI | 54911 | 1      | Data Access for Programmers   | 1/07 |
| 133        | Erin       | Price     | Appleton | WI | 54913 | 2      | C# Intro to Programming       | 1/07 |
| 133        | Erin       | Price     | Appleton | WI | 54913 | 3      | PHP                           | 1/05 |
| 134        | Marquise   | Alton     | Appleton | WI | 54915 | 2      | C# Intro to Programming 	   | 1/05 |

And then when we remove any columns that are not dependent on the primary key, we end up with these two tables:

> [!NOTE]
> Registration Date is functionally dependent on Student ID and Course ID, so it ends up in both tables (for now).

> [!NOTE]
> We are using the * symbol here to indicate the primary keys.

| Student ID* | First Name | Last Name | City | State | Zip | Registration Date |
| ---------- | ---------- | --------- | ---- | ----- | --- | ----------------- |
| 123        | Jimmy      | Smith     | Appleton | WI | 54911 | 1/05 |
| 124        | Erin       | Donaldson | Neenah   | WI | 54956 | 1/06 |
| 124        | Erin       | Donaldson | Neenah   | WI | 54956 | 1/06 |
| 125        | Erica      | Zastrow   | Appleton | WI | 54914 | 1/05 |
| 125        | Erica      | Zastrow   | Appleton | WI | 54914 | 1/06 |
| 127        | Greg       | Olsen     | Appleton | WI | 54911 | 1/05 |
| 129        | Kim        | Palmer    | Neenah   | WI | 54956 | 1/05 |
| 131        | Bryce      | Davis     | Appleton | WI | 54911 | 1/07 |
| 133        | Erin       | Price     | Appleton | WI | 54913 | 1/07 |
| 133        | Erin       | Price     | Appleton | WI | 54913 | 1/05 |
| 134        | Marquise   | Alton     | Appleton | WI | 54915 | 1/05 |

| Course ID* | Course Name | Registration Date |
| --------- | ----------- | ----------------- |
| 1         | Data Access for Programmers   | 1/05 |
| 2         | C# Intro to Programming       | 1/06 |
| 3         | PHP                           | 1/06 |
| 1         | Data Access for Programmers   | 1/05 |
| 4         | Computer Programming C++      | 1/06 |
| 2         | C# Intro to Programming 	    | 1/05 |
| 4         | Computer Programming C++      | 1/05 |
| 1         | Data Access for Programmers   | 1/07 |
| 2         | C# Intro to Programming       | 1/07 |
| 3         | PHP                           | 1/05 |
| 2         | C# Intro to Programming 	    | 1/05 |


Take a look:

https://youtu.be/9XlJATAgnKg

## Second Normal Form (2NF)

A database is in **Second Normal Form** if it meets the following criteria:

- It is in First Normal Form.
- All non-key attributes are dependent on the entire primary key. (This only applies to concatinated/composite primary keys.)

So this really only affects Registration Date, which is dependent on both Student ID and Course ID. So we will create a new table for Registration Date.

| Student ID* | Course ID* | Registration Date |




https://youtu.be/KqSYSdXCYxM

