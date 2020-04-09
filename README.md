### How to run javascript

Install Node

- `node` in any directory to open a js console
- `node file.js` in the directory of `file.js` to execute `file.js` (assuming `file.js` can run alone)
- `node file1.js && node file2.js` executes the two files in the calling order and **separately**, meaning if `file2.js` references anything in `file1.js`, there will be `ReferenceError`
- when passing multiple file names as argument to node, it only executes the first. Only the first

### How to run separated sub-class files in terminal ?**

- with `import`/`export`

### What is the javascript "class method" like in ruby ?

- [`class static`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Classes/static)

### When not to use arrow method ?

[this article explains 3 cases](https://medium.com/better-programming/3-examples-of-when-not-to-use-javascript-arrow-functions-90eebfbf7bb0)

To sum up

- when I want to use `this` inside the function
- when the `this` might change
- in object prototype 

### TODO : How make the equivalent of a sub-class in ES5
