# objectives

- iterate over specific elements with count controlled loops.
- introduction to a new data structure called the "array".

# intro

- A count controlled loop is a repetition structure that iterates a
specific `number of times`.

-  In contrast, a condition controlled loop iterates a variable number of times – we control the # of iterations through our Boolean condition. Here's an example:

		counter = 0;
    	while(counter < 5){
    		console.log("This will log 5 times");
    		counter += 1;
    	}

- Let's see how we can archive this with a another kind of loop called the `for` loop. A for loop is broken down into 3 parts. An initial value, a condition, and an accumulator. The initial value is where your loop starts. We usually at 0 and the the condition is the limit of how "far" you want to go, and the accumulator keeps track of how many times you've gone through a loop.



# count controlled `for` loop

      for (var i = 0; i < 9; i++) {
        console.log(i);
        // more statements
      }


# looping over sequences

For loops are great for looping over a sequence or collection. If you remember there's something special about the "string" primitive in Javascript. It's actually a sequence of characters that you could say were "strung" together.

	var name = 'meow';
	for(var i = 0; i < name.length; i++){
		console.log(i);
	}  

# Problem

Write a program that outputs this, using string concatenation and a for loop.


	**
	***
	****
	*****
	******
	*******
	********
	*********
	**********
	***********

# Problem

Write a program that asks the user to enter in an integer.
Then find all numbers between 1 and 10,000 that are evenly divisible by that number.


# Problem 

Write a program that generates random lottery numbers for the user
Ask the user for the number of digits they need as well as the high and low value of each digit (i.e. 6 digit number with digits ranging from 1 to 60)

Generate the desired lottery number

# Nested loops

Just like if statements, you can nest for loops inside of other for loops. Let's take a look!

	var cols = "";

	for(var i = 0; i < 3; i++){ // rows
    	for(var j = 0; j < 3; j++){ // columns
        	cols += " * ";
    }
    	console.log(cols);
    	cols = "";
    	console.log("");
	}

Some notes on nested loops:

The innermost loop will iterate through all its iterations for every single iteration of an outer loop

Inner loops complete their iterations faster than outer loops

To get the total number of iterations of a nested loop, multiply the number of iterations of all the loops


# Arrays

An array is simply a list. Just like a string is a list of characters in a sequence arrays are also very similar.

Each item in a list is called an 	`element`. The values inside of an element can be accessed


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

# looping through arrays

      var todos = ["take out trash", "buy tp", "feed cat"]

      for (var i = 0; i < todos.length; i++){
        console.log(todos[i])
      }
