
# Javascript Scope & Hoisting
*Fri, June 17, 2016 • afternoon lesson • W01 D05*


### Lesson Objectives
- Define SCOPE
- Compare GLOBAL and LOCAL SCOPE
- Define HOISTING
- Variable vs. function hoisting
- `this` and how it relates to scope
- functions vs. METHODS


---

### Variable scope
- **Scope** refers to where a variable is accessible.
- A variable's scope is controlled by where the variable was declared.

```javascript

function helloLiza() {
  var liza = 'liza';
  return liza;
}

// call the fxn:
helloLiza()
=> 'liza'

// try to inspect the var liza:
liza
=> error

```

- Liza is only accessible in the `helloLiza` function



### Scope in JS
- **Global** scope
- **Local** scope (also called function scope)

In the previous example, the variable `liza` was declared inside a function. What if we declare it outside of the function?


```javascript

var liza = 'liza';

function helloLiza() {
  return liza;
}

// call the fxn:
helloLiza()
=> 'liza'

// try to inspect the var liza:
liza
=> 'liza'

```

- Declaring a variable outside of a function gives it global scope. That means it's accessible from everywhere, even other functions.


### Scope looks up
- If a function references a variable, it looks **up** to find the variable
- It looks at the lines above where the variable was called inside the function, then it checks the global scope
- It does not look 'down' into other functions to find the variable.
- Draw boxes
- **Note:** If a variable is declared in the global scope, even if it is declared in lines after the function that calls it, it is still considered 'looking up'. Like so:

```js

function helloLiza() {
  console.log( liza );
}

var liza = 'liza';

helloLiza();

```


### Nested scope
- What if you have a function inside of a function?
- The inner fxn creates its own scope
- The lookup process is still the same



---



### Scope gotchas
- Scope in JS is either global or function-level
- "Blocks" like `if` statements and `loops` do not restrict scope

```js

function helloLiza() {

  for (var i = 0; i < 4; i++) {
    var liza = 'liza';
    console.log(liza); // this works
  }

  console.log(liza); // this still works

}

console.log(liza); // this does not

```



---



### Hoisting
- We write js code & things magically happen in the browser.
- Chrome and Node both use the V8 JS engine, or interpreter
- During the interpretation process, JS interpreters move all variable *declarations* to the top of the current scope.
- Only the *declarations* are hoisted. *Assignments* are left where they are.


Variable hoisting:

```js
function foo() {
  var foo = 1;
  var bar = 2;
  var baz = 3;

  console.log(foo + " " + bar + " " + baz);
}

=> 1 2 3








// what happens if we move the log?
function foo() {
  var foo = 1;
  console.log(foo + " " + bar + " " + baz);
  var bar = 2;
  var baz = 3;
}

=> 1 undefined undefined










// This is how the interpreter actually reads the above code:
function foo() {
  var foo;
  var bar;
  var baz;

  foo = 1;
  console.log(foo + " " + bar + " " + baz);
  bar = 2;
  baz = 3;
}

```

What's happening here?

The interpreter `hoists` the *declarations* of the variables, but not the *assignments*. It knows that these variables exists, but it doesn't know *what their values are*.

By the time the `console.log` runs, it only knows the value of `foo`. The other two are undefined.



### Function hoisting
- Function definitions *and* declarations are hoisted (so, the entire thing).
- That means functions have global scope.
- For this reason, typically when we talk about scope, we are referring to variables.

```js

isItHoisted();
// Outputs: "Yes!"

function isItHoisted() {
  console.log("Yes!");
}

```


### What about anonymous function hoisting?
Remember what an anon. fxn is?

```js

// regular
function helloLiza() {
  console.log('liza');
}

// anon.
var helloLiza = function() {
  console.log('liza');
}

```

- Anon. fxns are considered variables. The declaration is hoisted but not the assignment.



---



### A little teeny tiny bit about `THIS`
- `this` in JS is a tricky concept to describe.
- The `this` keyword is an object provided by the language whose scope and context is evaluated at runtime (rather than during interpretation/compiling)
- In the browser, `this` in the global scope refers to the global object (the browser window)
- If you type `this` into Chrome's console, you will get back the `Window` object
- In an object, `this` is different:

```js

var wdi = {
  name: "WDI",
  whatsTheName: function() {
    return this.name; // here, `this` refers to itself
  }
}

wdi.whatsTheName();
=> "WDI"

```

- More on `this` later...


### Functions vs. Methods

A function is called a `method` when it is a property on an object.

```js
var liza = {
  name: 'liza',
  sayName: function() {
    console.log( this.name )
  }
}


liza
=> { name: 'liza', sayName: [Function] }


liza.sayName()
=> liza
=> undefined // because the method has no explicit return, of course 

```




---

### Resources
- http://developer.telerik.com/featured/a-guide-to-javascript-engines-for-idiots/
- http://adripofjavascript.com/blog/drips/variable-and-function-hoisting
- https://www.sitepoint.com/back-to-basics-javascript-hoisting/
- https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/
