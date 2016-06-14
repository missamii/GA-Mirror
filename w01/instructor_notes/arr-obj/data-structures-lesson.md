# JS Data Structures
*Tues. June 14, 2016 • afternoon lesson*

### Lesson Objectives:
- Learn about arrays & objects
- Learn how to access and manipulate ""
- Compare objects and key-value stores to arrays as data structures
- Create empty objects and objects with multiple properties using object literal syntax
- Compare adding and retrieving properties to an existing object using the dot and bracket notations
- Access properties of an object using keys and helper methods (.hasOwnProperty)
- Iterate over the keys of an object to return and manipulate values


---


Strings and numbers are not enough for most programming purposes. Most programming languages offer ways to group data into collections so we can use it more efficiently.

### Data structures in JS
- Arrays
- Objects


### Arrays
`var lizaArr = [1, 2, 8, 5];`

Arrays are great for:
- Storing data
- Enumerating data (do something to each piece of data one by one)

Arrays are similar in structure to a list. Each item in an array is called an `element`. Arrays can contain elements of different types, such as numbers, strings, etc.

#### Working with data in arrays
Items in arrays are stored in sequential order, just like a to-do list. The list begins at `0`. **Never forget that.**

How do we **create** arrays? There are several ways, but this is the most common way:

```JavaScript
// creates an empty array:
var friends = [];

// create a new array with values:
var friends = ['Rachael', 'Ross', 'Monica'];

```

How do we **access** arrays? Bracket notation using the index of the element.

```JavaScript

friends[0];
=> 'Rachael'

friends[1];
=> 'Ross'

friends[2];
=> 'Monica'

friends.length;
=> 3

var lastFriend = friends[friends.length - 1];
=> 'Monica'
```

#### A note about `.length` in JS
- This function tells you *one more than the highest index in the array.* This means that `array.length` isn't necessarily the number of items in the array. Think about the following:

```javascript
var a = ["dog", "cat", "hen"];
a[10] = "fox"; // this assigns 'fox' to the 10th index
a.length; // 11
```


#### How do we **add** and **delete** items from an array?

Push & Pop help us add/delete elements from the **end** of an array.

`.push()` adds an item to the end of the array, then `returns` the new length of the array.
`.pop()` removes the last item, and returns that item.

```javascript
friends.push('Chandler');
=> 4 // returns the new length of the arr

friends[3];
=> 'Chandler'

friends.pop();
=> 'Chandler'

```

Unshift & Shift help us add/delete elements from the **beginning** of an array.
```javascript

friends.unshift('Chandler');
=> 4 // adds one to the beginning & returns the new length of the array

friends[0];
=> 'Chandler'

friends.shift();
=> 'Chandler'

```

Removing specific items from an array:
```js
var friends = ['Rachael', 'Ross', 'Monica'];

// we want to remove 'Ross'
// first find the index of 'Ross'
friends.indexOf('Ross');
=> 1

// if we want to remove 'Ross' but keep an empty slot (not recommended)
delete friends[1]
=> true

friends
=> [ 'Rachael', , 'Monica' ]

// if we want to remove him altogether
friends.splice(1, 1)
=> [ 'Ross' ]

friends
[ 'Rachael', 'Monica' ]

// The second parameter of splice is the number of elements to remove.
// Note that splice modifies the array in place and returns a new array containing the elements that have been removed.

```



#### More array helper methods
`a.toString()` - Returns a string with the toString() of each element separated by commas.

`a.reverse()` - Reverse the array.

`a.join()` - take all the elements in an array and join them into a single string. Depending on what you pass join,
the string can be all one word, space separated, comma separated, etc.

*Note:* There are many more helper methods. You'll never memorize them all.


----


**Exercise:** arrays.md


---


### Objects

Objects, just like arrays, store data for us. Unlike arrays, however, they elements are stored not in a lists with indices, but in *key-value pairs*.

```javascript

var myArray = ['Liza', 'Hayes', 'Ramo'];

var myObject = {
  firstName: 'Liza',
  middleName: 'Hayes',
  lastName: 'Ramo'
}

```

- Objects are nearly universal across programming languages, although they may have different names


#### Creating objects using object literal syntax

