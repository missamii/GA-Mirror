/*

NO GOOGLING !!!!

1. WRITE A FUNCTION THAT TAKES TWO PARAMETERS:
  a. an array of items
  b. a callback function. The callback function must take one parameter.

It must *return* a NEW array that is created by executing the callback function
on every item in the array, passing in each item in turn to the callback function
as an argument.
*/


var array = [1,2,3];
function arrayTransformer(arr, callback) {
  // your code here
  var newArr =[];
  for (i = 0; i <arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  console.log(newArr);
}
arrayTransformer(array, function(x) {
  return x * x;
});



function arrayTransformer(arr, callback) {
  // your code here
  var newArray = [];

  for (var i = 0; i < arr.length; i++) {
    newArray.push(callback(arr[i]));
  }
  console.log(newArray);
  return newArray;
}

arrayTransformer(["ethan","liza","syed"], function(x) {
  var div = document.createElement('div');
  div.classList.add('teacher');
  div.innerHTML = x;
  return div;
});
// To show your function's successfully working,
// (1) using [1,2,3] as your source array, create an array of its squares
// (2) transform the array of teachers here -- they've all decided to have
// gender-reversal surgery. All teachers with a gender of "M" should now
// be "F" and vice versa. Log the teachers array when you're done to confirm
// the original array is unchanged.

var array = [1,2,3];
var teachers = [
  {
    name: "Syed",
    gender: "M"
  },
  {
    name: "Ethan",
    gender: "M"
  },
  {
    name: "Liza",
    gender: "F"
  }
];
function arrayTransformer(arr, callback) {
  // your code here
  var newArr =[];
  for (i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  console.log(newArr);
}
arrayTransformer(array, function(x) {
  return x * x;
});
arrayTransformer(teachers, function(x) {
  if (x.gender === 'M') {
    x.gender = 'F';
  } else {
    x.gender = 'M';
  }
  return x;
});

/*
2. WRITE A FUNCTION THAT TAKES TWO PARAMETERS:
  a. an array
  b. a callback function

This is very similar to the prior exercise: your function should execute the
callback function on every item in the array. this time, though instead of
returning a new, transformed array, it should execute the function on the
array *in place*, so that the array is transformed. It should return the
transformed array when done.

When done execute it on the same teachers array, permanently changing their
genders.
*/

function doSomethingToEveryItem(arr, callback) {
  // your code here
}

/*
3. FINALLY Write a function that takes in an array and a callback function.

This callback function is going to function as a "test": it will perform some
test on every item in the array and it will return 'true' if the item passes
the test and 'false' if it doesn't.

Your function must generate a NEW array of only those items that passed the test.

e.g.
arrayTester([1,2,3,4,5], function(item) {
  return item % 2 !== 0;
}); // returns [1,3,5];
*/

function arrayTester(arr, testFxn) {
  // your code here
}
