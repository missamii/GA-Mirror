# RECURSIVE FUNCTIONS
## RECURSIVE FUNCTIONS
### RECURSIVE FUNCTIONS
#### RECURSIVE FUNCTIONS
##### RECURSIVE FUNCTIONS
###### RECURSIVE FUNCTIONS

(The following is adapted from [Eloquent JavaScript](http://watchandcode.com/courses/eloquent-javascript-the-annotated-version/lectures/206284))

```js
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");
```

What does this return??

Don’t let this example of recursion throw you off: there’s no way you would know what it means unless you’ve learned it already.

A recursive function is just a function that calls itself. Let’s step through the code and see what this means.

Let’s start in the last line. chicken() is called inside of the console.log function, so we need to step into the chicken function.

The body of the chicken function returns egg(), so let’s step into the egg function.
The egg function returns chicken(), so let’s step into the chicken function.

The body of the chicken function returns egg(), so let’s step into the egg function.
The egg function returns chicken(), so let’s step into the chicken function.

The body of the chicken function returns egg(), so let’s step into the egg function.
The egg function returns chicken(), so let’s step into the chicken function.

And again and again and again…

So now you can see that chicken() is recursive because it calls itself. In this example it happens over and over again forever, but usually you want to write recursive functions so that they stop at some point.

Here's an actual working example: a recursive function that can raise a given number (`base`) to a given exponent (`exp`). So if we ran raiseToPower(2,3) we should get back 2 to the 3rd power, which is 8.

```js
function raiseToPower(base, exp) {
  if (exp === 0) {
    return 1;
  } else {
    return base * raiseToPower(base, exp - 1);
  }
}
```

Mindbending, right? Take a couple minutes to play around with this function in the console.

Now, for our first exercise:

Yes, we can easily find out if a given number is even or not by using the modulo operator:
if (n % 2 === 0) { do something for even numbers } else { do something cause it's odd }

But let's find out if a number is even using a recursive function. One way to see is to repeatedly subtract 2 from a given number until you're left with either 0 or 1. If you have 0, you've got an even number; 1 an odd number. Write an `isEven` function that does this recursively and tells you at the end if the number that was passed into it is even or odd.

```js
function isEven(n) {
  // your code here
}
```

Take a few minutes to try your hand at this and then we'll play around with it together.

==============================

Here's a type of problem you might see on a technical interview. The Fibonnaci sequence is an important mathematical sequence. The first two numbers in the sequence are 0 and 1, and every number after that is the sum of the prior two numbers. So here are the first few terms in the sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

You can do this with a `for` loop. If you're hazy on the Fibonnaci series by doing it that way. Using a for loop and NO recursion, write a function to calculate the value of the nth Fibonnaci number. (We've done this before!)

You can also do it recursively! Write a recursive function that calculates the nth Fibonnaci number. So `fibonnaci(5)` would return 3 and `fibonnaci(8)` would return 21. **THIS IS HARD but you can do it!**

```js
function fibonnaci(n) {
  // your code here
}
```

### **IMPORTANT**
**Don't try to use your recursive function to calculate large Fibonnaci numbers (larger than *n* = 35 or 40 or so). WHY? Hint: it rhymes with *"back broverflow"***

There are ways around this that we'll review later....
