
# JS Functions
*Fri, June 17, 2016 • morning lesson • W01 D05*

### Lesson Objectives
- DRY
- Defining & calling functions
- PARAMETERS vs ARGUMENTS
- NAMED vs ANONYMOUS functions
- RETURN
- Functions vs METHODS


---


### What are functions?
Pieces of code that perform tasks for us

Functions give us the power to organize our code into named chunks and basically create mini programs inside of our larger program. This makes reading our code a lot easier and lets us reuse common parts of our code as well!

Why do we need functions
- Code is repetitive without them
- DRY up code

Think about this: I need to write code that will perform the following every time someone visits my webpage:
- alerts the word "hello!"
- adds one to the `userCounter` variable
- logs the value of `userCounter` to the console

I need to perform these tasks over and over again every time a user visits my site. I don't want to write the code to perform these actions over & over again, it would be nice if I could somehow zip up the code so it would be easier.

```javascript

var userCounter = 0;
function welcomeUser() {
  alert('hello!');
  userCounter++;
  console.log(userCounter);
}

// every time someone visits my site, trigger this fxn
welcomeUser();

```

**Note:** Why is the return of a function declaration `undefined`?
`var a = 4;` ==> `undefined`
`a` ==> `4`

- The act of *assignment* does not have a value.
- Everything must return something. Instead of returning literally `nothing`, it returns `undefined`.
- But why then doesn't it return `null`, which would be the more appropriate answer. Because JS is quirky.



### Declaring functions
- Let's investigate the syntax of a function

```js

function sayHi() {
  console.log('oh hai.');
}

```

Just like a variable, a function can be named. The naming structure follows the same rules as variables (camelCase).



### Calling fxns
- The term `calling` simply means to execute the function.
- Functions are not executed when they are defined. You must explicitly call them.  

```js

function sayHi() {
  console.log('oh hai.');
}

// call the fxn:
sayHi();
=> 'oh hai'
=> undefined

```


### The `return` keyword
- A fxn always returns a value
- The default return value of a fxn is `undefined`
  - Not to be confused with the return of the creation of a function, which is also undefined
  - That's why you see `undefined` in the console when you type in a function
- In JS, you must explicitly state what the return val should be
- There can be only one return val

But what does `return` do?
- *It passes a specified value back to where the function call was made.*
- Consider this:

```js

function square5() {
  return 5 * 5;
};

// 'answer' is equal to the value of whatever square() evaluates to.
var answer = square();

// take a look at the variable 'answer':
answer
=> 25

```


But wait, why not just `console.log` the value I want to return?

`console.log` simply prints information to the console (it literally *logs* something to the *console*)


```js
function square5() {
  console.log( 5 * 5 );
};

// execute the fxn:
square5();
=> 25
=> undefined // this is the return of the fxn

var answer = square();

answer
=> NaN // we didn't tell the fxn what to pass to the caller



// --- easier example:

function sayHi() {
  console.log('oh hai.');
}

sayHi()
=> 'oh hai'
=> undefined // this is the default return of the fxn since you didn't specify one


// vs:

function sayHi() {
  return 'oh hai'
}

sayHi()
=> 'oh hai'


```


---


**Exercise:** 1-functions.js


---


### Parameters
- Fxns are like factories
- You give it materials, like cloth, buttons & a ribbon, and the factory stitches everything together and out pops a dress.

![](https://media.giphy.com/media/10aADbYxnJlc9q/giphy.gif)

- But how do we give a function the materials it needs? `parameters`
- When you define a function, you tell it that there will be a parameter, but you don't know what the value of that parameter is until the function is called later.
- All you can do is tell the function what to do with that parameter when it gets it.
- **IMPORTANT:** When the function is defined, they are called `parameters`. When the function is called & you pass real values, they are called `arguments`.
- Consider this: I write a function that, when called, will be passed a parameter, a name. The function will take that name & return a string saying hello:

```js

function ohHai(yourName) {
  console.log(`Hello, ${yourName}.`);
}

// When you call the function, pass it a parameter:
ohHai('liza');
=> 'Hello, Liza.'
=> undefined


// -----


function addTwoNums(num1, num2) {
  console.log(num1 + num2);
}

// You pass the fxn the params when you call the fxn
addTwoNums(5, 6);
=> 11
=> undefined


function fullName(firstName, middleName, lastName) {
  console.log( `Your full name is ${firstName} ${middleName} ${lastName}.` );
}

// Now I pass it the parameters
fullName('Liza', 'Hayes', 'Ramo');

```


### Some parameter gotchas
- Parameters vs. arguments
- What if you pass it too many arguments?
- Too few?
- What if you pass a parameter of the wrong data type?

Helpful points:
- You don't specify data types for parameters
- There is no type-checking for passed arguments
- Argument length is never compared to parameters, thus will never throw an "Argument Mismatch".
- Any missing args (fewer than the specified params), no error, but will receive 'undefiend' for the named params.
- Extra Arguments are simply appended to the arguments object.



How to determine how many parameters a function has: `Function.length`:

```js

function animals(an1, an2, an3) {
  console.log(an1, an2, an3);
}

animals.length
=> 3

```


---



**Exercise:** 2-parameters.js



---



### Anon functions
- The functions we've been writing are simply known as `functions` or `named functions`
- `Anonymous functions` are functions that don't have a name and are normally stored in a variable.
- Also called `function expression`
- Why store a fxn in a variable? Hoisting. More on that this afternoon...

```js

// regular
function sayHi() {
  console.log('hi');
}

// anon.
var sayHi = function() {
  console.log('hi');
}

// executed the same way:
sayHi();

```


### Small note on scope:
- Vars in fxns can't be accessed outside of them


### Functional programming, pure fxns, side effects
- When a function performs any other “action”, apart from calculating its return value, it is no longer a pure fxn.

```js

var counter = 0

function addTogether(a, b) {
  counter++;
  return a + b;
}

addOne()

```



---



**Exercise:** 3-functions-lab.js



---



### Resources
- [Short O'Reilly video](http://radar.oreilly.com/2014/05/what-it-really-means-when-people-say-everything-in-javascript-is-an-object.html)
- [Shorty's video on functions](https://www.youtube.com/watch?v=n_-PV66ES_s&index=10&list=PLw1xVKFboueks5UMLogE01mdThRU577oa)
