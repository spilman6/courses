---
title: ESM Modules and Bundling
subtitle: Advanced JavaScript
hideNav: false

live: https://fvtc.software/appel/advanced-javascript/esm-and-bundling
dev: http://localhost:3006/appel/advanced-javascript/esm-and-bundling
repo: https://github.com/rappel/courses
---

# ESM Modules

## CommonJS Modules

Originally, JavaScript did not have a built-in module system. Developers used various libraries and patterns to manage dependencies. One of the most popular patterns was CommonJS, which Node.js adopted. You probably recognize this pattern:

```javascript
// use express
const express = require('express')

// use a custom module
const myModule = require('./myModule')

// export a module
module.exports = {
    // your module here
}
```

CommonJS modules are synchronous and load dependencies on demand. This pattern works well for server-side applications, but have limited use in the browser.

## ESM Modules

In 2015, ECMAScript 6 introduced a new module system called ECMAScript Modules (ESM). This system is asynchronous and allows for static analysis of dependencies. You can recognize ESM modules by the `import` and `export` keywords:

```javascript

// import a module
import express from 'express'

// import a custom module
import myModule from './myModule'

// export a module
export default {
    // your module here
}
```

ESM modules are the standard for modern JavaScript applications, and as of around 2018, all major browsers support them, requiring only that you use the `type="module"` attribute in your script tags.

```html
<script type="module" src="app.js"></script>
```