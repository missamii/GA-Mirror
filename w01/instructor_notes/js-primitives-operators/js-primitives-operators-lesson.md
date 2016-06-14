
# Javascript Primitives & operators
*Tues. June 14, 2016 • morning lesson*


### Lesson objectives:
- Identify and describe the different data types in JS
- Describe how to declare, assign, and manipulate variables
- Describe the different use cases for each data type
- Use `typeof`
- String helper methods


---


### Primitives

**Primitives** are the most basic form of data in JavaScript. Primitives are data that are not objects and have no methods.

In JavaScript, these are main primitive data types:
- `string`
- `number`
- `boolean`
- `null`
- `undefined`


### Strings
- **Strings** are single words or sentences that are surrounded by double or single quotes.
`'Kittens'`
`"Lots of kittens."`

---


**Exercise:** js-strings.md


---


### Numbers
- `integer`: whole numbers
  - `1000` `43` `9`
- `float`: decimals
  - `3.14` `1.0`


### Null and undefined
- **Undefined** is where no notion of the thing exists; it has no type, and it's never been referenced before;
  - `console.log(liza)`
  - Not the string Liza, because there are no quotes. Presumably a variable `liza`, which does not exist because it was never created.
  - `typeof liza` ==> `undefined`
- **Null** is where the thing is known to exist, but it's not known what the value is.
  - `var liza = null;`


### Booleans
- **True** and **false**
- All values in JS are either "truthy" or "falsey".
- We use the words "truthy" or "falsey" to describe values in order to avoid confusing descriptors with the primitive datatypes.

All values in JS are truthy except for the following falsey values:
- `false`
- Empty string `""`
- `null`
- `undefined`
- `0`
- `NaN`

- How do you test if a value is truthy or falsey?
```js
!!9 => true

if (46) {
  // execute some code here
}
```


---


### Using `typeof` to determine data type
- This is a nifty way to determine the type of something
- `typeof 92` => `"number"`
- `typeof 'liza'` => `"string"`

#### Gotchas of `typeof`: arrays
- `typeof [1,2,3]` returns `"object"`
- Why? Quirk of JS.
- It's not inaccurate - arrays do inherit from objects - but it's not helpful.
- Better way: `Array.isArray(arr);`

#### Gotchas of `typeof`: null
- `typeof null` returns `"object"`
- This is totally inaccurate.
```
var liza = null;
typeof liza
=> 'object'
```
- One way to check if a value is `null`:
``` js
var liza = null;
if ( liza === null && typeof liza === "object" ) {
  // execute some code here
}
```

---


**Exercise:** `js_types.js`


---


### Why do we classify data into types?
By classifying data and giving it a 'type', we can specify:
- the possible values for that type
- the operations that can be done to those values
- the way values of that type can be stored.


---


### Variables & keywords
Variables are used to store data types into the memory of the computer so that they can be referenced later.

##### Always use var!

New variables in JavaScript are declared using the [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var "/en/JavaScript/Reference/Statements/var") keyword.

If you declare a variable without assigning any value to it, its type is `undefined`.

```javascript
var a;
=> undefined
```

So lets try assigning a value to variable:

```javascript
var name = "Alex";
=> undefined

name
=> "Alex"
```

Having made some expressions it becomes evident we want to store these values.

```javascript
var myNumber = 1;

var myString = "Greetings y'all!"
```

The main note to make here is that these variables should always have the `var` keyword and use `camelCase`


---


### Increment / Decrement Operators

Values are assigned using `=`. There are also compound assignment statements:

`=`   => assignment
`+=`  => increment by a certain amount
`-=`  => decrement by a certain amount
`--`  => decrement by 1
`++`  => increment by 1

*Note:* Increment/decrement operators (+=, -=) are shorthand for the following:

```js
x = 0

x = x + 1 // is the same as:
x += 1 // increment operator

x = x - 1
x -= 1
```


```javascript
var x = 1;
=> 1

x += 5;
=> 6

x -= 3;
=> 3

x++
=> 3

x
=> 4

x--
=>

x
=> 3

```


It's important to remember that these operators are *destructive*, meaning they actually alter the value of the variable.

In contrast, arithmetic operators aren't always destructive. They perform operations, but the original value remains intact.


---


**Exercise:** `increment-operators.md`


---


#### Arithmetic Operators
`+` `-`     => addition/subtraction
`*` `/`     => multiplication/division
`%`         => remainder/modulo
`**`        => exponent

```javascript
var x = 1;

x + 1;
=> 2

x
=> 1

```


#### Comparison operators
`==`, `===`           => equal / equal & same type (strict equal)
`!=`, `!==`           => not equal / strict not equal
`>`, `<`, `>=`, `<=`  => greater & less than / greater & less than or equal to

[Here's a neat article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) on equality & sameness in javascript

```javascript
1 == 1
=> true

1 == '1'
true

1 === '1'
=> false

1 != 2
=> true

1 < 3
=> true

1 <= 3
=> true
```


---


**Exercise:** `comparison-operators.md`


---


#### Logical operators

Used to compare two conditions logically.

`&&`  => and (both true)
`||`  => or (at least one is true)
`!`   => not

AND:
```javascript
// AND (&&)
true && true
=>  true

true && false
=> false

false & false
=> false
```

OR:
```javascript
// OR (||)
true || true
=>  true

true || false
=> true

false || false
=> false
```

NOT:
```javascript
// NOT (!)

!false || !false
=> true

```

Examples of comparing conditions:
- **AND:** If the user is signed in AND has not yet paid for items in cart, THEN redirect them to the checkout page.
- **OR:** If the user is a first-customer OR is not signed in, THEN redirect them to the Welcome page.
- Code checks each condition and evaluates it to either T or F. If the sum of the conditions evaluate to True depending on the operator (&&, ||), then THEN code will execute.
