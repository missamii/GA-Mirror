# W08D01 Morning Exercise

Today's assignment:

Imagine you're a backend developer. You've got an array of numbers. They've already been sorted for you from smallest to largest:

```js
var myArray = [1, 6, 11, 15, 23, 24.6, 58];
```

Please write a function that will take (at minimum) two parameters: an array and a number, and insert that number into its proper position in the array. It should `return` the new, modified array. You may if you wish use additional parameters.

So using the array above, if I name my function `insertMe`:
```js
insertMe(20, myArray) // -> [1, 6, 11, 15, 20, 23, 24.6, 58]
insertMe(0, myArray) // -> [0, 1, 6, 11, 15, 20, 23, 24.6, 58]
etc.
```

Have at it!

I've provided an empty JS file here that you can run in Node to test your code. You'll need to `console.log` stuff to view it -- just `return`ing something doesn't display it in the terminal. 
