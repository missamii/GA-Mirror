

// Define a function `maxOfTwoNumbers` that takes two numbers as parameters and
  // returns the largest of them. Use the if-else construct.

function maxOfTwoNumbers(x, y) {
  if (x < y) {
    return y;
  } else if (x > y) {
    return x;
  }
}

maxOfTwoNumbers(4, 10);













// Define a function maxOfThree that takes three numbers as parameters and
// returns the largest of them. Take time to plan this one out.

function maxOfThree(x, y, z) {
  if (x > y && x > z) {
    return x;
  }

  if (y > x && y > z) {
    return y;
  }

  if (z > x && z > y) {
    return z;
  }
}

maxOfThree(1, 2, 3)





// Write a function isCharacterAVowel that takes a character (i.e. a string
// of length 1) and returns `true` if it is a vowel, and `false` otherwise.
// remember that .indexOf will return -1 if it is not in the array

function isCharacterAVowel(c) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  if ( vowels.indexOf(c) !== -1 ) {
    return true;
  }

  return false;
}

isCharacterAVowel('a');
isCharacterAVowel('f');






// Define a function sumArr and a function multiplyArr that sums
// and multiplies (respectively) all the numbers in an array of numbers. For
// example, sumArr([1,2,3,4]) should return 10, and
// multiplyArr([1,2,3,4]) should return 24.

function sumArr(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

sumArr( [1, 2, 3, 4] )    // 10




function multiplyArr(arr) {
  var product = arr[0];

  for (var i = 1; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}

multiplyArr( [1, 2, 3, 4] )     // 24
multiplyArr( [2, 1, 2, 2] )     // 8
multiplyArr( [3, 1, 2, 2] )     // 12





// Write a function that returns the number of parameters passed to
// the function when called. Hint: this one is simpler than you think, Google
// is your friend

function numberOfArguments() {
  return arguments.length
}

numberOfArguments(1, 'a', 3, 'd', 'f');
numberOfArguments('hello', 'liza', 198, '1');





// Define a function reverseString that reverses a string. For example,
// reverseString("jag testar") should return the string "ratset gaj".
// Hint: one way to do it is to convert the string to an array first, then
// back into a string. You can use built-in JS string/array methods.

function reverseString(str) {
  return str.split('').reverse().join('');
};

reverseString('Liza Ramo') // omaR aziL




// Write a function findLongestWord that takes an array of words and
// returns the *length* of the longest word in the array.
// Loop over the array. For each word, compare it's length to `longest`.
// If it's > longest, replace longest with that length.

function findLongestWord (arr) {
  var longest = 0;

  for (var i = 0; i < arr.length; i++) {

    if (arr[i].length > longest) {
      longest = arr[i].length;
    }

  }
  return longest;
}

findLongestWord( ['liza', 'hi', 'hello'] )
