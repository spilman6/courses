---
title: Functions - Exercise 3
subtitle: "JavaScript"
---

# Exercise 3

For this exercise, write the missing reducer function `getEvenNumbers`. To determine if a number is even, use the mod operator (`%`), and mod the given number by 2. If the remainder equals zero, it's even. Otherwise it's odd.

For example:

```javascript
console.log(5 % 2) // 1, so 5 is odd
console.log(12 % 2) // 0, so 12 is even
```

Start with this code, and write the function where instructed:

```javascript
const numbers = [ 5, 13, 45, 12, 111, 6 ]

// write your function here:


const evenNumbers = numbers.reduce(getEvenNumbers)
console.log({ evenNumbers })
```