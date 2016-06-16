### objectives

- to create if, if else, switch statements
- to use relational operators
- to create a switch case
- to describe true, false, truth-y and false-y
- to use boolean logic

### intro

decision making will be a crucial part of our early computer programs.
for example they allow us to manage the `state` of our program. a very straight forward example would be tracking the win or loose state of a game.

decisions structures can be nested so you can have a series of predicates that lead to some truth. a predicate is the question that is asked when you write an if statement for example if wanted to ask "is the variable someNum less than 10" then we would write it like so:

    if(someNum < 10){
      // this block code only runs if the predicate evaluates to `true`
    }


### guessing game (we'll need a browser for this example)

let's create a really simple barebones guessing game.
    // this example is broken. please fix it ( ͡° ͜ʖ ͡°)
    secret = 7;
    guess = parseInt(prompt('guess a number between 1 and 10')); //convert string to number

    if(secretNum === guess){ // is secretNum equal to guess
      alert('you won! nice work!')
    }

Let's take a look at the predicate `secretNum === guess` a little closer.

the `===` means equivalency. why `===` and not just two `==` like in other languages. In the case of two expressions being two different types Javascript will try to implicitly convert one type to another, this can be dangerous when you need a string to be a string and a number to be a number.

in addition to equality you have `<`, `>`, and `<=`, `>=`. there's also not equals as well, which is represented as `!=`

### else

Now what if we wanted to tell the user they didn't guess the number right? That's where the `else` keyword comes into play. Now we have the ability to branch our decision so our program can execute multiple blocks of code

    secret = 7;
    guess = parseInt(prompt('guess a number between 1 and 10')); //convert string to number

    if(secret === guess){ // is secretNum equal to guess
      alert('you won! nice work!')
    } else {
      alert('try harder next time!')
    }

### else if

What if your first condition failed but wanted to try another predicate? we can use the `else-if` block for that.

    // broken again ( ͡° ͜ʖ ͡°)
    secret = 7;
    guess = parseInt(prompt('guess a number between 1 and 10')); //convert string to number

    if(secret === guess){ // is secretNum equal to guess
      alert('you won! nice work!')
    } else if( secretNum != guess ) { // same as above but
        alert('try harder next time!')
    } else {
        // anything that fails the the above predicates will go here
    }

### game mod 1: mod the game so it can tell you if you're over or under the secret number

### game mod 2: use a random number generator for the guess variable

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

### game challenge: interactive fiction, create a simple interactive fiction game that leads you through a very very short story. it can be two or three decisions deep. be creative!

http://pr-if.org/play/lostpig/

### switch case

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

    switch (name) {
      case "Syed":
        alert("Hi " + name + "!");
        break;
      case "Liza":
        alert("Hi " + name + "!");
        break;
      case "Ethan":
        alert("Hi " + name + "!");
        break;
      default:
        console.log("Sorry, new phone who dis?");
    }

    alert("have a lovely day!''");

  ### truthy and falsey

  https://developer.mozilla.org/en-US/docs/Glossary/Truthy

  https://developer.mozilla.org/en-US/docs/Glossary/Falsy

  ### boolean logic

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators

  age = parseInt(prompt("what's your age?")); //convert string to number
  name = prompt("what's your sign?")

  if(age === 33 && name === 'Syed' ){ // is secretNum equal to guess
    alert('hey there gemini!')
  } else {
    alert('you are not old enough or you are not syed')
  }

  ### practice create some control structures with || and !
