![Hangman](http://www.roomrecess.com/Pictures/HangmanTitle.png)
# HANGMAN

## Introduction
This weekend you will be creating the popular game of Hangman as a JavaScript browser game!

This is a *big* project compared to anything you've encountered and will likely be a little confusing - but you have the whole, long weekend to work on it AND you have all your classmates to help you along the way, either on slack or in person. Make sure you break the problem down, timebox, and test often.

## Setup
We want to be able to use ` prompt() `, so we'll use the given ` index.html `, ` hangman.js `, and the browser developer tools to test.

To work on the game, open index.html in Chrome, then go to View > Developer > JavaScript Console to play it. Reload the page any time you've saved changes to hangman.js.

Before doing any coding, plan this out carefully! Take more than 5 minutes and try and understand what is being asked of you for each piece of the game.

## Completion
Build a working game and create a Github issue for homework submission by Sunday midnight. While it's up to you how you want to schedule your time, we highly highly highly recommend you take care of yourself mentally, emotionally, and physically rather than struggle into the wee hours of the morn - there's always tomorrow!

## Assignment

More detailed instructions for each of these pieces can be found in the comments in hangman.js.

### Game

Game is an object literal.

#### Attributes

* `guesses`
  * a number
* `guessedLetters`
  * starts as an empty array
* `currentWord`
  * starts as an empty string
* `hangmanWord`
  * starts as an empty array
* `wordsArray`
  * you'll need to fill this with an array of strings, representing the possible words for the computer to choose from for Hangman. See the hangman file for an example.

There are then a number of methods that actually make the game come alive
* `startGame(wordsArray)`
  * Needs to set the values of `guesses` and `guessedLetters`, choose a word at random from the array passed into it, set `currentWord` equal to that word, and set `hangmanWord` equal to an array of underscores (representing unguessed letters). i.e., if the word from the array was "liza" then `currentWord` needs to be equal to "liza" and `hangmanWord` should be ["_", "_", "_", "_"]
  * needs to call `render()` to display the initial state of the game in the console
  * needs to call `promptUser()`, store the result in a variable and then call guess(), passing in the user's chosen letter.
* `render()`: needs to display in the console the game's current state: the hangmanWord, the number of guesses remaining,
  and the letters guessed so far.
* `promptUser`: needs to prompt the user to choose a letter. Then needs to check the `guessedLetters` array to make sure
  that letter hasn't been guessed yet. If it has, this function should `return` the result of calling itself (recursion), i.e., it should `return promptUser()` (actually `this.promptUser()` as hangman.js makes clear). If the letter has NOT been previously tried, then it should return the letter the user picked.
* `guess(letter)`
  * Push the `letter` tried into the array of `guessedLetters` and decrease `guesses` by 1
  * Loop through `currentWord` to see if `letter` is a match. If it is, assign `letter` to appropriate spots in `hangmanWord`
  * Call `isOver()`; if it returns a truthy value, invoke `overMessage()`, else invoke `render()`, prompt a new letter, AND invoke guess with that letter (this is a concept called recursion).
* `isOver()`
  * Returns "victory" if `hangmanWord` has been guessed completely or "defeat" if it hasn't and `guesses` is 0; returns false if neither of those is true.
* `overMessage()`
  * Displays "You win" if `hangmanWord` is complete
  * Displays "You lose" if `guesses` is 0

## Main Program

* prompt the user for a sentence
* start a new game using this string - how can we parse this string with whitespaces into an array of strings without whitespaces? Use as input for game.startGame
* prompt the user
* When the game is over, the game over message should be displayed and the
program should exit.

## Hints

* Can we use `this` anywhere in the game object? (DOUBLE-HINT: we're going to use it throughout!)
* When looping, keep track of the index value!
* Is there a method that will split a string into an array? What input would it take?

##### thanks to wdi-purple-rain for the idea!
