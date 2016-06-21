# Morning Exercises

### String reverser

Write a function that takes one parameter, a string, and returns a reversed version of that string.

You CANNOT turn it into an array. (No `str.split('').reverse().join('')`.)

```js
//VERSION 1: loops backwards
function reverser(str) {
  var revStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    //VERSION 1A: uses concat and charAt
    // revStr = revStr.concat(str.charAt(i));

    //VERSION 1B: just takes advantage of built-in string concatenation
    revStr += str[i];
  }
  return revStr;
}

//VERSION 2: LOOPS FORWARDS
function reverser(str) {
  var revStr = "";
  for (var i = 0; i < str.length; i++) {
    revStr += str[str.length - 1 -i];
  }
  return revStr;
}
```

### Array reverser

Write a function that takes one parameter, an array, and reverses it WITHOUT using `reverse`.

```js
function arrayReverser(arr) {
  var reversedArray = [];

  //VERSION 1: loops forwards
  // for (var i = 0; i < arr.length; i++) {
  //   reversedArray.unshift(arr[i]);
  // }

  // VERSION 2: loops backwards
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArray[arr.length - 1 - i] = arr[i];
    console.log(reversedArray);
  }

  //VERSION 3: a WHILE loop (courtesy of Nate!)
  //THIS VERSION IS **NOT** A PURE FUNCTION
  // notice how the conditional for the 'while' loop works? as long as arr.length > 0, it is 'truthy'. When arr.length == 0 (i.e., all the elements have been removed from it), it is falsy and the loop stops
  while (arr.length) {
    reversedArray.push(arr.pop());
  }

  return reversedArray;
}
```

### Array max finder

Write a function that takes one parameter, an array. You can assume the elements in the array are all numbers. Return the biggest value in the array.

```js
function maxValue(arr) {
  var maxNum = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
}
```

**IMPORTANT:** this function should work for all numbers. Think of edge cases. Here's one that might be relevant: what if your array consists solely of negative numbers? Does the function still work?

If you get that working, write a `minFinder` version that finds the smallest value in the array.
