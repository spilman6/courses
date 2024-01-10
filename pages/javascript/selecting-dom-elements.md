---
title: 'Selecting DOM Elements'
subtitle: 'JavaScript'
---

# Selecting DOM Elements

In this tutorial, we will learn how to select DOM elements using the `querySelector` method in JavaScript.

The `querySelector` method is a powerful tool that allows you to select DOM elements using CSS selectors. It returns the first element that matches the specified selector.

## Selecting by Tag

The syntax for using `querySelector` is as follows:

```javascript
const firstDiv = document.querySelector('div')
```

Assuming that we have an html page with a div element, this will query the entire document and store the first div element into the `firstDiv` variable.

We can then perform any number of actions on it. Including but not limited to:

- adding or removing elements inside of it
- reading or changing the text stored inside of it
- modifying its style

## Selecting by ID

As mentioned above, `querySelector` searches the document for the first occurance of that tag. Often we don't want the first, but instead a specific element.

Take a look at this html:

```html
<div>
    <p>This is an example paragraph.</p>
    <p id="target">This is another paragraph.</p>
</div>
```

There are two paragraphs. Using `querySelector('p')`, will access the first, but what if I want the second paragraph? Well, you probably noticed the id. The actual value of the id, in this case I chose `target`, makes no difference, as long as it matches in the query. Take a look:

```javascript
const secondP = document.querySelector('#target')
```

The `#` specifies that we're looking for an element with an id of `target`. Which is exactly what we have. 

We could also have specified the element type, as follows:

```javascript
const secondP = document.querySelector('p#target')
```

This would then look specifically for a `p` tag with the id of `target`.

> [!NOTE] I don't usually do this because if I decide to later change the element in the html, I would have to update the JavaScript to match.