FYI: There are four ways to create objects:
- Object constructor using the keyword `new`
- Constructor function
- Object.create
- Object literal syntax

We are only going to look at the last one, **object literal syntax,** also called an object initializer. It looks like this:

`var myObject = {};`

Pretty simple, right?

We can also create an object with properties. In fact, we already did this above:

```javascript
var myObject = {
  firstName: 'Liza',
  middleName: 'Hayes',
  lastName: 'Ramo'
}
```


#### Object properties
- Each key on an object is called a `property`
- Think about this:

```js
var carObj = {
  engine: 'V6',
  seats: 4,
  wheels: 2
  convertible: false
}
```

**Note:** Aside from `null` and `undefined`, everything in JS is an object. More on that later...

**Keys** can either be a name, number or string.

**Values** can be anything - even arrays or objects.


#### Accessing values in an object
We access values by their key. To do so, we use `dot` or `bracket` notation.

```js
var carObj = {
  engine: 'V6',
  seats: 4,
  wheels: 2
  convertible: false
}

// get the type of engine

// dot notation
carObj.engine
=> 'V6'

// bracket notation
carObj['engine']
=> 'V6'

```

What if the object is very large and I want to check if it has a specific property? [`.hasOwnProperty()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

This function returns T or F.

```js

var bigObj = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8
};

bigObj.hasOwnProperty('six');
=> true

// dot notation
bigObj.six
=> 6

// bracket notation
bigObj['six']
=> 6

```




### A tiny intro to nesting

Consider the following:

```js

var houseObj = {
  sqFeet: 3000,
  neighborhood: 'West Village',
  inhabitants: ['alana', 'olivia', 'liza']
}

// get inhabitants array:
houseObj.inhabitants
=> ['alana', 'olivia', 'liza']

// get just liza:
houseObj.inhabitants[2];

// get just liza & store her in a variable:
var liza = houseObj.inhabitants[2];


```


---


**Exercise:** objects.md


---


### More on nested arrays

Now that we've practiced the basics of arrays & objects, let's make things a little more complex.

```js
var arrayOfArrays = [
                      ['a', 'b', 'c'],  // 0
                      ['d', 'e', 'f'],  // 1
                      ['g', 'h', 'i']   // 2
                    ];
```

How do I access the first array?
`arrayOfArrays[0]`

The second array?
`arrayOfArrays[1]`

The 'e' in the second array?
`arrayOfArrays[1][1]`


---


**Exercise:** nested-arrs.md


---


### More on nested objects:

This is an array of objects:

```js
var objArr = [
	{  // 0
		color: "red",
		value: "#f00"
	},
	{  // 1
		color: "green",
		value: "#0f0"
	},
	{  // 2
		color: "blue",
		value: "#00f"
	},
	{  // 3
		color: "cyan",
		value: "#0ff"
	},
	{  // 4
		color: "magenta",
		value: "#f0f"
	},
	{  // 5
		color: "yellow",
		value: "#ff0"
	},
	{  // 6
		color: "black",
		value: "#000"
	}
]
```

How do I access the first object in the array?
`objArr[0]`

How do I access 'Red'?
`objArr[0].color`


Nested objects can be very large.

```js
{
	id: "0001",
	type: "donut",
	name: "Cake",
	ppu: 0.55,
	batters:
		{
			batter:
				[
					{ id: "1001", type: "Regular" },
					{ id: "1002", type: "Chocolate" },
					{ id: "1003", type: "Blueberry" },
					{ id: "1004", type: "Devil's Food" }
				]
		},
	topping:
		[
			{ id: "5001", type: "None" },
			{ id: "5002", type: "Glazed" },
			{ id: "5005", type: "Sugar" },
			{ id: "5007", type: "Powdered Sugar" },
			{ id: "5006", type: "Chocolate with Sprinkles" },
			{ id: "5003", type: "Chocolate" },
			{ id: "5004", type: "Maple" }
		]
}


// - - - - - - - - -  - - -


var candidateData = {
  name : "John Doe",
  age : 32,
  isFullTime : true,
  pastEmployers : ['Microsoft','Google','Amazon'],
  yearsExperience : {
    ruby : 3,
    javas : 6,
    javascript : 5
  }
}

```



---


**Exercise:** nested-objs.md


---
