# objectives

- generate random numbers
- write repeating structures


# intro

Let's start getting to the thick of things. loops! probably one of the most important features in imperative programming languages. But before that let's have some fun generating some random numbers.

# generating random numbers

![](http://thenextweb.com/wp-content/blogs.dir/1/files/2015/12/Untitled-drawing1.png)

Sometimes you need your program to generate information that
isn’t available when you write your program.

One way to solve this problem is to ask your programming language to select a “random number” – from there you can use this number to construct a somewhat random set of running conditions


[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

       Math.random() * (max - min) + min


# problem set 6

- Ask the user to guess a number between 1 and 10. Assume they will enter an Integer.

- Have the program randomly pick a number between 1 and 10 that is your “secret” number (for example, 5)

- If the user types in your secret number, tell them that they win!
- If the user types in a number less than or greater than your secret number, tell them that they’re either above or below the number and to try once again.
- Every time you play, the secret number should change.

# problem 6a

Write a program to ask the user to select one of three options - Rock (r), Paper (p) or Scissors (s)

Use the Math.random() function to select an option for the computer
Determine the winner and print the result.

- Rock beats Scissor    

- Scissor beats Paper    

- Paper beats Rock

# rinse and repeat

 Programmers commonly find that they need to write code that performs the same task over and over again. Let's take a look at our first looping structure.

# the while loop!

While loops are condition-controlled loops. Meaning that there is a predicate (just like an if statement) but the block of code will repeat forever until that predicate is untrue. 

Of course we don't want our program to loop forever so we need to either create a condition where the predicate is false or use the `break` statement.


[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)


# problem 6b

- Rewrite the “guess the number” game we wrote back in the selection statement unit to use a “while” loop

- Allow the user to continually guess a number until they finally get it. Let them know if the number they guessed was too high or too low.


# problem 6c

- Write a program that asks the user for three numbers
- Test those numbers against three “secret” numbers that represent the combination to a virtual padlock.
- If the user gets the numbers right you should let them know that they have gained access to your program
- If not, allow them to continue to enter combinations until they guess correctly
